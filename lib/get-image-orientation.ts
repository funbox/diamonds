// https://stackoverflow.com/a/32490603

const NOT_JPEG = -2;
const NOT_DEFINED = -1;

// Image orientation: https://www.daveperrett.com/articles/2012/07/28/exif-orientation-handling-is-a-ghetto/
//   1       2        3      4         5            6           7          8
//
// 888888  888888      88  88      8888888888  88                  88  8888888888
// 88          88      88  88      88  88      88  88          88  88      88  88
// 8888      8888    8888  8888    88          8888888888  8888888888          88
// 88          88      88  88
// 88          88  888888  888888

type imageOrientation = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type CallbackType = (orientation: imageOrientation | typeof NOT_DEFINED | typeof NOT_JPEG) => void;

export default (file: Blob, callback: CallbackType): void => {
  const reader = new FileReader();

  reader.onload = (): void => {
    const view = new DataView(reader.result as ArrayBuffer);

    if (view.getUint16(0, false) !== 0xFFD8) {
      return callback(NOT_JPEG);
    }

    const length = view.byteLength;
    let offset = 2;

    while (offset < length) {
      if (view.getUint16(offset + 2, false) <= 8) return callback(-1);

      const marker = view.getUint16(offset, false);
      offset += 2;

      if (marker === 0xFFE1) {
        const checkExifAsciiString = view.getUint32(offset += 2, false) !== 0x45786966;

        if (checkExifAsciiString) {
          return callback(NOT_DEFINED);
        }

        const little = view.getUint16(offset += 6, false) === 0x4949;
        offset += view.getUint32(offset + 4, little);
        const tags = view.getUint16(offset, little);
        offset += 2;

        for (let i = 0; i < tags; i++) {
          if (view.getUint16(offset + (i * 12), little) === 0x0112) {
            return callback(view.getUint16(offset + (i * 12) + 8, little) as imageOrientation);
          }
        }
      } else if ((marker & 0xFF00) !== 0xFF00) { // eslint-disable-line no-bitwise
        break;
      } else {
        offset += view.getUint16(offset, false);
      }
    }

    return callback(-1);
  };

  reader.readAsArrayBuffer(file);
};
