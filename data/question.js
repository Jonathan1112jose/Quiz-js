import {Question} from "../models/Question.js";
import {data} from "./data.js";

export const questions = data.map(pregunta => new Question(pregunta.question, pregunta.choices, pregunta.answer)) ;

