import React from 'react';
import {StyleSheet, View} from 'react-native';

import ScSignUp from './ScSignUp';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScSignUp />
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
