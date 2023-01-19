<template>
  <div class="products-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="vdemy-grid-sorting row align-items-center">
            <div class="col-lg-6 col-md-6 result-count">
              <p>
                We found <span class="count">9</span> products available for you
              </p>
            </div>
            <div class="col-lg-6 col-md-6 ordering">
              <div class="select-box">
                <label>Sort By:</label>
                <select>
                  <option>Default</option>
                  <option>Popularity</option>
                  <option>Latest</option>
                  <option>Price: low to high</option>
                  <option>Price: high to low</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <ProductsItem
              v-for="product in products"
              :item="product"
              :key="product.id"
              @update-cart="updateCart"
              class="col-lg-6 col-md-6 col-sm-6"
            />
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="pagination-area text-center">
                <a href="#" class="prev page-numbers"
                  ><i class="bx bx-chevrons-left"></i
                ></a>
                <span class="page-numbers current" aria-current="page">1</span>
                <a href="#" class="page-numbers">2</a>
                <a href="#" class="page-numbers">3</a>
                <a href="#" class="page-numbers">4</a>
                <a href="#" class="next page-numbers"
                  ><i class="bx bx-chevrons-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <ProductSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSidebar from "./ProductSidebar";
import ProductsItem from "../Common/ProductsItem";

export default {
  name: "Products",
  components: {
    ProductSidebar,
    ProductsItem,
  },
  methods: {
    updateCart(e) {
      this.cart.push(e);
      this.total = this.shoppingCartTotal;
    },
    emptyCart() {
      this.cart = [];
      this.total = 0;
    },
  },
  computed: {
    products() {
      return this.$store.state.items;
    },
  },
};
</script>
