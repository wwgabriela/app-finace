import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.opacity_white,
  },

  header: {
    marginTop: 0,
  },

  scrollArea: {
    marginTop: 80,
    color: colors.gray_400,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.dark_purple,
    margin: 14,
    marginTop: 16,
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 4,
    borderBottomColor: colors.light_purple,
  },

  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});

export default styles;
