export class UI{
    constructor(){}

    /**
     * 
     * @param {string} text El texto de la pregunta.
     */
    showQuestion(text){
        const textQuestion = document.getElementById('question')
        textQuestion.innerHTML= text
    }

    /**
     * 
     * @param {string[]} choices Las opciones de las preguntas. 
     */
    showChoices(choices, callback){
        const choicesContainer = document.getElementById('opciones')
        choicesContainer.innerHTML = ''
        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button')
            

            button.innerText = choices[i]
            button.className = 'button';

            button.addEventListener('click', ()=> callback(choices[i]))
            choicesContainer.append(button)
        }
    }

    /**
     * 
     * @param {number} score the score the quiz
     */
    showScore(score){
        const quizEnd =`<h1 class="title">SCORE QUIZ</h1>
        <h2 class="question">YOUR SCORE IS  ${score}</h2>
        `;
        const element = document.getElementById('quiz');

        element.innerHTML = quizEnd;
    }

    /**
     * 
     * @param {number} index Pregunta actual  
     * @param {number} total total de preguntas
     */
    showProgres(index, total){
        const element = document.getElementById('progres');

        element.innerHTML = `Question ${index} of ${total}`

    }
}