<template>
    <div class="main">
        <div class="item item1">
            <div class="container">
            <div class="circle"></div>
            <img style="width: 100%; padding-top: 70%; display: block;" src="@/assets/head2.png" alt="">
            </div>
        </div>
        <div class="item item2">
            <div class="anime">
            <span>C</span>
            <span>o</span>
            <span>m</span>
            <span>H</span>
            <span class="letter"></span>
            <span>u</span>
            <span>s</span>
            <span>e</span>
        </div>
        </div>
    </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&family=Tektur&family=Ubuntu&display=swap');

.main {
    background-color: #0B409C;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 50% 50%;
    font-family: 'Orbitron';
    /* border-top-left-radius: 50% 50px;  */
      border-top-right-radius: 70% 120px;
}

span{
	margin: 0 15px;
	line-height: .7;
	text-shadow: 0 0 2px rgba(0, 0, 0, .45);
	animation: span 3s ease-in infinite alternate;
    font-size: 2rem;
    color: white;
}

.letter{
	display: inline-flex;
	height: 1.5rem;
	width: 27px;
	/* border: 2.5px solid #FF1EAD; */
	border: 2.35px solid white  ;
	border-radius: 14px;
	box-shadow:
		0 0 2px rgba(0, 0, 0, .75),
		inset 0 0 2px rgba(0, 0, 0, .45);
    
	animation: letter 3s ease-in-out infinite alternate;
}
@keyframes span {
	0%,30%{ margin: 0 15px; }
	70%,100%{ margin: 0 5px; }
}
@keyframes letter {
	0%,30%{ width: 27px; }
	70%,100%{ width: 20vw; }
}

.item{
    display: flex;
  justify-content: center;
  align-items: center;
}
.item1{
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 2;
    grid-column-end: 2;
}

.item2{
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 2;
    
}

.anime{
    display: flex;
	justify-content: center;
	align-items: flex-start;
}
.container {
      position: relative;
      display: inline-block;
    }
.circle {
    position: absolute;
      top: 75%;
      left: 53%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border: 5px solid white;
      border-radius: 50%;
      animation: drawCircle 2s ease-in-out  forwards;
      
    }

    @keyframes drawCircle {
        to {
        width: 230px;
        height: 230px;
      }
    }

@media(max-width: 600px){
    .anime{
        transform: scale(.55);
    }
}
</style>