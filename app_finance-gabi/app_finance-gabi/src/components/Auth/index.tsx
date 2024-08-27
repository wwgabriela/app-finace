// Auth.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../services/supabase';
import styles from './styles';

export default function Auth() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert('Error', error.message);
    }
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert('Error', error.message);
    }
    if (!session) {
      Alert.alert('Check your email', 'Please check your inbox for email verification!');
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder='email@address.com'
          autoCapitalize='none'
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder='Informe a senha de acesso'
          autoCapitalize='none'
        />
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <TouchableOpacity
            style={[styles.button, styles.signInButton]}
            disabled={loading}
            onPress={() => signInWithEmail()}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.verticallySpaced}>
          <TouchableOpacity
            style={[styles.button, styles.signUpButton]}
            disabled={loading}
            onPress={() => signUpWithEmail()}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
