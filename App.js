import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ActivityIndicator, 
  SafeAreaView 
} from 'react-native';
import * as Speech from 'expo-speech';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// Массивы с немецкими мотивационными фразами
const part1 = [
  "Aus tiefster innerer Überzeugung",
  "Ohne den geringsten Zweifel",
  "Trotz aller vergangenen Rückschläge",
  "Mit absoluter Klarheit im Geist",
  "In völliger Harmonie mit mir selbst",
  "Jenseits von Angst und Zweifeln",
  "Mit unerschütterlichem Selbstvertrauen",
  "Aus Liebe zu meinem eigenen Wachstum",
  "In voller Anerkennung meines Wertes",
  "Fernab von fremden Erwartungen"
];

const part2 = [
  "erkenne ich jeden Tag mehr,",
  "weiß ich ganz tief in mir,",
  "entscheide ich mich bewusst dafür,",
  "akzeptiere ich voll und ganz,",
  "verspüre ich die unglaubliche Kraft,",
  "erlaube ich mir endlich,",
  "spüre ich in jeder Zelle,",
  "stehe ich entschlossen dazu,",
  "beweise ich mir selbst immer wieder,",
  "fühle ich mich bereit dafür,"
];

const part3 = [
  "dass meine persönlichen Grenzen absolut unantastbar sind.",
  "dass ich jeden Erfolg in meinem Leben wirklich verdiene.",
  "dass mein Potenzial absolut grenzenlos und einzigartig ist.",
  "dass ich der wahre Schöpfer meiner eigenen Realität bin.",
  "dass wahre innere Stärke aus bedingungsloser Selbstliebe entsteht.",
  "dass ich alle Hindernisse mit Leichtigkeit überwinden werde.",
  "dass meine mentale Gesundheit immer an erster Stelle steht.",
  "dass ich mutig genug bin, meinen eigenen Weg zu gehen.",
  "dass jede meiner Entscheidungen mich meinem Ziel näherbringt.",
  "dass ich vollkommen genug bin, genau so wie ich bin."
];

// Функция для получения случайного элемента из массива
const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export default function App() {
  const [quote, setQuote] = useState("Klicke unten, um zu beginnen!");
  const [isSpeaking, setIsSpeaking] = useState(false);

  const generateAndSpeak = () => {
    // 1. Генерируем фразу
    const randomPart1 = getRandomElement(part1);
    const randomPart2 = getRandomElement(part2);
    const randomPart3 = getRandomElement(part3);
    const fullQuote = `${randomPart1} ${randomPart2} ${randomPart3}`;
    
    // 2. Обновляем UI
    setQuote(fullQuote);
    setIsSpeaking(true);

    // 3. Озвучиваем фразу
    Speech.speak(fullQuote, {
      language: 'de',
      rate: 0.9,
      onDone: () => setIsSpeaking(false),
      onError: (error) => {
        console.error('Ошибка TTS:', error);
        setIsSpeaking(false);
      },
      onStopped: () => setIsSpeaking(false),
    });
  };

  return (
    <LinearGradient 
      // Глубокий синий градиент
      colors={['#0F2027', '#203A43', '#2C5364']} 
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        
        {/* Текстовая панель */}
        <View style={styles.quoteCard}>
          {/* Метка в углу */}
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>»Erfolg«</Text>
          </View>
          
          <Text style={styles.quoteText}>{quote}</Text>
        </View>

        {/* Функциональная кнопка (Зеленая панель) */}
        <TouchableOpacity 
          style={[styles.actionPanel, isSpeaking && styles.buttonDisabled]} 
          onPress={generateAndSpeak}
          disabled={isSpeaking}
          activeOpacity={0.6}
        >
          {isSpeaking ? (
            <ActivityIndicator size="large" color="#FFFFFF" style={styles.iconPlaceholder} />
          ) : (
            <Ionicons name="play-circle" size={60} color="#FFFFFF" style={styles.iconPlaceholder} />
          )}
          <Text style={styles.actionText}>GENERIEREN & ABSPIELEN</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  quoteCard: {
    backgroundColor: '#1E293B', // Темно-серая панель
    borderRadius: 24, // Улучшенные закругления
    borderWidth: 1,
    borderColor: '#334155', // Изысканная светло-серая рамка
    padding: 32,
    width: '100%',
    minHeight: 220,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 15,
    position: 'relative', 
  },
  badgeContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#0F172A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
  },
  badgeText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  quoteText: {
    color: '#F8FAFC',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 36,
    marginTop: 20, // Отступ, чтобы текст не наезжал на бейдж
  },
  actionPanel: {
    backgroundColor: '#10B981', // Зеленая панель
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#34D399',
    paddingVertical: 24,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 12,
  },
  buttonDisabled: {
    backgroundColor: '#059669', // Приглушенный зеленый
    opacity: 0.8,
  },
  iconPlaceholder: {
    marginBottom: 12,
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1.5,
  }
});
