import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchImages } from '../store/actions/actions';
import ListItem from '../components/ListItem';
import Loader from '../components/Loader';

const GalleryScreen = (props) => {
  const { fetchImages } = props;
  useEffect(() => {
    fetchImages();
  }, []);

  const goToImageScreen = (regularUrl) => {
    const { navigate } = props.navigation;
    return navigate('Image', { regularUrl });
  };

  const keyExtractor = (item) => item.id;
  const renderItem = ({ item }) => {
    return (
      <ListItem
        id={item.id}
        regularUrl={item.urls.regular}
        thumbnailUrl={item.urls.small}
        authorName={item.user.name}
        navigate={goToImageScreen}
      />
    );
  };

  return (
    <>
      {props.isFetching ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={props.imagesData}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
        </View>
      )}
    </>
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
