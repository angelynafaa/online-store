import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
import GenderOverview from "../views/GenderOverview.vue";
import "bootstrap";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/products/:id",
      name: "product",
      component: Product
    },
    {
      path: "/cart/",
      name: "cart",
      component: Cart
    },
    {
      path: "/:gender/",
      name: "gender-overview",
      component: GenderOverview
    }
  ]
});
