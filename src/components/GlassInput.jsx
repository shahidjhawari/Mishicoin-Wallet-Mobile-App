import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {THEME} from '../utils/theme';

export default function GlassInput({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType = 'default',
  autoCapitalize = 'none',
  rightElement,
}) {
  return (
    <View style={styles.wrapper}>
      {icon ? <Icon name={icon} size={20} color={THEME.accent} style={styles.icon} /> : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={THEME.textSecondary}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        style={styles.input}
      />
      {rightElement ? <View style={styles.rightElement}>{rightElement}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.glassInput,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: THEME.glassBorder,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 14,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: THEME.textPrimary,
    fontSize: 16,
  },
  rightElement: {
    marginLeft: 10,
  },
});
