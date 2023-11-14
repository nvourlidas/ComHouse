<template>
  <div v-if="isLoading" class="loading-spinner fadeOut">
    <Loader />
  </div>
  <div v-else class="home fadeIn">
    <Header class="stick" :style="{ backgroundColor: headerBackgroundColor }" />
    <Main class="mn" />

    <section class="parallax" id="home">
      <div class="content">
        <h1>ComHouse</h1>
        <p>We build awesome websites and apps</p>
      </div>
    </section>
  </div>
</template>
  
<script>
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Loader from '@/components/Loader.vue';
export default {
  components: {
    Header,
    Main,
    Loader
  },
  data() {
    return {
      headerBackgroundColor: "transparent",
      isLoading: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    setTimeout(() => {
      this.isLoading = false;
    }, 4500);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      this.headerBackgroundColor = `rgba(11, 64, 156, ${scrollPercentage / 100})`;
    },
  },

};
</script>
  
  
<style>
.parallax {
  /* background-image: url('your-background-image.jpg'); */
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  text-align: center;
  color: rgb(2, 0, 0);
}

.content h1 {
  font-size: 2.5rem;
}

.content p {
  font-size: 1.5rem;
}

.stick {
  position: fixed;
  top: 0;
  transition: background-color 0.3s ease;
  width: 100%;
}

.loading-spinner {
  /* Style your loading spinner here */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1.5rem;
  -webkit-animation-duration: 10s;
  animation-duration: 20s;
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

.fadeIn{
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

</style>
