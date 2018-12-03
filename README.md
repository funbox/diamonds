# Snippets

This is a set of snippets that we use in the current projects 
and will use in the future ones. 

## List of snippets

### [body-scroll](./lib/body-scroll.js)

Exports two functions: the first one disables scroll (but saving the current scrolled state),
the second one enables the scroll and restores its state.

It's useful when one wants to disable scroll while opening sidebar and enable it while closing. 

### [check-input-type-support](./lib/check-input-type-support.js)

Checks browser support of the passed `type` attribute value for `input` tag.

It's useful when one is dealing with old browsers.

### [datauri-to-blob](./lib/datauri-to-blob.js)

Converts DataURI string into Blob instance.

It's useful when one needs to send an image from online editor to the server.

### [format-number-string](./lib/format-number-string.js)

Formats a number (or a string with number inside) using the passed format.

By default:
  
  - digit group separator (`space`): ` ` (plain space),
  - decimal separator (`delimiter`): ',' (comma),
  - minus sign (`minus`): '−' (minus, U+2212).
  
It's useful when one needs to format, let's say, the cost of something.

### [format-phone-number-string](./lib/format-phone-number-string.js)

Formats a number (or a string with number inside) by mask of Russian MSISDNs. 

### [get-hostname-from-string](./lib/get-hostname-from-string.js)

Extracts domain from the string.

It's useful when one need to do this in the 
[browsers without URL support](https://developer.mozilla.org/en-US/docs/Web/API/URL).

### [get-object-path](./lib/get-object-path.js)

Gets the value at path of object.

It's useful when one have to work with highly nested objects and don't want to write long conditionals.
`getObjectPath(obj, 'key1.key2.key3')` and the work is done. 

### [get-plural](./lib/get-plural.js)

Picks and returns a correct unit name for the passed number (according to Russian lang rules).

It's useful when it's important to pick correct unit name. E.g. “1 day”, “2 days”, etc.

### [get-random-num](./lib/get-random-num.js)

Returns [pseudorandom number](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) from the passed range.

### [get-unique-id](./lib/get-unique-id.js)

Returns a string generated by the pattern `prefix-number` where prefix is the passed param,
but number is unique.

It's useful when you need a unique string that can be namespaced. E.g. for generating unique IDs 
of the DOM elements for creating relations between them and their labels.

### [is-email-valid](./lib/is-email-valid.js)

Returns `true` when the passed string is a valid email.

### [is-mobile](./lib/is-mobile.js)

Returns `true` when UA is similar to mobile.

It is useful when one doesn't need a precise check (the checks that are used inside the script are quite simple).
