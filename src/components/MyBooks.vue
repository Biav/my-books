<template>
  <v-container grid-list-xl>
    <div class="progress" v-if="$store.getters.loading"> 
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <div v-if="!$store.getters.loading">
      <v-layout row wrap>
        <v-flex xs6 sm4 md3 xl2 class="lg5-custom" v-for="book in books">
          <v-card>
            <v-img :src="book.image" height="200px">
            </v-img>

            <v-card-title primary-title>
              <div>
                <div class="headline">{{ book.title }}</div>
                <span class="grey--text">{{ book.author }}</span>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-flex xs12 sm3>
                <v-btn flat icon>
                  <v-icon :class="{'favorite-red': book.favorite, 'favorite-grey': !book.favorite}">favorite</v-icon>
                </v-btn>
                <v-btn flat icon @click="deleteBook(book)">
                  <v-icon>delete</v-icon>
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

  .favorite-grey{
    color: #ecf0f1!important;
  }

  .favorite-red{
    color: #e74c3c!important;
  }
</style>


<script>
import { setTimeout } from 'timers';
  export default {
    data: () => ({
      books: []
    }), 
    methods: {
      show(book) {
        book.show = !(book.show);
      },
      deleteBook(book) {
        this.$http.delete('data.json', book.id).then(response => {
          // success callback
          console.log("success");
          console.log(response);
        }, response => {
          // error callback
          console.log("error");
          console.log(response);
        });
      }
    },
    mounted(){
      var books;
      self = this;
      // this.load = true;
      setTimeout(function(){
        self.$store.dispatch('getMyBooks');
        self.books = self.$store.getters.books;
      },1000);


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