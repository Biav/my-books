import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

Vue.http.options.root = 'https://my-books-b8b9f.firebaseio.com/';

export default new Vuex.Store({
    state: {
        books: [],
        load: true
    },
    mutations: {
        storeBooks (state, books) {
            if(typeof books === 'object')
                state.books.push(books)
            else
                state.books = [];
        },
        setLoad (state, load) {
            state.load = load
        },
    },
    actions: {
        getMyBooks ({commit, state}) {
            var book;
            commit('storeBooks', false)
            console.log(state.books);
            Vue.http.get('data.json')
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
                  commit('storeBooks', book);
                  debugger;
                  console.log(state.books);
                }
                commit('setLoad', false)
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