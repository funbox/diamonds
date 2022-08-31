# Changelog

## 8.4.1 (31.08.2022)

Fixed export of [cookieStringToObject](./lib/cookie-string-to-object.ts) -_-"


## 8.4.0 (31.08.2022)

Added [cookieStringToObject](./lib/cookie-string-to-object.ts).


## 8.3.0 (21.12.2021)

Added `bold` mode to [colorize](./lib/colorize.ts).


## 8.2.1 (03.08.2021)

Fixed [pick](./lib/pick.ts) export.


## 8.2.0 (22.07.2021)

Added [capitalize](./lib/capitalize.ts).


## 8.1.1 (10.06.2021)

Fixed several security vulnerabilities:

- [Use of a Broken or Risky Cryptographic Algorithm](https://github.com/advisories/GHSA-r9p9-mrjm-926w) in [elliptic](https://github.com/indutny/elliptic). Updated from 6.5.3 to 6.5.4.

- [Regular Expression Denial of Service](https://github.com/advisories/GHSA-43f8-2h32-f4cj) in [hosted-git-info](https://github.com/npm/hosted-git-info). Updated from 2.8.8 to 2.8.9.

- [Command Injection](https://github.com/advisories/GHSA-35jh-r3h4-6jhm) in [lodash](https://github.com/lodash/lodash). Updated from 4.17.20 to 4.17.21.


## 8.1.0 (19.02.2021)

Support arrays of primitive types in [objectToQueryString](./lib/object-to-query-string.ts).


## 8.0.0 (17.02.2021)

Replaced plain space by non-breaking space in [formatPhoneNumberString](./lib/format-phone-number-string.ts).


## 7.0.0 (16.02.2021)

Changed behavior of [enableBodyScroll](./lib/body-scroll.ts) & [disableBodyScroll](./lib/body-scroll.ts). 

Now they set and clear `width: 100%`, because otherwise page width may change because of `position: fixed`.


## 6.6.0 (05.02.2021)

Added [formatBytes](./lib/format-bytes.ts).


## 6.5.0 (14.01.2021)

Deprecated [getObjectPath](./lib/get-object-path.ts). Please use
[optional chaining](https://github.com/tc39/proposal-optional-chaining) instead.


## 6.4.1 (29.12.2020)

Improved type declarations for [pick](./lib/pick.ts) and [omit](./lib/omit.ts).


## 6.4.0 (10.10.2020)

Added [pick](./lib/pick.ts).


## 6.3.2 (09.10.2020)

Fixed [colorize](./lib/colorize.ts) to wrap only provided string.


## 6.3.1 (09.10.2020)

Fixed negative numbers handle in [getPlural](./lib/get-plural.ts).


## 6.3.0 (08.10.2020)

Added `dim` and `reset` colors to [colorize](./lib/colorize.ts).


## 6.2.1 (05.10.2020)

Removed tslib from dependencies.


## 6.2.0 (29.09.2020)

Added [base64ToUint8Array](./lib/base64-to-uint8array.ts).


## 6.1.0 (12.09.2020)

Added [findLast](./lib/find-last.ts).


## 6.0.0 (24.07.2020)

The package was renamed to `@funboxteam/diamonds` and published on Github.


## 5.0.0 (23.07.2020)

Removed `mock-settings.ts`.


## 4.0.0 (19.06.2020)

Rewrote the lib to TypeScript.

Removed `deepFlatten` & `getHostnameFromString`.


## 3.0.0 (27.02.2020)

Added CommonJS version for scripts to make it possible to use them in Node.js env.

To make it work we had to change [isMobile](./lib/is-mobile.js) notation. For now this helpers exports 
a function that returns value, not the value itself.


## 2.6.0 (06.02.2020)

Added [functions](./lib/mock-settings.js) for ruling mocks settings using `ci-mode=dev` cookie,
which is checked, set or removed for the special domain.


## 2.5.0 (24.12.2019)

Added [get-image-orientation](./lib/get-image-orientation.js).


## 2.4.1 (05.12.2019)

`storage` export was fixed.


## 2.4.0 (04.12.2019)

Added [storage](./lib/storage.js).


## 2.3.0 (01.11.2019)

Added [getDisplayName](./lib/get-display-name.js).


## 2.2.0 (22.10.2019)

Added `sideEffects: false` into package.json to enable webpack's tree shaking.


## 2.1.0 (04.10.2019)

Added [queryStringToObject](./lib/query-string-to-object.js).


## 2.0.0 (23.07.2019)

Added Babel, prepared the package for publishing to npm.

Also renamed the package into @funboxteam/helpers.


## 1.0.1 (08.07.2019)

Renamed the package into @funboxteam/snippets.


## 1.0.0 (03.12.2018)

Initial version.
