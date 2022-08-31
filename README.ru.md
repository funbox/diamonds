# @funboxteam/diamonds

<img align="right" width="192" height="192"
     alt="Set of diamonds"
     src="./logo.png">

[![npm](https://img.shields.io/npm/v/@funboxteam/diamonds.svg)](https://www.npmjs.com/package/@funboxteam/diamonds)

В этом репозитории хранится набор различных хелперов, которые когда-то пригодились нам в проектах,
и возможно ещё пригодятся в будущем.

Все хэлперы независимы друг от друга, а потому при импорте конкретных функций в итоговый бандл будут попадать только они, 
а не вся библиотека.

## Содержание

- [Назначение](#назначение)
- [Установка](#установка)
- [Список хэлперов](#список-хэлперов)
  - [base64ToUint8Array](#base64touint8array)
  - [disableBodyScroll, enableBodyScroll](#disablebodyscroll-enableBodyScroll)
  - [camelToKebab](#cameltokebab)
  - [colorize](#colorize)
  - [cookieStringToObject](#cookiestringtoobject)
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
- [Благодарности](#благодарности)

## Назначение

Когда разработчики работают над проектами, они используют большое количество маленьких функций, которые не связаны 
с проектом контекстуально. Обычно такие функции хранятся в папках вроде `utils` или `helpers`.

Чтобы избавиться от копи-паста таких функций из проекта в проект, мы создали этот пакет.

Все функции, что в нём лежат, не нацелены на то, чтобы быть абсолютно готовыми к непредвиденному использованию.
Они делают то, что заявлено, так, как заявлено, и ничего сверх.

## Установка

Добавить пакет в зависимости:

```sh
npm install --save @funboxteam/diamonds 
```

Импортировать необходимые функции:

```js
import { getUniqueId } from '@funboxteam/diamonds';
```

## Список хэлперов

Вообще легче просто посмотреть исходный код хэлперов, ибо они достаточно маленькие. Но если нужно описание, то вот оно.

### [base64ToUint8Array](./lib/base64-to-uint8array.ts)

Преобразует Base64-строку в [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).

### [disableBodyScroll, enableBodyScroll](./lib/body-scroll.ts)

Первая функция отключает скролл на текущей страницы (с возможностью сохранения текущего местоположения),
а вторая возвращает всё как было, восстанавливая местоположение, если оно было сохранено.

Пригождается, когда нужно, например, отключить скролл при открытии сайдбара, а при закрытии включить. 

### [camelToKebab](./lib/camel-to-kebab.ts)

Переводит строку из camelCase в kebab-case.

### [capitalize](./lib/capitalize.ts)

Приводит первый символ строки к верхнему регистру.

### [colorize](./lib/colorize.ts)

Возвращает переданные параметры в виде строки с цветовыми тегами внутри.

Пригождается, когда нужно раскрасить логи в консоли.

### [cookieStringToObject](./lib/cookie-string-to-object.ts)

Превращает строку с куками (обычно, возвращаемую `document.cookie`) в объект.

### [datauriToBlob](./lib/datauri-to-blob.ts)

Конвертирует DataURI строку в объект Blob. 

Пригождается, когда нужно отправить на сервер изображение, полученное из редактора на Canvas.

### [debounce](./lib/debounce.ts)

Возвращает функцию, которая вызовет колбэк только через указанное количество времени,
прошедшее с момента последнего вызова этой функции.

Пригождается, когда нужно, например, повесить обработчик на скролл,
который вызовется только через N мс после завершения потока событий.

### [deepClone](./lib/deep-clone.ts)

Возвращает подробную копию переданного объекта. Не работает с циклическими ссылками.

Пригождается, когда нужно «глубоко» скопировать объект, т. к. просто `Object.assign` не подходит, 
ибо создаёт только поверхностную копию, и если у объекта есть вложенные объекты, они не копируются, а линкуются.

### [equals](./lib/equals.ts)

Производит «глубокое» сравнение двух переданных параметров.

### [findLast](./lib/find-last.ts)

Возвращает значение последнего найденного в массиве элемента, которое удовлетворяет условию переданному в колбэке.
Или `undefined`, если такого элемента нет.

### [formatBytes](./lib/format-bytes.ts)

Преобразует размер в байтах в KB, MB, GB и т. д.

### [formatNumberString](./lib/format-number-string.ts)

Форматирует число (или корректную строку с числом) по правилам русской типографики.

Пригождается, когда нужно отформатировать, например, стоимость чего-то.

### [formatPhoneNumberString](./lib/format-phone-number-string.ts)

Форматирует число (или корректную строку с числом) по маске мобильных номеров телефонов РФ.

### [getBrowserScrollbarWidth](./lib/get-browser-scrollbar-width.ts)

Возвращает ширину скроллбара в браузере.

### [getDisplayName](./lib/get-display-name.ts)

Используется при формировании свойства
[displayName](https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging)
для HOC-компонентов в Реакте.

### [getImageOrientation](./lib/get-image-orientation.ts)

Извлекает из EXIF информацию об ориентации изображения.

Пример использования:

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

Возвращает свойство из объекта по указанному «пути».

Пригождается, когда приходится работать с объектами с большой вложенностью,
и не хочется писать длинные условия. 
`getObjectPath(obj, 'key1.key2.key3')` и готово. 

### [getPlural](./lib/get-plural.ts)

Выбирает и возвращает правильное название единиц для переданного числа.

Пригождается, когда в зависимости от числа нужно менять связанное с ним слово:
«1 день», «2 дня», «5 дней». 

### [getRandomNum](./lib/get-random-num.ts)

Возвращает [псевдослучайное число](https://ru.wikipedia.org/wiki/Генератор_псевдослучайных_чисел) в указанном диапазоне.

### [getUniqueId](./lib/get-unique-id.ts)

Возвращает строку сгенерированную по принципу «префикс-число», 
где префикс — это значение переданного параметра (или «id»),
а число каждый раз уникальное.

Пригождается, когда нужно, например, контролам на странице выдать уникальные ID,
чтобы связать их с лэйблами.  

### [hexToRgb](./lib/hex-to-rgb.ts)

Переводит строку с HEX-нотацией цвета в объект с RGB-нотацией.

### [isElementInViewport](./lib/is-element-in-viewport.ts)

Возвращает `true`, если переданный элемент полностью 
(или нет, в зависимости от переданного параметра) виден во вьюпорте пользователя. 

### [isEmailValid](./lib/is-email-valid.ts)

Возвращает `true`, если переданная строка — валидный адрес эл. почты.

### [isInputTypeSupported](./lib/is-input-type-supported.ts)

Проверяет поддержку браузером переданного значения атрибута `type` блока `input`.

Пригождается, когда нужно проверить, поддерживает ли браузер какой-то специфический тип `input`
(в старых или мобильных браузерах, например). 

### [isMobile](./lib/is-mobile.ts)

Возвращает `true`, если по UA кажется, что браузер пользователя мобильный.

Пригождается, когда не нужна точная проверка (используемые внутри проверки довольно простые).

### [kebabToCamel](./lib/kebab-to-camel.ts)

Переводит строку из kebab-case в camelCase.

### [objectToQueryString](./lib/object-to-query-string.ts)

Превращает объект, в котором значения ключей представлены примитивными типами или массивами
примитивных типов, в query-строку.

### [omit](./lib/omit.ts)

Берёт передаваемый объект, и возвращает новый такой же, но без перечисленных ключей.

Типичный пример использования в Реакте: `omit(this.props, 'mods', 'mix')`.

### [pick](./lib/pick.ts)

Берёт передаваемый объект, и возвращает новый такой же, 
но только с перечисленными ключами, опуская все остальные.

### [queryStringToObject](./lib/query-string-to-object.ts)

Превращает query-строку в объект.

### [rgbToHex](./lib/rgb-to-hex.ts)

Переводит объект с RGB-нотацией цвета в строку с HEX-нотацией.

### [storage](./lib/storage.ts)

Предоставляет возможность безопасного использования `localStorage`.

### [throttle](./lib/throttle.ts)

Превращает переданный колбэк в функцию, при вызове которой колбэк вызовется только в том случае,
если прошло указанное количество времени.

Пригождается, когда нужно, например, отправлять данные при скролле,
но делать это не мгновенно, а каждые N мс, чтобы не плодить кучу запросов. 

## Благодарности

Клёвую картинку для репозитория нарисовал [Игорь Гарибальди](http://pandabanda.com/).

[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_centered.svg)](https://funbox.ru)
