<template>
    <div class="gym-feedback-area ptb-100">
        <div class="container-fluid">
            <div class="gym-feedback-slides">
                <carousel
                    :autoplay="5000"
                    :wrap-around="true"
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="gym-feedback-box">
                            <p>{{slide.description}}</p>
                            <div class="title">
                                <h3>{{slide.name}}</h3>
                                <span>{{slide.position}}</span>
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
    name: 'Feedback',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        carouselItems: [
            {
                id: 1,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                name: 'John Smith',
                position: 'Python Developer',
            },
            {
                id: 2,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                name: 'Sarah Taylor',
                position: 'Web Developer',
            },
        ],
    }),
})
</script>