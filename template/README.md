# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification (webpack)
yarn run build
```

or

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification (webpack)
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Install wiwi on web OpenGate UX

> Use axios: https://github.com/axios/axios

Installation and management wiwi on the web OpenGate UX is done through the following commands:

**Register**

``` bash
$ yarn run register
```

or

``` bash
$ npm run register
```

**Update**

``` bash
$ yarn run update
```

or

``` bash
$ npm run update
```

**Delete**

``` bash
$ yarn run delete
```

or 

``` bash
$ npm run delete
```

They will ask for the following information:

1. Type url of api-web (http://localhost:3977): default http://localhost:3977
2. domain: domain of user that exists in the platform OpenGate
3. user name: user that exists in the platform OpenGate
4. password: password of user

## Generate version

This project offers the following script that version the project using [npm-version](https://docs.npmjs.com/cli/version)

``` shell
$ npm version [ major | minor | patch ]
```



