import { createStackNavigator } from 'react-navigation';
import { BG_COLOR, WHITE } from './../constants/Colors';

export const headerStyles = {
    headerStyle: {
        backgroundColor: BG_COLOR,
        borderBottomWidth: 0
    },
    headerTitleStyle: {
        color: WHITE
    },
    headerTintColor: WHITE
}

export const createStack = (screen, title) => createStackNavigator({
    Screen: {
        screen,
        navigationOptions: {
            title,
            ...headerStyles
        }
    }
})
