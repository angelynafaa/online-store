<template>
  <!-- <div class="wrapper"> -->
  <b-container>
    <b-row style="padding-top: 5%;">
      <b-col cols="8" style="background-color:#ffffff8c">
        <b-col cols=""></b-col>
        <h3>Shooping Cart</h3>
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="flex-col cart-list__item"
        >
          <b-row>
            <b-col cols="9">
              <li>
                <img :src="makeImagePath(item)" class="thumbnail" alt=""/>
                <span>{{ item.name }} </span>
                <span>{{ item.color }}</span>
                <span style="font-size: 1.5rem; margin-left: 10%;"
                  >${{ item.price }}</span
                >
              </li>
            </b-col>
            <b-col cols="3">
              <b-button
                @click="removeFromCart(item.id)"
                variant="danger"
                style="margin-top: 24%;"
                >Remove</b-button
              >
            </b-col>
          </b-row>
        </div>
      </b-col>

      <b-col cols="4" style="max-height: 648px; min-height: 648px;">
        <p style="margin-top: 5%;">Checkout</p>
        <div class="box" style="max-height: 648px;">
          <section class="total-section">
            <ul class="total-section-list">
              <li class="total-section__item">
                <p class="total-section__item__label">
                  {{ cartItemsCount }} items
                </p>
                <p>{{ itemsSubtotal }}</p>
              </li>
              <li class="total-section__item">
                <p class="total-section__item__label">Shipping</p>
                <select v-model="selectedShippingOption">
                  <option disabled value="">Please select an option</option>
                  <option
                    v-for="option in shippingOptionsArray"
                    :key="option.text"
                    :value="option.rate"
                  >
                    {{ option.text }} (${{ option.rate }})
                  </option>
                </select>
              </li>
              <li class="total-section__item">
                <p class="total-section__item__label">subtotal</p>
                <p>{{ subtotal }}</p>
              </li>
              <li class="total-section__item">
                <p class="total-section__item__label">
                  Tax ({{ salesTax * 100 }}%)
                </p>
                <p>{{ salesTaxApplied }}</p>
              </li>
              <li class="total-section__item">
                <p class="total-section__item__label">Total</p>
                <p>{{ total }}</p>
              </li>
              <li class="total-section__item">
                <p class="total-section__item__label">Total</p>
                <p>{{ total }}</p>
              </li>
            </ul>
            <b-button
              style="width:100%; margin-left:3%;"
              :disabled="!this.selectedShippingOption"
              variant="success"
              class="btn btn--grey total-section__checkout-button"
            >
              Check Out
            </b-button>
          </section>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { imagePath } from "@/mixins/imagePath.js";
export default {
  name: "cart",
  mixins: [imagePath],
  data() {
    return {
      salesTax: 0.06,
      selectedShippingOption: "",
      shippingOptionsArray: [
        {
          text: "One day",
          rate: 20
        },
        {
          text: "Two days",
          rate: 15
        },
        {
          text: "Three to five days",
          rate: 10
        },
        {
          text: "One week or more",
          rate: 5
        }
      ]
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartItemsCount() {
      return this.cartItems.length;
    },
    itemsSubtotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
    subtotal() {
      if (this.selectedShippingOption) {
        return Number(this.itemsSubtotal) + Number(this.selectedShippingOption);
      }
      return "---";
    },
    salesTaxPercentage() {
      return `{$this.salestax = 100%}`;
    },
    salesTaxApplied() {
      if (this.selectedShippingOption) {
        return (this.subtotal * this.salesTax).toFixed(2);
      }
      return "---";
    },
    total() {
      if (this.selectedShippingOption) {
        return Number(this.subtotal) + Number(this.salesTaxApplied);
      }
      return "---";
    }
  },
  total() {
    if (this.selectedShippingOption) {
      return Number(this.subtotal) + Number(this.salesTaxApplied);
    }
    return "---";
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch("removeFromCart", itemId);
    }
  }
};
</script>

<style lang="sass" scoped>
.col-4
    background-color: #524f4f !important
    color: white !important

.cart-list
  width: 70%
  margin-right: 1rem
  @media only screen and (max-width: 832px)
    width: 100%


.cart-list__item
  width: 100%
  border-bottom: 1px solid #bdb8b863
  list-style: none

.cart-list__item__details
  flex: 2
  justify-content: space-between
  margin-left: 2rem

/* .cart-list__btn-remove
  margin-top: 0.5rem
  &:hover
    color: red

 */
.thumbnail
  max-width: 15%
  margin-top: 0.5rem
  margin-bottom: 0.5rem

.total-section
  background: #fafafaf7
  padding: 0 1rem 1rem
  color: black
  padding-top: 6%
  padding-left: 0%

.total-section-list
  margin: 0

.total-section__item
  display: flex
  justify-content: space-between
  align-items: center

.total-section__item__label
  font-weight: bold
  margin-right: 1rem

span
  margin-left:20px
</style>
