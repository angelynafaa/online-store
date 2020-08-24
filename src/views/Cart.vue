<template>
  <div class="wrapper">
    <h1>Cart</h1>
    <ul>
      <li
        class="flex-col cart-list__item"
        v-for="item in cartItems"
        :key="item.id"
      >
        <img :src="makeImagePath(item)" class="thumbnail" alt="" />
        <div class="flex-col cart-list__item__details">
          <div>
            <p>{{ item.name }}</p>
            <p>Size: {{ item.size }}</p>
            <p>Color: {{ item.color }}</p>
          </div>
          <p>${{ item.price }}</p>
          <button
            @click="removeFromCart(item.id)"
            class="btn cart-list__btn-remove"
          >
            Remove
          </button>
        </div>
      </li>
    </ul>
    <section class="total-section">
      <ul class="total-section-list">
        <li class="total-section__item">
          <p class="total-section__item__label">{{ cartItemsCount }} items</p>
          <p>{{ itemsSubtotal }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { imagePath } from "@/mixins/imagePath.js";
export default {
  name: "cart",
  mixins: [imagePath],
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartItemsCount() {
      return this.cartItems.length;
    },
    itemsSubtotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch("removeFromCart", itemId);
    }
  }
};
</script>
<style>
.cart-list {
  width: 70%;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.cart-list__item {
  width: 100%;
  border-bottom: 1px solid #2c3e50;
}
.cart-list__item__details {
  flex: 2;
  justify-content: space-between;
  margin-left: 2rem;
}
.cart-list__btn-remove {
  margin-top: 0.5rem;
  &:hover {
    color: red;
  }
}
.thumbnail {
  max-width: 50px;
  margin-top: 0.5rem;
}

.total-section {
  backgorunf: #fafafa;
  padding: 0 1rem 1rem;
  min-width: 33%;
}

.total-section-list {
  margin: 0;
}

.total-section__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-section__item__label {
  font-weight: bold;
  margin-right: 1rem;
}
</style>
