
function calculerImc(poids, taille) {


    //Calculer la taille en metres
    let tailleEnMetre  = (taille/100);
    //calculer la taille au metre carre 
    let tailleCalculee = Math.pow(tailleEnMetre,2);

    let resultat       = poids/tailleCalculee;

    return resultat;


}

let poids  = prompt("Quel est votre poids en kilogramme ?");

let taille = prompt("Quel est votre taille en centimetre");

alert ("Votre IMC est de "+ calculerImc(poids, taille));