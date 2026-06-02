import React from 'react';
import {View, StyleSheet} from 'react-native';
import {THEME} from '../utils/theme';

export default function GlassCard({children, style}) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.glass,
    borderWidth: 1,
    borderColor: THEME.glassBorder,
    borderRadius: 28,
    padding: 24,
    marginVertical: 12,
    ...THEME.shadow,
    overflow: 'hidden',
  },
});
