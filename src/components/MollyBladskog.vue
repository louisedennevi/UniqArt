<template>
  <div class="designerprofile">
    <h1 id="intro" data-aos="fade-in" data-aos-duration="2000">
      Hi, my name is
    </h1>
    <img
      src="../assets/images/mollybladskog.png"
      id="mollybladskog"
      data-aos="zoom-in"
      data-aos-duration="3000"
    />
    <img src="../assets/images/molly-flipped.png" id="profilepic" />
    <div>
      <img src="../assets/images/mollybladskog-one.jpg" id="art" />
      <img src="../assets/images/mollybladskog-two.jpg" id="art" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Mollybladskog"
};
</script>

<style>
#intro {
  font-size: 20px;
  color: black;
  position: absolute;
  top: -65px;
  left: 540px;
  z-index: 1000;
  letter-spacing: 10px;
}
#mollybladskog {
  height: 110px;
  width: 390px;
  position: absolute;
  top: 220px;
  left: 485px;
  z-index: 1000;
}
#art {
  height: 300px;
  width: 200px;
  padding: 20px;
  margin-top: 200px;
}
#profilepic {
  height: 650px;
  width: 880px;
  position: relative;
  top: 25px;
  left: -285px;
}
</style>
