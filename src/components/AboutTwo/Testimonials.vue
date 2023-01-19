<template>
    <div class="testimonials-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Testimonials</span>
                <h2>What People Say About Vdemy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="testimonials-slides">
                <carousel
                    :autoplay="5000"
                    :wrap-around="true"
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="single-testimonials-item">
                            <img :src="slide.image" class="client-img" alt="image">
                            <p>{{slide.description}}.</p>
                            <h3>{{slide.name}}</h3>
                            <span>{{slide.position}}</span>
                            <div class="shape-img">
                                <img src="../../assets/img/shape/shape4.png" class="shape-1" alt="image">
                                <img src="../../assets/img/shape/shape14.png" class="shape-2" alt="image">
                                <img src="../../assets/img/shape/shape7.png" class="shape-3" alt="image">
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
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Testimonials',
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
                image: require('../../assets/img/user/user1.jpg'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.',
                name: 'John Smith',
                position: 'Python Developer',
            },
            {
                id: 2,
                image: require('../../assets/img/user/user2.jpg'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.',
                name: 'Sarah Taylor',
                position: 'PHP Developer',
            },
            {
                id: 3,
                image: require('../../assets/img/user/user3.jpg'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.',
                name: 'David Warner',
                position: 'PQA Developer',
            },
        ],
    }),
})
</script>