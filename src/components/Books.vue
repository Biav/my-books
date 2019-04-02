<template>
  <div id="content">
    <v-flex xs12 sm6 md3>
        <v-text-field
          label="Solo"
          v-model="book"
          placeholder="Search book by name"
          solo
          @keyup.enter="search"
        ></v-text-field>
      </v-flex>
        <!-- <p> {{ books }} </p> -->

  </div>

  <!-- <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Top western road trips</div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout> -->
</template>

<script>
  export default {
    data: () => ({
      show: false,
      book: '',
      books: []
    }),

    methods: {
      search() {
        console.log(this.book);
        this.$http.get('https://www.googleapis.com/books/v1/volumes?q='+this.book)
                  .then(response => {
                      return response.json();
                  })
                  .then(data => {

                    for (var i in data.items) {
                      this.books[i] = {
                        title: data.items[i].volumeInfo.title,
                        image: data.items[i].volumeInfo.imageLinks.smallThumbnail
                      };
                      // searchBooks[i].title = data.items[i].volumeInfo.title;
                      // searchBooks[i]["image"] = data.items[i].volumeInfo.imageLinks.smallThumbnail;

                      // console.log(data.items[i].volumeInfo.imageLinks.smallThumbnail);
                      // console.log(data.items[i].volumeInfo.title);
                    }

                    console.log(this.books);

                  });
      }
    }
  }
</script>


