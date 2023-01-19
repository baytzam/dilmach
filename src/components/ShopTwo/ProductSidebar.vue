<template>
    <div class="widget-area">
        <div class="widget widget_search">
            <h3 class="widget-title">Search</h3>
            <form class="search-form" @submit.prevent>
                <label>
                    <span class="screen-reader-text">Search for:</span>
                    <input type="search" class="search-field" placeholder="Search...">
                </label>
                <button type="submit"><i class="bx bx-search-alt"></i></button>
            </form>
        </div>
        <div class="widget widget_popular_products">
            <h3 class="widget-title">Popular Products</h3>
            <div class="item">
                <a href="#" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </a>
                <div class="info">
                    <span>$49.00</span>
                    <h4 class="title usmall"><a href="#">Random Romance Novel Title Generator</a></h4>
                    <div class="rating">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <a href="#" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </a>
                <div class="info">
                    <span>$59.00</span>
                    <h4 class="title usmall"><a href="#">Writing Exercises Story Title Ideas</a></h4>
                    <div class="rating">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <a href="#" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </a>
                <div class="info">
                    <span>$69.00</span>
                    <h4 class="title usmall"><a href="#">Amaze Story Kitt Net's Book Ideas</a></h4>
                    <div class="rating">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="widget widget_tag_cloud">
            <h3 class="widget-title">Popular Tags</h3>
            <div class="tagcloud">
                <a href="#">Business <span class="tag-link-count"> (3)</span></a>
                <a href="#">Design <span class="tag-link-count"> (3)</span></a>
                <a href="#">Digital <span class="tag-link-count"> (2)</span></a>
                <a href="#">SEO <span class="tag-link-count"> (2)</span></a>
                <a href="#">Braike <span class="tag-link-count"> (2)</span></a>
                <a href="#">Fashion <span class="tag-link-count"> (2)</span></a>
                <a href="#">Software <span class="tag-link-count"> (2)</span></a>
                <a href="#">Travel <span class="tag-link-count"> (1)</span></a>
                <a href="#">Smart <span class="tag-link-count"> (1)</span></a>
                <a href="#">Marketing <span class="tag-link-count"> (1)</span></a>
                <a href="#">Tips <span class="tag-link-count"> (2)</span></a>
                <a href="#">Website <span class="tag-link-count"> (2)</span></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductSidebar',
    methods: {
        formSubmit() {
            console.log('form submitted');
        },
    },
}
</script>