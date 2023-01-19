<template>
    <div class="feedback-area bg-f9f9f9 pt-70">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-12">
                    <div class="coaching-feedback-image">
                        <img src="../../assets/img/business-coach/business-woman.jpg" alt="image">
                    </div>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="coaching-feedback-slides">
                        <carousel
                            :autoplay="5000"
                            :wrap-around="true"
                        >
                            <Slide v-for="slide in carouselItems" :key="slide.id">
                                <div class="single-coaching-feedback-box">
                                    <p>{{slide.description}}</p>
                                    <div class="client-info d-flex align-items-center">
                                        <img :src="slide.image" alt="user">
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
    name: 'Feedback',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        carouselItems: [
            {
                id: 1,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                image: require('../../assets/img/user/user1.jpg'),
                name: 'John Smith',
                position: 'Python Developer',
            },
            {
                id: 2,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                image: require('../../assets/img/user/user2.jpg'),
                name: 'David Malan',
                position: 'Developer',
            },
            {
                id: 3,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                image: require('../../assets/img/user/user2.jpg'),
                name: 'Sarah Taylor',
                position: 'PHP Developer',
            },
        ],
    }),
})
</script>