//@ts-check
import {Question} from "./Question.js";

export class Quiz{
    questionIndex = 0;
    score = 0

    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions){
        this.questions = questions
    }

    getQuestionIndex(){
        return this.questions[this.questionIndex]
    }

    inEnd(){
        return this.questions.length === this.questionIndex
    }

    /**
     * 
     * @param {string} answer Posible respuesta 
     */
    guees(answer){
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++
        }

        this.questionIndex++
    }

}

