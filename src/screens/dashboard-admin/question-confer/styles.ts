import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    containerImage: {
      alignItems: 'center',
      width: 300,
      height: 146,
      marginTop: 60,
      marginLeft: 10
    },
    textLblPergunta: {
      fontSize: 25,
      textAlign: 'center',
      marginBottom: 30,
      fontWeight: 'bold',
      paddingTop: 50
    },
    botao:{
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
      alignItems: 'flex-start',
      height: 400,
      borderWidth: 0.5,
      width: 350,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 23,
    },
    textQuestions: {
      justifyContent: 'flex-start'
    },
  });