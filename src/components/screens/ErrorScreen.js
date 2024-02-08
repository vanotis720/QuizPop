import { StatusBar, View } from 'react-native';
import Error from '../ui/Error';

export default function ErrorScreen({ route }) {
    const { error } = route.params;
    return (
        <View className="flex-1 items-center">
            <Error error={error} />
            <StatusBar barStyle={'default'} />
        </View>
    );
}
