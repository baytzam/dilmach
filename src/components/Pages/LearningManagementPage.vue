<template>
    <div>
        <Navbar />
        <MainBanner />
        <Features />
        <WhyChooseUs />
        <PricingPlan />
        <DistanceLearning />
        <!-- <TopSellingCourses /> -->
        <!-- <DevelopYourSkills /> -->
        <!-- <Testimonials /> -->
        <!-- <SelfDevelopmentCourse /> -->
        <!-- <Partner /> -->
        <!-- <Video /> -->
        <!-- <Funfacts /> -->
        <!-- <Blog /> -->
        <!-- <LearningPaths /> -->
        <!-- <UnlimitedAccess /> -->
        <FreeTrial />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import MainBanner from '../LearningManagement/MainBanner'
import Features from '../LearningManagement/Features'
import TopSellingCourses from '../LearningManagement/TopSellingCourses'
import DevelopYourSkills from '../LearningManagement/DevelopYourSkills'
import Testimonials from '../LearningManagement/Testimonials'
import SelfDevelopmentCourse from '../LearningManagement/SelfDevelopmentCourse'
import Partner from '../LearningManagement/Partner'
import Video from '../LearningManagement/Video'
import Funfacts from '../LearningManagement/Funfacts'
import Blog from '../LearningManagement/Blog'
import LearningPaths from '../LearningManagement/LearningPaths'
import UnlimitedAccess from '../LearningManagement/UnlimitedAccess'
import WhyChooseUs from '../LanguageSchool/WhyChooseUs'
import DistanceLearning from '../AboutOne/DistanceLearning'
import PricingPlan from '../YogaTraining/PricingPlan'
import Footer from '../Layouts/Footer'
import FreeTrial from "@/components/LanguageSchool/FreeTrial.vue";

export default {
    name: 'LearningManagementPage',
    components: {
        FreeTrial,
        Navbar,
        MainBanner,
        Features,
        TopSellingCourses,
        DevelopYourSkills,
        Testimonials,
        SelfDevelopmentCourse,
        Partner,
        Video,
        Funfacts,
        WhyChooseUs,
        DistanceLearning,
        Blog,
        LearningPaths,
        UnlimitedAccess,
        Footer,
        PricingPlan,
    }
}
</script>
