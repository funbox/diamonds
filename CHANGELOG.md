# Changelog

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
