import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from './styles'
import QuestionConfer from '../../screens/dashboard-admin/question-confer/question-confer'

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