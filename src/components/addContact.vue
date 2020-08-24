<template>
    <div>
        <form class="form-add-new-contact" @submit.prevent>
            <h3>Form add new contact</h3>
            <div class="field">
                <label for="name">Name: </label>
                <input type="text" id="name" v-model="fields.firstName">
            </div>
            <div class="field">
                <label for="surname">Surname: </label>
                <input type="text" id="surname" v-model="fields.lastName">
            </div>
            <div class="field">
                <label for="phone">Phone: </label>
                <input type="tel" id="phone" v-model="fields.phone">
            </div>
            <div class="field">
                <label for="email">Email: </label>
                <input type="email" id="email" v-model="fields.email" :required="false">
            </div>
            <div class="field">
                <label for="city">City: </label>
                <input type="text" id="city" v-model="fields.city">
            </div>
            <span class="error" v-if="error">!!! Please fill all filds</span>
            <button @click="addNewContact(fields)">Add new contact</button>
        </form>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "addContact",
        computed: {
          ...mapGetters({
              id: "id",
              error: "error"
          }),
            fields() {
                return {
                    id: this.id,
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    city: ''
                }
            }
        },
        methods: {
            ...mapActions({
                addNewContact: "addNewContact"
            })
        }
    }
</script>

<style scoped>

    .form-add-new-contact {
        padding: 10px 20px 20px;
        display: inline-block;
        border: 2px solid #000;
    }

    h3 {
        font-size: 25px;
        text-align: center;
    }

    label {
        width: 75px;
        display: inline-block;
    }

    input {
        padding: 5px 10px;
        font-size: 16px;
        margin: 10px 0;
    }

    button {
        margin-top: 10px;
        float: right;
    }

    .error {
        text-align: right;
        display: block;
        color: red;
        font-weight: bold;
    }
</style>