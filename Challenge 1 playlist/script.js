// Création initiale du tableau playlist avec une propriété "durée"
let playlist = [
    { titre: "Bohemian Rhapsody", artiste: "Queen", duree: "5:54" },
    { titre: "Imagine", artiste: "John Lennon", duree: "3:03" },
];

// Fonction pour ajouter une nouvelle chanson à la playlist avec la durée
function ajouterChanson(titre, artiste, duree) {
    let nouvelleChanson = { titre: titre, artiste: artiste, duree: duree };
    playlist.push(nouvelleChanson);
    console.log(`Nouvelle chanson ajoutée : ${titre} - ${artiste} (${duree})`);
}

// Fonction pour afficher toutes les chansons de la playlist
function afficherPlaylist() {
    playlist.forEach((chanson, index) => {
        console.log(`${index + 1}. ${chanson.titre} - ${chanson.artiste} (${chanson.duree})`);
    });
}

// Fonction pour calculer la durée totale de la playlist
function calculerDureeTotale() {
    let totalMinutes = 0;
    let totalSecondes = 0;

    playlist.forEach(chanson => {
        let [minutes, secondes] = chanson.duree.split(":").map(Number);
        totalMinutes += minutes;
        totalSecondes += secondes;
    });

    // Convertir les secondes en minutes si elles dépassent 60
    totalMinutes += Math.floor(totalSecondes / 60);
    totalSecondes = totalSecondes % 60;

    console.log(`Durée totale de la playlist : ${totalMinutes}m ${totalSecondes}s`);
}

// Fonction pour mélanger aléatoirement l'ordre des chansons
function melangerPlaylist() {
    for (let i = playlist.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
    }
    console.log("Playlist mélangée :");
    afficherPlaylist();
}

// Exemple d'utilisation
ajouterChanson("Billie Jean","Michael Jackson","4:54");
calculerDureeTotale()
melangerPlaylist();