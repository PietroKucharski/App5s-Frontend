import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'      
  },
  botao:{
    width: 150,
    height: 65,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
  },
  containerSafeArea: {
    alignItems: 'flex-start',
    height: 280,
    borderWidth: 0.5,
    width: 350,
  },
  containerLbl: {
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'center'
  },
  textLbl: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  textBtn:{
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: '900',
    fontSize: 24,
  },
  containerBtn: {
    alignItems: 'center',
    width: 350,
  },
  containerImage: {
    alignItems: 'center',
    width: 310,
    height: 146,
    marginBottom: 10,
    marginLeft: 40
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
})