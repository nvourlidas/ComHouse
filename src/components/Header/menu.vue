<template>
    <input type="checkbox" id="menu-toggle" @click="vis1 = false, vis2=false"/>
  <label id="trigger" for="menu-toggle"></label>
  <label id="burger" for="menu-toggle"></label>
  <ul id="menu">
    <li><router-link to="/"><i class="fas fa-home" style="margin-right: 10px;"></i>Αρχική</router-link></li>
    <li><router-link to="/" @click="appear(1)"><i class="fa fa-television" aria-hidden="true" style="margin-right: 10px;"></i>Προϊόντα</router-link></li>
        <DropOne class="drop1" v-if="vis1" />
    <li><router-link to="/" @click="appear(2)"><i class="fa fa-barcode" aria-hidden="true" style="margin-right: 10px;"></i>Μηχανογράφιση</router-link></li>
        <DropTwo class="drop1" v-if="vis2" />
    <li><router-link to="/"><i class="fa fa-phone" aria-hidden="true" style="margin-right: 10px;"></i>Επικοινωνία</router-link></li>
  </ul>
</template>

<script>
import DropOne from "./DropOne.vue"
import DropTwo from "./DropTwo.vue"

export default {
    components:{
        DropOne,
        DropTwo
    },
    data(){
        return {
            vis1: false,
            vis2: false,
        }
    },

    methods: {
        appear(n){
            if(n==1){
                this.vis1 = !this.vis1
                this.vis2 = false
            }else{
                this.vis2 = !this.vis2
                this.vis1 = false
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&family=Tektur&family=Ubuntu&display=swap');

@keyframes checked-anim {
    100% {
        width: 50%;
        height: 100%;
        border-radius: 0;
        border-bottom-right-radius: 30%;
        z-index: 1;
    }
}
@keyframes not-checked-anim {
    0% {
        width: 50%;
        height: 100%;
        border-radius: 0;
        border-bottom-right-radius: 30%;
        z-index: 1;
    }
}
li, a {
    margin: 75px 0 -55px 0;
    color: #0B409C;
    font: 23px "Tektur", sans-serif;
    font-weight: 700;
    line-height: 1.8;
    text-decoration: none;
    text-transform: none;
    list-style: none;
    outline: 0;
    display: none;
    width: 150%;
    margin-left: 10%;
}
li {
    width: 230px;
    text-indent: 56px;
}

a{
    display: flex;
    transition: text-shadow 0.3s ease;
}

a:hover {
    text-shadow: 0 0 2px #0B409C;
}
a:focus {
    display: block;
    color: #333;
    /* background-color: #eee; */
    transition: all .5s;
    border-bottom: 2px solid #302929;
    border-bottom-left-radius: 40%;
    border-bottom-right-radius: 12%;
}


#trigger, #burger, #burger:before, #burger:after {
    position: absolute;
    top: 25px;
    left: 25px;
    background: #0B409C;
    width: 30px;
    height: 5px;
    transition: .2s ease;
    cursor: pointer;
    z-index: 2;
}
#trigger {
    height: 25px;
    background: none;
}
#burger:before {
    content: " ";
    top: 10px;
    left: 0;
}
#burger:after {
    content: " ";
    top: 20px;
    left: 0;
}
#menu-toggle:checked + #trigger + #burger {
    top: 35px;
    transform: rotate(180deg);
    transition: transform .2s ease;
}

#menu-toggle:checked + #trigger + #burger:before {
    width: 20px;
    top: -2px;
    left: 18px;
    transform: rotate(45deg) translateX(-5px);
    transition: transform .2s ease;
}
#menu-toggle:checked + #trigger + #burger:after {
    width: 20px;
    top: 2px;
    left: 18px;
    transform: rotate(-45deg) translateX(-5px);
    transition: transform .2s ease;
}
#menu {
    position: absolute;
    margin: 0; padding: 0;
    width: 40%;
    height: 110px;
    background-color: #fff;
    border-bottom-right-radius: 100%;
    box-shadow: 0 2px 5px rgba(0,0,0,0.26);
    animation: not-checked-anim .5s both;
    transition: .5s;
}
#menu-toggle:checked + #trigger + #burger + #menu {
    animation: checked-anim .6s ease both;
}
#menu-toggle:checked + #trigger ~ #menu > li, a {
    display: block;
}
[type="checkbox"]:not(:checked), [type="checkbox"]:checked {
    display: none;
}

.drop1{
    margin-top: 10%;
    margin-left: 29%;
}

</style>