<template>
    <div class="gallery-area pt-100 pb-70">
        <div class="container">
            <lightgallery
                :settings="{ speed: 500, plugins: plugins }"
                :onInit="onInit"
                :onBeforeSlide="onBeforeSlide"
                class="row"
            >
                <a
                    v-for="item in items"
                    :key="item.id"
                    :data-lg-size="item.size"
                    className="gallery-item"
                    :data-src="item.src"
                    class="col-lg-4 col-md-6 col-sm-6"
                >
                    <div class="single-gallery-item">
                        <img className="img-responsive" :src="item.thumb" />
                    </div>
                </a>
            </lightgallery>
        </div>
    </div>
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
let lightGallery= null;

export default {
    name: 'GalleryTwoColumn',
    components: {
        Lightgallery,
    },
    watch: {
        items() {
            this.$nextTick(() => {
                lightGallery.refresh();
            });
        },
    },
    data: () => ({
        plugins: [lgZoom],
        items: [
            {
                id: '1',
                src: require('../../assets/img/courses/img1.jpg'),
                thumb: require('../../assets/img/courses/img1.jpg'),
            },
            {
                id: '2',
                src: require('../../assets/img/courses/img2.jpg'),
                thumb: require('../../assets/img/courses/img2.jpg'),
            },
            {
                id: '3',
                src: require('../../assets/img/courses/img3.jpg'),
                thumb: require('../../assets/img/courses/img1.jpg'),
            },
            {
                id: '4',
                src: require('../../assets/img/courses/img4.jpg'),
                thumb: require('../../assets/img/courses/img4.jpg'),
            },
            {
                id: '5',
                src: require('../../assets/img/courses/img5.jpg'),
                thumb: require('../../assets/img/courses/img5.jpg'),
            },
            {
                id: '6',
                src: require('../../assets/img/courses/img6.jpg'),
                thumb: require('../../assets/img/courses/img6.jpg'),
            },
            {
                id: '7',
                src: require('../../assets/img/courses/img7.jpg'),
                thumb: require('../../assets/img/courses/img7.jpg'),
            },
            {
                id: '8',
                src: require('../../assets/img/courses/img8.jpg'),
                thumb: require('../../assets/img/courses/img8.jpg'),
            },
            {
                id: '9',
                src: require('../../assets/img/courses/img9.jpg'),
                thumb: require('../../assets/img/courses/img9.jpg'),
            },
        ],
    }),
    methods: {
        onInit: (detail) => {
            lightGallery = detail.instance;
        },
        onBeforeSlide: () => {
            console.log('calling before slide');
        },
    },
};
</script>
<style lang="css">
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lg-zoom.css');
</style>