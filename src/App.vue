<template>
  <div class="container">
    <div id="app">
      <nav class="row navbar navbar-expand-lg navbar-light bg-white">
        <a class="navbar-brand">Navbar</a>
        <div class="collapse navbar-collapse" id="navb">
          <ul class="navbar-nav ml-auto mr-3">
            <li class="nav-item mx-md-2">
              <form class="form-inline">
                <router-link to="/" class="nav-items__item">Home</router-link>
                <router-link
                  :to="{ name: 'gender-overview', params: { gender: 'men' } }"
                  class="nav-items__item"
                  >Men</router-link
                >
                <router-link to="/cart" class="nav-items__item">
                  Cart
                  <counter-badge :count="cartCount"></counter-badge>
                </router-link>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <router-view />
  </div>
</template>

<script>
import CounterBadge from "@/components/CounterBadge";

export default {
  name: "app",
  components: { CounterBadge },
  computed: {
    cartCount() {
      return this.$store.state.cart.length;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

#nav {
  padding: 0px;
  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav-items {
  justify-content: flex-end;
  display: flex;
}
.nav-items__item {
  margin-left: 1rem;
  position: relative;
  color: black;
}
ul {
  padding-left: 0;
  list-style: none;
}

.navbar-light{
  background-color: pink;
}
</style>
