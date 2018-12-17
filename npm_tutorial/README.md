#### Coomands used

`npm init`
> Creates package.json file. Package.json file acts as the metadata for our application.  

`npm install <<package_name>>`
> to install packages. This creates a folder node_modules if not already present and dowlaods the required 
packages. Packages can be found at npmjs.org

`npm uninstall <<package_name>>`
> Uninstalls the packages downloaded. Get the package name from package.json

#### Semantic versioning
> Versioning of the dependencies like `lodash ^4.17.11`
* 4 -- major version -- Major changes, may be some methods are removed
* 17 -- minor version -- small enhancements and deprecations -- non breaking changes
* 11 -- patch -- bug fixes
* ^ -- dont make major updates only update minor or patch
* ~ -- update only patchsets
* no special character -- no updates