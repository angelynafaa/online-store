<templates>
    <div>
        <section class="wrapper">
            <h2> {{product.name}}</h2>
        </section>
    </div>
</templates>

<script>
export default {
  name: "product",
  data() {
    return {
      product: this.$store.getters.product(this.$route.paramas.id)
    }
}
};
</script>

<style lang="scss">
</style>