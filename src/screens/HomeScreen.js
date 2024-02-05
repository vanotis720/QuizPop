import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation }) {

    const handleStart = () => {
        navigation.navigate('Quiz');
    }

    return (
        <View className="flex-1 bg-white justify-center items-center">
            <StatusBar style="auto" />

            {/* <Image source={require('../../assets/icon.png')} className="w-1/3 resize" /> */}
            <Text className="text-4xl text-bold mt-5">QuizPop</Text>
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
