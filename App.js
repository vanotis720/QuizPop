import { useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import DATA from './src/constants/questions.json';


export default function App() {
  const [questions, setQuestions] = useState(DATA);
  const [actualQuestion, setActualQuestion] = useState(0);

  return (
    <View className="flex-1 bg-[#c2c0c0] p-5">
      <StatusBar style="auto" />

      {/* <Text className="text-2xl">QuizPop</Text>
      <Text className="font-light">Élargissez vos connaissances avec QuizPop !</Text> */}

      <View className="bg-white p-5 rounded-2xl">
        <Text className="text-lg font-light">
          {questions[actualQuestion].question}
        </Text>
      </View>
      <View className="mt-8">
        {
          questions[actualQuestion].responses.map((response, index) => (
            <TouchableOpacity key={index} className="flex flex-row justify-between bg-white p-3 my-2 rounded-2xl">
              <Text className="text-lg font-bold flex-wrap">
                {response}
              </Text>
              <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="black" />
              {/* <AntDesign name="checkcircle" size={24} color="black" /> */}
            </TouchableOpacity>
          ))
        }
      </View>

      <TouchableOpacity className="absolute bg-[#004643] bottom-5 left-5 right-5 h-12 rounded-2xl">
        <Text className="text-lg text-white m-auto font-semibold">
          Suivant
        </Text>
      </TouchableOpacity>
    </View>
  );
}
