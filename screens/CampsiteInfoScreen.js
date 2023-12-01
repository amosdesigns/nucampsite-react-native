import { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import RenderCampsite from "../features/campsites/RenderCampsite";
import { COMMENTS } from "../shared/comments";

const CampsiteInfoScreen = ({ route }) => {
  const { campsite } = route.params;
  
  const [favorite, setFavorite] = useState(false);
  const [comments, setComments] = useState(COMMENTS);

  const renderCommentItem = ({ item }) => {
    return (
      <View style={styles.commentItem}>
        <Text style={{ fontSize: 14 }}>{item.text}</Text>
        <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
        <Text
          style={{ fontSize: 12 }}
        >{`-- ${item.author}, ${item.date}`}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={comments.filter((comment) => comment.campsiteId === campsite.id)}
      renderItem={renderCommentItem}
      keyExtractor={(item) => {
        item.id.toString();
      }}
      contentContainerStyle={{
        marginHorizontal: 20,
        paddingVertical: 20,
      }}
      ListHeaderComponent={
        <>
          <RenderCampsite
            campsite={campsite}
            isFavorite={favorite}
            markFavorite={() => setFavorite(true)}
          />
          <Text style={styles.commentsTitle}>Comments</Text>
        </>
      }
    />
    //
  );
};

const styles = StyleSheet.create({
  commentsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 30,
    textAlign: "center",
    color: "#43484d",
  },
  commentItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
});

export default CampsiteInfoScreen;
