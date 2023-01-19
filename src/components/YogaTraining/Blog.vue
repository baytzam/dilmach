<template>
    <div class="blog-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Our New</span>
                <h2 class="playfair-display-font">Check Out Our Latest Blog</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post-box">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/yoga/yoga-blog-img1.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="post-content">
                            <router-link to="/single-blog-one" class="category">Yoga</router-link>
                            <h3 class="playfair-display-font">
                                <router-link to="/single-blog-one">
                                    Surprising SUP Yoga Poses You’ll Want to Try This Summer
                                </router-link>
                            </h3>
                            <ul class="post-content-footer d-flex justify-content-between align-items-center">
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
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post-box">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/yoga/yoga-blog-img2.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="post-content">
                            <router-link to="/single-blog-one" class="category">YTT</router-link>
                            <h3 class="playfair-display-font">
                                <router-link to="/single-blog-one">
                                    7 Things I Learned From Doing One of Those Social Media Yoga
                                </router-link>
                            </h3>
                            <ul class="post-content-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <div class="post-author d-flex align-items-center">
                                        <img src="../../assets/img/user/user2.jpg" class="rounded-circle" alt="image">
                                        <span>Sarah Taylor</span>
                                    </div>
                                </li>
                                <li><i class='flaticon-calendar'></i> April 29, 2022</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post-box">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/yoga/yoga-blog-img3.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="post-content">
                            <router-link to="/single-blog-one" class="category">Yoga</router-link>
                            <h3 class="playfair-display-font">
                                <router-link to="/single-blog-one">
                                    10 Ways to Get Real About Your Body’s Limitations & Avoid
                                </router-link>
                            </h3>
                            <ul class="post-content-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <div class="post-author d-flex align-items-center">
                                        <img src="../../assets/img/user/user3.jpg" class="rounded-circle" alt="image">
                                        <span>David Warner</span>
                                    </div>
                                </li>
                                <li><i class='flaticon-calendar'></i> April 28, 2022</li>
                            </ul>
                        </div>
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