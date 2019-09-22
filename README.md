# eslint-plugin-iu

personal plugin for li.li

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-iu`:

```
$ npm install eslint-plugin-iu --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-iu` globally.

## Usage

Add `iu` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "iu"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "iu/async-arrow-function": 2
    }
}
```

## Supported Rules

* iu/async-arrow-function

在iOS 10.3及以下的浏览器中不支持在`class`中使用`async arrow function`。详情可见[webkit bug](https://bugs.webkit.org/show_bug.cgi?id=166879)
