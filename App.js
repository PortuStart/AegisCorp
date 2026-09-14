import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [tenantName, setTenantName] = useState('Global Logistics & Tech AG (DAX 40)');

  // Live System Integrations
  const [integrations] = useState([
    { id: 'i1', name: 'Microsoft 365 Azure AD', status: 'Synchronized', latency: '12ms' },
    { id: 'i2', name: 'AWS Cloud Europe (Frankfurt)', status: 'Live Scan Active', latency: '24ms' },
    { id: 'i3', name: 'GitHub Enterprise / Repos', status: 'Audit Running', latency: '45ms' },
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

    alert('🚨 Live Corporate Network Alert!\nThe CISO agent has just detected unauthorized data outflow via an employee in R&D. The risk has been recorded in the immutable audit trail.');
  };

  const triggerDeepScan = () => {
    alert('Enterprise Deep-Scan Initiated\nAI scanners are analyzing all active cloud endpoints and browser extensions across the corporate network.');
  };

  const generateBoardReport = () => {
    alert('Executive Board Dossier (PDF/A)\nThe legally binding governance report has been digitally signed and archived in the SEC repository.');
  };

  return (
    <div style={styles.container}>
      {/* Enterprise Top Navigation Bar */}
      <header style={styles.topBar}>
        <div style={styles.flexRow}>
          <div style={styles.brandIconBox}>🛡️</div>
          <div>
            <div style={styles.flexRow}>
              <span style={styles.brandTitle}>NEXUS GOVERNANCE SUITE</span>
              <span style={styles.badgeTier}>V4.8 ENTERPRISE</span>
            </div>
            <div style={styles.brandSub}>Tenant: <strong>{tenantName}</strong></div>
          </div>
        </div>

        <div style={styles.topBarRight}>
          <div style={styles.trustBadgesRow}>
            <span>ISO 27001 Ready</span> • <span>SOC 2 Type II</span>
          </div>
          <div style={styles.secStatusPill}>
            <span style={styles.greenPulse} />
            <span style={styles.secStatusText}>Zero-Trust Active</span>
          </div>
        </div>
      </header>

      {/* Professional Sub-Menu */}
      <nav style={styles.menuBar}>
        <button style={{ ...styles.menuBtn, ...(activeTab === 'overview' ? styles.menuBtnActive : {}) }} onClick={() => setActiveTab('overview')}>
          📊 Executive Overview
        </button>
        <button style={{ ...styles.menuBtn, ...(activeTab === 'risks' ? styles.menuBtnActive : {}) }} onClick={() => setActiveTab('risks')}>
          ⚠️ Shadow-AI & Risks
        </button>
        <button style={{ ...styles.menuBtn, ...(activeTab === 'audit' ? styles.menuBtnActive : {}) }} onClick={() => setActiveTab('audit')}>
          🖥️ Integrations & Logs
        </button>
      </nav>

      {/* Main Content Area */}
      <main style={styles.scrollContent}>
        {activeTab === 'overview' && (
          <div>
            <div style={styles.execBanner}>
              <div>
                <div style={styles.execBannerTitle}>Regulatory Compliance Score: 74.2%</div>
                <div style={styles.execBannerSub}>EU AI Act • NIS2 Directive • GDPR Standard</div>
              </div>
              <button style={styles.execActionBtn} onClick={triggerDeepScan}>🔄 Deep Scan</button>
            </div>

            <div style={styles.simulatorBox}>
              <div>
                <div style={styles.simTitle}>⚡ Live Demo Simulator</div>
                <div style={styles.simSub}>Simulate an unauthorized Shadow-AI data leakage event in the corporation.</div>
              </div>
              <button style={styles.simBtn} onClick={simulateShadowAiDetection}>Simulate Incident</button>
            </div>

            <div style={styles.gridRow}>
              <div style={styles.cardBox}>
                <div style={styles.cardHeaderLabel}>Vulnerable Endpoints</div>
                <div style={styles.cardValueBig}>{riskCount}</div>
                <div style={styles.cardFooterText}>Out of 12,500 active workstations</div>
              </div>
              <div style={styles.cardBox}>
                <div style={styles.cardHeaderLabel}>Potential Penalties</div>
                <div style={{ ...styles.cardValueBig, color: '#EF4444' }}>{potentialFine}</div>
                <div style={styles.cardFooterText}>Based on EU AI Act Art. 99</div>
              </div>
            </div>

            <div style={styles.panel}>
              <div style={styles.panelHeaderRow}>
                <div style={styles.panelTitle}>Regulatory Action Items for the Executive Board</div>
                <span style={styles.linkText} onClick={generateBoardReport}>PDF Export ↗</span>
              </div>

              <div style={styles.tableHeader}>
                <div style={{ flex: 2 }}>Regulatory Standard</div>
                <div style={{ flex: 1 }}>Status</div>
                <div style={{ flex: 1, textAlign: 'right' }}>Deadline</div>
              </div>

              <div style={styles.tableRow}>
                <div style={{ flex: 2 }}>
                  <div style={styles.tdBold}>EU AI Act (High-Risk AI Systems)</div>
                  <div style={styles.tdSub}>Classification & Technical Documentation</div>
                </div>
                <div style={{ flex: 1 }}>
                  <span style={styles.statusPillRed}>Critical</span>
                </div>
                <div style={{ flex: 1, textAlign: 'right', color: '#CBD5E1' }}>In 30 Days</div>
              </div>

              <div style={styles.tableRow}>
                <div style={{ flex: 2 }}>
                  <div style={styles.tdBold}>NIS2 Cybersecurity Directive</div>
                  <div style={styles.tdSub}>Board Liability & 24h Incident Reporting</div>
                </div>
                <div style={{ flex: 1 }}>
                  <span style={styles.statusPillOrange}>In Progress</span>
                </div>
                <div style={{ flex: 1, textAlign: 'right', color: '#CBD5E1' }}>End of Q3</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'risks' && (
          <div style={styles.panel}>
            <div style={styles.panelTitle}>Detected Shadow-AI & Non-Compliant SaaS Tools</div>
            <div style={styles.panelSub}>Applications automatically identified across the corporate network without CISO Office approval.</div>

            {riskItems.map((risk) => (
              <div key={risk.id} style={styles.riskCard}>
                <div style={styles.riskCardTop}>
                  <div>
                    <div style={styles.riskToolTitle}>{risk.tool}</div>
                    <div style={styles.riskToolSub}>Division: {risk.owner} • Type: {risk.category}</div>
                  </div>
                  <span style={styles.riskScoreBadge}>Risk {risk.riskScore}</span>
                </div>
                <div style={styles.riskCardBottom}>
                  <span style={styles.riskStatusText}>Status: <strong style={{ color: '#EF4444' }}>{risk.status}</strong></span>
                  <button style={styles.blockToolBtn} onClick={() => alert(`Access for ${risk.tool} blocked via firewall.`)}>Block Immediately</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'audit' && (
          <div>
            <div style={styles.panel}>
              <div style={styles.panelTitle}>Active Enterprise Integrations</div>
              <div style={styles.panelSub}>Connected cloud infrastructures for automated compliance monitoring.</div>

              {integrations.map((item) => (
                <div key={item.id} style={styles.integrationRow}>
                  <div>
                    <div style={styles.integrationName}>{item.name}</div>
                    <div style={styles.integrationStatus}>Status: {item.status} • Latency: {item.latency}</div>
                  </div>
                  <span style={styles.smallGreenDot} />
                </div>
              ))}
            </div>

            <div style={styles.panel}>
              <div style={styles.panelTitle}>Immutable Audit Trail (Log Archive)</div>
              <div style={styles.panelSub}>Logged historical event stream for external auditors and compliance officers.</div>

              {auditLogs.map((log) => (
                <div key={log.id} style={styles.logRow}>
                  <div style={styles.logTimestamp}>{log.timestamp}</div>
                  <div style={styles.logEvent}>{log.event}</div>
                  <div style={styles.logActor}>Actor: {log.actor}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Pure Web CSS Styles (Kein React Native StyleSheet Objekt nötig)
const styles = {
  container: { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: '#07090E', color: '#F8FAFC', minHeight: '100vh', margin: 0, padding: 0 },
  topBar: { backgroundColor: '#0B0F19', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1F2937' },
  flexRow: { display: 'flex', alignItems: 'center', gap: '10px' },
  brandIconBox: { width: '34px', height: '34px', borderRadius: '8px', backgroundColor: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #374151' },
  brandTitle: { fontSize: '13px', fontWeight: '900', letterSpacing: '0.6px' },
  brandSub: { fontSize: '10.5px', color: '#94A3B8', marginTop: '1px' },
  badgeTier: { backgroundColor: 'rgba(56, 189, 248, 0.12)', padding: '1px 5px', borderRadius: '4px', border: '1px solid rgba(56, 189, 248, 0.25)', fontSize: '8px', fontWeight: '800', color: '#38BDF8' },
  topBarRight: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' },
  trustBadgesRow: { fontSize: '9px', color: '#94A3B8', fontWeight: '700' },
  secStatusPill: { display: 'flex', alignItems: 'center', backgroundColor: '#111827', padding: '3px 8px', borderRadius: '12px', border: '1px solid #374151' },
  greenPulse: { width: '6px', height: '6px', borderRadius: '3px', backgroundColor: '#10B981', marginRight: '6px', display: 'inline-block' },
  secStatusText: { color: '#E2E8F0', fontSize: '10px', fontWeight: '700' },
  menuBar: { display: 'flex', backgroundColor: '#0B0F19', padding: '4px', borderBottom: '1px solid #1F2937' },
  menuBtn: { flex: 1, padding: '9px', borderRadius: '6px', border: 'none', background: 'transparent', color: '#64748B', fontSize: '11.5px', fontWeight: '600', cursor: 'pointer', textAlign: 'center' },
  menuBtnActive: { backgroundColor: '#111827', border: '1px solid #374151', color: '#F8FAFC', fontWeight: '700' },
  scrollContent: { padding: '14px', maxWidth: '900px', margin: '0 auto' },
  execBanner: { backgroundColor: '#0B0F19', borderRadius: '12px', padding: '14px', marginBottom: '10px', border: '1px solid #1F2937', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  execBannerTitle: { fontSize: '13.5px', fontWeight: '900' },
  execBannerSub: { fontSize: '11px', color: '#94A3B8', marginTop: '2px' },
  execActionBtn: { backgroundColor: 'rgba(14, 165, 233, 0.12)', border: '1px solid rgba(14, 165, 233, 0.25)', color: '#0EA5E9', padding: '7px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', cursor: 'pointer' },
  simulatorBox: { backgroundColor: 'rgba(245, 158, 11, 0.08)', borderRadius: '12px', padding: '12px', marginBottom: '12px', border: '1px solid rgba(245, 158, 11, 0.25)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  simTitle: { fontSize: '12.5px', fontWeight: '800', color: '#F59E0B' },
  simSub: { fontSize: '10.5px', color: '#94A3B8', marginTop: '1px' },
  simBtn: { backgroundColor: '#F59E0B', border: 'none', color: '#000', padding: '7px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: '800', cursor: 'pointer' },
  gridRow: { display: 'flex', gap: '10px', marginBottom: '12px' },
  cardBox: { flex: 1, backgroundColor: '#0B0F19', borderRadius: '12px', padding: '12px', border: '1px solid #1F2937' },
  cardHeaderLabel: { fontSize: '10.5px', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase' },
  cardValueBig: { fontSize: '22px', fontWeight: '900', marginTop: '4px' },
  cardFooterText: { fontSize: '9.5px', color: '#64748B', marginTop: '2px' },
  panel: { backgroundColor: '#0B0F19', borderRadius: '12px', padding: '14px', marginBottom: '12px', border: '1px solid #1F2937' },
  panelHeaderRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' },
  panelTitle: { fontSize: '14px', fontWeight: '800' },
  panelSub: { fontSize: '11px', color: '#94A3B8', marginTop: '2px', marginBottom: '10px' },
  linkText: { color: '#38BDF8', fontSize: '11px', fontWeight: '700', cursor: 'pointer' },
  tableHeader: { display: 'flex', paddingBottom: '6px', borderBottom: '1px solid #1F2937', marginBottom: '8px', fontSize: '10px', fontWeight: '800', color: '#64748B', textTransform: 'uppercase' },
  tableRow: { display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #111827' },
  tdBold: { fontSize: '12px', fontWeight: '700' },
  tdSub: { fontSize: '10px', color: '#94A3B8', marginTop: '1px' },
  statusPillRed: { backgroundColor: 'rgba(239, 68, 68, 0.12)', padding: '2px 6px', borderRadius: '4px', border: '1px solid rgba(239, 68, 68, 0.25)', color: '#EF4444', fontSize: '9.5px', fontWeight: '800' },
  statusPillOrange: { backgroundColor: 'rgba(245, 158, 11, 0.12)', padding: '2px 6px', borderRadius: '4px', border: '1px solid rgba(245, 158, 11, 0.25)', color: '#F59E0B', fontSize: '9.5px', fontWeight: '800' },
  riskCard: { backgroundColor: '#07090E', borderRadius: '10px', padding: '12px', marginBottom: '8px', border: '1px solid #1F2937' },
  riskCardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' },
  riskToolTitle: { fontSize: '12.5px', fontWeight: '700' },
  riskToolSub: { fontSize: '10.5px', color: '#94A3B8', marginTop: '2px' },
  riskScoreBadge: { backgroundColor: 'rgba(239, 68, 68, 0.15)', padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#EF4444', fontSize: '10px', fontWeight: '900' },
  riskCardBottom: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #111827', paddingTop: '8px' },
  riskStatusText: { fontSize: '10.5px', color: '#94A3B8' },
  blockToolBtn: { backgroundColor: '#EF4444', border: 'none', color: '#FFFFFF', padding: '5px 10px', borderRadius: '6px', fontSize: '10px', fontWeight: '800', cursor: 'pointer' },
  integrationRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#07090E', padding: '10px', borderRadius: '8px', marginBottom: '6px', border: '1px solid #1F2937' },
  integrationName: { fontSize: '12px', fontWeight: '700' },
  integrationStatus: { fontSize: '10px', color: '#94A3B8', marginTop: '1px' },
  smallGreenDot: { width: '6px', height: '6px', borderRadius: '3px', backgroundColor: '#10B981', display: 'inline-block' },
  logRow: { backgroundColor: '#07090E', padding: '8px', borderRadius: '6px', marginBottom: '6px', border: '1px solid #111827' },
  logTimestamp: { fontSize: '9.5px', color: '#38BDF8', fontWeight: '700' },
  logEvent: { fontSize: '11px', color: '#E2E8F0', marginTop: '2px' },
  logActor: { fontSize: '9.5px', color: '#64748B', marginTop: '1px', fontStyle: 'italic' },
};