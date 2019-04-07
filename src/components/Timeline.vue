<template>
  <div>
    <my-goals :total="Object.keys(books).length"></my-goals>
    <v-timeline class="goals">

      <v-timeline-item v-for="book in books" :key="book['.key']" color="red lighten-2">
        <template v-slot:opposite>
          <span class="month">{{book.date | formatDate}}</span>
        </template>
        <v-card class="elevation-2">

          <v-card-title class="headline">{{ book.title }}</v-card-title>
          <v-card-text class="card-book">
            <img :src="book.image" align="left">
            <p class="title">{{book.author}}</p>
            <p class="description">{{book.description}}</p>
          </v-card-text>
        </v-card>
        <br>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { db } from "../config/db";
import Goals from "./Goals";
let booksRef = db.ref("data");

export default {
  data: () => ({
    total: 0
  }),
  firebase: {
    books: booksRef.orderByChild("date")
  },
  created() {
    // self = this;
    // self.$store.dispatch('getMyBooks')
    //            .then((response)=>
    //               setTimeout(function(){
    //                 self.total = self.$store.getters.total;
    //               },1000)
    //             );
  },
  filters: {
    formatDate(date) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return monthNames[new Date(date).getMonth() + 1];
    }
  },
  components: {
    'my-goals': Goals
  }
};
</script>

<style scoped>
.goals {
  width: 80%;
  margin: 0 auto;
}

.description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px;
  max-height: 110px;
  -webkit-line-clamp: 52;
  -webkit-box-orient: vertical;
  padding: 14px;
}

img {
  width: 100px;
}

.month {
  color: #3b5998;
  font-weight: bold;
  font-size: 18px;
}

.title {
  margin-right: 15px;
  text-align: right;
}

.card-book {
  color: #7f8c8d;
  height: 200px;
}

.description {
  text-align: justify;
}
</style>
