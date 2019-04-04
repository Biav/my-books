import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        books: [],
        load: true
    },
    actions: {
        getMyBooks ({commit, state}) {
            this.$http.get('data.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                for(var i in data) {
                  book = {
                    id: i,
                    title: data[i].title,
                    author: data[i].author,
                    description: data[i].description,
                    show: false,
                    image: data[i].image,
                    link: data[i].link
                  };
                  books.push(book);
                }

                load = false;

            });
        }
    },
    getters: {
        books (state) {
            return state.books
        },
        loading (state) {
            return state.load
        }
    }
});