<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="row">
                        <div class="col-lg-12 col-md-6">
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
                                            The Beat Goes On: High School Choirs Improvise In The Age Of Coronavirus
                                        </router-link>
                                    </h3>
                                    <ul class="post-content-footer d-flex align-items-center">
                                        <li>
                                            <div class="post-author d-flex align-items-center">
                                                <img src="../../assets/img/user/user1.jpg" class="rounded-circle" alt="image">
                                                <span>Alex Morgan</span>
                                            </div>
                                        </li>
                                        <li><i class='flaticon-calendar'></i> April 30, 2021</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-6">
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
                                            How Online Book Read-Alouds Can Help Students' Literacy and Connection During Social Distancing
                                        </router-link>
                                    </h3>
                                    <ul class="post-content-footer d-flex align-items-center">
                                        <li>
                                            <div class="post-author d-flex align-items-center">
                                                <img src="../../assets/img/user/user2.jpg" class="rounded-circle" alt="image">
                                                <span>Sarah Taylor</span>
                                            </div>
                                        </li>
                                        <li><i class='flaticon-calendar'></i> April 29, 2021</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-6">
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
                                            How To Secure Remote Workers During The COVID-19 Outbreak
                                        </router-link>
                                    </h3>
                                    <ul class="post-content-footer d-flex align-items-center">
                                        <li>
                                            <div class="post-author d-flex align-items-center">
                                                <img src="../../assets/img/user/user3.jpg" class="rounded-circle" alt="image">
                                                <span>David Warner</span>
                                            </div>
                                        </li>
                                        <li><i class='flaticon-calendar'></i> April 28, 2021</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-6">
                            <div class="single-blog-post">
                                <div class="post-image">
                                    <router-link to="/single-blog-one" class="d-block">
                                        <img src="../../assets/img/blog/img7.jpg" alt="image">
                                    </router-link>
                                </div>
                                <div class="post-content">
                                    <a href="#" class="category">Education</a>
                                    <h3>
                                        <router-link to="/single-blog-one">
                                            What A Company Needs To Provide Employees For Effective Remote Work
                                        </router-link>
                                    </h3>
                                    <ul class="post-content-footer d-flex align-items-center">
                                        <li>
                                            <div class="post-author d-flex align-items-center">
                                                <img src="../../assets/img/user/user1.jpg" class="rounded-circle" alt="image">
                                                <span>Alex Morgan</span>
                                            </div>
                                        </li>
                                        <li><i class='flaticon-calendar'></i> April 30, 2021</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <div class="pagination-area text-center">
                                <router-link to="/blog-four" class="prev page-numbers"><i class='bx bx-chevrons-left'></i></router-link>
                                <span class="page-numbers current" aria-current="page">1</span>
                                <router-link to="/blog-four" class="page-numbers">2</router-link>
                                <router-link to="/blog-four" class="page-numbers">3</router-link>
                                <router-link to="/blog-four" class="page-numbers">4</router-link>
                                <router-link to="/blog-four" class="next page-numbers"><i class='bx bx-chevrons-right'></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <BlogSidebar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogSidebar from '../Common/BlogSidebar'

export default {
    name: 'Blog',
    components: {
        BlogSidebar
    },
}
</script>