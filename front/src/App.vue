<template>
    <header>
      <h1 class="title__h1">Georges-Grignard.fr</h1>
      <hr class="title__hr" noshade>
    </header>
    <div id="carrousel">
      <img class="img-placeholder" src="https://via.placeholder.com/150">
    </div>
    <aside>
      <NavLink url="/" text="Accueil" />
      <NavLink url="contact" text="Contact" />
      <NavLink url="pictures" text="Photo" />
      <NavLink url="users" text="Espace Membre" />
    </aside>
    <main>
      <router-view/>
    </main>
    <footer>
      <hr class="footer__hr" noshade>
      Copyright ...
    </footer>
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
//@import "./assets/style.scss"


$breakpoints: (
  large: 1199px 
 );
$background: #1A1B26;
$background-content: #232433;
$background-content-active: #2f3344;
$border: #434A69;
$font-color: #A9B1D6;
$font-color-link: #434A69;
$light-green: #9ECE6A;
$light-blue: #89DDFF;
$light-yellow: #F8CD7A;

@mixin large-only {
  @media screen and (min-width: map-get($breakpoints, large)){
    @content;
  }
}

body {
  background-color: $background;
  display: flex;
  justify-content: center;
}

a {
  color: $font-color-link;
  text-decoration: none;
}

ul, li {
  padding: 0;
  margin: 0;
}

hr {
  margin: 0;
}

#app {
  @include large-only {
    width: 80%;
  }
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $font-color;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 14px;
  padding: 5px;
  >* {
  }
  main,aside {
    border: 3px solid $border;
    background-color: $background-content;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
}

header {
  width: 100%;
}

aside {  
  @include large-only{
    display: flex;
    flex-flow: column wrap;
    flex-grow: 1;
    justify-content: flex-start;
    order: 2;
    width: auto;
    padding: 0;
    margin: 0;
    height: auto;
  }
  width: 100%;
  display: flex;  
  align-items: center;
  height: 40px;
  .nav {
    @include large-only {
      &::before {
        content: " *** ";
      }
      padding: 0;
      border: none;
      border-bottom: 3px solid $background-content;
    }
    vertical-align: center;
    padding: 9px 20px 10px 20px;
    border-top: 3px solid $border;
    border-bottom: 3px solid $border;
  }
  .nav:hover {
    @include large-only {
      border-bottom: 3px solid $background-content-active;
    }
    background-color: $background-content-active;
  }
  .router-link-active {
    background-color: $background-content-active;
    border-bottom: 3px solid $light-yellow;
  }
  a {
    font-weight: bold;
  }
  a.router-link-exact-active {
    color: $font-color;
  }
}

main {
   @include large-only{
    flex-grow: 8;
    order: 1;
    background-color: red;
    padding: 20px;
    width: auto;
  }
  width: 100%;
  padding: 10px;
}

footer {
  @include large-only {
    order: 3;
  }
  width: 100%;
}

.title__h1 {
  text-align: center;
  @include large-only {
    text-align: right;
  }
  color: #FFFFFF;
}

.title__hr {
  border: 2px solid $border;
}

.footer__hr {
  border: 2px solid $border;
}

#carrousel {
  width: 100%;
  background-color: lightgrey;
}

</style>


