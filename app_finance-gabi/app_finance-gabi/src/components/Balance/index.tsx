import React from 'react';
import { View, Text } from 'react-native';
import { MotiView } from 'moti';
import styles from './styles';

interface BalanceProps {
  entradas: number;
  saldo: number;
  gastos: number;
}

const Balance: React.FC<BalanceProps> = ({ entradas, saldo, gastos }) => {
  return (
    <MotiView 
      style={styles.container}
      from={{
        rotateX: "-100deg",
        opacity: 0,
      }}
      animate={{
        rotateX: "0deg",
        opacity: 1,
      }}
      transition={{
        type: "timing",
        duration: 800,
        delay: 300,
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Entradas</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.income}>{new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(entradas)}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(saldo)}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(gastos)}</Text>
        </View>
      </View>     
    </MotiView>
  );
}

export default Balance;
