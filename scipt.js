

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    afficherSlogan(data) //Etant donné que c une boucle on appelle pas le nom du tableau
    afficherProduits(data.produits); // étant donné quec une boucle donc on écrit le nom du tableau (on peut lécrire ici ou dans le code d'en bas)
    afficherQualite(data.qualite);
    afficherAvis(data.clients);


  });
//role :afficher le slogan et le texte du bouton dans cover
//parametre : des données
//return : rien

function afficherSlogan(tableauDatas) {

  let nomEntreprise = tableauDatas.nomEntreprise
  let slogan = tableauDatas.slogan
  let bouton = tableauDatas.bouton

  document.getElementById("cover").innerHTML += `
     
            <div class="titrehCover">
                <h2 >
                    ${nomEntreprise} ... ${slogan}
                </h2>
                <a href="" class="btn"> ${bouton}</a>

            </div>`

}

// role : afficher les produits
// parametre : tableau de produits
//return : rien 
function afficherProduits(tableauPoduits) {
  tableauPoduits.forEach(produit => {
    let titre = produit.titre
    let presentation = produit.presentation
    let image = produit.imageUrl

    document.getElementById("boiteProduits").innerHTML += `
 
                <div class="carte">
                    <img class="imgsize" src="${image}" alt="Photo d'un praliné croustillant">
                    <div class="textecarte">
                       
                        <h3>${titre}</h3>
                        <p>${presentation}</p>
                        <div class="flex space w75">
                          <a href ="" class="btn2"> Détails </a>
                          <a href="" class="btn2"> Acheter </a>
                        </div>
                    </div>
                    
                </div>
                `
    //On a pas besoin de citer tout le produit, un suffit car c une boucle
  });
}

//role:
//parametre : 
//return : 
function afficherQualite(tableauQualite) {
  tableauQualite.forEach((qualite, index) => {

    if (index % 2 === 0){
    document.getElementById("qualites").innerHTML += `
    

    <div >
    <p class="qualiteTxt " class="start flex " data-aos="fade-right" > ${qualite} </p>
    </div>
    `

    }
    else {
         document.getElementById("qualites").innerHTML += `
    

    <div class="end flex" data-aos="fade-left">
    <p class="qualiteTxt "> ${qualite} </p>
    </div>
    `

    }


    // }
  });
}

//role:
// paramtre :
// return :
function afficherAvis(tableauAvis) {
  tableauAvis.forEach((avis, index) => {
    let nom = avis.nom
    let typePrestation = avis.typePrestation
    let commentaire = avis.commentaire
    let note = avis.note

    let noteClient = afficherEtoile(note)
    if(index % 2 === 0){

    document.getElementById("avis").innerHTML += `

                <div class="carteavis alignCenter col id="avis">
                    <p>${nom}</p>
                    <h3 class="texteita">${typePrestation}</H3>
                    <P>${commentaire}</P>
                    <P>${noteClient}</P>
                </div>
    
  `}
  else{   document.getElementById("avis").innerHTML += `

                <div class="carteavis alignCenter co " id="avis">
                    <p>${nom}</p>
                    <h3 class="texteita">${typePrestation}</H3>
                    <P>${commentaire}</P>
                    <P>${noteClient}</P>
                </div>
    
  `}
  });
};


// Role : transformer des notes en etoiles (pleines et vides)
//parametre : des notes
// return: etoiles vide ou/et pleine
function afficherEtoile(note) {
  // ★☆
  let noteClient = ""
  if (note === 5) {
    noteClient= "★★★★★"
  } else if (note === 4){
     noteClient= "★★★★☆"
  }
  else if (note === 3){
   noteClient= "★★★☆☆" 
  } else if (note===2){
    noteClient= "★★☆☆☆"
  } else if (note===1){
    noteClient= "★☆☆☆☆"
  } else {
    noteClient= "☆☆☆☆☆"
  }
  
return noteClient
    
}