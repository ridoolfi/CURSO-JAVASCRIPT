var butt = window.document.getElementById('btn')
var fina = window.document.getElementById('finalizar')
var result = window.document.getElementById('res')
var retn = window.document.getElementById('retorno')

var lista = []

function adicionar(n){
    retn.innerHTML = ''
    if(n.length == 0 || n > 100 || n < 0){
        window.alert('Verifique os dados e tente novamente.')
    }else{
        res = document.createElement('option')
        res.text = `O valor inserido foi ${n}`
        result.appendChild(res)
        lista.push(Number(n))
    }
        
}

function finalizar() {
    if(lista.length == 0){
        alert('Adicione valores para finalizar')
    }else{
    lista.sort()
    var soma = lista.reduce((accumulator, value) => accumulator + value, 0);
    retn.innerHTML = `A quantidade de números inseridos foram ${lista.length}`
    retn.innerHTML += `<br>O maior número inserido foi ${lista[lista.length - 1]}`
    retn.innerHTML += `<br>O menor número inserido foi ${lista[0]}`
    retn.innerHTML += `<br>A soma dos numeros é igual a ${soma}`
    retn.innerHTML += `<br>A média dos números inseridos é igual a ${soma / lista.length}`
    }
}
butt.addEventListener('click', function() {adicionar(document.getElementById('num').value)})
fina.addEventListener('click', function () {finalizar()})

    