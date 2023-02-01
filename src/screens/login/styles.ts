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
      fontFamily: 'Poppins_400Regular',
      paddingTop: 6,
    },
    btnLogin:{
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
      fontFamily: 'Poppins_400Regular',
      fontWeight: '900',
      fontSize: 24,
    },
    titleLabel:{
      color: '#000000',
      fontWeight: '700',
      fontSize: 30,
      fontFamily: 'Poppins_400Regular',
      textAlign: 'center',
      marginTop: 15,
      marginBottom: 5
    },
    textInputLabel:{
      fontSize: 20,
      fontFamily: 'Poppins_400Regular',
      margin: 5
    },
    containerMessageAlert: {
      justifyContent: 'center',
      paddingStart: 90,
    },
    iconUser: {
      position: "absolute",
      top: 93,
      left: 40,
    },
    iconPassowrd: {
      position: "absolute",
      top: 228,
      left: 40,
    },
});