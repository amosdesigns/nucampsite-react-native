import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { Avatar, ListItem, Card } from "react-native-elements";
import { PARTNERS } from "../shared/partners";
import { FlatList } from "react-native";

const AboutScreen = () => {
  const [partners, setPartners] = useState(PARTNERS);

  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }} title="About Information">
        <Card.Title h4>Our Mission</Card.Title>
        <Card.Divider />
        <Text style={{ fontWeight: "bold" }}>
          We present a curated database of the best campsites in the vast woods
          and backcountry of the World Wide Web Wilderness. We increase access
          to adventure for the public while promoting safe and respectful use of
          resources. The expert wilderness trekkers on our staff personally
          verify each campsite to make sure that they are up to our standards.
          We also present a platform for campers to share reviews on campsites
          they have visited with each other.
        </Text>
      </Card>
      <Card wrapperStyle={{ margin: 20 }} title="About Information">
        <Card.Title h4>Community Partners</Card.Title>
        <Card.Divider />
        {partners.map((partner) => {
          return (
            <ListItem key={partner.id}>
              <Avatar source={partner.image} rounded />
              <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "bold" }}>
                  {partner.name}
                </ListItem.Title>
                <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </Card>
    </ScrollView>
  );
};

export default AboutScreen;
