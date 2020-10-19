function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('textano');
    let res = document.getElementById('res');
    

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        
        window.alert('[ERRO] - Verifique suas informações e tente novamente!');

    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = ''
        let img = document.createElement('img');
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked) {
            
            if(idade <= 1) {
                genero = 'nenem'
                img.setAttribute('src', 'nenem.png')

            } else if (idade <=10){
                //CRIANÇA
                genero = 'uma criança'
                img.setAttribute('src', 'menino.png')

            } else if(idade <= 18 ) {
                //ADOLESCENTE
                genero = 'adolescente'
                img.setAttribute('src', 'adolescenteh.png')

            } else if(idade < 60) {
                //ADULTO
                genero = 'homem'
                img.setAttribute('src', 'homem.png')

            } else if(idade >= 60) {
                //IDOSO
                genero = 'idoso'
                img.setAttribute('src', 'idoso.png')

            }
            
            res.innerHTML = `Você é um ${genero} de ${idade} anos.`
            res.appendChild(img);


        } else if(fsex[1].checked) {
           
            if(idade <= 1) {
                genero = 'uma nenem'
                img.setAttribute('src', 'nenemmulher.png')

            } else if (idade <=10){
                //CRIANÇA
                genero = 'uma criança'
                img.setAttribute('src', 'menina.png')

            } else if(idade <= 18 ) {
                //ADOLESCENTE
                genero = 'uma adolescente'
                img.setAttribute('src', 'adolescentem.png')

            } else if(idade < 60) {
                //ADULTO
                genero = 'uma mulher'
                img.setAttribute('src', 'mulher.png')

            } else if(idade >= 60) {
                //IDOSO
                genero = 'uma idosa'
                img.setAttribute('src', 'idosa.png')

            }
           
            res.innerHTML = `Você é uma ${genero} de ${idade} anos.`
            res.appendChild(img);

        }
        
    }
}