import { StyleSheet } from 'react-native';

export  const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingHorizontal: 12,
        marginHorizontal: 20,
        borderRadius: 8,
        fontSize: 15,
        borderWidth: 1,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        color: 'black',
        fontWeight: '700',
        fontSize: 24,
        paddingLeft: 20,
        paddingVertical: 10,
        marginTop: 25
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
    },
    headerModal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        borderWidth: 1,
        paddingBottom: 22,
        paddingTop: 15,
    },
    modalTitle: {
        fontSize: 16,
    },
    modalCancel: {
        fontSize: 14,
        fontWeight: '600',
        color: 'blue'
    },
    safeAreaContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        width: '100%',
        height: '100%',
    },
    iconCheckmark: {
        position: 'absolute',
        left: 260,
        top: 14
    }

})