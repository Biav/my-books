<template>
  <div class="text-xs-center">
    <v-progress-circular
      :rotate="-90"
      :size="140"
      :width="15"
      :value="value"
      color="primary"
    >
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
            <p v-on="on">{{ value / 10 }} / {{ goal }}</p>
            <span>Books</span>
        </template>
         <span>Goals of Books</span>
    </v-tooltip>

    </v-progress-circular>
  </div>
</template>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>

<script>
  export default {
    data () {
      return {
        interval: {},
        value: 0,
        goal: this.$store.getters.goal
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 40) {
          return;
        }
        this.value += 10
      }, 100)
    }
  }
</script>