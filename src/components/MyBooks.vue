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

            <div class="read">Read in: <input type="month" v-model="book.date" @change="updateDate(book)"></div>

            <v-card-title primary-title>
              <div>
                <div class="headline">{{ book.title }}</div>
                <span class="grey--text">{{ book.author }}</span>
              </div>
            </v-card-title>

            <v-card-actions>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn flat icon v-on="on">
                      <v-icon @click="favorite(book)" :class="{'favorite-red': book.favorite, 'favorite-grey': !book.favorite}">favorite</v-icon>
                    </v-btn>
                  </template>
                  <span>Add as Favorite </span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn flat icon color="indigo lighten-1" :href="book.link" target="_blank" v-on="on">                                
                      <i class="material-icons">visibility</i>
                    </v-btn>
                    </template>
                  <span>See Info </span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn flat icon color="red lighten-3" @click="deleteBook(book)" v-on="on">
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </template>
                  <span>Delete Book </span>
                </v-tooltip>
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

<script>
import { setTimeout } from 'timers';
import { db } from '../config/db';
let booksRef = db.ref('data')

  export default {
    data: () => ({
      books: []
    }), 
    firebase: {
      books: booksRef
    },
    methods: {
      show(book) {
        book.show = !(book.show);
      },
      deleteBook(book) {
        booksRef.child(book.id).remove().
                 then(()=>
                  this.showBooks()
                 );
      },
      favorite(book) {
        booksRef.child(book.id).update({favorite: !book.favorite}).
                 then(()=>
                  this.showBooks()
                 );
      },
      updateDate(book) {
        console.log("date")
        booksRef.child(book.id).update({date: book.date}).
                 then(()=>
                  this.showBooks()
                 );
      },
      showBooks() {
        let self = this;
        setTimeout(function(){
          self.$store.dispatch('getMyBooks');
          self.books = self.$store.getters.books;
        },500)
      }
    },
    mounted(){
      let self = this;
      this.showBooks()
    }
  }
</script>

<style scoped>
  .headline {
    font-size: 16px!important;
    font-weight: bold;
    color: #7f8c8d;
  }

  .v-card__title--primary {
    height: 125px;
  }

  .read {
    text-align: right;
    margin-right: 10px;
    color: #9e9e9e;
    font-weight: bold;
  }

  .progress {
    margin: 150px;
    text-align: center;
  }

  .favorite-grey{
    color: #bdc3c7!important;
  }

  .favorite-red{
    color: #e74c3c!important;
  }

</style>