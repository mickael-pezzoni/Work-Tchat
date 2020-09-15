<template>
  <div class="home">
  <div id="login">
    <input type="text" @keypress.enter="connect()" @input="updatePseudo" name="pseudo" placeholder="Pseudo">
<!--     <button @click="connect()">Entrer</button>
 -->  </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex' 

export default {
  
  name: 'Home',
  methods: {
    updatePseudo(e) {
      this.$store.dispatch('setPseudo', e.target.value);
    },
    connect() {
      console.log("pseudo", this.pseudo);
      this.$router.push('tchat');
    }
  },
  computed: {
    ...mapState(['pseudo']),
    ...mapActions(['setPseudo'])
  }
}
</script>

<style>

#login{
  position: absolute;
  top: 45%;
  right: 43%;
  transform: translate(-50%, -50%);
}
</style>