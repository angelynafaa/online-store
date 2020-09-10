<template>
  <div id="app">
    <b-container>
      <div>
        <b-nav class="navbar-horizontal">
          <b-navbar-brand>
            <img
              style="max-height:45px"
              src="./assets/MyFashion.png"
              class="d-inline-block align-top"
              alt="logo"
            />
          </b-navbar-brand>
          <b-nav-item class="ml-auto"
            ><router-link to="/">Home</router-link></b-nav-item
          >
          <!-- <b-nav-item
            ><router-link
              :to="{ name: 'gender-overview', params: { gender: 'women' } }"
              >Women</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link
              :to="{ name: 'gender-overview', params: { gender: 'men' } }"
              >Men</router-link
            ></b-nav-item
          > -->
          <b-nav-item
            ><router-link to="/cart">
              <b-img
                left
                src="./assets/supermarket.png"
                alt="Left image"
                style="max-height:30px"
              ></b-img>
              <counter-badge :count="cartCount"></counter-badge> </router-link
          ></b-nav-item>
        </b-nav>
      </div>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import CounterBadge from "@/components/CounterBadge";

export default {
  name: "app",
  components: {
    CounterBadge
  },
  computed: {
    cartCount() {
      return this.$store.state.cart.length;
    }
  }
};
</script>

<style lang="sass">


#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

// #nav
//   padding: 30px
//   a
//     font-weight: bold
//     color: #2c3e50
//     &.router-link-exact-active
//       color: #42b983

.card-header
  padding: 0.75rem 0.25rem
  margin-bottom: 0px
  background-color: #f1e6e6 !important
  border-bottom: none !important

.card
  border: 0px solid rgba(0, 0, 0, 0) !important
  border-radius: 0px !important

a
  color: black !important

.badge
  position: initial !important
  display: table-caption !important
  border-radius: 2.5em
</style>
