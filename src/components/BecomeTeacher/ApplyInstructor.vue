<template>
    <div class="apply-instructor-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-12">
                    <div class="apply-instructor-image">
                        <h2>Apply As Instructor</h2>
                        <img src="../../assets/img/apply-instructor.jpg" alt="image">
                    </div>
                </div>
                <div class="col-lg-7 col-md-12">
                    <div class="apply-instructor-content">
                        <div class="tabs">
                            <ul class="tabs__header">
                                <li 
                                    class="tabs__header-item" 
                                    v-for="tab in tabs" 
                                    v-on:click="selectTab (tab.id)" 
                                    v-bind:class="{ 'active': activeTab == tab.id }"
                                    :key="tab.id"
                                >
                                    {{tab.name}}
                                </li>
                            </ul>
                        </div>
                        <div class="tabs__container">
                            <div 
                                class="tabs__list"
                                ref='tabsList'
                            >
                                <div 
                                    class="tabs__list-tab"
                                    v-for="tab in tabs"
                                    v-bind:class="{ 'active': activeTab == tab.id }"
                                    :key="tab.id"
                                >
                                    <h3>{{tab.titleOne}}</h3>
                                    <p>{{tab.descriptionOne}}.</p>
                                    <h3>{{tab.titleTwo}}</h3>
                                    <p>{{tab.descriptionTwo}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ApplyInstructor',
    data () {
        return {
            activeTab: 1,
            offsetRight: 0,
            tabs: [
                {
                    id: 1,
                    name: 'Become an Instructor',
                    titleOne: 'Course Description',
                    descriptionOne:'On the other hand, we denounce with righteous indignation and dislike men who are beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
                    titleTwo: 'Certification',
                    descriptionTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                },
                {
                    id: 2,
                    name: 'Instructor Rules',
                    titleOne: 'Course Description',
                    descriptionOne:'On the other hand, we denounce with righteous indignation and dislike men who are beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
                    titleTwo: 'Certification',
                    descriptionTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                },
                {
                    id: 3,
                    name: 'Start with Courses',
                    titleOne: 'Course Description',
                    descriptionOne:'On the other hand, we denounce with righteous indignation and dislike men who are beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
                    titleTwo: 'Certification',
                    descriptionTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
                },
            ]
        }
    },
    methods: {
        selectTab (id) {
            let tabsList = this.$refs.tabsList
            this.activeTab = id
            this.offsetRight = tabsList.clientWidth * (id - 1)
            tabsList.style.right = this.offsetRight + 'px'
        }
    },
    mounted () {
        let tabsList = this.$refs.tabsList
        tabsList.style.right = this.offsetRight + 'px'
    }
}
</script>