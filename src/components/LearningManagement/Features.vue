<template>
    <div class="features-area pt-100 pb-70 bg-fff8f8">
        <div class="container">
            <div class="section-title">
                <h2>Почему стоит изучать турецкий язык именно с нами?</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="features-box">
                        <div class="icon">
                            <i class="fфlaticon-brain-process"></i>
                        </div>
                        <h3>Персональная методика</h3>
                        <p>Программа базируется на персонализированной методологии обучения, которая помогает не только в нарабатывании лингвистических навыков, но и в понимании сферы деятельности отдельного ученика через призму нового языка.</p>
                        <a @click="$root.$emit('triggerScroll')" class="link-btn">Начать сейчас!</a>
                        <div class="back-icon">
                            <i class="flaticon-brain-process"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="features-box">
                        <div class="icon">
                            <i class="flaticon-shield-1"></i>
                        </div>
                        <h3>Учи язык с носителем</h3>
                        <p>Вся программа проходит с носителем на базе турецкого языка уже с первых уроков. (преподаватель практически не использует русский язык) </p>
                        <router-link to="/authentication" class="link-btn">Начать сейчас!</router-link>
                        <div class="back-icon">
                            <i class="flaticon-shield-1"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="features-box">
                        <div class="icon">
                            <i class="flaticon-world"></i>
                        </div>
                        <h3>Больше практики</h3>
                        <p>Программа состоит на 70% из языковой практики и 30% грамматической теории.</p>
                        <router-link to="/authentication" class="link-btn">Начать сейчас!</router-link>
                        <div class="back-icon">
                            <i class="flaticon-world"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features'
}
</script>
