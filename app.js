    const planData = [
      {
        id: "apr",
        month: "April 2026",
        tags: [{ name: "Build", type: "build" }, { name: "Study", type: "study" }],
        focus: "Apps 1 & 2 shipped by Apr 30",
        alert: { type: 'warn', text: 'Chemistry is your weakest subject. Slot it every day.' },
        tracks: [
          { id: "apr-1", label: "Apps Generation", text: "App 1: Days 1–7. App 2: Days 8–18. Both live on GitHub." },
          { id: "apr-2", label: "Board Foundations", text: "Physics + Maths Ch.1–3. First read only, understand logic." },
          { id: "apr-3", label: "Chemistry Block", text: "Solid State + Solutions. 1 formula sheet per chapter." },
          { id: "apr-4", label: "Japanese N4", text: "Master Katakana week 1. Anki 15 cards/day." },
          { id: "apr-5", label: "English Comm", text: "1 editorial daily. Note 5 words. Flamingo Ch.1–3." }
        ]
      },
      {
        id: "may",
        month: "May 2026",
        tags: [{ name: "Build", type: "build" }, { name: "Study", type: "study" }],
        focus: "App 3 done · Portfolio live",
        alert: { type: 'good', text: 'May 18: 3 apps done. You are 6 weeks ahead of applicants.' },
        tracks: [
          { id: "may-1", label: "App Portfolio", text: "App 3: Days 1–12. Then GitHub profile polish." },
          { id: "may-2", label: "Board Mechanics", text: "Physics Laws. Maths Matrices & Continuity." },
          { id: "may-3", label: "Chemistry Deep", text: "Electrochem & Kinetics. High weightage chapters." },
          { id: "may-4", label: "Japanese Grammar", text: "te-form, passive/causative. 20 cards/day." },
          { id: "may-5", label: "LOR Acquisition", text: "Email host. Attach GitHub link. Request LOR." }
        ]
      },
      {
        id: "jun",
        month: "June 2026",
        tags: [{ name: "Study", type: "study" }, { name: "Japanese", type: "lang" }],
        focus: "JEE Maths kicks in · N4 mocks",
        alert: null,
        tracks: [
          { id: "jun-1", label: "Physics Core", text: "Electrostatics, Current Elec, Magnetic Effects." },
          { id: "jun-2", label: "JEE Maths", text: "Differentiation, Integration. JEE Mains 10/day." },
          { id: "jun-3", label: "Inorganic Chem", text: "Surface, d&f block, Coordination. Pure memory cards." },
          { id: "jun-4", label: "JLPT Mocks", text: "N4 mock every Sunday. NHK Easy: 1 article/day." },
          { id: "jun-5", label: "English Literacy", text: "Flamingo & Vistas complete reading." }
        ]
      },
      {
        id: "jul",
        month: "July 2026",
        tags: [{ name: "Study", type: "study" }, { name: "Japanese", type: "lang" }],
        focus: "Syllabus 70% done",
        alert: null,
        tracks: [
          { id: "jul-1", label: "Physics Advanced", text: "EMI, AC, Optics (Ray + Wave)." },
          { id: "jul-2", label: "Maths Application", text: "Derivatives app, Definite integrals, Differential eq." },
          { id: "jul-3", label: "Organic Chem", text: "Haloalkanes, Alcohols, Aldehydes. Master named rxns." },
          { id: "jul-4", label: "Japanese Cert", text: "Sit JLPT N4 July try if dates available." },
          { id: "jul-5", label: "Computer Science", text: "Python + SQL. 3 days max per chapter." }
        ]
      },
      {
        id: "aug",
        month: "August 2026",
        tags: [{ name: "Study", type: "study" }],
        focus: "Deadline: syllabus done by Aug 31",
        alert: { type: 'good', text: 'Full syllabus done = 6 months for revision.' },
        tracks: [
          { id: "aug-1", label: "Modern Physics", text: "Dual Nature, Atoms, Nuclei, Semiconductors. Do it all." },
          { id: "aug-2", label: "Maths Completion", text: "Vectors, 3D Geometry, Linear Prog, Probability." },
          { id: "aug-3", label: "Chemistry Wrap-up", text: "Amines, Biomolecules, Polymers. Complete." },
          { id: "aug-4", label: "Japanese Pivot", text: "Start N3 grammar Tobira Ch.1-4 if N4 is locked." },
          { id: "aug-5", label: "SOP Draft 1", text: "Draft Mitsui SOP. Why Japan? Why you?" }
        ]
      },
      {
        id: "sep",
        month: "September 2026",
        tags: [{ name: "Study", type: "study" }, { name: "Japanese", type: "lang" }],
        focus: "Revision R1 · N4 edge",
        alert: null,
        tracks: [
          { id: "sep-1", label: "Revision R1", text: "Notes chapter by chapter. Target weak zones." },
          { id: "sep-2", label: "Mock Protocol", text: "1 full subject mock/week. Review wrong answers." },
          { id: "sep-3", label: "Chemistry Over.", text: "Extra 30 min/day on Inorganic revision cards." },
          { id: "sep-4", label: "N4 Sprint", text: "N4 full mock every Sunday. Target 80%+." },
          { id: "sep-5", label: "SOP Refinement", text: "Draft 2: get teacher feedback on 'Japan purpose'." }
        ]
      },
      {
        id: "oct",
        month: "October 2026",
        tags: [{ name: "Study", type: "study" }, { name: "Pre-boards prep", type: "exam" }],
        focus: "2 full mocks/week",
        alert: { type: 'danger', text: 'Register for JLPT December NOW. It closes.' },
        tracks: [
          { id: "oct-1", label: "Revision R2", text: "Strong chapters = 1 mock. Weak = 3 mocks." },
          { id: "oct-2", label: "Maths Velocity", text: "JEE Mains 15/day. Target 95+ smoothly." },
          { id: "oct-3", label: "English Formats", text: "Master all writing formats. 2 per week." },
          { id: "oct-4", label: "JLPT Registration", text: "2 full mocks/week. 30min listening daily." },
          { id: "oct-5", label: "Portfolio Audit", text: "GitHub flawless, 3 apps up. Check LOR." }
        ]
      },
      {
        id: "nov",
        month: "November 2026",
        tags: [{ name: "Pre-boards", type: "exam" }, { name: "Japanese", type: "lang" }],
        focus: "Pre-boards · Final N4",
        alert: null,
        tracks: [
          { id: "nov-1", label: "Pre-board Sim", text: "Treat exams like real boards for momentum." },
          { id: "nov-2", label: "PYQ Protocol", text: "CBSE PyQs 2019–2025. Pattern recognition." },
          { id: "nov-3", label: "Chemistry Rescue", text: "Target weak points with specific PW sessions." },
          { id: "nov-4", label: "Japanese Final", text: "3-week N4 intensive. 1 mock/day last week." },
          { id: "nov-5", label: "Asset Collection", text: "SOP final. Scan all certs to PDF." }
        ]
      },
      {
        id: "dec",
        month: "December 2026",
        tags: [{ name: "JLPT N4", type: "exam" }, { name: "Boards prep", type: "study" }],
        focus: "JLPT N4 Exam",
        alert: null,
        tracks: [
          { id: "dec-1", label: "JLPT N4 Exam", text: "Exam day. Trust preparation. Stay calm." },
          { id: "dec-2", label: "Board Override", text: "100% focus to boards. 3 mocks/week." },
          { id: "dec-3", label: "Maths Check", text: "Scoring 90+ on mocks. Else, 2 weeks JEE sets." },
          { id: "dec-4", label: "Chem Rapid", text: "Rapid fire inorganic+organic. 1 ch/day." },
          { id: "dec-5", label: "SOP Vault", text: "SOP is ready so you don't panic write in Jan." }
        ]
      },
      {
        id: "jan",
        month: "January 2027",
        tags: [{ name: "Final boards prep", type: "exam" }],
        focus: "Last revision cycle",
        alert: null,
        tracks: [
          { id: "jan-1", label: "Revision R3", text: "Fastest round. Max 1hr/chapter." },
          { id: "jan-2", label: "Mock Exam Conds", text: "2025/2024 papers under strict 3hr times." },
          { id: "jan-3", label: "English Tmpls", text: "3-4 template ans/major theme plotted." },
          { id: "jan-4", label: "JLPT Results", text: "Results out in Jan. Adjust plans accordingly." },
          { id: "jan-5", label: "Scholar Radar", text: "Watch mitsui.com + studyinjapan.go.jp daily." }
        ]
      },
      {
        id: "feb",
        month: "February 2027",
        tags: [{ name: "Boards", type: "exam" }, { name: "Mitsui Apply", type: "apply" }],
        focus: "The Month.",
        alert: { type: 'good', text: 'If done: boards 90%, N4, 3 apps, LOR = Interview Lock.' },
        tracks: [
          { id: "feb-1", label: "Board Exec", text: "Write exams like eligibility depends on it." },
          { id: "feb-2", label: "Mitsui App", text: "Window: Feb 10-22. Submit on Day 1." },
          { id: "feb-3", label: "Doc Final", text: "Class 12 marks, JLPT, Certs, LOR, SOP, GitHub." },
          { id: "feb-4", label: "Interview Prep", text: "Articulate aloud: Why Japan? Why you? What to build?" },
          { id: "feb-5", label: "Contingency", text: "Apply MEXT, JASSO, unis simultaneously." }
        ]
      }
    ];

    const monthMap = {
      0: "jan", 1: "feb", 3: "apr", 4: "may", 5: "jun",
      6: "jul", 7: "aug", 8: "sep", 9: "oct", 10: "nov", 11: "dec"
    };
    let dynamicMonth = monthMap[new Date().getMonth()];

    let currentMonthId = dynamicMonth && planData.some(m => m.id === dynamicMonth) ? dynamicMonth : "apr";
    let completedTasks = JSON.parse(localStorage.getItem('completed_tasks_masterplan_v2')) || [];
    let taskNotes = JSON.parse(localStorage.getItem('task_notes_masterplan_v2')) || {};

    // Banner cycling logic
    const banners = [
      "https://preview.redd.it/aesthetic-anime-wallpaper-1920x1080-v0-1f61x40y1ehc1.jpeg?width=1080&crop=smart&auto=webp&s=15ea2d1611f5d33fa8f588224c544d57c4efbaf1",
      "https://preview.redd.it/anime-city-street-3840x2160-v0-bnef3fhuqm261.png?width=1080&crop=smart&auto=webp&s=b7d572187d8875c02d2bdcf97eb5fbd7d0f5b5f3"
    ];
    let customBanners = JSON.parse(localStorage.getItem('custom_banners_v2')) || [];
    let currentBannerIndex = parseInt(localStorage.getItem('active_banner_index')) || 0;

    // Theme Customization State
    let themeSettings = JSON.parse(localStorage.getItem('theme_settings_v2')) || {
      bgColor: "#121212",
      accentColor: "#4ade80"
    };

    function applyThemeSettings() {
      const root = document.documentElement;
      root.style.setProperty('--bg-color', themeSettings.bgColor);
      root.style.setProperty('--accent-green', themeSettings.accentColor);

      // Calculate dynamic surface colors based on bg brightness
      let hex = themeSettings.bgColor.replace('#', '');
      if (hex.length === 6) {
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        // Luma equation
        let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        let isLight = luma > 128; // If background is light, make cards darker. If dark, make cards lighter.

        let adjust = (amount) => {
          let amt = isLight ? -amount : amount;
          let nr = Math.max(0, Math.min(255, r + amt));
          let ng = Math.max(0, Math.min(255, g + amt));
          let nb = Math.max(0, Math.min(255, b + amt));
          return '#' + [nr, ng, nb].map(x => x.toString(16).padStart(2, '0')).join('');
        };

        root.style.setProperty('--surface-color', adjust(8));
        root.style.setProperty('--surface-color-hover', adjust(16));
        root.style.setProperty('--surface-border', adjust(24));
        root.style.setProperty('--text-primary', isLight ? "#111111" : "#e0e0e0");
        root.style.setProperty('--text-secondary', isLight ? "#555555" : "#888888");
      }

      // Convert hex to rgb for rgba usage (basic approximation for UI)
      root.style.setProperty('--accent-green-dim', themeSettings.accentColor + '20'); // append 20 hex alpha

      // Sync Inputs
      document.getElementById('theme-bg-input').value = themeSettings.bgColor;
      document.getElementById('theme-accent-input').value = themeSettings.accentColor;
    }

    function initializeBanner() {
      const allBanners = [...banners, ...customBanners];
      if (currentBannerIndex >= allBanners.length) currentBannerIndex = 0;

      const imgTarget = document.getElementById('hero-banner-img');
      imgTarget.src = allBanners[currentBannerIndex];
    }

    function cycleBanner() {
      const allBanners = [...banners, ...customBanners];
      currentBannerIndex = (currentBannerIndex + 1) % allBanners.length;
      localStorage.setItem('active_banner_index', currentBannerIndex.toString());

      const imgTarget = document.getElementById('hero-banner-img');
      imgTarget.style.opacity = 0;
      setTimeout(() => {
        imgTarget.src = allBanners[currentBannerIndex];
        imgTarget.style.opacity = 0.8;
      }, 300);
    }

    function openSettings() {
      document.getElementById('settings-modal').classList.add('active');
    }

    function closeSettings() {
      document.getElementById('settings-modal').classList.remove('active');
    }

    async function saveSettings() {
      const bannerInput = document.getElementById('custom-banner-input');
      const url = bannerInput.value.trim();
      const bgInput = document.getElementById('theme-bg-input').value;
      const accentInput = document.getElementById('theme-accent-input').value;

      const btn = document.getElementById('save-settings-btn');
      btn.textContent = 'SAVING...';

      // Handle Theme Updates
      themeSettings.bgColor = bgInput;
      themeSettings.accentColor = accentInput;
      localStorage.setItem('theme_settings_v2', JSON.stringify(themeSettings));
      applyThemeSettings();

      // Handle Banner Update if provided
      if (url) {
        if (!customBanners.includes(url)) {
          customBanners.push(url);
        }
        localStorage.setItem('custom_banners_v2', JSON.stringify(customBanners));

        const allBanners = [...banners, ...customBanners];
        currentBannerIndex = allBanners.length - 1;
        localStorage.setItem('active_banner_index', currentBannerIndex.toString());
      }

      // Push to Firestore
      try {
        if (window.db) {
          await window.setDoc(window.doc(window.db, "tracker_data", "settings"), {
            customBanners: customBanners,
            activeBannerIndex: currentBannerIndex,
            theme: themeSettings
          }, { merge: true });
        }
        btn.textContent = 'SAVED ✓';
        if (url) initializeBanner();

        setTimeout(() => {
          btn.textContent = 'APPLY TO CLOUD >_';
          closeSettings();
          bannerInput.value = '';
        }, 1000);
      } catch (e) {
        console.error("Firebase sync error:", e);
        btn.textContent = 'ERROR (SAVED LOCALLY)';
        if (url) initializeBanner();

        setTimeout(() => {
          btn.textContent = 'APPLY TO CLOUD >_';
          closeSettings();
        }, 2000);
      }
    }

    async function resetSettings() {
      const btn = document.getElementById('reset-settings-btn');
      btn.textContent = 'RESTORING...';

      themeSettings = {
        bgColor: "#121212",
        accentColor: "#4ade80"
      };
      currentBannerIndex = 0;

      localStorage.setItem('theme_settings_v2', JSON.stringify(themeSettings));
      localStorage.setItem('active_banner_index', currentBannerIndex.toString());

      applyThemeSettings();
      initializeBanner();

      try {
        if (window.db) {
          await window.setDoc(window.doc(window.db, "tracker_data", "settings"), {
            activeBannerIndex: 0,
            theme: themeSettings
          }, { merge: true });
        }
        btn.textContent = 'RESTORED ✓';
        setTimeout(() => {
          btn.textContent = 'RESTORE DEFAULTS';
          closeSettings();
        }, 1000);
      } catch (e) {
        console.error("Firebase sync error:", e);
        btn.textContent = 'ERROR';
        setTimeout(() => {
          btn.textContent = 'RESTORE DEFAULTS';
          closeSettings();
        }, 2000);
      }
    }

    function toggleNav() {
      const nav = document.getElementById('nav-container');
      const btn = document.getElementById('mobile-nav-toggle');
      nav.classList.toggle('show-nav');
      if (nav.classList.contains('show-nav')) {
        btn.textContent = '[-] HIDE MENU';
      } else {
        btn.textContent = '[+] MENU / TIMELINE';
      }
    }

    function toggleTask(taskId) {
      if (completedTasks.includes(taskId)) {
        completedTasks = completedTasks.filter(id => id !== taskId);
      } else {
        completedTasks.push(taskId);
      }
      localStorage.setItem('completed_tasks_masterplan_v2', JSON.stringify(completedTasks));
      renderTrackerContent();
    }

    function saveNote(taskId, noteValue) {
      taskNotes[taskId] = noteValue;
      localStorage.setItem('task_notes_masterplan_v2', JSON.stringify(taskNotes));
    }

    function renderNav() {
      const navContainer = document.getElementById('nav-container');
      navContainer.innerHTML = '';

      planData.forEach(monthData => {
        const btn = document.createElement('button');
        btn.className = `nav-item ${monthData.id === currentMonthId ? 'active' : ''}`;

        const icon = document.createElement('span');
        icon.style.fontFamily = 'var(--font-mono)';
        icon.style.opacity = '0.5';
        icon.style.fontSize = '10px';
        icon.textContent = `[${monthData.id.toUpperCase()}]`;

        const text = document.createElement('span');
        text.textContent = monthData.month;

        btn.appendChild(icon);
        btn.appendChild(text);

        if (monthData.id === currentMonthId) {
          const stars = document.createElement('div');
          stars.style.color = 'var(--accent-green)';
          stars.style.marginBottom = '6px';
          stars.style.marginLeft = '16px';
          stars.style.fontSize = '10px';
          stars.style.fontFamily = 'var(--font-mono)';
          stars.textContent = '* * *';

          btn.onclick = () => selectMonth(monthData.id);
          navContainer.appendChild(btn);
          navContainer.appendChild(stars);
        } else {
          btn.onclick = () => selectMonth(monthData.id);
          navContainer.appendChild(btn);
        }
      });
    }

    function renderTrackerContent() {
      const monthData = planData.find(m => m.id === currentMonthId);
      const contentContainer = document.getElementById('tracker-content');

      let tagsHtml = monthData.tags.map(t => `<span class="tag ${t.type}">${t.name}</span>`).join('');

      let tracksHtml = monthData.tracks.map(track => {
        const isChecked = completedTasks.includes(track.id);
        const hasNote = taskNotes[track.id] && taskNotes[track.id].trim() !== "";
        return `
                <div class="task-item ${isChecked ? 'completed-item' : ''} ${hasNote ? 'has-note' : ''}" 
                     oncontextmenu="handleRightClick(event, '${track.id}', '${track.label.replace(/'/g, "\\'")}')"
                     ontouchstart="handleTouchStart(event, '${track.id}', '${track.label.replace(/'/g, "\\'")}')"
                     ontouchend="handleTouchEnd()"
                     ontouchmove="handleTouchMove()"
                     onclick="toggleTask('${track.id}')"
                     style="cursor: pointer;">
                    <span class="task-note-badge" onclick="event.stopPropagation(); openNoteFullscreen('${track.id}', '${track.label.replace(/'/g, "\\'")}')">✦ NOTE</span>
                    <div class="task-content ${isChecked ? 'completed' : ''}">
                        <div class="task-label">
                            <span>${track.label}</span>
                        </div>
                        <div class="task-desc">${track.text}</div>
                    </div>
                </div>
                `;
      }).join('');

      contentContainer.innerHTML = `
                <div class="tracker-header">
                    <div>
                        <div class="tags-container">${tagsHtml}</div>
                        <h2 style="font-size: 24px;">${monthData.month} Operations</h2>
                    </div>
                </div>
                
                <div style="margin: 12px 0;">
                    <div class="tracker-focus">${monthData.focus}</div>
                </div>

                <div class="tasks-list">
                    ${tracksHtml}
                </div>
            `;

      const alertContainer = document.getElementById('alert-container');
      if (monthData.alert) {
        alertContainer.innerHTML = `
                    <div class="alert-box alert-${monthData.alert.type}">
                        ${monthData.alert.text}
                    </div>
                `;
      } else {
        alertContainer.innerHTML = '';
      }
    }

    let activeEditingTaskId = null;

    function handleRightClick(e, taskId, taskLabel) {
      e.preventDefault();

      activeEditingTaskId = taskId;
      document.getElementById('active-note-title').textContent = taskLabel.toUpperCase();

      // Load existing HTML content or blank
      const noteHtml = taskNotes[taskId] || "";
      document.getElementById('rich-text-area').innerHTML = noteHtml;

      // Toggle sidebars
      document.getElementById('default-right-sidebar').classList.add('hidden');
      document.getElementById('note-editor-sidebar').classList.add('active');
    }

    function closeEditor() {
      activeEditingTaskId = null;
      document.getElementById('default-right-sidebar').classList.remove('hidden');
      document.getElementById('note-editor-sidebar').classList.remove('active');
    }

    let touchTimer = null;
    function handleTouchStart(e, taskId, taskLabel) {
      touchTimer = setTimeout(() => {
        handleRightClick(e, taskId, taskLabel);
        if (navigator.vibrate) navigator.vibrate(50);
      }, 600);
    }
    function handleTouchEnd() {
      if (touchTimer) clearTimeout(touchTimer);
    }
    function handleTouchMove() {
      if (touchTimer) clearTimeout(touchTimer);
    }

    function openNoteFullscreen(taskId, taskLabel) {
      const noteHtml = taskNotes[taskId] || "";
      document.getElementById('fullscreen-note-title').textContent = taskLabel.toUpperCase();
      document.getElementById('fullscreen-note-body').innerHTML = noteHtml;
      document.getElementById('fullscreen-note-modal').style.display = 'flex';
    }

    function closeFullscreenNote() {
      document.getElementById('fullscreen-note-modal').style.display = 'none';
    }

    function execCmd(command, value = null) {
      document.execCommand(command, false, value);
      document.getElementById('rich-text-area').focus();
    }

    async function saveActiveNote() {
      if (!activeEditingTaskId) return;

      const btn = document.querySelector('.save-note-btn');
      btn.textContent = 'SAVING...';

      const htmlContent = document.getElementById('rich-text-area').innerHTML;
      taskNotes[activeEditingTaskId] = htmlContent;

      // Save locally immediately to be safe
      localStorage.setItem('task_notes_masterplan_v2', JSON.stringify(taskNotes));

      // Push to Firebase Firestore
      try {
        if (window.db) {
          await window.setDoc(window.doc(window.db, "tracker_data", "notes"), {
            [activeEditingTaskId]: htmlContent
          }, { merge: true });
        }
        btn.textContent = 'SAVED ✓';
        setTimeout(() => btn.textContent = 'SAVE TO CLOUD >_', 2000);

        // Re-render to show the note badge globally
        renderTrackerContent();
      } catch (e) {
        console.error("Firebase sync error:", e);
        btn.textContent = 'ERROR (SAVED LOCALLY)';
        setTimeout(() => btn.textContent = 'SAVE TO CLOUD >_', 3000);
      }
    }

    function selectMonth(id) {
      currentMonthId = id;
      renderNav();
      renderTrackerContent();

      const centerScroll = document.getElementById('center-scroll');
      if (centerScroll) {
        centerScroll.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    applyThemeSettings();
    initializeBanner();
    renderNav();
    renderTrackerContent();