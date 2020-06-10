import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageScreen = ({ route }) => {
  const { regularUrl } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: regularUrl }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageScreen;
