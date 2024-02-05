import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Quiz"
                component={QuizScreen}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="Result"
                component={ResultScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}