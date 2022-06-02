//@ts-check
import { questions } from "./data/question.js";
import {Quiz} from "./models/Quiz.js";
import {UI} from "./models/UI.js";

/**
 * 
 * @param {UI} ui ui object
 * @param {Quiz} quiz Quiz object
 */
const  RepintarPagina = (ui, quiz) => {
    if (quiz.inEnd()) {
        ui.showScore(quiz.score);
    }else{
        ui.showQuestion(quiz.getQuestionIndex().Text)
        ui.showChoices(quiz.getQuestionIndex().choices, (selecionadoUs)=>{
        quiz.guees(selecionadoUs)
        RepintarPagina(ui,quiz)
    });
    ui.showProgres(quiz.questionIndex+1, quiz.questions.length)
    }
     
}

function main(){

    const quiz = new Quiz(questions);
    const ui = new UI();
    RepintarPagina(ui,quiz)
}

main()