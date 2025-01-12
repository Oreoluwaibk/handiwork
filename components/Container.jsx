import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { ReactNode } from 'react'

// interface props {
//     children: ReactNode;
//     color?: string;
// }
const Container = ({children, color = "#fff"}) => {
  return (
    <SafeAreaView>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={{...styles.container, backgroundColor: color}}>
                {children}
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Container;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})