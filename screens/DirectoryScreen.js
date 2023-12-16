import { FlatList, Text, View } from "react-native";
import { Tile } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseURL } from "../shared/baseURL";
import Loading from "../components/LoadingComponent";
import * as Animatable from "react-native-animatable";

const DirectoryScreen = ({ navigation }) => {
  const campsites = useSelector((state) => state.campsites);

  if (campsites.isLoading) {
    return <Loading />;
  }
  if (campsites.errMess) {
    return (
      <View>
        <Text>{campsites.errMess}</Text>
      </View>
    );
  }

  const renderDirectoryItem = ({ item: campsite }) => {
    return (
      <Animatable.View animation="fadeInRightBig" duration={2000}>
        <Tile
          title={campsite.name}
          caption={campsite.description}
          featured
          onPress={() => navigation.navigate("CampsiteInfo", { campsite })}
          imageSrc={{ uri: baseURL + campsite.image }}
        />
      </Animatable.View>
    );
  };
  return (
    <FlatList
      data={campsites.campsitesArray}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;
