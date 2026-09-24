// ===== Config =====
const WHATSAPP_NUMBER = "201069857379"; // no '+'
const EMAIL = "tema.foksa@gmail.com";

// WhatsApp message
const WA_MSG = {
  ar: "مرحبًا، أريد جلسة تشخيص مجانية لأتمتة عمليات شركة عقارات/إدارة أملاك في الخليج. التفاصيل: ",
  en: "Hi, I'd like a free diagnosis call to automate real estate / property management operations in the GCC. Details: ",
};

// ===== DOM =====
const langToggle = document.getElementById("langToggle");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const toastEl = document.getElementById("toast");

let lang = "ar";

// ===== i18n =====
const T = {
  ar: {
    brandTag: "أتمتة أعمال للخليج",
    navSolutions: "الحلول",
    navWhy: "لماذا FOKSA",
    navProcess: "آلية التنفيذ",
    navFaq: "الأسئلة",
    navContact: "تواصل",
    headerCta: "احجز تشخيص مجاني",

    pill: "إطلاق منظم — تركيز على نتائج قابلة للقياس",
    heroTitle: "أتمتة عمليات العقارات وإدارة الأملاك في الخليج… بدون فوضى",
    heroLead: "نقلّل ضياع العملاء وتأخير العقود والتحصيل عبر Workflow واضح + تكاملات + لوحات مؤشرات. خصوصية وسرية (NDA) عند الطلب.",
    heroCtaPrimary: "احجز تشخيص مجاني (20 دقيقة)",
    heroCtaSecondary: "واتساب مباشر",
    kpi1: "تقليل زمن دورة الإجراءات*",
    kpi2: "تقليل الهدر التشغيلي*",
    kpi3: "سرية وخصوصية",
    note: "*أرقام إرشادية تعتمد على حالتك الحالية وجودة البيانات. نقدّم تقدير ROI واقعي بعد التشخيص.",

    heroCardTitle: "أكثر 5 نقاط بتاكل الربح",
    p1: "تأخر الرد على الاستفسارات والمتابعة",
    p2: "جدولة معاينات عشوائية بدون سجل",
    p3: "موافقات وعقود تتأخر بسبب إجراءات يدوية",
    p4: "تحصيل متأخر + تنبيهات غير منتظمة",
    p5: "تقارير تشغيلية متأخرة للإدارة",
    miniK1: "مخرجات التنفيذ",
    miniV1: "Workflow + Integrations + Dashboards",
    miniK2: "أسلوب العمل",
    miniV2: "MVP سريع ثم تحسين تدريجي",
    toolingLabel: "يتكامل مع أدوات شائعة",

    solTitle: "حلول عملية للعقارات وإدارة الأملاك",
    solLead: "نركز على العمليات اللي لو اتظبطت… هتفرق فورًا في المبيعات/التأجير والتحصيل.",
    s1t: "إدارة الاستفسارات والعملاء (Leads)",
    s1p: "تجميع الاستفسارات من واتساب/نماذج/إعلانات، وتوزيعها تلقائيًا على الفريق مع متابعة موثقة.",
    s1b1: "توزيع تلقائي حسب المنطقة/النوع",
    s1b2: "تذكيرات Follow-up",
    s1b3: "لوحة أداء للوسطاء/الموظفين",

    s2t: "جدولة المعاينات + إدارة الوحدات",
    s2p: "حجز مواعيد منظم، تحديث حالة الوحدة، وسجل كامل لكل تواصل/معاينة.",
    s2b1: "تأكيدات وتنبيهات تلقائية",
    s2b2: "نماذج بيانات موحدة",
    s2b3: "تتبع حالة الوحدة (متاحة/محجوزة/مؤجرة)",

    s3t: "العقود والتحصيل والصيانة",
    s3p: "مسارات موافقات للعقود، تنبيهات للتحصيل، وتذاكر صيانة منظمة مع SLA واضح.",
    s3b1: "Workflow موافقات العقود",
    s3b2: "تنبيهات دفعات/تجديدات",
    s3b3: "تذاكر صيانة + تقارير",

    wideTitle: "مش “أتمتة وخلاص”… هدفنا أرباح أوضح",
    wideText: "بنقيس قبل وبعد: زمن الدورة، نسبة الأخطاء، وإعادة العمل. ثم نبني نظام بسيط يشتغل مع فريقك مش ضده.",
    st1: "تقدير عائد قبل التنفيذ",
    st2: "نسخة أولى بسرعة",
    st3: "سجل وتتبع للتغييرات",
    fine1: "ملحوظة: لو عندك نظام قائم (CRM/ERP) غالبًا مش هنحتاج تغييره—بنبدأ بتكاملات وتحسين تدريجي.",

    whyTitle: "لماذا FOKSA؟",
    whyLead: "أسلوب تنفيذ “عملي” يناسب الخليج: وضوح، سرية، وتسليمات قابلة للقياس.",
    w1t: "سرية وخصوصية",
    w1p: "بيانات العملاء والعقود حساسة. نلتزم بالسرية، ويمكن توقيع NDA، وتحديد صلاحيات وصول واضحة.",
    w1b1: "صلاحيات وصول واضحة",
    w1b2: "سجل تغييرات وتتبع",
    w1b3: "تحكم أعلى في البيانات",
    w2t: "تنفيذ خفيف وسريع",
    w2p: "نبدأ بـ MVP يشتغل بسرعة، ثم تحسينات منظمة حسب النتائج بدل مشاريع ضخمة بلا نهاية.",
    w2b1: "Scope واضح",
    w2b2: "تسليمات أسبوعية",
    w2b3: "قياس قبل/بعد",

    stripTitle: "تحب نحدد فرص الأتمتة عندك خلال 20 دقيقة؟",
    stripText: "بدون التزام—هتاخد خريطة مختصرة + أولويات Quick Wins.",
    stripBtn: "احجز التشخيص",

    procTitle: "آلية تنفيذ واضحة",
    procLead: "من أول مكالمة… لحد تشغيل فعلي وتسليم مستندات ونظام قابل للصيانة.",
    pht1: "تشخيص",
    php1: "نفهم العملية الحالية + أين يضيع الوقت + أين تتكرر الأخطاء.",
    pht2: "تصميم",
    php2: "نرسم Workflow واضح + صلاحيات + نقاط قياس KPI.",
    pht3: "تنفيذ MVP",
    php3: "نطلق نسخة أولى شغالة بسرعة، ثم نوسع حسب الأولويات.",
    pht4: "تشغيل ودعم",
    php4: "متابعة، إصلاحات، تحسينات، وتوثيق تسليمات.",

    faqTitle: "أسئلة شائعة",
    faqLead: "إجابات مختصرة بدون مبالغة.",
    fq1q: "هل لازم أغير النظام اللي عندي؟",
    fq1a: "غالبًا لا. نبدأ بتحسينات وتكاملات حول نظامك الحالي لتقليل الإدخال اليدوي وزمن الدورة.",
    fq2q: "هل تضمنوا أرقام معينة؟",
    fq2a: "نضمن منهجية قياس وتنفيذ وتسليم واضح. الأرقام تعتمد على الوضع الحالي—ونقدم تقدير ROI بعد التشخيص.",
    fq3q: "هل تقدروا تشتغلوا بسرية؟",
    fq3a: "نعم. يمكن توقيع NDA، وتحديد صلاحيات وصول، وتوثيق كل تغيير.",
    fq4q: "هل في دعم بعد التنفيذ؟",
    fq4a: "نعم—متابعة وتشغيل وتحسينات حسب الاتفاق، مع توثيق يسهّل الاستمرارية.",

    cTitle: "احجز تشخيص مجاني",
    cLead: "اكتب العملية اللي بتعاني منها (متابعة عملاء/تحصيل/صيانة/عقود)… وهنرد بسرعة.",
    fName: "الاسم",
    fCompany: "الشركة",
    fCountry: "الدولة",
    fPhone: "رقم واتساب",
    fNeed: "ما الذي تريد أتمتته؟",
    fSubmit: "إرسال",
    fWa: "واتساب مباشر",
    privacyNote: "بإرسال النموذج، أنت توافق على التواصل معك بخصوص طلبك فقط. لا نقوم ببيع بياناتك.",
    directTitle: "تواصل سريع",
    directLead: "الأسرع: واتساب.",
    emailLabel: "Email",
    whatGetTitle: "بعد التشخيص ستحصل على",
    g1: "خريطة فرص أتمتة مختصرة (Quick Wins)",
    g2: "تقدير وقت/تكلفة بشكل منطقي",
    g3: "تصور مبدئي للتكاملات المطلوبة",
    badgeText: "— أتمتة عملية. قياس واضح. سرية محترمة.",
    footerText: "خدمات أتمتة للخليج — جميع الحقوق محفوظة.",
    backTop: "العودة للأعلى",
  },

  en: {
    brandTag: "Automation for GCC",
    navSolutions: "Solutions",
    navWhy: "Why FOKSA",
    navProcess: "Delivery",
    navFaq: "FAQ",
    navContact: "Contact",
    headerCta: "Book Free Diagnosis",

    pill: "Structured launch — focused on measurable outcomes",
    heroTitle: "Automate real estate & property management operations in the GCC—without chaos",
    heroLead: "Reduce lead loss, contract delays, and late collections through clear workflows, integrations, and dashboards. Privacy-first (NDA on request).",
    heroCtaPrimary: "Book Free Diagnosis (20 min)",
    heroCtaSecondary: "WhatsApp",
    kpi1: "Faster cycle time*",
    kpi2: "Lower operational waste*",
    kpi3: "Privacy & NDA",
    note: "*Indicative benchmarks; we provide a realistic ROI estimate after diagnosis.",

    heroCardTitle: "Top 5 profit leaks",
    p1: "Slow response and weak follow-up",
    p2: "Messy viewing schedules with no history",
    p3: "Manual approvals delay contracts",
    p4: "Late collections + inconsistent reminders",
    p5: "Late / unclear reporting",
    miniK1: "Deliverables",
    miniV1: "Workflows + Integrations + Dashboards",
    miniK2: "Approach",
    miniV2: "Fast MVP, then iterate",
    toolingLabel: "Integrates with common tools",

    solTitle: "Practical solutions for real estate ops",
    solLead: "We focus on what immediately impacts sales/leasing speed and collections.",
    s1t: "Lead & inquiry management",
    s1p: "Collect leads from WhatsApp/forms/ads, auto-assign to your team, and keep a complete follow-up trail.",
    s1b1: "Smart routing by area/type",
    s1b2: "Follow-up reminders",
    s1b3: "Performance dashboard",

    s2t: "Viewing scheduling + unit tracking",
    s2p: "Structured bookings, unit status updates, and a full history for each interaction/viewing.",
    s2b1: "Automated confirmations & reminders",
    s2b2: "Standardized data capture",
    s2b3: "Unit status tracking (available/held/leased)",

    s3t: "Contracts, collections & maintenance",
    s3p: "Contract approval flows, collection reminders, and structured maintenance tickets with clear SLA.",
    s3b1: "Contract approval workflow",
    s3b2: "Payment/renewal alerts",
    s3b3: "Maintenance tickets & reports",

    wideTitle: "Not automation for the sake of it—profit clarity",
    wideText: "We measure before/after: cycle time, error rates, and rework. Then we build a simple system your team can actually run.",
    st1: "ROI estimated upfront",
    st2: "Fast first release",
    st3: "Audit trail",
    fine1: "Note: If you already use CRM/ERP, we typically don’t replace it—start with integrations and gradual improvements.",

    whyTitle: "Why FOKSA?",
    whyLead: "A practical GCC-friendly delivery style: clarity, privacy, measurable outputs.",
    w1t: "Privacy & confidentiality",
    w1p: "Real estate data is sensitive. NDA available, clear access control, and documented changes.",
    w1b1: "Clear access control",
    w1b2: "Change logs & traceability",
    w1b3: "Less sharing, more control",
    w2t: "Lightweight and fast execution",
    w2p: "Start with a working MVP, then improve iteratively—no endless projects.",
    w2b1: "Clear scope",
    w2b2: "Weekly deliverables",
    w2b3: "Before/after measurement",

    stripTitle: "Want to map your best automation wins in 20 minutes?",
    stripText: "No commitment—get a quick-win opportunity map and priorities.",
    stripBtn: "Book diagnosis",

    procTitle: "Clear delivery steps",
    procLead: "From first call to go-live, documentation, and maintainable systems.",
    pht1: "Diagnosis",
    php1: "Understand the current process, time loss, and recurring errors.",
    pht2: "Design",
    php2: "Define workflow, roles/permissions, and KPI measurement points.",
    pht3: "MVP delivery",
    php3: "Ship a working first version fast, then expand based on priorities.",
    pht4: "Go-live & support",
    php4: "Monitoring, fixes, improvements, and documented handover.",

    faqTitle: "FAQ",
    faqLead: "Short answers, no hype.",
    fq1q: "Do I need to replace my current system?",
    fq1a: "Usually no. We improve around your stack through integrations and workflow optimization.",
    fq2q: "Do you guarantee specific numbers?",
    fq2a: "We guarantee a clear measurement framework and deliverables. Results depend on your baseline; we estimate ROI after diagnosis.",
    fq3q: "Can you work confidentially?",
    fq3a: "Yes. NDA can be signed; access is controlled and changes are logged.",
    fq4q: "Do you provide post-launch support?",
    fq4a: "Yes—support and improvements can be included, with documentation for continuity.",

    cTitle: "Book a free diagnosis",
    cLead: "Tell us what you want to automate (follow-ups/collections/maintenance/contracts)… we’ll reply fast.",
    fName: "Name",
    fCompany: "Company",
    fCountry: "Country",
    fPhone: "WhatsApp number",
    fNeed: "What do you want to automate?",
    fSubmit: "Send",
    fWa: "Direct WhatsApp",
    privacyNote: "By submitting, you agree to be contacted only about your request. We don’t sell your data.",
    directTitle: "Quick contact",
    directLead: "Fastest: WhatsApp.",
    emailLabel: "Email",
    whatGetTitle: "After diagnosis you’ll get",
    g1: "A quick-win automation map",
    g2: "A realistic time/cost estimate",
    g3: "A draft integration plan",
    badgeText: "— Practical automation. Clear measurement. Privacy respected.",
    footerText: "Automation for GCC — All rights reserved.",
    backTop: "Back to top",
  }
};

function applyLanguage(next){
  lang = next;
  const isAr = lang === "ar";
  document.documentElement.lang = isAr ? "ar" : "en";
  document.documentElement.dir = isAr ? "rtl" : "ltr";
  langToggle.textContent = isAr ? "EN" : "AR";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (T[lang][key]) el.textContent = T[lang][key];
  });

  updateWhatsAppLinks();
}

function updateWhatsAppLinks(){
  const msg = WA_MSG[lang];
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  ["waHero","waContact","waSide","waFloat"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", url);
  });
}

function toast(msg){
  toastEl.textContent = msg;
  toastEl.style.display = "block";
  clearTimeout(window.__t);
  window.__t = setTimeout(() => toastEl.style.display = "none", 2800);
}

// Mobile menu
hamburger?.addEventListener("click", () => mobileMenu.classList.toggle("show"));
document.querySelectorAll("#mobileMenu a").forEach(a => {
  a.addEventListener("click", () => mobileMenu.classList.remove("show"));
});

// Language toggle
langToggle?.addEventListener("click", () => applyLanguage(lang === "ar" ? "en" : "ar"));

// Success message (Netlify form redirect)
const params = new URLSearchParams(window.location.search);
if (params.get("success") === "1"){
  toast(lang === "ar" ? "تم الإرسال. هنرجع لك قريبًا." : "Sent. We’ll get back to you soon.");
  window.history.replaceState({}, document.title, window.location.pathname);
}

// Init
applyLanguage("ar");
