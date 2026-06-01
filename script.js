// Banco de dados de perguntas do Quiz sobre Sustentabilidade e o Agrinho
const quizData = [
    {
        question: "Qual é o principal objetivo do equilíbrio entre produção e meio ambiente?",
        options: [
            "Aumentar o lucro a curto prazo ignorando os recursos naturais.",
            "Garantir a produção de alimentos protegendo a natureza para as próximas gerações.",
            "Parar completamente de produzir alimentos no campo.",
            "Usar apenas ferramentas antigas e abandonar a tecnologia."
        ],
        correct: 1 // Segunda opção (começa no 0)
    },
    {
        question: "Como a tecnologia auxilia o agro sustentável de forma prática?",
        options: [
            "Gastando mais energia e gerando poluição.",
            "Substituindo as florestas por grandes prédios digitais.",
            "Economizando água com irrigação inteligente e monitorando a saúde do solo.",
            "Aumentando a necessidade de agrotóxicos pesados."
        ],
        correct: 2 // Terceira opção
    },
    {
        question: "Qual é o papel fundamental do jovem no projeto Agrinho?",
        options: [
            "Apenas assistir às aulas sem propor novas ideias.",
            "Aprender coisas novas, usar a criatividade e espalhar práticas sustentáveis.",
            "Mudar de cidade e deixar de se importar com o meio rural.",
            "Ignorar a tecnologia e focar apenas em teorias antigas."
        ],
        correct: 1 // Segunda opção
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Selecionando os elementos HTML do site
const questionTextElement = document.getElementById("question-text");
const optionsBoxElement = document.getElementById("options-box");
const quizContainerElement = document.getElementById("question-box");
const resultBoxElement = document.getElementById("result-box");
const scoreTextElement = document.getElementById("score-text");

// Função responsável por carregar a pergunta atual na tela
function loadQuestion() {
    // Limpa os botões de perguntas anteriores
    optionsBoxElement.innerHTML = "";
    
    // Pega os dados da pergunta atual
    const currentQuiz = quizData[currentQuestionIndex];
    questionTextElement.innerText = currentQuiz.question;
    
    // Cria um botão clicável dinamicamente para cada opção de resposta
    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        
        // Quando o usuário clicar na opção, dispara a checagem da resposta
        button.addEventListener("click", () => selectOption(index));
        optionsBoxElement.appendChild(button);
    });
}

// Função executada ao escolher uma resposta
function selectOption(selectedIndex) {
    const currentQuiz = quizData[currentQuestionIndex];
    
    // Verifica se o botão clicado corresponde à resposta correta
    if (selectedIndex === currentQuiz.correct) {
        score++;
    }
    
    // Avança o contador de perguntas
    currentQuestionIndex++;
    
    // Se ainda houver perguntas, carrega a próxima. Se não, exibe o resultado final.
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Oculta as perguntas e mostra o placar final do visitante
function showResults() {
    quizContainerElement.classList.add("hide");
    resultBoxElement.classList.remove("hide");
    scoreTextElement.innerText = `Você acertou ${score} de ${quizData.length} perguntas!`;
}

// Reinicia o jogo do zero se o usuário desejar
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultBoxElement.classList.add("hide");
    quizContainerElement.classList.remove("hide");
    loadQuestion();
}

// Garante que o Quiz vai começar assim que a página terminar de carregar
document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});