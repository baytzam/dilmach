<template>
    <div class="blog-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">News</span>
                    <h2>Check Out Our Latest Blog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <div class="single-blog-post-item">
                            <div class="post-image">
                                <router-link to="/blog-three" class="d-block">
                                    <img src="../../assets/img/blog/img4.jpg" alt="image">
                                </router-link>
                            </div>
                            <div class="post-content">
                                <a href="#" class="category">Education</a>
                                <h3>
                                    <router-link to="/blog-three">
                                        University Admissions Could Face Emergency Controls
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
                                            <router-link to="/blog-three" class="d-block">
                                                <img src="../../assets/img/blog/img5.jpg" alt="image">
                                            </router-link>
                                        </div>
                                        <div class="post-content">
                                            <h3>
                                                <router-link to="/blog-three">
                                                    Online Learning Can Prepare Students For A Fast-Changing
                                                </router-link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-sm-6 col-md-6">
                                    <div class="single-blog-post-item">
                                        <div class="post-image">
                                            <router-link to="/blog-three" class="d-block">
                                                <img src="../../assets/img/blog/img6.jpg" alt="image">
                                            </router-link>
                                        </div>
                                        <div class="post-content">
                                            <h3>
                                                <router-link to="/blog-three">
                                                    As Learning Moves Online, Trigger Warnings Must Too
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