<template>
  <div>
    <h1 style="padding-top:9%; text-align:center;">{{ product.name }}</h1>
    <b-row style="padding-top: 5%;">
      <b-col cols="6">
        <b-row>
          <b-col>
            <div
              class="box"
              style="background-color: #0000002b;
                      border-radius: 30px;"
            >
              <b-img
                fluid-grow
                :src="makeImagePath(product)"
                alt="Image 1"
                style="position: relative;
                    right: 20px;
                    border-radius: 25px;
                    "
              >
              </b-img>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="6">
        <div
          class="detail"
          style="
    padding-top: 9%;
    font-family: sans-serif;"
        >
          <h1 style="text-align:center; font-size:4rem; color:white">
            <p>${{ product.price }}</p>
          </h1>
          <h3 v-if="product.details.additional">
            Additional: {{ product.details.additional }}<br />
            Material: {{ product.details.material }} <br />
            Maintenance: {{ product.details.maintenance }} <br />
            Fit: {{ product.details.fit }}
          </h3>
        </div>
        <div>
          <b-button pill disabled class="size">S</b-button>
          <b-button pill disabled class="size" style="margin-left:20px;"
            >L</b-button
          >
          <b-button pill disabled class="size" style="margin-left:20px;"
            >M</b-button
          >
        </div>
        <div>
          <button @click="addToCart" class="btn btn--grey">Add to Cart</button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { imagePath } from "@/mixins/imagePath.js";
export default {
  name: "product",
  mixins: [imagePath],
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id)
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.$route.params.id);
    }
  }
};
</script>

<style lang="sass" scoped>
.flex-col
  display: flex
  align-items: flex-start



.flex-col--2
  width: 50%


.flex-justify-right
  text-align: right



.flex-col--align-center
  align-items: center


.btn
  padding: 0.5rem 0.75rem
  border-radius: 3px
  border: none
  background-color: transparent
  font-size: 0.9rem
  font-weight: bold
  cursor: pointer
  transition: all 0.15s ease

button
    border-style: dotted !important
    color: black !important
    margin-top: 9% !important


.btn--grey
  width: 100%
  border-style: none !important
  background-color: black
  color: #fff !important
  &:hover,
  &:focus
    background-color: #ce0461
</style>
