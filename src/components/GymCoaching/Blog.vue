<template>
    <div class="blog-area pb-100">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">News and Blogs</span>
                    <h2>CHECK OUT LATEST BLOG</h2>
                    <p>We always give extra care to our student's skills improvements and feel excited to share our latest research and learnings!</p>
                </div>
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <div class="single-blog-post-item">
                            <div class="post-image">
                                <router-link to="/single-blog-three" class="d-block">
                                    <img src="../../assets/img/blog/blog-img1.jpg" alt="image">
                                </router-link>
                            </div>
                            <div class="post-content">
                                <a href="#" class="category">Education</a>
                                <h3>
                                    <router-link to="/single-blog-three">
                                        7 EMERGENCY HACKS TO STAY HEALTHY WINTER
                                    </router-link>
                                </h3>
                                <ul class="post-content-footer d-flex align-items-center">
                                    <li>
                                        <div class="post-author d-flex align-items-center">
                                            <img src="../../assets/img/user/user1.jpg" class="rounded-circle" alt="image">
                                            <span>Alex Morgan</span>
                                        </div>
                                    </li>
                                    <li><i class='flaticon-calendar'></i> April 30, 2022</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="blog-post-list">
                            <div class="row">
                                <div class="col-lg-12 col-sm-6 col-md-6">
                                    <div class="single-blog-post-item">
                                        <div class="post-image">
                                            <router-link to="/single-blog-three" class="d-block">
                                                <img src="../../assets/img/blog/blog-img2.jpg" alt="image">
                                            </router-link>
                                        </div>
                                        <div class="post-content">
                                            <h3>
                                                <router-link to="/single-blog-three">
                                                    SAY BUH-BYE TO HOLIDAY STRESS WITH THIS GYM
                                                </router-link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-sm-6 col-md-6">
                                    <div class="single-blog-post-item">
                                        <div class="post-image">
                                            <router-link to="/single-blog-three" class="d-block">
                                                <img src="../../assets/img/blog/blog-img3.jpg" alt="image">
                                            </router-link>
                                        </div>
                                        <div class="post-content">
                                            <h3>
                                                <router-link to="/single-blog-three">
                                                    10 BEST GIFT IDEAS WHEN YOU’RE IN A PINCH
                                                </router-link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <div class="blog-post-info">
                            <p>Get into details now? 
                                <router-link to="/blog-three">View all posts</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Blog'
}
</script>