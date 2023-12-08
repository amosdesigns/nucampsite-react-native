import { FlatList, Text, View } from "react-native";
import { Tile } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseURL } from "../shared/baseURL";
import Loading from "../components/LoadingComponent";

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
      <Tile
        title={campsite.name}
        caption={campsite.description}
        featured
        onPress={() => navigation.navigate("CampsiteInfo", { campsite })}
        imageSrc={{ uri: `${baseURL}${campsite.image}` }}
      />
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
