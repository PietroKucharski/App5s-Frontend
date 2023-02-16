import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, FlatList, StatusBar } from 'react-native'
import { styles } from './Styles'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cards from '../cards/Card';

interface Props {
    options: [] | undefined
    onChangeSelect: object | any
    value: string
    label: string
}

const Select = ({ options, onChangeSelect, value, label }: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState(value);
    const [selected, setSelected] = useState();

    function renderOption({item} :any) {
        return (
            <TouchableOpacity
            onPress={() => {
            onChangeSelect(item.id)
            setText(item.name)
            setModalVisible(false)
            setSelected(item.id)
            }}>
                <Cards value={item.name}></Cards>
                {
                    item.id == selected &&
                    <Ionicons name='checkmark' size={22} color={'green'} style={styles.iconCheckmark}/>
                }
            </TouchableOpacity>
        )
    }

    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
                <Text style={styles.textDropdownButton} numberOfLines={1}>{text}</Text>
                <Ionicons name='chevron-down' size={18}/>
            </TouchableOpacity> 

            <Modal animationType='slide' visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                    <View style={styles.headerModal}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Ionicons name='chevron-up' size={18}/>
                        </TouchableOpacity>

                        <Text style={styles.modalTitle}>{value}</Text>

                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalCancel}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                <SafeAreaView style={styles.safeAreaContainer}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data={options}
                    renderItem={({item}) => renderOption({item})}/>

                </SafeAreaView>
                <StatusBar/>
            </Modal>
            
        </>
    )
}

export default Select;