<template>
  <div id="app">
    <div>
      <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav">
          <b-nav card-header pills>
            <b-nav-item>
              <router-link to="/" class="nav-items__item"
                >Home</router-link
              ></b-nav-item
            >
            <b-nav-item>
              <router-link
                :to="{ name: 'gender-overview', params: { gender: 'women' } }"
                class="nav-items__item"
                >Women</router-link
              ></b-nav-item
            >
            <b-nav-item>
              <router-link
                :to="{ name: 'gender-overview', params: { gender: 'men' } }"
                class="nav-items__item"
                >Men</router-link
              >
            </b-nav-item>
            <b-nav-item>
              <router-link to="/cart" class="nav-items__item"
                >Cart
                <counter-badge :count="cartCount"></counter-badge>
              </router-link>
            </b-nav-item>
            <!-- <b-nav-item disabled>Disabled</b-nav-item> -->
          </b-nav>
        </b-card-header>
      </b-card>
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
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.card-header {
  padding: 0.75rem 0.25rem;
  margin-bottom: 0px;
  background-color: #f1e6e6 !important;
  border-bottom: none !important;
}
.card {
  border: 0px solid rgba(0, 0, 0, 0) !important;
  border-radius: 0px !important;
}
a {
  color: black !important;
}
.badge {
  position: initial !important;
  display: table-caption !important;
}
</style>
