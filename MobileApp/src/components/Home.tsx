import React from 'react';
import {StyleSheet, View} from 'react-native';

import FmSignIn from './FmSignIn';

const Home = () => {
  return (
    <View style={styles.container}>
      <FmSignIn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

export default Home;
