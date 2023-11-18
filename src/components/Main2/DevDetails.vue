<template>
    <div class="cards">
        <div class="card red">
            <p class="tip">Ιστοσελίδες</p>
            <p class="second-text">Στοχεύουμε στη δημιουργία μιας ιδανικής ιστοσελίδας που ανταποκρίνεται 
                στις ανάγκες της επιχείρησής σας, με εξειδίκευση σε σχεδιασμό και ανάπτυξη.
                 Δημιουργούμε ένα προσαρμοσμένο διαδικτυακό περιβάλλον που αντικατοπτρίζει 
                 την επαγγελματική σας ταυτότητα και ενισχύει τον διαδικτυακό σας παρουσιαστικό χώρο.
            </p>
        </div>
        <div class="card blue">
            <p class="tip">Online Κατάστημα</p>
            <p class="second-text">
                Στοχεύουμε να μεταφέρουμε το κατάστημά σας στον διαδικτυακό
                χώρο με έναν εντυπωσιακό τρόπο. Μέσω μιας εξειδικευμένης ιστοσελίδας,
                παρουσιάζουμε τις υπηρεσίες και τα προϊόντα σας με μοναδικό τρόπο,
                καθιστώντας την επιχείρησή σας προσβάσιμη και επικοινωνιακή στον διαδικτυακό κόσμο.</p>
        </div>
        <div class="card green">
            <p class="tip">Εξειδικευμένες Πλατφόρμες</p>
            <p class="second-text">Δημιουργούμε μια προσαρμοσμένη διαδικτυακή πλατφόρμα 
                που ανταποκρίνεται εξ ολοκλήρου στις ιδιαίτερες ανάγκες της επιχείρησής σας. 
                Αναλαμβάνουμε την επίλυση οποιουδήποτε προβλήματος αντιμετωπίζετε στον επιχειρηματικό σας χώρο,
                 παρέχοντας ολοκληρωμένες λύσεις που εξασφαλίζουν την απόλυτη εφαρμογή και αποτελεσματικότητα.</p>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&family=Tektur&family=Ubuntu&display=swap');

.cards {
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin-left: 10%;
    margin-top: 10%;
}

.cards .red {
    background: linear-gradient(-45deg, #297cf8 0%, #0B409C 100% );
}

.cards .blue {
    background: linear-gradient(-45deg, #297cf8 0%, #0B409C 100% );
}

.cards .green {
    background: linear-gradient(-45deg, #297cf8 0%, #0B409C 100% );
}

.cards .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 400px;
    width: 30%;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;
    font-family: 'Tektur';

}

.cards .card p.tip {
    font-size: 2em;
    font-weight: 700;
}

.cards .card p.second-text {
    font-size: 1em;
}

.cards .card:hover {
    transform: scale(1.2, 1.2);
}

.cards:hover>.card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
}
</style>