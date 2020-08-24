<template>
  <div id="app">
    <router-view />
    <modal v-if="showModal"/>
  </div>
</template>

<script>
import modal from "./components/modal";
import {mapGetters} from "vuex"

export default {
  name: 'App',
  computed: {
    ...mapGetters ({
      showModal: "showModal"
    })
  },
  components: {
    modal
  }
}
</script>

<style>

  #app {
    margin: 20px 0 60px;
  }

  button {
    border: none;
    outline: none;
    font-size: 16px;
    padding: 8px 15px;
    border-radius: 3px;
    background: darkslategray;
    color: #fff;
    cursor: pointer;
  }

</style>
