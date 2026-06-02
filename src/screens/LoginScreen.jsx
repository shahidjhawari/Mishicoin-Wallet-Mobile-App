import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import API from "../services/api";

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      navigation.replace("Home", {user: res.data.user});
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mishicoin Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.btn} onPress={login}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <Text onPress={() => navigation.navigate("Signup")}>
        Create Account
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: "center", padding: 20},
  title: {fontSize: 26, fontWeight: "bold", marginBottom: 20},
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#3A86FF",
    padding: 15,
    borderRadius: 10,
  },
  btnText: {color: "#fff", textAlign: "center"},
});