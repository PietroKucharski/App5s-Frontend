import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnOpcao: {
    backgroundColor: 'white',
    height: 60,
    justifyContent: 'center',
    borderRadius: 5,
    width: 150,
    marginRight: 15,
    marginLeft: 15
  },
  textBtn:{
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    // fontFamily: 'Poppins_400Regular',
    fontWeight: '900',
    fontSize: 14,
  },
  textLbl: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 30,
    // fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 30,
  },
  containerScroll: {
    maxHeight: 65,
    marginBottom: 14,
    marginTop: 10,
  },
});