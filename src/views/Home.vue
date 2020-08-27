<template>
  <div class="row">
    <div
      class="kolom"
      style="background-image: url('../assets/bg-1.jpg');"
    ></div>
    <div class="kolom" style="background-color: #ffd6f5a3;">
      <section class="wrapper">
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
      </section>
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
      return this.$store.getters.featuredProducts.slice(0, 3);
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
.wrapper {
  max-width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 832px) {
    max-width: 100%;
    padding: 1rem;
    text-align: left;
  }
}
.featured-items {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 832px) {
    flex-direction: column;
  }
}
.featured-items__item {
  width: 33%;
  text-align: center;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.product-image {
  max-height: 200px;
}
.product-title {
  font-weight: bold;
}

* {
  box-sizing: border-box;
}
.kolom {
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px;
}
.row::after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 832px) {
  .column {
    width: 100%;
  }
}
</style>
