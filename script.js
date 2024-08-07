const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre uma nova técnica de preservação chamada Tanatoplaxia, que promete revolucionar a conservação de corpos. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso é fascinante!",
                afirmacao: "Ficou empolgado com a ideia de como a Tanatoplaxia pode transformar o campo da preservação."
            },
            {
                texto: "Isso é preocupante!",
                afirmacao: "Preocupou-se com as implicações éticas e possíveis consequências dessa nova técnica."
            }
        ]
    },
    {
        enunciado: "Sua professora de biologia decidiu realizar uma aula sobre Tanatoplaxia e pede que você escreva um relatório sobre a técnica. Como você procede?",
        alternativas: [
            {
                texto: "Utiliza recursos online para pesquisar sobre Tanatoplaxia, reunindo informações de diversos estudos e artigos.",
                afirmacao: "Conseguiu obter uma compreensão abrangente da técnica e produzir um relatório bem fundamentado."
            },
            {
                texto: "Baseia-se em discussões em sala e literatura existente para escrever o relatório com uma abordagem mais pessoal.",
                afirmacao: "Preferiu integrar suas próprias reflexões e discussões em sala para enriquecer o relatório."
            }
        ]
    },
    {
        enunciado: "Durante um debate sobre Tanatoplaxia, você discute sobre o impacto da técnica na preservação e na ciência. Como você se posiciona?",
        alternativas: [
            {
                texto: "Defende que a Tanatoplaxia pode oferecer novas possibilidades para a preservação de informações científicas e históricas.",
                afirmacao: "Acredita que a técnica pode abrir novas portas para a pesquisa e conservação de patrimônios."
            },
            {
                texto: "Está preocupado com as possíveis implicações éticas e sociais, e acha importante discutir a regulamentação da técnica.",
                afirmacao: "Sua preocupação leva a um debate sobre a necessidade de diretrizes éticas para o uso da Tanatoplaxia."
            }
        ]
    },
    {
        enunciado: "Ao finalizar o projeto sobre Tanatoplaxia, você precisa criar uma representação visual da técnica. Qual método você usa?",
        alternativas: [
            {
                texto: "Cria uma ilustração detalhada à mão para mostrar como a Tanatoplaxia é realizada.",
                afirmacao: "Optou por uma abordagem tradicional, destacando a técnica com uma representação manual e cuidadosa."
            },
            {
                texto: "Usa um software de design para criar uma visualização digital da Tanatoplaxia.",
                afirmacao: "Escolheu a tecnologia para produzir uma imagem precisa e moderna da técnica."
            }
        ]
    },
    {
        enunciado: "Você está colaborando em um grupo para uma apresentação sobre Tanatoplaxia, mas um membro utiliza uma ferramenta automatizada para criar o conteúdo. O que você faz?",
        alternativas: [
            {
                texto: "Aceita o conteúdo gerado e o utiliza diretamente na apresentação.",
                afirmacao: "Passou a confiar na automação para criar o conteúdo e se sente dependente das ferramentas tecnológicas."
            },
            {
                texto: "Revisa o conteúdo e integra suas próprias análises e ideias para garantir que a apresentação reflita o trabalho do grupo.",
                afirmacao: "Reconhece a importância de revisar e personalizar o trabalho gerado pela ferramenta automatizada."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumo sobre Tanatoplaxia:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
