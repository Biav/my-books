<template>
  <div>
    <v-toolbar color="indigo lighten-1" dark tabs>

      <v-toolbar-title>My Books</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs centered color="indigo lighten-1" slider-color="yellow"> 
          <v-tab to="/">Books</v-tab>
          <v-tab to="/timeline">Timeline</v-tab> 
        </v-tabs>
      </template>
    </v-toolbar>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>

