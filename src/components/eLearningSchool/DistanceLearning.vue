<template>
    <div>
        <div class="funfacts-and-feedback-area ptb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="feedback-content">
                            <span class="sub-title">Distance learning</span>
                            <h2>Flexible Study at Your Own Pace, According to Your Own Needs</h2>
                            <p>With the Vdemy, you can study whenever and wherever you choose. We have students in over 175 countries and a global reputation as a pioneer in the field of flexible learning. Our teaching also means, if you travel often or need to relocate, you can continue to study wherever you go.</p>
                            <div class="feedback-slides">
                                <carousel
                                    :autoplay="5000"
                                    :wrap-around="true"
                                >
                                    <Slide v-for="slide in carouselItems" :key="slide.id">
                                        <div class="single-feedback-item">
                                            <p>{{slide.description}}</p>
                                            <div class="client-info d-flex align-items-center">
                                                <img :src="slide.image" class="rounded-circle" alt="image">
                                                <div class="title">
                                                    <h3>{{slide.name}}</h3>
                                                    <span>{{slide.position}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>

                                    <template #addons>
                                        <Pagination />
                                    </template> 
                                </carousel>
                            </div>
                            <div class="feedback-info">
                                <p>Not a member yet? 
                                    <router-link to="/authentication">Register now</router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="funfacts-list">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-funfacts-box">
                                        <h3>1926</h3>
                                        <p>Finished Sessions</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-funfacts-box">
                                        <h3>3279</h3>
                                        <p>Enrolled Learners</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-funfacts-box">
                                        <h3>250</h3>
                                        <p>Online Instructors</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-funfacts-box">
                                        <h3>100%</h3>
                                        <p>Satisfaction Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <div class="video-box">
                            <div class="image">
                                <img src="../../assets/img/video-img1.jpg" class="shadow" alt="image">
                            </div>
                            <a 
                                href="javascript:void(0)" 
                                class="video-btn popup-youtube"
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
            <div class="shape2">
                <img src="../../assets/img/shape/shape2.png" alt="image">
            </div>
            <div class="shape3">
                <img src="../../assets/img/shape/shape3.png" alt="image">
            </div>
            <div class="shape4">
                <img src="../../assets/img/shape/shape4.png" alt="image">
            </div>
            <div class="shape9">
                <img src="../../assets/img/shape/shape8.svg" alt="image">
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
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'DistanceLearning',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        carouselItems: [
            {
                id: 1,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                image: require('../../assets/img/user/user1.jpg'),
                name: 'John Smith',
                position: 'Python Developer',
            },
            {
                id: 2,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                image: require('../../assets/img/user/user2.jpg'),
                name: 'Sarah Taylor',
                position: 'PHP Developer',
            },
            {
                id: 3,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                image: require('../../assets/img/user/user3.jpg'),
                name: 'David Warner',
                position: 'QA Developer',
            },
        ],

        isPopup: false,
    }),
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
})
</script>