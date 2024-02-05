import { StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function ResultScreen({ route, navigation }) {
    const { score, total } = route.params;

    const handleBackToHome = () => {
        navigation.navigate('Home');
    }

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="auto" />
            <View className="flex bg-[#f0f5f3] h-1/2 my-auto mx-10 p-5 rounded-3xl items-center justify-center shadow-2xl">
                {
                    ((total / 2) > score) ? <Text className="text-red-600 text-9xl">{score}</Text> : <Text className="text-green-400 text-9xl">{score}</Text>
                }
                <Text className="text-3xl">{`/ ${total}`}</Text>
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
