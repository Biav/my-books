import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

Vue.http.options.root = 'https://my-books-b8b9f.firebaseio.com/';

export default new Vuex.Store({
    state: {
        books: [],
        load: true,
        goal: 12,
        totalBooks: 0
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
        setTotal (state, total) {
            state.totalBooks = total
        },
    },
    actions: {
        getMyBooks ({commit, state}) {
            var book;
            commit('storeBooks', false)
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
                    date: data[i].date,
                    description: data[i].description,
                    show: false,
                    favorite: data[i].favorite,
                    image: data[i].image,
                    link: data[i].link
                  };
                  commit('storeBooks', book);
                }
                commit('setTotal', state.books.length);
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
        },
        goal (state) {
            return state.goal
        },
        total (state) {
            return state.totalBooks
        }
    }
});