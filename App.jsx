import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F172A" barStyle="light-content" />

      <View style={styles.content}>
        <Text style={styles.logo}>Mishicoin</Text>

        <Text style={styles.title}>
          Wallet App
        </Text>

        <Text style={styles.subtitle}>
          Login & Signup Screen Coming Soon
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#22C55E',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#CBD5E1',
    marginTop: 10,
  },
});

export default App;