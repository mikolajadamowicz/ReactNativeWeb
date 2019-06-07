import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Router, Link, Route } from "./config/routes";
import Entry from "./components/Entry";
import About from "./components/About";

const App = () => (
  <Router>
    <View style={styles.app}>
      <View style={styles.header}>
        <Link to="/">
          <Text style={styles.navText}>Home</Text>
        </Link>
        <Link to="/about">
          <Text style={styles.navText}>About</Text>
        </Link>
      </View>

      <Route exact path="/" component={Entry} />
      <Route exact path="/about" component={About} />
    </View>
  </Router>
);

const styles = StyleSheet.create({
  app: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#192f6a",
    paddingTop: 50,
    paddingBottom: 20
  },
  navText: { color: "#ffff", marginHorizontal: 10 }
});

export default App;
