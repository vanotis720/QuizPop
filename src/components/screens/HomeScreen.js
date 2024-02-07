import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";

export default function HomeScreen({ navigation }) {

    const handleStart = () => {
        navigation.navigate('Quiz');
    }

    return (
        <View className="flex-1 bg-[#CECED0] p-5">
            <StatusBar style="auto" />
            <View className="h-2/3">
                <LottieView
                    source={require('../../../assets/animations/Animation-1707310095949-stepup-stairs.json')}
                    autoPlay
                    loop
                    speed={0.5}
                    style={{ flex: 1 }}
                />
            </View>
            <View className="h-1/3">
                <Text className="font-semibold text-lg text-center">Élargis tes  connaissances en t’amusant !</Text>

                <TouchableOpacity
                    onPress={handleStart}
                    className="bg-[#004643] mt-5 py-3 px-5 rounded-2xl"
                >
                    <Text className="text-lg text-white m-auto font-bold">
                        Allons-y
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
