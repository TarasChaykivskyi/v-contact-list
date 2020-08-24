<template>
    <div>
        <add-contact />
        <h2>Contact List</h2>
        <table cellpadding="5" cellspacing="0">
            <tr>
                <th>№</th>
                <th>Person</th>
                <th>Phone</th>
                <th>Email</th>
                <th>City</th>
            </tr>
            <tr v-for="(contact, index) of contactList" :key="contact.id">
                <td>{{ contact.id }}</td>
                <td>{{ contact.firstName + " " + contact.lastName }}</td>
                <td>{{ contact.phone }}</td>
                <td>{{ contact.email }}</td>
                <td>{{ contact.city }}</td>
                <td class="action-table-block">
                    <router-link
                            :to="'/contacts/' + contact.id"
                            tag="button"
                            class="button-details"
                    >
                        &#10000;
                    </router-link>
                </td>
                <td class="action-table-block">
                    <button @click="showModalConfirm(index)">&times;</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import addContact from "./addContact";
    import {mapGetters, mapActions} from "vuex"

    export default {
        name: "contactList",
        computed: {
            contactList() {
                return this.$store.getters.list
            },
            ...mapGetters({
                showModal: "showModal",
                confirm: "confirm"
            })
        },
        components: {
            addContact
        },
        methods: {
            ...mapActions({
                showModalConfirm: "show"
            })
        }
    }
</script>

<style scoped>
    table {
        width: 100%;
    }

    th {
        border: 2px solid #000000;
        font-size: 18px;
    }

    td {
        border: 1px solid slategrey;
    }

    h2 {
        text-align: center;
        font-size: 30px;
    }

    .action-table-block {
        border: none;
        width: 1px;
    }

    button {
        background: powderblue;
        font-size: 28px;
        padding: 0 8px;
        color: darkred;
    }

    .button-details {
        font-size: 23px;
        background: darkolivegreen;
        color: #ffffff;
        padding: 0 4px;
        margin-left: 10px;
    }
</style>