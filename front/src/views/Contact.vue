<template>
  <div class="about">
    <h1>Contactez moi</h1>
    <form class="form" method="post" @submit="greet">
      <div class="form-email">
        <label for="email"></label>
        <input v-model="email" type="email" name="email" id="email" placeholder="Votre adresse mail" required>
      </div>
      <div class="form-object">
        <label for="object"></label>
        <input type="object" name="object" id="object" placeholder="L'objet" required>
      </div>
      <div class="form-text">
        <label for="text"></label>
        <textarea name="text" id="text"></textarea>
      </div>
      <div class="button">
        <button type="submit">Envoyer le message</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data()  {
    return {
    }
  },
  // définition des méthodes d'objet
  methods: {
    greet: function (event) {
      event.preventDefault()
      // `this` fait référence à l'instance de Vue à l'intérieur de `methods`
      alert('Bonjour ' + this.email + ' !')
      // `event` est l'évènement natif du DOM
      if (event) {
        alert(event.target.tagName)
      }
    }
  }


}
</script>