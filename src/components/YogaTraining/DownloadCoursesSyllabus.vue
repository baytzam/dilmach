<template>
    <div class="download-syllabus-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="download-syllabus-image">
                        <img src="../../assets/img/shape/download.png" alt="image">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="download-syllabus-form">
                        <h2 class="playfair-display-font">Download Courses Syllabus</h2>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <form @submit.prevent>
                            <div class="form-group mb-3">
                                <input type="text" class="form-control" placeholder="Your Name *">
                            </div>
                            <div class="form-group mb-3">
                                <input type="email" class="form-control" placeholder="Your Email *">
                            </div>
                            <div class="form-group mb-3">
                                <input type="text" class="form-control" placeholder="Your Phone *">
                            </div>
                            <div class="form-group mb-3">
                                <select>
                                    <option>200 Hour YTT Course *</option>
                                    <option>300 Hour YTT Course *</option>
                                    <option>400 Hour YTT Course *</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <select>
                                    <option>How Did You Hear About Us? *</option>
                                    <option>How Did You Hear About Us? *</option>
                                    <option>How Did You Hear About Us? *</option>
                                </select>
                            </div>
                            <button class="default-btn"><i class="flaticon-tick"></i>Submit Now<span></span></button>
                        </form>
                        <div class="syllabus-shape1">
                            <img src="../../assets/img/shape/syllabus-shape1.png" alt="image">
                        </div>
                        <div class="syllabus-shape2">
                            <img src="../../assets/img/shape/syllabus-shape2.png" alt="image">
                        </div>
                        <div class="syllabus-shape3">
                            <img src="../../assets/img/shape/syllabus-shape3.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DownloadCoursesSyllabus',
    methods: {
        formSubmit() {
            console.log('form submitted');
        },
    },
}
</script>