//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

    
let amigos = [];              //-------> Array p/ armazenar os nomes.

function adicionarAmigo() {                         //----------> Funcao qd o usuario clicar no botao ADICIONAR
    let input = document.getElementById("amigo");   //----------> Encontra o elemento HTML que tem o id "amigo"
    let nome = input.value.trim();                   //---------> captura o valor digitado e usa .trim p/ remover espcacoes extras no inicio e fim.

    if (nome === "") {                              //---------> Verifica se o campo esta vazio e retorna.
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);                    //----------> Add o nome ao array let amigos usando o comando .push()
    atualizarListaAmigos();               //----------> Atualiza a lista na tela.
    input.value = "";                     //----------> limpa o campo de entrada p/ o usuario posso inserir outro nome
}

function atualizarListaAmigos() {       //------------> Define a funcao responsavel por atualizar a exibicao de amigos na tela.
    let lista = document.getElementById("listaAmigos");  //------> Encontra o elemento <ul> no HTML 'listaAmigos' onde os nomes dos amigos serao exibidos
    lista.innerHTML = "";               //---------> Limpa o conteudo da lista antes de add os novos itens.
    amigos.forEach(nome => {            //---------> percorre o array amigos, pegando cada nome armazenado
        let li = document.createElement("li");    //---> Cria um novo elemento (<li> Item de lista)p/ cada amigo
        li.textContent = nome;          //---------> Define o texto <li> como o nome do amigo
        lista.appendChild(li);          //---------> Add o <li> lista de amigos exibida na pagina
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {                  //--------> Verifica se esta vazio
        alert("Nenhum amigo na lista para sortear."); 
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length); //-----> (Match.random Gera um numero aleatorio)Matchfloor arrendoanda para baixo
    let amigoSorteado = amigos[indiceSorteado];
    
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`; //-----> Seleciona o elemento HTML com id="resultado", onde será exibido o nome do amigo sorteado e innerHTML para inserir um novo <li> contendo o nome sorteado.
    
    
}