<template>
  <div>
  <v-app>
    <v-content>
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex xs6 sm4 md3 xl2 class="lg5-custom" v-for="book in books">
            <v-card>
              <v-img class="white--text" height="200px" :src="book.image">
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
                  <span class="description">{{ book.description }}</span><br>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="indigo">Read in:</v-btn>
                <input type="month" v-model="book.date">
              </v-card-actions>
              <v-card-actions class="check">
                <v-btn depressed small color="primary" @click="checkRead(book)">Chek as Read</v-btn>
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
      test: new Date().toISOString().substr(0, 7),
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

        this.$emit('showBooks','my-books');
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

  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;
    max-height: 110px;
    -webkit-line-clamp: 52;
    -webkit-box-orient: vertical;
  }

  .check {
    display: flex;
    justify-content: center;
  }

</style>

