import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {THEME} from '../utils/theme';

export default function GlassCheckbox({checked, label, onPress}) {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.row} onPress={onPress}>
      <View style={[styles.box, checked && styles.checkedBox]}>
        {checked ? <Icon name="checkmark" size={16} color={THEME.textPrimary} /> : null}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  box: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: THEME.success,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  checkedBox: {
    backgroundColor: THEME.success,
  },
  label: {
    color: THEME.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    flexShrink: 1,
  },
});
