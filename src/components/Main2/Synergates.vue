<template>
  <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="@/assets/Synergates/datatec.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="@/assets/Synergates/Dell_Logo-600x182.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="@/assets/Synergates/Lexmark-Logo.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="@/assets/Synergates/prosvasis.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="@/assets/Synergates/rbs-logo.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="@/assets/Synergates/sharp2.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="@/assets/Synergates/unisoft.png" height="100" width="250" alt="" />
		</div>
	</div>
</div>
</template>

<style>

.white-gradient {
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
}


:root {
    --animation-speed: 30s;
}


@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-250px * 7)); }
}


.slider {
    background: white;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 960px;
    margin-bottom: 10%;
    transition: all 0.5s;
}

.slider:hover{
    box-shadow: 30px 30px 30px 30px rgba(0, 0, 0, 0.178);

}

.slider::before,
.slider::after {
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
}

.slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
}

.slider::before {
    left: 0;
    top: 0;
}

.slide-track {
    animation: scroll var(--animation-speed) linear infinite;
    display: flex;
    width: calc(250px * 14);
}

.slide {
    height: 100px;
    width: 250px;
    margin-right: 2%;
}


@media screen and (min-width: 1501px){
    .slider {
        width: 70%;
    }
}

</style>