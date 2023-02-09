import { StyleSheet } from 'react-native';

export  const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'black',
        paddingHorizontal: 12,
        marginHorizontal: 20,
        borderRadius: 8,
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'black',
        marginTop:50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    chevronDownIcon: {
        right: 320,
        position: "absolute",
        top: 15
    },
    textDropdownButton: {
        color: 'black',
        fontSize: 16,
        marginRight: 36,
    }
})