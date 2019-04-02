<template>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Books per Month"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      select: { required }
    },

    data: () => ({
      name: '',
      select: null,
      items: [
        '1 Book',
        '2 Books',
        '3 Books',
        '4 Books',
        '5 Books'
      ]
    }),

    computed: {
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Books per Month is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      }
    },

    methods: {
      submit () {
        var user = {
            name: this.name,
            books: this.select
        }
        console.log(user);
        this.$http.post('data.json', user)
                       .then(response => {
                           console.log(response);
                       }, error => {
                           console.log(error);
                       });
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.select = null
      }
    }
  }
</script>