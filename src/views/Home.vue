<template>
  <Header class="stick"/>
  <Main class="mn"/>
  <section class="parallax" id="home">
    <div class="content">
      <h1>ComHouse</h1>
      <p>We build awesome websites and apps</p>
    </div>
  </section>
</template>
  
<script>
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
export default {
  components: {
    Header,
    Main
  },
  data() {
    return {
      scrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
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

.stick{
  position: fixed;
}



</style>
