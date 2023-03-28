<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
   
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Podcaster</RouterLink>
        <RouterLink to="/about"></RouterLink>
      </nav>
    
    </div>
  </header>

  <RouterView />


</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  
}

nav {
  width: 100%;

  text-align: center;
  
}

nav a.router-link-exact-active {
  color: rgb(67, 173, 202);

}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {

  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;    
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 3em;
    color: rgb(67, 173, 202);
    margin-top: 9rem;
  }
}
</style>
