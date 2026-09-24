// Clean URL: remove /index.html and #top from the address bar (nicer links)
(() => {
  const { pathname, search, hash } = window.location;
  const cleanPath = pathname.endsWith("/index.html")
    ? pathname.replace("/index.html", "/")
    : pathname;
  const cleanHash = (hash === "#top") ? "" : hash;

  if (cleanPath !== pathname || cleanHash !== hash) {
    history.replaceState({}, "", cleanPath + search + cleanHash);
  }
})();

// ======================
// FOKSA Landing (No backend)
// Form opens WhatsApp with user's details
// ======================

const WHATSAPP_NUMBER = "201069857379"; // no '+'
let lang = "ar";

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
    solLead: "نركز على العمليات اللي لو اتظبطت… هتفرق فورًا في التأجير والتحصيل وخدمة العملاء.",
    s1t: "إدارة الاستفسارات والعملاء (Leads)",
    s1p: "تجميع الاستفسارات وتوزيعها على الفريق مع متابعة موثقة لتقليل ضياع العملاء.",
    s1b1: "توزيع تلقائي حسب المنطقة/النوع",
    s1b2: "تذكيرات Follow-up",
    s1b3: "لوحة أداء",

    s2t: "جدولة المعاينات + إدارة الوحدات",
    s2p: "حجز مواعيد منظم، تحديث حالة الوحدة، وسجل لكل معاينة وتواصل.",
    s2b1: "تأكيدات وتنبيهات تلقائية",
    s2b2: "نماذج بيانات موحدة",
    s2b3: "تتبع حالة الوحدة",

    s3t: "العقود والتحصيل والصيانة",
    s3p: "Workflow للموافقات + تنبيهات التحصيل/التجديد + تذاكر صيانة منظمة.",
    s3b1: "موافقات العقود",
    s3b2: "تنبيهات دفعات/تجديدات",
    s3b3: "تذاكر صيانة + تقارير",

    wideTitle: "مش “أتمتة وخلاص”… هدفنا أرباح أوضح",
    wideText: "بنقيس قبل/بعد: زمن الدورة، الأخطاء، وإعادة العمل—وبنبني نظام بسيط يشتغل مع فريقك.",
    st1: "تقدير عائد قبل التنفيذ",
    st2: "نسخة أولى بسرعة",
    st3: "سجل للتغييرات",
    fine1: "ملحوظة: لو عندك نظام قائم (CRM/ERP) غالبًا مش هنحتاج تغييره—بنبدأ بتحسين وتكامل تدريجي.",

    whyTitle: "لماذا FOKSA؟",
    whyLead: "أسلوب تنفيذ عملي يناسب الخليج: وضوح، سرية، وتسليمات قابلة للقياس.",
    w1t: "سرية وخصوصية",
    w1p: "بيانات العملاء والعقود حساسة. نلتزم بالسرية ويمكن توقيع NDA، مع صلاحيات وصول واضحة.",
    w1b1: "صلاحيات وصول",
    w1b2: "توثيق وتتبع",
    w1b3: "تحكم أعلى",
    w2t: "تنفيذ خفيف وسريع",
    w2p: "نبدأ بـ MVP شغال بسرعة، ثم تحسينات منظمة حسب النتائج بدل مشاريع كبيرة بلا نهاية.",
    w2b1: "Scope واضح",
    w2b2: "تسليمات قصيرة",
    w2b3: "قياس قبل/بعد",

    stripTitle: "تحب نحدد فرص الأتمتة عندك خلال 20 دقيقة؟",
    stripText: "بدون التزام—هتاخد خريطة مختصرة + أولويات Quick Wins.",
    stripBtn: "احجز التشخيص",

    procTitle: "آلية تنفيذ واضحة",
    procLead: "من أول مكالمة… لحد تشغيل فعلي وتسليم نظام قابل للصيانة.",
    pht1: "تشخيص",
    php1: "نفهم العملية الحالية + أين يضيع الوقت + أين تتكرر الأخطاء.",
    pht2: "تصميم",
    php2: "نرسم Workflow + صلاحيات + نقاط قياس KPI.",
    pht3: "تنفيذ MVP",
    php3: "نسلم نسخة أولى شغالة بسرعة، ثم توسعة حسب الأولويات.",
    pht4: "تشغيل ودعم",
    php4: "متابعة وتحسينات وتوثيق تسليمات.",

    faqTitle: "أسئلة شائعة",
    faqLead: "إجابات مختصرة بدون مبالغة.",
    fq1q: "هل لازم أغير النظام اللي عندي؟",
    fq1a: "غالبًا لا. بنبدأ بتكاملات وتحسينات حول نظامك الحالي لتقليل الإدخال اليدوي وزمن الدورة.",
    fq2q: "هل في التزام بالسرية؟",
    fq2a: "نعم. يمكن توقيع NDA وتحديد صلاحيات وصول وتوثيق التغييرات.",
    fq3q: "هل تضمنوا أرقام محددة؟",
    fq3a: "نضمن منهجية قياس وتنفيذ وتسليم واضح. النتائج تعتمد على الوضع الحالي، ونقدّم تقدير ROI بعد التشخيص.",
    fq4q: "إزاي يتم الإرسال؟",
    fq4a: "الإرسال يتم عبر واتساب برسالة جاهزة. بدون فورم سيرفر وبدون خطوات إضافية.",

    cTitle: "احجز تشخيص مجاني",
    cLead: "املأ البيانات واضغط “إرسال عبر واتساب” — هتفتح رسالة جاهزة وترسلها لنا.",
    fName: "الاسم",
    fCompany: "الشركة",
    fCountry: "الدولة",
    fCity: "المدينة",
    fNeed: "ما الذي تريد أتمتته؟",
    fSubmit: "إرسال عبر واتساب",
    fWa: "واتساب مباشر",
    privacyNote: "عند الضغط على إرسال، سيفتح واتساب برسالة جاهزة تحتوي على بياناتك. بياناتك تُستخدم فقط للتواصل بخصوص طلبك.",

    directTitle: "تواصل سريع",
    directLead: "الأسرع: واتساب.",
    emailLabel: "Email",
    whatGetTitle: "بعد التشخيص ستحصل على",
    g1: "خريطة فرص أتمتة مختصرة (Quick Wins)",
    g2: "تقدير وقت/تكلفة بشكل منطقي",
    g3: "أولويات تنفيذ واضحة",
    badgeText: "— أتمتة عملية. قياس واضح. سرية محترمة.",
    footerText: "Automation for GCC — All rights reserved.",
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
    heroTitle: "Automate real estate & property management ops in the GCC—without chaos",
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
    solLead: "We focus on what immediately impacts leasing speed, collections, and service quality.",
    s1t: "Lead & inquiry management",
    s1p: "Collect inquiries and route them to your team with a clear follow-up trail to reduce lead loss.",
    s1b1: "Smart routing by area/type",
    s1b2: "Follow-up reminders",
    s1b3: "Performance view",

    s2t: "Viewing scheduling + unit tracking",
    s2p: "Structured bookings, unit status updates, and a full history for each interaction/viewing.",
    s2b1: "Automated confirmations & reminders",
    s2b2: "Standardized data capture",
    s2b3: "Unit status tracking",

    s3t: "Contracts, collections & maintenance",
    s3p: "Approval workflows + collection/renewal alerts + structured maintenance tickets.",
    s3b1: "Contract approvals",
    s3b2: "Payment/renewal alerts",
    s3b3: "Maintenance tickets & reports",

    wideTitle: "Not automation for the sake of it—profit clarity",
    wideText: "We measure before/after: cycle time, error rates, and rework. Then build something your team can run.",
    st1: "ROI estimated upfront",
    st2: "Fast first release",
    st3: "Audit trail",
    fine1: "Note: If you already use CRM/ERP, we typically don’t replace it—start with integrations and gradual improvements.",

    whyTitle: "Why FOKSA?",
    whyLead: "A practical GCC-friendly delivery style: clarity, privacy, measurable outputs.",
    w1t: "Privacy & confidentiality",
    w1p: "Real estate data is sensitive. NDA available, clear access control, documented changes.",
    w1b1: "Access control",
    w1b2: "Documentation & logs",
    w1b3: "More control",
    w2t: "Lightweight execution",
    w2p: "Start with a working MVP fast, then iterate—no endless projects.",
    w2b1: "Clear scope",
    w2b2: "Short deliverables",
    w2b3: "Before/after measurement",

    stripTitle: "Want to map your best automation wins in 20 minutes?",
    stripText: "No commitment—get a quick-win map and priorities.",
    stripBtn: "Book diagnosis",

    procTitle: "Clear delivery steps",
    procLead: "From first call to go-live, documentation, and maintainable systems.",
    pht1: "Diagnosis",
    php1: "Understand current process, time loss, and recurring errors.",
    pht2: "Design",
    php2: "Define workflow, roles/permissions, KPI measurement points.",
    pht3: "MVP delivery",
    php3: "Ship a working first version fast, then expand based on priorities.",
    pht4: "Go-live & support",
    php4: "Monitoring, improvements, and documented handover.",

    faqTitle: "FAQ",
    faqLead: "Short answers, no hype.",
    fq1q: "Do I need to replace my current system?",
    fq1a: "Usually no. We improve around your stack through integrations and workflow optimization.",
    fq2q: "Do you commit to confidentiality?",
    fq2a: "Yes. NDA can be signed; access is controlled and changes are logged.",
    fq3q: "Do you guarantee specific numbers?",
    fq3a: "We guarantee a clear measurement framework and deliverables. Results depend on your baseline; we estimate ROI after diagnosis.",
    fq4q: "How is it sent?",
    fq4a: "Sending opens WhatsApp with a ready message. No backend forms, no extra steps.",

    cTitle: "Book a free diagnosis",
    cLead: "Fill in the details and click “Send via WhatsApp” — a ready message will open for you to send.",
    fName: "Name",
    fCompany: "Company",
    fCountry: "Country",
    fCity: "City",
    fNeed: "What do you want to automate?",
    fSubmit: "Send via WhatsApp",
    fWa: "Direct WhatsApp",
    privacyNote: "Clicking send opens WhatsApp with a ready message containing your details. Your data is used only to respond to your request.",

    directTitle: "Quick contact",
    directLead: "Fastest: WhatsApp.",
    emailLabel: "Email",
    whatGetTitle: "After diagnosis you’ll get",
    g1: "A quick-win automation map",
    g2: "A realistic time/cost estimate",
    g3: "Clear priorities",
    badgeText: "— Practical automation. Clear measurement. Privacy respected.",
    footerText: "Automation for GCC — All rights reserved.",
    backTop: "Back to top",
  }
};

function toast(msg){
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.style.display = "block";
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.style.display = "none", 2600);
}

function baseWhatsAppUrl(text){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function updateWhatsAppLinks(){
  const baseMsg = (lang === "ar")
    ? "مرحبًا، أريد حجز تشخيص مجاني لأتمتة عمليات عقارات/إدارة أملاك في الخليج."
    : "Hi, I'd like to book a free diagnosis for automating real estate / property management operations in the GCC.";

  const url = baseWhatsAppUrl(baseMsg);
  ["waHero","waContact","waSide","waFloat"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", url);
  });
}

function applyLanguage(next){
  lang = next;
  const isAr = lang === "ar";
  document.documentElement.lang = isAr ? "ar" : "en";
  document.documentElement.dir = isAr ? "rtl" : "ltr";

  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.textContent = isAr ? "EN" : "AR";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = T[lang][key];
    if (val) el.textContent = val;
  });

  updateWhatsAppLinks();
}

// Mobile menu
document.getElementById("hamburger")?.addEventListener("click", () => {
  document.getElementById("mobileMenu")?.classList.toggle("show");
});
document.querySelectorAll("#mobileMenu a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("mobileMenu")?.classList.remove("show"));
});

// Language toggle
document.getElementById("langToggle")?.addEventListener("click", () => {
  applyLanguage(lang === "ar" ? "en" : "ar");
});

// Form -> WhatsApp message with user's details (NO EMAIL inside message)
document.getElementById("leadForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const fd = new FormData(form);
  const v = (k) => (fd.get(k) || "").toString().trim() || "-";

  const msg = (lang === "ar")
    ? `مرحبًا FOKSA، أريد حجز تشخيص مجاني.\n\n` +
      `الاسم: ${v("name")}\n` +
      `الشركة: ${v("company")}\n` +
      `الدولة: ${v("country")}\n` +
      `المدينة: ${v("city")}\n` +
      `المطلوب أتمتته: ${v("need")}`
    : `Hi FOKSA, I'd like to book a free diagnosis.\n\n` +
      `Name: ${v("name")}\n` +
      `Company: ${v("company")}\n` +
      `Country: ${v("country")}\n` +
      `City: ${v("city")}\n` +
      `Need: ${v("need")}`;

  const url = baseWhatsAppUrl(msg);
  const win = window.open(url, "_blank");
  if (!win) window.location.href = url;

  toast(lang === "ar" ? "جاري فتح واتساب..." : "Opening WhatsApp...");
  form.reset();
});

// Init
applyLanguage("ar");
