<template>
  <div>
    <v-toolbar color="cyan" dark tabs>
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title>My Books</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs centered color="cyan" slider-color="yellow"> 
          <v-tab to="/">Books</v-tab>
          <v-tab to="/goals">Goals</v-tab> 
        </v-tabs>
      </template>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>