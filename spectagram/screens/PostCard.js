import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";



export default class PostCard extends Component {




  render() {
      return (
               <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("StoryScreen", {
              story: this.props.post
            })
          }
        >
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Image
              source={require("../assets/image_1.jpg")}
              style={styles.storyImage}
            ></Image>

            <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText}>
                {this.props.post.title}
              </Text>
              
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"happy"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>11M</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: 'aqua',
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});
