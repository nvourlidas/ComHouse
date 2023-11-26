<template>
  <div v-if="isLoading" class="loading-spinner fadeOut">
    <Loader />
  </div>
  <div v-else class="home fadeIn">
    <Menu />
    <Header class="stick" :style="{ backgroundColor: headerBackgroundColor }" />
    <Main class="mn" />
    <HypnoHole class="orb" />
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="webdev" :style="{ opacity: opacity }">
      <div class="svganime">
        <WebDev />
      </div>
      <div class="par">
        <h1>
          Κατασκευή Ιστοσελίδων
        </h1>
        <p>
          Η εταιρία μας εξειδικεύεται στην κατασκευή
          εξατομικευμένων ιστοσελίδων που αντικατοπτρίζουν την επαγγελματική σας ταυτότητα.
          Με υψηλής ποιότητας σχεδίαση και προηγμένες τεχνολογίες ανάπτυξης, προσφέρουμε λύσεις που ενισχύουν την παρουσία
          σας στο διαδίκτυο, επιτυγχάνοντας συνάρπαστα αποτελέσματα.</p>
      </div>
    </div>
    <DevDetails />
    <h1 style="margin-left: 40%; font: 2rem 'Tektur'; margin-top: 10%; color: #0B409C;">Υπηρεσίες</h1>
    <Services />
    <Footer />
  </div>
</template>
  
<script>
import Header from '@/components/Header/Header.vue';
import Main from '@/components/Main/Main.vue';
import HypnoHole from '@/components/Main/HypnoHole.vue';
import Loader from '@/components/Loader.vue';
import Menu from '@/components/Header/menu.vue';
import WebDev from '@/components/Main2/WebDev.vue';
import DevDetails from '@/components/Main2/DevDetails.vue';
import Services from '@/components/Main2/Services.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  components: {
    Header,
    Main,
    HypnoHole,
    Loader,
    Menu,
    WebDev,
    DevDetails,
    Services,
    Footer
  },
  data() {
    return {
      headerBackgroundColor: "transparent",
      isLoading: true,
      opacity: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 4500);
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.opacity = 0 + window.scrollY / 700;
    },
  },

};
</script>
  
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&family=Tektur&family=Ubuntu&display=swap');

body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;

}
.loading-spinner {
  /* Style your loading spinner here */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1.5rem;
  -webkit-animation-duration: 1s;
  animation-duration: 30s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}


@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

.home {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.webdev {
  display: grid;
  grid-template-rows: 50%;
  grid-template-columns: 50%;
  margin-top: 5%;
  margin-left: 5%;
  width: 90%;
  background: rgba(255,255,255,.05);
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  backdrop-filter: blur(20px);
  border-radius: 8px;
  transition: opacity 0.7s ease-in-out;
  transition: all 0.5s;

}

.webdev:hover{
  transform: scale(1.04) rotate(1deg);
}

.circle2 {
  width: 200px;
  height: 200px;
  background: radial-gradient(#637eac, #0B409C);
  border-radius: 50%;
  position: absolute;
  animation: move-up6 1s ease-in infinite alternate-reverse;
}

.circle3 {
  width: 200px;
  height: 200px;
  background: radial-gradient(#637eac, #0B409C);
  border-radius: 50%;
  position: absolute;
  animation: move-up6 1s ease-in infinite alternate-reverse;
  margin-left: 82%;
  margin-top: 48%;
}

.circle2:nth-child(1) {
  top: -25px;
  left: -25px;
}

.circle2:nth-child(2) {
  bottom: -25px;
  right: -25px;
  animation-name: move-down1;
}

@keyframes move-up6 {
  to {
    transform: translateY(-20px);
  }
}

@keyframes move-down1 {
  to {
    transform: translateY(30px);
  }
}

.svganime {
  grid-column-start: 2;
  margin-left: -10%;
  margin-top: 20%;
}

.par {
  grid-column-start: 1;
  margin-left: 20%;
  margin-top: -35%;
  font: 1.2rem 'Tektur';
  color: #0B409C;
}
</style>
