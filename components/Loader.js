import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#A1B641' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#cccccc'
  },
});

export default Loader;
