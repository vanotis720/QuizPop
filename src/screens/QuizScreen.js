import { useEffect, useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import ProgressCircle from 'react-native-progress-circle'
import { QUESTIONS } from '../constants/questions';

export default function QuizScreen({ navigation }) {
    const [questions, setQuestions] = useState(QUESTIONS);
    const [actualQuestion, setActualQuestion] = useState(0);
    const [selectedResponse, setSelectedResponse] = useState(null);
    const [score, setScore] = useState(0);
    // const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);

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
            setTimeLeft(60);
        }
        else {
            navigation.navigate('Result', {
                total: questions.length,
                score
            });
        }
    }

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


    return (
        <View className="flex-1 bg-[#c2c0c0] p-5">
            <StatusBar style="auto" />

            {/* <Text className="text-2xl">QuizPop</Text>
      <Text className="font-light">Élargissez vos connaissances avec QuizPop !</Text> */}

            <View className="flex">
                <View className="bg-white w-20 h-20 rounded-full m-auto top-2">
                    <ProgressCircle
                        percent={(60 - timeLeft) / 60 * 100}
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
                        {questions[actualQuestion].question}
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
