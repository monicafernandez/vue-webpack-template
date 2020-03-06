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

## Generate version

This project offers the following script that version the project using [npm-version](https://docs.npmjs.com/cli/version)

``` shell
$ npm version [ major | minor | patch ]
```

## Utils for development

The project contains some tools (components and plugins) contained in the web where the wiwi will be installed.

This facilitates the autonomous development of the wiwi.

Listed below are these tools with examples of how to use them in our wiwi.

### $jsonPath

``` javascript
export default {
  name: 'exampleJsonPath',
  data() {
    return {
      example: {
        one: '1',
        two: '2'
      }
    }
  }
  computed: {
    return this.$jsonPath(this.example, '$.one')[0]
    //return 1
  }
}
```

### $api 

> https://github.com/amplia-iiot/opengate-js

1. Configure 

``` javascript
// src/plugins/store.js
{
  apiKey: '@@API_KEY@@',
  url: '@@NORTH_API@@',
  timeout: 60000,
  south: {
    url: '@@SOUTH_API@@'
  }
}

```

2. Use

``` javascript
import { mapGetters } from "vuex";

export default {
  name: 'exampleApi',
  data() {
    return {
      entries: []
    }
  },
  methods: {
    async search(){
      this.entries.splice(0, this.entries.length);
      try {
        const result = await this.builder.build().execute();
        if (result.statusCode !== 204) {
          this.entries = result.data.entities;
        }
      } catch (err) {
        console.log(err);
      } finally {
      }
    }
  },
  computed: {
    //https://vuex.vuejs.org/guide/getters.html#the-mapgetters-helper
    ...mapGetters({ api: "$api" }),
    builder() {
      return this.api.entitiesSearchBuilder();
    }
  }
}
```

