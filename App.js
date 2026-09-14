import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, Alert } from 'react-native';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [riskCount, setRiskCount] = useState(1420);

  const simulateAlert = () => {
    setRiskCount(prev => prev + 3);
    Alert.alert('Live Demo Alert', 'Unauthorized shadow-AI data outflow detected in the corporate network.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#07090E" />
      <View style={styles.container}>
        
        {/* Header */}
        <View style={styles.topBar}>
          <Text style={styles.brandTitle}>NEXUS GOVERNANCE SUITE</Text>
          <Text style={styles.brandSub}>Tenant: Global Logistics AG (DAX 40)</Text>
        </View>

        {/* Menu */}
        <View style={styles.menuBar}>
          <TouchableOpacity style={[styles.menuBtn, activeTab === 'overview' && styles.menuBtnActive]} onPress={() => setActiveTab('overview')}>
            <Text style={[styles.menuText, activeTab === 'overview' && styles.menuTextActive]}>Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuBtn, activeTab === 'risks' && styles.menuBtnActive]} onPress={() => setActiveTab('risks')}>
            <Text style={[styles.menuText, activeTab === 'risks' && styles.menuTextActive]}>Shadow-AI</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {activeTab === 'overview' && (
            <View>
              <View style={styles.panel}>
                <Text style={styles.panelTitle}>Compliance Score: 74.2%</Text>
                <Text style={styles.panelSub}>EU AI Act • NIS2 Directive • GDPR</Text>
                <TouchableOpacity style={styles.simBtn} onPress={simulateAlert}>
                  <Text style={styles.simBtnText}>⚡ Simulate Incident</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.cardBox}>
                <Text style={styles.cardHeaderLabel}>Vulnerable Endpoints</Text>
                <Text style={styles.cardValueBig}>{riskCount}</Text>
              </View>
            </View>
          )}

          {activeTab === 'risks' && (
            <View style={styles.panel}>
              <Text style={styles.panelTitle}>Detected Non-Compliant Tools</Text>
              <Text style={styles.panelSub}>• ChatGPT Plus (HR Division) - High Risk</Text>
              <Text style={styles.panelSub}>• Unauthorized Canva AI (Marketing) - Medium Risk</Text>
            </View>
          )}
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#07090E' },
  container: { flex: 1, backgroundColor: '#07090E' },
  topBar: { backgroundColor: '#0B0F19', padding: 16, borderBottomWidth: 1, borderColor: '#1F2937' },
  brandTitle: { color: '#F8FAFC', fontSize: 14, fontWeight: '900' },
  brandSub: { color: '#94A3B8', fontSize: 11, marginTop: 2 },
  menuBar: { flexDirection: 'row', backgroundColor: '#0B0F19', padding: 6, borderBottomWidth: 1, borderColor: '#1F2937' },
  menuBtn: { flex: 1, padding: 10, alignItems: 'center', borderRadius: 6 },
  menuBtnActive: { backgroundColor: '#111827', borderWidth: 1, borderColor: '#374151' },
  menuText: { color: '#64748B', fontSize: 12, fontWeight: '600' },
  menuTextActive: { color: '#F8FAFC', fontWeight: '700' },
  scrollContent: { padding: 16 },
  panel: { backgroundColor: '#0B0F19', borderRadius: 12, padding: 16, marginBottom: 14, borderWidth: 1, borderColor: '#1F2937' },
  panelTitle: { fontSize: 16, fontWeight: '800', color: '#F8FAFC' },
  panelSub: { fontSize: 12, color: '#94A3B8', marginTop: 4, marginBottom: 12 },
  simBtn: { backgroundColor: '#F59E0B', padding: 10, borderRadius: 8, alignItems: 'center' },
  simBtnText: { color: '#000', fontSize: 12, fontWeight: '800' },
  cardBox: { backgroundColor: '#0B0F19', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: '#1F2937' },
  cardHeaderLabel: { fontSize: 11, color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase' },
  cardValueBig: { fontSize: 24, fontWeight: '900', color: '#EF4444', marginTop: 6 },
});
