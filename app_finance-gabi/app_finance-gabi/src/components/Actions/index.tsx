import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

export default function Actions() {
  const navigation = useNavigation();

  const handleAddRecord = () => {
    navigation.navigate('AddRecord');
  };

  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <Pressable style={styles.actionButton} onPress={handleAddRecord}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={26} style={styles.iconStyle} />
        </View>
        <Text style={styles.labelButton}>Entrada</Text>
      </Pressable>

      <Pressable style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="tagso" size={26} style={styles.iconStyle} />
        </View>
        <Text style={styles.labelButton}>Saídas</Text>
      </Pressable>

      <Pressable style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="creditcard" size={26} style={styles.iconStyle} />
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
      </Pressable>

      <Pressable style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="barcode" size={26} style={styles.iconStyle} />
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
      </Pressable>

      <Pressable style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={26} style={styles.iconStyle} />
        </View>
        <Text style={styles.labelButton}>Conta</Text>
      </Pressable>
    </ScrollView>
  );
}
