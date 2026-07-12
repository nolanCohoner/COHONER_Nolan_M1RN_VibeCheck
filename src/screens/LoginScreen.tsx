import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { signUp, signIn } from '../services/auth';

const LogoImg = require('../../ConnexionLogin/logo.png');

// Palette VibeCheck
const C = {
  CREAM: '#F1F1D3',
  SAGE_LIGHT: '#E3EBD0',
  SAGE_MID: '#C7DDC5',
  SAGE_DARK: '#9FCDA8',
  TEAL: '#7DC2A5',
  INK: '#2D3B2D',
  INK_LIGHT: '#A0B0A0',
  ERROR: '#F38071',
  WHITE: '#FFFFFF',
};

const GRADIENT_COLORS = ['#7DC2A5', '#9FCDA8', '#C7DDC5', '#E3EBD0', '#F1F1D3'] as const;
const GRADIENT_LOCATIONS = [0, 0.25, 0.5, 0.75, 1] as const;

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<'email' | 'password' | null>(null);

  const handleSubmit = async () => {
    if (!email || !password) {
      setErrorMsg('Remplis tous les champs.');
      return;
    }
    setLoading(true);
    setErrorMsg(null);
    try {
      const { error } = isRegistering
        ? await signUp(email, password)
        : await signIn(email, password);
      if (error) setErrorMsg(error.message);
    } catch (_err) {
      setErrorMsg('Une erreur est survenue.');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleMode = () => {
    setIsRegistering(!isRegistering);
    setErrorMsg(null);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#0F120F" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* === LOGO IMAGE === */}
          <View style={styles.logoSection}>
            <Image source={LogoImg} style={styles.logoImage} resizeMode="contain" />
            <Text style={styles.tagline}>Ton humeur, ta musique.</Text>
          </View>

          {/* === FORMULAIRE === */}
          <View style={styles.formCard}>
            {/* Titre */}
            <View style={styles.formTitleRow}>
              <View style={styles.formTitleDot} />
              <Text style={styles.formTitle}>
                {isRegistering ? 'CRÉER UN COMPTE' : 'CONNEXION'}
              </Text>
            </View>

            {/* Erreur */}
            {errorMsg && (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>! {errorMsg}</Text>
              </View>
            )}

            {/* Email */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>EMAIL</Text>
              <View style={[
                styles.inputWrapper,
                focusedField === 'email' && styles.inputWrapperFocused
              ]}>
                <Text style={styles.inputIcon}>@</Text>
                <TextInput
                  style={styles.input}
                  placeholder="adresse@email.com"
                  placeholderTextColor="#7A8A7A"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  autoComplete="email"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>

            {/* Mot de passe */}
            <View style={styles.fieldGroup}>
              <Text style={styles.fieldLabel}>MOT DE PASSE</Text>
              <View style={[
                styles.inputWrapper,
                focusedField === 'password' && styles.inputWrapperFocused
              ]}>
                <Text style={styles.inputIcon}>▪</Text>
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#7A8A7A"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                  autoComplete="password"
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeBtn}
                  hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                >
                  <Text style={[styles.eyeText, showPassword && styles.eyeTextActive]}>
                    {showPassword ? '●' : '○'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Bouton principal avec dégradé style Deltarune */}
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.submitBtn}
              disabled={loading}
              activeOpacity={0.9}
            >
              <LinearGradient
                colors={GRADIENT_COLORS}
                locations={GRADIENT_LOCATIONS}
                style={styles.btnGradient}
              >
                {loading ? (
                  <ActivityIndicator color={C.INK} size="small" />
                ) : (
                  <Text style={styles.submitText}>
                    {isRegistering ? 'CREER MON COMPTE' : 'SE CONNECTER'}
                  </Text>
                )}
              </LinearGradient>
            </TouchableOpacity>

            {/* Séparateur */}
            <View style={styles.separator}>
              <View style={styles.separatorLine} />
              <Text style={styles.separatorText}>ou</Text>
              <View style={styles.separatorLine} />
            </View>

            {/* Bouton secondaire — style lien TEAL souligné */}
            <TouchableOpacity
              onPress={handleToggleMode}
              style={styles.secondaryBtn}
              activeOpacity={0.7}
            >
              <Text style={styles.secondaryText}>
                {isRegistering
                  ? "Déjà un compte ?"
                  : "Pas encore inscrit ?"}
              </Text>
              <Text style={styles.secondaryLink}>
                {isRegistering ? ' Se connecter' : " S'inscrire"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#0F120F',
  },
  container: { flex: 1 },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 36,
    gap: 20,
  },

  // Logo
  logoSection: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  logoImage: {
    width: 220,
    height: 90,
  },
  tagline: {
    fontSize: 7,
    fontFamily: 'PressStart2P-Regular',
    color: '#E3EBD0',
    letterSpacing: 1,
    marginTop: 8,
  },

  // Carte formulaire
  formCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    padding: 24,
    gap: 0,
  },
  formTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  formTitleDot: {
    width: 6,
    height: 6,
    backgroundColor: C.TEAL,
  },
  formTitle: {
    fontSize: 9,
    fontFamily: 'PressStart2P-Regular',
    color: '#FFFFFF',
    letterSpacing: 1,
  },

  // Erreur
  errorBox: {
    backgroundColor: 'rgba(192, 57, 43, 0.20)',
    borderWidth: 2,
    borderColor: C.ERROR,
    padding: 10,
    marginBottom: 16,
  },
  errorText: {
    color: C.ERROR,
    fontSize: 7,
    fontFamily: 'PressStart2P-Regular',
    lineHeight: 12,
  },

  // Champs
  fieldGroup: { marginBottom: 16 },
  fieldLabel: {
    fontSize: 7,
    fontFamily: 'PressStart2P-Regular',
    color: '#FFFFFF',
    marginBottom: 6,
    letterSpacing: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    height: 52,
    paddingHorizontal: 12,
  },
  // Border TEAL quand focus
  inputWrapperFocused: {
    borderColor: C.TEAL,
    borderWidth: 2,
  },
  inputIcon: {
    fontSize: 12,
    color: C.INK_LIGHT,
    marginRight: 10,
    fontFamily: 'PressStart2P-Regular',
    width: 16,
    textAlign: 'center',
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 9,
    fontFamily: 'PressStart2P-Regular',
    height: '100%',
    padding: 0,
  },
  eyeBtn: { padding: 4 },
  eyeText: {
    fontSize: 14,
    color: '#A0B0A0',
  },
  eyeTextActive: {
    color: C.TEAL,
  },

  // Bouton principal
  submitBtn: {
    height: 52,
    marginTop: 18,
    backgroundColor: 'transparent',
  },
  btnGradient: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: C.INK,
    fontSize: 9,
    fontFamily: 'PressStart2P-Regular',
    letterSpacing: 1,
  },

  // Séparateur
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
    gap: 10,
  },
  separatorLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#3D4D3D',
  },
  separatorText: {
    fontSize: 7,
    fontFamily: 'PressStart2P-Regular',
    color: '#7A8A7A',
  },

  // Bouton secondaire — lien TEAL
  secondaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingVertical: 8,
  },
  secondaryText: {
    color: '#A0B0A0',
    fontSize: 7,
    fontFamily: 'PressStart2P-Regular',
    lineHeight: 14,
  },
  secondaryLink: {
    color: C.TEAL,
    fontSize: 7,
    fontFamily: 'PressStart2P-Regular',
    lineHeight: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
