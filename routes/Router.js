import {createAppContainer } from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../app/components/Home';
import MapScreen from '../app/components/Map';
import QuestScreen from '../app/components/Quests';
import ActivityScreen from '../app/components/ActivityFeed';

const MainScreenNavigator = createMaterialTopTabNavigator(
    {
        Profile: HomeScreen,
        Map: MapScreen,
        Quests: QuestScreen,
        Feed: ActivityScreen,
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            showIcon: true,
            showLabel: false, // possibly change this back, not sure what will
                              // look good and what to see if can edit text styles
            style: {
                backgroundColor:'#7da27e'
            }
        },
    }
)

export default createAppContainer(MainScreenNavigator);
