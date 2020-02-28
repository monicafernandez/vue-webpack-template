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
        <component></component>
      </v-card-text>
    </v-card>
  </v-app>
</template>
<script>
import config from "../meta-widget.json";
import component from "./components/wiwi.vue";

export default {
  name: "WIWizard",
  components: {
    component
  },
  computed: {
    title() {
      return config.actions[Object.keys(config.actions)[0]][0];
    }
  }
};
</script>
<style scoped>
</style>
