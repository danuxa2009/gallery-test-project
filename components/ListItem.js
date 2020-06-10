import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';

const ListItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.thumbnailUrl }} style={styles.image} />
        <View style={styles.authorName}>
          <Text>{props.authorName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  imageContainer: {
    padding: 15,
  },
  authorDesc:{
    alignItems:"center",
    justifyContent:'center',
    flex:1,
    backgroundColor: 'blue',
    width: '100%',
    height: 250,
  }
});

export default ListItem;
