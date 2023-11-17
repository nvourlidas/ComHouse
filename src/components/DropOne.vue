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
    background-color: aliceblue;
    width: 20%;
    height: 200px;
    font-size: 2rem;
    border-radius: 5%;
}
.link {
  color: #0B409C;
  text-decoration: none;
  /* transition: .65s ease; */
  font-family: 'Tektur', sans-serif;
  letter-spacing: 1px;
}

ul {
  list-style: none;
}

</style>