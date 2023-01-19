<template>
    <div class="kindergarten-services-area bg-f7ebeb pt-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Our Services</span>
                <h2 class="font-weight-black">Best Services for Kids</h2>
                <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
            </div>
            <div class="services-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings' 
                    :breakpoints='breakpoints'
                    :wrap-around="true"
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="single-kindergarten-services-box">
                            <img :src="slide.image" alt="image">
                            <div class="content">
                                <div class="icon">
                                    <i :class="slide.icon"></i>
                                </div>
                                <h3 class="font-weight-black">{{slide.title}}</h3>
                                <p>{{slide.description}}</p>
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                    </template>
                </carousel>
            </div>
            <div class="kids-kite-image">
                <img src="../../assets/img/kindergarten/kids-with-kite.png" alt="image">
            </div>
        </div>
        <div class="kindergarten-shape9">
            <img src="../../assets/img/kindergarten-shape/k-shape9.png" alt="image">
        </div>
        <div class="kindergarten-shape10">
            <img src="../../assets/img/kindergarten-shape/k-shape10.png" alt="image">
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'BestServicesKids',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                image: require('../../assets/img/shape/box-shape1.png'),
                icon: 'flaticon-guitar',
                title: 'Music Training',
                description: 'Lorem ipsum dolor sit amet, ipsum adipiscing elit elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum.',
            },
            {
                id: 2,
                image: require('../../assets/img/shape/box-shape2.png'),
                icon: 'flaticon-experience',
                title: 'Sports Training',
                description: 'Lorem ipsum dolor sit amet, ipsum adipiscing elit elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum.',
            },
            {
                id: 3,
                image: require('../../assets/img/shape/box-shape3.png'),
                icon: 'flaticon-artist',
                title: 'Art Training',
                description: 'Lorem ipsum dolor sit amet, ipsum adipiscing elit elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum.',
            },
            {
                id: 4,
                image: require('../../assets/img/shape/box-shape2.png'),
                icon: 'flaticon-translation',
                title: 'Language Training',
                description: 'Lorem ipsum dolor sit amet, ipsum adipiscing elit elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum.',
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            576: {
                itemsToShow: 2,
                snapAlign: 'left',
            },
            768: {
                itemsToShow: 2,
                snapAlign: 'left',
            },
            992: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        },
    }),
})
</script>