import React, { useState} from 'react'
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons';

type Props = {
    options?: object
    onChangeSelect?: object
    value: string
}

const Select = ({ options, onChangeSelect, value }: Props) => {
    return (
        <>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.textDropdownButton} numberOfLines={1}>{value}</Text>
                <Ionicons name='chevron-down' size={18}/>
            </TouchableOpacity> 
        </>
    )
}

export default Select;