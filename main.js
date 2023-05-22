const homeInicio = document.getElementById('homePG');
const primeiraPagina = document.getElementById('pagina1PG');
const segundaPagina = document.getElementById('pagina2PG');
const sectionHome = document.getElementById('home');
const sectionPagina1 = document.getElementById('paginaUm');
const sectionPagina2 = document.getElementById('paginaDois');
const limparInputs = document.getElementById('limparInput');
const inicioPaginaBtn = document.getElementById('voltarPgInicial');
let idNoticia = 0;

// TROCAR DE PÁGINA

homeInicio.addEventListener('click', () => {
    sectionHome.classList.remove('desativado');
    sectionHome.classList.add('ativo');

    sectionPagina1.classList.remove('ativo');
    sectionPagina1.classList.add('desativado');
    

    sectionPagina2.classList.remove('ativo');
    sectionPagina2.classList.add('desativado');
})

primeiraPagina.addEventListener('click', () => {
    sectionHome.classList.remove('ativo');
    sectionHome.classList.add('desativado');
    
    sectionPagina1.classList.remove('desativado');
    sectionPagina1.classList.add('ativo');
    
    
    sectionPagina2.classList.remove('ativo');
    sectionPagina2.classList.add('desativado');
})

segundaPagina.addEventListener('click', () => {
    sectionHome.classList.remove('ativo');
    sectionHome.classList.add('desativado');
    
    sectionPagina1.classList.remove('ativo');
    sectionPagina1.classList.add('desativado');
    
    
    sectionPagina2.classList.remove('desativado');
    sectionPagina2.classList.add('ativo');
})



// FIM

// Criar Categoria

const btnCadastro = document.getElementById('btnCadastro');
let cadastroCategoria = document.getElementById('categoriaNome');
let erroCategoria = document.getElementById('erro-not-cadastro');
let sucessoCategoria = document.getElementById('sucesso-not-cadastro');
let inputSelectAdd = document.getElementById('categ');

btnCadastro.addEventListener('click', () => {
    let nomeCategoria = cadastroCategoria.value;
    let erroTxt =  "Por favor digite o nome da categoria.";
    let sucessoTxt = "Categoria criado com sucesso!";

    if (nomeCategoria === "") {
        erroCategoria.style.display = "block";
        erroCategoria.innerHTML = erroTxt;
        setTimeout(function() {
            erroCategoria.style.display = "none";
            erroCategoria.innerHTML = "";
        }, 3000)
    } else {
        sucessoCategoria.style.display = "block";
        sucessoCategoria.innerHTML = sucessoTxt;
        setTimeout(function() {
            sucessoCategoria.style.display = "none";
            sucessoCategoria.innerHTML = "";
        }, 4000)
        // Enviar a categoria para a pagina de cadastrar noticias
        let criarOption = document.createElement('option');
        criarOption.value = nomeCategoria;
        criarOption.textContent = nomeCategoria;

        inputSelectAdd.appendChild(criarOption);
        document.getElementById('categoriaNome').value = "";
    }
})

// FIM

// CADASTRAR NÓTICIAS

const salvarNoticiaCadastro = document.getElementById('salvar-noticia');
let inputTituloNoticia = document.getElementById('input-titulo-noticia');
let inputCategoriaNoticia = document.getElementById('categ');
let inputConteudoNoticia = document.getElementById('conteudo');
let noticiasAp = document.getElementById('addNot');


limparInputs.addEventListener('click', function() {
    document.getElementById('input-titulo-noticia').value = "";
    document.getElementById('conteudo').value = "";
    // alert('tteste')
    // limparInputFuc()
})

function inicioPagina() {
    sectionHome.classList.remove('desativado');
    sectionHome.classList.add('ativo');

    sectionPagina1.classList.remove('ativo');
    sectionPagina1.classList.add('desativado');


    sectionPagina2.classList.remove('ativo');
    sectionPagina2.classList.add('desativado');
}

inicioPaginaBtn.addEventListener('click', () => {
    inicioPagina()
})


salvarNoticiaCadastro.addEventListener('click', () => {
    let tituloNoticia = inputTituloNoticia.value;
    let categoriaNoticia = inputCategoriaNoticia.value;
    let conteudoNoticia = inputConteudoNoticia.value;
    let erroNoticia = document.getElementById('erro-not');
    let erroT = "Por favor digite o título da notícia";
    let sucessoNoticia = document.getElementById('sucesso-not');
    let sucessoT = "Notícia cadastrada com sucesso";

    if(tituloNoticia === "") {
        // alert('Nome do título')
        erroNoticia.style.display = "block"
        erroNoticia.innerHTML = erroT;
        setTimeout(function() {
            erroNoticia.style.display = "none"
            erroNoticia.innerHTML = "";
        }, 4000)
    } else {

        ++idNoticia

        let adicionarNoticia = `<div class="noticia" id=${idNoticia}>
        <div class="header-noticia">
            <h3>${tituloNoticia}</h3>
            <div class="categoria-not">
                <p>Categoria: ${categoriaNoticia}</p>
            </div>
        </div>
        <div class="body-noticia">
            <div class="img"></div>
            <div class="conteudo-sobre">
                <p>${conteudoNoticia}</p>
            </div>
        </div>
        <div class="footer-noticia">
            <button>Acessar</button>
        </div>
    </div>`

    noticiasAp.innerHTML += adicionarNoticia;
    limparInputFuc()
    
    sucessoNoticia.style.display = 'block'
    sucessoNoticia.innerHTML = sucessoT;
    setTimeout(function() {
        sucessoNoticia.style.display = 'none'
        sucessoNoticia.innerHTML = "";
    }, 3000)
}


function limparInputFuc() {
        document.getElementById('input-titulo-noticia').value = "";
        document.getElementById('conteudo').value = "";
    }
})


