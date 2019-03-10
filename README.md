# Vue Template Loader Jest

With vue-template-loader it is possible to extract the html from a typescript single file component to a separate
`.html` file (see https://github.com/ktsn/vue-template-loader). But loading the components in jest tests is not possible
anymore.

Here this library comes into play. It is basically just a custom transformer for jest that is using
 `vue-template-loader` to compile the template.
 
 ## Reception
 
 This is untested at all and I only care about my issues. Contributors are highly welcome. Feel free to open pull
 requests and issues. Write when you are interested in maintaining it.
 
 ## Usage
 
 Just install this library and add it to your jest config `.*html: 'vue-template-loader-jest'`. Example:
 
 ```json
 {
    "jest": {
        "moduleFileExtensions": [
          "js",
          "ts",
          "html"
        ],
        "transform": {
          "^.+\\.tsx?$": "ts-jest",
          "^.+\\.html$": "vue-template-loader-jest"
        },
        "moduleNameMapper": {
          "@view/(.*)": "<rootDir>/resources/views/components/$1"
        }
    }
}
``` 

> As you can see I'm also using a custom alias for views.
