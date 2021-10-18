function esconder() {
    let painel = document.getElementById("resposta")
    painel.style.visibility = "hidden"
}

function naturalidade() {
    let estado = document.getElementById("estado").value 
    let natu = ""
    switch (estado) {
        case "AC":
            natu = "Acriano"
            break;
        case "AL":
            natu = "Alagoano"
            break;
        case "AP":
            natu = "Amapense"
            break;
        case "AM":
            natu = "Amazonense"
            break;
        case "BA":
            natu = "Baiano"
            break;
        case "CE":
            natu = "Cearense"
            break;
        case "DF":
            natu = "Brasiliense"
            break;
        case "ES":
            natu = "Capixaba"
            break;
        case "GO":
            natu = "Goiano"
            break;
        case "MA":
            natu = "Maranhense"
            break;
        case "MT":
            natu = "Mato-grossense"
            break;
        case "MS":
            natu = "Sul-mato-grossense"
            break;
        case "MG":
            natu = "Mineiro"
            break;
        case "PA":
            natu = "Paraense"
            break;
        case "PB":
            natu = "Paraibano"
            break;
        case "PR":
            natu = "Paraense"
            break;
        case "PE":
            natu = "Pernambucano"
            break;
        case "PI":
            natu = "Piauiense"
            break;
        case "RJ":
            natu = "Fluminense"
            break;
        case "RN":
            natu = "Potiguar"
            break;
        case "RS":
            natu = "Gaúcho"
            break;
        case "RO":
            natu = "Rondoniano"
            break;
        case "RR":
            natu = "Roraimense"
            break;
        case "SC":
            natu = "Catarinense"
            break;
        case "SP":
            natu = "Paulista"
            break;
        case "SE":
            natu = "Sergipano"
            break;
        case "TO":
            natu = "Tocantinense"
            break;
        default:
            natu = "Indefinido"
            break;
    }
    
    let painel = document.getElementById("resposta")
    let frase = document.getElementById("natural")
    
    frase.innerHTML = `Quem nasce no estado <strong>${estado}</strong> dizemos ser <strong>${natu}</strong>!`
    painel.style.visibility = "visible"
    
    return false
}