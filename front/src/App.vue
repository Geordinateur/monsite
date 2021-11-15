<template>
    <header class="App__header">
      <h1 class="title__h1">Georges-Grignard.fr</h1>
      <hr class="title__hr" noshade>
    </header>
    <div id="carrousel">
      <img class="img-placeholder" src="https://via.placeholder.com/150">
    </div>
    <aside class="App__aside">
      <NavLink url="/" icon="fas fa-home" text="Accueil" />
      <NavLink url="contact" icon="fas fa-envelope" text="Contact" />
      <NavLink url="picture" icon="fas fa-images" text="Photo" />
      <NavLink url="user" icon="fas fa-user" text="Espace Membre" />
    </aside>
    <main class="App__main">
<!--      <transition name="slide-page" mode="out-in"> -->
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
    </main>
    <footer class="App__footer">
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
  },
  data()  {
    return {
      show: true
    }
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
    width: 70%;
  }
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $font-color;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  padding: 5px;
  >* {
  }
  main,aside {
    border: 3px solid $border;
    background-color: $background-content;
    &,#carrousel {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
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
    align-items: stretch;
    order: 2;
    width: auto;
    max-width: 250px;
    padding: 0;
    margin: 0;
    height: auto;
  }
  width: 100%;
  display: flex;  
  align-items: center;
  height: 40px;
  .nav__link {
    display: flex;
    @include large-only {
      &::before {
        content: "";
      }
      width: 100%;
      height: 40px;
      border: none;
      border-bottom: 3px solid $background-content;
      justify-content: flex-start;
    }
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    border-top: 3px solid $border;
    border-bottom: 3px solid $border;
  }
  .nav__link:hover {
    @include large-only {
      border-bottom: 3px solid $background-content-active;
    }
    background-color: $background-content-active;
  }
  .nav__link > span {
    @include large-only {
      display: inline;
    }
    display: none;
  }
  
  .nav__link > i {
    padding: 10px;
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

.fade-page-enter-active, .fade-page-leave-active {
  transition: opacity .1s, transform .1s;
}
.fade-page-enter, .fade-page-leave-active {
  opacity: 0;
}
.fade-page-enter-to {
  transition: opacity .1s, transform .1s;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s, transform .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}



/* Les animations d'entrée (« enter ») et de sortie (« leave »)  */
/* peuvent utiliser différentes fonctions de durée et de temps.  */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}



#carrousel {
  width: 100%;
  background-color: lightgrey;
  @include large-only {
    height: 300px;
  }
}

</style>