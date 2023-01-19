<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">News and Blogs</span>
                <h2>Check Out Our Latest Blog</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/blog/img16.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="post-content">
                            <a href="#" class="category">Education</a>
                            <h3>
                                <router-link to="/single-blog-one">
                                    University Admissions Could Face Emergency Controls
                                </router-link>
                            </h3>
                            <ul class="post-content-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <div class="post-author d-flex align-items-center">
                                        <img src="../../assets/img/user/user1.jpg" class="rounded-circle" alt="image">
                                        <span>Alex Morgan</span>
                                    </div>
                                </li>
                                <li><i class='flaticon-calendar'></i> Feb 22, 2021</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/blog/img17.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="post-content">
                            <a href="#" class="category">Online</a>
                            <h3>
                                <router-link to="/single-blog-one">
                                    Online Learning Can Prepare Students For A Fast-Changing
                                </router-link>
                            </h3>
                            <ul class="post-content-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <div class="post-author d-flex align-items-center">
                                        <img src="../../assets/img/user/user2.jpg" class="rounded-circle" alt="image">
                                        <span>Sarah Taylor</span>
                                    </div>
                                </li>
                                <li><i class='flaticon-calendar'></i> Feb 25, 2021</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/blog/img18.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="post-content">
                            <a href="#" class="category">Learning</a>
                            <h3>
                                <router-link to="/single-blog-one">
                                    As Learning Moves Online, Trigger Warnings Must Too
                                </router-link>
                            </h3>
                            <ul class="post-content-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <div class="post-author d-flex align-items-center">
                                        <img src="../../assets/img/user/user3.jpg" class="rounded-circle" alt="image">
                                        <span>David Warner</span>
                                    </div>
                                </li>
                                <li><i class='flaticon-calendar'></i> Feb 28, 2021</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="blog-post-info">
                        <p>Get into details now?
                            <router-link to="/blog-one">View all posts</router-link>
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