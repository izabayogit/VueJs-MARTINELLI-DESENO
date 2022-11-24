<template>
  <HeaderComponent />
  <SubHeader />
  <SectionOne />
  <SectionTwo />
  <SectionThree />
  <SectionFour />
  <SectionFive />
  <FooterComponent />
</template>

<script>
import SectionOne from "./components/section1/SectionOne.vue";
import SectionTwo from "./components/section2/SectionTwo.vue";
import SectionThree from "./components/section3/SectionThree.vue";
import SectionFour from "./components/section4/SectionFour.vue";
import SectionFive from "./components/section5/SectionFive.vue";
import FooterComponent from "./components/footer/FooterComponent.vue";
import SubHeader from "./components/headers/SubHeader.vue";
import HeaderComponent from "./components/headers/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    FooterComponent,
    SubHeader,
    HeaderComponent,
  },
};
</script>

<style>
#app {
  font-family: "Raleway";
  font-style: normal;
  width: 100%;
  height: 100%;
  margin: 0 !important;
  padding: 0 !important;
}
</style>
