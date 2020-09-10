<template>
  <b-container class="home-row">
    <b-row>
      <b-col cols="5" fluid class="logo">
        <h1 class=" brand">My Fashion</h1>
        <h2 class="merk">SS60</h2>
        <b-button-group
          style="
    margin-left: 50%;"
        >
          <b-button style="background-color:black; border-color: transparent;"
            ><router-link
              :to="{ name: 'gender-overview', params: { gender: 'men' } }"
              >MEN</router-link
            ></b-button
          >
          <b-button
            style="background-color:#e24c6a8f;border-color: transparent;"
            ><router-link
              :to="{ name: 'gender-overview', params: { gender: 'women' } }"
              >WOMEN</router-link
            ></b-button
          >
        </b-button-group>
      </b-col>
      <b-col cols="7">
        <div class="clearfix">
          <div>
            <div class="box">
              <b-img
                class="img-brand"
                src="../assets/bg-1.png"
                fluid
                alt="Responsive image"
              ></b-img>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>

    
  </b-container>

  <!-- <div
      style="padding-bottom: 0px;
    border-top-width: 54px;
    padding-top: 187px"
    >
      <div class="ima">
        <h1 class="new">NEW COLLECTION</h1>
        <br />
        <div>
          <b-button-group>
            <b-button>MEN</b-button>
            <b-button>WOMEN</b-button>
          </b-button-group>
        </div>
      </div>
      <b-card
        img-src="../assets/bg-1.png"
        img-alt="Image"
        style="max-width: 37rem;"
        class="mb-2"
      >
      </b-card>
    </div> -->

  <!-- <section class="wrapper">
      <h2>Featured Items</h2>
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
    </section> -->
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
    // imagePath(product){
    //   return require(`../assets/img/products/${product.images[0]}`);
    // }
  }
};
</script>

//
<style lang="sass" scoped>
@media only screen and (min-width: 819px)
  h1,
    .brand

       color: black
       font-size: 2.5em
       margin-left: 44%
       margin-top: 50%
       font-weight: bold
  h2,
    .merk
      color: black
      margin-left: 150px
      font-size: 8em
      margin-top: 0
      font-weight: bold


  home-row
    padding: 20px !important



  .clearfix
  .box
    height: 309px
    background-color: #e24c6a8f
    position:relative
    margin-top: 243px
    .img-brand
      margin-top: -245px !important

  img
    .img-brand
      padding-top: 20px

  .logo
    margin-top:3%

  button
        border-bottom-right-radius: 22px
        border-top-right-radius: 22px
        border-bottom-left-radius: 22px
        border-top-left-radius: 22px
a
  color: white !important


@media only screen and (max-width: 818px)
  .brand
    display: none
// .wrapper
//   max-width: 800px
//   margin: 0 auto
//   @media only screen and (max-width: 1066px)
//     max-width: 100%
//     padding: 1rem
//     text-align: center

// .featured-items
//   padding-left: 0
//   list-style: none
//   display: flex
//   justify-content: space-between
//   @media only screen and (max-width: 1066px)
//     flex-direction: column

// .featured-items__item
//   width: 33%
//   text-align: center
//   @media only screen and (max-width: 1066px)
//     width: 100%

// .product-image
//   max-height: 200px
// .product-title
//   font-weight: bold


// header
//   padding: 100px 0 165px
//   margin-top: -72px
//   background-color: #f1e6e6
//   // background-image: url(../assets/bg-1.png);
//   background-size: cover

//   h1,
//   p
//     color: darkblue

//   h1
//     font-family: "playfair Display", serif
//     font-weight: bold
//     font-size: 35px

//   p
//     font-size: 16px
// header
//   .card
//     background-color: #da53626e !important
//     margin-left: 50%
//     margin-bottom: 100px
//     margin-top: -555px
//     position: static

// .card-img,
// .card-img-top
//   margin-top: -50px !important

// .card-body
//   padding: 0 !important

// @media only screen and (min-width: 600px)
// .ima
//   min-height: 540px
//   background-color: #f1e6e6
//   margin-right: 50%
//   margin-top: -62px
//   h1,
//   .new
//     color: #000000d4
//     text-align: right
//     margin-right: 81px

//   .brand
//     color: black
//     font-size: 297px
//     margin-right: -75px

// div
//   .btn-group
//     margin-left: 65% !important
//   .btn-secondary
//     border-bottom-right-radius: 22px
//     border-top-right-radius: 22px
//     border-bottom-left-radius: 22px
//     border-top-left-radius: 22px
//
</style>
