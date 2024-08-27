import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import styles from './styles';
import { supabase } from '../../services/supabase';

interface Account {
  id: number;
  label: string;
  value: number;
  date: string;
  type: number;
}

interface HomeProps {
  session: any;
}

const Home: React.FC<HomeProps> = ({ session }) => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [sumOfDebits, setSumOfDebits] = useState(0);
  const [sumOfCredits, setSumOfCredits] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchAccountData = async () => {
    try {
      const { data, error } = await supabase
        .from('account_records')
        .select();

      return { data, error };
    } catch (error) {
      console.error("Unexpected error:", error);
      return { data: [], error };
    }
  };

  const calculateSums = (accounts: Account[], recordType: number) => {
    const sum = accounts.reduce(
      (total, currentValue) => total + (recordType === currentValue.type ? currentValue.value : 0), 0
    );
    return parseFloat(sum.toFixed(2));
  };

  const EmptyListMessage = () => {
    return <Text>Não há contas a serem exibidas!</Text>;
  };

  useEffect(() => {
    const updateData = async () => {
      setLoading(true);
      const { data, error } = await fetchAccountData();
      if (error) {
        console.error('Error fetching data:', error);
        setAccounts([]);
      } else {
        setAccounts(data);
      }
      setLoading(false);
    };
    updateData();
  }, []);

  const updateSums = () => {
    setSumOfDebits(calculateSums(accounts, 0));
    setSumOfCredits(calculateSums(accounts, 1));
  };

  useFocusEffect(
    useCallback(() => {
      if (!loading) {
        updateSums();
      }
    }, [accounts, loading])
  );

  if (!session) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header name={session.user.email} />

        <Balance entradas={sumOfCredits} saldo={sumOfCredits - sumOfDebits} gastos={sumOfDebits} />

        <Actions />
      </View>

      <ScrollView
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Últimas movimentações</Text>
        <View style={styles.list}>
          {!loading && (
            <FlatList
              data={accounts}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => <Movements item={item} />}
              ListEmptyComponent={EmptyListMessage}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
