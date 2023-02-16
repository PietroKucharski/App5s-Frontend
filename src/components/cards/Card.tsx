import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Styles'

type Props = {
  value: string
}

export default function Cards({ value }: Props) {  
  return (
    <View style={styles.container}>
        <Text style={styles.cardsText}>
          {value}
        </Text>
    </View>
  )
}