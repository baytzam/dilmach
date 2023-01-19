<template>
    <div class="testimonials-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Testimonials</span>
                <h2>Our Learners Feedback</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="testimonials-slides-two">
                <carousel
                    :autoplay="5000"
                    :wrap-around="true"
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="testimonials-item">
                            <div class="row align-items-center">
                                <div class="col-lg-8 col-md-12">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    <h3>John Smith</h3>
                                    <span>Python Developer</span>
                                </div>
                                <div class="col-lg-4 col-md-12 text-center">
                                    <img src="../../assets/img/user/user7.png" alt="image">
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
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Testimonials',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        carouselItems: [
            {
                id: 1,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                name: 'John Smith',
                position: 'Python Developer',
                image: require('../../assets/img/user/user7.png'),
            },
            {
                id: 2,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                name: 'David Malan',
                position: 'Developer',
                image: require('../../assets/img/user/user8.png'),
            },
            {
                id: 3,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                name: 'Sarah Taylor',
                position: 'PHP Developer',
                image: require('../../assets/img/user/user9.png'),
            },
        ],
    }),
})
</script>