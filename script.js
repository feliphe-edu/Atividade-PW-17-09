/*===========================================================
    DESENVOLVIMENTO WEB

    Template Oficial da Disciplina

    Professor: Paulo Carvalho

    Arquivo: script.js

    Este arquivo contém todos os recursos JavaScript utilizados no template.

===========================================================*/


/*===========================================================
            AGUARDA O CARREGAMENTO DO HTML
===========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("Template carregado com sucesso!");

    iniciarNavbar()

    iniciarScrollSuave()

});



/*===========================================================
                NAVBAR DINÂMICA

Quando o usuário desce a página,
a Navbar muda de aparência.
===========================================================*/

function iniciarNavbar() {

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.classList.add("navbar-scroll");

        } else {

            navbar.classList.remove("navbar-scroll");

        }

    });

}



/*===========================================================
            SCROLL SUAVE

Ao clicar em um item do menu,
a página desliza suavemente.
===========================================================*/

function iniciarScrollSuave() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {

                e.preventDefault();

                destino.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

      



/*===========================================================
            MENU ATIVO

Conforme o usuário navega,
o item correspondente fica destacado.
===========================================================*/

window.addEventListener("scroll", destacarMenu);



function destacarMenu() {

    const secoes = document.querySelectorAll("section");

    const links = document.querySelectorAll(".navbar .nav-link");

    let atual = "";

    secoes.forEach(function (secao) {

        const topo = secao.offsetTop - 120;

        const altura = secao.clientHeight;

        if (window.scrollY >= topo &&
            window.scrollY < topo + altura) {

            atual = secao.getAttribute("id");

        }

    });

    links.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + atual) {

            link.classList.add("active");

      



/*===========================================================
            EFEITO PARALLAX NO HERO

Move o banner levemente conforme
o usuário faz scroll.

Este efeito será utilizado na Hero.
===========================================================*/

window.addEventListener("scroll", efeitoHero);



function efeitoHero() {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    let posicao = window.scrollY;

    hero.style.backgroundPositionY = posicao * 0.4 + "px";

}



/*===========================================================
        ALTERAÇÃO DO TÍTULO DA PÁGINA

Quando o usuário troca de aba,
o título muda.

Quando retorna,
o título original volta.

Muito utilizado em sites comerciais.
===========================================================*/

const tituloOriginal = document.title;

document.addEventListener("visibilitychange", function () {

    if (document.hidden) {

        document.title = "👋 Volte! Ainda temos novidades.";

    } else {

        document.title = tituloOriginal;

    }

});



/*===========================================================
            LOG NO CONSOLE

Apenas para fins didáticos.

Pode ser removido futuramente.
===========================================================*/

console.log("--------------------------------------");

console.log("DESENVOLVIMENTO WEB");

console.log("Template Oficial");

console.log("Professor Paulo Carvalho");

console.log("--------------------------------------");



/*===========================================================
            FIM DA PARTE 1

Na Parte 2 implementaremos:

✔ Botão Voltar ao Topo
✔ Barra de Progresso da Página
✔ Indicador de Scroll
✔ Ocultar botão automaticamente
✔ Animações do botão

===========================================================*/
/*===========================================================
                BOTÃO VOLTAR AO TOPO
===========================================================*/

/*
O botão aparece quando o usuário desce aproximadamente 400 pixels na página.
*/

const botaoTopo = document.getElementById("btnTopo");


window.addEventListener("scroll", controlarBotaoTopo);



function controlarBotaoTopo() {

    if (!botaoTopo) return;

    if (window.scrollY > 400) {

        botaoTopo.style.opacity = "1";

        botaoTopo.style.visibility = "visible";

        botaoTopo.style.transform = "translateY(0px)";

    }

    else {

        botaoTopo.style.opacity = "0";

        botaoTopo.style.visibility = "hidden";

        botaoTopo.style.transform = "translateY(30px)";

    }

}



/*
Ao clicar,
a página retorna suavemente
para o topo.
*/

if (botaoTopo) {

    botaoTopo.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



/*===========================================================
                BARRA DE PROGRESSO

Mostra quanto da página
o usuário já percorreu.
===========================================================*/


/*
Cria a barra automaticamente.

Não é necessário inserir HTML.
*/

const barra = document.createElement("div");

barra.id = "barraProgresso";

document.body.appendChild(barra);



window.addEventListener("scroll", atualizarBarra);



function atualizarBarra() {

    const alturaPagina =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const porcentagem =

        (window.scrollY / alturaPagina) * 100;

    barra.style.width = porcentagem + "%";

}



/*===========================================================
                EFEITO NOS LINKS

Ao passar o mouse
é aplicada uma pequena animação.

===========================================================*/


const linksNavbar = document.querySelectorAll(".navbar a");


linksNavbar.forEach(function (link) {

    link.addEventListener("mouseenter", function () {

        this.style.transition = ".3s";

        this.style.transform = "translateY(-2px)";

    });


    link.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0px)";

    });

});



/*===========================================================
                BOTÕES

Todos os botões Bootstrap
recebem uma animação simples.

===========================================================*/


const botoes = document.querySelectorAll(".btn");


botoes.forEach(function (botao) {

    botao.addEventListener("mouseenter", function () {

        this.style.transition = ".25s";

        this.style.transform = "scale(1.05)";

    });


    botao.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

});



/*===========================================================
            EFEITO NAS IMAGENS

Ao passar o mouse
a imagem recebe zoom.

===========================================================*/


const imagens = document.querySelectorAll("img");


imagens.forEach(function (imagem) {

    imagem.addEventListener("mouseenter", function () {

        this.style.transition = ".4s";

        this.style.transform = "scale(1.03)";

    });


    imagem.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

});



/*===========================================================
            DETECÇÃO DE RESOLUÇÃO

Mostra no console
o tamanho atual da tela.

Utilizado em aula
para explicar responsividade.
===========================================================*/


window.addEventListener("resize", informarResolucao);



function informarResolucao() {

    console.clear();

    console.log("--------------------------------");

    console.log("Largura:", window.innerWidth);

    console.log("Altura :", window.innerHeight);

    console.log("--------------------------------");

}


informarResolucao();



/*===========================================================
                FIM DA PARTE 2

Próxima Parte

✔ Contador Animado

✔ Intersection Observer

✔ Fade In

✔ Reveal

✔ Cards aparecendo

✔ Animações automáticas

===========================================================*/

/*===========================================================
                CONTADOR ANIMADO
===========================================================*/

const contadores = document.querySelectorAll(".counter");

let contadorExecutado = false;



function iniciarContadores() {

    if (contadorExecutado) return;

    contadorExecutado = true;

    contadores.forEach(contador => {

        contador.innerText = "0";

        const destino = Number(contador.dataset.target);

        const incremento = destino / 120;

        let valor = 0;

        function atualizar() {

            valor += incremento;

            if (valor < destino) {

                contador.innerText = Math.floor(valor);

                requestAnimationFrame(atualizar);

            }

            else {

                contador.innerText = destino;

            }

        }

        atualizar();

    });

}



/*===========================================================
        OBSERVER DOS CONTADORES
===========================================================*/

const observerContador = new IntersectionObserver(

    function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                iniciarContadores();

            }

        });

    },

    {

        threshold: .5

    }

);



const secaoEstatisticas = document.querySelector(".bg-primary");

if (secaoEstatisticas) {

    observerContador.observe(secaoEstatisticas);

}



/*===========================================================
            REVEAL ANIMATION

Todos elementos que possuem
a classe "reveal"

receberão animação.

===========================================================*/


const elementosReveal = document.querySelectorAll(".reveal");



const observerReveal = new IntersectionObserver(

    function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {

        threshold: .15

    }

);



elementosReveal.forEach(function (elemento) {

    observerReveal.observe(elemento);

});



/*===========================================================
            REVEAL LEFT
===========================================================*/


const esquerda = document.querySelectorAll(".reveal-left");



const observerEsquerda = new IntersectionObserver(

    function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active-left");

            }

        });

    },

    {

        threshold:.15

    }

);



esquerda.forEach(function(item){

    observerEsquerda.observe(item);

});



/*===========================================================
            REVEAL RIGHT
===========================================================*/


const direita=document.querySelectorAll(".reveal-right");



const observerDireita=new IntersectionObserver(

function(entries){

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active-right");

}

});

},

{

threshold:.15

}

);



direita.forEach(function(item){

observerDireita.observe(item);

});



/*===========================================================
                REVEAL ZOOM
===========================================================*/


const zoom=document.querySelectorAll(".zoom");



const observerZoom=new IntersectionObserver(

function(entries){

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("zoom-active");

}

});

},

{

threshold:.20

}

);



zoom.forEach(function(item){

observerZoom.observe(item);

});

/*===========================================================
                DARK MODE

Professor:
Paulo Carvalho

Nesta seção aprenderemos:

✔ LocalStorage
✔ Toggle
✔ Classes CSS
✔ Manipulação do DOM
✔ Persistência

===========================================================*/


const botaoDark = document.getElementById("btnDarkMode");



const iconeDark = botaoDark.querySelector("i");



/*===========================================================
            VERIFICA O TEMA SALVO
===========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const tema = localStorage.getItem("tema");

    if (tema === "dark") {

        ativarDarkMode();

    }

});



/*===========================================================
            EVENTO DO BOTÃO
===========================================================*/

botaoDark.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    atualizarTema();

});



/*===========================================================
        ATUALIZA O TEMA
===========================================================*/

function atualizarTema() {

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("tema", "dark");

        trocarIconeLua();

    }

    else {

        localStorage.setItem("tema", "light");

        trocarIconeSol();

    }

}



/*===========================================================
            ATIVA O TEMA
===========================================================*/

function ativarDarkMode() {

    document.body.classList.add("dark-mode");

    trocarIconeLua();

}



/*===========================================================
        ÍCONE LUA
===========================================================*/

function trocarIconeLua() {

    iconeDark.classList.remove("bi-sun-fill");

    iconeDark.classList.add("bi-moon-stars-fill");

}



/*===========================================================
        ÍCONE SOL
===========================================================*/

function trocarIconeSol() {

    iconeDark.classList.remove("bi-moon-stars-fill");

    iconeDark.classList.add("bi-sun-fill");

}



/*===========================================================
            DETECÇÃO AUTOMÁTICA

Caso o usuário nunca tenha escolhido
um tema, utiliza o tema do sistema.

===========================================================*/

if (localStorage.getItem("tema") === null) {

    const prefereEscuro =

        window.matchMedia("(prefers-color-scheme: dark)");

    if (prefereEscuro.matches) {

        ativarDarkMode();

    }

}



/*===========================================================
        MONITORA ALTERAÇÃO DO SISTEMA

Se o usuário alterar
o tema do Windows
ou do celular.

===========================================================*/

window.matchMedia("(prefers-color-scheme: dark)")

.addEventListener("change", evento => {

    if (localStorage.getItem("tema") !== null)

        return;

    if (evento.matches) {

        ativarDarkMode();

    }

    else {

        document.body.classList.remove("dark-mode");

        trocarIconeSol();

    }

});



console.log("Dark Mode inicializado.");

/*===========================================================
                CONSOLE

Apenas para acompanhamento.

===========================================================*/

console.log("Reveal Animations carregadas.");

console.log("IntersectionObserver ativo.");

console.log("Contadores preparados.");


/*===========================================================

FIM DA PARTE 3

Na Parte 4 teremos

✔ Dark Mode

✔ LocalStorage

✔ Troca de Ícones

✔ Persistência

✔ Loader

✔ Tela de carregamento

===========================================================*/

/*===========================================================
                LOADER
===========================================================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(function () {

        loader.classList.add("loader-hide");

    }, 700);

});



/*===========================================================
                TOAST
===========================================================*/

function mostrarToast(titulo, mensagem, tipo = "success") {

    const toast = document.createElement("div");

    toast.className =
        "toast-personalizado " + tipo;

    toast.innerHTML = `

        <strong>${titulo}</strong>

        <br>

        ${mensagem}

    `;

    document.body.appendChild(toast);

    setTimeout(function () {

        toast.classList.add("mostrar");

    }, 100);

    setTimeout(function () {

        toast.classList.remove("mostrar");

        setTimeout(function () {

            toast.remove();

        }, 500);

    }, 3500);

}



/*===========================================================
            FORMULÁRIO
===========================================================*/

const formulario = document.getElementById("formContato");



if (formulario) {

    formulario.addEventListener("submit", validarFormulario);

}



function validarFormulario(evento) {

    evento.preventDefault();

    const nome =
        formulario.querySelector("input[type='text']");

    const email =
        formulario.querySelector("input[type='email']");

    const assunto =
        formulario.querySelectorAll("input")[2];

    const mensagem =
        formulario.querySelector("textarea");



    limparCampos();



    let valido = true;



    if (nome.value.trim().length < 3) {

        erro(nome);

        valido = false;

    }



    const regexEmail =

        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if (!regexEmail.test(email.value)) {

        erro(email);

        valido = false;

    }



    if (assunto.value.trim().length < 5) {

        erro(assunto);

        valido = false;

    }



    if (mensagem.value.trim().length < 10) {

        erro(mensagem);

        valido = false;

    }



    if (!valido) {

        mostrarToast(

            "Erro",

            "Corrija os campos destacados.",

            "erro"

        );

        return;

    }



    mostrarToast(

        "Sucesso",

        "Mensagem enviada com sucesso!"

    );



    formulario.reset();

}



/*===========================================================
            ERRO
===========================================================*/

function erro(campo) {

    campo.classList.add("is-invalid");

}



/*===========================================================
            LIMPA CAMPOS
===========================================================*/

function limparCampos() {

    formulario

        .querySelectorAll("input,textarea")

        .forEach(function (campo) {

            campo.classList.remove("is-invalid");

        });

}



/*===========================================================
            MENSAGEM

===========================================================*/

console.log("Formulário inicializado.");

console.log("Toast carregado.");

console.log("Loader carregado.");