import { Image, Pressable, View, StyleSheet } from 'react-native';

const PlaceItem = ({ place, onSelect }) => {
  const { imageUri, title, address, location } = place;

  return (
    <Pressable style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={imageUri} />
      <View style={styles.infoContainer}>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },

  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
