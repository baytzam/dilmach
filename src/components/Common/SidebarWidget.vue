<template>
    <div class="widget-area">
        <div class="widget widget_insight">
            <ul>
                <li><router-link to="/about-one">About Us</router-link></li>
                <li><router-link to="/contact">Contact Us</router-link></li>
                <li><router-link to="/purchase-guide">Purchase Guide</router-link></li>
                <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                <li><router-link to="/terms-of-service">Terms of Service</router-link></li>
            </ul>
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
                <a href="#">Braike <span class="tag-link-count"> (2)</span></a>
                <a href="#">Fashion <span class="tag-link-count"> (2)</span></a>
                <a href="#">Travel <span class="tag-link-count"> (1)</span></a>
                <a href="#">Smart <span class="tag-link-count"> (1)</span></a>
                <a href="#">Marketing <span class="tag-link-count"> (1)</span></a>
                <a href="#">Tips <span class="tag-link-count"> (2)</span></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SidebarWidget'
}
</script>