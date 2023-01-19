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
                        <p>Каждый новый ученик в начале обучения заполняет нашу анкету где пишет о себе, своих интересах, сфере деятельности - из этих данных мы выстраиваем обучение и нашу программу под него, чтобы удвоить эффективность его обучения.</p>
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
                        <p>Вся программа проходит с носителем на базе турецкого языка уже с первых уроков,  которые стремятся довести вас до продвинутого и свободного уровня владения языком. Только носитель может быстрее адаптировать вас под логику языка. </p>
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
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="features-box">
                        <div class="icon">
                            <i class="flaticon-world"></i>
                        </div>
                        <h3>Увлекательное обучение</h3>
                        <p>Развлекательный подход - обучение сопровождается разговорными клубами, просмотрами фильмов и сериалов на турецком языке.</p>
                        <router-link to="/authentication" class="link-btn">Начать сейчас!</router-link>
                        <div class="back-icon">
                            <i class="flaticon-world"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="features-box">
                        <div class="icon">
                            <i class="flaticon-world"></i>
                        </div>
                        <h3>Дружелюбные учителя</h3>
                        <p> Каждый преподаватель становится вашим другом.</p>
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
