let livros = [];

function lerDados(url){
    fetch(url)
        .then((resp) => resp.json())
        .then( json => livros =json.registros)
}

lerDados('dados/biblioteca.json');

$('#btn1').click(function(){
    let p = document.querySelector('#pesq').value;
    let tipo = document.querySelector('#tipo').value; 
    pesquisa(p, tipo);
})

function pesquisa(str, tipo){
    $('#resultado').html('')
    for (let livro of livros){
        switch(tipo){
            case '1':
                    if (livro.titulo.toUpperCase().indexOf(str.toUpperCase()) >= 0){
                        montaLivro(livro);
                    }
                    break;
            case '2' :
                if (livro.classificacao.toUpperCase() == str.toUpperCase()){
                        montaLivro(livro);
                }
        }
    }
}
function montaLivro(livro){
    let autores = "";
    for (let autor of livro.autores){
        autores += autor.nome + '<br>'
    }
    $('#resultado').append(`<article>
                            <div>
                            <img src='${livro.capa}'>
                            <p>
                                ${autores}
                            </p>
                            </div>
                            Assunto: ${livro.assunto}
                        </article>')

        `)
}