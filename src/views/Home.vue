<template>
  <div>
    <section class="wrapper">
      <h2>Featured Items</h2>
      <ul class="featured-items">
        <li v-for="product in products" :key="product.id" class="featured-items__item">
          <img class="product-image" :src="imagePath(product)" alt="">
          <p class="product-title">{{ product.name }}</p>
          <p><em>${{ product.price }}</em></p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    products: function() {
      return this.$store.state.products
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

</style>