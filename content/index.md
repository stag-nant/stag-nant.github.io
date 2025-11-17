---
title: M. Muhil // SYSTEM_ROOT
layout: page
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@700;800;900&display=swap');

  :root {
    --bg: #04070a;
    --bg-2: #060b10;
    --text: #d7ffe0;
    --muted: #9ae8b0;
    --neon: #00ff41;
    --accent: #00d4ff;
    --warn: #ffd700;
    --shadow: rgba(0, 255, 65, 0.4);
    --radius: 12px;
    --card-bg: rgba(0, 25, 0, 0.5);
    --card-border: rgba(0, 255, 65, 0.5);
    --glow: 0 0 20px rgba(0, 255, 65, 0.25), 0 0 40px rgba(0, 255, 65, 0.15);
    --grid: rgba(0, 255, 65, 0.25);
  }

  /* Theme variants */
  body.theme-green {
    --neon: #00ff41;
    --accent: #00d4ff;
    --card-bg: rgba(0, 25, 0, 0.5);
    --grid: rgba(0, 255, 65, 0.25);
  }
  body.theme-purple {
    --neon: #b45cff;
    --accent: #00eaff;
    --card-bg: rgba(18, 0, 28, 0.5);
    --grid: rgba(180, 92, 255, 0.28);
  }
  body.theme-cyan {
    --neon: #00eaff;
    --accent: #00ffb3;
    --card-bg: rgba(0, 24, 28, 0.5);
    --grid: rgba(0, 234, 255, 0.28);
  }

  * { box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    margin: 0;
    font-family: 'Share Tech Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
    color: var(--text);
    background: radial-gradient(1200px 800px at 70% 10%, #0e1f17 0%, var(--bg-2) 40%, var(--bg) 100%);
    background-attachment: fixed;
    overflow-x: hidden;
    letter-spacing: 0.2px;
    scroll-behavior: smooth;
  }

  /* Smooth scrollbar */
  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: #0a0f12; }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(var(--neon), var(--accent));
    border-radius: 6px;
  }

  /* Top progress bar */
  #progress {
    position: fixed; top: 0; left: 0; height: 3px; width: 0%;
    background: linear-gradient(90deg, var(--neon), var(--accent));
    box-shadow: 0 0 12px var(--neon), 0 0 24px var(--accent);
    z-index: 9999;
  }

  /* CRT overlays */
  .scanlines {
    position: fixed; inset: 0; pointer-events: none;
    background:
      linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
      linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.03));
    background-size: 100% 2px, 3px 100%;
    opacity: 0.55;
    z-index: 3000;
  }
  .vignette {
    position: fixed; inset: 0; pointer-events: none; z-index: 2800;
    background: radial-gradient(120% 120% at 50% 50%, transparent 70%, rgba(0,0,0,0.25) 100%);
  }

  /* Matrix canvas + neon grid floor */
  #matrix {
    position: fixed; inset: 0; z-index: 0; opacity: 0.8; pointer-events: none;
  }
  .grid-floor {
    position: fixed; left: 0; right: 0; bottom: -10vh; height: 60vh;
    background:
      linear-gradient(to top, rgba(0,0,0,0.85), transparent 30%),
      repeating-linear-gradient(0deg, transparent 0 18px, var(--grid) 19px 19.5px),
      repeating-linear-gradient(90deg, transparent 0 36px, var(--grid) 37px 37.5px);
    transform: perspective(800px) rotateX(60deg) translateZ(0);
    transform-origin: bottom;
    z-index: 1;
    filter: drop-shadow(0 0 12px var(--grid));
    opacity: 0.6;
  }

  /* Neon cursor */
  .cursor-dot, .cursor-ring {
    position: fixed; top: 0; left: 0; pointer-events: none; z-index: 5000;
    transform: translate(-50%, -50%);
  }
  .cursor-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--neon); box-shadow: 0 0 8px var(--neon);
    opacity: 0.9;
  }
  .cursor-ring {
    width: 32px; height: 32px; border: 2px solid var(--neon); border-radius: 50%;
    box-shadow: 0 0 14px var(--neon);
    transition: width .2s ease, height .2s ease, opacity .2s ease, border-color .2s ease;
    opacity: 0.5;
  }
  a:hover ~ .cursor-ring, button:hover ~ .cursor-ring { border-color: var(--accent); }

  /* Content container */
  .container {
    position: relative; z-index: 10;
    max-width: 1100px; margin: 8rem auto 6rem; padding: 0 20px;
  }

  /* Heading glitch + blink */
  .glitch {
    position: relative; color: var(--neon); font-weight: 900;
    font-family: 'Orbitron', sans-serif; letter-spacing: 1.2px;
    text-shadow: 2px 0 #ff00cc, -2px 0 #00ffff;
    animation: glitch 1.2s infinite linear alternate-reverse;
    display: inline-block;
  }
  @keyframes glitch {
    0% { transform: translate(-1px, 1px); }
    20% { transform: translate(2px, -1px); }
    40% { transform: translate(-2px, 1px); }
    60% { transform: translate(1px, -2px); }
    80% { transform: translate(-1px, -1px); }
    100% { transform: translate(1px, 1px); }
  }
  .blink { animation: blinker 1s linear infinite; color: var(--neon); }
  @keyframes blinker { 50% { opacity: 0; } }

  /* Section titles */
  h2, h3, h4 {
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  /* Cyber box cards */
  .cyber-box {
    position: relative;
    border: 1px solid var(--card-border);
    background: radial-gradient(600px circle at calc(var(--mx, 0.5)*100%) calc(var(--my, 0.5)*100%), rgba(255,255,255,0.06), transparent 40%),
                var(--card-bg);
    backdrop-filter: blur(6px) saturate(120%);
    -webkit-backdrop-filter: blur(6px) saturate(120%);
    padding: 18px 18px 16px;
    margin: 14px 0;
    border-left: 6px solid var(--neon);
    box-shadow: var(--glow);
    border-radius: var(--radius);
    transform-style: preserve-3d;
    transition: transform .15s ease, box-shadow .2s ease, border-color .2s ease;
  }
  .cyber-box h4 { margin: 0 0 8px; color: var(--neon); }
  .cyber-box:hover { box-shadow: 0 0 24px rgba(0,255,65,0.35); }
  .cyber-box.warning { border-color: var(--warn); border-left-color: var(--warn); }
  .cyber-box.warning h4 { color: var(--warn); }

  /* Animated border sweep */
  .cyber-box::after {
    content: '';
    position: absolute; inset: -1.5px; padding: 1.5px; border-radius: calc(var(--radius) + 2px);
    background: conic-gradient(from 0deg, var(--neon), var(--accent), var(--neon));
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    animation: spin 6s linear infinite;
    opacity: 0.18; pointer-events: none;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* Reveal on scroll */
  .reveal { opacity: 0; transform: translateY(14px) scale(0.98); }
  .reveal.show { opacity: 1; transform: translateY(0) scale(1); transition: all .6s cubic-bezier(.2,.6,.2,1); }

  /* Status badge */
  .status-active {
    display: inline-block; padding: 2px 10px; border: 1px solid var(--neon);
    background-color: rgba(0, 255, 65, 0.08);
    box-shadow: 0 0 10px var(--neon);
    animation: pulse 2.2s infinite;
    border-radius: 999px;
  }
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(0, 255, 65, 0.7); }
    70% { box-shadow: 0 0 0 16px rgba(0, 255, 65, 0); }
    100% { box-shadow: 0 0 0 0 rgba(0, 255, 65, 0); }
  }

  /* Table styles */
  table { width: 100%; border-collapse: collapse; overflow: hidden; border-radius: var(--radius); }
  thead tr { background: rgba(0,0,0,0.35); }
  th, td { padding: 10px 12px; border-bottom: 1px solid rgba(255,255,255,0.06); }
  tbody tr:hover { background: rgba(255,255,255,0.03); }

  /* Control panel */
  .control-panel {
    position: fixed; right: 18px; bottom: 18px; z-index: 3500;
    width: 280px; max-width: calc(100vw - 24px);
  }
  .control-panel h4 { margin-bottom: 10px; }
  .control-row { display: flex; align-items: center; justify-content: space-between; margin: 6px 0; gap: 8px; }
  .control-row label { font-size: 12px; color: var(--muted); }
  .control-row input[type="checkbox"] { accent-color: var(--neon); transform: scale(1.1); }
  .control-row select {
    background: rgba(255,255,255,0.05); color: var(--text); border: 1px solid var(--card-border);
    border-radius: 8px; padding: 4px 8px;
  }

  /* Anchor nav */
  .quicknav {
    position: fixed; left: 20px; top: 20px; z-index: 3200;
    display: flex; gap: 8px; flex-wrap: wrap; max-width: 50vw;
  }
  .chip {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 10px; border: 1px solid var(--card-border); color: var(--text);
    background: rgba(255,255,255,0.04); border-radius: 999px; text-decoration: none;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    transition: transform .12s ease, background .2s ease, box-shadow .2s ease;
  }
  .chip:hover { transform: translateY(-1px); background: rgba(255,255,255,0.06); box-shadow: 0 0 18px rgba(0,0,0,0.35); }

  /* Hero */
  .hero { margin-top: 2rem; margin-bottom: 1.5rem; }
  .subtitle { color: var(--muted); margin-top: 6px; }

  /* Buttons */
  .btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 14px; border-radius: 10px; border: 1px solid var(--card-border);
    background: rgba(255,255,255,0.04); color: var(--text); text-decoration: none;
    box-shadow: var(--glow); transition: transform .12s ease, box-shadow .2s ease, background .2s ease;
  }
  .btn:hover { transform: translateY(-2px); background: rgba(255,255,255,0.06); }

  /* Footer links */
  .footer-links { display: flex; gap: 12px; flex-wrap: wrap; }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .glitch, .blink, .status-active, .cyber-box::after { animation: none !important; }
    #matrix, .grid-floor, .scanlines { display: none !important; }
  }
</style>

<!-- Overlays -->
<canvas id="matrix" aria-hidden="true"></canvas>
<div class="grid-floor" aria-hidden="true"></div>
<div class="vignette" aria-hidden="true"></div>
<div class="scanlines" aria-hidden="true"></div>
<div id="progress" aria-hidden="true"></div>
<div class="cursor-dot" aria-hidden="true"></div>
<div class="cursor-ring" aria-hidden="true"></div>

<!-- Quick anchor nav -->
<nav class="quicknav">
  <a class="chip" href="#profile">Profile</a>
  <a class="chip" href="#background">Background</a>
  <a class="chip" href="#credentials">Credentials</a>
  <a class="chip" href="#skills">Skills</a>
  <a class="chip" href="#projects">Projects</a>
  <a class="chip" href="#writeups">Writeups</a>
  <a class="chip" href="#contact">Contact</a>
</nav>

<main class="container">

  <div class="hero">
    <h1 id="top"><span class="glitch">🚩 SYSTEM_READY</span></h1>
    <div class="subtitle">Cyber Operations • Blue Team • SIEM • Threat Hunting</div>
  </div>

  <section id="profile" class="cyber-box reveal tilt">
    <h4>OPERATOR_PROFILE</h4>
    <p>
      <strong>Identity:</strong> Muhil M<br>
      <strong>Class:</strong> Cybersecurity Analyst / Threat Hunter<br>
      <strong>Origin:</strong> Chennai, IN<br>
      <strong>Clearance:</strong> Top 1% TryHackMe (User: <code>lasthacker</code>)<br>
      <strong>Status:</strong> <span class="status-active">ACTIVE / OPEN FOR DEPLOYMENT</span>
    </p>
  </section>

  <hr style="border-color: rgba(255,255,255,0.06); border-style: solid none none; margin: 22px 0;"/>

  <section id="background" class="reveal">
    <h3>📡 Signal Trace (Background) <span class="blink">_</span></h3>
    <div class="cyber-box tilt">
      I bridge the gap between kinetic military operations and digital security.
      <br><br>
      Formerly a <strong>Signaller Communication Specialist</strong> for the <strong>Singapore Armed Forces (35 SCE)</strong>, I operated secure tactical communication systems and managed cryptographic keys in mission-critical scenarios.
      <br><br>
      Now, I apply that same discipline to Cybersecurity. I don't just monitor logs; I hunt for anomalies. My focus is <strong>Blue Team Operations</strong>, <strong>SIEM Architecture</strong>, and <strong>Threat Analysis</strong>.
    </div>
  </section>

  <section id="credentials" class="reveal">
    <h3>🔐 Credentials & Armor</h3>
    <div class="cyber-box tilt">
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
    </div>
  </section>

  <section id="skills" class="reveal">
    <h3>🛠️ System_Configuration (Skills)</h3>
    <div class="cyber-box tilt">
      <pre><code class="language-yaml">skills:
  offensive: [ "Burp Suite", "Metasploit", "Nmap", "LLM Exploitation" ]
  defensive: [ "Wazuh SIEM", "Splunk", "Velociraptor", "Snort/Suricata" ]
  scripting: [ "Python", "Bash", "PowerShell" ]
  research:  "Published Author (IEEE ICCPCT 2025)"</code></pre>
    </div>
  </section>

  <section id="projects" class="reveal">
    <h3>📂 Mission_Logs (Projects)</h3>

    <div class="cyber-box tilt">
      <h4>✅ Project: Home Lab SIEM</h4>
      <p><strong>Objective:</strong> Centralized Log Analysis</p>
      <ul>
        <li>Deployed <strong>Wazuh</strong> with Linux/Windows agents.</li>
        <li>Engineered custom <strong>Sigma</strong> rules to detect suspicious login activity.</li>
        <li>Built Kibana dashboards for real-time threat visualization.</li>
      </ul>
    </div>

    <div class="cyber-box tilt">
      <h4>🧭 Project: SOC Operations (Use-Cases & Playbooks)</h4>
      <p><strong>Objective:</strong> Operational Detection & Response</p>
      <ul>
        <li>Authored triage/runbooks for phishing, brute-force, malware, and lateral movement.</li>
        <li>Created Splunk correlation searches; mapped detections to <strong>MITRE ATT&CK</strong>.</li>
        <li>Reduced MTTD/MTTR by tuning noise and enriching alerts with context.</li>
      </ul>
    </div>

    <div class="cyber-box tilt">
      <h4>🛡️ Project: SOAR & EDR Integration (SOAR Lab)</h4>
      <p><strong>Objective:</strong> Automated Incident Response</p>
      <ul>
        <li>Integrated <strong>TheHive</strong>, <strong>Cortex</strong>, and <strong>Velociraptor</strong>.</li>
        <li>Automated alert enrichment, file-hash lookups, and IOC pivoting.</li>
      </ul>
    </div>

    <div class="cyber-box warning tilt">
      <h4>⚠️ Project: LLM Vulnerability Research</h4>
      <p><strong>Objective:</strong> Offensive AI Testing</p>
      <ul>
        <li><strong>Publication:</strong> Presented at IEEE International Conference (2025).</li>
        <li>Analyzed and exploited security flaws in Large Language Models.</li>
      </ul>
    </div>

    <div class="cyber-box tilt">
      <h4>🔎 Project: Safecode-Scanner</h4>
      <p><strong>Objective:</strong> Static Analysis Tool</p>
      <ul>
        <li>Developed a Python-based scanner to detect hardcoded credentials and secrets.</li>
      </ul>
    </div>

    <div class="cyber-box tilt">
      <h4>🐝 Project: Cowrie Honeypot</h4>
      <p><strong>Objective:</strong> Threat Intelligence</p>
      <ul>
        <li>Deployed SSH honeypot to capture unauthorized login attempts and TTPs.</li>
        <li>Scripted real-time Slack alerts for attacker behavior and IOC collection.</li>
      </ul>
    </div>

  </section>

  <section id="writeups" class="reveal">
    <h3>📝 Latest Writeups</h3>
    <div class="cyber-box tilt">
      <ul>
        <li>[[Expressway Writeup (FINAL)]]</li>
        <li>[[IDOR WRITEUP]]</li>
        <li>[[SSRF WRITEUP (FINAL)]]</li>
      </ul>
    </div>
  </section>

  <section id="contact" class="reveal">
    <h3>🔗 Links</h3>
    <div class="cyber-box tilt footer-links">
      <a class="btn" href="https://linkedin.com/in/muhilm" target="_blank" rel="noopener">LinkedIn</a>
      <a class="btn" href="https://github.com/stag-nant" target="_blank" rel="noopener">GitHub</a>
      <a class="btn" href="mailto:muhilm6@gmail.com">Email</a>
    </div>
  </section>

</main>

<!-- Control Panel -->
<div class="control-panel cyber-box reveal" id="controls">
  <h4>⚙️ Visual Controls</h4>
  <div class="control-row">
    <label for="toggle-matrix">Matrix Rain</label>
    <input type="checkbox" id="toggle-matrix" checked />
  </div>
  <div class="control-row">
    <label for="toggle-scan">CRT Scanlines</label>
    <input type="checkbox" id="toggle-scan" checked />
  </div>
  <div class="control-row">
    <label for="toggle-cursor">Neon Cursor</label>
    <input type="checkbox" id="toggle-cursor" checked />
  </div>
  <div class="control-row">
    <label for="toggle-tilt">3D Tilt/Shine</label>
    <input type="checkbox" id="toggle-tilt" checked />
  </div>
  <div class="control-row">
    <label for="theme-select">Theme</label>
    <select id="theme-select">
      <option value="green">Neon Green</option>
      <option value="purple">Ultra Violet</option>
      <option value="cyan">Cyber Cyan</option>
    </select>
  </div>
</div>

<script>
(function() {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Elements
  const matrix = document.getElementById('matrix');
  const scanlines = document.querySelector('.scanlines');
  const grid = document.querySelector('.grid-floor');
  const progress = document.getElementById('progress');
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  const controls = {
    matrix: document.getElementById('toggle-matrix'),
    scan: document.getElementById('toggle-scan'),
    cursor: document.getElementById('toggle-cursor'),
    tilt: document.getElementById('toggle-tilt'),
    theme: document.getElementById('theme-select'),
  };

  // Persist settings
  const storeKey = 'cyber-settings-v2';
  const defaultSettings = { matrix: true, scan: true, cursor: true, tilt: true, theme: 'green' };
  const saved = JSON.parse(localStorage.getItem(storeKey) || 'null') || defaultSettings;

  // Apply saved settings
  controls.matrix.checked = !!saved.matrix;
  controls.scan.checked = !!saved.scan;
  controls.cursor.checked = !!saved.cursor;
  controls.tilt.checked = !!saved.tilt;
  controls.theme.value = saved.theme || 'green';
  applyTheme(saved.theme || 'green');

  function saveSettings() {
    const s = {
      matrix: controls.matrix.checked,
      scan: controls.scan.checked,
      cursor: controls.cursor.checked,
      tilt: controls.tilt.checked,
      theme: controls.theme.value
    };
    localStorage.setItem(storeKey, JSON.stringify(s));
  }

  // Reading progress
  const onScroll = () => {
    const doc = document.documentElement;
    const total = doc.scrollHeight - doc.clientHeight;
    const scrolled = (doc.scrollTop || document.body.scrollTop) / (total || 1);
    progress.style.width = (scrolled * 100).toFixed(2) + '%';
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.1 });
  revealEls.forEach(el => io.observe(el));

  // 3D tilt + shine for cards
  let tiltEnabled = !prefersReduced && controls.tilt.checked;
  const tiltCards = Array.from(document.querySelectorAll('.tilt'));
  const maxRotate = 8; // deg
  function handleTilt(e) {
    if (!tiltEnabled) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * maxRotate;
    const ry = (x - 0.5) * maxRotate;
    el.style.setProperty('--mx', x);
    el.style.setProperty('--my', y);
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  }
  function leaveTilt(e) {
    const el = e.currentTarget;
    el.style.transform = 'rotateX(0) rotateY(0)';
  }
  function bindTilt(bind) {
    tiltCards.forEach(el => {
      el.style.willChange = bind ? 'transform' : 'auto';
      if (bind) {
        el.addEventListener('pointermove', handleTilt);
        el.addEventListener('pointerleave', leaveTilt);
      } else {
        el.removeEventListener('pointermove', handleTilt);
        el.removeEventListener('pointerleave', leaveTilt);
        el.style.transform = 'none';
      }
    });
  }
  bindTilt(tiltEnabled);

  // Matrix rain
  let matrixEnabled = !prefersReduced && controls.matrix.checked;
  let ctx = null, width = 0, height = 0, fontSize = 16, columns = 0, drops = [];
  const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function matrixResize() {
    if (!matrixEnabled) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = matrix.width = window.innerWidth * dpr;
    height = matrix.height = window.innerHeight * dpr;
    matrix.style.width = window.innerWidth + 'px';
    matrix.style.height = window.innerHeight + 'px';
    ctx = matrix.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    fontSize = 16;
    columns = Math.floor(window.innerWidth / fontSize);
    drops = Array(columns).fill(1);
  }
  function matrixDraw() {
    if (!matrixEnabled || prefersReduced) return;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--neon').trim();
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctx.fillText(text, x, y);
      if (y > window.innerHeight && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    requestAnimationFrame(matrixDraw);
  }

  // Start matrix
  if (matrixEnabled) {
    matrixResize();
    requestAnimationFrame(matrixDraw);
    window.addEventListener('resize', matrixResize);
  }

  // Neon cursor
  let cursorEnabled = !prefersReduced && controls.cursor.checked;
  let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  let rx = cx, ry = cy;
  function moveCursor(e) {
    if (!cursorEnabled) return;
    cx = e.clientX; cy = e.clientY;
    cursorDot.style.transform = `translate(${cx}px, ${cy}px)`;
  }
  function animateRing() {
    if (!cursorEnabled) {
      cursorRing.style.opacity = '0';
      cursorDot.style.opacity = '0';
      return;
    }
    rx += (cx - rx) * 0.2; ry += (cy - ry) * 0.2;
    cursorRing.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(animateRing);
  }
  if (cursorEnabled) {
    document.addEventListener('pointermove', moveCursor, { passive: true });
    animateRing();
  } else {
    cursorRing.style.display = 'none';
    cursorDot.style.display = 'none';
  }

  // Scanlines toggle helper
  function setScanlines(on) {
    scanlines.style.display = on ? 'block' : 'none';
    grid.style.display = on ? 'block' : 'none';
  }

  // Theme
  function applyTheme(name) {
    document.body.classList.remove('theme-green', 'theme-purple', 'theme-cyan');
    const cls = name === 'purple' ? 'theme-purple' : name === 'cyan' ? 'theme-cyan' : 'theme-green';
    document.body.classList.add(cls);
  }

  // Bind control changes
  controls.matrix.addEventListener('change', () => {
    matrixEnabled = controls.matrix.checked && !prefersReduced;
    if (matrixEnabled) {
      matrix.style.display = 'block';
      matrixResize();
      requestAnimationFrame(matrixDraw);
      window.addEventListener('resize', matrixResize);
    } else {
      matrix.style.display = 'none';
      window.removeEventListener('resize', matrixResize);
    }
    saveSettings();
  });

  controls.scan.addEventListener('change', () => {
    setScanlines(controls.scan.checked && !prefersReduced);
    saveSettings();
  });
  setScanlines(controls.scan.checked && !prefersReduced);

  controls.cursor.addEventListener('change', () => {
    cursorEnabled = controls.cursor.checked && !prefersReduced;
    if (cursorEnabled) {
      cursorRing.style.display = 'block';
      cursorDot.style.display = 'block';
      document.addEventListener('pointermove', moveCursor, { passive: true });
      animateRing();
    } else {
      cursorRing.style.display = 'none';
      cursorDot.style.display = 'none';
      document.removeEventListener('pointermove', moveCursor);
    }
    saveSettings();
  });

  controls.tilt.addEventListener('change', () => {
    tiltEnabled = controls.tilt.checked && !prefersReduced;
    bindTilt(tiltEnabled);
    saveSettings();
  });

  controls.theme.addEventListener('change', () => {
    applyTheme(controls.theme.value);
    saveSettings();
  });

  // Accessibility: disable heavy effects if user prefers reduced motion
  if (prefersReduced) {
    if (matrix) matrix.style.display = 'none';
    setScanlines(false);
    cursorRing.style.display = 'none';
    cursorDot.style.display = 'none';
  }

})();
</script>
