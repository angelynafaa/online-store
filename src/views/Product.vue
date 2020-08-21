<templates>
    <div>
        <section class="wrapper">
            <div class="flrex-col">
                <img class="flex-col--2" : src="makeImagePath(product) alt="">// we call makeImagePath() or we use the correct method name
                <div class="flex-col--2">
                    <h2> {{peoduct.name}}</h2>
                    <p>Price: ${{product.price}}</p>
                    <p>Size : ${{product.size}}</p>
                    <p>Color : ${{product.color}</p>
                    <p> <em>{{product.quantity}} left in stock </em></p>
                    <h3> Details</h3>
                <ul>
                    <li>MATERIAL : {{product.details.material}}</li>
                    <li>fit : {{product.details.fit}}</li>
                    <li>Maintenance : {{product.details.material}}</li>
                    <li v-if="product.details.additional">additional: {{product.details.additional}}</li>
                </ul>
            </div>
            </div>
        </section>
    </div>
</templates>

<script>
import { imagePath } from "@/mixins/imagePath.js"; //import mixins

export default {
  name: "product",
  mixins: [imagePath], //register mixins
  data() {
    return {
      product: this.$store.getters.product(this.$route.paramas.id)
    }
  }
};
</script>

<style lang="scss">
.flex-col {
  display: flex;
  align-items: flex-start;
}
.flex-col--2 {
  width: 50%;
}
</style>
