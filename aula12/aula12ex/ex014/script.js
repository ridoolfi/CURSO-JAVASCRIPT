function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora <12){
        img.src = 'manha.jpg'
        document.body.style.background = '#E5CC94'
        //bom dia
    } else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = "tarde.jpg"
        document.body.style.background = '#ffa606'
    }else {
        //boa noite!
        img.src = "noite.jpg"
        document.body.style.background = '#00002e'
    }
};

