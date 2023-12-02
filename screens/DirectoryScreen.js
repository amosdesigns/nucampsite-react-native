import { Tile } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseURL } from "../shared/baseURL";
import { FlatList } from "react-native";

const DirectoryScreen = ({ navigation }) => {
  const campsites = useSelector((state) => state.campsites);

  const renderDirectoryItem = ({ item: campsite }) => {
    return (
      <Tile
        title={campsite.name}
        caption={campsite.description}
        featured
        onPress={() => navigation.navigate("CampsiteInfo", { campsite })}
        imageSrc={{ uri: `${baseURL}${campsite.image}`}}
      />
    );
  };
  console.log(campsites);
  return (
    <FlatList
      data={campsites.campsitesArray}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;
