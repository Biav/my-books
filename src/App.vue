<template>
  <v-app>
    <app-header></app-header>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  data () {
    return {
      //
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>
