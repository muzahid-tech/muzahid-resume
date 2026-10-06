/* =========================================================
   MUZAHIDUL ISLAM — EDITABLE RESUME APPLICATION
   app.js  ·  Vanilla JavaScript · No build step · No backend
   ========================================================= */
(function () {
  'use strict';

  /* =======================================================
     1. CONSTANTS
     ======================================================= */
  const STORAGE_KEY   = 'muzahidul.resume.data.v1';
  const PHOTO_KEY     = 'muzahidul.resume.photo.v1';
  const WEBSITE_MIGRATION_KEY = 'muzahidul.resume.website-default.v1';
  const DEFAULT_PHOTO = 'assets/image/profile.png';
  const ICON_SUGGESTIONS = [
    'fa-solid fa-book-open','fa-solid fa-pen-nib','fa-solid fa-clipboard-list',
    'fa-solid fa-file-circle-check','fa-solid fa-chalkboard','fa-solid fa-chalkboard-user',
    'fa-solid fa-clipboard-check','fa-solid fa-user-graduate','fa-solid fa-calendar-check',
    'fa-solid fa-school','fa-solid fa-user-tie','fa-solid fa-graduation-cap',
    'fa-solid fa-desktop','fa-solid fa-book','fa-solid fa-network-wired',
    'fa-solid fa-diagram-project','fa-solid fa-laptop-code','fa-solid fa-computer',
    'fa-solid fa-layer-group','fa-solid fa-code-branch','fa-solid fa-globe',
    'fa-solid fa-mobile-screen-button','fa-solid fa-bug','fa-solid fa-list-check',
    'fa-solid fa-file-code','fa-solid fa-code','fa-solid fa-microchip',
    'fa-solid fa-database','fa-solid fa-leaf','fa-solid fa-server',
    'fa-solid fa-right-left','fa-solid fa-plug','fa-solid fa-cloud',
    'fa-solid fa-robot','fa-solid fa-wand-magic-sparkles','fa-solid fa-terminal',
    'fa-solid fa-brain','fa-solid fa-gears','fa-solid fa-spider',
    'fa-solid fa-arrows-spin','fa-solid fa-magnifying-glass','fa-solid fa-magnifying-glass-chart',
    'fa-solid fa-wrench','fa-solid fa-bullhorn','fa-solid fa-hashtag',
    'fa-solid fa-envelope-open-text','fa-solid fa-filter','fa-solid fa-screwdriver-wrench',
    'fa-solid fa-wind','fa-solid fa-compact-disc','fa-solid fa-calculator',
    'fa-solid fa-receipt','fa-solid fa-palette','fa-solid fa-image',
    'fa-solid fa-film','fa-solid fa-scissors','fa-solid fa-shield-halved',
    'fa-solid fa-circle-dot',
    'fa-brands fa-html5','fa-brands fa-css3-alt','fa-brands fa-js',
    'fa-brands fa-bootstrap','fa-brands fa-react','fa-brands fa-angular',
    'fa-brands fa-php','fa-brands fa-laravel','fa-brands fa-node-js',
    'fa-brands fa-microsoft','fa-brands fa-python','fa-brands fa-java',
    'fa-brands fa-swift','fa-brands fa-aws','fa-brands fa-git-alt',
    'fa-brands fa-github','fa-brands fa-windows','fa-brands fa-linux',
    'fa-brands fa-android'
  ];

  /* Placeholder used only if the profile image is missing.
     Never used to render the document itself — text stays text. */
  const PLACEHOLDER_SVG = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">' +
      '<rect width="240" height="240" fill="#e8eef5"/>' +
      '<circle cx="120" cy="92" r="42" fill="#b9c9da"/>' +
      '<path d="M32 232c0-46 39-74 88-74s88 28 88 74z" fill="#b9c9da"/>' +
    '</svg>'
  );

  /* =======================================================
     2. DEFAULT RESUME DATA  (source of truth — unmodified)
     ======================================================= */
  const DEFAULT_DATA = {
    personal: {
      name:       'MUZAHIDUL ISLAM',
      coverTitle: 'PRINCIPAL · EDUCATOR · ENGINEER',
      identity:   'English Teacher · Computer Science Teacher · Software Engineer',
      statement:  'Education professional holding an MCA, an MA in English, and a background in software engineering, with extensive experience across academic leadership, English teaching, Computer Science education, and software development. Unites classroom practice with modern technical expertise.',
      address:    'No 2 Kuwari Pukhuri, Kharupetia, Darrang, Assam, India - 784115',
      phone:      '+91 91012 14304',
      email:      'muzahid.tech.edu@gmail.com',
      website:    'https://muzahid-tech.github.io/Muzahid_The_Tech_Master/',
      linkedin:   'muzahid-tech',
      github:     'muzahid-tech'
    },

    profile: 'MCA, Software Engineer and MA in English qualified education professional with extensive experience in academic leadership, English teaching, Computer Science education, and software development. Currently serving as Principal and English Teacher at Darrang Royal Academy (DRA). Combines deep expertise in English grammar and literature, academic writing, school management, digital education, programming, web development, databases, APIs, AI tools, and emerging technologies. Committed to strengthening academic standards through disciplined leadership, technology-enabled learning, and practical, project-based education.',

    competencies: [
      'Educational Leadership',
      'Full-Stack Dev',
      'AI Integration',
      'Project Management',
      'Digital Education',
      'Cloud Computing'
    ],

    technicalSkills: [
      { label: 'Full-Stack Development', value: 92 },
      { label: 'AI & Automation',        value: 85 },
      { label: 'Cloud & DevOps',         value: 78 },
      { label: 'Database Management',    value: 88 },
      { label: 'Digital Marketing',      value: 75 }
    ],

    languages: [
      { name: 'English',  level: 'Fluent' },
      { name: 'Assamese', level: 'Fluent' },
      { name: 'Bengali',  level: 'Fluent' },
      { name: 'Hindi',    level: 'Fluent' }
    ],

    certifications: [
      'Bisharad – Hindi',
      'PGDCA – CCERT',
      'Digital Marketing – LinkedIn',
      'Cyber Security – SkillUp',
      'Ethical Hacking – Programming Hub',
      'EA Supervisor – NSEIT'
    ],

    experience: [
      {
        role: 'Principal & English Teacher',
        date: 'Present',
        org:  'Darrang Royal Academy (DRA), Darrang, Assam',
        bullets: [
          'Provide academic and administrative leadership, overseeing school operations, academic planning, teacher coordination, student discipline, and institutional development.',
          'Lead English instruction in Grammar, Literature, Writing, Reading, and Comprehension while supporting academic performance and examination preparation.',
          'Promote digital classrooms, modern teaching practices, effective school management, and improved student engagement and learning outcomes.'
        ]
      },
      {
        role: 'English Teacher',
        date: '2024 – 2026',
        org:  'Lakhimpur Markaz Academy (Super - 40), Lakhimpur, Assam',
        bullets: [
          'Taught English Grammar, Literature, Writing, Reading, and Comprehension, preparing lesson plans, study materials, assignments, and assessments.',
          'Guided students in examination preparation, monitored academic progress, and helped improve communication, writing, vocabulary, and overall English proficiency.',
          'Promoted interactive and digital teaching methods, maintained classroom discipline, and supported student engagement and effective learning outcomes.'
        ]
      },
      {
        role: 'English Teacher & Computer Science Teacher',
        date: '2023 – 2024',
        org:  'Creative Mission Academy, Donbosco',
        bullets: [
          'Delivered English and Computer Science instruction across middle and secondary levels, covering grammar, literature, programming fundamentals, computer applications, and practical computer skills.',
          'Implemented activity-based and project-based learning through laboratory sessions, coding demonstrations, debates, speech programmes, and writing workshops.',
          "Used digital and interactive teaching methods, contributing to approximately 25% improvement in students' practical examination results."
        ]
      },
      {
        role: 'Software Engineering Intern',
        date: '2022 – 2024',
        org:  'Eurofins IT Solution',
        bullets: [
          'Developed responsive and user-friendly websites and web applications using HTML, CSS, JavaScript, PHP, and related web technologies.',
          'Worked across frontend, backend, database, and API integration to develop functional web application features.',
          'Improved usability, responsiveness, and performance while supporting testing, debugging, maintenance, and ongoing development.'
        ]
      },
      {
        role: 'Website Developer',
        date: '2021 – 2022',
        org:  'Fidelity Investments India',
        bullets: [
          'Supported software engineering and application development projects involving coding, frontend and backend development, and database-related tasks.',
          'Participated in the software development lifecycle, including development, testing, debugging, and technical problem-solving.',
          'Collaborated with development teams using version control, code maintenance, testing, and documentation practices.'
        ]
      },
      {
        role: 'Online English Tutor',
        date: '2019 – 2021',
        org:  'Dhula Public Academy',
        bullets: [
          'Delivered online English classes using virtual teaching tools and customized lessons based on student learning needs.',
          'Taught grammar, literature, writing, reading, and comprehension to improve participation and academic performance.'
        ]
      }
    ],

    education: [
      { institution: 'IGNOU',                     date: '2026',        degree: 'Master of Arts (MA) in English' },
      { institution: 'Bengaluru University',      date: '2023 – 2025', degree: 'Master of Computer Applications (MCA)' },
      { institution: 'WAP Institute',             date: '2021 – 2023', degree: 'Software Engineering with CIT' },
      { institution: 'Manipal University Jaipur', date: '2019 – 2022', degree: 'Bachelor of Computer Applications (BCA)' },
      { institution: 'Kharupetia College',        date: '2015 – 2018', degree: 'Bachelor of Arts in English' }
    ],

    skills: [
      {
        title: 'Teaching & Leadership',
        icon: 'fa-solid fa-chalkboard-user',
        items: [
          { text: 'English Grammar & Literature', icon: 'fa-solid fa-book-open' },
          { text: 'Academic Writing', icon: 'fa-solid fa-pen-nib' },
          { text: 'Lesson Planning', icon: 'fa-solid fa-clipboard-list' },
          { text: 'Examination Preparation', icon: 'fa-solid fa-file-circle-check' },
          { text: 'Classroom Management', icon: 'fa-solid fa-chalkboard' },
          { text: 'Student Assessment', icon: 'fa-solid fa-clipboard-check' },
          { text: 'Student Mentoring', icon: 'fa-solid fa-user-graduate' },
          { text: 'Academic Planning', icon: 'fa-solid fa-calendar-check' },
          { text: 'School Management', icon: 'fa-solid fa-school' },
          { text: 'Educational Leadership', icon: 'fa-solid fa-user-tie' }
        ]
      },
      {
        title: 'Educational Technology',
        icon: 'fa-solid fa-laptop-code',
        items: [
          { text: 'Digital Education', icon: 'fa-solid fa-graduation-cap' },
          { text: 'Digital Classroom', icon: 'fa-solid fa-desktop' },
          { text: 'Digital Notebook', icon: 'fa-solid fa-book' },
          { text: 'ICT-Based Learning', icon: 'fa-solid fa-network-wired' },
          { text: 'Project-Based Learning', icon: 'fa-solid fa-diagram-project' },
          { text: 'Computer Science Teaching', icon: 'fa-solid fa-laptop-code' },
          { text: 'Computer Laboratory Instruction', icon: 'fa-solid fa-computer' }
        ]
      },
      {
        title: 'Software Engineering',
        icon: 'fa-solid fa-code',
        items: [
          { text: 'Full-Stack Development', icon: 'fa-solid fa-layer-group' },
          { text: 'Frontend & Backend', icon: 'fa-solid fa-code-branch' },
          { text: 'Web Applications', icon: 'fa-solid fa-globe' },
          { text: 'Mobile Development', icon: 'fa-solid fa-mobile-screen-button' },
          { text: 'Software Testing & Debugging', icon: 'fa-solid fa-bug' },
          { text: 'Project Management', icon: 'fa-solid fa-list-check' },
          { text: 'Technical Documentation', icon: 'fa-solid fa-file-code' }
        ]
      },
      {
        title: 'Technologies',
        icon: 'fa-solid fa-microchip',
        items: [
          { text: 'HTML5', icon: 'fa-brands fa-html5' },
          { text: 'CSS', icon: 'fa-brands fa-css3-alt' },
          { text: 'JavaScript', icon: 'fa-brands fa-js' },
          { text: 'jQuery', icon: 'fa-solid fa-code' },
          { text: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
          { text: 'Tailwind CSS', icon: 'fa-solid fa-wind' },
          { text: 'React.js', icon: 'fa-brands fa-react' },
          { text: 'Angular', icon: 'fa-brands fa-angular' },
          { text: 'PHP', icon: 'fa-brands fa-php' },
          { text: 'Laravel', icon: 'fa-brands fa-laravel' },
          { text: 'Node.js', icon: 'fa-brands fa-node-js' },
          { text: 'ASP.NET', icon: 'fa-brands fa-microsoft' },
          { text: 'Python', icon: 'fa-brands fa-python' },
          { text: 'Java', icon: 'fa-brands fa-java' },
          { text: 'Kotlin', icon: 'fa-solid fa-code' },
          { text: 'C#', icon: 'fa-solid fa-hashtag' },
          { text: 'Swift', icon: 'fa-brands fa-swift' }
        ]
      },
      {
        title: 'Data, API & Cloud',
        icon: 'fa-solid fa-cloud',
        items: [
          { text: 'MySQL', icon: 'fa-solid fa-database' },
          { text: 'MongoDB', icon: 'fa-solid fa-leaf' },
          { text: 'Database Integration', icon: 'fa-solid fa-server' },
          { text: 'REST API', icon: 'fa-solid fa-right-left' },
          { text: 'API Integration', icon: 'fa-solid fa-plug' },
          { text: 'AWS Cloud', icon: 'fa-brands fa-aws' },
          { text: 'Git', icon: 'fa-brands fa-git-alt' },
          { text: 'GitHub', icon: 'fa-brands fa-github' }
        ]
      },
      {
        title: 'AI & Automation',
        icon: 'fa-solid fa-robot',
        items: [
          { text: 'Generative AI', icon: 'fa-solid fa-wand-magic-sparkles' },
          { text: 'AI Tools', icon: 'fa-solid fa-robot' },
          { text: 'Prompt Engineering', icon: 'fa-solid fa-terminal' },
          { text: 'AI-Assisted Development', icon: 'fa-solid fa-microchip' },
          { text: 'Machine Learning', icon: 'fa-solid fa-brain' },
          { text: 'Data Processing', icon: 'fa-solid fa-gears' },
          { text: 'Data Scraping', icon: 'fa-solid fa-spider' },
          { text: 'Workflow Automation', icon: 'fa-solid fa-arrows-spin' }
        ]
      },
      {
        title: 'Digital Marketing',
        icon: 'fa-solid fa-bullhorn',
        items: [
          { text: 'SEO', icon: 'fa-solid fa-magnifying-glass' },
          { text: 'On-Page & Off-Page SEO', icon: 'fa-solid fa-magnifying-glass-chart' },
          { text: 'Technical SEO', icon: 'fa-solid fa-wrench' },
          { text: 'Digital Advertising', icon: 'fa-solid fa-bullhorn' },
          { text: 'Social Media Advertising', icon: 'fa-solid fa-hashtag' },
          { text: 'Email Marketing', icon: 'fa-solid fa-envelope-open-text' },
          { text: 'Lead Generation', icon: 'fa-solid fa-filter' },
          { text: 'Marketing Automation', icon: 'fa-solid fa-arrows-spin' }
        ]
      },
      {
        title: 'Systems & Tools',
        icon: 'fa-solid fa-screwdriver-wrench',
        items: [
          { text: 'Windows', icon: 'fa-brands fa-windows' },
          { text: 'Kali Linux', icon: 'fa-solid fa-shield-halved' },
          { text: 'Ubuntu', icon: 'fa-brands fa-linux' },
          { text: 'OS Installation', icon: 'fa-solid fa-compact-disc' },
          { text: 'VS Code', icon: 'fa-solid fa-code' },
          { text: 'Android Studio', icon: 'fa-brands fa-android' },
          { text: 'XAMPP', icon: 'fa-solid fa-server' },
          { text: 'WAMP', icon: 'fa-solid fa-server' },
          { text: 'MS Office', icon: 'fa-solid fa-file-word' },
          { text: 'Tally ERP 9', icon: 'fa-solid fa-calculator' },
          { text: 'Vyapar', icon: 'fa-solid fa-receipt' },
          { text: 'Canva', icon: 'fa-solid fa-palette' },
          { text: 'Adobe Photoshop', icon: 'fa-solid fa-image' },
          { text: 'Filmora', icon: 'fa-solid fa-film' },
          { text: 'CapCut', icon: 'fa-solid fa-scissors' }
        ]
      }
    ],

    strengths: [
      'Educational Leadership','School Administration','English Communication',
      'Presentation Skills','Public Speaking','Technical Communication',
      'Problem-Solving','Adaptability','Technology Integration'
    ],

    references: 'Available upon request'
  };

  /* =======================================================
     3. SMALL UTILITIES
     ======================================================= */
  const $  = (sel, root) => (root || document).querySelector(sel);

  const esc = (v) => String(v == null ? '' : v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const clone = (o) => JSON.parse(JSON.stringify(o));

  const clamp = (n, min, max) => Math.min(max, Math.max(min, Number(n) || 0));

  const cssId = (path) => path.replace(/[^a-zA-Z0-9_-]/g, '-');

  /* safe localStorage wrapper (survives private-browsing failures) */
  const store = {
    get(k)     { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v)  { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
    remove(k)  { try { localStorage.removeItem(k); } catch (e) { /* noop */ } }
  };

  /* deep merge — arrays replace, objects merge, missing keys fall back */
  function deepMerge(base, patch) {
    if (Array.isArray(base)) return Array.isArray(patch) ? patch : base;
    if (base && typeof base === 'object') {
      const out = Object.assign({}, base);
      if (patch && typeof patch === 'object') {
        Object.keys(patch).forEach((k) => {
          out[k] = (k in base) ? deepMerge(base[k], patch[k]) : patch[k];
        });
      }
      return out;
    }
    return patch === undefined ? base : patch;
  }

  function getPath(obj, path) {
    return path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
  }
  function setPath(obj, path, value) {
    const parts = path.split('.');
    let cur = obj;
    for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
    cur[parts[parts.length - 1]] = value;
  }

  /* =======================================================
     4. DOM REFERENCES
     ======================================================= */
  const el = {
    coverPhoto:      $('#coverPhoto'),
    coverName:       $('#coverName'),
    coverTitle:      $('#coverTitle'),
    coverIdentity:   $('#coverIdentity'),
    coverStatement:  $('#coverStatement'),
    coverContact:    $('#coverContact'),
    coverYear:       $('#coverYear'),

    resumeName:      $('#resumeName'),
    resumeIdentity:  $('#resumeIdentity'),
    resumePhoto:     $('#resumePhoto'),
    resumeContact:   $('#resumeContact'),

    profileText:     $('#profileText'),
    experienceList:  $('#experienceList'),
    educationList:   $('#educationList'),
    skillsList:      $('#skillsList'),
    competenciesList:$('#competenciesList'),
    techSkillsList:  $('#techSkillsList'),
    languagesList:   $('#languagesList'),
    certificationsList: $('#certificationsList'),
    strengthsList:   $('#strengthsList'),
    referencesText:  $('#referencesText'),

    brandSub:        $('#brandSub'),

    btnEditToggle:   $('#btnEditToggle'),
    btnEditLabel:    $('#btnEditLabel'),
    btnPrint:        $('#btnPrint'),
    btnPdf:          $('#btnPdf'),
    btnShare:        $('#btnShare'),

    fabEdit:         $('#fabEdit'),
    fabPrint:        $('#fabPrint'),
    fabPdf:          $('#fabPdf'),
    fabShare:        $('#fabShare'),

    shareMenu:       $('#shareMenu'),

    editorPanel:     $('#editorPanel'),
    editorBody:      $('#editorBody'),
    btnCloseEditor:  $('#btnCloseEditor'),
    btnSave:         $('#btnSave'),
    btnReset:        $('#btnReset'),

    photoInput:      $('#photoInput'),
    toast:           $('#toast')
  };

  /* =======================================================
     5. APPLICATION STATE
     ======================================================= */
  let state = { data: clone(DEFAULT_DATA) };  // persisted data
  let draft = null;                            // editor working copy
  let viewData = state.data;                   // data currently rendered

  /* =======================================================
     6. TOAST
     ======================================================= */
  let toastTimer = null;
  function toast(message) {
    el.toast.textContent = message;
    el.toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.remove('is-visible'), 2800);
  }

  /* =======================================================
     7. PROFILE PICTURE
     ======================================================= */
  function currentPhotoSrc() {
    return store.get(PHOTO_KEY) || DEFAULT_PHOTO;
  }

  function applyPhoto(src) {
    const finalSrc = src || DEFAULT_PHOTO;
    [el.coverPhoto, el.resumePhoto].forEach((img) => {
      img.onerror = function () {
        this.onerror = null;
        this.src = PLACEHOLDER_SVG;
      };
      img.src = finalSrc;
    });
  }

  function updateEditorPhotoPreview() {
    const prev = $('#photoPreview');
    if (prev) {
      prev.onerror = function () { this.onerror = null; this.src = PLACEHOLDER_SVG; };
      prev.src = currentPhotoSrc();
    }
  }

  function handlePhotoFile(file) {
    if (!file || !file.type || file.type.indexOf('image/') !== 0) {
      toast('Please choose a valid image file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        /* Resize ONLY the avatar. The document itself is never rasterised. */
        const MAX = 700;
        let w = img.naturalWidth  || img.width;
        let h = img.naturalHeight || img.height;
        const scale = Math.min(1, MAX / Math.max(w, h));
        w = Math.max(1, Math.round(w * scale));
        h = Math.max(1, Math.round(h * scale));

        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.88);

        if (!store.set(PHOTO_KEY, dataUrl)) {
          toast('Photo applied, but too large to save permanently in this browser.');
        } else {
          toast('Profile picture updated.');
        }

        applyPhoto(dataUrl);
        updateEditorPhotoPreview();
      };
      img.onerror = () => toast('That image could not be read.');
      img.src = reader.result;
    };
    reader.onerror = () => toast('That file could not be read.');
    reader.readAsDataURL(file);
  }

  function removePhoto() {
    store.remove(PHOTO_KEY);
    applyPhoto(null);
    updateEditorPhotoPreview();
    toast('Profile picture removed.');
  }

  /* =======================================================
     8. CONTACT ITEM BUILDER
     ======================================================= */
  function contactItems(data) {
    const p = data.personal || {};
    const items = [];

    if (p.address) items.push({ icon: 'fa-solid fa-location-dot', text: p.address });

    if (p.phone) {
      items.push({
        icon: 'fa-solid fa-phone',
        text: p.phone,
        href: 'tel:' + String(p.phone).replace(/[^\d+]/g, '')
      });
    }

    if (p.email) {
      items.push({ icon: 'fa-solid fa-envelope', text: p.email, href: 'mailto:' + p.email });
    }

    if (p.website) {
      const url = /^https?:\/\//i.test(p.website) ? p.website : 'https://' + p.website;
      const text = p.website.replace(/^https?:\/\//i, '').replace(/\/+$/, '');
      items.push({ icon: 'fa-solid fa-globe', text, href: url, external: true });
    }

    if (p.linkedin) {
      items.push({
        icon: 'fa-brands fa-linkedin-in',
        text: p.linkedin,
        href: 'https://www.linkedin.com/in/' + encodeURIComponent(p.linkedin),
        external: true
      });
    }

    if (p.github) {
      items.push({
        icon: 'fa-brands fa-github',
        text: p.github,
        href: 'https://github.com/' + encodeURIComponent(p.github),
        external: true
      });
    }

    return items;
  }

  function renderContact(target, items) {
    if (!target) return;
    target.innerHTML = items.map((it) => {
      const inner = '<i class="' + it.icon + '" aria-hidden="true"></i><span>' +
                    esc(it.text) + '</span>';
      if (!it.href) return '<li>' + inner + '</li>';
      const attrs = it.external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return '<li><a href="' + esc(it.href) + '"' + attrs + '>' + inner + '</a></li>';
    }).join('');
  }

  /* =======================================================
     9. SECTION RENDERERS
     ======================================================= */
  function renderExperience(target, list) {
    if (!target) return;
    target.innerHTML = (list || []).map((x) => {
      const bullets = (x.bullets || []).filter(Boolean);
      return '' +
        '<article class="exp-item">' +
          '<div class="exp-item__head">' +
            '<h3 class="exp-item__role">' + esc(x.role) + '</h3>' +
            '<span class="exp-item__date">' + esc(x.date) + '</span>' +
          '</div>' +
          (x.org ? '<p class="exp-item__org">' + esc(x.org) + '</p>' : '') +
          (bullets.length
            ? '<ul>' + bullets.map((b) => '<li>' + esc(b) + '</li>').join('') + '</ul>'
            : '') +
        '</article>';
    }).join('');
  }

  function renderEducation(target, list) {
    if (!target) return;
    target.innerHTML = (list || []).map((x) =>
      '<article class="edu-item">' +
        '<div class="edu-item__head">' +
          '<h3 class="edu-item__inst">' + esc(x.institution) + '</h3>' +
          '<span class="edu-item__date">' + esc(x.date) + '</span>' +
        '</div>' +
        '<p class="edu-item__degree">' + esc(x.degree) + '</p>' +
      '</article>'
    ).join('');
  }

  const ITEM_ICONS = {
    'Digital Education': 'fa fa-laptop',
    'Digital Classroom': 'fa fa-chalkboard',
    'Digital Notebook': 'fa fa-book',
    'ICT-Based Learning': 'fa fa-display',
    'Project-Based Learning': 'fa fa-diagram-project',
    'Computer Science Teaching': 'fa fa-computer',
    'Computer Laboratory Instruction': 'fa fa-desktop',
    'Full-Stack Development': 'fa fa-layer-group',
    'Frontend & Backend': 'fa fa-code',
    'Web Applications': 'fa fa-window-maximize',
    'Mobile Development': 'fa fa-mobile-screen-button',
    'Software Testing & Debugging': 'fa fa-bug',
    'Project Management': 'fa fa-list-check',
    'Technical Documentation': 'fa fa-file-lines',
    'HTML5': 'fa fa-code',
    'CSS': 'fa fa-palette',
    'JavaScript': 'fa fa-bolt',
    'jQuery': 'fa fa-code',
    'Bootstrap': 'fa fa-layer-group',
    'Tailwind CSS': 'fa fa-paintbrush',
    'React.js': 'fa fa-atom',
    'Angular': 'fa fa-shield-halved',
    'PHP': 'fa fa-code',
    'Laravel': 'fa fa-fire',
    'Node.js': 'fa fa-server',
    'ASP.NET': 'fa fa-window-restore',
    'Python': 'fa fa-terminal',
    'Java': 'fa fa-mug-hot',
    'Kotlin': 'fa fa-mobile-screen-button',
    'C#': 'fa fa-hashtag',
    'Swift': 'fa fa-feather-pointed',
    'MySQL': 'fa fa-database',
    'MongoDB': 'fa fa-leaf',
    'Database Integration': 'fa fa-link',
    'REST API': 'fa fa-plug',
    'API Integration': 'fa fa-diagram-project',
    'AWS Cloud': 'fa fa-cloud',
    'Git': 'fa fa-code-branch',
    'GitHub': 'fa fa-code-branch',
    'Generative AI': 'fa fa-wand-magic-sparkles',
    'AI Tools': 'fa fa-robot',
    'Prompt Engineering': 'fa fa-comments',
    'AI-Assisted Development': 'fa fa-laptop-code',
    'Machine Learning': 'fa fa-brain',
    'Data Processing': 'fa fa-gears',
    'Data Scraping': 'fa fa-spider',
    'Workflow Automation': 'fa fa-gears',
    'SEO': 'fa fa-magnifying-glass',
    'On-Page & Off-Page SEO': 'fa fa-file-circle-check',
    'Technical SEO': 'fa fa-screwdriver-wrench',
    'Digital Advertising': 'fa fa-bullhorn',
    'Social Media Advertising': 'fa fa-share-nodes',
    'Email Marketing': 'fa fa-envelope',
    'Lead Generation': 'fa fa-user-plus',
    'Marketing Automation': 'fa fa-arrows-rotate',
    'Windows': 'fa fa-desktop',
    'Kali Linux': 'fa fa-user-secret',
    'Ubuntu': 'fa fa-terminal',
    'OS Installation': 'fa fa-compact-disc',
    'VS Code': 'fa fa-code',
    'Android Studio': 'fa fa-mobile-screen-button',
    'XAMPP': 'fa fa-server',
    'WAMP': 'fa fa-server',
    'MS Office': 'fa fa-file-lines',
    'Tally ERP 9': 'fa fa-calculator',
    'Vyapar': 'fa fa-receipt',
    'Canva': 'fa fa-pen-nib',
    'Adobe Photoshop': 'fa fa-image',
    'Filmora': 'fa fa-film',
    'CapCut': 'fa fa-scissors',
    'Educational Leadership': 'fa fa-users-gear',
    'Full-Stack Dev': 'fa fa-layer-group',
    'AI Integration': 'fa fa-wand-magic-sparkles',
    'Cloud Computing': 'fa fa-cloud',
    'English': 'fa fa-language',
    'Assamese': 'fa fa-language',
    'Bengali': 'fa fa-language',
    'Hindi': 'fa fa-language',
    'School Administration': 'fa fa-school',
    'English Communication': 'fa fa-comments',
    'Presentation Skills': 'fa fa-person-chalkboard',
    'Public Speaking': 'fa fa-microphone',
    'Technical Communication': 'fa fa-comment-dots',
    'Problem-Solving': 'fa fa-puzzle-piece',
    'Adaptability': 'fa fa-arrows-rotate',
    'Technology Integration': 'fa fa-plug'
  };

  function normalizeSkillGroups(groups) {
    const defaultIcons = new Map();
    DEFAULT_DATA.skills.forEach((group) => {
      group.items.forEach((item) => defaultIcons.set(item.text, item.icon));
    });

    return (groups || []).map((group) => {
      const source = group && typeof group === 'object' ? group : {};
      const legacyIcons = Array.isArray(source.itemIcons) ? source.itemIcons : [];
      const normalized = Object.assign({}, source);
      normalized.items = (Array.isArray(source.items) ? source.items : []).map((item, index) => {
        const isObject = item && typeof item === 'object';
        const text = isObject ? String(item.text || '') : String(item == null ? '' : item);
        const icon = isObject
          ? (item.icon || defaultIcons.get(text) || 'fa-solid fa-circle-dot')
          : (defaultIcons.get(text) || legacyIcons[index] || ITEM_ICONS[text] || 'fa-solid fa-circle-dot');
        return { text, icon };
      });
      delete normalized.itemIcons;
      return normalized;
    });
  }

  function renderSkillGroups(target, list) {
    if (!target) return;
    target.innerHTML = (list || []).map((g) =>
      '<div class="skill-group">' +
        '<h3 class="skill-group__title">' +
          '<i class="' + esc(g.icon || 'fa-solid fa-circle-dot') + '" aria-hidden="true"></i>' +
          esc(g.title) +
        '</h3>' +
        '<div class="skill-group__items">' +
          (g.items || []).map((item) => {
            const isObject = item && typeof item === 'object';
            const text = isObject ? (item.text || '') : String(item || '');
            const icon = isObject ? (item.icon || '') : '';
            return '<span class="chip">' +
              (icon ? '<i class="' + esc(icon) + '" aria-hidden="true"></i>' : '') +
              '<span>' + esc(text) + '</span></span>';
          }).join('') +
        '</div>' +
      '</div>'
    ).join('');
  }

  function renderTags(target, list, withIcons) {
    if (!target) return;
    target.innerHTML = (list || []).map((t) =>
      '<li>' +
        (withIcons !== false && ITEM_ICONS[t] ? '<i class="' + esc(ITEM_ICONS[t]) + '" aria-hidden="true"></i>' : '') +
        esc(t) +
      '</li>'
    ).join('');
  }

  function renderBars(target, list) {
    if (!target) return;
    target.innerHTML = (list || []).map((s) => {
      const v = clamp(s.value, 0, 100);
      return '' +
        '<div class="bar">' +
          '<div class="bar__head">' +
            '<span class="bar__label">' + esc(s.label) + '</span>' +
            '<span class="bar__pct">' + v + '%</span>' +
          '</div>' +
          '<div class="bar__track" role="progressbar" aria-valuenow="' + v + '" ' +
               'aria-valuemin="0" aria-valuemax="100" ' +
               'aria-label="' + esc(s.label) + '">' +
            '<div class="bar__fill" style="width:' + v + '%"></div>' +
          '</div>' +
        '</div>';
    }).join('');
  }

  function renderLanguages(target, list) {
    if (!target) return;
    target.innerHTML = (list || []).map((l) =>
      '<li>' +
        '<span class="lang-list__name">' + esc(l.name) + '</span>' +
        '<span class="lang-list__level">— ' + esc(l.level) + '</span>' +
      '</li>'
    ).join('');
  }

  function renderCertifications(target, list) {
    if (!target) return;
    target.innerHTML = (list || []).map((c) =>
      '<li>' +
        '<span>' + esc(c) + '</span>' +
      '</li>'
    ).join('');
  }

  /* =======================================================
     10. MASTER RENDER
     ======================================================= */
  function render() {
    const d = viewData;
    const p = d.personal || {};
    const contacts = contactItems(d);

    /* ---- cover ---- */
    if (el.coverName)      el.coverName.textContent      = p.name || '';
    if (el.coverTitle)     el.coverTitle.textContent     = p.coverTitle || '';
    if (el.coverIdentity)  el.coverIdentity.textContent  = p.identity || '';
    if (el.coverStatement) el.coverStatement.textContent = p.statement || '';
    if (el.coverYear)      el.coverYear.textContent      = String(new Date().getFullYear());
    renderContact(el.coverContact, contacts);

    /* ---- resume header ---- */
    if (el.resumeName)     el.resumeName.textContent     = p.name || '';
    if (el.resumeIdentity) el.resumeIdentity.textContent = p.identity || '';
    renderContact(el.resumeContact, contacts);

    /* ---- sections ---- */
    if (el.profileText)        el.profileText.textContent = d.profile || '';
    if (el.referencesText)     el.referencesText.textContent = d.references || '';

    renderExperience(el.experienceList, d.experience);
    renderEducation(el.educationList, d.education);
    renderSkillGroups(el.skillsList, d.skills);
    renderTags(el.competenciesList, d.competencies, false);
    renderBars(el.techSkillsList, d.technicalSkills);
    renderLanguages(el.languagesList, d.languages);
    renderCertifications(el.certificationsList, d.certifications);
    renderTags(el.strengthsList, d.strengths, false);

    /* ---- chrome ---- */
    if (el.brandSub) el.brandSub.textContent = p.name || '';
    document.title = (p.name || 'Resume') + ' — ' + (p.identity || 'Resume');
  }

  let rafPending = false;
  function scheduleRender() {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      rafPending = false;
      render();
    });
  }

  /* =======================================================
     11. EDITOR — TEMPLATES FOR NEW ITEMS
     ======================================================= */
  const TEMPLATES = {
    experience: () => ({
      role: 'New Position',
      date: 'Year – Year',
      org: 'Organisation Name',
      bullets: ['Describe a key responsibility or achievement.']
    }),
    education: () => ({
      institution: 'Institution Name',
      date: 'Year – Year',
      degree: 'Degree / Qualification'
    }),
    competencies: () => 'New Competency',
    technicalSkills: () => ({ label: 'New Skill', value: 70 }),
    languages: () => ({ name: 'Language', level: 'Fluent' }),
    certifications: () => 'New Certification',
    skills: () => ({
      title: 'New Skill Group',
      icon: 'fa-solid fa-circle-dot',
      items: [{ text: 'New Skill', icon: 'fa-solid fa-circle-dot' }]
    }),
    skillItem: () => ({ text: 'New Skill', icon: 'fa-solid fa-circle-dot' }),
    strengths: () => 'New Strength'
  };

  /* =======================================================
     12. EDITOR — FIELD BUILDERS
     ======================================================= */
  function field(label, path, value) {
    const id = 'f-' + cssId(path);
    return '<div class="field">' +
      '<label for="' + id + '">' + esc(label) + '</label>' +
      '<input id="' + id + '" type="text" data-path="' + esc(path) + '" ' +
             'value="' + esc(value == null ? '' : value) + '">' +
    '</div>';
  }

  function fieldNum(label, path, value, min, max) {
    const id = 'f-' + cssId(path);
    return '<div class="field">' +
      '<label for="' + id + '">' + esc(label) + '</label>' +
      '<input id="' + id + '" type="number" min="' + min + '" max="' + max + '" ' +
             'data-path="' + esc(path) + '" value="' + esc(value == null ? 0 : value) + '">' +
    '</div>';
  }

  function fieldArea(label, path, value, rows) {
    const id = 'f-' + cssId(path);
    return '<div class="field">' +
      '<label for="' + id + '">' + esc(label) + '</label>' +
      '<textarea id="' + id + '" rows="' + (rows || 4) + '" data-path="' + esc(path) + '">' +
        esc(value == null ? '' : value) +
      '</textarea>' +
    '</div>';
  }

  function fieldLines(label, path, value, rows) {
    const id = 'f-' + cssId(path);
    const text = Array.isArray(value) ? value.join('\n') : (value || '');
    return '<div class="field">' +
      '<label for="' + id + '">' + esc(label) + '</label>' +
      '<textarea id="' + id + '" rows="' + (rows || 4) + '" data-lines="' + esc(path) + '">' +
        esc(text) +
      '</textarea>' +
      '<small class="hint">One item per line.</small>' +
    '</div>';
  }

  function moveButtons(listPath, index, total) {
    return '' +
      '<button type="button" class="mini-btn" data-action="move-up" ' +
        'data-list="' + esc(listPath) + '" data-index="' + index + '" ' +
        (index === 0 ? 'disabled ' : '') +
        'aria-label="Move up" title="Move up">' +
        '<i class="fa-solid fa-arrow-up" aria-hidden="true"></i></button>' +
      '<button type="button" class="mini-btn" data-action="move-down" ' +
        'data-list="' + esc(listPath) + '" data-index="' + index + '" ' +
        (index === total - 1 ? 'disabled ' : '') +
        'aria-label="Move down" title="Move down">' +
        '<i class="fa-solid fa-arrow-down" aria-hidden="true"></i></button>' +
      '<button type="button" class="mini-btn mini-btn--del" data-action="delete" ' +
        'data-list="' + esc(listPath) + '" data-index="' + index + '" ' +
        'aria-label="Delete" title="Delete">' +
        '<i class="fa-solid fa-trash" aria-hidden="true"></i></button>';
  }

  function cardShell(label, index, total, listPath, body) {
    return '<div class="ed-card">' +
      '<div class="ed-card__bar">' +
        '<span class="ed-card__idx">' + esc(label) + ' ' + (index + 1) + '</span>' +
        '<div class="ed-card__tools">' + moveButtons(listPath, index, total) + '</div>' +
      '</div>' +
      body +
    '</div>';
  }

  function objectListGroup(opts) {
    const items = opts.items || [];
    const cards = items.map((item, i) =>
      cardShell(opts.label, i, items.length, opts.listPath, opts.body(item, i))
    ).join('');

    return '<section class="ed-group">' +
      '<div class="ed-group__head">' +
        '<h3><i class="' + opts.icon + '" aria-hidden="true"></i>' + esc(opts.title) + '</h3>' +
        '<span class="ed-group__count">' + items.length + '</span>' +
      '</div>' +
      '<div class="ed-group__body">' +
        (cards || '<p class="hint">No entries yet.</p>') +
        '<button type="button" class="btn-add" data-action="add" data-list="' + esc(opts.listPath) + '">' +
          '<i class="fa-solid fa-plus" aria-hidden="true"></i> Add ' + esc(opts.label) +
        '</button>' +
      '</div>' +
    '</section>';
  }

  function stringListGroup(opts) {
    const items = opts.items || [];
    const cards = items.map((value, i) =>
      '<div class="ed-card">' +
        '<div class="ed-card__bar">' +
          '<span class="ed-card__idx">' + esc(opts.label) + ' ' + (i + 1) + '</span>' +
          '<div class="ed-card__tools">' + moveButtons(opts.listPath, i, items.length) + '</div>' +
        '</div>' +
        '<input type="text" data-path="' + esc(opts.listPath) + '.' + i + '" ' +
               'value="' + esc(value) + '" ' +
               'placeholder="' + esc(opts.placeholder || '') + '" ' +
               'aria-label="' + esc(opts.label) + ' ' + (i + 1) + '">' +
      '</div>'
    ).join('');

    return '<section class="ed-group">' +
      '<div class="ed-group__head">' +
        '<h3><i class="' + opts.icon + '" aria-hidden="true"></i>' + esc(opts.title) + '</h3>' +
        '<span class="ed-group__count">' + items.length + '</span>' +
      '</div>' +
      '<div class="ed-group__body">' +
        (cards || '<p class="hint">No entries yet.</p>') +
        '<button type="button" class="btn-add" data-action="add" data-list="' + esc(opts.listPath) + '">' +
          '<i class="fa-solid fa-plus" aria-hidden="true"></i> Add ' + esc(opts.label) +
        '</button>' +
      '</div>' +
    '</section>';
  }

  function skillGroupEditor(skills) {
    const groups = (skills || []).map((group, groupIndex) => {
      const items = group.items || [];
      const rows = items.map((item, itemIndex) => {
        const isObject = item && typeof item === 'object';
        const text = isObject ? (item.text || '') : String(item || '');
        const icon = isObject ? (item.icon || 'fa-solid fa-circle-dot') : 'fa-solid fa-circle-dot';
        const base = 'skills.' + groupIndex + '.items.' + itemIndex;

        return '<div class="ed-subitem">' +
          '<div class="ed-subitem__top">' +
            '<div class="icon-input">' +
              '<i class="icon-input__preview ' + esc(icon) + '" aria-hidden="true"></i>' +
              '<input type="text" list="faIconList" data-icon-input ' +
                     'data-path="' + base + '.icon" value="' + esc(icon) + '" ' +
                     'aria-label="Icon for ' + esc(text) + '">' +
            '</div>' +
            '<div class="ed-subitem__tools">' +
              moveButtons('skills.' + groupIndex + '.items', itemIndex, items.length) +
            '</div>' +
          '</div>' +
          '<input type="text" class="ed-subitem__text" ' +
                 'data-path="' + base + '.text" value="' + esc(text) + '" ' +
                 'placeholder="Skill name" aria-label="Skill name">' +
        '</div>';
      }).join('');

      return '<div class="ed-card">' +
        '<div class="ed-card__bar">' +
          '<span class="ed-card__idx">Skill Group ' + (groupIndex + 1) + '</span>' +
          '<div class="ed-card__tools">' + moveButtons('skills', groupIndex, skills.length) + '</div>' +
        '</div>' +
        field('Group Title', 'skills.' + groupIndex + '.title', group.title) +
        '<div class="field">' +
          '<label>Group Icon Class</label>' +
          '<div class="icon-input">' +
            '<i class="icon-input__preview ' + esc(group.icon || 'fa-solid fa-circle-dot') + '" aria-hidden="true"></i>' +
            '<input type="text" list="faIconList" data-icon-input ' +
                   'data-path="skills.' + groupIndex + '.icon" value="' + esc(group.icon || '') + '" ' +
                   'aria-label="Icon class for this group">' +
          '</div>' +
        '</div>' +
        '<div class="ed-subitems">' +
          '<div class="ed-subitems__head">Skills <span>' + items.length + '</span></div>' +
          (rows || '<p class="hint">No skills yet.</p>') +
          '<button type="button" class="btn-add" data-action="add" ' +
                  'data-list="skills.' + groupIndex + '.items" data-template="skillItem">' +
            '<i class="fa-solid fa-plus" aria-hidden="true"></i> Add Skill' +
          '</button>' +
        '</div>' +
      '</div>';
    }).join('');

    return '<datalist id="faIconList">' +
        ICON_SUGGESTIONS.map((value) => '<option value="' + esc(value) + '"></option>').join('') +
      '</datalist>' +
      '<section class="ed-group">' +
        '<div class="ed-group__head">' +
          '<h3><i class="fa-solid fa-layer-group" aria-hidden="true"></i>Core Skills</h3>' +
          '<span class="ed-group__count">' + (skills || []).length + '</span>' +
        '</div>' +
        '<div class="ed-group__body">' +
          (groups || '<p class="hint">No skill groups yet.</p>') +
          '<button type="button" class="btn-add" data-action="add" data-list="skills">' +
            '<i class="fa-solid fa-plus" aria-hidden="true"></i> Add Skill Group' +
          '</button>' +
        '</div>' +
      '</section>';
  }

  /* =======================================================
     13. EDITOR — RENDER
     ======================================================= */
  function renderEditor() {
    const d = draft;
    const parts = [];

    /* ---------- PERSONAL ---------- */
    parts.push(
      '<section class="ed-group">' +
        '<div class="ed-group__head">' +
          '<h3><i class="fa-solid fa-id-card" aria-hidden="true"></i>Personal Details</h3>' +
        '</div>' +
        '<div class="ed-group__body">' +
          field('Full Name',             'personal.name',       d.personal.name) +
          field('Cover Title',           'personal.coverTitle', d.personal.coverTitle) +
          field('Professional Identity', 'personal.identity',   d.personal.identity) +
          fieldArea('Cover Statement',   'personal.statement',  d.personal.statement, 3) +
          field('Address',               'personal.address',    d.personal.address) +
          field('Phone',                 'personal.phone',      d.personal.phone) +
          field('Email',                 'personal.email',      d.personal.email) +
          field('Website',               'personal.website',    d.personal.website) +
          field('LinkedIn username',     'personal.linkedin',   d.personal.linkedin) +
          field('GitHub username',       'personal.github',     d.personal.github) +
        '</div>' +
      '</section>'
    );

    /* ---------- PHOTO ---------- */
    parts.push(
      '<section class="ed-group">' +
        '<div class="ed-group__head">' +
          '<h3><i class="fa-solid fa-image" aria-hidden="true"></i>Profile Picture</h3>' +
        '</div>' +
        '<div class="ed-group__body">' +
          '<div class="photo-editor">' +
            '<img id="photoPreview" class="photo-editor__preview" ' +
                 'src="' + esc(currentPhotoSrc()) + '" alt="Profile picture preview">' +
            '<div class="photo-editor__actions">' +
              '<button type="button" class="btn btn--soft" data-action="upload-photo">' +
                '<i class="fa-solid fa-upload" aria-hidden="true"></i> Upload / Replace' +
              '</button>' +
              '<button type="button" class="btn btn--soft btn--muted" data-action="remove-photo">' +
                '<i class="fa-solid fa-trash-can" aria-hidden="true"></i> Remove' +
              '</button>' +
            '</div>' +
          '</div>' +
          '<p class="hint">Square images work best. The picture is stored in this browser only.</p>' +
        '</div>' +
      '</section>'
    );

    /* ---------- PROFILE ---------- */
    parts.push(
      '<section class="ed-group">' +
        '<div class="ed-group__head">' +
          '<h3><i class="fa-solid fa-user-tie" aria-hidden="true"></i>Professional Profile</h3>' +
        '</div>' +
        '<div class="ed-group__body">' +
          fieldArea('Profile text', 'profile', d.profile, 7) +
        '</div>' +
      '</section>'
    );

    /* ---------- EXPERIENCE ---------- */
    parts.push(objectListGroup({
      title: 'Professional Experience',
      icon: 'fa-solid fa-briefcase',
      listPath: 'experience',
      label: 'Position',
      items: d.experience,
      body: (item, i) =>
        field('Job Title',     'experience.' + i + '.role', item.role) +
        field('Date Range',    'experience.' + i + '.date', item.date) +
        field('Organisation',  'experience.' + i + '.org',  item.org) +
        fieldLines('Responsibilities (one per line)', 'experience.' + i + '.bullets', item.bullets, 4)
    }));

    /* ---------- EDUCATION ---------- */
    parts.push(objectListGroup({
      title: 'Education',
      icon: 'fa-solid fa-graduation-cap',
      listPath: 'education',
      label: 'Qualification',
      items: d.education,
      body: (item, i) =>
        field('Institution', 'education.' + i + '.institution', item.institution) +
        field('Date Range',  'education.' + i + '.date',        item.date) +
        field('Degree',      'education.' + i + '.degree',      item.degree)
    }));

    /* ---------- CORE SKILL GROUPS ---------- */
    parts.push(skillGroupEditor(d.skills));

    /* ---------- CORE COMPETENCIES ---------- */
    parts.push(stringListGroup({
      title: 'Core Competencies',
      icon: 'fa-solid fa-lightbulb',
      listPath: 'competencies',
      label: 'Competency',
      placeholder: 'e.g. Educational Leadership',
      items: d.competencies
    }));

    /* ---------- TECHNICAL SKILLS ---------- */
    parts.push(objectListGroup({
      title: 'Technical Skills (with % indicators)',
      icon: 'fa-solid fa-chart-simple',
      listPath: 'technicalSkills',
      label: 'Skill',
      items: d.technicalSkills,
      body: (item, i) =>
        field('Skill Label', 'technicalSkills.' + i + '.label', item.label) +
        fieldNum('Percentage (0–100)', 'technicalSkills.' + i + '.value', item.value, 0, 100)
    }));

    /* ---------- LANGUAGES ---------- */
    parts.push(objectListGroup({
      title: 'Languages',
      icon: 'fa-solid fa-language',
      listPath: 'languages',
      label: 'Language',
      items: d.languages,
      body: (item, i) =>
        field('Language', 'languages.' + i + '.name',  item.name) +
        field('Level',    'languages.' + i + '.level', item.level)
    }));

    /* ---------- CERTIFICATIONS ---------- */
    parts.push(stringListGroup({
      title: 'Certifications',
      icon: 'fa-solid fa-certificate',
      listPath: 'certifications',
      label: 'Certification',
      placeholder: 'e.g. PGDCA – CCERT',
      items: d.certifications
    }));

    /* ---------- STRENGTHS ---------- */
    parts.push(stringListGroup({
      title: 'Professional Strengths',
      icon: 'fa-solid fa-star',
      listPath: 'strengths',
      label: 'Strength',
      placeholder: 'e.g. Problem-Solving',
      items: d.strengths
    }));

    /* ---------- REFERENCES ---------- */
    parts.push(
      '<section class="ed-group">' +
        '<div class="ed-group__head">' +
          '<h3><i class="fa-solid fa-circle-info" aria-hidden="true"></i>References</h3>' +
        '</div>' +
        '<div class="ed-group__body">' +
          field('References text', 'references', d.references) +
        '</div>' +
      '</section>'
    );

    el.editorBody.innerHTML = parts.join('');
  }

  /* =======================================================
     14. EDITOR — OPEN / CLOSE / SAVE / RESET
     ======================================================= */
  function isEditorOpen() {
    return el.editorPanel.classList.contains('is-open');
  }

  function openEditor() {
    draft = clone(state.data);
    viewData = draft;
    renderEditor();
    render();

    el.editorPanel.classList.add('is-open');
    el.editorPanel.setAttribute('aria-hidden', 'false');
    el.btnEditToggle.setAttribute('aria-pressed', 'true');
    el.btnEditLabel.textContent = 'Preview';
    document.body.classList.add('editor-open');

    /* focus the first input for keyboard users */
    const first = el.editorBody.querySelector('input, textarea');
    if (first) setTimeout(() => first.focus(), 260);
  }

  function closeEditor() {
    el.editorPanel.classList.remove('is-open');
    el.editorPanel.setAttribute('aria-hidden', 'true');
    el.btnEditToggle.setAttribute('aria-pressed', 'false');
    el.btnEditLabel.textContent = 'Edit Resume';
    document.body.classList.remove('editor-open');

    /* discard unsaved draft, restore persisted view */
    draft = null;
    viewData = state.data;
    render();
  }

  function toggleEditor() {
    if (isEditorOpen()) closeEditor();
    else openEditor();
  }

  function saveChanges() {
    if (!draft) return;
    state.data = clone(draft);
    viewData = state.data;

    const ok = store.set(STORAGE_KEY, JSON.stringify(state.data));
    render();

    if (ok) toast('Changes saved to this browser.');
    else    toast('Could not save — storage unavailable in this browser.');
  }

  function resetToDefault() {
    const confirmed = window.confirm(
      'Reset the resume to its original default content?\n\n' +
      'All saved edits and the uploaded profile picture will be permanently removed.'
    );
    if (!confirmed) return;

    store.remove(STORAGE_KEY);
    store.remove(PHOTO_KEY);

    state.data = clone(DEFAULT_DATA);
    viewData = state.data;

    applyPhoto(null);
    render();

    if (isEditorOpen()) {
      draft = clone(state.data);
      viewData = draft;
      renderEditor();
      render();
    }

    toast('Resume reset to the original content.');
  }

  /* =======================================================
     15. EDITOR — EVENT HANDLING
     ======================================================= */
  function getDraftArray(listPath) {
    if (!draft) return null;
    const arr = getPath(draft, listPath);
    return Array.isArray(arr) ? arr : null;
  }

  el.editorBody.addEventListener('input', (e) => {
    const t = e.target;
    if (!draft) return;

    if (t.hasAttribute && t.hasAttribute('data-icon-input')) {
      const wrapper = t.closest('.icon-input');
      const preview = wrapper && wrapper.querySelector('.icon-input__preview');
      if (preview) preview.className = 'icon-input__preview ' + (t.value.trim() || 'fa-solid fa-circle-dot');
    }

    /* line-separated textareas are handled on 'change' to keep typing smooth */
    if (t.dataset && t.dataset.lines) return;

    if (t.dataset && t.dataset.path) {
      let value;
      if (t.type === 'number') {
        value = clamp(t.value, 0, 100);
      } else {
        value = t.value;
      }
      setPath(draft, t.dataset.path, value);
      scheduleRender();
    }
  });

  el.editorBody.addEventListener('change', (e) => {
    const t = e.target;
    if (!draft) return;

    if (t.dataset && t.dataset.lines) {
      const list = t.value.split('\n').map((s) => s.trim()).filter(Boolean);
      setPath(draft, t.dataset.lines, list);
      scheduleRender();
    }
  });

  el.editorBody.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn || !draft) return;

    const action   = btn.dataset.action;
    const listPath = btn.dataset.list;
    const index    = Number(btn.dataset.index);

    /* ---- photo actions ---- */
    if (action === 'upload-photo') { el.photoInput.click(); return; }
    if (action === 'remove-photo') { removePhoto(); return; }

    const arr = listPath ? getDraftArray(listPath) : null;
    if (!arr) return;

    if (action === 'add') {
      const templateKey = btn.dataset.template || listPath;
      const tpl = TEMPLATES[templateKey];
      arr.push(tpl ? tpl() : '');
      refreshEditorAndView(listPath);
      return;
    }

    if (action === 'delete') {
      arr.splice(index, 1);
      refreshEditorAndView(listPath);
      return;
    }

    if (action === 'move-up' && index > 0) {
      const tmp = arr[index - 1];
      arr[index - 1] = arr[index];
      arr[index] = tmp;
      refreshEditorAndView(listPath);
      return;
    }

    if (action === 'move-down' && index < arr.length - 1) {
      const tmp = arr[index + 1];
      arr[index + 1] = arr[index];
      arr[index] = tmp;
      refreshEditorAndView(listPath);
    }
  });

  /* Re-render the editor while preserving scroll position */
  function refreshEditorAndView() {
    const scrollTop = el.editorBody.scrollTop;
    renderEditor();
    el.editorBody.scrollTop = scrollTop;
    scheduleRender();
  }

  /* =======================================================
     16. PRINT / PDF
     ======================================================= */
  function doPrint() {
    /* Make sure the editor is out of the way */
    if (isEditorOpen()) closeEditor();
    toggleShareMenu(false);
    setTimeout(() => window.print(), 120);
  }

  function doPdf() {
    if (isEditorOpen()) closeEditor();
    toggleShareMenu(false);
    toast('In the print dialog, choose “Save as PDF” for a sharp, selectable PDF.');
    setTimeout(() => window.print(), 700);
  }

  /* =======================================================
     17. SHARING
     ======================================================= */
  function shareTitle() {
    const p = state.data.personal || {};
    return (p.name || 'Resume') + ' — ' + (p.identity || 'Professional Resume');
  }

  function shareLink() {
    return window.location.href;
  }

  function openShareWindow(url) {
    window.open(url, '_blank', 'noopener,noreferrer,width=680,height=640');
  }

  const SHARE_BUILDERS = {
    whatsapp: (u, t) => 'https://api.whatsapp.com/send?text=' + encodeURIComponent(t + '\n' + u),
    facebook: (u)    => 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(u),
    linkedin: (u)    => 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(u),
    x:        (u, t) => 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(u) +
                        '&text=' + encodeURIComponent(t),
    email:    (u, t) => 'mailto:?subject=' + encodeURIComponent(t) +
                        '&body=' + encodeURIComponent(t + '\n\n' + u)
  };

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (err) { /* fall through to legacy path */ }

    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (err) {
      return false;
    }
  }

  function toggleShareMenu(force) {
    const shouldOpen = (force === undefined) ? el.shareMenu.hidden : !!force;
    el.shareMenu.hidden = !shouldOpen;

    el.btnShare.setAttribute('aria-expanded', String(shouldOpen));
    el.fabShare.setAttribute('aria-expanded', String(shouldOpen));

    if (shouldOpen) {
      const nativeBtn = el.shareMenu.querySelector('[data-share="native"]');
      if (nativeBtn) nativeBtn.hidden = (typeof navigator.share !== 'function');
    }
  }

  el.shareMenu.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-share]');
    if (!btn) return;

    const kind  = btn.dataset.share;
    const url   = shareLink();
    const title = shareTitle();

    if (kind === 'native') {
      try {
        await navigator.share({ title: title, text: title, url: url });
      } catch (err) { /* user cancelled — ignore */ }
      toggleShareMenu(false);
      return;
    }

    if (kind === 'copy') {
      const ok = await copyText(url);
      toast(ok ? 'Link copied to clipboard.' : 'Could not copy the link.');
      toggleShareMenu(false);
      return;
    }

    const builder = SHARE_BUILDERS[kind];
    if (builder) {
      const link = builder(url, title);
      if (kind === 'email') window.location.href = link;
      else openShareWindow(link);
    }
    toggleShareMenu(false);
  });

  /* =======================================================
     18. GLOBAL EVENT WIRING
     ======================================================= */
  el.btnEditToggle.addEventListener('click', toggleEditor);
  el.fabEdit.addEventListener('click', toggleEditor);

  el.btnPrint.addEventListener('click', doPrint);
  el.fabPrint.addEventListener('click', doPrint);

  el.btnPdf.addEventListener('click', doPdf);
  el.fabPdf.addEventListener('click', doPdf);

  el.btnShare.addEventListener('click', (e) => { e.stopPropagation(); toggleShareMenu(); });
  el.fabShare.addEventListener('click', (e) => { e.stopPropagation(); toggleShareMenu(); });

  el.btnCloseEditor.addEventListener('click', closeEditor);
  el.btnSave.addEventListener('click', saveChanges);
  el.btnReset.addEventListener('click', resetToDefault);

  el.photoInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) handlePhotoFile(file);
    e.target.value = '';
  });

  /* close share menu on outside click */
  document.addEventListener('click', (e) => {
    if (el.shareMenu.hidden) return;
    if (el.shareMenu.contains(e.target)) return;
    if (e.target.closest('#btnShare') || e.target.closest('#fabShare')) return;
    toggleShareMenu(false);
  });

  /* keyboard: Escape closes share menu, then editor */
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!el.shareMenu.hidden) { toggleShareMenu(false); return; }
    if (isEditorOpen()) closeEditor();
  });

  /* =======================================================
     19. BOOT
     ======================================================= */
  function boot() {
    /* load persisted data */
    const raw = store.get(STORAGE_KEY);
    if (raw) {
      try {
        state.data = deepMerge(clone(DEFAULT_DATA), JSON.parse(raw));
      } catch (err) {
        state.data = clone(DEFAULT_DATA);
      }
    } else {
      state.data = clone(DEFAULT_DATA);
    }

    if (raw && !store.get(WEBSITE_MIGRATION_KEY)) {
      if (!state.data.personal.website) {
        state.data.personal.website = DEFAULT_DATA.personal.website;
        store.set(STORAGE_KEY, JSON.stringify(state.data));
      }
      store.set(WEBSITE_MIGRATION_KEY, '1');
    }

    state.data.skills = normalizeSkillGroups(state.data.skills);

    viewData = state.data;

    /* profile picture */
    applyPhoto(store.get(PHOTO_KEY));

    /* first paint */
    render();

    /* warn if opened straight from the file system (sharing/PDF need a server) */
    if (window.location.protocol === 'file:') {
      console.info(
        '[Resume] Running from file:// — printing and editing work fine. ' +
        'For working share links and the Web Share API, serve the folder over ' +
        'http:// (e.g. `npx serve` or `python -m http.server`).'
      );
    }
  }

  boot();

})();