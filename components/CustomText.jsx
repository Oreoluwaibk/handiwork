import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

// Create the Text component using React.forwardRef
export const Text = React.forwardRef(({ style, ...props }, ref) => {
  return (
    <RNText ref={ref} style={[styles.defaultFont, style]} {...props} />
  );
});

// Define styles for the default font
const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "Monserrat",
  },
});