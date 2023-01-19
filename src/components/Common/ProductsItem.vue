<template>
    <div>
        <div class="single-products-box">
            <div class="products-image">
                <router-link :to="`/single-products/${item.id}`">
                    <img :src="item.image" class="main-image" alt="image">
                </router-link>
                <div class="products-button">
                    <ul>
                        <li>
                            <div class="wishlist-btn">
                                <a href="#">
                                    <i class='bx bx-heart'></i>
                                    <span class="tooltip-label">Add to Wishlist</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-if="item.sale" class="sale-tag">Sale!</div>
                <div v-if="item.new" class="new-tag">New!</div>
            </div>
            <div class="products-content">
                <h3>
                    <router-link :to="`/single-products/${item.id}`">
                        {{item.name}}
                    </router-link>
                </h3>
                <div class="price">
                    <span v-if="item.oldPrice" class="old-price">${{item.oldPrice}}</span>
                    <span v-if="item.price" class="new-price">${{item.price}}</span>
                </div>
                <div class="star-rating">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                </div>
                <a
                    href="javascript:void(0)" 
                    class="add-to-cart"
                    @click="addToCart(item)"
                >
                    Add To Cart 
                    <i class="fas fa-cart-plus"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductsItem',
    props: ['item'],
    methods: {
        addToCart(item) {
            this.$toast.success('Added to cart', {
                icons: 'shopping_cart',
                position: "bottom-left", 
                duration : 3000
            });
            if(this.size !== '') {
                this.$store.commit({
                    type: 'addToCart',
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    oldPrice: item.oldPrice,
                    image: item.image,
                    productQuantity: this,
                    totalPrice: item.price,
                })
            }
        }
    }
}
</script>