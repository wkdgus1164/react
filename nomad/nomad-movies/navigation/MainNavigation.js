import { createStackNavigator, createAppContainer } from 'react-navigation'
import TabNavigation from './TabNavigation'
import DetailScreen from '../screens/Detail'

const MainNavigation = createStackNavigator({
    Tabs: { screen: TabNavigation, navigationOptions: { title: null } },
    DetailScreen
}, {
    mode: 'card'
})

export default createAppContainer(MainNavigation)