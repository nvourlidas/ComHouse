<template>
    <div class="main">
        <div class="item1">
            <div class="content">
            <h2>Επισκευή Ταμειακών Μηχανών & Φορολογικών Μηχανισμών</h2>
            <h3>ΕΠΙΣΚΕΥΗ ΚΛΕΙΣΙΜΟ – ΠΑΥΣΗ ΤΑΜΕΙΑΚΩΝ ΜΗΧΑΝΩΝ & ΦΟΡΟΛΟΓΙΚΩΝ ΜΗΧΑΝΙΣΜΩΝ</h3>
            <p>Η Εταιρία μας διαθέτει εξουσιοδοτημένο έμπειρο τεχνικό τμήμα για την εγκατάσταση,
                επισκευή, και κλείσιμο – παύση των ταμειακών μηχανών και φορολογικών μηχανισμών.
                Αναλαμβάνουμε το κλείσιμο, παύση ταμειακών μηχανών, φορολογικών μηχανισμών και την
                ανάγνωση της φορολογικής μνήμης. Παρέχουμε τις υπηρεσίες μας τόσο στην περιοχή των Σερρών,
                αλλά και Πανελλαδικά κατόπιν συνεννοήσεως.</p>
            </div>
        </div>
        <div class="item2">
            <img src="@/assets/epia-mcr-product-white.png">
        </div>
        <div class="item3">
            <img src="@/assets/computer-maintenance.jpg" class="eikona">
        </div>
        <div class="item4">
            <div class="content">
            <h2>Υποστήριξη Service Υπολογιστών</h2>
            <p>Η Εταιρία μας διαθέτει έμπειρο τεχνικό τμήμα για την επισκευή ηλεκτρονικών υπολογιστών.
                Αξιόπιστη και αποτελεσματική αντιμετώπιση τεχνικών προβλημάτων σε εξοπλισμούς
                και λογισμικό συστημάτων πληροφορικής</p>
            <h3>Αναλυτικά οι παρεχόμενες υπηρεσίες:</h3>
            <p>Ηλεκτρονικών Υπολογιστών (Laptop & Desktop)<br>
                <ul>
                <li>Εγκατάσταση και παραμετροποίηση server</li>
                <li>Δικτύων</li>
                <li> Περιφερειακών συσκευών Η/Υ</li>
            </ul>
                Η τεχνική υποστήριξη παρέχεται είτε στο service της εταιρείας μας, είτε στο χώρο σας.</p>
            </div>
        </div>
    </div>
    <Mixano />
    <h1 style="margin-left: 40%; font: 2rem  'Tektur'; margin-top: 15%; color: #0B409C;">Επίσημοι Συνεργάτες</h1>
    <Synergates />
</template>

<script>
import Mixano from "./Mixano.vue"
import Synergates from "./Synergates.vue"

export default {
    components:{
        Mixano,
        Synergates
    }
}
</script>

<style scoped>
.main {
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 50% 50%;
    font-family: 'Tektur';
    color: #0B409C;
}

.item1 {
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 2;
    grid-column-end: 2;
    align-items: center;
  justify-content: center;
  /* width: 320px; */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 32px;
  overflow: hidden;
  border-radius: 10px;
  transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
  position: relative;
}

.item1::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(-45deg, #297cf8 0%, #0B409C 100% );
  z-index: -1;
  transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
}

.item1:hover::before {
  height: 100%;
}

.item1:hover {
  box-shadow: none;
  color: aliceblue;
}

.item2 {
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 1;
    grid-column-end: 1;
    margin-left: 10%;
}

.item3 {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 2;
    margin-top: 10%;
    margin-left: 10%;
}

.item4 {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 1;
    margin-left: 10%;
    margin-top: -10%;
  align-items: center;
  justify-content: center;
  /* width: 320px; */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 32px;
  overflow: hidden;
  border-radius: 10px;
  transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
  position: relative;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  /* color: #e8e8e8; */
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.item4::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(-45deg, #297cf8 0%, #0B409C 100% );
  z-index: -1;
  transition: all 0.9s cubic-bezier(0.23, 1, 0.320, 1);
}

.item4:hover::before {
  height: 100%;
}

.item4:hover {
  box-shadow: none;
  color: aliceblue;
}

.eikona {
    display: block;
    width: 90%; 
    border-radius: 10%;
    transition: all 1s ease;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1); 
}

.eikona:hover {
    width: 100%;
    margin-left: -10%;
    margin-top: -10%;
    z-index: 2;
    
}
</style>