<template>
    <div class="cart-area ptb-100">
        <div class="container">
            <form v-if="shoppingCart.length !== 0" @submit.prevent>
                <div class="cart-table table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Name</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem
                                v-for="product in shoppingCart"
                                :item="product"
                                :key="product.name"
                            ></CartItem>
                        </tbody>
                    </table>
                </div>
                <div class="cart-buttons">
                    <div class="row align-items-center">
                        <div class="col-lg-7 col-sm-7 col-md-7">
                            <div class="shopping-coupon-code">
                                <input type="text" class="form-control" placeholder="Coupon code" name="coupon-code" id="coupon-code">
                                <button type="submit">Apply Coupon</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart-totals">
                    <h3>Cart Totals</h3>
                    <ul>
                        <li>Subtotal <span>${{totalAmount.toFixed(1)}}</span></li>
                        <li>Shipping <span>$30.00</span></li>
                        <li>Total <span>${{(totalAmount + 1).toFixed(1)}}</span></li>
                    </ul>
                    <router-link to="/checkout" class="default-btn">
                        <i class="flaticon-shopping-cart"></i>
                        Proceed to Checkout
                        <span></span>
                    </router-link>
                </div>
            </form>

            <div v-else class="cart-empty">
                <h3>Empty <br/> <router-link to="/products-list-one">Continue Shopping</router-link></h3>
            </div>
        </div>
    </div>
</template>

<script>
import CartItem from './CartItem'

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    computed: {
        shoppingCart() {
            return this.$store.state.cart
        },
        totalAmount() {
          return this.$store.getters.total
        }
    },
    methods: {
        formSubmit() {
            console.log('form submitted');
        },
    },
}
</script>

<style scoped>
    .list-item {
    display: inline-block;
    margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
    transition: all 1s;
    }
    .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
    }
</style>