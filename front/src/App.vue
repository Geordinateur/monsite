<template>
  <div id="main">
    <h1 class="title__h1">Georges-Grignard.fr</h1>
    <hr class="title__hr" noshade>
    <NavLink url="/" text="Accueil" />
    <NavLink url="contact" text="Contact" />
    <router-view/>
  </div>
</template>

<script>
import NavLink from "./components/NavLink.vue"

export default {
  name: 'App',
  components: {
    NavLink
  }
}
</script>

<style lang="scss">
$background: #1A1B26;

body {
  background-color: $background;
  display: flex;
  justify-content: center;
}

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #A9B1D6;
  display: flex;
  width: 80%;
  background-color: red;
}

#main {
  background-color: green;
  width: 100%;
}

.title__h1 {
  text-align: right;
  color: #FFFFFF;
}

.title__hr {
  border: 2px solid #434A69;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


