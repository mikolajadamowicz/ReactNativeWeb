import React from "react";
import { View, Text, StyleSheet } from "react-native";

const About = () => (
  <View style={styles.app}>
    <Text style={styles.text}>About Component</Text>
  </View>
);

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#192f6a",
    margin: 50
  },
  text: { color: "#ffff", padding: 50 }
});

export default About;
