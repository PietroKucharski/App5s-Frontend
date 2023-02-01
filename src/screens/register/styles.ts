import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    containerLogin: {
      justifyContent: 'center',
      padding: 30,
      marginBottom: 25,
    },
    containerImage: {
      alignItems: 'center',
      width: 300,
      height: 146,
      marginTop: 80,
      marginBottom: 10,
      marginLeft: 40
    },
    textInput:{
      width: '100%',
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingLeft: 15,
      marginBottom: 5,
      paddingTop: 6,
    },
    btnCadastro:{
      width: 215,
      height: 65,
      backgroundColor: 'white',
      borderRadius: 5,
      marginTop: 20,
      marginLeft: 55,
      justifyContent: 'center',  
    },
    textBtn:{
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      fontWeight: '900',
      fontSize: 24,
    },
    titleLabel:{
      color: '#000000',
      fontWeight: '700',
      fontSize: 30,
      textAlign: 'center',
      marginTop: 35,
      marginBottom: 10
    },
    textInputLabel:{
      fontSize: 20,
      margin: 5
    },
    containerMessageAlert: {
      justifyContent: 'center',
      paddingStart: 90,
    },
    background: {
        width: '100%',
        height: '100%',
    },
    iconUser: {
        position: "absolute",
        top: 265,
        left: 40,
    },
});