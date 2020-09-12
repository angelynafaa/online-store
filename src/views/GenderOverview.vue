<template>
  <div id="app">
    <b-container class="view-gender">
      <h3 class="category">Category Men {{ pageTitle }}</h3>
      <b-row class="text-center">
        <b-col
          class="box"
          cols="3"
          v-for="product in productsByGender"
          :key="product.id"
        >
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <div
              class="box"
              style="background-color:black;
                      margin-bottom:25px;
                      border-radius: 30px;"
            >
              <img
                left
                class="product-image"
                style="position: relative;
                    right: 20px;
                    border-radius: 25px;
                    "
                :src="makeImagePath(product)"
                alt="image-product"
              />
              <div class="caption">
                <p style="color:white;">
                  {{ product.name }}
                </p>
                <p>
                  <em>$ {{ product.price }}</em>
                </p>
              </div>
              <b-button variant="success">Detail</b-button>
            </div>
          </router-link>
        </b-col>
      </b-row>
      <!-- 
      <ul class="wrapper item-grid">
        <li
          v-for="product in productsByGender"
          :key="product.id"
          class="item-grid__item"
        >
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img class="product-image" :src="makeImagePath(product)" alt="" />
            <p class="product-title">{{ product.name }}</p>
            <p>
              <em>$ {{ product.price }}</em>
            </p>
          </router-link>
        </li>
      </ul> -->

      <!-- <div class="wrapper random-items-wrapper">
        <h2>Our Recommendations</h2>
        <p>Try these on for size!</p>
        <section class="random-items">
          <router-link
            :to="{ name: 'product', params: { id: randomTop.id } }"
            class="random-items__item"
          >
            <img class="product-image" :src="makeImagePath(randomTop)" alt="" />
            <p class="product-title">{{ randomTop.name }}</p>
            <p>
              <em>${{ randomTop.price }}</em>
            </p>
          </router-link>
          <router-link
            :to="{ name: 'product', params: { id: randomBottom.id } }"
            class="random-items__item"
          >
            <img
              class="product-image"
              :src="makeImagePath(randomBottom)"
              alt=""
            />
            <p class="product-title">{{ randomBottom.name }}</p>
            <p>
              <em>${{ randomBottom.price }}</em>
            </p>
          </router-link>
          <router-link
            :to="{ name: 'product', params: { id: randomFootwear.id } }"
            class="random-items__item"
          >
            <img
              class="product-image"
              :src="makeImagePath(randomFootwear)"
              alt=""
            />
            <p class="product-title">{{ randomFootwear.name }}</p>
            <p>
              <em>${{ randomFootwear.price }}</em>
            </p>
          </router-link>
        </section>
        <button class="btn btn--grey" @click="recommendRandomOutfit">
          Shuffle
        </button>
      </div> -->
    </b-container>
  </div>
</template>

<script>
import { imagePath } from "@/mixins/imagePath.js";

export default {
  name: "genderOverview",
  mixins: [imagePath],
  created() {
    this.recommendRandomOutfit();
  },
  data() {
    return {
      randomTopId: this.randomProductIdByCategory("Shirts"),
      randomBottomId: null,
      randomFootwearId: null
    };
  },
  computed: {
    gender() {
      return this.$route.params.gender;
    },
    pageTitle() {
      return `${this.gender[0].toUpperCase()}${this.gender.slice(1)}`;
    },
    productsByGender() {
      return this.$store.getters.productsByGender(this.gender);
    },
    randomTop() {
      return this.$store.getters.product(this.randomTopId);
    },
    randomBottom() {
      return this.$store.getters.product(this.randomBottomId);
    },
    randomFootwear() {
      return this.$store.getters.product(this.randomFootwearId);
    }
  },
  methods: {
    randomProductIdByCategory(category) {
      let allProductsInCategory = this.productsByGender.filter(
        p => p.category === category
      );
      let randomIndex = Math.floor(
        Math.random() * allProductsInCategory.length
      );
      return allProductsInCategory[randomIndex].id;
    },
    recommendRandomOutfit() {
      this.randomTopId = this.randomProductIdByCategory("Shirts");
      this.randomBottomId = this.randomProductIdByCategory("Pants");
      this.randomFootwearId = this.randomProductIdByCategory("Shoes");
    }
  }
};
</script>

<style lang="sass" scoped>

.random-items-wrapper
  background: #fafafa
  text-align: center
  padding: 3rem

.btn-success
      background-color: #38842d !important
      border-color: transparent !important
      margin-bottom: 13px

.caption
  p
    color: white !important
    padding-top: 10px !important
    e
      padding-top:-12px !important

row
  .box
    background-color: black

.view-gender
 h3
   text-align: center
   margin-top: 10%
   color: #655f5f
   margin-bottom: 4%
   font-stretch: ultra-expanded

.random-items
  display: flex
  align-items: center
  justify-content: space-between

.random-items__item
  flex: 0 0 33%

.item-grid
  list-style: none
  padding-left: 0
  display: flex
  align-items: flex-start
  justify-content: space-between
  flex-wrap: wrap

.item-grid__item
  box-sizing: border-box
  text-align: center
  padding: 1rem
  flex: 0 0 33.3%
  @media only screen and (max-width: 832px)
    flex: 0 0 50%

  @media only screen and (max-width: 475px)
    flex: 0 0 100%
</style>
