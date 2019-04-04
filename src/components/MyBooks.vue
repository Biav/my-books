<template>
  <v-container grid-list-xl>
    <div class="progress" v-if="load"> 
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <div v-if="!load">
      <v-layout row wrap>
        <v-flex xs6 sm4 md3 xl2 class="lg5-custom" v-for="book in books">
          <v-card>
            <v-img
              :src="book.image"
              height="200px"
            >
            </v-img>

            <v-card-title primary-title>
              <div>
                <div class="headline">{{ book.title }}</div>
                <span class="grey--text">{{ book.author }}</span>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-flex xs12 sm3>
                <v-btn flat icon color="pink">
                  <v-icon>favorite</v-icon>
                </v-btn>
              </v-flex>
              <v-btn flat color="purple" :href="book.link" target="_blank">Explore</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show(book)">
                <v-icon>{{ book.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-slide-y-transition>
              <v-card-text v-show="book.show">
                {{ book.description }}
              </v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<style scoped>
  .headline {
    font-size: 16px!important;
    font-weight: bold;
    color: #7f8c8d;
  }

  .v-card__title--primary {
    height: 125px;
  }

  .progress {
    margin: 150px;
    text-align: center;
  }
</style>


<script>
import { setTimeout } from 'timers';
  export default {
    data: () => ({
      books: [],
      load: true
    }), 
    methods: {
      show(book) {
        book.show = !(book.show);
      }
    },
    mounted(){
      var books;
      self = this;
      // this.load = true;
      setTimeout(function(){
        self.$http.get('data.json')
                  .then(response => {
                      return response.json();
                  })
                  .then(data => {
                      for(var i in data) {
                        books = {
                          id: i,
                          title: data[i].title,
                          author: data[i].author,
                          description: data[i].description,
                          show: false,
                          image: data[i].image,
                          link: data[i].link
                        };
                        self.books.push(books);
                      }

                      self.load = false;

                  });
      },1000);

      console.log(this.$store.getters.load);
    }
    // mounted(){
    //   var books;
    //   self = this;
    //   // this.load = true;
    //   setTimeout(function(){
    //     self.$http.get('data.json')
    //               .then(response => {
    //                   return response.json();
    //               })
    //               .then(data => {
    //                   for(var i in data) {
    //                     books = {
    //                       id: i,
    //                       title: data[i].title,
    //                       author: data[i].author,
    //                       description: data[i].description,
    //                       show: false,
    //                       image: data[i].image,
    //                       link: data[i].link
    //                     };
    //                     self.books.push(books);
    //                   }

    //                   self.load = false;

    //               });
    //   },1000);
    // }
  }
</script>