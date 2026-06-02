import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function HomeScreen({route}) {
  const user = route?.params?.user || {
    name: "User",
    balance: 0,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome {user.name}
      </Text>

      <Text style={styles.balance}>
        Balance: Rs {user.balance}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  balance: {
    fontSize: 18,
    marginTop: 10,
  },
});