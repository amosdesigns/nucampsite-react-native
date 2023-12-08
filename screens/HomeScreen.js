import { ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseURL } from "../shared/baseURL";
import Loading from "../components/LoadingComponent";

const FeaturedItem = ({ item, isLoading, errMess }) => {
  if (isLoading) {
    return <Loading />;
  }

  if (errMess) {
    return (
      <View>
        <Text>{errMess}</Text>
      </View>
    );
  }

  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={{ uri: `${baseURL}${item.image}` }}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {item.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const HomeScreen = () => {
  const campsites = useSelector((state) => state.campsites);
  const promotions = useSelector((state) => state.promotions);
  const partners = useSelector((state) => state.partners);
  const featCampsite = campsites.campsitesArray.find((item) => item.featured);
  const featPromotion = promotions.promotionsArray.find(
    (item) => item.featured
  );
  const featPartner = partners.partnersArray.find((item) => item.featured);

  return (
    <ScrollView>
      <FeaturedItem
        item={featCampsite}
        isLoading={campsites.isLoading}
        errMess={campsites.errMess}
      />
      <FeaturedItem
        item={featPromotion}
        isLoading={promotions.isLoading}
        errMess={promotions.errMess}
      />
      <FeaturedItem
        item={featPartner}
        isLoading={partners.isLoading}
        errMess={partners.errMess}
      />
    </ScrollView>
  );
};

export default HomeScreen;
