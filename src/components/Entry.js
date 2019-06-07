import React from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import LinearGradient from "../mocked_modules/react-native-linear-gradient";

const logo = require("../assets/react-logo.png");

export default class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.imageAnimation = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.imageAnimation, {
        toValue: 1,
        duration: 1005
      })
    ).start();
  }

  render() {
    const rotationStyle = {
      transform: [
        {
          rotate: this.imageAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"]
          })
        }
      ]
    };

    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Animated.Image
            style={[styles.headerImage, rotationStyle]}
            source={logo}
          />
        </View>
        <LinearGradient
          style={styles.gradient}
          colors={["#4c669f", "#3b5998", "#192f6a"]}
        >
          <View style={{ height: 200 }}>
            <Text style={styles.appTitle}>qwdsaasd</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  gradient: {
    flex: 1,
    margin: 40
  },
  appHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerImage: {
    width: 200,
    height: 200
  },
  appTitle: {
    flex: 1,
    fontSize: 16,
    color: "white"
  }
});
