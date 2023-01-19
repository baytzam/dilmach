<template>
    <div>
        <div class="about-area-two pb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-12">
                        <div class="about-content-box">
                            <span class="sub-title">Distance Learning</span>
                            <h2>Build Your Project Management Skills Online, Anytime</h2>
                            <p>Want to learn and earn PDUs or CEUs on your schedule — anytime, anywhere? Or, pick up a new skill quickly like, project team leadership or agile? Browse our most popular online courses.</p>
                            <p><strong>Grow your knowledge and your opportunities with thought leadership, training and tools.</strong></p>
                            <router-link to="/contact" class="link-btn">Explore Learning</router-link>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12">
                        <div class="about-video-box">
                            <div class="image">
                                <img src="../../assets/img/about/about-img6.jpg" alt="image">
                            </div>
                            <a 
                                class="video-btn popup-youtube"
                                href="javascript:void(0)" 
                                v-on:click="isPopupMethod(isPopup)"
                            >
                                <i class="flaticon-play"></i>
                            </a>
                            <div class="shape10">
                                <img src="../../assets/img/shape/shape9.png" alt="image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape3">
                <img src="../../assets/img/shape/shape3.png" alt="image">
            </div>
            <div class="shape4">
                <img src="../../assets/img/shape/shape4.png" alt="image">
            </div>
            <div class="shape2">
                <img src="../../assets/img/shape/shape2.png" alt="image">
            </div>
        </div>

        <div 
            class="popup-video" 
            v-if="isPopup"
        >
            <div class="d-table">
                <div class="d-table-cell">
                    <div 
                        class="popup-overlay-close"
                        v-on:click="isPopupMethod(isPopup)"
                    >
                        <div class="popup-overlay-close-line"></div>
                        <div class="popup-overlay-close-line"></div>
                    </div>
                    <div class="play-video">
                        <iframe src="https://www.youtube.com/embed/bk7McNUjWgw"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectManagementSkills',
    data (){
        return {
            isPopup: false,
        }
    },
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
}
</script>