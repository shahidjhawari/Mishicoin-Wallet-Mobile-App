import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {THEME} from '../utils/theme';

export default function GlassButton({title, onPress, style, disabled}) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[styles.button, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: THEME.accent,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: THEME.accent,
    shadowOffset: {width: 0, height: 14},
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 8,
  },
  disabled: {
    opacity: 0.65,
  },
  label: {
    color: THEME.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
