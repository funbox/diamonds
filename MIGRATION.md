# Migrations

## 6.6.0 → 7.0.0

If your project used [enableBodyScroll](./lib/body-scroll.ts) or [disableBodyScroll](./lib/body-scroll.ts),
make sure it works correctly now, because they set and clear `width: 100%` to `body` 
([#12](https://github.com/funbox/diamonds/pull/12)).


## 5.0.0 → 6.0.0

Use `@funboxteam/diamonds` instead of `@funboxteam/helpers`.


## 4.0.0 → 5.0.0

`areMocksEnabled`, `enableMocks`, and `disableMocks` were removed from the package. So they will be replaced 
on something else in the dependant projects. 


## 3.0.0 → 4.0.0

`deepFlatten` and `getHostnameFromString` helpers should be replaced on something else, because they were removed 
from the package.


## 2.6.0 → 3.0.0

In case of using any workarounds for Node.js env, it's possible to remove them. 
The package works with Node.js now.

If [isMobile](./lib/is-mobile.js) is used in a project, its invoking should be rewritten, because for now the helper
exports a function instead of a value.


## 1.0.1 → 2.0.0

Instead of copy-pasting scripts from the repo into the projects the package from the npm should be used.
