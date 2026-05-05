import { StyleSheet, Text, View, Image, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { pilots } from './data/pilots';

export default function App() {
  const pilot = pilots[0];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>SUPER TRUNFO</Text>
          <Text style={styles.headerSubtitle}>FÓRMULA 1</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: pilot.image }} 
              style={styles.pilotImage} 
            />
            <View style={styles.starsBadge}>
              <Text style={styles.starsText}>{"⭐".repeat(pilot.stars)}</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.pilotName}>{pilot.name}</Text>
            <Text style={styles.pilotDescription}>{pilot.description}</Text>
            
            <View style={styles.divider} />
            
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>EQUIPE</Text>
                <Text style={styles.statValue}>{pilot.team}</Text>
              </View>
              
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>PAÍS</Text>
                <Text style={styles.statValue}>{pilot.country}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#e10600',
    letterSpacing: 2,
  },
  headerSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: 8,
    marginTop: -5,
  },
  card: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    position: 'relative',
    backgroundColor: '#f0f0f0',
  },
  pilotImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  starsBadge: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  starsText: {
    fontSize: 16,
  },
  infoContainer: {
    padding: 25,
  },
  pilotName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 10,
  },
  pilotDescription: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 22,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#eeeeee',
    marginBottom: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#999999',
    marginBottom: 4,
    letterSpacing: 1,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
});
