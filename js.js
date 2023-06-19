
function verificar(){
    var ano = window.document.getElementById("nascimento")
    
    var res = window.document.getElementById("res")

    var atual = new Date().getFullYear()

    var idade = (Number(ano.value) - Number(atual))*(-1)

    

    if(ano.value.lenght == 0 || ano.value > atual){
        window.alert("[erro] Verifique os dados e tente novamente")
    }
    else if(ano.value < 1950){
        window.alert("Idade invalida ou muito avançada")
    }

    else{
        var sexo = window.document.getElementsByName("sexo")
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id","foto")
        if(sexo[0].checked){
            genero = "mulher"
            res.innerHTML = "Detectamos uma mulher de " + idade + " anos de idade"
            res.appendChild(img)
            if(idade > 0 && idade <= 10){
                img.setAttribute("src",'imgs/menina-criança.jpg')
            }
            else if(idade < 21){
                img.setAttribute("src",'imgs/adolescente-_ulher.jpg')
            }

            else if(idade < 51){
                img.setAttribute("src",'imgs/jovem-mulher.jpg')
            }

            else{
                img.setAttribute("src",'imgs/idosa.jpg')
            }
        }
        else if(sexo[1].checked){
            genero = "homem"
            res.innerHTML =  "Detectamos um homem de " + idade + " anos de idade"
            res.appendChild(img)
            if(idade > 0 && idade <= 10){
                img.setAttribute("src",'imgs/homem criança.jpg')
            }
            else if(idade < 21){
                img.setAttribute("src",'imgs/adolesscente.jpg')
            }

            else if(idade < 51){
                img.setAttribute("src",'imgs/jovem homem.jpg')
            }

            else{
                img.setAttribute("src",'imgs/idoso.jpg')
            }
        }
    }
    
}
