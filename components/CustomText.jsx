import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

export const Text = ({ style, ...props }) => {
  return (
    <RNText style={[{ fontFamily: "Monserrat" }, style]} {...props} />
  );
};
