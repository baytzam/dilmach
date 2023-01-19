<template>
    <div class="gym-home-area">
        <div class="gym-banner-slides">
            <carousel
                :autoplay="5000"
                :wrap-around="true"
            >
                <Slide v-for="slide in carouselItems" :key="slide.id">
                    <div class="gym-banner-item">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-12">
                                    <div class="gym-banner-content">
                                        <h1>{{slide.heading}}</h1>
                                        <p>{{slide.description}}</p>
                                        <router-link to="/courses-one" class="default-btn">
                                            <i class="flaticon-user"></i>
                                            Join For Free
                                            <span></span>
                                        </router-link>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="gym-banner-image">
                                        <img :src="slide.image" alt="image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
                
                <template #addons>
                    <Navigation />
                </template> 
            </carousel>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'MainBanner',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        carouselItems: [
            {
                id: 1,
                heading: 'START YOUR FITNESS JOURNEY WITH EXPERT',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.',
                image: require('../../assets/img/gym/gym-banner1.png'),
            },
            {
                id: 2,
                heading: 'Vdemy IS MORE THAN A PLACE',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.',
                image: require('../../assets/img/gym/gym-banner2.png'),
            },
            {
                id: 3,
                heading: 'WE STANDARD FOR HEALTH & SAFETY',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.',
                image: require('../../assets/img/gym/gym-banner3.png'),
            },
        ],
    }),
})
</script>