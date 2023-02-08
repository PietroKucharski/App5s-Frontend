import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: "center",
    },
    textLblPermission: {
      fontSize: 25,
      textAlign: 'center',
      marginBottom: 30,
      fontWeight: 'bold',
      paddingTop: 40
    },
    textInput:{
      width: '90%',
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingLeft: 15,
      marginBottom: 30,
      paddingTop: 6,
    },
    textInputContainer: {
      justifyContent: 'center',
      paddingStart: 30,
      paddingEnd: 30,
      paddingTop: 20,
      alignItems: 'center',
      backgroundColor: 'black',
      width: "100%",
    },
    btnCadastro:{
      width: 215,
      height: 65,
      backgroundColor: 'white',
      borderRadius: 5,
      marginTop: 10,
      justifyContent: 'center',
      marginBottom: 20
    },
    textBtn:{
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      fontWeight: '900',
      fontSize: 24,
    },
    questionList: {
      height: 300,
      borderWidth: 0.5,
      width: 350,
      justifyContent: 'flex-start',
    },
    textQuestions: {
      justifyContent: 'flex-start'
    },
    containerMessageAlert: {
      justifyContent: 'center',
    },
    containerImage: {
      alignItems: 'center',
      height: 146,
    },
  });