import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import LottieView from "lottie-react-native";

export default function ResultScreen({ route, navigation }) {
    const { score, total } = route.params;

    const handleBackToHome = () => {
        navigation.navigate('Home');
    }

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="auto" />
            <View className="bg-white w-auto h-2/3 mx-5 px-3 my-auto rounded-3xl shadow-2xl">
                <View className="flex-1">
                    <LottieView
                        source={(total / 2) > score ? require('../../../assets/animations/Animation-1707312265445-sad-emotion.json') : require('../../../assets/animations/Animation-1707312003092-dance-for-Lingidy.json')}
                        autoPlay
                        loop
                        speed={1}
                        style={{ flex: 1 }}
                    />
                </View>
                <View className="items-center justify-center my-2">
                    <Text className="text-[#004643] text-3xl font-bold"> {` ${score} / ${total}`}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={handleBackToHome}
                className="absolute bg-[#004643] bottom-5 left-5 right-5 h-12 rounded-2xl"
            >
                <Text className="text-lg text-white m-auto font-bold">
                    Rentrer a l'accueil
                </Text>
            </TouchableOpacity>
        </View>
    );
}
