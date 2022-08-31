# @funboxteam/diamonds

<img align="right" width="192" height="192"
     alt="Set of diamonds"
     src="./logo.png">

[![npm](https://img.shields.io/npm/v/@funboxteam/diamonds.svg)](https://www.npmjs.com/package/@funboxteam/diamonds)

This is a set of helpers that we use in the current projects and will probably use in the future ones. 

All helpers are independent of each other, which means that your project's bundle won't be bloated by useless code. 

[По-русски](./README.ru.md)

## Contents

- [Rationale](#rationale)
- [Installation](#installation)
- [List of helpers](#list-of-helpers)
  - [base64ToUint8Array](#base64touint8array)
  - [disableBodyScroll, enableBodyScroll](#disablebodyscroll-enableBodyScroll)
  - [camelToKebab](#cameltokebab)
  - [colorize](#colorize)
  - [datauriToBlob](#datauritoblob)
  - [debounce](#debounce)
  - [deepClone](#deepclone)
  - [equals](#equals)
  - [findLast](#findLast)
  - [formatBytes](#formatBytes)
  - [formatNumberString](#formatnumberstring)
  - [formatPhoneNumberString](#formatphonenumberstring)
  - [getBrowserScrollbarWidth](#getbrowserscrollbarwidth)
  - [getDisplayName](#getdisplayname)
  - [getImageOrientation](#getimageorientation)
  - [getObjectPath](#getobjectpath)
  - [getPlural](#getplural)
  - [getRandomNum](#getrandomnum)
  - [getUniqueId](#getuniqueid)
  - [hexToRgb](#hextorgb)
  - [isElementInViewport](#iselementinviewport)
  - [isEmailValid](#isemailvalid)
  - [isInputTypeSupported](#isinputtypesupported)
  - [isMobile](#ismobile)
  - [kebabToCamel](#kebabtocamel)
  - [objectToQueryString](#objecttoquerystring)
  - [omit](#omit)
  - [pick](#pick)
  - [queryStringToObject](#querystringtoobject)
  - [rgbToHex](#rgbtohex)
  - [storage](#storage)
  - [throttle](#throttle)
- [Credits](#credits)

## Rationale

When developers create projects they use a lot of small functions that are not connected to the project itself.
Usually such functions are stored in folders like `utils` or `helpers`. 

To prevent copy-pasting between a huge amount of projects we've created this package.

These functions are not aimed to be absolutely safe to unexpected usage. 
They do exactly what they say they do, and nothing else.  

## Installation

Add the package to deps:

```sh
npm install --save @funboxteam/diamonds 
```

Import functions:

```js
import { getUniqueId } from '@funboxteam/diamonds';
```

## List of helpers

It's easier to check every helper's source code rather than reading docs. But if you want some, here they are. 

### [base64ToUint8Array](./lib/base64-to-uint8array.ts)

Converts Base64 string to a [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).

### [disableBodyScroll, enableBodyScroll](./lib/body-scroll.ts)

The first function disables scroll on the current page with the possibility to save the current scrolled position,
the second one enables the scroll and restores its position if it was saved.

It's useful when you want to disable scroll e.g. while opening sidebar and enable it while closing. 

### [camelToKebab](./lib/camel-to-kebab.ts)

Converts camelCase string into kebab-case.

### [capitalize](./lib/capitalize.ts)

Change the passed strings's first letter case to upper.

### [colorize](./lib/colorize.ts)

Returns passed params as string with color tags inside.

It's useful when you want to colorize logs in terminal.

### [cookieStringToObject](./lib/cookie-string-to-object.ts)

Converts cookie string (usually, the one you get from `document.cookie`) into an object.

### [datauriToBlob](./lib/datauri-to-blob.ts)

Converts DataURI string into Blob instance.

It's useful when you need to send an image from online editor to the server.

### [debounce](./lib/debounce.ts)

Returns a debounced function that delays invoking callback until passed seconds have elapsed since the last time 
the debounced function was invoked. 

It's useful when you have to handle flow of events but want to fire callback after the flow finishes.

### [deepClone](./lib/deep-clone.ts)

Returns deep clone of the passed object. Does not work with circular links.

It's useful when you need to deeply clone an object. `Object.assign` does not work in this case,
because it creates a shadow copy.

### [equals](./lib/equals.ts)

Deeply compares passed params.

### [findLast](./lib/find-last.ts)

Returns the value of the last element in the provided array that satisfies the provided testing function.
Otherwise `undefined`.

### [formatBytes](./lib/format-bytes.ts)

Converts size in bytes to KB, MB, GB, etc.

### [formatNumberString](./lib/format-number-string.ts)

Formats a number (or a string with a number inside) using the passed format.

It's useful when you need to format, let's say, the cost of something.

### [formatPhoneNumberString](./lib/format-phone-number-string.ts)

Formats a number (or a string with a number inside) by the mask of Russian MSISDNs. 

### [getBrowserScrollbarWidth](./lib/get-browser-scrollbar-width.ts)

Returns browser scrollbar width.

### [getDisplayName](./lib/get-display-name.ts)

Returns [displayName](https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging)
for React HOC.

### [getImageOrientation](./lib/get-image-orientation.ts)

Extracts orientation from the passed images EXIF.

Example:

```js
getImageOrientation.call(this, image, orientation => {
  let rotate;

  switch (orientation) {
    case 8:
      rotate = 270;
      break;
    case 6:
      rotate = 90;
      break;
    case 3:
      rotate = 180;
      break;
    default:
      rotate = 0;
  }

  this.setState({ rotate });
});
```

### [getObjectPath](./lib/get-object-path.ts)

Gets the value at path of object.

It's useful when you have to work with highly nested objects and don't want to write long conditionals.
`getObjectPath(obj, 'key1.key2.key3')` and the work is done. 

### [getPlural](./lib/get-plural.ts)

Picks and returns a correct unit name for the passed number (according to Russian lang rules).

It's useful when it's important to pick correct unit name. E.g. “1 day”, “2 days”, etc.

### [getRandomNum](./lib/get-random-num.ts)

Returns [pseudorandom number](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) from the passed range.

### [getUniqueId](./lib/get-unique-id.ts)

Returns a string generated by the pattern `prefix-number` where prefix is the passed param,
but number is unique.

It's useful when you need a unique string that can be namespaced. E.g. for generating unique IDs for DOM elements.

### [hexToRgb](./lib/hex-to-rgb.ts)

Converts HEX color string to RGB object.

### [isElementInViewport](./lib/is-element-in-viewport.ts)

Returns `true` when the passed DOM node is visible in the viewport 
(fully or partially depending on the params). 

### [isEmailValid](./lib/is-email-valid.ts)

Returns `true` when the passed string is a valid email.

### [isInputTypeSupported](./lib/is-input-type-supported.ts)

Checks browser support of the passed `type` attribute value for `input` tag.

It's useful when you deal with old browsers.

### [isMobile](./lib/is-mobile.ts)

Returns `true` when UA is similar to mobile.

It is useful when you don't need a precise check (the checks that are used inside the script are quite simple).

### [kebabToCamel](./lib/kebab-to-camel.ts)

Converts kebab-case string into camelCase.

### [objectToQueryString](./lib/object-to-query-string.ts)

Converts the passed object which contains primitive values or arrays of primitive values into the query string. 

### [omit](./lib/omit.ts)

Returns shallow copy of the passed object but without the passed keys.

E.g. in React: `omit(this.props, 'mods', 'mix')`.

### [pick](./lib/pick.ts)

Returns shallow copy of the passed object but with the passed keys only.

### [queryStringToObject](./lib/query-string-to-object.ts)

Converts query-string into object.

### [rgbToHex](./lib/rgb-to-hex.ts)

Transforms RBG color object into HEX string.

### [storage](./lib/storage.ts)

Makes it possible to use `localStorage` safely. 

### [throttle](./lib/throttle.ts)

Transforms the passed callback into the function that delays callback firing.

It's useful when you want to react on some events but no than once an N ms. 

## Credits

Cute picture for the project was made by [Igor Garybaldi](http://pandabanda.com/).

[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_centered.svg)](https://funbox.ru)
