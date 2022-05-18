const quizData = [
    {
        question: 'How old is Najib?',
        a: '10',
        b: '17',
        c: '40',
        d: '23',
        correct: 'd'
    },
    {
        question: 'What is the most used programming language in 2022?',
        a: 'Java',
        b: 'C++',
        c: 'JavaScript',
        d: 'Python',
        correct: 'a'
    },
    {
        question: 'Who is the best man of the world?',
        a: 'Muhammad (s)',
        b: 'Einstien',
        c: 'Musa (a)',
        d: 'Esa (a)',
        correct: 'a'
    },
    {
        question: 'What is the best religion of the world?',
        a: 'Islam',
        b: 'Hindu',
        c: 'Cristian',
        d: 'Buddha',
        correct: 'a'
    }
]
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;

loadQuiz();



function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}


submitBtn.addEventListener("click",()=>{
    currentQuiz++;

    if(currentQuiz < quizData.length){
        loadQuiz();
    }
    else
    {
        alert("You finished! Get ready for the upcoming challenge");
    }

    loadQuiz();
});

