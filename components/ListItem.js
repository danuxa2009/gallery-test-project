import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        props.navigate(props.regularUrl);
      }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.thumbnailUrl }} style={styles.image} />
        <View style={styles.authorDesc}>
          <Text>Author: {props.authorName}</Text>
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
    padding: '5%',
  },
  authorDesc: {
    paddingVertical: 5,
    paddingLeft: 15,
  },
});

export default ListItem;
