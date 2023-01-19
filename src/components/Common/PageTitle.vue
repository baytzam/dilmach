<template>
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li>{{pageTitle}}</li>
                </ul>
                <h2>{{pageTitle}}</h2>
            </div>
        </div>
        <div class="shape9">
            <img src="../../assets/img/shape/shape8.svg" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['pageTitle']
}
</script>