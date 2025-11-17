---
title: M. Muhil // SYSTEM_ROOT
layout: page
---

<style>
  /* 1. CRT SCANLINE & BACKGROUND EFFECTS */
  .scanlines {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background-size: 100% 2px, 3px 100%;
    pointer-events: none; z-index: 999; opacity: 0.6;
  }
  
  /* 2. ANIMATIONS */
  .glitch {
    position: relative; color: #00FF41; font-weight: bold;
    text-shadow: 2px 0 #FF00CC, -2px 0 #00FFFF;
    animation: glitch 1s infinite linear alternate-reverse;
  }
  @keyframes glitch {
    0%   { transform: translate(-2px, 1px); }
    20%  { transform: translate(2px, -1px); }
    40%  { transform: translate(-2px, 2px); }
    60%  { transform: translate(2px, -2px); }
    80%  { transform: translate(-1px, 1px); }
    100% { transform: translate(1px, -1px); }
  }
  .blink { animation: blinker 1s linear infinite; color: #00FF41; }
  @keyframes blinker { 50% { opacity: 0; } }

  /* 3. CUSTOM PROJECT BOXES */
  .cyber-box {
    border: 1px solid #00FF41;
    background: rgba(0, 20, 0, 0.6);
    padding: 15px;
    margin-bottom: 15px;
    border-left: 5px solid #00FF41;
    box-shadow: 0 0 5px rgba(0, 255, 65, 0.2);
  }
  .cyber-box h4 { margin-top: 0; color: #00FF41; text-transform: uppercase; }
  .cyber-box.warning { border-color: #FFD700; border-left-color: #FFD700; color: #FFF; }
  .cyber-box.warning h4 { color: #FFD700; }

  /* 4. BADGES */
  .status-active {
    padding: 2px 8px; border: 1px solid #00FF41;
    background-color: rgba(0, 255, 65, 0.1);
    box-shadow: 0 0 10px #00FF41;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(0, 255, 65, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(0, 255, 65, 0); }
    100% { box-shadow: 0 0 0 0 rgba(0, 255, 65, 0); }
  }
</style>

<div class="scanlines"></div>

# <span class="glitch">🚩 SYSTEM_READY</span>

<div class="cyber-box">
  <h4>OPERATOR_PROFILE</h4>
  <p>
    <strong>Identity:</strong> Muhil M<br>
    <strong>Class:</strong> Cybersecurity Analyst / Threat Hunter<br>
    <strong>Origin:</strong> Chennai, IN<br>
    <strong>Clearance:</strong> Top 1% TryHackMe (User: <code>lasthacker</code>)<br>
    <strong>Status:</strong> <span class="status-active">ACTIVE / OPEN FOR DEPLOYMENT</span>
  </p>
</div>

---

### 📡 Signal Trace (Background) <span class="blink">_</span>

I bridge the gap between kinetic military operations and digital security.

Formerly a <strong>Signaller Communication Specialist</strong> for the <strong>Singapore Armed Forces (35 SCE)</strong>, I operated secure tactical communication systems and managed cryptographic keys in mission-critical scenarios.

Now, I apply that same discipline to Cybersecurity. I don't just monitor logs; I hunt for anomalies. My focus is <strong>Blue Team Operations</strong>, <strong>SIEM Architecture</strong>, and <strong>Threat Analysis</strong>.

---

### 🔐 Credentials & Armor
<table>
  <thead>
    <tr><th>CERTIFICATION</th><th>ID / STATUS</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>CompTIA Security+</strong></td><td><span class="status-active">✅ Verified</span></td></tr>
    <tr><td><strong>CompTIA Network+</strong></td><td><span class="status-active">✅ Verified</span></td></tr>
    <tr><td><strong>AWS Cloud Practitioner</strong></td><td><span class="status-active">✅ Verified</span></td></tr>
    <tr><td><strong>B.Tech Cybersecurity</strong></td><td>🎓 9.7 CGPA (SRM Institute)</td></tr>
  </tbody>
</table>

---

### 🛠️ System_Configuration (Skills)

~~~yaml
skills:
  offensive: [ "Burp Suite", "Metasploit", "Nmap", "LLM Exploitation" ]
  defensive: [ "Wazuh SIEM", "Splunk", "Velociraptor", "Snort/Suricata" ]
  scripting: [ "Python", "Bash", "PowerShell" ]
  research:  "Published Author (IEEE ICCPCT 2025)"
~~~

-----

### 📂 Mission_Logs (Projects)

<div class="cyber-box">
  <h4>✅ Project: Home Lab SIEM</h4>
  <p><strong>Objective:</strong> Centralized Log Analysis</p>
  <ul>
    <li>Deployed <strong>Wazuh</strong> with Linux/Windows agents.</li>
    <li>Engineered custom <strong>Sigma</strong> rules to detect suspicious login activity.</li>
    <li>Built Kibana dashboards for real-time threat visualization.</li>
  </ul>
</div>

<div class="cyber-box">
  <h4>🧭 Project: SOC Operations (Use-Cases & Playbooks)</h4>
  <p><strong>Objective:</strong> Operational Detection & Response</p>
  <ul>
    <li>Authored triage/runbooks for phishing, brute-force, malware, and lateral movement.</li>
    <li>Created Splunk correlation searches; mapped detections to <strong>MITRE ATT&CK</strong>.</li>
    <li>Drove MTTD/MTTR reduction by tuning noise and enriching alerts with context.</li>
  </ul>
</div>

<div class="cyber-box">
  <h4>🛡️ Project: SOAR & EDR Integration (SOAR Lab)</h4>
  <p><strong>Objective:</strong> Automated Incident Response</p>
  <ul>
    <li>Integrated <strong>TheHive</strong>, <strong>Cortex</strong>, and <strong>Velociraptor</strong>.</li>
    <li>Designed automation for alert enrichment, file-hash lookups, and IOC pivoting.</li>
  </ul>
</div>

<div class="cyber-box warning">
  <h4>⚠️ Project: LLM Vulnerability Research</h4>
  <p><strong>Objective:</strong> Offensive AI Testing</p>
  <ul>
    <li><strong>Publication:</strong> Presented at IEEE International Conference (2025).</li>
    <li>Analyzed and exploited security flaws in Large Language Models.</li>
  </ul>
</div>

<div class="cyber-box">
  <h4>🔎 Project: Safecode-Scanner</h4>
  <p><strong>Objective:</strong> Static Analysis Tool</p>
  <ul>
    <li>Developed a Python-based scanner to detect hardcoded credentials and secrets.</li>
  </ul>
</div>

<div class="cyber-box">
  <h4>🐝 Project: Cowrie Honeypot</h4>
  <p><strong>Objective:</strong> Threat Intelligence</p>
  <ul>
    <li>Deployed SSH honeypot to capture unauthorized login attempts and TTPs.</li>
    <li>Scripted real-time Slack alerts for attacker behavior and IOC collection.</li>
  </ul>
</div>

-----

### 📝 Latest Writeups

- [[Expressway Writeup (FINAL)]]
- [[IDOR WRITEUP]]
- [[SSRF WRITEUP (FINAL)]]

-----

End of transmission.  
[LinkedIn](https://linkedin.com/in/muhilm) | [GitHub](https://github.com/stag-nant) | [Email](mailto:muhilm6@gmail.com)

