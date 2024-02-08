import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/screens/HomeScreen';
import QuizScreen from '../components/screens/QuizScreen';
import ResultScreen from '../components/screens/ResultScreen';
import ErrorScreen from '../components/screens/ErrorScreen';

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
            <Stack.Screen
                name="ErrorScreen"
                component={ErrorScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}