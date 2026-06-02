import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {THEME} from '../utils/theme';

export default function ScreenBackground({children, style}) {
  return (
    <LinearGradient
      colors={THEME.gradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={[styles.background, style]}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.orbOne} />
        <View style={styles.orbTwo} />
        <View style={styles.orbThree} />
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  orbOne: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(58, 134, 255, 0.18)',
    top: -40,
    left: -30,
    opacity: 0.22,
  },
  orbTwo: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(0, 245, 212, 0.16)',
    top: 100,
    right: -50,
    opacity: 0.18,
  },
  orbThree: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    bottom: -80,
    left: 40,
    opacity: 0.16,
  },
});
