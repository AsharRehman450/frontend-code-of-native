import { StyleSheet } from 'react-native';

// export const WelcomeStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'white', // updated background
//     // justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#000',
//     fontSize: 38,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   imageContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text2 : {
//     margin:5,
//     fontSize:20,
//     textAlign:"center"
//   }

// });
export const WelcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  text2: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  btnWrapper: {
    gap: 15,
    paddingHorizontal: 50,
  },
  // whiteBtn: {
  //   backgroundColor: 'white',
  //   borderColor: 'black',
  //   borderWidth: 1,
  // },
  // whiteBtnText: {
  //   color: 'black',
  // },
});
