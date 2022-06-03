import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { FC } from 'react'

interface IField {
  onChange: (val: string) => void
  val: string
  placeholder: string
  isSecure?: boolean
}
const Field: FC<IField> = ({onChange, val, placeholder, isSecure}) => {
  return (
    <View style={styles.forTextLoader}>
      <TextInput 
      placeholder={placeholder} 
      onChangeText={onChange}
      value={val}
      secureTextEntry={isSecure}
      showSoftInputOnFocus={false}
      autoCapitalize='none'
      />
    </View>
  )
}
const styles = StyleSheet.create({
  forTextLoader: {
    borderColor: 'red',
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    width: '80%',
    borderRadius: 20,    
  }
})
export default Field