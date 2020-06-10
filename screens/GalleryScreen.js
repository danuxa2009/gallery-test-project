import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchImages } from '../store/actions/actions';
import ListItem from '../components/ListItem';
import { FlatList } from 'react-native-gesture-handler';

const GalleryScreen = (props) => {
  const { fetchImages } = props;
  useEffect(() => {
    fetchImages();
  }, []);

  const keyExtractor = (item) => item.id;
  const renderItem = ({ item }) => {
    return (
      <ListItem id={item.id} thumbnailUrl={item.urls.small} authorName={item.user.name} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.imagesData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        
      />
      {/* {console.log(props)} */}

      {/* <Text>Hello Gallery Screen</Text>
      <Button
        title='to the image screen'
        onPress={() => navigation.navigate('Image')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

const mapStateToProps = (state) => {
  return {
    imagesData: state.imagesData,
    isFetching: state.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => dispatch(fetchImages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);
