function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente.')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'um Homem'
            document.body.style.background ='hsl(207, 90%, 40%)'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bb_menino.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Jovem Homem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Homem_Adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'uma Mulher'
            document.body.style.background ='rgb(168, 103, 154)'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bb_menina.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem mulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Mulher_Adulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}