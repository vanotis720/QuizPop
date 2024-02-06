import * as SQLite from 'expo-sqlite';
import { QUESTIONS } from '../constants/questions';

const db = SQLite.openDatabase('quizPop.db');

const createQuestionsTable = () => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                'CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY AUTOINCREMENT, question_text TEXT, responses TEXT, good_response INTEGER)',
                [],
                (_, result) => {
                    resolve('Table "questions" créée avec succès.');
                },
                (_, error) => {
                    reject('Erreur lors de la création de la table "questions": ', error);
                }
            );
        });
    });
};

export const insertQuestions = () => {
    return new Promise((resolve, reject) => {
        createQuestionsTable()
            .then(() => {
                db.transaction((transaction) => {
                    QUESTIONS.forEach((question) => {
                        const { question: questionText, responses, goodResponse } = question;
                        const responsesString = JSON.stringify(responses);

                        transaction.executeSql(
                            'INSERT INTO questions (question_text, responses, good_response) VALUES (?, ?, ?)',
                            [questionText, responsesString, goodResponse],
                            (_, result) => {
                                resolve('Questions insérées avec succès.');
                            },
                            (_, error) => {
                                reject('Erreur lors de l\'insertion des questions: ', error);
                            }
                        );
                    });
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export const getRandomQuestions = (nombreQuestions) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                'SELECT * FROM questions ORDER BY RANDOM() LIMIT ?',
                [nombreQuestions],
                (transaction, result) => {
                    let questions = [];
                    for (let i = 0; i < result.rows.length; i++) {
                        const { id, question_text, responses, good_response } = result.rows.item(i);
                        const responsesArray = JSON.parse(responses);
                        questions.push({ id, question_text, responses: responsesArray, good_response });
                    }
                    resolve(questions);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    });
};

export const clearQuestionsTable = () => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                'DELETE FROM questions',
                [],
                (_, result) => {
                    resolve('Table "questions" nettoyée avec succès.');
                },
                (_, error) => {
                    reject('Erreur lors du nettoyage de la table "questions": ', error);
                }
            );
        });
    });
};
