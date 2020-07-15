# CBelixir
This is a ColdBox Elixir example implementing: custom css, custom, JS, and 3rd party libraries : jquery, Bootstraps and Datatables


### Recreate this project from scratch
1. Create new app from template: cbtemplate-elixir
```
box install cbtemplate-elixir
```
2. Install Node_modules and libraries you want
```
npm install [library]
```
3. Create any resources you want to bundle (/resources/assets/)

4. Configure webpack.config.js
The resources you specified  from /resources/assets/ will be bundle up in the folder /includes/

5. Run webpack Magic
There are 3 prebuild scripts you can use: dev, watch, or prod depending on what you ant
```
npm run [dev|watch|prod] 
```
Make sure Webpack magic compiles and verify that it bundle the files in the includes folder as expected



### Resources

ColdBox Elixir template
https://www.forgebox.io/view/cbtemplate-elixir

Coldbox Elixir Documentation
https://coldbox-elixir.ortusbooks.com/

WebPack for beginners
https://www.youtube.com/watch?v=MpGLUVbqoYQ

JS class Import Export:
https://www.youtube.com/watch?v=ananPWEdfDA

Calling a WebPack + Babel transpiled class from outside its scope.
https://itnext.io/calling-a-es6-webpacked-class-from-outside-js-scope-f36dc77ea130

USING 3RD PARTY PACKAGES LIKE JQUERY| Webpack 2 Basics Tutorial
https://www.youtube.com/watch?v=IYuh8hIyvfE

