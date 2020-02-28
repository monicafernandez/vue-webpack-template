<template>
  <v-card color="grey lighten-1" class="mb-12" height="200px">\{{ email }}</v-card>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "one",
  computed: {
    ...mapState({
      email: state => state.user.email
    })
  }
};
</script>
