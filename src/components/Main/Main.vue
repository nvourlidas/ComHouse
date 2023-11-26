<template>
    <div class="main">
        <div class="item item1">
            <div class="container">
                <div class="circle"></div>
                <img  src="@/assets/head2.png" alt="">
            </div>
        </div>
        <div class="item item2">
            <div class="anime">
                <span class="com">C</span>
                <span class="com">o</span>
                <span class="com">m</span>
                <span class="com">H</span>
                <span class="letter"></span>
                <span class="com">u</span>
                <span class="com">s</span>
                <span class="com">e</span>
            </div>
        </div>
        <div class="item item3">
            <span v-for="(letter, index) in text1" :key="index" class="letter2"
                :style="{ animationDelay: `${index * 0.2}s` }">
                {{ letter }}
            </span>
        </div>
        <div class="item item4">
            <span v-for="(letter, index) in text" :key="index" class="letter1"
                :style="{ animationDelay: `${index * 0.1}s` }">
                {{ letter }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: 'Καλώς Ήρθατε',
            text1: 'στο Σπίτι της Τεχνολογίας'
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&family=Tektur&family=Ubuntu&display=swap');

.main {
    /* background-color: #0B409C; */
    background: linear-gradient(to right, #1258c9 30%, #0B409C 70%);
    width: 100%;
    height: 120vh;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 50% 50%;
    font-family: 'Orbitron';
    border-bottom-left-radius: 50% 50px;
    /* border-top-right-radius: 50% 90px; */
}

img{
    width: 100%; 
    padding-top: 70%; 
    display: block;
}

.com {
    margin: 0 15px;
    line-height: .7;
    text-shadow: 0 0 2px rgba(0, 0, 0, .45);
    animation: span 3s ease-in infinite alternate;
    font-size: 2rem;
    color: white;
}

.letter {
    display: inline-flex;
    height: 1.5rem;
    width: 27px;
    /* border: 2.5px solid #FF1EAD; */
    border: 2.35px solid white;
    border-radius: 14px;
    box-shadow:
        0 0 2px rgba(0, 0, 0, .75),
        inset 0 0 2px rgba(0, 0, 0, .45);

    animation: letter 3s ease-in-out infinite alternate;
}

@keyframes span {

    0%,
    30% {
        margin: 0 15px;
    }

    70%,
    100% {
        margin: 0 5px;
    }
}

@keyframes letter {

    0%,
    30% {
        width: 27px;
    }

    70%,
    100% {
        width: 20vw;
    }
}

.item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.item1 {
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 2;
    grid-column-end: 2;
}

.item2 {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 2;

}

.item3 {
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 1;
    grid-column-end: 1;
}

.item3 {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 1;
}

.anime {
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
    animation: drawCircle 2s ease-in-out forwards;

}

@keyframes drawCircle {
    to {
        width: 230px;
        height: 230px;
    }
}

@media(max-width: 600px) {
    .anime {
        transform: scale(.55);
    }
}

.letter1 {
    display: inline-block;
    opacity: 0;
    animation: fadeIn 0.5s ease-out forwards;
    font-size: 2.5rem;
    font-family: 'Tektur';
    color: white;
    margin: 0 15px;
    line-height: .3;
    /* text-shadow: 0 0 2px rgba(0, 0, 0, .45); */
    margin: 2px;
    margin-bottom: -40%;
    transition: transform 0.3s ease;
    cursor: pointer; 
}

.letter1:hover{
    transform: translateY(-10px);
}

.letter2:hover{
    transform: translateY(-20px);
}

.letter2 {
    display: inline-block;
    opacity: 0;
    animation: fadeIn 0.5s ease-out forwards;
    font-size: 2.2rem;
    font-family: 'Tektur';
    color: white;
    margin: 0 15px;
    line-height: .3;
    /* text-shadow: 0 0 2px rgba(0, 0, 0, .45); */
    margin: 2px;
    margin-top: -40%;
    transition: transform 0.3s ease;
    cursor: pointer;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@media screen and (min-width: 1501px) {
    .letter1 {
        font-size: 7rem;
    }

    .letter2 {
        font-size: 5rem;
    }

    @keyframes drawCircle {
        to {
            width: 500px;
            height: 500px;
        }
    }

    img{
        width: 200%;
        margin-left: -50%;
        margin-bottom: -35%;
        
    }

    .com{
        font-size: 6rem;
    }

    .letter{
        height: 4.5rem;
        width: 200px;
        border: 7px solid white;
        border-radius: 50px;
    }

    @keyframes letter {

        0%,
        30% {
            width: 70px;
        }

        70%,
        100% {
            width: 20vw;
        }
    }
}
</style>