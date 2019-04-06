<template>
  <div id="content">
    <v-layout row class="search">
      <v-flex xs12 class="search-book">
        <v-text-field 
          label="Search book by name to add in your collection"
          v-model="book"
          placeholder="Search book by name"
          @keyup.enter="search"></v-text-field>
      </v-flex>
      <v-flex p>
        <v-btn flat icon @click="search">
          <v-icon class="primary--text">search</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <component :is="showBooks" @showBooks="showBooks = $event" :books="books"></component>
  </div>
</template>

<script>
  import Book from './Book.vue';
  import MyBooks from './MyBooks.vue';

  export default {
    data: () => ({
      show: false,
      book: '',
      books: [],
      showBooks: 'my-books'
    }),
    methods: {
      search() {
        var test = { title: 'test', image: 100};
        // this.books.push(test);
        self = this; 
        if(this.book !== ""){
          this.$http.get('https://www.googleapis.com/books/v1/volumes?q='+this.book)
                  .then(response => {
                      return response.json();
                  })
                  .then(data => {
                    this.showBooks = '';
                    self.books = [];
   
                    for (var i in data.items) {
                      var books = {
                        title: data.items[i].volumeInfo.title,
                        link: data.items[i].volumeInfo.infoLink,
                        description: (data.items[i].volumeInfo.description)?data.items[i].volumeInfo.description:'',
                        image: data.items[i].volumeInfo.imageLinks.thumbnail,
                        author: (data.items[i].volumeInfo.authors)?data.items[i].volumeInfo.authors[0]:'',
                        date: new Date().toISOString().substr(0, 7),
                        favorite: false
                      };

                      self.books.push(books);
                    }
                    this.showBooks = 'book';
                  });
        } else {
          this.showBooks = 'my-books';
        }
      }
    },
    computed: {
      listBooks() {
        return this.books;
      }
    },
    components: {
      'book': Book,
      'my-books': MyBooks
    }
  }
</script>

<style scoped>
  .search {
    margin-top: 20px;
  }
  .search-book {
    margin-left: 40px;
  }
</style>



