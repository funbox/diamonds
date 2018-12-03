# Snippets

This is a set of snippets that we use in the current projects 
and will use in the future ones. 

## List of snippets

### [check-input-type-support](./lib/check-input-type-support.js)

Checks browser support of the passed `type` attribute value for `input` tag.

It's useful when one is dealing with old browsers.

### [datauri-to-blob](./lib/datauri-to-blob.js)

Converts DataURI string into Blob instance.

It's useful when one needs to send an image from online editor to the server.

### [get-hostname-from-string](./lib/get-hostname-from-string.js)

Extracts domain from the string.

It's useful when one need to do this in the 
[browsers without URL support](https://developer.mozilla.org/en-US/docs/Web/API/URL).
