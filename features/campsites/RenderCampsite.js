import { Text, View, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";
import { baseURL } from "../../shared/baseURL";

const RenderCampsite = ( { campsite, isFavorite, markFavorite } ) => {
  console.log(`${baseURL}${campsite.image}`);
  if (campsite) {
    return (
      <Card containerStyle={styles.cardContainer}>
        <Card.Image source={{ uri: `${baseURL}${campsite.image}`}}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {campsite.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{campsite.description}</Text>
        <Icon
          name={isFavorite ? "heart" : "heart-o"}
          type="font-awesome"
          color="#f50"
          onPress={() => markFavorite()}
          raised
          reverse
        />
      </Card>
    );
  }
  return <View />;
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 0,
    padding: 0,
    marginBottom: 20,
  },
});

export default RenderCampsite;
