let notes = [12, 15, 8, 19, 11, 14, 17, 13];

function calculerMoyenne(notes) {
    let somme = 0;
    for (let note of notes) {
        somme += note;
    }
    return (somme / notes.length).toFixed(2);
}

function noteLaPlusHaute(notes) {
    let maxNote = notes[0];
    for (let note of notes) {
        if (note > maxNote) {
            maxNote = note;
        }
    }
    return maxNote;
}

function noteLaPlusBasse(notes) {
    let minNote = notes[0];
    for (let note of notes) {
        if (note < minNote) {
            minNote = note;
        }
    }
    return minNote;
}

function calculerPourcentage(notes, moyenne) {
    let count = 0;
    for (let note of notes) {
        if (note >= moyenne) {
            count++;
        }
    }
    return ((count / notes.length) * 100).toFixed(1);
}

function attribuerMention(moyenne) {
    if (moyenne >= 16) {
        return "Très bien";
    } else if (moyenne >= 12) {
        return "Bien";
    } else if (moyenne >= 10) {
        return "Passable";
    } else {
        return "Insuffisant";
    }
}

function obtenirDateEtHeure() {
    let maintenant = new Date();
    let date = maintenant.toISOString().split("T")[0];
    let heure = maintenant.toTimeString().split(" ")[0];
    return `${date} ${heure}`;
}

function trierNotes(notes, ordre = 'croissant') {
    return ordre === 'croissant'
        ? [...notes].sort((a, b) => a - b)
        : [...notes].sort((a, b) => b - a);
}

function afficherEtudiantsEchoues(notes, moyenne) {
    let echoues = notes.filter(note => note < moyenne);
    console.log("Étudiants ayant échoué (note < moyenne) :", echoues);
}

let moyenneClasse = calculerMoyenne(notes);
console.log("Notes de la classe :", notes);
console.log("Moyenne de la classe :", moyenneClasse);
console.log("Pourcentage d'étudiants ayant la moyenne :", calculerPourcentage(notes, moyenneClasse) + "%");
console.log("Mention de la classe :", attribuerMention(moyenneClasse));
console.log("Date et heure du calcul :", obtenirDateEtHeure());

console.log("Notes triées (croissant) :", trierNotes(notes, 'croissant'));
console.log("Notes triées (décroissant) :", trierNotes(notes, 'décroissant'));

afficherEtudiantsEchoues(notes, moyenneClasse);