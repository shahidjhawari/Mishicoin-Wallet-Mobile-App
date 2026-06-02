import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenBackground from '../components/ScreenBackground';
import GlassCard from '../components/GlassCard';
import {THEME} from '../utils/theme';

const navItems = [
  {key: 'home', icon: 'home-outline', label: 'Home'},
  {key: 'wallet', icon: 'wallet-outline', label: 'Wallet'},
  {key: 'settings', icon: 'settings-outline', label: 'Settings'},
];

export default function HomeScreen({route}) {
  const [activeNav, setActiveNav] = useState('home');
  const user = route?.params?.user || {name: 'Mishicoin User', balance: 12480.58};
  const balance = Number(user.balance || 0).toFixed(2);

  return (
    <ScreenBackground>
      <View style={styles.page}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.welcomeLabel}>Welcome back</Text>
            <Text style={styles.welcomeName}>{user.name}</Text>
          </View>
          <View style={styles.statusPill}>
            <Ionicons name="shield-checkmark-outline" size={18} color={THEME.accent} />
            <Text style={styles.statusText}>Secured</Text>
          </View>
        </View>

        <GlassCard style={styles.balanceCard}>
          <View style={styles.balanceRow}>
            <Text style={styles.cardLabel}>Wallet Balance</Text>
            <View style={styles.gainBadge}>
              <Text style={styles.gainText}>+4.2%</Text>
            </View>
          </View>
          <Text style={styles.balanceAmount}>Rs {balance}</Text>
          <Text style={styles.balanceCaption}>Total assets available in your Mishicoin vault</Text>
        </GlassCard>

        <View style={styles.infoGrid}>
          <GlassCard style={styles.infoTile}>
            <Text style={styles.tileTitle}>Portfolio</Text>
            <Text style={styles.tileValue}>₿ 0.81</Text>
          </GlassCard>
          <GlassCard style={styles.infoTile}>
            <Text style={styles.tileTitle}>Daily Gain</Text>
            <Text style={styles.tileValue}>Rs 1,250</Text>
          </GlassCard>
        </View>
      </View>

      <View style={styles.navContainer}>
        {navItems.map((item) => {
          const isActive = item.key === activeNav;
          return (
            <TouchableOpacity
              key={item.key}
              style={[styles.navItem, isActive && styles.navItemActive]}
              onPress={() => setActiveNav(item.key)}
              activeOpacity={0.8}
            >
              <Ionicons
                name={isActive ? item.icon.replace('-outline', '') : item.icon}
                size={24}
                color={isActive ? THEME.accent : THEME.textSecondary}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 100,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  welcomeLabel: {
    color: THEME.textSecondary,
    fontSize: 14,
    marginBottom: 6,
  },
  welcomeName: {
    color: THEME.textPrimary,
    fontSize: 28,
    fontWeight: '800',
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  statusText: {
    color: THEME.textPrimary,
    marginLeft: 8,
    fontSize: 13,
    fontWeight: '600',
  },
  balanceCard: {
    paddingVertical: 28,
    paddingHorizontal: 22,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  cardLabel: {
    color: THEME.textSecondary,
    fontSize: 14,
  },
  gainBadge: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(0,245,212,0.12)',
  },
  gainText: {
    color: THEME.success,
    fontSize: 13,
    fontWeight: '700',
  },
  balanceAmount: {
    color: THEME.textPrimary,
    fontSize: 42,
    fontWeight: '900',
    marginBottom: 10,
  },
  balanceCaption: {
    color: THEME.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  infoTile: {
    flex: 1,
    marginRight: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  tileTitle: {
    color: THEME.textSecondary,
    fontSize: 13,
    marginBottom: 10,
  },
  tileValue: {
    color: THEME.textPrimary,
    fontSize: 20,
    fontWeight: '800',
  },
  navContainer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: THEME.glass,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: THEME.glassBorder,
    paddingVertical: 14,
    ...THEME.shadow,
  },
  navItem: {
    width: 56,
    height: 56,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItemActive: {
    backgroundColor: 'rgba(58, 134, 255, 0.18)',
    shadowColor: THEME.accent,
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.18,
    shadowRadius: 20,
    elevation: 6,
  },
});
