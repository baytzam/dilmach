<template>
    <div>
        <div class="funfacts-and-feedback-area ptb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="feedback-content">
                            <span class="sub-title">Кто будет вас обучать</span>
                            <h2>👨🏻‍🏫 НАШИ ПРЕПОДАВАТЕЛИ</h2>
<!--                            <p>Тут чуть меньше текст, второстепенный, но если это лишнее можем удалить.</p>-->
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="single-courses-box">
                            <div class="video-box">
                                <div class="image">
                                    <img src="../../assets/adil.jpg" class="shadow" alt="image">
                                </div>
<!--                                <a-->
<!--                                    href="javascript:void(0)"-->
<!--                                    class="video-btn popup-youtube"-->
<!--                                    v-on:click="isPopupMethod(isPopup)"-->
<!--                                >-->
<!--                                    <i class="flaticon-play"></i>-->
<!--                                </a>-->
                                <div class="shape10">
                                    <!-- <img src="../../assets/img/shape/shape9.png" alt="image"> -->
                                </div>
                            </div>
                            <div class="courses-content">
                                <h3>🙋🏻‍♂️Adil-Er Nayman</h3>
                                <p>- отзывчивый и открытый преподаватель начального этапа (А1), готовит вас к обучению с учителями-носителями языка.</p>
                                <p>Уровень турецкого языка - C1 (продвинутый уровень) сертификат BURSA ULUDAĞ ÜNİVERSİTESİ </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="single-courses-box">
                            <div class="video-box">
                                <div class="image">
                                    <img src="../../assets/tuncay-photo.jpg" class="shadow" alt="image">
                                </div>
<!--                                <a -->
<!--                                    href="javascript:void(0)" -->
<!--                                    class="video-btn popup-youtube"-->
<!--                                    v-on:click="isPopupMethod(isPopup)"-->
<!--                                >-->
<!--                                    <i class="flaticon-play"></i>-->
<!--                                </a>-->
                                <div class="shape10">
                                    <!-- <img src="../../assets/img/shape/shape9.png" alt="image"> -->
                                </div>
                            </div>
                            <div class="courses-content">
                                <h3> 👨🏻‍🏫 Tuncay Çalışkan</h3>
                                <p>- весёлый и вовлекающий преподаватель. </p>
                                <p>11 лет преподаёт турецкий иностранцам и детям. Уровень турецкого языка - C2 + (носитель языка), сертифицированный преподаватель турецкого языка.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="single-courses-box">
                            <div class="video-box">
                                <div class="image">
                                    <img src="../../assets/zehra.jpg" class="shadow" alt="image">
                                </div>
<!--                                <a -->
<!--                                    href="javascript:void(0)" -->
<!--                                    class="video-btn popup-youtube"-->
<!--                                    v-on:click="isPopupMethod(isPopup)"-->
<!--                                >-->
<!--                                    <i class="flaticon-play"></i>-->
<!--                                </a>-->
                                <div class="shape10">
                                    <!-- <img src="../../assets/img/shape/shape9.png" alt="image"> -->
                                </div>
                            </div>
                            <div class="courses-content">
                                <h3>🧕🏻 Zehra Ergin</h3>
                                <p>- добрая и эрудированная преподавательница.</p>
                                <p> Проводит занятия с женщинами. Уровень турецкого языка (C2) + владеет русским. ANKARA HACETTEPE ÜNİVERSİTESİ.</p>
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
                        <video  width="320" height="640" controls>
                            <source src="../../assets/tuncay.mp4" type="video/mp4">
                        </video>
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
