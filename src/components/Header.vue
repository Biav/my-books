<template>
  <div>
    <v-toolbar
      color="cyan"
      dark
      tabs
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>

      <template v-slot:extension>
        
        <v-tabs
          v-model="model"
          centered
          color="cyan"
          slider-color="yellow"
        > 
          <v-tab to="/books">Books</v-tab>
          <v-tab to="/setting">Settings</v-tab>
          
        </v-tabs>
      </template>
    </v-toolbar>
  </div>
</template>