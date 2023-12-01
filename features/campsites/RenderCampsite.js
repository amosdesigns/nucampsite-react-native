import { Text, View, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";

const RenderCampsite = ({ campsite, isFavorite, markFavorite }) => {
  if (campsite) {
    return (
      <Card containerStyle={styles.cardContainer}>
        <Card.Image source={campsite.image}>
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
          name="heart-o" //{isFavorite ? "heart" : "heart-o"}
          type="font-awesome"
          color="#f50"
          // onPress={() => markFavorite()}
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
