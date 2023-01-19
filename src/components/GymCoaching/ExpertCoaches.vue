<template>
    <div class="trainer-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Instructor</span>
                <h2>TEAM OF EXPERT COACHES</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div class="container-fluid">
            <div class="trainer-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings' 
                    :breakpoints='breakpoints'
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="single-trainer-box">
                            <img :src="slide.image" alt="image">
                            <span class="designation">{{slide.designation}}</span>
                            <div class="content">
                                <h3>{{slide.name}}</h3>
                                <ul class="social-link">
                                    <li>
                                        <a href="https://www.facebook.com/" class="d-block" target="_blank">
                                            <i class='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" class="d-block" target="_blank">
                                            <i class='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" class="d-block" target="_blank">
                                            <i class='bx bxl-instagram'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" class="d-block" target="_blank">
                                            <i class='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue';
import { Carousel, Slide  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'ExpertCoaches',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                image: require('../../assets/img/trainer/trainer-img1.jpg'),
                designation: 'AERIAL EXPERT',
                name: 'ALYSA MAYA',
            },
            {
                id: 2,
                image: require('../../assets/img/trainer/trainer-img2.jpg'),
                designation: 'BARRE EXPERT',
                name: 'SARAH TAYLOR',
            },
            {
                id: 3,
                image: require('../../assets/img/trainer/trainer-img3.jpg'),
                designation: 'BOOTCAMP EXPERT',
                name: 'JAMES ANDY',
            },
            {
                id: 4,
                image: require('../../assets/img/trainer/trainer-img4.jpg'),
                designation: 'CROSSFIT EXPERT',
                name: 'LINA LUCY',
            },
            {
                id: 5,
                image: require('../../assets/img/trainer/trainer-img5.jpg'),
                designation: 'GYM EXPERT',
                name: 'ALINA STIVE',
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            576: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            992: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 4,
                snapAlign: 'center',
            },
            1550: {
                itemsToShow: 5,
                snapAlign: 'center',
            },
        },
    }),
})
</script>