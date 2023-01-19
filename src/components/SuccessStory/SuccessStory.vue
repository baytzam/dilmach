<template>
    <div>
        <div class="success-story-area pb-100">
            <div class="container">
                <div class="video-box mt-0">
                    <div class="image">
                        <img src="../../assets/img/success-story.jpg" class="shadow" alt="image">
                    </div>
                    <a 
                        class="video-btn popup-youtube"
                        href="javascript:void(0)" 
                        v-on:click="isPopupMethod(isPopup)"
                    >
                        <i class="flaticon-play"></i>
                    </a>
                    <div class="shape10">
                        <img src="../../assets/img/shape/shape9.png" alt="image">
                    </div>
                </div>
            </div>
            <div class="shape2">
                <img src="../../assets/img/shape/shape2.png" alt="image">
            </div>
            <div class="shape3">
                <img src="../../assets/img/shape/shape3.png" alt="image">
            </div>
            <div class="shape4">
                <img src="../../assets/img/shape/shape4.png" alt="image">
            </div>
            <div class="shape9">
                <img src="../../assets/img/shape/shape8.svg" alt="image">
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
    name: 'SuccessStory',
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