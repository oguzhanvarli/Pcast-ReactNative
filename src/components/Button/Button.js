import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from '../Button/Button.style'

export default function Button({text, onPress, loading}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {loading ? (<ActivityIndicator color='white' style={{marginTop: 15}}/>) : (
      <Text style={styles.title}>{text}</Text>)}
    </TouchableOpacity>
  )
}
