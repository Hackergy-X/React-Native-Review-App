import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, ImageBackground } from 'react-native';
import Home from './screens/Home';
import ReviewDetails from './screens/ReviewDetails';
import About from './screens/About';
import ActionBarImage from './shared/ActionBarImage';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} 
      options={{headerTitleAlign: "center", 
      headerRight: () => (
              <Image style={styles.img} resizeMode="cover" source={require('./assets/heart_logo.png')} />
           ),
      headerBackground: () => (
        <View style={styles.Vbg}>
        <Image
        style={styles.bgImg}
          source={require('./assets/game_bg.png')}
        />
      </View>
    ),
      }}
    />
    <Drawer.Screen name="About" component={About} 
       options={{headerTitleAlign: "center"}}
    />
  </Drawer.Navigator>
  );
}

function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Root" component={Root}
            options={{ headerShown: false}}
          />
          <Stack.Screen name="ReviewDetails" component={ReviewDetails}
            options={{headerTitleAlign: "center"}}
          />
          <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
          <StatusBar style="auto" />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
          width: 25,
          height: 25,
          marginRight: 140,
  },
  bgImg: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',
    marginTop: 25,
  },
  Vbg: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',
    borderBottomColor: '#333',
    borderBottomWidth: 0.4,
  }
});


export default App;