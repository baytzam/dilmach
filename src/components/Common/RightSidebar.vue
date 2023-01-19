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
        <div class="widget widget_recent_courses">
            <h3 class="widget-title">Recent Courses</h3>
            <div class="item">
                <router-link to="/single-courses-one" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </router-link>
                <div class="info">
                    <span>$49.00</span>
                    <h4 class="title usmall">
                        <router-link to="/single-courses-one">
                            The Data Science Course 2021: Complete Data Science Bootcamp
                        </router-link>
                    </h4>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <router-link to="/single-courses-one" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </router-link>
                <div class="info">
                    <span>$59.00</span>
                    <h4 class="title usmall">
                        <router-link to="/single-courses-one">
                            Java Programming Masterclass for Software Developers
                        </router-link>
                    </h4>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item">
                <router-link to="/single-courses-one" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </router-link>
                <div class="info">
                    <span>$69.00</span>
                    <h4 class="title usmall">
                        <router-link to="/single-courses-one">
                            Deep Learning A-Z™: Hands-On Artificial Neural Networks
                        </router-link>
                    </h4>
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
    name: 'RightSidebar',
    methods: {
        formSubmit() {
            console.log('form submitted');
        },
    },
}
</script>