# angular-convert-jp

Convert Japanese full-width/half-width characters in a text box.

# usage

Add the module to your application.

```js:
angular.module('myApp', ['ngConvertJp']);
```

Add the attribute to a text box.

```html:
<input type="text" ng-convert-jp ng-model="...">
```

# advanced usage

Only convert from half-width kana to full-width.

```html:
<input type="text" ng-convert-jp="K" ng-model="...">
```

Only convert from full-width alphanumeric to half-width.

```html:
<input type="text" ng-convert-jp="a" ng-model="...">
```


# known issue

- dakute, han-dakuten not supported.



