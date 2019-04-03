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
                <input type="month" v-model="date">
                <v-btn flat color="orange" @click="checkRead(book)">Read</v-btn>
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

<style scoped>
  .books {
    display: inline;
  }

  .headline {
    text-shadow: 2px 2px 4px #000000;
  }
</style>

