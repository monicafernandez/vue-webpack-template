<template>
  <v-app>
    <v-card>
      <v-card-title class="padding-5">
        <v-toolbar flat>
          <v-toolbar-title>
            <h2 class="no-padding no-margin primary--text">\{{ title }}</h2>
          </v-toolbar-title>
        </v-toolbar>
      </v-card-title>
      <v-card-text>
        <my-component></my-component>
      </v-card-text>
    </v-card>
  </v-app>
</template>
<script>
import config from "../package.json";
import myComponent from "./components/index.vue";

export default {
  name: "demo",
  components: {
    myComponent
  },
  computed: {
    title() {
      return config.name;
    }
  }
};
</script>
<style scoped>
</style>
