#angular-flip directive
***
[AngularJS](http://angularjs.org/) directive that allows to achieve 3D card flip
effect.

##Quick start
***

Load `angular-flip.css` and `angular-flip.js` into your html:
```html
<link rel="stylesheet" href="/path/to/angular-flip.css" />
<script src="/path/to/angular-flip.js"></script>
```

Inject `angular-flip` into your application module:
```javascript
var app = angular.module('MyApp', ['angular-flip']);
```

Have fun:
```html
<!-- Vertical flip -->
<flip flip-toggle>
    <flip-front>Visible content goes there</flip-front>
    <flip-back>The other side</flip-back>
</flip>
<!-- Horizontal flip -->
<flip flip-toggle horizontal>
    <flip-front>Visible content goes there</flip-front>
    <flip-back>The other side</flip-back>
</flip>
```

##License
***
`angular-flip` uses the [MIT](http://opensource.org/licenses/MIT) license
