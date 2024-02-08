import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function Error({ error = null }) {
    const navigation = useNavigation();

    const handleBackToHome = () => {
        navigation.navigate('Home');
    }
    return (
        <View className="flex-1 m-5">
            <LottieView
                source={require('../../../assets/animations/Animation-1707235920779-cry.json')}
                autoPlay
                loop
                speed={0.5}
                style={{ flex: 1 }}
            />
            <View className="flex-1">
                <Text className="text-[#004643] text-lg my-5">{error}</Text>
                <TouchableOpacity
                    onPress={handleBackToHome}
                    className="bg-[#004643] h-12 rounded-2xl"
                >
                    <Text className="text-lg text-white m-auto font-bold">
                        Rentrer a l'accueil
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}