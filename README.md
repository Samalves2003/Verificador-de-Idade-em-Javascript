# Verificador de Idade em Javascript
## Estudos de JS


Este projeto é um verificador de idade desenvolvido com JavaScript, HTML e CSS. O foco principal é a prática de estruturas de condição aninhadas e compostas.
## Estrutura do Projeto
- HTML: Define a interface do usuário, onde o usuário pode inserir seu ano de nascimento e selecionar seu gênero.
- CSS: Utilizado para estilizar a página.
- JavaScript: Contém a lógica do verificador de idade.
## Código JavaScript

A função verificar() é a principal responsável por validar os dados do usuário, calcular a idade, determinar o gênero e exibir a imagem correspondente.

## Explicação do Código
#### 1. Obtenção do Ano Atual:
    var data = new Date();
    var ano = data.getFullYear();

### 2. Captura do Ano de Nascimento e Elementos HTML:

    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

### 3. Validação dos Dados Inseridos:
Verifica se o campo de ano de nascimento está preenchido e se o valor é válido.

    if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('Verifique os dados e tente novamente.');
    } else {

### 4. Cálculo da Idade e Verificação do Gênero:

    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var gênero = '';
### 5.Estruturas de Condição Aninhadas e Compostas:
Baseado no gênero e na idade, uma imagem e um fundo diferentes são exibidos.

#### Para Homens:

    if (fsex[0].checked) {
      gênero = 'um Homem';
      document.body.style.background = 'hsl(207, 90%, 40%)';
      if (idade >= 0 && idade < 10) {
          img.setAttribute('src', 'bb_menino.jpg');
      } else if (idade < 21) {
          img.setAttribute('src', 'Jovem Homem.jpg');
      } else if (idade < 50) {
          img.setAttribute('src', 'Homem_Adulto.jpg');
      } else {
          img.setAttribute('src', 'idoso.jpg');
      }
     }
#### Para Mulheres:

    else if (fsex[1].checked) {
      gênero = 'uma Mulher';
      document.body.style.background = 'rgb(168, 103, 154)';
      if (idade >= 0 && idade < 10) {
          img.setAttribute('src', 'bb_menina.jpg');
      } else if (idade < 21) {
          img.setAttribute('src', 'jovem mulher.jpg');
      } else if (idade < 50) {
          img.setAttribute('src', 'Mulher_Adulta.jpg');
      } else {
          img.setAttribute('src', 'idosa.jpg');
      }
    }
### 6.Exibição dos Resultados:

    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
}
## Considerações Finais
Este exercício foi uma excelente oportunidade para praticar e aprofundar o conhecimento em JavaScript, especialmente no uso de estruturas de condição aninhadas e compostas. Além disso, a integração com HTML e CSS permitiu criar uma interface interativa e visualmente agradável.
