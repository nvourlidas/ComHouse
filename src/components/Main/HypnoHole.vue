<template>
  <div class="main">
    <div class="wrapper"></div>
    <div id="z1" class="wrapper"></div>
    <div id="z2" class="wrapper"></div>

    <div class="hole">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
    <div class="picAnimation"></div>
  </div>
</template>

<style scoped>
body {
  background: #000;
  overflow: hidden;
}

.hole {
  position: absolute;
  top: calc(39% - 25px);
  left: calc(73.4% - 25px);
  z-index: 2000;
}


.hole i {
  display: block;
  position: absolute;
  width: 200px;
  height: 200px;
  left: -50px;
  top: -50px;
  /*border-radius*/
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  opacity: 0.2;
  /*animation-name*/
  -webkit-animation-name: scale;
  -moz-animation-name: scale;
  -ms-animation-name: scale;
  -o-animation-name: scale;
  animation-name: scale;
  /*animation-duration*/
  -webkit-animation-duration: 10s;
  -moz-animation-duration: 10s;
  -ms-animation-duration: 10s;
  -o-animation-duration: 10s;
  animation-duration: 10s;
  /*animation-iteration-count*/
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  /*animation-timing-function*/
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -ms-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
}

@media screen and (min-width: 1501px) {
  .hole i {
    width: 350px;
    height: 350px;
    -webkit-border-radius: 170px;
    -moz-border-radius: 170px;
    border-radius: 170px;
  }

  .hole {
    top: calc(30.2% - 25px);
    left: calc(71.3% - 25px);
  }
}

i:nth-child(1) {
  /*animation-delay*/
  -webkit-animation-delay: 1.3s;
  -moz-animation-delay: 1.3s;
  -ms-animation-delay: 1.3s;
  -o-animation-delay: 1.3s;
  animation-delay: 1.3s;
}

i:nth-child(2) {
  /*animation-delay*/
  -webkit-animation-delay: 2.6s;
  -moz-animation-delay: 2.6s;
  -ms-animation-delay: 2.6s;
  -o-animation-delay: 2.6s;
  animation-delay: 2.6s;
}

i:nth-child(3) {
  /*animation-delay*/
  -webkit-animation-delay: 3.9s;
  -moz-animation-delay: 3.9s;
  -ms-animation-delay: 3.9s;
  -o-animation-delay: 3.9s;
  animation-delay: 3.9s;
}

i:nth-child(4) {
  /*animation-delay*/
  -webkit-animation-delay: 4.2s;
  -moz-animation-delay: 4.2s;
  -ms-animation-delay: 4.2s;
  -o-animation-delay: 4.2s;
  animation-delay: 4.2s;
}

i:nth-child(5) {
  /*animation-delay*/
  -webkit-animation-delay: 5.5s;
  -moz-animation-delay: 5.5s;
  -ms-animation-delay: 5.5s;
  -o-animation-delay: 5.5s;
  animation-delay: 5.5s;
}

i:nth-child(6) {
  /*animation-delay*/
  -webkit-animation-delay: 6.8s;
  -moz-animation-delay: 6.8s;
  -ms-animation-delay: 6.8s;
  -o-animation-delay: 6.8s;
  animation-delay: 6.8s;
}

i:nth-child(7) {
  /*animation-delay*/
  -webkit-animation-delay: 7.1s;
  -moz-animation-delay: 7.1s;
  -ms-animation-delay: 7.1s;
  -o-animation-delay: 7.1s;
  animation-delay: 7.1s;
}

i:nth-child(8) {
  /*animation-delay*/
  -webkit-animation-delay: 8.4s;
  -moz-animation-delay: 8.4s;
  -ms-animation-delay: 8.4s;
  -o-animation-delay: 8.4s;
  animation-delay: 8.4s;
}

i:nth-child(9) {
  /*animation-delay*/
  -webkit-animation-delay: 9.2s;
  -moz-animation-delay: 9.2s;
  -ms-animation-delay: 9.2s;
  -o-animation-delay: 9.2s;
  animation-delay: 9.2s;
}

i:nth-child(10) {
  /*animation-delay*/
  -webkit-animation-delay: 10s;
  -moz-animation-delay: 10s;
  -ms-animation-delay: 10s;
  -o-animation-delay: 10s;
  animation-delay: 10s;
}

@-webkit-keyframes scale {
  0% {
    -webkit-transform: scale(2);
    opacity: 0.5;
    box-shadow: 0px 0px 50px rgba(255, 255, 255, 0);
  }

  50% {
    -webkit-transform: scale(1);
    -webkit-transform: translate(0px, -5px);
    opacity: 1;
    box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.5);
  }

  100% {
    -webkit-transform: scale(0.1) translate(0px, 5px);
    opacity: 0.5;
    box-shadow: 0px 0px 0px rgba(255, 255, 255, 0);
  }
}

@-moz-keyframes scale {
  0% {
    -moz-transform: scale(2);
    opacity: 0.5;
    box-shadow: 0px 0px 50px rgba(255, 255, 255, 0);
  }

  50% {
    -moz-transform: scale(1);
    -moz-transform: translate(0px, -5px);
    opacity: 1;
    box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.5);
  }

  100% {
    -moz-transform: scale(0.1) translate(0px, 5px);
    opacity: 0.5;
    box-shadow: 0px 0px 0px rgba(255, 255, 255, 0);
  }
}

@-o-keyframes scale {
  0% {
    -o-transform: scale(2);
    opacity: 0.5;
    box-shadow: 0px 0px 50px rgba(255, 255, 255, 0);
  }

  50% {
    -o-transform: scale(1);
    -o-transform: translate(0px, -5px);
    opacity: 1;
    box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.5);
  }

  100% {
    -o-transform: scale(0.1) translate(0px, 5px);
    opacity: 0.5;
    box-shadow: 0px 0px 0px rgba(255, 255, 255, 0);
  }
}

@keyframes scale {
  0% {
    transform: scale(2);
    opacity: 0.5;
    box-shadow: 0px 0px 50px rgba(255, 255, 255, 0);
  }

  50% {
    transform: scale(1);
    transform: translate(0px, -5px);
    opacity: 1;
    box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.5);
  }

  100% {
    transform: scale(0.1) translate(0px, 5px);
    opacity: 0.5;
    box-shadow: 0px 0px 0px rgba(255, 255, 255, 0);
  }
}

.wrapper {
  -webkit-animation: scale_43d 30s infinite alternate ease-in-out;
  /*-webkit-transform: scale3d(4,4,1) ;
      transition:30s;*/
  background: #000;
}

#z1 {
  -webkit-animation: scale_33d 30s infinite alternate ease-in-out;
  /*-webkit-transform: scale3d(3,3,1) ;
      transition:30s;*/
  background: #000;
}

#z2 {
  -webkit-animation: scale_3dBG 30s infinite alternate ease-in-out;
  background: #000;
  /*-webkit-transform: scale3d(2,2,1) ;
      transition:30s;*/
}



.wrapper {
  width: 100%;
  height: 100%;
  background: url('http://lincolnanimation.url.ph/opo1331a.png');
  /* -webkit-background-size: @@prefixmycss->No equivalent; */
  -moz-background-size: cover;
  /* -o-background-size: @@prefixmycss->No equivalent; */
  background-size: cover;
  position: absolute;
  top: 0%;
  z-index: -80;
  background-position: 0px 0px;
  _background-size: 520px 520px;
  opacity: 0.5;
  -webkit-transition: 2s;
  -moz-transition: 2s;
  -o-transition: 2s;
  transition: 2s;
}

#z1 {
  z-index: -90;
  background: url('http://lincolnanimation.url.ph/opo1335a.png');
  opacity: 0.5;
  background-position: 0px 0px;
}

#z2 {
  z-index: -100;
  background: #000;
  background-image: url('http://lincolnanimation.url.ph/heic1215b.jpg');
  opacity: 1;
  background-position: 0px 0px;
}

iframe {
  background: #000
}

.picAnimation {
  -webkit-box-shadow: 0px 0px 20px 20px #010101, inset 20px 20px 20px #010101, inset -20px -20px 20px #010101, inset 20px -20px 20px #010101, inset -20px 20px 20px #010101;
  -moz-box-shadow: 0px 0px 20px 20px #010101, inset 20px 20px 20px #010101, inset -20px -20px 20px #010101, inset 20px -20px 20px #010101, inset -20px 20px 20px #010101;
  box-shadow: 0px 0px 20px 20px #010101, inset 20px 20px 20px #010101, inset -20px -20px 20px #010101, inset 20px -20px 20px #010101, inset -20px 20px 20px #010101;
  -webkit-animation: rot 20s 0 alternate linear infinite;
  -moz-animation: rot 20s 0 alternate linear infinite;
  -ms-animation: rot 20s 0 alternate linear infinite;
  -o-animation: rot 20s 0 alternate linear infinite;
  animation: rot 20s 0 alternate linear infinite;
  background: url('http://lincolnanimation.url.ph/eso9845d.png') center;
  /* -webkit-background-size: @@prefixmycss->No equivalent; */
  -moz-background-size: contain;
  /* -o-background-size: @@prefixmycss->No equivalent; */
  background-size: contain;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  opacity: 0;
}

@-webkit-keyframes rot {
  50% {
    -webkit-transform: rotate(180deg) scale(1.6);

  }

  100% {
    -webkit-transform: rotate(360deg) scale(1);

    opacity: 1;
  }
}

@keyframes rot {
  50% {
    transform: rotate(180deg) scale(1.6);

  }

  100% {
    transform: rotate(360deg) scale(1);

    opacity: 1;
  }
}

@-moz-keyframes rot {
  50% {
    -moz-transform: rotate(180deg) scale(1.6);
  }

  100% {
    -moz-transform: rotate(360deg) scale(1);
    opacity: 1;
  }
}

@-o-keyframes rot {
  50% {
    -o-transform: rotate(180deg) scale(1.6);
  }

  100% {
    -o-transform: rotate(360deg) scale(1);

    opacity: 1;
  }
}


@-webkit-keyframes scale_3d {
  0% {
    -webkit-transform: rotate(0deg) translate(-50%, -50%) scale3d(1, 1, 1);
  }

  100% {
    -webkit-transform: rotate(0deg) translate(-50%, -50%) scale3d(2, 2, 1);
  }
}

@-webkit-keyframes scale_3dBG {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
  }

  100% {
    -webkit-transform: scale3d(2, 2, 1);
  }
}

@-webkit-keyframes scale_33d {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
  }

  100% {
    -webkit-transform: scale3d(3, 3, 1);
  }
}

@-webkit-keyframes scale_43d {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
  }

  100% {
    -webkit-transform: scale3d(4, 4, 1);
  }
}</style>