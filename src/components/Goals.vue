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
            <p v-on="on">{{ total }} / {{ goal }}</p>
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
    props: ["total"],
    data () {
      return {
        interval: {},
        total: '',
        value: 0,
        goal: this.$store.getters.goal
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      self = this;
      self.$store.dispatch('getMyBooks')
                 .then((response)=>
                    setTimeout(function(){
                      self.total = self.$store.getters.total;
                      self.interval = setInterval(() => {
                      if (self.value === self.total * 10) {
                        return;
                      }
                      self.value += 10
                      }, 100)
                    },1000)
                  );
                    
    }
  }
</script>