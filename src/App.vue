<template>
  <v-app>
    <app-header></app-header>
    <router-view></router-view>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Books from './components/Books.vue'

export default {
  data () {
    return {
      //
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-books': Books
  }
}
</script>
