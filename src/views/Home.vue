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
</style>
