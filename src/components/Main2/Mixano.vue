<template>
    <h1>Λύσεις Μηχανογράφησης</h1>
    <div class="main">
        <div class="item1">
            <p>H εταιρία μας εγκαθιστά, παραμετροποιεί και υποστηρίζει προγράμματα των μεγαλυτέρων
                 Ελληνικών Software houses (Softone, Unisoft). 
                 Από την ίδρυση μας αποτελούμε βασικό συνεργάτη της Unisoft.</p>
                 <h3>Yλοποίηση νέας μηχανογράφησης</h3>
                 <ul>
                    <li>Συμβουλευτικές Υπηρεσίες</li>
                    <li>Μεταφορά Δεδομένων & Ειδικές διασυνδέσεις</li>
                    <li>Εκπαίδευση στελεχών</li>
                    <li>Υποστήριξη On-site & απομακρυσμένα</li>
                 </ul>
                </div>
        <div class="item2">
            <img src="@/assets/SCREENS-SFA-2.png">
        </div>
    </div>
</template>

<style scoped>

h1{
    margin-left: 40%;
    font-family: 'Tektur';
    color: #0B409C;
    margin-top: 10%;
}
.main{
    display: grid;
    grid-template-rows: 50%;
    grid-template-columns: 50%;
    font: 1.3rem 'Tektur';
   color: aliceblue;
}

.item1{
    grid-column-start: 1;
    margin-left: 15%;
    margin-top: 10%;
 width: 80%;
 height: 150%;
 background: linear-gradient(-45deg, #297cf8 0%, #0B409C 100% );
 transition: all 300ms;
 padding: 5%;
 z-index: 2;
 border-radius: 10%;
}

.item1:hover{
    opacity: 0.8;
 transform: scale(1.20);
 
}


.item2{
    grid-column-start: 2;
}
</style>