<template>
  <div class="header">
    <div class="logo">
      <!-- <img class="logoimg" src="@/assets/logo_transparent.png" alt=""> -->
    </div>
    <div class="menu">
      
    </div>
  </div>
</template>

<script>
import DropOne from './DropOne.vue';


export default {
  components: {
    DropOne,
  },

  data(){
    return {
      isDropdownVisible: false,
      vis: false
    }
  },

  methods:{
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
    showDropdown1() {
      this.vis = true;
    },
    hideDropdown1() {
      this.vis = false;
    },
  }
}
</script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&family=Tektur&family=Ubuntu&display=swap');

.header {
  display: flex;
  
}

.logoimg {
  width: 30%;
  padding: 0 5%;
}

.logo {
  flex: 1;
}

.menu {
  flex: 1;
  font-size: 1.5rem;
  /* background-color: aqua; */
  position: relative;
  
}

.link {
  color: white;
  text-decoration: none;
  transition: .65s ease;
  font-family: 'Tektur', sans-serif;
  letter-spacing: 1px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

li {
  margin-left: 0.75em;
  margin-right: 0.75em;
}

.link:hover {
  color: #0B409C;
  font-size: 30px;
  background-color: white;
  border-radius: 5rem;
  padding: 10%;
  letter-spacing: 0;
}

.drop {
  position: absolute;
  top: -100px;
  transform: translateX(-50%);
  animation: dropAnimation 1.5s ease forwards;
  width: 800px;
  margin-left: 30%;
}

@keyframes dropAnimation {
  to {
    top: 20%;
  }
}

.dropdown {
  display: inline-block;
  position: absolute;
  margin-top:10%;
  margin-left: 45%;
  padding-right: 8px;
}




</style>