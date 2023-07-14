/* 

O que precisamos fazer ? quando passar o mouse em cima do personagem da lista,temos que adicionar a borda colorida
e mostrar a imagem grande, o nome e a descrição do personagem que está selecionado.

*/

/* Objetivo 1 - quando passar o mouse em cima do personagem na listagem, devemos
 selecioná-lo

    passo1 - pegar os personagens no JS para poder verificar quando o usuário passar
    o mouse em cima de um deles.

    passo 2 - adicionar a classe selecionada no personagem que o usuário passar o 
    o cursor do mouse.

    passo 3 - verificar se já exista um personagem selecionado, se sim devemos 
    remover a seleção dele. 

 Objetivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a 
    imagem, o nome e a descrição do personagem grande.

    passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele 
    passo 2 - alterar a imagem do personagem grande 
    passo 3 - alterar o nome do personagem grande 
    passo 4 - alterar a descrição do personagem grande
*/

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('click', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0 });
        }

        removerClasseSelecionado(personagem);
        trocarPersonagemGrande(personagem);
        trocarNomePersonagem(personagem);
        trocarDescricaoPersonagem(personagem);

    });
})

function removerClasseSelecionado(personagem) {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
    personagem.classList.add('selecionado');
}

function trocarPersonagemGrande(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/img/${idPersonagem}.png`;
}

function trocarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function trocarDescricaoPersonagem(personagem) {
    const descricao = document.getElementById('descricao-personagem');
    descricao.innerText = personagem.getAttribute('data-description');
}




