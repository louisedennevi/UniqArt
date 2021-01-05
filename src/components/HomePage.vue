<template>
  <div id="home">
    <my-header></my-header>
    <div class="wrapper">
      <div style="background-color: #FFB8DF; height: 100vh;">
        <h1 data-aos="fade-right" data-aos-duration="1500">uniq art</h1>
      </div>
      <div class="parallax-container">
        <h1
          class="parallax-title"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          MODERN
        </h1>
        <parallax :speed-factor="0.5" breakpoint="(min-width: 80px)">
          <img src="../assets/images/image-one.jpg" />
        </parallax>
      </div>
      <div style="background-color: #000; height: 100vh;">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          WE BELIEVE THAT EVERYONE HAS A CREATIVE SOUL
        </h2>
      </div>
      <div class="parallax-container">
        <h1 class="parallax-title" data-aos="fade-up" data-aos-duration="3000">
          ABSTRACT
        </h1>
        <parallax :speed-factor="0.5" breakpoint="(min-width: 80px)">
          <img src="../assets/images/image-two.jpg" />
        </parallax>
      </div>
      <div class="parallax-container">
        <h1
          class="parallax-title"
          data-aos="flip-down"
          data-aos-duration="1500"
        >
          POP ART
        </h1>
        <parallax :speed-factor="0.5" breakpoint="(min-width: 80px)">
          <img src="../assets/images/image-three.jpg" />
        </parallax>
      </div>
      <div style="background-color: #F04D38; height: 100vh;">
        <h3 data-aos="zoom-out-down" data-aos-duration="1500">
          You don't have to have an idea of what you are going to do, you just
          need an open mind.
        </h3>
      </div>
      <div class="parallax-container">
        <h2
          class="parallax-title"
          data-aos="zoom-in-right"
          data-aos-duration="500"
        >
          Take a quiz to find out more
        </h2>
        <parallax :speed-factor="0.5" breakpoint="(min-width: 80px)">
          <img src="../assets/images/image-four.jpg" />
        </parallax>
      </div>
      <div class="big-row"></div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "Home",
  components: {
    Parallax,
    "my-header": Header,
    "my-footer": Footer
  }
};
</script>

<style>
#home {
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
  width: 100%;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
h1 {
  font-size: 190px;
  font-weight: 900;
  letter-spacing: 20px;
  color: white;
  text-transform: uppercase;
  margin: 0 auto;
  padding-top: 240px;
}
h2 {
  font-size: 95px;
  color: white;
  text-transform: uppercase;
  margin: 0 auto;
  padding-top: 250px;
}
h3 {
  font-size: 50px;
  color: white;
  text-transform: uppercase;
  margin: 0 auto;
  padding-top: 320px;
}
.parallax-container {
  position: relative;
}
.parallax-title {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  padding: 20px;
  color: white;
  text-align: center;
}
.row {
  height: 20vh;
}
/* .big-row {
  height: 80vh;
} */
</style>
