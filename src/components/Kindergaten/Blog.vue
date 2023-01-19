<template>
    <div class="blog-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Our News</span>
                <h2 class="font-weight-black">Check Out Our Latest Blog</h2>
                <p>We always give extra care to our student's skills improvements and feel excited to share our latest research and learnings!</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-blog-item">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/blog/kindergarten-img1.jpg" alt="image">
                            </router-link>
                            <a href="#" class="link-btn"></a>
                        </div>
                        <div class="post-content">
                            <a href="#" class="category">Preschool</a>
                            <h3 class="font-weight-black">
                                <router-link to="/single-blog-one">
                                    Why Play Is Important in Preschool and Early
                                </router-link>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-blog-item">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/blog/kindergarten-img2.jpg" alt="image">
                            </router-link>
                            <a href="#" class="link-btn"></a>
                        </div>
                        <div class="post-content">
                            <a href="#" class="category">Books</a>
                            <h3 class="font-weight-black">
                                <router-link to="/single-blog-one">
                                    Best Three Billy Goats Gruff Books for Preschool
                                </router-link>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-blog-item">
                        <div class="post-image">
                            <router-link to="/single-blog-one" class="d-block">
                                <img src="../../assets/img/blog/kindergarten-img3.jpg" alt="image">
                            </router-link>
                            <a href="#" class="link-btn"></a>
                        </div>
                        <div class="post-content">
                            <a href="#" class="category">Theme</a>
                            <h3 class="font-weight-black">
                                <router-link to="/single-blog-one">
                                    Flashlight Literacy Activity for Your Camping Theme
                                </router-link>
                            </h3>
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