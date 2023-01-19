<template>
    <div>
        <div class="experience-area ptb-100 extra-padding">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="experience-content">
                            <span class="sub-title">Join our World Famous Yoga Teacher Training Course... Online!</span>
                            <h2 class="playfair-display-font">200hr, 300hr & 500hr Certified Online Yoga courses</h2>
                            <p>eCademy training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes virtually by sitting in your comfort zone. Our flexible learning initiatives will help you to learn better and quicker than the traditional ways of learning skills.</p>
                            <ul class="features-list">
                                <li><i class="bx bx-check"></i> Receive a Yoga Alliance Certificate</li>
                                <li><i class="bx bx-check"></i> 100hrs of Live Streaming Zoom Classes</li>
                                <li><i class="bx bx-check"></i> Watch Video Modules in Your Free Time</li>
                                <li><i class="bx bx-check"></i> Flex Schedule with Extended Time from Yoga Alliance</li>
                                <li><i class="bx bx-check"></i> Practice Traditional Hatha and vinyasa Yoga</li>
                                <li><i class="bx bx-check"></i> Bonus Aerial & Acro Yoga Workshops</li>
                            </ul>
                            <router-link to="/authentication" class="default-btn">
                                <i class="flaticon-user"></i>
                                Get Started Now
                                <span></span>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="experience-image">
                            <img src="../../assets/img/experience-img1.jpg" alt="image">
                            <a 
                                href="javascript:void(0)" 
                                class="video-btn"
                                v-on:click="isPopupMethod(isPopup)"
                            >
                                <i class="flaticon-play"></i>
                            </a>
                            <span class="title"><span>15</span> Years of Experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div 
            class="popup-video" 
            v-if="isPopup"
        >
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div 
                            class="popup-overlay-close"
                            v-on:click="isPopupMethod(isPopup)"
                        >
                            <div class="popup-overlay-close-line"></div>
                            <div class="popup-overlay-close-line"></div>
                        </div>
                        <div class="play-video">
                            <iframe class="responsive-iframe" src="https://www.youtube.com/embed/bk7McNUjWgw"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OnlineYogaCourses',
    data (){
        return {
            isPopup: false
        }
    },
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
}
</script>

<style lang="scss" scoped>
.video-btn {
    width: 100px;
    height: 70px;
    font-size: 30px;
    z-index: 3;
    text-align: center;
    line-height: 70px;
    background-color: #ff0000;
    border-radius: 7px;
    color: #fff;
    position: relative;

    &::after, &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        bottom: 0;
        left: 0;
        border-radius: 7px;
        border: 1px solid var(--whiteColor);
    }
    &::before {
        animation: ripple 2s linear infinite;
    }
    &::after {
        animation: ripple 2s linear 1s infinite;
    }
    &:hover {
        background-color: var(--mainColor);
    }
}
.popup-video {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.60);

    .popup-overlay-close {
        position: absolute;
        top: 30px;
        right: 40px;
        width: 30px;
        height: 30px;
        z-index: 2;
        text-align: center;
        cursor: pointer;
        transition: all 0.9s ease-in-out 1.5s;

        .popup-overlay-close-line {
            width: 100%;
            height: 3px;
            float: left;
            margin-bottom: 5px;
            background-color: var(--whiteColor);
            transition: all 500ms ease;

            &:nth-child(1) {
                transform: rotate(45deg);
            }
            &:nth-child(2) {
                margin-top: -7px;
                transform: rotate(-45deg);
            }
        }
        &:hover {
            .popup-overlay-close-line {
                background: var(--mainColor);
                transform: rotate(180deg);
            }
        }
    }
    .play-video {
        text-align: center;
        iframe {
            width: 1000px;
            height: 550px;
            border: none !important;
        }
    }
}
</style>