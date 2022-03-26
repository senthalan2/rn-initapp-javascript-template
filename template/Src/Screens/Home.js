import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import {COLORS} from '../Utilities/Constants';
import {UBUNTU} from '../Utilities/GlobalFonts';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <CustomHeader
        navigation={navigation}
        title="Home Screen"
        enableBack={false}
        bgColor={COLORS.white}
        enableMenu
        onPressMenu={() => {
          navigation.openDrawer();
        }}
      />
      <Text
        style={{
          alignSelf: 'center',
          fontFamily: UBUNTU[0],
          color: COLORS.black,
        }}>
        Home Screen
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
