import {StyleSheet} from 'react-native';

export const SignUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  Text: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginBottom:0,
  },
  Card: {
    marginTop: 15,
    backgroundColor: '#fff',
    paddingBottom: 50,
    borderRadius: 10,
    elevation: 4,
  },
  btn: {
    width: 100,
    color: 'white',
  },
  btnContainer: {
    alignItems: 'flex-end',
    paddingRight: 20,
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    color: 'black',
  },
  label: {
    fontSize: 14,
    // marginTop: ,
    color: 'black',
    margin: 5,
  },
  input: {
    marginBottom: 10,
    backgroundColor: 'white',
    // color:"black"
    height: 40, // Smaller height
    fontSize: 14, // Smaller text size
    paddingVertical: 5,
  },
});
