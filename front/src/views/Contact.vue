<template>
  <div class="about">
    <h1>Contactez moi</h1>
    <form class="form" method="post" action="">
      <div class="form-email">
        <label for="email">Votre adresse mail: </label>
        <input type="email" name="email" id="email" placeholder="Votre adresse mail" required>
      </div>
      <div class="form-object">
        <label for="object">L'objet: </label>
        <input type="object" name="object" id="object" placeholder="L'objet" required>
      </div>
      <div class="form-text">
        <label for="text">Le message: </label>
        <textarea name="text" id="text"></textarea>
      </div>
      <div class="button">
        <button type="submit">Envoyer le message</button>
      </div>
    </form>
  </div>
</template>
