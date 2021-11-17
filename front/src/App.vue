<template>
  <header class="app__header">
    <h1 class="header__h1">Georges-Grignard.fr</h1>
    <hr class="header__hr" noshade>
  </header>
  <!--
    <div id="carousel">
    <div>
    <div class="item__image">
    <img src="https://www.bing.com/th?id=OHR.FloridaManatee_EN-US9136189368_1920x1200.jpg&rf=LaDigue_1920x1200.jpg">
    </div>
    <div class="item__body">
    <h3>Titre de l'image</h3>
    <p>Description de l'image</p>
    </div>
    </div>
    <div>
    <div class="item__image">
    <img src="https://images6.alphacoders.com/413/413484.jpg">
    </div>
    <div class="item__body">
    <h3>Titre de l'image</h3>
    <p>Description de l'image</p>
    </div>
    </div>
    </div>
  -->
  <aside class="app__aside">
    <NavLink url="/" icon="fas fa-home" text="Accueil" />
    <NavLink url="contact" icon="fas fa-envelope" text="Contact" />
    <NavLink url="picture" icon="fas fa-images" text="Photo" />
    <NavLink url="user" icon="fas fa-user" text="Espace Membre" />
  </aside>
  <main class="app__main">
    <!--      <transition name="slide-page" mode="out-in"> -->

    <router-view v-slot="{ Component }">
      <transition name="fade-page" mode="out-in">
      <component :is="Component" />
      </transition>
    </router-view>

  </main>
  <footer class="app__footer">
    <hr class="footer__hr" noshade>
    <!--
      <div id="about">
      Développeur web indépendant, freelance à Nantes. Je suis un passionnée du développement web, depuis mes 16 ans. Après plusieur années à tartiner de l'enrobé sur nos routes je me suis enfin lancé dans cette reconversion professionnel, a fin de faire cette passion une phylosophie de vie. 
      </div>
    -->
    <div class="footer__about">
      <h3>Développeur informatique indépendant</h3>
      ***TEXTE COPIÉ*** Développeur Web front & back-end & Webdesigner freelance, je suis à votre disposition pour répondre à tout type de projets de création de sites internet, de développement spécifique ou d'applications web. Passionné par les technologies liées au Web, je mets mes compétences au service de vos besoins dans divers domaines.
    </div>
    <div class="footer__social">
      <h3>Les réseaux et moi?</h3>
      Georges Grignard<br>
      contact@georges-grignard.fr<br>
      <ul class="footer__social-ul">
        <li><a href="https://github.com/Geordinateur" target="_blank"><img class="footer__social-icon" src="../../images/icon-github.png"></a></li>
        <li><a href="https://linkedin.com/in/georges-grignard" target="_blank"><img class="footer__social-icon" src="../../images/icon-linkedin.png"></a></li>
      </ul>
    </div>
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
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_mixins.scss";
@import "./assets/scss/_carousel.scss";
//@import "./assets/scss/_functions.scss";

body {
  background-color: $background;
  display: flex;
  justify-content: center;
}

a {
  color: $font-color-link;
  text-decoration: none;
}

ul, li, h3, hr {
  padding: 0;
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
    &,#carousel {
      box-shadow: $box-shadow;
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
    transition: all 0.5s ease;
  }
  .nav__link:hover {
    @include large-only {
      border-bottom: 3px solid $background-content-active;
    }
    background-color: $background-content-active;
    //    transition: opacity .1s, transform .1s;
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
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
}

.footer__hr {
  border: 2px solid $border;
  width: 100%;
  flex-grow: 3;
}

.footer__social,.footer__about {
  @include large-only {
    flex-grow: 3;
    padding: 20px;
  }
  width: 100%;
  padding: 15px;
}

.footer__social {
  @include large-only {
    width: 15%;
    text-align: right;
  }
  letter-spacing: 0.0em;
  line-height: 1.5em;
  .footer__social-ul{
    display: flex;
    list-style: none;
    gap: 20px;
    margin-top: 20px;
    @include large-only {
      justify-content: flex-end;
    }
  }
  .footer__social-icon{
    filter: grayscale(1) invert(100%);
    width: 30px;
    opacity: 0.5;
    transition: transform 0.3s, filter 0.3s, opacity 0.3s;
  }
  .footer__social-icon:hover {
    opacity: 1;
    transform: scale(1.2);
  }
}

.footer__about {
  @include large-only {
    width: 75%;
  }
}

.header__h1 {
  text-align: center;
  @include large-only {
    text-align: right;
  }
  color: #FFFFFF;
}

.header__hr {
  border: 2px solid $border;
}


.fade-page-enter-active, .fade-page-leave-active {
  transition: opacity .2s, transform .2s;
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



#carousel {
  width: 100%;
  background-color: lightgrey;
  @include large-only {
    //height: 300px;
  }
  .item__body {
    color: black;
    padding: 10px;
    text-shadow: $box-shadow;
    //    margin-top: -70px;
    h3 {
    }
    p {
      padding: 0;
      margin: 0;
    }
  }
}

</style>
