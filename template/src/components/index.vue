
<template>
  <v-card flat>
    <v-card-text>\{{ $t('component.title') }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  //https://kazupon.github.io/vue-i18n/guide/component.html#component-based-localization
  i18n: {
    messages: {
      en: {
        component: {
          title: "My component"
        }
      },
      es: {
        component: {
          title: "Mi componente"
        }
      }
    }
  },
  name: "{{ name }}",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style scoped>
</style>

