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
      <component :is="showBooks" :books="books"></component>
  </div>
</template>

<script>
  import Book from './Book.vue';

  export default {
    data: () => ({
      show: false,
      book: '',
      books: [],
      showBooks: false
    }),
    methods: {
      search() {
        var test = { title: 'test', image: 100};
        // this.books.push(test);
        self = this; 
        console.log(this.books);
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
                        description: (data.items[i].volumeInfo.description).substr(0, 140) + ' ...',
                        image: data.items[i].volumeInfo.imageLinks.thumbnail,
                        author: data.items[i].volumeInfo.authors[0]
                      };

                      self.books.push(books);
                    }
                    this.showBooks = 'book';
                  });
      }
    },
    computed: {
      listBooks() {
        return this.books;
      }
    },
    components: {
      'book': Book
    }
  }
</script>


