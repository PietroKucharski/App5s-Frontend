import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  btnOpcao: {
    backgroundColor: 'white',
    height: 60,
    borderRadius: 5,
    width: '90%',
    marginRight: 15,
    marginLeft: 15,
    justifyContent: "center",
    marginBottom: 25
  },
  textBtn:{
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: '900',
    fontSize: 14,
  },
  textLbl: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 30,
  },
  containerScroll: {
    height: '58%',
    marginBottom: 14,
    marginTop: 10,
  },
  containerImage: {
    alignItems: 'center',
    width: 300,
    height: 146,
    marginTop: 80,
    marginBottom: 10,
    marginLeft: 40
  },
});