import { useEffect, useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import ProgressCircle from 'react-native-progress-circle'
import { getRandomQuestions } from '../../models/database';
import Loader from '../ui/Loader';
import Error from '../ui/Error';

const QUIZ_TIME = 30;
const TOTAL_QUESTIONS = 5;

export default function QuizScreen({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [actualQuestion, setActualQuestion] = useState(null);
    const [selectedResponse, setSelectedResponse] = useState(null);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(QUIZ_TIME);

    const handleSelected = (index) => {
        setSelectedResponse(index);
    }

    const handleNextQuestion = () => {
        if (questions.length > actualQuestion + 1) {
            setActualQuestion((prev) => prev + 1);
            setSelectedResponse(null);
            if (selectedResponse === questions[actualQuestion].goodResponse) {
                setScore((prevScore) => prevScore + 1);
            }
            setTimeLeft(QUIZ_TIME);
        }
        else {
            navigation.navigate('Result', {
                total: questions.length,
                score
            });
        }
    }

    const getQuestions = async () => {
        try {
            const questions = await getRandomQuestions(TOTAL_QUESTIONS);
            if (questions.length) {
                setQuestions(questions);
                setActualQuestion(0);
            }
            else {
                setError("Une erreur s'est produite...");
            }
        } catch (error) {
            console.log(error);
            setError(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getQuestions();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft((prevTime) => prevTime - 1);
            } else {
                handleNextQuestion();
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, actualQuestion]);

    if (isLoading) {
        return <View className="flex-1 justify-center items-center">
            <Loader />
        </View>;
    }
    if (error) {
        return (<View className="flex-1 justify-center items-center">
            <Error />
        </View>);
    }
    return (
        <View className="flex-1 bg-[#c2c0c0] p-5">
            <StatusBar style="auto" />
            <View className="flex">
                <Text className="mx-auto my-2 text-lg font-bold">{`${actualQuestion} / ${questions.length} `}</Text>
                <View className="bg-white w-20 h-20 rounded-full m-auto">
                    <ProgressCircle
                        percent={(timeLeft + 1) / QUIZ_TIME * 100}
                        radius={40}
                        borderWidth={5}
                        color="#004643"
                        shadowColor="#ABD1C6"
                        bgColor="#fff"
                    >
                        <Text className="font-bold text-2xl m-auto">
                            {timeLeft}
                        </Text>
                    </ProgressCircle>
                </View>
                <View className="bg-white p-5 rounded-2xl">
                    <Text className="font-semibold text-xl">
                        {questions[actualQuestion].question_text}
                    </Text>
                </View>
            </View>

            <View className="mt-8">
                {
                    questions[actualQuestion].responses.map((response, index) => (
                        <TouchableOpacity
                            onPress={() => handleSelected(index)}
                            key={index}
                            className={`flex flex-row justify-between ${selectedResponse !== index ? 'bg-white' : 'bg-[#ABD1C6]'} p-3 my-2 rounded-2xl`}
                        >
                            <Text className="text-lg font-bold flex-wrap">
                                {response}
                            </Text>
                            {
                                selectedResponse !== index ? (<MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="black" />) :
                                    (<AntDesign name="checkcircle" size={24} color="black" />)
                            }
                        </TouchableOpacity>
                    ))
                }
            </View>

            <TouchableOpacity
                onPress={handleNextQuestion}
                className="absolute bg-[#004643] bottom-5 left-5 right-5 h-12 rounded-2xl"
            >
                <Text className="text-lg text-white m-auto font-bold">
                    {(questions.length > actualQuestion + 1) ? 'Suivant' : 'Valider'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
