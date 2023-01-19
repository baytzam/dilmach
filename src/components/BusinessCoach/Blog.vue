<template>
    <div class="blog-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Blog</span>
                <h2 class="inter-font font-weight-bold">Latest Blog Post</h2>
                <p>We always give extra care to our student's skills improvements and feel excited to share our latest research and learnings!</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-post-box">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/business-coach/business-coach3.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="post-content">
                            <ul class="meta d-flex justify-content-between align-items-center">
                                <li><a href="#">Business</a></li>
                                <li><i class='flaticon-calendar'></i> April 29, 2021</li>
                            </ul>
                            <h3 class="inter-font">
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
                                <li><a href="#" class="link-btn"><i class='bx bx-right-arrow-alt'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-post-box">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/business-coach/business-coach4.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="post-content">
                            <ul class="meta d-flex justify-content-between align-items-center">
                                <li><a href="#">Education</a></li>
                                <li><i class='flaticon-calendar'></i> April 28, 2021</li>
                            </ul>
                            <h3 class="inter-font">
                                <router-link to="/single-blog-one">
                                    Online Learning Can Prepare Students For A Fast-Changing
                                </router-link>
                            </h3>
                            <ul class="post-content-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <div class="post-author d-flex align-items-center">
                                        <img src="../../assets/img/user/user2.jpg" class="rounded-circle" alt="image">
                                        <span>David Warner</span>
                                    </div>
                                </li>
                                <li><a href="#" class="link-btn"><i class='bx bx-right-arrow-alt'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-post-box">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/business-coach/business-coach5.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="post-content">
                            <ul class="meta d-flex justify-content-between align-items-center">
                                <li><a href="#">Coaching</a></li>
                                <li><i class='flaticon-calendar'></i> April 27, 2021</li>
                            </ul>
                            <h3 class="inter-font">
                                <router-link to="/single-blog-one">
                                    As Learning Moves Online, Trigger Warnings Must Too
                                </router-link>
                            </h3>
                            <ul class="post-content-footer d-flex justify-content-between align-items-center">
                                <li>
                                    <div class="post-author d-flex align-items-center">
                                        <img src="../../assets/img/user/user3.jpg" class="rounded-circle" alt="image">
                                        <span>Sarah Taylor</span>
                                    </div>
                                </li>
                                <li><a href="#" class="link-btn"><i class='bx bx-right-arrow-alt'></i></a></li>
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