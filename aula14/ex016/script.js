






function contar(){
    var ini = window.document.getElementById('inicio')
    ini = Number(ini.value)
    var fim = window.document.getElementById('fim')
    fim = Number(fim.value)
    var passo = window.document.getElementById('passo')
    passo = Number(passo.value)
    var resultado = document.getElementById('res')
    var res = ''

    if(ini.length == 0 || fim.length == 0 || passo.length == 0){
        window.alert('Verifique os dados e tente novamente!')
    }else if(passo == 0){
        window.alert('O passo não pode ser igual a 0, considerando como 1 agora.')
        resultado.innerHTML = "Contando<br>" 
        if(ini > fim){
        
            while(ini > fim){
                
                resultado.innerHTML +=  `\u{1F449} ${ini}`
                ini --
            }
            resultado.innerHTML +=  `\u{1F3C1}`
        }else {
            resultado.innerHTML = "Contando<br>" 
            do{
                
                resultado.innerHTML += `\u{1F449} ${ini}`
                ini ++
            }while (ini < fim)
            resultado.innerHTML +=  `\u{1F3C1}`
        }
        
        
    }else{
        resultado.innerHTML = "Contando<br>" 
        if(ini > fim){
            
            while(ini >= fim){
                
                resultado.innerHTML +=  `\u{1F449} ${ini}`
                ini -= passo
            }
            resultado.innerHTML += res + `\u{1F3C1}`
        }else {
            
            do{
                
                resultado.innerHTML +=  `\u{1F449} ${ini}`
                ini += passo
            }while (ini < fim)
            resultado.innerHTML += `\u{1F3C1}`
        }
    }
}