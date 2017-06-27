

//Qui l'emporte?
function emporter(ordi, user){
  if(ordi === user) return "Egaux";
  //fixer ordi à pierre, et faire 2 tests sur user
  else if(ordi === "pierre")
  {
    if(user === "feuille") return "user feuille"; //la feuille l'emporte sur la pierre
    else if(user === "ciseaux") return "ordi pierre"; //la pierre l'emporte sur les siseaux
  }
  //fixer ordi à feuille, et faire 2 tests sur user
  else if(ordi === "feuille")
  {
    if(user === "pierre") return "ordi feuille";
    else if(user === "ciseaux") return "user ciseaux";
  }
  //fixer ordi à ciseaux et faire 2 tests sur user
  else if(ordi === "ciseaux")
  {
    if(user === "pierre") return "user pierre";
    else if(user === "feuille") return "ordi ciseaux";
  }
}



//3 manches
for(var manche=1; manche<=3; manche++){
  //choix ordi & user
  var choixUser = prompt("Choisir entre pierre, feuille et ciseaux: ");
  console.log("Choix Utilisateur: "+choixUser);
  var choixOrdi = Math.random();
  if(choixOrdi<0.34) choixOrdi = "pierre";
  else if(choixOrdi<=0.67) choixOrdi = "feuille";
  else choixOrdi = "ciseaux";
  console.log("Choix Ordinateur: "+choixOrdi);
  //Pour cette manche, le gagnant:
  var res = emporter(choixOrdi, choixUser);
  console.log("Gagnant: ", res);
}
