import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyAiHSifnp5FZjCQ22TBIVZG3bUqtL6aStA",
    authDomain: "my-books-b8b9f.firebaseapp.com",
    databaseURL: "https://my-books-b8b9f.firebaseio.com",
    projectId: "my-books-b8b9f",
    storageBucket: "my-books-b8b9f.appspot.com",
    messagingSenderId: "230145941858"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()