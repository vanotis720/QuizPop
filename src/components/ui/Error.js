import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default function Loader({ isLoading }) {

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isLoading}
            >
                <LottieView
                    source={require('../../../assets/animations/Animation-1703589502206-loader-multi-dots.json')}
                    autoPlay
                    loop
                    speed={0.5}
                    style={{ flex: 1 }}
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
});