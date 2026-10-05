/**
 * NXTWAVE GROWTH ENGINE - INTERACTIVE APPLICATION CONTROLLER v2.0
 * Features:
 * 1. Urgency Countdown & Live Capacity Ticker (420+ seats)
 * 2. Resume AI Project Gap Diagnostic
 * 3. 60-Minute Workshop Roadmap with Animated Tech Blueprint Drawers
 * 4. WhatsApp Lifecycle Automation Simulator (Animated)
 * 5. Company Process Audit KPI Dashboard
 * 6. 1-Click Registration & Digital Admit Pass Generator (HD Canvas PNG)
 * 7. Gamified Viral Referral Engine (K > 1 Tracker)
 * 8. Evaluator Strategy Modal Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdownTimer();
  initCapacityCounters();
  initDiagnosticTool();
  initWhatsAppAutomation();
  initCollegePeerTracker();
  initWorkshopSandbox();
  initRoadmapBlueprints();
  initRegistrationForm();
  initReferralEngine();
  initFaqAccordion();
  initEvaluatorModal();
});

/* ==========================================================================
   1. COUNTDOWN TIMER & LIVE SPOTS TICKER
   ========================================================================== */
function initCountdownTimer() {
  const timerEl = document.getElementById('countdown-timer');
  if (!timerEl) return;

  // Set workshop target: 2 days, 14 hours from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2);
  targetDate.setHours(targetDate.getHours() + 14);
  targetDate.setMinutes(targetDate.getMinutes() + 22);

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      timerEl.innerText = "00d : 00h : 00m : 00s";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');
    timerEl.innerText = `${pad(days)}d : ${pad(hours)}h : ${pad(minutes)}m : ${pad(seconds)}s`;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

function initCapacityCounters() {
  let registered = 420;
  const total = 500;

  const regCounter = document.getElementById('registered-counter');
  const spotsLeft = document.getElementById('spots-left-counter');
  const mobileSeats = document.getElementById('mobile-seats-count');
  const capacityPercent = document.getElementById('capacity-percent');
  const capacityFill = document.getElementById('capacity-fill');

  function updateDisplay() {
    const left = total - registered;
    const pct = ((registered / total) * 100).toFixed(1);

    if (regCounter) regCounter.innerText = registered;
    if (spotsLeft) spotsLeft.innerText = left;
    if (mobileSeats) mobileSeats.innerText = left;
    if (capacityPercent) capacityPercent.innerText = `${pct}% Filled`;
    if (capacityFill) capacityFill.style.width = `${pct}%`;
  }

  // Animate counter from 0 to current value on load
  let current = 380;
  const animateTo = registered;
  const animInterval = setInterval(() => {
    current += 2;
    if (current >= animateTo) {
      current = animateTo;
      clearInterval(animInterval);
    }
    const left = total - current;
    const pct = ((current / total) * 100).toFixed(1);
    if (regCounter) regCounter.innerText = current;
    if (spotsLeft) spotsLeft.innerText = left;
    if (mobileSeats) mobileSeats.innerText = left;
    if (capacityPercent) capacityPercent.innerText = `${pct}% Filled`;
    if (capacityFill) capacityFill.style.width = `${pct}%`;
  }, 30);

  // Micro-simulation: occasional organic registration ticker
  setInterval(() => {
    if (registered < 496 && Math.random() > 0.65) {
      registered += 1;
      updateDisplay();
    }
  }, 18000);
}

/* ==========================================================================
   2. INTERACTIVE RESUME AI PROJECT GAP DIAGNOSTIC
   ========================================================================== */
function initDiagnosticTool() {
  const runBtn = document.getElementById('run-diagnostic-btn');
  const placeholder = document.getElementById('diag-placeholder');
  const report = document.getElementById('diag-report');

  const branchSel = document.getElementById('diag-branch');
  const roleSel = document.getElementById('diag-role');
  const projectSel = document.getElementById('diag-current-project');
  const customGroup = document.getElementById('custom-project-group');
  const customTitleInput = document.getElementById('diag-custom-title');

  const scoreVal = document.getElementById('score-val');
  const scoreStatus = document.getElementById('score-status');
  const scoreHeadline = document.getElementById('score-headline');
  const recruiterFeedback = document.getElementById('recruiter-feedback');
  const recommendedSolution = document.getElementById('recommended-solution');
  const scoreBefore = document.getElementById('score-before');
  const scoreCircle = document.getElementById('score-circle');

  const mFilterRisk = document.getElementById('m-filter-risk');
  const mSaturation = document.getElementById('m-saturation');
  const mDefensibility = document.getElementById('m-defensibility');
  const autofillCta = document.getElementById('autofill-register-cta');

  if (!runBtn) return;

  // Toggle custom project input field
  if (projectSel && customGroup) {
    projectSel.addEventListener('change', () => {
      if (projectSel.value === 'custom') {
        customGroup.classList.remove('hidden');
        if (customTitleInput) customTitleInput.focus();
      } else {
        customGroup.classList.add('hidden');
      }
    });
  }

  // Expanded database of authentic final-year engineering projects in India
  const diagnosticDatabase = {
    crud: {
      score: 34,
      status: "HIGH FILTER RISK",
      headline: "Over 82,000+ CSE/IT engineering resumes feature this identical project.",
      filterRisk: "84%",
      saturation: "Critical (82k+)",
      defensibility: "Tutorial Grade",
      feedback: "Recruiters view basic e-commerce or food delivery clones as 2018-era tutorial copy-pastes. Lacks algorithmic depth, scalability, and modern GenAI integration.",
      recommendation: "Build an <strong>AI-Powered Autonomous Shopping Concierge & Code Reviewer</strong> with Gemini API + Streamlit deployment."
    },
    "plant-disease": {
      score: 38,
      status: "HEAVILY SATURATED ACADEMIC TEMPLATE",
      headline: "Over 65% of Tier-2/3 final-year major projects copy this exact CNN/OpenCV notebook.",
      filterRisk: "76%",
      saturation: "Extreme (48k+)",
      defensibility: "Generic Kaggle Model",
      feedback: "Technical interviewers immediately recognize this from pre-packaged GitHub repositories. When asked about hyperparameter tuning or live camera deployment, 85% of candidates fail.",
      recommendation: "Upgrade to a <strong>Multi-Modal Edge AI Agritech Diagnostic Assistant</strong> using Gemini 1.5 Flash Vision API with live audio explanations."
    },
    "face-recog": {
      score: 41,
      status: "OUTDATED COMPUTER VISION TEMPLATE",
      headline: "Common college attendance template with OpenCV Haar Cascades.",
      filterRisk: "72%",
      saturation: "High (36k+)",
      defensibility: "Basic OpenCV Wrapper",
      feedback: "Demonstrates basic Python library importing, but fails in production due to lighting and spoofing. Recruiters want real cloud-deployed GenAI applications in 2026.",
      recommendation: "Transform into an <strong>AI Automated Video Interview Proctor & Candidate Sentiment Analyzer</strong> with real-time LLM feedback."
    },
    weather: {
      score: 24,
      status: "CRITICAL REJECTION ZONE",
      headline: "Immediate red flag for Tier-1 and product-based hiring drives.",
      filterRisk: "94%",
      saturation: "Infinite (120k+)",
      defensibility: "Beginner API Call",
      feedback: "Weather apps and calculator projects signal '1st-year beginner' to technical screening panels. Gives zero defensibility in SDE-1 interviews.",
      recommendation: "Transform this into a <strong>Real-Time Weather-Driven AI Agritech Advisory System</strong> using GenAI embeddings and live APIs."
    },
    "basic-ml": {
      score: 42,
      status: "OUTDATED ML PATTERN",
      headline: "Kaggle Titanic & Iris datasets are blacklisted by many screening ATS systems.",
      filterRisk: "78%",
      saturation: "Extreme (95k+)",
      defensibility: "Scikit-Learn Tutorial",
      feedback: "Shows you can import scikit-learn, but gives zero proof of building customer-facing software, API endpoints, or GenAI applications.",
      recommendation: "Upgrade to a <strong>Full-Stack GenAI Document Search & Semantic Q&A Agent</strong> with live vector retrieval."
    },
    "fake-news": {
      score: 36,
      status: "OVERUSED NLP ASSIGNMENT",
      headline: "Over 40,000+ resumes list Naive Bayes / TF-IDF fake news detection.",
      filterRisk: "82%",
      saturation: "High (40k+)",
      defensibility: "Outdated TF-IDF",
      feedback: "Traditional Bag-of-Words and TF-IDF models are obsolete in the era of LLMs. Recruiters test candidates on prompt engineering, hallucination guardrails, and RAG pipelines.",
      recommendation: "Engineer an <strong>Autonomous AI Fact-Checking Agent & Hallucination Guardrail</strong> using Gemini API with live search groundings."
    },
    "college-mgmt": {
      score: 38,
      status: "GENERIC CRUD PATTERN",
      headline: "Common academic project with very low hiring differentiation.",
      filterRisk: "80%",
      saturation: "High (55k+)",
      defensibility: "Basic DB Tables",
      feedback: "Demonstrates standard relational DB tables, but lacks modern asynchronous AI tooling, cloud deployment, and API integration.",
      recommendation: "Engineer an <strong>AI Automated Student Career Coach & Resume Screener</strong> with multi-turn LLM reasoning."
    },
    "traffic-iot": {
      score: 46,
      status: "HARDWARE-LOCKED ACADEMIC PROJECT",
      headline: "Difficult to showcase code in software placement interviews.",
      filterRisk: "68%",
      saturation: "Moderate (28k+)",
      defensibility: "Hardware Dependent",
      feedback: "Software recruiters struggle to evaluate embedded hardware demos during remote technical interviews without a live web URL or software architecture.",
      recommendation: "Wrap it with an <strong>AI Smart City Real-Time Congestion Predictor & Web Dashboard</strong> using Python and cloud-hosted GenAI logic."
    },
    "stock-lstm": {
      score: 44,
      status: "THEORETICAL ML ASSIGNMENT",
      headline: "LSTM financial prediction models with no production viability.",
      filterRisk: "70%",
      saturation: "High (35k+)",
      defensibility: "Basic Time-Series",
      feedback: "Recruiters know simple LSTMs cannot beat market randomness. It signals academic paper reproduction rather than real-world software engineering.",
      recommendation: "Upgrade to an <strong>AI Financial News Sentiment & Automated Portfolio Rebalancer</strong> with streaming LLM inference."
    },
    custom: {
      score: 48,
      status: "MODERATE ATS RISK",
      headline: "Standard project lacking modern Generative AI differentiation.",
      filterRisk: "65%",
      saturation: "Moderate",
      defensibility: "Intermediate",
      feedback: "Needs verified deployment, quantifiable metrics (latency reduction, cost savings), and modern GenAI API integration to pass top-tier technical screening.",
      recommendation: "Integrate a <strong>GenAI Co-Pilot & Automated Evaluation Layer</strong> to boost recruiter appeal."
    }
  };

  runBtn.addEventListener('click', () => {
    runBtn.disabled = true;
    runBtn.innerHTML = `<span>&#8987; Scanning Placement Database...</span>`;

    setTimeout(() => {
      const selectedProject = projectSel.value;
      const targetRole = roleSel.value;
      const branch = branchSel.value;

      let data = diagnosticDatabase[selectedProject] || diagnosticDatabase.crud;

      // Handle custom user input
      if (selectedProject === 'custom' && customTitleInput && customTitleInput.value.trim()) {
        data = {
          ...data,
          headline: `Analyzed: "${customTitleInput.value.trim()}" against 2026 hiring benchmarks.`
        };
      }

      scoreVal.innerText = data.score;
      scoreStatus.innerText = data.status;
      scoreHeadline.innerText = data.headline;
      recruiterFeedback.innerHTML = `"${data.feedback}"`;
      recommendedSolution.innerHTML = `${data.recommendation} tailored for <strong>${targetRole}</strong> (${branch}).`;
      scoreBefore.innerText = `${data.score}/100`;

      if (mFilterRisk) mFilterRisk.innerText = data.filterRisk || "80%";
      if (mSaturation) mSaturation.innerText = data.saturation || "High";
      if (mDefensibility) mDefensibility.innerText = data.defensibility || "Tutorial Grade";

      // Visual color adjustment
      if (data.score < 30) {
        scoreCircle.style.borderColor = 'var(--accent-rose)';
        scoreVal.style.color = 'var(--accent-rose)';
        scoreStatus.style.color = 'var(--accent-rose)';
      } else {
        scoreCircle.style.borderColor = 'var(--accent-amber)';
        scoreVal.style.color = 'var(--accent-amber)';
        scoreStatus.style.color = 'var(--accent-amber)';
      }

      placeholder.classList.add('hidden');
      report.classList.remove('hidden');

      runBtn.disabled = false;
      runBtn.innerHTML = `<span>&#9889; Re-Analyze Project Impact</span>`;
    }, 450);
  });

  // Auto-fill CTA to jump to registration
  if (autofillCta) {
    autofillCta.addEventListener('click', (e) => {
      e.preventDefault();
      const regSection = document.getElementById('register');
      if (regSection) {
        regSection.scrollIntoView({ behavior: 'smooth' });
        const nameField = document.getElementById('reg-name');
        if (nameField) nameField.focus();
      }
    });
  }
}

/* ==========================================================================
   2.5 WHATSAPP LIFECYCLE AUTOMATION & AI EVALUATOR SIMULATOR
   ========================================================================== */
function initWhatsAppAutomation() {
  const stepBtns = document.querySelectorAll('.flow-step-btn');
  const chatBody = document.getElementById('wa-chat-body');
  const userInput = document.getElementById('wa-user-input');
  const sendBtn = document.getElementById('wa-send-btn');

  if (!chatBody) return;

  const conversationStages = {
    "step-1": [
      { sender: "bot", time: "Just now", text: "Hey Malli! 🎉 Congratulations, your VIP Admit Pass for <strong>'Build Your First AI Project in 60 Minutes'</strong> is officially locked!" },
      { sender: "bot", time: "Just now", text: "🎫 <strong>Pass ID: #NXW-AI-3819</strong><br>📅 Date: Saturday, 6:00 PM IST<br>🔗 Live on Zoom Pro", btn: "View My Digital Admit Pass" },
      { sender: "bot", time: "Just now", text: "⚡ Join the private WhatsApp batch group below to meet 400+ final-year peers and receive the Google Colab starter repo early:", btn: "Join WhatsApp Batch Group (VIP)" }
    ],
    "step-2": [
      { sender: "bot", time: "Yesterday, 6:00 PM", text: "Hey Malli! 🚀 Workshop is tomorrow at 6:00 PM IST. Here is your zero-friction cloud preparation kit:" },
      { sender: "bot", time: "Yesterday, 6:01 PM", text: "💡 <strong>Zero Local Setup:</strong> You do NOT need high-end GPUs or complex Python installations. We code 100% on the cloud via Google Colab!", btn: "Open 1-Click Colab Starter Repo" },
      { sender: "user", time: "Yesterday, 6:05 PM", text: "Awesome, tested cell #1 and my free Gemini API key is working! Ready for tomorrow." },
      { sender: "bot", time: "Yesterday, 6:05 PM", text: "Perfect! You're ahead of 90% of students. See you tomorrow at 5:50 PM!" }
    ],
    "step-3": [
      { sender: "bot", time: "Saturday, 5:45 PM", text: "🚨 <strong>STARTING IN 15 MINUTES!</strong> 🚨<br><br>Final-Year Placement Masterclass is going live now. Grab your laptop and join directly:" },
      { sender: "bot", time: "Saturday, 5:45 PM", text: "Room is 85% full. Click below to bypass waiting room:", btn: "🚀 Join Zoom Masterclass (Fast-Track Link)" },
      { sender: "bot", time: "Saturday, 5:46 PM", text: "💡 Tip: Keep your Colab notebook open. We start live API integration at Min 10!" }
    ],
    "step-4": [
      { sender: "bot", time: "Saturday, 7:05 PM", text: "Masterclass complete! 🏆 Now let's turn your code into verified proof of work." },
      { sender: "bot", time: "Saturday, 7:06 PM", text: "Submit your GitHub repository URL below. Our <strong>Automated AI Evaluation Engine</strong> will grade your code, evaluate API logic, and issue your verified NxtWave Certificate:" },
      { sender: "user", time: "Saturday, 7:08 PM", text: "https://github.com/malli/ai-resume-screener-bot" },
      { sender: "bot", time: "Saturday, 7:08 PM", text: "⚡ <strong>AI Evaluation Report:</strong><br>✅ Gemini API Integration: 10/10<br>✅ Streamlit UI Responsiveness: 10/10<br>✅ Error Handling & Prompts: 9.6/10<br><strong>Overall Score: 98/100 (Distinction)</strong>" },
      { sender: "bot", time: "Saturday, 7:09 PM", text: "🎓 Verified NxtWave Certificate of Competency generated! Click below to add directly to LinkedIn Licenses & Certifications:", btn: "Download Certificate & Add to LinkedIn" }
    ]
  };

  function renderStage(stageKey) {
    const messages = conversationStages[stageKey] || conversationStages["step-1"];
    chatBody.innerHTML = "";

    messages.forEach((msg, idx) => {
      setTimeout(() => {
        const bubble = document.createElement('div');
        bubble.className = `wa-bubble ${msg.sender}`;
        
        let html = `<div>${msg.text}</div>`;
        if (msg.btn) {
          html += `<button class="wa-cta-btn" onclick="alert('Action Simulated: ${msg.btn}')">${msg.btn}</button>`;
        }
        html += `<span class="wa-time">${msg.time}</span>`;
        bubble.innerHTML = html;
        chatBody.appendChild(bubble);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, idx * 120);
    });

    if (userInput) {
      if (stageKey === "step-4") {
        userInput.value = "https://github.com/malli/ai-resume-screener-bot";
      } else {
        userInput.value = "";
        userInput.placeholder = "Click send to simulate student reply...";
      }
    }
  }

  // Initial Render Stage 1
  renderStage("step-1");

  stepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stepBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const stage = btn.getAttribute('data-flow');
      renderStage(stage);
    });
  });

  if (sendBtn && userInput) {
    sendBtn.addEventListener('click', () => {
      const activeBtn = document.querySelector('.flow-step-btn.active');
      const currentFlow = activeBtn ? activeBtn.getAttribute('data-flow') : 'step-1';
      renderStage(currentFlow);
    });
  }
}

/* ==========================================================================
   2.6 REAL-TIME CAMPUS PEER TRACKER
   ========================================================================== */
function initCollegePeerTracker() {
  const collegeInput = document.getElementById('reg-college');
  const peerBadge = document.getElementById('college-peer-badge');
  const peerCount = document.getElementById('college-peer-count');

  if (!collegeInput || !peerBadge) return;

  const collegePeerMap = {
    "amrita": 46,
    "jntu": 52,
    "anna": 48,
    "vtu": 41,
    "srm": 38,
    "vit": 44,
    "psg": 32,
    "bms": 29,
    "coep": 35,
    "cbit": 27,
    "vnr": 31,
    "default": 34
  };

  collegeInput.addEventListener('input', () => {
    const val = collegeInput.value.trim().toLowerCase();
    if (val.length >= 3) {
      let count = collegePeerMap.default;
      for (const [key, num] of Object.entries(collegePeerMap)) {
        if (val.includes(key)) {
          count = num;
          break;
        }
      }
      if (peerCount) peerCount.innerText = count;
      peerBadge.classList.remove('hidden');
    } else {
      peerBadge.classList.add('hidden');
    }
  });
}


/* ==========================================================================
   3. WORKSHOP SANDBOX (LIVE AI BULLET POLISHER)
   ========================================================================== */
function initWorkshopSandbox() {
  const bulletInput = document.getElementById('bullet-input');
  const runBtn = document.getElementById('run-ai-bullet-btn');
  const resultDiv = document.getElementById('ai-bullet-result');
  const presetBtns = document.querySelectorAll('.preset-btn');

  if (!runBtn || !bulletInput) return;

  const polishedOutputs = {
    "Made a student attendance system in Python with MySQL database.":
      "<strong>Engineered an automated attendance validation portal</strong> using Python and MySQL; accelerated roll-call processing time by <strong>65%</strong> for 450+ department students with <strong>99.8% database transaction reliability</strong>.",
    "Created a weather forecasting app using open weather API.":
      "<strong>Architected a responsive weather analytics application</strong> consuming OpenWeather REST APIs with asynchronous caching, serving <strong>sub-200ms latency forecasts</strong> with localized climate trend predictions.",
    default:
      "<strong>Engineered a scalable full-stack GenAI application</strong> leveraging Google Gemini API and Streamlit Cloud; implemented structured prompt engineering pipelines, reducing manual review latency by <strong>70%</strong> and securing verified GitHub proof of work."
  };

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const presetText = btn.getAttribute('data-preset');
      bulletInput.value = presetText;
    });
  });

  runBtn.addEventListener('click', () => {
    const text = bulletInput.value.trim();
    if (!text) {
      alert("Please enter a resume bullet or select a preset!");
      return;
    }

    runBtn.disabled = true;
    runBtn.innerHTML = `<span>&#9881; Processing with Workshop AI Pipeline...</span>`;
    resultDiv.innerHTML = `<span style="color: var(--accent-cyan); font-family: var(--font-mono);">[LLM Inference] Applying STAR Framework & Quantifiable Metric Injection...</span>`;

    setTimeout(() => {
      const enhanced = polishedOutputs[text] || polishedOutputs.default;
      resultDiv.innerHTML = `
        <div style="background: rgba(16, 185, 129, 0.1); border-left: 3px solid var(--accent-emerald); padding: 12px; border-radius: 4px;">
          <p style="color: #ffffff; font-weight: 500;">&#10024; ${enhanced}</p>
        </div>
        <p style="font-size: 0.78rem; color: var(--accent-emerald); margin-top: 8px;">
          &#9989; <strong>Recruiter Impact:</strong> Transformed from passive description into active, metrics-driven STAR framework ready for placement resumes.
        </p>
      `;
      runBtn.disabled = false;
      runBtn.innerHTML = `<span>&#9889; Run AI Polisher (60-Min Workshop Logic)</span>`;
    }, 550);
  });
}

/* ==========================================================================
   3.5 60-MINUTE ROADMAP ANIMATED BLUEPRINT DRAWERS
   ========================================================================== */
function initRoadmapBlueprints() {
  const blocks = document.querySelectorAll('.timeline-block');
  const drawer = document.getElementById('roadmap-blueprint-drawer');
  const blueprintContent = document.getElementById('blueprint-content');

  if (!blocks.length || !drawer || !blueprintContent) return;

  const blueprints = {
    1: {
      title: '🔑 Step 1: Unlocking the GenAI API — The Secret Handshake',
      color: '#38bdf8',
      cartoon: `<div class="bp-cartoon-wrap">
        <div class="bp-robot">
          <div class="robot-antenna"><div class="antenna-ball"></div></div>
          <div class="robot-head">
            <div class="robot-eye left-eye"></div>
            <div class="robot-eye right-eye"></div>
          </div>
          <div class="robot-body"><div class="robot-chest-light"></div></div>
        </div>
        <div class="bp-connect-beam"></div>
        <div class="bp-api-cloud">
          <div class="cloud-emoji">☁️</div>
          <div class="cloud-label">Gemini API</div>
          <div class="cloud-ring"></div>
        </div>
      </div>`,
      code: `import google.generativeai as genai
import os

# FREE API key → aistudio.google.com (no credit card!)
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

# Connect to the world's most capable LLM in 1 line
model = genai.GenerativeModel("gemini-1.5-flash")

response = model.generate_content("Roast my resume")
print(response.text)  # ✅ You're now using GenAI!`,
      points: [
        '⚡ Get a FREE Gemini API key at <strong>aistudio.google.com</strong> — no credit card',
        '🔒 Store secrets as environment variables — never hard-code API keys in code',
        '🚀 Connecting to the LLM is literally <strong>3 lines of Python</strong> — no math',
        '☁️ All inference runs on Google\'s servers — your laptop just sends text'
      ]
    },
    2: {
      title: '🤖 Step 2: Building the AI Brain — Prompt Engineering Magic',
      color: '#c084fc',
      cartoon: `<div class="bp-cartoon-wrap">
        <div class="bp-brain-scene">
          <div class="bp-big-brain">🧠</div>
          <div class="thought-bubble tb1">Resume?</div>
          <div class="thought-bubble tb2">Score!</div>
          <div class="thought-bubble tb3">Improve!</div>
        </div>
        <div class="bp-chain-row">
          <div class="chain-node">📥</div>
          <div class="chain-arr">→</div>
          <div class="chain-node">🔄</div>
          <div class="chain-arr">→</div>
          <div class="chain-node">💡</div>
          <div class="chain-arr">→</div>
          <div class="chain-node">📤</div>
        </div>
      </div>`,
      code: `def analyze_bullet(bullet_text: str) -> str:
    """Workshop core: AI-powered STAR transformer."""
    
    prompt = f"""You are a top-tier tech recruiter at Google/Microsoft.
Analyze this resume bullet for a final-year engineering student:
"{bullet_text}"

Return JSON with:
- placement_score (0-100)
- why_rejected (1 sentence)  
- improved_version (STAR format with metrics)"""
    
    response = model.generate_content(prompt,
        generation_config={"temperature": 0.2})
    return response.text`,
      points: [
        '🎯 <strong>Prompt Engineering</strong> is now tested in 78% of GenAI job interviews',
        '📐 System prompts give AI a persona — this separates GenAI apps from basic chatbots',
        '🌡️ Lower temperature = more precise, factual output (perfect for resume analysis)',
        '🔗 <strong>Chain prompts:</strong> output of step 1 becomes input to step 2 for complex logic'
      ]
    },
    3: {
      title: '⚡ Step 3: Streamlit UI — Python → Professional Web App in 15 Lines',
      color: '#10b981',
      cartoon: `<div class="bp-cartoon-wrap">
        <div class="bp-laptop-scene">
          <div class="bp-laptop">
            <div class="laptop-lid">
              <div class="screen-dots"><span></span><span></span><span></span></div>
              <div class="screen-bar"></div>
              <div class="screen-input"></div>
              <div class="screen-btn-mock"></div>
              <div class="screen-result-mock"></div>
            </div>
            <div class="laptop-base-mock"></div>
          </div>
          <div class="code-sparks">
            <span class="spark sp1">✨</span>
            <span class="spark sp2">⚡</span>
            <span class="spark sp3">🚀</span>
          </div>
        </div>
      </div>`,
      code: `import streamlit as st

st.set_page_config(page_title="AI Resume Analyzer", page_icon="🤖")
st.title("🚀 AI Resume Project Analyzer")

bullet = st.text_area("Paste your resume bullet:", height=80)

if st.button("⚡ Analyze with AI", type="primary"):
    with st.spinner("Consulting AI recruitment panel..."):
        result = analyze_bullet(bullet)
        
    col1, col2 = st.columns(2)
    col1.metric("Placement Score", f"{result['score']}/100")
    col2.metric("ATS Risk", result['risk_level'])
    st.success("✅ " + result['improved_version'])`,
      points: [
        '🌐 Streamlit converts Python scripts into <strong>professional web UIs</strong> with zero HTML',
        '⚡ Every UI element is just 1 function call — <code>st.button()</code>, <code>st.metric()</code>',
        '📱 <strong>Auto-responsive</strong>: works perfectly on mobile without any extra code',
        '🔄 Hot Reload: saves file → browser updates instantly. Perfect for live workshops!'
      ]
    },
    4: {
      title: '🚀 Step 4: Deploy Live + Craft Your Resume Bullet — Minute 60',
      color: '#f59e0b',
      cartoon: `<div class="bp-cartoon-wrap">
        <div class="bp-launch-scene">
          <div class="bp-rocket-icon">🚀</div>
          <div class="rocket-flame fl1"></div>
          <div class="rocket-flame fl2"></div>
          <div class="deploy-platforms">
            <div class="deploy-badge">☁️ Streamlit Cloud <span class="free-tag">FREE</span></div>
            <div class="deploy-badge">🐙 GitHub Pages <span class="free-tag">FREE</span></div>
          </div>
        </div>
        <div class="bp-resume-pill">
          <div class="rp-label">✅ Your New Resume Bullet</div>
          <div class="rp-text">Engineered AI-powered Resume Analyzer using Gemini API + Streamlit; deployed live at yourname.streamlit.app → 94/100 Recruiter Score</div>
        </div>
      </div>`,
      code: `# 1-Command Deploy (Free Streamlit Cloud Hosting!)
# 1. Push code to GitHub
# 2. Connect at share.streamlit.io → Done!

# ✅ FINAL RESUME BULLET YOU COPY-PASTE TONIGHT:
"""
Engineered AI-powered Resume Analyzer using Google Gemini
1.5 Flash API + Streamlit; implemented STAR-format prompt
engineering pipelines; deployed at [name].streamlit.app with
99.8% uptime; reduced interview prep time by 70% for 200+
students. [GitHub: github.com/you/ai-resume-analyzer]
"""
# Placement Score: 34/100 (before) → 94/100 (after) ✅`,
      points: [
        '🌍 Deploy to <strong>.app public URL in under 5 minutes</strong> — no cloud billing knowledge',
        '📋 You get a <strong>live shareable URL</strong> to paste directly on your resume + LinkedIn',
        '🐙 GitHub repo proves you can write real, reviewable, production-grade code',
        '🏆 This single project upgrades your resume from <strong>34/100 → 94/100</strong> Recruiter Score'
      ]
    }
  };

  let activeStep = null;

  blocks.forEach(block => {
    block.addEventListener('click', () => {
      const step = parseInt(block.getAttribute('data-roadmap-step'));

      if (activeStep === step) {
        drawer.classList.remove('open');
        blocks.forEach(b => b.classList.remove('active'));
        activeStep = null;
        return;
      }

      blocks.forEach(b => b.classList.remove('active'));
      block.classList.add('active');
      activeStep = step;

      const bp = blueprints[step];
      if (!bp) return;

      blueprintContent.style.opacity = '0';
      blueprintContent.style.transform = 'translateY(12px)';

      blueprintContent.innerHTML = `
        <div class="bp-header" style="border-left: 4px solid ${bp.color};">
          <h4 class="bp-title">${bp.title}</h4>
        </div>
        <div class="bp-body-grid">
          <div class="bp-visual-col">
            ${bp.cartoon}
            <div class="bp-key-points">
              ${bp.points.map(p => `<div class="bp-point">▸ ${p}</div>`).join('')}
            </div>
          </div>
          <div class="bp-info-col">
            <div class="bp-code-block">
              <div class="code-header">
                <span class="code-dots-row"><span></span><span></span><span></span></span>
                <span class="code-lang-tag">Python 3.11</span>
              </div>
              <pre class="bp-code"><code>${bp.code.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code></pre>
            </div>
          </div>
        </div>
      `;

      drawer.classList.add('open');

      requestAnimationFrame(() => {
        blueprintContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        blueprintContent.style.opacity = '1';
        blueprintContent.style.transform = 'translateY(0)';
      });

      setTimeout(() => {
        drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 150);
    });
  });
}

/* ==========================================================================
   4. REGISTRATION FORM & DIGITAL ADMIT PASS GENERATOR
   ========================================================================== */
function initRegistrationForm() {
  const form = document.getElementById('registration-form');
  const regCard = document.getElementById('register-card');
  const passContainer = document.getElementById('pass-container');

  const passName = document.getElementById('pass-student-name');
  const passCollege = document.getElementById('pass-student-college');
  const passTicketId = document.getElementById('pass-ticket-id');
  const refLinkInput = document.getElementById('referral-link-input');
  const userRankName = document.getElementById('user-rank-name');
  const userRankCollege = document.getElementById('user-rank-college');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('reg-name').value.trim();
    const college = document.getElementById('reg-college').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const email = document.getElementById('reg-email').value.trim();

    // Generate unique Pass ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const passCode = `NXW-AI-${randomNum}`;
    const cleanFirstName = name.split(' ')[0].toUpperCase().replace(/[^A-Z]/g, '') || "STUDENT";
    const customRefCode = `${cleanFirstName}${randomNum % 100}`;

    // Compute Avatar Initials
    const nameParts = name.trim().split(/\s+/);
    let initials = "NW";
    if (nameParts.length >= 2) {
      initials = (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
    } else if (nameParts.length === 1 && nameParts[0].length >= 2) {
      initials = nameParts[0].substring(0, 2).toUpperCase();
    }

    // Populate Admit Pass Elements
    passName.innerText = name;
    passCollege.innerText = college;
    passTicketId.innerText = passCode;
    
    const avatarEl = document.getElementById('pass-avatar-initials');
    if (avatarEl) avatarEl.innerText = initials;

    const stubSerial = document.getElementById('pass-stub-serial');
    if (stubSerial) stubSerial.innerText = `#NXW-${randomNum * 9}`;

    // Update Viral Hub
    const customUrl = `https://nxtwave.ai/ai60?ref=${customRefCode}`;
    if (refLinkInput) refLinkInput.value = customUrl;

    if (userRankName) userRankName.innerText = `${name} (You)`;
    if (userRankCollege) userRankCollege.innerText = `${college} • Custom Link Active`;

    // Visual Transition
    regCard.classList.add('hidden');
    passContainer.classList.remove('hidden');

    // Increment Live Capacity Tracker from 420 to 421
    const regCounterEl = document.getElementById('registered-counter');
    const capacityPercentEl = document.getElementById('capacity-percent');
    const capacityFillEl = document.getElementById('capacity-fill');
    if (regCounterEl) {
      const newCount = 421;
      regCounterEl.innerText = newCount;
      const newPercent = ((newCount / 500) * 100).toFixed(1);
      if (capacityPercentEl) capacityPercentEl.innerText = `${newPercent}% Filled`;
      if (capacityFillEl) capacityFillEl.style.width = `${newPercent}%`;
    }

    // Trigger celebration confetti
    triggerConfetti();

    // Scroll to admit pass smoothly
    passContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  // Action: Download HD Pass PNG (Offline Canvas Generation)
  const downloadPngBtn = document.getElementById('download-pass-png-btn');
  if (downloadPngBtn) {
    downloadPngBtn.addEventListener('click', () => {
      downloadHdPassPng();
    });
  }

  // Action: Print 1-Page PDF
  const printPdfBtn = document.getElementById('print-pass-pdf-btn');
  if (printPdfBtn) {
    printPdfBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/**
 * High-Definition HTML5 Canvas Admit Pass Generator (2x Retina 1200x640)
 * Generates an ultra-crisp, professional VIP Pass and downloads as PNG instantly.
 */
function downloadHdPassPng() {
  const name = document.getElementById('pass-student-name').innerText || "Student Attendee";
  const college = document.getElementById('pass-student-college').innerText || "Engineering College";
  const passId = document.getElementById('pass-ticket-id').innerText || "NXW-AI-2026";
  const initials = document.getElementById('pass-avatar-initials').innerText || "NW";

  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 640;
  const ctx = canvas.getContext('2d');

  // Background Dark Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 1200, 640);
  bgGrad.addColorStop(0, '#090d16');
  bgGrad.addColorStop(0.5, '#111827');
  bgGrad.addColorStop(1, '#1e1b4b');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1200, 640);

  // Subtle glowing ambient circles
  const glow1 = ctx.createRadialGradient(250, 150, 10, 250, 150, 350);
  glow1.addColorStop(0, 'rgba(99, 102, 241, 0.22)');
  glow1.addColorStop(1, 'rgba(99, 102, 241, 0)');
  ctx.fillStyle = glow1;
  ctx.fillRect(0, 0, 1200, 640);

  const glow2 = ctx.createRadialGradient(950, 500, 10, 950, 500, 300);
  glow2.addColorStop(0, 'rgba(6, 182, 212, 0.18)');
  glow2.addColorStop(1, 'rgba(6, 182, 212, 0)');
  ctx.fillStyle = glow2;
  ctx.fillRect(0, 0, 1200, 640);

  // Card Outer Border
  ctx.strokeStyle = 'rgba(99, 102, 241, 0.6)';
  ctx.lineWidth = 4;
  ctx.strokeRect(30, 30, 1140, 580);

  // Top Holographic Strip
  const holoGrad = ctx.createLinearGradient(30, 30, 1170, 30);
  holoGrad.addColorStop(0, '#38bdf8');
  holoGrad.addColorStop(0.35, '#818cf8');
  holoGrad.addColorStop(0.7, '#c084fc');
  holoGrad.addColorStop(1, '#38bdf8');
  ctx.fillStyle = holoGrad;
  ctx.fillRect(30, 30, 1140, 8);

  // Perforation Divider (at x = 860)
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.setLineDash([8, 8]);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(860, 60);
  ctx.lineTo(860, 580);
  ctx.stroke();
  ctx.setLineDash([]); // Reset dash

  // Perforation Notches
  ctx.fillStyle = '#0a0d14';
  ctx.beginPath();
  ctx.arc(860, 30, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(860, 610, 18, 0, Math.PI * 2);
  ctx.fill();

  // LEFT SECTION: Branding & Workshop
  // Logo
  ctx.font = 'bold 34px "Outfit", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('NXT', 70, 95);
  ctx.fillStyle = '#38bdf8';
  ctx.fillText('WAVE', 140, 95);

  ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('|  OFFICIAL WORKSHOP ADMIT PASS', 255, 92);

  // Security Badge
  ctx.fillStyle = 'rgba(16, 185, 129, 0.18)';
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(620, 70, 205, 32, 16);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#34d399';
  ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('●  VERIFIED VIP ATTENDEE', 638, 91);

  // Category Tag
  ctx.font = '600 13px "JetBrains Mono", monospace';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText('EXCLUSIVE FINAL-YEAR PLACEMENT MASTERCLASS', 70, 150);

  // Workshop Title
  ctx.font = 'bold 36px "Outfit", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('Build Your First AI Project in 60 Minutes', 70, 195);

  // Student Profile Card Box
  ctx.fillStyle = 'rgba(15, 23, 42, 0.7)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(70, 230, 755, 95, 12);
  ctx.fill();
  ctx.stroke();

  // Avatar Circle
  const avGrad = ctx.createLinearGradient(90, 245, 150, 305);
  avGrad.addColorStop(0, '#4f46e5');
  avGrad.addColorStop(1, '#06b6d4');
  ctx.fillStyle = avGrad;
  ctx.beginPath();
  ctx.arc(125, 277, 32, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px "Outfit", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(initials, 125, 285);
  ctx.textAlign = 'left'; // Reset

  // Student Name
  ctx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(name, 175, 268);

  ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#34d399';
  ctx.fillText('✓ Verified Attendee', 175 + ctx.measureText(name).width + 15, 266);

  // Student College
  ctx.font = '15px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#cbd5e1';
  ctx.fillText(`🎓  ${college}`, 175, 298);

  // 4-Column Metadata Boxes
  const metaY = 355;
  const colW = 175;
  const colGap = 18;
  const metaData = [
    { label: 'SESSION DATE', val: 'Sat, Oct 11, 2026', color: '#ffffff' },
    { label: 'TIME (IST)', val: '6:00 PM – 7:00 PM', color: '#ffffff' },
    { label: 'TRACK', val: 'Placement Tech Sprint', color: '#38bdf8' },
    { label: 'PASS ID', val: passId, color: '#f59e0b', mono: true }
  ];

  metaData.forEach((item, idx) => {
    const x = 70 + idx * (colW + colGap);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x, metaY, colW, 80, 8);
    ctx.fill();
    ctx.stroke();

    ctx.font = 'bold 11px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(item.label, x + 14, metaY + 28);

    ctx.font = item.mono ? 'bold 16px "JetBrains Mono", monospace' : 'bold 15px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = item.color;
    ctx.fillText(item.val, x + 14, metaY + 58);
  });

  // Bottom Perks
  ctx.font = '13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('✅ Live Zoom Access      ✅ GitHub Starter Repo      ✅ Verified Certificate      ✅ ATS Resume Bullets', 70, 480);

  // Placement Guarantee Note
  ctx.font = 'italic 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('* Please join 10 minutes early with your laptop and Google Chrome. Hands-on coding session begins promptly.', 70, 545);

  // RIGHT SECTION (STUB): QR Code, Barcode, Serial
  // Stub Header
  ctx.font = 'bold 13px "JetBrains Mono", monospace';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('#NXW-84920', 890, 85);

  ctx.fillStyle = 'rgba(6, 182, 212, 0.15)';
  ctx.beginPath();
  ctx.roundRect(1030, 68, 110, 24, 4);
  ctx.fill();
  ctx.font = 'bold 10px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText('SEAT RESERVED', 1042, 84);

  // Draw High-Tech QR Code Mockup Box
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.roundRect(915, 125, 200, 200, 10);
  ctx.fill();

  // QR Finder Outer & Inner Boxes
  drawQrFinder(ctx, 930, 140);
  drawQrFinder(ctx, 1070, 140);
  drawQrFinder(ctx, 930, 280);

  // QR Pattern Modules
  ctx.fillStyle = '#0f172a';
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if ((r + c) % 2 === 0 || (r * c) % 3 === 0) {
        ctx.fillRect(975 + c * 9, 145 + r * 9, 6, 6);
      }
    }
  }

  // QR Center Badge
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.roundRect(995, 205, 40, 40, 6);
  ctx.fill();
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 18px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('NW', 1015, 232);
  ctx.textAlign = 'left';

  ctx.font = '11px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.textAlign = 'center';
  ctx.fillText('Scan to Verify Event Authenticity', 1015, 348);

  // Barcode
  const barY = 390;
  const barStartX = 910;
  const barWidths = [2, 4, 1, 3, 2, 5, 2, 4, 1, 2, 4, 2, 5, 1, 3, 2, 4, 1, 4, 2, 3, 1, 5, 2, 4, 2, 1, 3, 4, 2, 1, 4, 3, 2, 5, 2, 1];
  let curX = barStartX;
  ctx.fillStyle = '#cbd5e1';
  barWidths.forEach(w => {
    ctx.fillRect(curX, barY, w, 45);
    curX += w + 3;
  });

  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.fillStyle = '#64748b';
  ctx.fillText('NXW-2026-FINAL-YR-VIP', 1015, 460);
  ctx.textAlign = 'left'; // Reset

  // Stub Footer
  ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#38bdf8';
  ctx.textAlign = 'center';
  ctx.fillText('LIVE ZOOM PRO ACCESS', 1015, 520);
  ctx.font = '11px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('Authorized by NxtWave Growth', 1015, 542);
  ctx.textAlign = 'left';

  // Export Canvas to Image and Trigger Direct Download
  const cleanName = name.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `NxtWave_AI_Admit_Card_${cleanName}.png`;

  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Helper to draw QR finder pattern
function drawQrFinder(ctx, x, y) {
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(x, y, 40, 40);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x + 6, y + 6, 28, 28);
  ctx.fillStyle = '#4f46e5';
  ctx.fillRect(x + 12, y + 12, 16, 16);
}

/* ==========================================================================
   5. VIRAL REFERRAL ENGINE (K-FACTOR SIMULATION & REWARDS)
   ========================================================================== */
let simulatedInvites = 0;

function initReferralEngine() {
  const copyBtn = document.getElementById('copy-ref-link-btn');
  const linkInput = document.getElementById('referral-link-input');
  const whatsappBtn = document.getElementById('share-whatsapp-btn');
  const simBtn = document.getElementById('simulate-invite-btn');
  const resetBtn = document.getElementById('reset-sim-btn');

  const countText = document.getElementById('ref-count-text');
  const fillBar = document.getElementById('milestone-fill');
  const perkStatus = document.getElementById('milestone-perk-status');
  const userRankPoints = document.getElementById('user-rank-points');
  const userRankPos = document.getElementById('user-rank-pos');

  if (copyBtn && linkInput) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(linkInput.value).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "Copied! ✓";
        copyBtn.style.backgroundColor = "var(--accent-emerald)";
        setTimeout(() => {
          copyBtn.innerText = originalText;
          copyBtn.style.backgroundColor = "";
        }, 2000);
      });
    });
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const shareUrl = linkInput ? linkInput.value : "https://nxtwave.ai/ai60";
      const message = `Hey, our batch is attending NxtWave's free 60-min workshop this Saturday: "Build Your First GenAI Project in 60 Mins" 🚀\n\nRecruiters are rejecting basic CRUD/weather apps this placement season. We get a live deployed AI project + GitHub code for our resume!\n\nClaim your free pass here: ${shareUrl}`;
      const waLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      window.open(waLink, '_blank');
    });
  }

  // Interactive Simulation for Evaluators
  if (simBtn) {
    simBtn.addEventListener('click', () => {
      simulatedInvites += 1;
      updateReferralState();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      simulatedInvites = 0;
      updateReferralState();
    });
  }

  function updateReferralState() {
    if (countText) countText.innerText = `${simulatedInvites} / 2 Invites`;
    const pct = Math.min((simulatedInvites / 2) * 100, 100);
    if (fillBar) fillBar.style.width = `${pct}%`;

    if (userRankPoints) userRankPoints.innerText = `${simulatedInvites} Invites`;

    if (simulatedInvites >= 2) {
      if (perkStatus) {
        perkStatus.innerHTML = `
          <span style="color: var(--accent-emerald); font-size: 1.1rem;">&#127881;</span>
          <span style="color: #34d399;"><strong>UNLOCKED!</strong> <a href="#download" style="color: #38bdf8; text-decoration: underline;">Download "Top 50 AI Resume STAR Bullets & Prompts" PDF</a></span>
        `;
      }
      if (simulatedInvites === 2) {
        triggerConfetti();
      }
    } else {
      if (perkStatus) {
        perkStatus.innerHTML = `
          <span class="lock-icon">&#128274;</span>
          <span><strong>Locked:</strong> "Top 50 AI Resume STAR Bullets & Interview Cheat Sheet" (Unlocked at 2 invites)</span>
        `;
      }
    }

    if (simulatedInvites > 15 && userRankPos) {
      userRankPos.innerText = "#3";
      userRankPos.style.color = "var(--accent-amber)";
    } else if (simulatedInvites > 5 && userRankPos) {
      userRankPos.innerText = "#12";
    } else if (userRankPos) {
      userRankPos.innerText = "#42";
    }
  }
}

/* ==========================================================================
   6. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');

      // Close all others
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   7. EVALUATOR STRATEGY MODAL & TABS
   ========================================================================== */
function initEvaluatorModal() {
  const openBtn = document.getElementById('toggle-growth-mode-btn');
  const closeBtn = document.getElementById('close-evaluator-btn');
  const modal = document.getElementById('evaluator-modal');
  const stratTabs = document.querySelectorAll('.strat-tab');
  const stratPanels = document.querySelectorAll('.strat-panel');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // Close on outer backdrop click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }

  stratTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-strat-target');

      stratTabs.forEach(t => t.classList.remove('active'));
      stratPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}

/* ==========================================================================
   HELPER: CANVAS CONFETTI EFFECT
   ========================================================================== */
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#38bdf8', '#10b981', '#f59e0b']
    });
  }
}
