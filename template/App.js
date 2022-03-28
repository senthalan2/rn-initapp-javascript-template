import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import {useSelector} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainStack from './Src/Stacks/MainStack';
import RootStack from './Src/Stacks/RootStack';
import CustomStatusBar from './Src/Components/CustomStatusBar';
import {COLORS} from './Src/Utilities/Constants';
import Intro from './Src/Screens/Intro';

const Stack = createNativeStackNavigator();

const App = () => {
  const userToken = useSelector(state => state.auth.userToken);
  const isSeenIntro = useSelector(state => state.auth.isSeenIntro);

  return (
    <SafeAreaProvider style={styles.mainContainer}>
      <CustomStatusBar
        barBackgroundColor={COLORS.white}
        isContentLight={false}
      />
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <Stack.Navigator>
          {isSeenIntro ? (
            userToken ? (
              <Stack.Screen
                options={{headerShown: false}}
                name="MainStack"
                component={MainStack}
              />
            ) : (
              <Stack.Screen
                options={{headerShown: false}}
                name="RootStack"
                component={RootStack}
              />
            )
          ) : (
            <Stack.Screen
              options={{headerShown: false}}
              name="Intro"
              component={Intro}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
