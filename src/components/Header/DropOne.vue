<template>
    <div class="main">
        <ul>
            <li><router-link to="/" class="link">Ταμειακές</router-link></li>
            <li><router-link to="/" class="link">Υπολογιστές</router-link></li>
            <li><router-link to="/" class="link">Εκτυπωτές</router-link></li>
        </ul>
    </div>
</template>

<style scoped>
.main {
    /* background-color: aliceblue; */
    width: 20%;
    height: 200px;
    font-size: 1.5rem;
    border-radius: 5%;
    margin-bottom: -25%;
}
.link {
  color: #0B409C;
  text-decoration: none;
  /* transition: .65s ease; */
  font-family: 'Tektur', sans-serif;
  letter-spacing: 1px;
  transition: text-shadow 0.3s ease;
}

.link:hover {
  text-shadow: 0 0 2px #0B409C;
}

li{
  margin: 10%;
}

ul {
  list-style: none;
}

@media screen and (min-width: 1601px)  {
  .main {
    font-size: 2rem;
  }
}

</style>