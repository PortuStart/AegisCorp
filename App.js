import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [tenantName] = useState('Global Logistics & Tech AG (DAX 40)');

  // Live System Integrations
  const [integrations] = useState([
    { id: 'i1', name: 'Microsoft 365 Azure AD', status: 'Synchronized', latency: '12ms', icon: 'logo-microsoft' },
    { id: 'i2', name: 'AWS Cloud Europe (Frankfurt)', status: 'Live Scan Active', latency: '24ms', icon: 'server' },
    { id: 'i3', name: 'GitHub Enterprise / Repos', status: 'Audit Running', latency: '45ms', icon: 'code-slash' },
  ]);

  // Detected Shadow-AI & Non-compliant SaaS Risks
  const [riskItems, setRiskItems] = useState([
    { id: 'r1', tool: 'Enterprise-wide ChatGPT Plus Account', category: 'High-Risk AI', owner: 'HR Division Frankfurt', status: 'Non-Compliant (No DPA)', riskScore: '9.4' },
    { id: 'r2', tool: 'Unauthorized Canva AI Suite', category: 'General AI', owner: 'Marketing EMEA', status: 'Pending Review', riskScore: '6.2' },
    { id: 'r3', tool: 'Third-Party Cloud Storage (Unknown)', category: 'Data Leakage', owner: 'Sales Operations', status: 'Blocked by Firewall', riskScore: '9.8' },
  ]);

  const [auditLogs, setAuditLogs] = useState([
    { id: 'l1', timestamp: 'Sep 14, 2026 - 10:41 UTC', event: 'Automated EU AI Act Risk Assessment executed by CISO Office', actor: 'system_bot_v4' },
    { id: 'l2', timestamp: 'Sep 14, 2026 - 09:15 UTC', event: 'New API token generated for Azure AD sync connector', actor: 'admin_j_miller' },
    { id: 'l3', timestamp: 'Sep 13, 2026 - 18:30 UTC', event: 'NIS2 incident response playbook exported for Board Review', actor: 'compliance_lead' },
  ]);

  const [riskCount, setRiskCount] = useState(1420);
  const [potentialFine, setPotentialFine] = useState('€ 12.5M');

  // Live Simulator Function for Pitch Demo
  const simulateShadowAiDetection = () => {
    const newSimulatedRisk = {
      id: Date.now().toString(),
      tool: '⚡ [LIVE DETECTION] Unknown LLM Wrapper (Data Leakage Risk)',
      category: 'Unauthorized GenAI',
      owner: 'R&D Department Munich',
      status: 'Immediate Revocation Recommended',
      riskScore: '9.9',
    };

    setRiskItems([newSimulatedRisk, ...riskItems]);
    setRiskCount(prev => prev + 3);
    setPotentialFine('€ 14.2M');

    const newLog = {
      id: Date.now().toString(),
      timestamp: 'Just now (Live Event)',
      event: '⚠️ Firewall Alert: Endpoint transferred unencrypted customer data to external AI service',
      actor: 'agent_watcher_ai',
    };
    setAuditLogs([newLog, ...auditLogs]);

    Alert.alert(
      '🚨 Live Corporate Network Alert!',
      'The CISO agent has just detected unauthorized data outflow via an employee in R&D. The risk has been recorded in the immutable audit trail.'
    );
  };

  const triggerDeepScan = () => {
    Alert.alert(
      'Enterprise Deep-Scan Initiated',
      'AI scanners are analyzing all active cloud endpoints and browser extensions across the corporate network.'
    );
  };

  const generateBoardReport = () => {
    Alert.alert(
      'Executive Board Dossier (PDF/A)',
      'The legally binding governance report has been digitally signed and archived in the SEC repository.'
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#07090E" />
      <View style={styles.container}>
        
        {/* Enterprise Top Navigation Bar */}
        <View style={styles.topBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={styles.brandIconBox}>
              <Ionicons name="shield-checkmark" size={18} color="#38BDF8" />
            </View>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Text style={styles.brandTitle}>NEXUS GOVERNANCE SUITE</Text>
                <View style={styles.badgeTier}><Text style={styles.badgeTierText}>V4.8 ENTERPRISE</Text></View>
              </View>
              <Text style={styles.brandSub}>Tenant: <Text style={{ color: '#F8FAFC', fontWeight: '700' }}>{tenantName}</Text></Text>
            </View>
          </View>

          <View style={styles.topBarRight}>
            <View style={styles.trustBadgesRow}>
              <Text style={styles.trustBadgeText}>ISO 27001 Ready</Text>
              <Text style={styles.trustBadgeDivider}>•</Text>
              <Text style={styles.trustBadgeText}>SOC 2 Type II</Text>
            </View>
            <View style={styles.secStatusPill}>
              <View style={styles.greenPulse} />
              <Text style={styles.secStatusText}>Zero-Trust Active</Text>
            </View>
          </View>
        </View>

        {/* Professional Sub-Menu */}
        <View style={styles.menuBar}>
          <TouchableOpacity style={[styles.menuBtn, activeTab === 'overview' && styles.menuBtnActive]} onPress={() => setActiveTab('overview')}>
            <Ionicons name="analytics" size={14} color={activeTab === 'overview' ? '#38BDF8' : '#64748B'} />
            <Text style={[styles.menuText, activeTab === 'overview' && styles.menuTextActive]}>Overview</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuBtn, activeTab === 'risks' && styles.menuBtnActive]} onPress={() => setActiveTab('risks')}>
            <Ionicons name="warning" size={14} color={activeTab === 'risks' ? '#38BDF8' : '#64748B'} />
            <Text style={[styles.menuText, activeTab === 'risks' && styles.menuTextActive]}>Shadow-AI</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuBtn, activeTab === 'audit' && styles.menuBtnActive]} onPress={() => setActiveTab('audit')}>
            <Ionicons name="server" size={14} color={activeTab === 'audit' ? '#38BDF8' : '#64748B'} />
            <Text style={[styles.menuText, activeTab === 'audit' && styles.menuTextActive]}>Logs</Text>
          </TouchableOpacity>
        </View>

        {/* Main Content Area */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {activeTab === 'overview' && (
            <View>
              <View style={styles.execBanner}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.execBannerTitle}>Compliance Score: 74.2%</Text>
                  <Text style={styles.execBannerSub}>EU AI Act • NIS2 Directive • GDPR Standard</Text>
                </View>
                <TouchableOpacity style={styles.execActionBtn} onPress={triggerDeepScan}>
                  <Ionicons name="refresh" size={13} color="#0EA5E9" style={{ marginRight: 4 }} />
                  <Text style={styles.execActionText}>Deep Scan</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.simulatorBox}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.simTitle}>⚡ Live Demo Simulator</Text>
                  <Text style={styles.simSub}>Simulate an unauthorized Shadow-AI data leakage event.</Text>
                </View>
                <TouchableOpacity style={styles.simBtn} onPress={simulateShadowAiDetection}>
                  <Text style={styles.simBtnText}>Simulate</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.gridRow}>
                <View style={styles.cardBox}>
                  <Text style={styles.cardHeaderLabel}>Vulnerable Endpoints</Text>
                  <Text style={styles.cardValueBig}>{riskCount}</Text>
                  <Text style={styles.cardFooterText}>Out of 12,500 active workstations</Text>
                </View>
                <View style={styles.cardBox}>
                  <Text style={styles.cardHeaderLabel}>Potential Penalties</Text>
                  <Text style={[styles.cardValueBig, { color: '#EF4444' }]}>{potentialFine}</Text>
                  <Text style={styles.cardFooterText}>Based on EU AI Act Art. 99</Text>
                </View>
              </View>

              <View style={styles.panel}>
                <View style={styles.panelHeaderRow}>
                  <Text style={styles.panelTitle}>Regulatory Action Items</Text>
                  <TouchableOpacity onPress={generateBoardReport}>
                    <Text style={styles.linkText}>PDF Export ↗</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.tableRow}>
                  <View style={{ flex: 2 }}>
                    <Text style={styles.tdBold}>EU AI Act (High-Risk AI Systems)</Text>
                    <Text style={styles.tdSub}>Classification & Technical Documentation</Text>
                  </View>
                  <View style={styles.statusPillRed}><Text style={styles.statusTextRed}>Critical</Text></View>
                </View>

                <View style={styles.tableRow}>
                  <View style={{ flex: 2 }}>
                    <Text style={styles.tdBold}>NIS2 Cybersecurity Directive</Text>
                    <Text style={styles.tdSub}>Board Liability & 24h Incident Reporting</Text>
                  </View>
                  <View style={styles.statusPillOrange}><Text style={styles.statusTextOrange}>In Progress</Text></View>
                </View>
              </View>
            </View>
          )}

          {activeTab === 'risks' && (
            <View style={styles.panel}>
              <Text style={styles.panelTitle}>Detected Shadow-AI & Non-Compliant Tools</Text>
              <Text style={styles.panelSub}>Applications identified across the corporate network without CISO approval.</Text>

              {riskItems.map((risk) => (
                <View key={risk.id} style={styles.riskCard}>
                  <View style={styles.riskCardTop}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.riskToolTitle}>{risk.tool}</Text>
                      <Text style={styles.riskToolSub}>Division: {risk.owner} • Type: {risk.category}</Text>
                    </View>
                    <View style={styles.riskScoreBadge}>
                      <Text style={styles.riskScoreText}>Risk {risk.riskScore}</Text>
                    </View>
                  </View>
                  <View style={styles.riskCardBottom}>
                    <Text style={styles.riskStatusText}>Status: <Text style={{ color: '#EF4444', fontWeight: '700' }}>{risk.status}</Text></Text>
                    <TouchableOpacity style={styles.blockToolBtn} onPress={() => Alert.alert('Action', `Access blocked.`)}>
                      <Text style={styles.blockToolBtnText}>Block</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          )}

          {activeTab === 'audit' && (
            <View>
              <View style={styles.panel}>
                <Text style={styles.panelTitle}>Active Enterprise Integrations</Text>
                <Text style={styles.panelSub}>Connected cloud infrastructures for compliance monitoring.</Text>

                {integrations.map((item) => (
                  <View key={item.id} style={styles.integrationRow}>
                    <Ionicons name={item.icon} size={18} color="#38BDF8" style={{ marginRight: 10 }} />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.integrationName}>{item.name}</Text>
                      <Text style={styles.integrationStatus}>Status: {item.status} • Latency: {item.latency}</Text>
                    </View>
                    <View style={styles.smallGreenDot} />
                  </View>
                ))}
              </View>

              <View style={styles.panel}>
                <Text style={styles.panelTitle}>Immutable Audit Trail (Log Archive)</Text>
                <Text style={styles.panelSub}>Historical event stream for external auditors.</Text>

                {auditLogs.map((log) => (
                  <View key={log.id} style={styles.logRow}>
                    <Text style={styles.logTimestamp}>{log.timestamp}</Text>
                    <Text style={styles.logEvent}>{log.event}</Text>
                    <Text style={styles.logActor}>Actor: {log.actor}</Text>
                  </View>
                ))}
              </View>
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
  topBar: { backgroundColor: '#0B0F19', paddingVertical: 12, paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: '#1F2937' },
  brandIconBox: { width: 34, height: 34, borderRadius: 8, backgroundColor: '#111827', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#374151' },
  brandTitle: { color: '#F8FAFC', fontSize: 13, fontWeight: '900', letterSpacing: 0.6 },
  brandSub: { color: '#94A3B8', fontSize: 10.5, marginTop: 1, fontWeight: '500' },
  badgeTier: { backgroundColor: 'rgba(56, 189, 248, 0.12)', paddingVertical: 1, paddingHorizontal: 5, borderRadius: 4, borderWidth: 1, borderColor: 'rgba(56, 189, 248, 0.25)' },
  badgeTierText: { color: '#38BDF8', fontSize: 8, fontWeight: '800' },
  topBarRight: { alignItems: 'flex-end', gap: 4 },
  trustBadgesRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  trustBadgeText: { fontSize: 9, color: '#94A3B8', fontWeight: '700' },
  trustBadgeDivider: { fontSize: 9, color: '#475569' },
  secStatusPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#111827', paddingVertical: 3, paddingHorizontal: 8, borderRadius: 12, borderWidth: 1, borderColor: '#374151' },
  greenPulse: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#10B981', marginRight: 6 },
  secStatusText: { color: '#E2E8F0', fontSize: 10, fontWeight: '700' },
  menuBar: { flexDirection: 'row', backgroundColor: '#0B0F19', padding: 4, borderBottomWidth: 1, borderColor: '#1F2937' },
  menuBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 9, borderRadius: 6, gap: 6, backgroundColor: '#0B0F19' },
  menuBtnActive: { backgroundColor: '#111827', borderWidth: 1, borderColor: '#374151' },
  menuText: { color: '#64748B', fontSize: 11.5, fontWeight: '600' },
  menuTextActive: { color: '#F8FAFC', fontWeight: '700' },
  scrollContent: { padding: 14, paddingBottom: 40 },
  execBanner: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0B0F19', borderRadius: 12, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: '#1F2937' },
  execBannerTitle: { fontSize: 13.5, fontWeight: '900', color: '#F8FAFC' },
  execBannerSub: { fontSize: 11, color: '#94A3B8', marginTop: 2 },
  execActionBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(14, 165, 233, 0.12)', paddingVertical: 7, paddingHorizontal: 10, borderRadius: 6, borderWidth: 1, borderColor: 'rgba(14, 165, 233, 0.25)' },
  execActionText: { color: '#0EA5E9', fontSize: 11, fontWeight: '700' },
  simulatorBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(245, 158, 11, 0.08)', borderRadius: 12, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: 'rgba(245, 158, 11, 0.25)' },
  simTitle: { fontSize: 12.5, fontWeight: '800', color: '#F59E0B' },
  simSub: { fontSize: 10.5, color: '#94A3B8', marginTop: 1 },
  simBtn: { backgroundColor: '#F59E0B', paddingVertical: 7, paddingHorizontal: 12, borderRadius: 6 },
  simBtnText: { color: '#000000', fontSize: 11, fontWeight: '800' },
  gridRow: { flexDirection: 'row', gap: 10, marginBottom: 12 },
  cardBox: { flex: 1, backgroundColor: '#0B0F19', borderRadius: 12, padding: 12, borderWidth: 1, borderColor: '#1F2937' },
  cardHeaderLabel: { fontSize: 10.5, color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase' },
  cardValueBig: { fontSize: 22, fontWeight: '900', color: '#F8FAFC', marginTop: 4 },
  cardFooterText: { fontSize: 9.5, color: '#64748B', marginTop: 2 },
  panel: { backgroundColor: '#0B0F19', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#1F2937' },
  panelHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  panelTitle: { fontSize: 14, fontWeight: '800', color: '#F8FAFC' },
  panelSub: { fontSize: 11, color: '#94A3B8', marginTop: 2, marginBottom: 10 },
  linkText: { color: '#38BDF8', fontSize: 11, fontWeight: '700' },
  tableRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderColor: '#111827' },
  tdBold: { fontSize: 12, fontWeight: '700', color: '#F8FAFC' },
  tdSub: { fontSize: 10, color: '#94A3B8', marginTop: 1 },
  statusPillRed: { backgroundColor: 'rgba(239, 68, 68, 0.12)', paddingVertical: 2, paddingHorizontal: 6, borderRadius: 4, borderWidth: 1, borderColor: 'rgba(239, 68, 68, 0.25)' },
  statusTextRed: { color: '#EF4444', fontSize: 9.5, fontWeight: '800' },
  statusPillOrange: { backgroundColor: 'rgba(245, 158, 11, 0.12)', paddingVertical: 2, paddingHorizontal: 6, borderRadius: 4, borderWidth: 1, borderColor: 'rgba(245, 158, 11, 0.25)' },
  statusTextOrange: { color: '#F59E0B', fontSize: 9.5, fontWeight: '800' },
  riskCard: { backgroundColor: '#07090E', borderRadius: 10, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: '#1F2937' },
  riskCardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  riskToolTitle: { fontSize: 12.5, fontWeight: '700', color: '#F8FAFC' },
  riskToolSub: { fontSize: 10.5, color: '#94A3B8', marginTop: 2 },
  riskScoreBadge: { backgroundColor: 'rgba(239, 68, 68, 0.15)', paddingVertical: 3, paddingHorizontal: 8, borderRadius: 6, borderWidth: 1, borderColor: 'rgba(239, 68, 68, 0.3)' },
  riskScoreText: { color: '#EF4444', fontSize: 10, fontWeight: '900' },
  riskCardBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderColor: '#111827', paddingTop: 8 },
  riskStatusText: { fontSize: 10.5, color: '#94A3B8' },
  blockToolBtn: { backgroundColor: '#EF4444', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 6 },
  blockToolBtnText: { color: '#FFFFFF', fontSize: 10, fontWeight: '800' },
  integrationRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#07090E', padding: 10, borderRadius: 8, marginBottom: 6, borderWidth: 1, borderColor: '#1F2937' },
  integrationName: { fontSize: 12, fontWeight: '700', color: '#F8FAFC' },
  integrationStatus: { fontSize: 10, color: '#94A3B8', marginTop: 1 },
  smallGreenDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#10B981' },
  logRow: { backgroundColor: '#07090E', padding: 8, borderRadius: 6, marginBottom: 6, borderWidth: 1, borderColor: '#111827' },
  logTimestamp: { fontSize: 9.5, color: '#38BDF8', fontWeight: '700' },
  logEvent: { fontSize: 11, color: '#E2E8F0', marginTop: 2 },
  logActor: { fontSize: 9.5, color: '#64748B', marginTop: 1, fontStyle: 'italic' },
});
