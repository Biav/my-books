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
    <router-view></router-view>
  </div>
</template>