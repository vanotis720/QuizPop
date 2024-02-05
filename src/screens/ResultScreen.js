import { StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function ResultScreen({ route, navigation }) {
    const { score, total } = route.params;

    const handleBackToHome = () => {
        navigation.navigate('Home');
    }

    return (
        <View className="flex bg-[#c2c0c0] p-5">
            <StatusBar style="auto" />
            <View className="flex h-1/3 bg-zinc-200 my-auto mx-10 p-5 rounded-lg items-center justify-center">
                <Text className="text-[#004643] text-8xl">{score}</Text>
                <Text className="text-xl">{`/ ${total}`}</Text>
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
