import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
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
    height: 400,
    borderWidth: 0.5,
    width: 350,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 23,
  },
  containerLbl: {
    alignItems: 'center',
    paddingTop: 20,
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
    flexDirection: 'row',
    justifyContent: 'center',
    width: 350,
    paddingTop: 20
  },
  containerImage: {
    alignItems: 'center',
    width: 300,
    height: 146,
    marginTop: 60,
    marginBottom: 10,
    marginLeft: 40
  },
  containerListCards: {
    justifyContent: 'center',
    backgroundColor: 'gray',
    height: 60,
    width: 310,
    alignItems: "center",
    borderRadius: 5
  },
});