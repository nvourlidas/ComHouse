<template>
    <div class="foot">
        <div class="main">
            <div class="item1">
                <h1>Επικοινωνία</h1>
                <h3>Email</h3>
                <p>comhouse@otenet.gr</p>
                <h3>Τηλέφωνο</h3>
                <p>23210 98466</p>
                <h3>Διέυθηνση</h3>
                <p>Computer House Βουρλίδας - Σεμέλογλου - Εθνικής Αντίστασης 40</p>
                <div>
                    <gmap-map :center="{ lat: 37.7749, lng: -122.4194 }" :zoom="13" style="width: 100%; height: 400px">
                        <gmap-marker :position="{ lat: 37.7749, lng: -122.4194 }" :clickable="true"
                            :draggable="false"></gmap-marker>
                    </gmap-map>
                </div>
            </div>
            <div class="item2">
                <h1>Menu</h1>
            </div>
            <div class="item3">
                <h1>Social</h1>

            </div>
        </div>
        <div class="container">
            <p>&copy; {{ currentYear }} ComHouse Βουρλίδας-Σεμέλογλου Computer house | Powered by <a
                    href="https://comhouse.gr">ComHouse.gr</a></p>
        </div>
    </div>
</template>
  
<script>
// import footerMenu from './footerMenu.vue';
export default {
    // components: {
    //     footerMenu
    // },
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
};
</script>
  
<style scoped>
.foot {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

.container {
    max-width: 95%;
    margin: 0 auto;
    border-top: 1px solid #fff;
}

a {
    color: white;
}

.main {
    display: flex;
    font-family: 'Tektur';
}

.item1 {
    flex: 1;
}

.item2 {
    flex: 1;
}

.item3 {
    flex: 1;
}
</style>  