<template>
    <div class="faq-area ptb-100">
        <div class="container">
            <div class="faq-accordion-tab">
                <div class="tabs">
                    <ul class="tabs__header">
                        <li 
                            class="tabs__header-item" 
                            v-for="tab in tabs" 
                            v-on:click="selectTab (tab.id)" 
                            v-bind:class="{ 'active': activeTab == tab.id }"
                            :key="tab.id"
                        >
                            <i :class="tab.icon"></i>
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
                            <accordion>
                                <accordion-item
                                    v-for="accordion in tab.accordions"
                                    :key="accordion.id"
                                >
                                    <template v-slot:accordion-trigger>
                                        <button class="accordion-button">
                                            <i :class='accordion.icon'></i>
                                            {{accordion.title}}
                                        </button>
                                    </template>
                                    <template v-slot:accordion-content>
                                        <p>{{accordion.shortDesc}}</p>
                                    </template>
                                </accordion-item>
                            </accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from "../Common/Accordion";
import AccordionItem from "../Common/AccordionItem";

export default {
    name: 'Faq',
    components: {
        Accordion,
        AccordionItem
    },
    data () {
        return {
            activeTab: 1,
            offsetRight: 0,
            tabs: [
                {
                    id: 1,
                    icon: 'bx bx-flag',
                    name: 'Getting Started',
                    accordions: [
                        {
                            id: 1,
                            icon: 'bx bx-chevron-down',
                            title: 'How can I contact a school directly?',
                            shortDesc: 'You can contact a school by filling out a “Contact Us” form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.',
                        },
                        {
                            id: 2,
                            icon: 'bx bx-chevron-down',
                            title: 'Where should I study abroad?',
                            shortDesc: 'Only you can answer this question. However, we have some excellent resources to help you make the best decision. Take our "Where Should I Study Abroad?" quiz or read our country guides for an in-depth look at studying in specific countries',
                        },
                        {
                            id: 3,
                            icon: 'bx bx-chevron-down',
                            title: 'How do I find a study abroad program on vdemy.com?',
                            shortDesc: 'You can find programs through our Find Education search tool. You can select the category you’d like to study, such as hospitality or business; the place where you’d like to study, whether a certain country or city; and/or the type of program, such as Bachelor or Master.',
                        },
                        {
                            id: 4,
                            icon: 'bx bx-chevron-down',
                            title: 'How do I find a school where I want to study?',
                            shortDesc: 'Locating schools to study is exactly the same as finding an education program (see above question). Once the search results appear, click on the "Institutes" tab to view the institutes, or use our Find Schools search tool.',
                        },
                        {
                            id: 5,
                            icon: 'bx bx-chevron-down',
                            title: 'Am I eligible for admission?',
                            shortDesc: 'Every school and program has different admission requirements for accepting students. These requirements can often be found on the program profiles. If you’d like more information or if the information is missing, submit a “Request Information” form to contact the institute directly.',
                        },
                    ]
                },
                {
                    id: 2,
                    icon: 'bx bxs-badge-dollar',
                    name: 'Pricing & Planes',
                    accordions: [
                        {
                            id: 1,
                            icon: 'bx bx-chevron-down',
                            title: 'How can I contact a school directly?',
                            shortDesc: 'You can contact a school by filling out a “Contact Us” form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.',
                        },
                        {
                            id: 2,
                            icon: 'bx bx-chevron-down',
                            title: 'Where should I study abroad?',
                            shortDesc: 'Only you can answer this question. However, we have some excellent resources to help you make the best decision. Take our "Where Should I Study Abroad?" quiz or read our country guides for an in-depth look at studying in specific countries',
                        },
                        {
                            id: 3,
                            icon: 'bx bx-chevron-down',
                            title: 'How do I find a study abroad program on vdemy.com?',
                            shortDesc: 'You can find programs through our Find Education search tool. You can select the category you’d like to study, such as hospitality or business; the place where you’d like to study, whether a certain country or city; and/or the type of program, such as Bachelor or Master.',
                        },
                        {
                            id: 4,
                            icon: 'bx bx-chevron-down',
                            title: 'How do I find a school where I want to study?',
                            shortDesc: 'Locating schools to study is exactly the same as finding an education program (see above question). Once the search results appear, click on the "Institutes" tab to view the institutes, or use our Find Schools search tool.',
                        },
                        {
                            id: 5,
                            icon: 'bx bx-chevron-down',
                            title: 'Am I eligible for admission?',
                            shortDesc: 'Every school and program has different admission requirements for accepting students. These requirements can often be found on the program profiles. If you’d like more information or if the information is missing, submit a “Request Information” form to contact the institute directly.',
                        },
                    ]
                },
                {
                    id: 3,
                    icon: 'bx bx-shopping-bag',
                    name: 'Sales Question',
                    accordions: [
                        {
                            id: 1,
                            icon: 'bx bx-chevron-down',
                            title: 'How can I contact a school directly?',
                            shortDesc: 'You can contact a school by filling out a “Contact Us” form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.',
                        },
                        {
                            id: 2,
                            icon: 'bx bx-chevron-down',
                            title: 'Where should I study abroad?',
                            shortDesc: 'Only you can answer this question. However, we have some excellent resources to help you make the best decision. Take our "Where Should I Study Abroad?" quiz or read our country guides for an in-depth look at studying in specific countries',
                        },
                        {
                            id: 3,
                            icon: 'bx bx-chevron-down',
                            title: 'How do I find a study abroad program on vdemy.com?',
                            shortDesc: 'You can find programs through our Find Education search tool. You can select the category you’d like to study, such as hospitality or business; the place where you’d like to study, whether a certain country or city; and/or the type of program, such as Bachelor or Master.',
                        },
                        {
                            id: 4,
                            icon: 'bx bx-chevron-down',
                            title: 'How do I find a school where I want to study?',
                            shortDesc: 'Locating schools to study is exactly the same as finding an education program (see above question). Once the search results appear, click on the "Institutes" tab to view the institutes, or use our Find Schools search tool.',
                        },
                        {
                            id: 5,
                            icon: 'bx bx-chevron-down',
                            title: 'Am I eligible for admission?',
                            shortDesc: 'Every school and program has different admission requirements for accepting students. These requirements can often be found on the program profiles. If you’d like more information or if the information is missing, submit a “Request Information” form to contact the institute directly.',
                        },
                    ]
                },
                {
                    id: 4,
                    icon: 'bx bx-book-open',
                    name: 'Usage Guides',
                    accordions: [
                        {
                            id: 1,
                            icon: 'bx bx-chevron-down',
                            title: 'How can I contact a school directly?',
                            shortDesc: 'You can contact a school by filling out a “Contact Us” form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.',
                        },
                        {
                            id: 2,
                            icon: 'bx bx-chevron-down',
                            title: 'Where should I study abroad?',
                            shortDesc: 'Only you can answer this question. However, we have some excellent resources to help you make the best decision. Take our "Where Should I Study Abroad?" quiz or read our country guides for an in-depth look at studying in specific countries',
                        },
                        {
                            id: 3,
                            icon: 'bx bx-chevron-down',
                            title: 'How do I find a study abroad program on vdemy.com?',
                            shortDesc: 'You can find programs through our Find Education search tool. You can select the category you’d like to study, such as hospitality or business; the place where you’d like to study, whether a certain country or city; and/or the type of program, such as Bachelor or Master.',
                        },
                        {
                            id: 4,
                            icon: 'bx bx-chevron-down',
                            title: 'How do I find a school where I want to study?',
                            shortDesc: 'Locating schools to study is exactly the same as finding an education program (see above question). Once the search results appear, click on the "Institutes" tab to view the institutes, or use our Find Schools search tool.',
                        },
                        {
                            id: 5,
                            icon: 'bx bx-chevron-down',
                            title: 'Am I eligible for admission?',
                            shortDesc: 'Every school and program has different admission requirements for accepting students. These requirements can often be found on the program profiles. If you’d like more information or if the information is missing, submit a “Request Information” form to contact the institute directly.',
                        },
                    ]
                },
                {
                    id: 5,
                    icon: 'bx bx-info-circle',
                    name: 'General Guide',
                    accordions: [
                        {
                            id: 1,
                            icon: 'bx bx-chevron-down',
                            title: 'How can I contact a school directly?',
                            shortDesc: 'You can contact a school by filling out a “Contact Us” form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.',
                        },
                        {
                            id: 2,
                            icon: 'bx bx-chevron-down',
                            title: 'Where should I study abroad?',
                            shortDesc: 'Only you can answer this question. However, we have some excellent resources to help you make the best decision. Take our "Where Should I Study Abroad?" quiz or read our country guides for an in-depth look at studying in specific countries',
                        },
                        {
                            id: 3,
                            icon: 'bx bx-chevron-down',
                            title: 'How do I find a study abroad program on vdemy.com?',
                            shortDesc: 'You can find programs through our Find Education search tool. You can select the category you’d like to study, such as hospitality or business; the place where you’d like to study, whether a certain country or city; and/or the type of program, such as Bachelor or Master.',
                        },
                        {
                            id: 4,
                            icon: 'bx bx-chevron-down',
                            title: 'How do I find a school where I want to study?',
                            shortDesc: 'Locating schools to study is exactly the same as finding an education program (see above question). Once the search results appear, click on the "Institutes" tab to view the institutes, or use our Find Schools search tool.',
                        },
                        {
                            id: 5,
                            icon: 'bx bx-chevron-down',
                            title: 'Am I eligible for admission?',
                            shortDesc: 'Every school and program has different admission requirements for accepting students. These requirements can often be found on the program profiles. If you’d like more information or if the information is missing, submit a “Request Information” form to contact the institute directly.',
                        },
                    ]
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