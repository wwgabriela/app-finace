import React, { useState } from 'react';
import { 
  View,
  Text,
  TouchableOpacity 
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { MotiView, AnimatePresence, MotiText } from 'moti';
import styles from './styles';

interface MovementItem {
  date: string;
  label: string;
  value: number;
  type: number;
}

interface MovementsProps {
  item: MovementItem;
}

const Movements: React.FC<MovementsProps> = ({ item }) => {
  const [showValue, setShowValue] = useState(false);

  const handleItemPressed = () => {
    setShowValue(!showValue);
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleItemPressed}
    >
      <Text style={styles.date}>{item.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{item.label}</Text>

        {showValue ? (
          <AnimatePresence exitBeforeEnter>
            <MotiText
              style={item.type === 1 ? styles.value : styles.expenses}
              from={{ translateX: 100 }}
              animate={{ translateX: 0 }}
              transition={{ type: "spring", duration: 800 }}
            >
              {item.type === 1 
                ? `R$ ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(item.value)}`
                : `R$ -${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(item.value)}`
              }
            </MotiText>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <MotiView
              style={styles.skeleton}
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "timing" }}
            />
          </AnimatePresence>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default Movements;
