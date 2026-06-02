import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenBackground from '../components/ScreenBackground';
import GlassCard from '../components/GlassCard';
import GlassInput from '../components/GlassInput';
import GlassButton from '../components/GlassButton';
import GlassCheckbox from '../components/GlassCheckbox';
import {THEME} from '../utils/theme';
import API from '../services/api';

export default function SignupScreen({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referral, setReferral] = useState('');
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const signup = async () => {
    try {
      await API.post('/auth/signup', {
        fullName: name,
        email,
        password,
        referralCode: referral || undefined,
      });
      navigation.navigate('Login');
    } catch (err) {
      console.log(err?.response?.data || err);
    }
  };

  return (
    <ScreenBackground>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="chevron-back" size={24} color={THEME.textPrimary} />
            </TouchableOpacity>
            <Text style={styles.screenTitle}>Create Wallet</Text>
          </View>

          <GlassCard style={styles.card}>
            <GlassInput
              icon="person-outline"
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />
            <GlassInput
              icon="mail-outline"
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <GlassInput
              icon="lock-closed-outline"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              rightElement={
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color={THEME.textSecondary}
                  />
                </TouchableOpacity>
              }
            />
            <GlassInput
              icon="pricetag-outline"
              placeholder="Referral Code (Optional)"
              value={referral}
              onChangeText={setReferral}
            />

            <GlassCheckbox
              checked={agree}
              onPress={() => setAgree(!agree)}
              label="I agree to Terms & Conditions"
            />

            <GlassButton title="REGISTER NOW" onPress={signup} disabled={!agree} />
          </GlassCard>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Already have a wallet? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.footerLink}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    marginRight: 12,
  },
  screenTitle: {
    color: THEME.textPrimary,
    fontSize: 24,
    fontWeight: '800',
  },
  card: {
    marginBottom: 18,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  footerText: {
    color: THEME.textSecondary,
    fontSize: 14,
  },
  footerLink: {
    color: THEME.accent,
    fontSize: 14,
    fontWeight: '700',
  },
});
