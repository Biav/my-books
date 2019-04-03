<template>
  <div>
  <v-app>
    <v-content>
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex xs6 sm4 md3 xl2 class="lg5-custom" v-for="book in books">
            <v-card >
              <v-img
                class="white--text"
                height="200px"
                :src="book.image"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">{{ book.title }}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <div>
                  <span class="grey--text">{{ book.author }}</span><br>
                  <span>{{ book.description }}</span><br>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange" @click="checkRead(book)">Read:</v-btn>
                <input type="month" v-model="date">
                <!-- <v-layout row wrap>
    <v-flex xs11 sm12>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="book.date"
            label="Picker in menu"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="book.date"
          type="month"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
  </v-layout> -->
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
  </div>
</template>

<script>
  export default {
    props: ["books"],
    data: () => ({
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false
    }),
    methods: {
      checkRead(book) {
        this.$http.post('data.json', book)
                  .then(response => {
                      console.log(response);
                  }, error => {
                      console.log(error);
                  });
      }
    }
  }
</script>

<style>
  .books {
    display: inline;
  }
</style>

