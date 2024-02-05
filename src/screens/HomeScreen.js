import { StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation }) {

    const handleStart = () => {
        navigation.navigate('Quiz');
    }

    return (
        <View className="flex-1 bg-white p-5 ju justify-center items-center">
            <StatusBar style="auto" />

            <Text className="text-4xl text-bold">QuizPop</Text>
            <Text className="font-light text-lg text-center">Élargissez vos connaissances avec QuizPop !</Text>

            <TouchableOpacity
                onPress={handleStart}
                className="absolute bg-[#004643] bottom-5 left-5 right-5 h-12 rounded-2xl"
            >
                <Text className="text-lg text-white m-auto font-bold">
                    Commencer
                </Text>
            </TouchableOpacity>
        </View>
    );
}
