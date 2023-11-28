import { Platform, View } from "react-native";
import Constants from "expo-constants";
import CampsiteInfoScreen from "./CampsiteInfoScreen";
import { createStackNavigator } from "@react-navigation/stack";
import DirectoryScreen from "./DirectoryScreen";
import HomeScreen from './HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: "#5637DD",
  },
  headerTintColor: "#fff",
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
};

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Directory"
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name="Directory"
        component={DirectoryScreen}
        options={{ title: "Composite Directory" }}
      />
      <Stack.Screen
        name="CampsiteInfo"
        component={CampsiteInfoScreen}
        options={({ route }) => ({
          title: route.params.campsite.name,
        })}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <DirectoryNavigator>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerStyle={{
            backgroundColor: "#CEC8FF",
          }}
        >
          <Drawer.Screen
            name='Home'
            component={HomeNavigator}
            options={{ title: 'Home' }} />
          
          <Drawer.Screen
            name='Directory'
            component={DirectoryNavigator}
            options={{ title: 'Directory' }} />
          
        </Drawer.Navigator>
        
      </DirectoryNavigator>
    </View>
  );
};

export default Main;
