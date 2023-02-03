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
      marginTop: 125,
      marginBottom: 10,
      marginLeft: 40
    },
    textInput:{
      width: '100%',
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingLeft: 35,
      marginBottom: 30,
      paddingTop: 6,
    },
    btnLogin:{
      width: 215,
      height: 55,
      backgroundColor: 'white',
      borderRadius: 5,
      marginTop: 80,
      marginLeft: 55,
      justifyContent: 'center',
        
    },
    textBtn:{
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      fontWeight: '600',
      fontSize: 20,
    },
    titleLabel:{
      color: '#000000',
      fontWeight: '700',
      fontSize: 30,
      textAlign: 'center',
      marginTop: 15,
      marginBottom: 5
    },
    containerMessageAlert: {
      justifyContent: 'center',
      paddingStart: 90,
    },
    iconUser: {
      position: "absolute",
      top: 53,
      left: 40,
    },
    iconPassowrd: {
      position: "absolute",
      top: 144,
      left: 40,
    },
});