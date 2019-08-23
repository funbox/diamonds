# @funboxteam/helpers

This is a set of helpers that we use in the current projects 
and will use in the future ones. 

## Installation

Add the package to deps:

```sh
npm install --save @funboxteam/helpers 
```

Import functions:

```js
import { getUniqueId } from '@funboxteam/helpers';
```

## List of helpers

### [disableBodyScroll, enableBodyScroll](./lib/body-scroll.js)

Two functions: the first one disables scroll (but saving the current scrolled state),
the second one enables the scroll and restores its state.

It's useful when one wants to disable scroll while opening sidebar and enable it while closing. 

### [camelToKebab](./lib/camel-to-kebab.js)

Converts camelCase string into kebab-case.

### [checkInputTypeSupport](./lib/check-input-type-support.js)

Checks browser support of the passed `type` attribute value for `input` tag.

It's useful when one is dealing with old browsers.

### [colorize](./lib/colorize.js)

Returns passed params as a colored string.

It's useful when one wants to colorize logs in terminal.

### [datauriToBlob](./lib/datauri-to-blob.js)

Converts DataURI string into Blob instance.

It's useful when one needs to send an image from online editor to the server.

### [debounce](./lib/debounce.js)

Returns a debounced function that delays invoking callback until after passed seconds have elapsed since the last time 
the debounced function was invoked. 

It's useful when one have to handle scroll events but want to fire callback after the events flow finishes.

### [deepClone](./lib/deep-clone.js)

Returns deep clone of the passed object. Does not work with circular links.

It's useful when one needs to deeply cone an object. `Object.assign` does not work in this case,
because it creates shadow copy.

### [deepFlatten](./lib/deep-flatten.js)

Transforms n-dimensional array into one-dimensional. 

### [equals](./lib/equals.js)

Deeply compares passed params.

### [formatNumberString](./lib/format-number-string.js)

Formats a number (or a string with number inside) using the passed format.

By default:
  
  - digit group separator (`space`): ` ` (plain space),
  - decimal separator (`delimiter`): ',' (comma),
  - minus sign (`minus`): '−' (minus, U+2212).
  
It's useful when one needs to format, let's say, the cost of something.

### [formatPhoneNumberString](./lib/format-phone-number-string.js)

Formats a number (or a string with number inside) by mask of Russian MSISDNs. 

### [getBrowserScrollbarWidth](./lib/get-browser-scrollbar-width.js)

Returns browser scrollbar width.

### [getHostnameFromString](./lib/get-hostname-from-string.js)

Extracts domain from the string.

It's useful when one need to do this in the 
[browsers without URL support](https://developer.mozilla.org/en-US/docs/Web/API/URL).

### [getObjectPath](./lib/get-object-path.js)

Gets the value at path of object.

It's useful when one have to work with highly nested objects and don't want to write long conditionals.
`getObjectPath(obj, 'key1.key2.key3')` and the work is done. 

### [getPlural](./lib/get-plural.js)

Picks and returns a correct unit name for the passed number (according to Russian lang rules).

It's useful when it's important to pick correct unit name. E.g. “1 day”, “2 days”, etc.

### [getRandomNum](./lib/get-random-num.js)

Returns [pseudorandom number](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) from the passed range.

### [getUniqueId](./lib/get-unique-id.js)

Returns a string generated by the pattern `prefix-number` where prefix is the passed param,
but number is unique.

It's useful when you need a unique string that can be namespaced. E.g. for generating unique IDs 
of the DOM elements for creating relations between them and their labels.

### [hexToRgb](./lib/hex-to-rgb.js)

Converts HEX color to RGB.

### [isElementInViewport](./lib/is-element-in-viewport.js)

Returns `true` when the passed DOM node is visible in the viewport 
(fully or partially depending on the params). 

### [isEmailValid](./lib/is-email-valid.js)

Returns `true` when the passed string is a valid email.

### [isMobile](./lib/is-mobile.js)

Returns `true` when UA is similar to mobile.

It is useful when one doesn't need a precise check (the checks that are used inside the script are quite simple).

### [kebabToCamel](./lib/kebab-to-camel.js)

Converts kebab-case string into camelCase.

### [objectToQueryString](./lib/object-to-query-string.js)

Converts the passed object which contains primitive values into the query string. 

### [omit](./lib/omit.js)

Returns the passed object without the passed keys.

E.g. in React: `omit(this.props, 'mods', 'mix')`.

### [rgbToHex](./lib/rgb-to-hex.js)

Transforms RBG color into HEX.

### [throttle](./lib/throttle.js)

Transforms the passed callback into the functions that delays callback firing.

It's useful when one wants to react on scroll but only when user makes a pause between scrolling. 
