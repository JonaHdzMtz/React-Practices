import { DarkTheme, NavigationContainer } from '@react-navigation/native';

import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Feed from "./screens/tabScreens/Feed";
import Notifications from "./screens/tabScreens/Notifications";
import Settings from "./screens/tabScreens/Settings";
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TweetDetailScreen from './screens/TweetDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Payments from './screens/drawers/Payments';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { freezeEnabled } from 'react-native-screens';

const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function TopTabGroup() {
    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarLabelStyle : {
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                },
                tabBarIndicatorStyle: {
                    height: 5,
                    borderRadius: 5,
                    backgroundColor: 'black'
                }
            }}
        >
            <TopTab.Screen  name='main' component={Feed}/>
            <TopTab.Screen name='following ' component={Payments}/>
            <TopTab.Screen name='emoji ' component={Payments}/>
        </TopTab.Navigator>
    )
}

function DrawerGroup() {
    return (
        <Drawer.Navigator
            screenOptions={{ drawerStyle: { 
                width: 250,
            },
            headerShown: false,
        }}
        >
            <Drawer.Screen name='Stackgroup' options={{
                headerShown: false
            }} component={StackGroup }/>
            <Drawer.Screen name='payment' component={Payments} />
        </Drawer.Navigator>
    )
}

const StackGroup = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="tabGroup" component={TabGroup} options={{ headerShown: false }} />
            <Stack.Screen name="TweetDetailScreen" component={TweetDetailScreen} options={
                {
                    presentation: 'modal',

                }
            } />

        </Stack.Navigator>
    )
}
// tab
const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false
            })}
        >
            <Tab.Screen options={{ tabBarIcon: () => <Entypo name="home" size={24} color="black" /> }} name="Feed" component={TopTabGroup} />
            <Tab.Screen name="Settings" options={{ tabBarIcon: () => <Ionicons name="settings" size={24} color="black" /> }} component={Settings} />
            <Tab.Screen options={{ tabBarIcon: () => <Ionicons name="notifications" size={24} color="black" /> }} name="Notifications" component={Notifications} />
        </Tab.Navigator>
    )
}
export function Navigation() {
    return (
        <NavigationContainer >
            <DrawerGroup />
            {/* {TabGroup()} */}
        </NavigationContainer>
    )
}