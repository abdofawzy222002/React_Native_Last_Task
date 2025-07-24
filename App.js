import { StyleSheet, Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import store from "./src/redux/store";

import Movie from "./src/Pages/Movie";
import AnimateOne from "./src/Pages/Animate";
import AnimateTwo from "./src/Pages/AnimateTwo";
import Home from "./src/Pages/Home";
import Favorites from './src/Pages/Favourites';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Movies" component={Movie} />
            <Drawer.Screen name="AnimateOne" component={AnimateOne} />
            <Drawer.Screen name="AnimateTwo" component={AnimateTwo} />
            <Drawer.Screen name="Favorites" component={Favorites} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});