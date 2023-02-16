import { StyleSheet } from 'react-native';

export  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerSafeArea: {
        alignItems: 'flex-start',
        height: '60%',
        borderWidth: 0.5,
        width: 350,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 23,
        marginLeft: 23
    },
    textLabel: {
        color: 'black',
        fontWeight: '700',
        fontSize: 24,
        paddingLeft: 23,
        paddingVertical: 10,
    },
    containerBtn: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    buttonSafeArea: {
        width: 150,
        height: 55,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 10,
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 20
    },
    button: {
        width: 350,
        height: 55,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 10,
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 20
    },
    textBtn:{
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    },
})