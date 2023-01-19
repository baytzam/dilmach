<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">News and Blogs</span>
                <h2>{{heading}}</h2>
                <p>We always give extra care to our student's skills improvements and feel excited to share our latest research and learnings!</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/blog/img1.jpg" alt="image">
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
                                <li><i class='flaticon-calendar'></i> April 30, 2022</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/blog/img2.jpg" alt="image">
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
                                <li><i class='flaticon-calendar'></i> April 29, 2022</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/blog/img3.jpg" alt="image">
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
                                <li><i class='flaticon-calendar'></i> April 28, 2022</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="blog-post-info">
                        <p>Get into details now? <router-link :to="blogLink">View all posts</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog',
    props: ['heading', 'blogLink']
}
</script>