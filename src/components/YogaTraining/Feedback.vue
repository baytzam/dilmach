<template>
    <div class="feedback-area bg-6ba292 ptb-100">
        <div class="container">
            <div class="feedback-slides-two">
                <carousel
                    :autoplay="5000"
                    :settings='settings' 
                    :breakpoints='breakpoints'
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="single-feedback-box">
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
        </div>
        <div class="divider2"></div>
        <div class="divider3"></div>
        <div class="tree-shape">
            <img src="../../assets/img/shape/tree-shape.png" alt="image">
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
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.',
                image: require('../../assets/img/user/user1.jpg'),
                name: 'John Smith',
                position: 'Python Developer',
            },
            {
                id: 2,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.',
                image: require('../../assets/img/user/user2.jpg'),
                name: 'Sarah Taylor',
                position: 'PHP Developer',
            },
            {
                id: 3,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.',
                image: require('../../assets/img/user/user3.jpg'),
                name: 'David Warner',
                position: 'QA Developer',
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            576: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
        },
    }),
})
</script>