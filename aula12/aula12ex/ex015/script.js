

function verifique() {
    var data = new Date()
    var ano = data.getFullYear()

    var fAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')

    }else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-masc.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'jovem-masc.jpg')
            }
            else if(idade < 50){
                img.setAttribute('src', 'adulto-masc.jpg')
            }else {
                img.setAttribute('src', 'idoso-masc.jpg')            }
        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-fem.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'jovem-fem.jpg')
            }
            else if(idade < 50){
                img.setAttribute('src', 'adulta-fem.jpg')
            }else {
                img.setAttribute('src', 'idosa-fem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    
    
    }
}