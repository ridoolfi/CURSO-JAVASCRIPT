function calcular(){
    var number = document.getElementById('num')
    var res = document.getElementById('result')
    if((number.value).length == 0){
        alert('[ERROR] Verifique os dados e tente novamente.')
    }else {
        res.innerHTML = ''
        for(var c = 0; c <= 10; c++){
            item = document.createElement('option')
            item.text = `${number.value}x${c} == ${c * number.value}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
        
    }
}