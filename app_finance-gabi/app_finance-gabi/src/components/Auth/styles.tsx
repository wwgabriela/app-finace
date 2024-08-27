import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 12,
  },

  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
    height: 100,
  },

  mt20: {
    marginTop: 20,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginTop: 8,
  },

  button: {
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signInButton: {
    backgroundColor: '#007bff',
  },

  signUpButton: {
    backgroundColor: '#28a745',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
