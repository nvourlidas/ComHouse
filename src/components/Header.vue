<template>
  <div class="header">
    <div class="logo">
      <img class="logoimg" src="@/assets/cropped-logo_transparent-1.png" alt="">
    </div>
    <div class="menu">
      <div class="drop">
        <ul>
          <li><router-link to="/" class="link">Αρχική</router-link></li>
          <li><router-link to="/" class="link">Προϊόντα</router-link></li>
          <li><router-link to="/" class="link">Μηχανογράφιση</router-link></li>
          <li><router-link to="/" class="link">Επικοινωνία</router-link></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="main">
    <img style="width: 30%; padding: 5% 35% ;" src="@/assets/logo_transparent.png" alt="">
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
  </div>
</template>




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
  color: rgb(25, 50, 160);
  text-decoration: none;
  transition: .65s ease;
  font-family: 'Tektur', sans-serif;
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
  color: rgb(253, 253, 253);
  font-size: 30px;
  background-color: rgb(25, 50, 160);
  border-radius: 5rem;
  padding: 10%;
}

.drop {
  position: absolute;
  top: -100px;
  transform: translateX(-50%);
  animation: dropAnimation 1.5s ease forwards;
  width: 900px;
  margin-left: 30%;
}

@keyframes dropAnimation {
  to {
    top: 20%;
  }
}

.main{
  background-color: rgb(25, 50, 160);
  width:120%;
  height: 700px;
  margin-left: -10%;
  
}

.bubble {
  position: absolute;
  width: 30px; /* Adjust bubble size */
  height: 30px;
  background-color: #fff; /* Adjust bubble color */
  border-radius: 50%;
  animation: moveBubbles 5s linear infinite; /* Adjust animation duration and timing function */
}

@keyframes moveBubbles {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(700px, -100px); /* Adjust the path of the bubble movement */
  }
  50% {
    transform: translate(900px, 0);
  }
  75% {
    transform: translate(200px, 100px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>