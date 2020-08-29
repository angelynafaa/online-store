<template>
  <div class="header">
    <div class="row">
      <div class="kolom1">
        <section class="wrapper"></section>
      </div>
      <div class="kolom2">
        <ul class="featured-items">
          <li
            v-for="product in featuredProducts"
            :key="product.id"
            class="featured-items__item"
          >
            <router-link :to="{ name: 'product', params: { id: product.id } }">
              <img class="product-image" :src="makeImagePath(product)" alt="" />
              <p class="product-title">{{ product.name }}</p>
              <p>
                <em>${{ product.price }}</em>
              </p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { imagePath } from "@/mixins/imagePath.js";
export default {
  name: "home",
  mixins: [imagePath],
  computed: {
    featuredProducts: function() {
      return this.$store.getters.featuredProducts.slice(0, 1);
    }
  },
  methods: {
    imagePath(product) {
      return require(`../assets/img/${product.images[0]}`);
    }
  }
};
</script>

<style lang="scss">
// .wrapper {
//   max-width: 100%;
//   margin: 0 auto;
//   @media only screen and (max-width: 832px) {
//     max-width: 100%;
//     padding: 1rem;
//     text-align: left;
//   }
// }
.featured-items {
  padding-left: 14px;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.featured-items__item {
  width: 33%;
  text-align: center;
}
.product-image {
  max-height: 200px;
}
.product-title {
  font-weight: bold;
  text-align: center;
}

* {
  box-sizing: border-box;
}
.kolom1 {
  float: left;
  width: 75%;
  padding: 10px;
  min-height: 719px;
  background-image: url("../assets/bg-1.jpg");
  background-size: cover;
}
.kolom2 {
  float: left;
  width: 25%;
  padding: 10px;
  max-height: 719px;
  background-color: #ebeceea1;
}
.row::after {
  content: "";
  display: table;
  clear: both;
}
.header {
  padding: 100px 0 165px;
  margin-top: -70px;
}
</style>
