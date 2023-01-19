<template>
    <div>
        <div class="video-area">
            <div class="container">
                <div class="video-box mt-0">
                    <div class="image">
                        <img src="../../assets/img/video-img2.jpg" class="shadow" alt="image">
                    </div>
                    <a
                        class="video-btn popup-youtube"
                        href="javascript:void(0)" 
                        v-on:click="isPopupMethod(isPopup)"
                    >
                        <i class="flaticon-play"></i>
                    </a>
                </div>
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
                        <iframe src="https://www.youtube.com/embed/bk7McNUjWgw"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Video',
    data (){
        return {
            isPopup: false,
        }
    },
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
}
</script>