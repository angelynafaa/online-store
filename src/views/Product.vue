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
        <h1 style="text-align:center; font-size:4rem; color:white">
          ${{ product.price }}
        </h1>
        <!-- <div class="detail" style="font-size:1.5rem;"> -->
          <h3 v-if="product.details.additional">
            Additional: {{ product.details.additional }}<br />
            Material: {{ product.details.material }} <br />
            Maintenance: {{ product.details.maintenance }} <br />
            Fit: {{ product.details.fit }}
          </h3>
        <!-- </div> -->
      </b-col>
    </b-row>

    <!-- <section class="wrapper">
      <div class="flex-col">
        <img class="flex-col--2" :src="makeImagePath(product)" alt="" />
        <div class="flex-col--2">
          <button @click="addToCart" class="btn btn--grey">Add to Cart</button>
          <p>Price: ${{ product.price }}</p>
          <p>Size: {{ product.size }}</p>
          <p>Color: {{ product.color }}</p>
          <p>
            <em>{{ product.quantity }} left in stock</em>
          </p>
          <h3>Details</h3>
          <ul>
            <li>Material: {{ product.details.material }}</li>
            <li>Fit: {{ product.details.fit }}</li>
            <li>Maintenance: {{ product.details.maintenance }}</li>
            <li v-if="product.details.additional">
              Additional: {{ product.details.additional }}
            </li>
          </ul>
        </div>
      </div>
    </section> -->
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


.btn--grey
  background-color: #2c3e50
  color: #fff
  &:hover,
  &:focus
    background-color: #42b983
</style>
