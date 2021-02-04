
// Exo1
let exercice1 = document.getElementById("exercice1")
let bgBtn1 = document.getElementById("1")
let titreExo1 = document.getElementsByClassName("text-primary")[0]
let btn = document.querySelectorAll("button")
let titreModification = document.getElementsByTagName("h2")[0]
titreModification.innerText ="Titre modifié"
titreModification.style.color = "white"
titreModification.setAttribute("class", "bg-info")
const ApparitionExo1 = () => {
    exercice1.style.display = "block"
    btn[0].setAttribute("class", "bg-primary")
    titreExo1.setAttribute("class", "text-white")
    exercice2.style.display = "none"
    btn[1].setAttribute("class", " ")
    titreExo2.setAttribute("class", "text-primary")
    exercice3.style.display = "none"
    btn[2].setAttribute("class", " ")
    titreExo3.setAttribute("class", "text-primary")
    exercice4.style.display = "none"
    btn[3].setAttribute("class", "")
    titreExo4.setAttribute("class", "text-primary")
    exercice5.style.display = "none"
    btn[4].setAttribute("class", "")
    titreExo5.setAttribute("class", "text-primary")
    exercice6.style.display = "none"
    btn[5].setAttribute("class", "")
    titreExo6.setAttribute("class", "text-primary")
    exercice7.style.display = "none"
    btn[6].setAttribute("class", "")
    titreExo7.setAttribute("class", "text-primary")
    
    
}
btn[0].addEventListener("click", ApparitionExo1)
// Exo2
let exercice2 = document.getElementById("exercice2")
let titreExo2 = document.getElementsByClassName("text-primary")[1]
const ApparitionExo2 = () => {
    exercice1.style.display = "none"
    exercice2.style.display = "block"
    btn[1].setAttribute("class", "bg-primary")
    titreExo2.setAttribute("class", "text-white")
    btn[0].setAttribute("class", " ")
    titreExo1.setAttribute("class", "text-primary")
    exercice3.style.display = "none"
    btn[2].setAttribute("class", " ")
    titreExo3.setAttribute("class", "text-primary")
    exercice4.style.display = "none"
    btn[3].setAttribute("class", "")
    titreExo4.setAttribute("class", "text-primary")
    exercice5.style.display = "none"
    btn[4].setAttribute("class", "")
    titreExo5.setAttribute("class", "text-primary")
    exercice6.style.display = "none"
    btn[5].setAttribute("class", "")
    titreExo6.setAttribute("class", "text-primary")
    exercice7.style.display = "none"
    btn[6].setAttribute("class", "")
    titreExo7.setAttribute("class", "text-primary")
    
}
btn[1].addEventListener("click", ApparitionExo2)
// Exo3
let exercice3 = document.getElementById("exercice3")
let titreExo3 = document.getElementsByClassName("text-primary")[2]
const ApparitionExo3 = () => {
    exercice1.style.display = "none"
    exercice2.style.display = "none"
    btn[1].setAttribute("class", " ")
    titreExo2.setAttribute("class", "text-primary")
    btn[0].setAttribute("class", " ")
    titreExo1.setAttribute("class", "text-primary")
    exercice3.style.display = "block"
    btn[2].setAttribute("class", "bg-primary")
    titreExo3.setAttribute("class", "text-white")
    exercice4.style.display = "none"
    btn[3].setAttribute("class", "")
    titreExo4.setAttribute("class", "text-primary")
    exercice5.style.display = "none"
    btn[4].setAttribute("class", "")
    titreExo5.setAttribute("class", "text-primary")
    exercice6.style.display = "none"
    btn[5].setAttribute("class", "")
    titreExo6.setAttribute("class", "text-primary")
    exercice7.style.display = "none"
    btn[6].setAttribute("class", "")
    titreExo7.setAttribute("class", "text-primary")
}
btn[2].addEventListener("click", ApparitionExo3)
let inconnu = document.getElementsByClassName("inconnu")[0]
let btnGo = document.getElementById("go")
console.log(btnGo);
let input = document.getElementsByTagName("input")[0]
console.log(input);
const RajouterInconnu = () => {
    inconnu.innerText = `${input.value}`
    input.value = " "

}
btnGo.addEventListener("click", RajouterInconnu)
// Exo4
let exercice4 = document.getElementById("exercice4")
let titreExo4 = document.getElementsByClassName("text-primary")[3]
const ApparitionExo4 = () => {
    exercice1.style.display = "none"
    exercice2.style.display = "none"
    btn[1].setAttribute("class", " ")
    titreExo2.setAttribute("class", "text-primary")
    btn[0].setAttribute("class", " ")
    titreExo1.setAttribute("class", "text-primary")
    exercice3.style.display = "none"
    btn[2].setAttribute("class", "")
    titreExo3.setAttribute("class", "text-primary")
    exercice4.style.display = "block"
    btn[3].setAttribute("class", "bg-primary")
    titreExo4.setAttribute("class", "text-white")
    exercice5.style.display = "none"
    btn[4].setAttribute("class", "")
    titreExo5.setAttribute("class", "text-primary")
    exercice6.style.display = "none"
    btn[5].setAttribute("class", "")
    titreExo6.setAttribute("class", "text-primary")
    exercice7.style.display = "none"
    btn[6].setAttribute("class", "")
    titreExo7.setAttribute("class", "text-primary")
}
btn[3].addEventListener("click", ApparitionExo4)
let btnChange = document.getElementsByClassName("bg-warning")[0]
let carreRouge1 = document.getElementsByClassName("carreRouge1")[0]
let carreRouge2 = document.getElementsByClassName("carreRouge2")[0]
let titrebtn = document.getElementById("click")
let i = 0


const Changer = () =>{
    i++
    carreRouge1.classList.toggle("magie1")
    carreRouge1.classList.toggle("carreRouge1")
    carreRouge2.classList.toggle("magie2")
    carreRouge2.classList.toggle("carreRouge2")
    titrebtn.innerText = `nombre de click ${i}`

}
btnChange.addEventListener("click", Changer)
// Exo5
let exercice5 = document.getElementById("exercice5")
let titreExo5 = document.getElementsByClassName("text-primary")[4]
const ApparitionExo5 = () => {
    exercice1.style.display = "none"
    exercice2.style.display = "none"
    btn[1].setAttribute("class", " ")
    titreExo2.setAttribute("class", "text-primary")
    btn[0].setAttribute("class", " ")
    titreExo1.setAttribute("class", "text-primary")
    exercice3.style.display = "none"
    btn[2].setAttribute("class", "")
    titreExo3.setAttribute("class", "text-primary")
    exercice4.style.display = "none"
    btn[3].setAttribute("class", "")
    titreExo4.setAttribute("class", "text-primary")
    exercice5.style.display = "block"
    btn[4].setAttribute("class", "bg-primary")
    titreExo5.setAttribute("class", "text-white")
    exercice6.style.display = "none"
    btn[5].setAttribute("class", "")
    titreExo6.setAttribute("class", "text-primary")
    exercice7.style.display = "none"
    btn[6].setAttribute("class", "")
    titreExo7.setAttribute("class", "text-primary")
}
btn[4].addEventListener("click", ApparitionExo5)

let btnOeuf = document.getElementById("oeuf")
let boite = document.getElementById("boite")
const Pondre = () =>{
    let image = document.createElement("img")
    image.setAttribute("width", "200")
    image.setAttribute("src", "../../public/images/egg.png")
    boite.appendChild(image)
}
btnOeuf.addEventListener("click", Pondre)

// Exo6
let exercice6 = document.getElementById("exercice6")
let titreExo6 = document.getElementsByClassName("text-primary")[5]
const ApparitionExo6 = () => {
    exercice1.style.display = "none"
    exercice2.style.display = "none"
    btn[1].setAttribute("class", " ")
    titreExo2.setAttribute("class", "text-primary")
    btn[0].setAttribute("class", " ")
    titreExo1.setAttribute("class", "text-primary")
    exercice3.style.display = "none"
    btn[2].setAttribute("class", "")
    titreExo3.setAttribute("class", "text-primary")
    exercice4.style.display = "none"
    btn[3].setAttribute("class", "")
    titreExo4.setAttribute("class", "text-primary")
    exercice5.style.display = "none"
    btn[4].setAttribute("class", "")
    titreExo5.setAttribute("class", "text-primary")
    exercice6.style.display = "block"
    btn[5].setAttribute("class", "bg-primary")
    titreExo6.setAttribute("class", "text-white")
    exercice7.style.display = "none"
    btn[6].setAttribute("class", "")
    titreExo7.setAttribute("class", "text-primary")
}
btn[5].addEventListener("click", ApparitionExo6)

let chiffre1 = document.getElementsByTagName("input")[1]
let chiffre2 = document.getElementsByTagName("input")[2]
let reponse1 = document.getElementById("reponse")
let btnCalcul1 = document.getElementById("plus")

const Calcul1 = () =>{
    reponse1.innerText = `${Number(chiffre1.value) + Number(chiffre2.value)}`
}
btnCalcul1.addEventListener("click", Calcul1)

let btnChiffre1 = document.getElementById("1")
let btnChiffre2 = document.getElementById("2")
let btnChiffre3 = document.getElementById("3")
let btnChiffre4 = document.getElementById("4")
let btnChiffre5 = document.getElementById("5")
let btnChiffre6 = document.getElementById("6")
let btnChiffre7 = document.getElementById("7")
let btnChiffre8 = document.getElementById("8")
let btnChiffre9 = document.getElementById("9")
let btnChiffre0 = document.getElementById("0")
let btnPlus = document.getElementById("+")
let btnMoins = document.getElementById("-")
let btnMultiplication = document.getElementById("*")
let btnDivision = document.getElementById("/")
let btnC =document.getElementById("C")
let affichage = document.getElementsByTagName("input")[3]
let btnEgal = document.getElementById("=")
let interrogation = document.getElementById("?")
let element1 = document.getElementById("element1")
let element2 = document.getElementById("element2")
let operator = document.getElementById("operateur")
let reponse2 = document.getElementById("reponse2")
console.log(element1);
console.log(element2);
console.log(operator);

const Un= () =>{
    affichage.value += `${btnChiffre1.innerText}`
    
}
btnChiffre1.addEventListener("click", Un)
const Deux= () =>{
    affichage.value += `${btnChiffre2.innerText}`
    
}
btnChiffre2.addEventListener("click", Deux)
const Trois= () =>{
    affichage.value += `${btnChiffre3.innerText}`
    
}
btnChiffre3.addEventListener("click", Trois)
const Quattres= () =>{
    affichage.value += `${btnChiffre4.innerText}`
    
}
btnChiffre4.addEventListener("click", Quattres)
const Cinq= () =>{
    affichage.value += `${btnChiffre5.innerText}`
    
}
btnChiffre5.addEventListener("click", Cinq)
const Six = () =>{
    affichage.value += `${btnChiffre6.innerText}`
    
}
btnChiffre6.addEventListener("click", Six)
const Sept = () =>{
    affichage.value += `${btnChiffre7.innerText}`
    
}
btnChiffre7.addEventListener("click", Sept)
const Huit = () =>{
    affichage.value += `${btnChiffre8.innerText}`
    
}
btnChiffre8.addEventListener("click", Huit)
const Neuf = () =>{
    affichage.value += `${btnChiffre9.innerText}`
    
}
btnChiffre9.addEventListener("click", Neuf)
const Zero = () =>{
    affichage.value += `${btnChiffre0.innerText}`
    
}
btnChiffre0.addEventListener("click", Zero)
const Plus = () =>{
    interrogation.innerText = " "
    element1.innerText = affichage.value 
    operator.innerText = btnPlus.innerText
    affichage.value = " "
    
}
btnPlus.addEventListener("click", Plus)
const Moins = () =>{
    interrogation.innerText = " "
    element1.innerText = affichage.value 
    operator.innerText = btnMoins.innerText
    affichage.value = " "
    console.log(btnMoins);
}
btnMoins.addEventListener("click", Moins)
const Multi = () =>{
    interrogation.innerText = " "
    element1.innerText = affichage.value 
    operator.innerText = btnMultiplication.innerText
    affichage.value = " "
    
}
btnMultiplication.addEventListener("click", Multi)
const Divi = () =>{
    interrogation.innerText = " "
    element1.innerText = affichage.value 
    operator.innerText = btnDivision.innerText
    affichage.value = " "
    
}
btnDivision.addEventListener("click", Divi)
const Remove = () =>{
    affichage.value = " "
    element1.innerText = " "
    element2.innerText = " "
    operator.innerText = " "
    interrogation.innerText = "?"
    reponse2.innerText = " "
    
}
btnC.addEventListener("click", Remove)
const Resultat = () =>{
    element2.innerText = affichage.value
    if (affichage.value === " ") {
        interrogation.innerText = "?"
    }
    console.log(operator.innerText);
    switch (operator.innerText) {
        case "+":
            reponse2.innerText = `= ${Number(element1.innerText) + Number(element2.innerText)}`
            affichage.value =""
            break;
        case "-":
            reponse2.innerText = `= ${Number(element1.innerText) - Number(element2.innerText)}`
            affichage.value =""
            break;
        case "/":
            reponse2.innerText = `= ${Number(element1.innerText) / Number(element2.innerText)}`
            affichage.value =""
         
            break;
        case "*":
            reponse2.innerText = `= ${Number(element1.innerText) * Number(element2.innerText)}`
            affichage.value =""
                    
            break;
    
        default:
            break;
    }
    
}
btnEgal.addEventListener("click", Resultat)
// Exo7
let exercice7 = document.getElementById("exercice7")
let titreExo7 = document.getElementsByClassName("text-primary")[6]
const ApparitionExo7 = () => {
    exercice1.style.display = "none"
    exercice2.style.display = "none"
    btn[1].setAttribute("class", " ")
    titreExo2.setAttribute("class", "text-primary")
    btn[0].setAttribute("class", " ")
    titreExo1.setAttribute("class", "text-primary")
    exercice3.style.display = "none"
    btn[2].setAttribute("class", "")
    titreExo3.setAttribute("class", "text-primary")
    exercice4.style.display = "none"
    btn[3].setAttribute("class", "")
    titreExo4.setAttribute("class", "text-primary")
    exercice5.style.display = "none"
    btn[4].setAttribute("class", "")
    titreExo5.setAttribute("class", "text-primary")
    exercice6.style.display = "none"
    btn[5].setAttribute("class", "")
    titreExo6.setAttribute("class", "text-primary")
    exercice7.style.display = "block"
    btn[6].setAttribute("class", "bg-primary")
    titreExo7.setAttribute("class", "text-white")
}
btn[6].addEventListener("click", ApparitionExo7)
let faire = document.getElementsByTagName("input")[4]
var liste = document.getElementById("liste")
var btnToutes = document.getElementById("toutes")
var btnCompleter = document.getElementById("completer")
let btnFaire = document.getElementById("faire")
const taches = (e) =>{
    if (e.key === "Enter") {
    var barreTache = document.createElement("div")
    barreTache.setAttribute("class", "magie3")
    liste.appendChild(barreTache)
    let activite = document.createElement("span")
    activite.setAttribute("class", "magie5")
    activite.innerText = faire.value
    barreTache.appendChild(activite)
    faire.value = ""
    let btnValide = document.createElement("button")
    btnValide.setAttribute("class", "bg-success border-0 px-3 py-1 ml-auto")
    btnValide.style.borderRadius = "0.5rem"
    let btnJaune = document.createElement("button")
    btnJaune.setAttribute("class", "bg-warning border-0 px-3 py-1 ml-1")
    btnJaune.style.borderRadius = "0.5rem"
    let btnRouge = document.createElement("button")
    btnRouge.setAttribute("class", "bg-danger border-0 px-3 py-1 ml-1 mr-3")
    btnRouge.style.borderRadius = "0.5rem"
    let icone1 = document.createElement("i")
    icone1.setAttribute("class", "fas fa-check text-white")
    let icone2 = document.createElement("i")
    icone2.setAttribute("class", "fas fa-trash-alt text-white")
    let icone3 = document.createElement("i")
    icone3.setAttribute("class", "fas fa-edit")
    let btnSave = document.createElement("button")
    btnSave.setAttribute("class", "bg-warning border-0 px-3 py-1 ml-1 d-none")
    btnSave.style.borderRadius = "0.5rem"
    let icone4 = document.createElement("i")
    icone4.setAttribute("class", "fas fa-save")
    let input7 = document.createElement("input")
    input7.style.height = "40px"
    input7.style.width = "150px"
    input7.style.display ="none"
    input7.style.marginLeft ="30px"
    btnValide.appendChild(icone1)
    btnRouge.appendChild(icone2)
    btnJaune.appendChild(icone3)
    btnSave.appendChild(icone4)
    barreTache.append(input7, btnValide, btnJaune, btnRouge, btnSave)
    const Sup = () =>{
        barreTache.remove()
    }
    btnRouge.addEventListener("click", Sup)
    const Green = () =>{
        barreTache.classList.toggle("magie4")
        barreTache.classList.toggle("magie3")
        activite.classList.toggle("magie6")
        activite.classList.toggle("magie5")
        
    }
    btnValide.addEventListener("click", Green)
    const Completer = () =>{
        if (barreTache.classList.value === "magie3") {
            barreTache.style.display = "none"
            btnValide.setAttribute("class", "bg-success border-0 px-3 py-1 ml-auto")
        }
        else if (barreTache.classList.value !== "magie3") {
            barreTache.style.display = "flex"
            btnValide.setAttribute("class", "bg-success border-0 px-3 py-1 ml-auto")
        } 

    }
    btnCompleter.addEventListener("click", Completer)
    const Afaire = () =>{
        if (barreTache.classList.value !== "magie3") {
            barreTache.style.display = "none"
            
        }
        else if (barreTache.classList.value ==="magie3"){
            barreTache.style.display = "flex"
            
        }

    }
    btnFaire.addEventListener("click", Afaire)
    const Toutes = () =>{
        if (barreTache.classList.value !== "magie3") {
            barreTache.style.display = "flex"
           
        }
        else if (barreTache.classList.value === "magie3") {
            barreTache.style.display = "flex"
            
            
        } 


    }
    btnToutes.addEventListener("click", Toutes)
    const Editer = () =>{
        btnRouge.setAttribute("class", "bg-danger border-0 px-3 py-2 ml-1 mr-3 d-none")
        btnValide.setAttribute("class", "bg-success border-0 px-3 py-2 ml-auto d-none")
        btnJaune.setAttribute("class", "bg-warning border-0 px-3 py-2 ml-1 d-none")
        btnSave.setAttribute("class", "bg-warning border-0 px-3 py-1 ml-auto mr-5 ")
        input7.value = activite.innerText
        activite.style.display = "none"
        input7.style.display ="flex"
        
    }
    btnJaune.addEventListener("click", Editer)
    const Save = () =>{
        btnRouge.setAttribute("class", "bg-danger border-0 px-3 py-2 ml-1 mr-3 d-flex")
        btnSave.setAttribute("class", "bg-warning border-0 px-3 py-2 ml-auto mr-5 d-none")
        btnJaune.setAttribute("class", "bg-warning border-0 px-3 py-2 ml-1 d-flex")
        btnValide.setAttribute("class", "bg-success border-0 px-3 py-2 ml-auto d-flex")
        activite.innerText = input7.value
        activite.style.display = "flex"
        input7.style.display ="none"
        
        
    }
    btnSave.addEventListener("click", Save)

    }
    
    

    
}
faire.addEventListener("keypress", taches)


console.log(btnCompleter);