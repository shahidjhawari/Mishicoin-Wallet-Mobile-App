import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import API from "../services/api";

export default function SignupScreen({navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      await API.post("/auth/signup", {
    fullName: name,   // 👈 FIX
    email,
    password,
});

      navigation.navigate("Login");
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput placeholder="Name" style={styles.input} onChangeText={setName} />
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} onChangeText={setPassword} />

      <TouchableOpacity style={styles.btn} onPress={signup}>
        <Text style={styles.btnText}>Create Wallet</Text>
      </TouchableOpacity>
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