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
  color: #0B409C;
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
  color: rgb(253, 253, 253);
  font-size: 30px;
  background-color: #0B409C;
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

</style>