## jQuery HTML5 Prefetch Plugin

@version: 0.1

This adds prefetch link tags in the header based on selected elements assigned when calling this function.

### How To Use

Include jQuery and then include the FetchIt plugin. Next call the FetchIt plugin by selecting the urls you would like to like below:

```javascript
$('.prefetch-urls').fetchIt();
```

Here is a more advanced look at how to use it:

```javascript
(function ($) {
    $(document).ready(function () {
        // Attach fetchIt to all links inside the ul#links
        $('#links').find('a').fetchIt();
    });
}(jQuery));
```

## Examples

There is a folder called examples with how this plugin works.
