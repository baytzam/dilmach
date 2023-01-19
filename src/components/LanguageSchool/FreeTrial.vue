<template>
    <div class="free-trial-area ptb-100 bg-fffaf3">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="free-trial-image text-center">
                        <img src="../../assets/img/free-trial-img.png" alt="image">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="free-trial-form">
                        <span class="sub-title">Связаться</span>
                        <h2>Оставите заявку и мы с вами свяжемся</h2>
                        <form @submit.prevent>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Ваше имя *" required>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email или номер телефона *" required>
                            </div>
                            <button type="submit">Оставить заявку</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FreeTrial',
    methods: {
        formSubmit() {
            console.log('form submitted');
        },
    },
}
</script>
