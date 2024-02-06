import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function Error({ isLoading }) {
    const navigation = useNavigation();

    const handleBackToHome = () => {
        navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isLoading}
            >
                <LottieView
                    source={require('../../../assets/animations/Animation-1707235920779-cry.json')}
                    autoPlay
                    loop
                    speed={0.5}
                    style={{ flex: 1 }}
                />
                <TouchableOpacity
                    onPress={handleBackToHome}
                    className="absolute bg-[#004643] bottom-5 left-5 right-5 h-12 rounded-2xl"
                >
                    <Text className="text-lg text-white m-auto font-bold">
                        Rentrer a l'accueil
                    </Text>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
});