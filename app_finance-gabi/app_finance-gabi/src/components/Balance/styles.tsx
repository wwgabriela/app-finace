import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.opacity_black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 4,
    paddingEnd: 4,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  item: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: colors.opacity_black,
    alignItems: 'center',
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gray_400,
    marginBottom: 6,
  },

  currencySymbol: {
    fontSize: 14,
    color: colors.gray_400,
    marginRight: 6,
  },

  income: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "blue",
  },
  
  balance: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.green,
  },
  
  expenses: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.red,
  },
});

export default styles;
