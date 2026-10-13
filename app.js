/**
 * ToolVerse - 100% Free Client-Side Tools Engine
 * Bilingual (Arabic / English) with Instant Browser-side Processing
 */

// --- 1. INTERNATIONALIZATION (i18n) DICTIONARY ---
const translations = {
  ar: {
    badge_free: "100% مجاني",
    tagline: "أدواتك الذكية في مكان واحد",
    privacy_badge: "يعمل في متصفحك | خصوصية تامة",
    hero_pill: "بدون تسجيل • بدون رسوم • بدون خوادم",
    hero_title_1: "أدوات رقمية ذكية ",
    hero_title_2: "فورية ومجانية للجميع",
    hero_desc: "مجموعة متكاملة من الأدوات المفيدة يومياً: ضغط وتعديل الصور، إنشاء رموز QR، توليد كلمات مرور فائقة الأمان، تنسيق النصوص، والعمليات الحسابية، كلها تعمل مباشرة على جهازك دون إرسال أي بيانات لخوادم خارجية.",
    search_placeholder: "ابحث عن أداة (مثال: QR، ضغط الصور، كلمة سر...)",
    
    // Categories
    cat_all: "جميع الأدوات",
    cat_media: "الصور والوسائط",
    cat_security: "الأمان والتوليد",
    cat_text: "النصوص والبيانات",
    cat_calc: "الحسابات والتحويل",

    // Tags
    tag_popular: "شائع",
    tag_instant: "فوري 100%",
    tag_security: "أمان عالي",
    tag_writing: "للكتاب",
    tag_devs: "للمطورين",
    tag_math: "رياضيات",
    tag_codec: "ترميز",
    tag_design: "تصميم",
    tag_measure: "قياس",
    btn_use_tool: "استخدم الأداة الآن",

    // Tool Cards
    tool_qr_title: "مولد رموز QR الذكي",
    tool_qr_desc: "أنشئ رموز QR مخصصة لأي رابط أو نص مع إمكانية تحميلها كصورة عالية الدقة فوراً.",
    tool_img_title: "ضغط وتحويل صيغ الصور",
    tool_img_desc: "قلل حجم الصور بنسبة تصل إلى 80% دون فقدان الجودة، مع تحويلها إلى WebP أو JPG دون مغادرة جهازك.",
    tool_pass_title: "مولد كلمات المرور الآمنة",
    tool_pass_desc: "أنشئ كلمات مرور عشوائية معقدة ومستحيلة التخمين مع تحديد الطول والرموز بضغطة زر واحدة.",
    tool_text_title: "محلل وعداد النصوص الذكي",
    tool_text_desc: "احسب الكلمات، الحروف، الأسطر، وتقدير وقت القراءة مع إمكانية تنظيف النص وتعديل حالته.",
    tool_json_title: "منسق وفاحص أكواد JSON",
    tool_json_desc: "رتّب ونسّق نصوص JSON، واكتشف الأخطاء البرمجية بسهولة مع خيارات التصغير (Minify) والنسخ.",
    tool_perc_title: "حاسبة النسبة المئوية الذكية",
    tool_perc_desc: "احسب النسب المئوية، مقدار الزيادة أو الخصم، والفرق بين القيم بسرعة ودون أي تعقيد.",
    tool_b64_title: "تشفير وفك تشفير Base64",
    tool_b64_desc: "حوّل النصوص إلى صيغة Base64 والعكس بدقة متناهية مع دعم الحروف العربية والرموز الخاصة.",
    tool_color_title: "منتقي ومحول صيغ الألوان",
    tool_color_desc: "اختر أي لون واحصل على رموزه الدقيقة في صيغ HEX و RGB و HSL مع نسخ فوري لحافظتك.",
    tool_unit_title: "محول القياسات والوحدات",
    tool_unit_desc: "تحويل فوري دقيق بين وحدات الطول، المساحة، الكتلة، الوزن والقوة، الحجم، ودرجة الحرارة.",

    // No Results & Footer
    no_results_title: "لم يتم العثور على أداة مطابقة",
    no_results_desc: "جرّب البحث بكلمات أخرى أو تصفح الأقسام أعلاه.",
    footer_copy: "جميع الأدوات مجانية 100% وبدون اشتراكات",
    footer_status: "جميع الأدوات تعمل محلياً بمتصفحك",
    copied_toast: "تم النسخ إلى الحافظة بنجاح!",

    // QR Tool Modal
    qr_input_label: "أدخل الرابط أو النص:",
    qr_color_fg: "لون الرمز:",
    qr_color_bg: "لون الخلفية:",
    qr_size: "الحجم (بكسل):",
    qr_download_btn: "تحميل صورة الرمز (PNG)",

    // Image Compressor Modal
    img_select_label: "اختر صورة من جهازك:",
    img_quality_label: "جودة الضغط:",
    img_format_label: "صيغة المخرجات:",
    img_original_size: "الحجم الأصلي:",
    img_new_size: "الحجم الجديد:",
    img_saved: "نسبة التوفير:",
    img_download_btn: "تحميل الصورة المضغوطة",
    img_drop_text: "انقر أو اسحب الصورة هنا",

    // Password Generator Modal
    pass_length: "طول كلمة المرور:",
    pass_upper: "أحرف كبيرة (A-Z)",
    pass_lower: "أحرف صغيرة (a-z)",
    pass_numbers: "أرقام (0-9)",
    pass_symbols: "رموز خاصة (!@#$)",
    pass_strength_weak: "ضعيفة جداً",
    pass_strength_fair: "متوسطة",
    pass_strength_strong: "قوية جداً",
    pass_strength_super: "فائقة الحماية",
    pass_generate_btn: "توليد كلمة سر جديدة",
    pass_copy_btn: "نسخ كلمة السر",

    // Text Counter Modal
    text_placeholder: "اكتب أو الصق النص هنا لمعاينته وتحليله فوراً...",
    stat_words: "الكلمات",
    stat_chars: "الحروف (مع المسافات)",
    stat_chars_no_spaces: "الحروف (بدون مسافات)",
    stat_lines: "الأسطر",
    stat_read_time: "وقت القراءة المقدر",
    stat_read_time_val: "{sec} ثانية",
    btn_clean_spaces: "تنظيف المسافات الزائدة",
    btn_uppercase: "أحرف كبيرة (UPPER)",
    btn_lowercase: "أحرف صغيرة (lower)",
    btn_copy_text: "نسخ النص",

    // JSON Formatter Modal
    json_placeholder: "الصق كود JSON هنا للتنسيق والتحقق...",
    json_valid: "كود JSON صحيح وسليم ✓",
    json_invalid: "خطأ في بنية الـ JSON: ",
    btn_format_2: "تنسيق (مسافتان)",
    btn_format_4: "تنسيق (4 مسافات)",
    btn_minify: "تصغير (Minify)",
    btn_copy_json: "نسخ الكود",

    // Percentage Calculator Modal
    calc_tab_1: "ما قيمة X% من Y؟",
    calc_tab_2: "ما نسبة X من Y؟",
    calc_tab_3: "نسبة الزيادة / النقصان",
    calc_x_label: "القيمة (X):",
    calc_y_label: "القيمة (Y):",
    calc_result: "النتيجة:",

    // Base64 Modal
    b64_input_label: "النص الأصلي:",
    b64_output_label: "النتيجة:",
    b64_encode_btn: "تشفير إلى Base64",
    b64_decode_btn: "فك تشفير من Base64",
    b64_copy_btn: "نسخ النتيجة",

    // Color Converter Modal
    color_pick_label: "اختر اللون المطلوب:",
    color_hex: "كود HEX:",
    color_rgb: "صيغة RGB:",
    color_hsl: "صيغة HSL:",
    color_preview_text: "معاينة التباين والنصوص",

    // Unit Converter Modal
    unit_category: "نوع القياس:",
    unit_cat_length: "الطول والمسافة",
    unit_cat_area: "المساحة",
    unit_cat_mass: "الكتلة",
    unit_cat_weight: "الوزن والقوة",
    unit_cat_volume: "الحجم والسعة",
    unit_cat_temp: "درجة الحرارة",
    unit_from: "من:",
    unit_to: "إلى:",
    unit_input_val: "القيمة المراد تحويلها:",

    // New Tools
    tag_unlimited: "غير محدود",
    tool_pdf_title: "أدوات ودمج ملفات PDF",
    tool_pdf_desc: "اجمع وادمج ملفات PDF متعددة في ملف واحد بسرعة وأمان تام بدون رفعها لأي سيرفر خارجي.",
    tool_lorem_title: "مولد نصوص لوريم إيبسوم وبدائل عربية",
    tool_lorem_desc: "ولّد نصوصاً عشوائية تجريبية لتصميماتك ومشاريعك باللغتين العربية واللاتينية مع تحديد الفقرات.",
    tool_calc_title: "الآلة الحاسبة التفاعلية",
    tool_calc_desc: "حاسبة رقمية سهلة الاستخدام للعمليات الحسابية السريعة والنسب والكسور في متصفحك مباشرة.",
    tool_case_title: "محول حالة النصوص ومنظف التشكيل",
    tool_case_desc: "تحويل فوري لحالات النصوص (كبير، صغير، عنوان، camelCase) مع ميزة إزالة التشكيل من النصوص العربية.",

    // PDF Merge Modal
    pdf_drop_text: "انقر لاختيار ملفات PDF أو اسحبها هنا (ملفان أو أكثر)",
    pdf_files_count: "الملفات المحددة ({count}):",
    pdf_btn_merge: "دمج وتحميل ملف PDF الموحد",
    pdf_merging: "جاري دمج الصفحات...",
    pdf_btn_clear: "مسح القائمة",
    pdf_success: "تم دمج الملفات بنجاح!",

    // Lorem Ipsum Modal
    lorem_type_label: "نوع التوليد:",
    lorem_type_p: "فقرات (Paragraphs)",
    lorem_type_s: "جمل (Sentences)",
    lorem_type_w: "كلمات (Words)",
    lorem_lang_label: "لغة النص البديل:",
    lorem_lang_ar: "نص عربي بديل (Arabic Dummy)",
    lorem_lang_latin: "لوريم إيبسوم (Latin Lorem)",
    lorem_count_label: "العدد المطلوب:",
    lorem_btn_gen: "توليد نص جديد",
    lorem_btn_copy: "نسخ النص المولد",

    // Calculator Modal
    calc_history: "السجل:",
    
    // Case Converter Modal
    case_input_label: "اكتب أو الصق النص هنا للتحويل الفوري:",
    case_btn_upper: "أحرف كبيرة (UPPERCASE)",
    case_btn_lower: "أحرف صغيرة (lowercase)",
    case_btn_title: "عنوان (Title Case)",
    case_btn_sentence: "جملة (Sentence case)",
    case_btn_camel: "سنام الجمل (camelCase)",
    case_btn_snake: "ثعباني (snake_case)",
    case_btn_kebab: "وصلات (kebab-case)",
    case_btn_clean_tashkeel: "إزالة التشكيل والتطويل من النص العربي",
    case_btn_copy: "نسخ النص المحول",

    // Tool 14: Images to PDF
    tool_imgpdf_title: "محول الصور إلى PDF",
    tool_imgpdf_desc: "اجمع صورك وحوّلها إلى ملف PDF عالي الجودة بضغطة زر وبدون رفعها لأي خادم خارجي.",
    imgpdf_drop_text: "اختر الصور أو اسحبها هنا (PNG, JPG, WebP)",
    imgpdf_files_count: "الصور المحددة ({count}):",
    imgpdf_fit_label: "تنسيق الصفحات:",
    imgpdf_fit_auto: "حسب حجم كل صورة تلقائياً (Original)",
    imgpdf_fit_a4: "صفحات A4 قياسية (Standard A4)",
    imgpdf_btn_convert: "تحويل وتحميل ملف PDF",
    imgpdf_converting: "جاري إنشاء ملف PDF...",
    imgpdf_success: "تم إنشاء ملف PDF بنجاح!",

    // Tool 15: Green Screen / Chroma Key
    tool_chroma_title: "حذف وتغيير الخلفية الخضراء",
    tool_chroma_desc: "احذف الكروما والخلفيات الخضراء واجعلها شفافة أو استبدلها بأي لون تختاره فورياً.",
    chroma_drop_text: "انقر لاختيار صورة ذات خلفية خضراء أو اسحبها هنا",
    chroma_target_color: "لون الخلفية المراد إزالته:",
    chroma_tolerance: "حساسية الإزالة (Tolerance):",
    chroma_mode_label: "نوع الاستبدال:",
    chroma_mode_trans: "خلفية شفافة (Transparent PNG)",
    chroma_mode_color: "استبدال بلون جديد (Custom Color)",
    chroma_new_color: "اللون الجديد:",
    chroma_download_btn: "تحميل الصورة المعدلة (PNG)",
    chroma_processing: "جاري المعالجة...",
  },

  en: {
    badge_free: "100% Free",
    tagline: "All your smart tools in one place",
    privacy_badge: "Runs in your browser | 100% Private",
    hero_pill: "No Sign-Up • Zero Cost • Serverless",
    hero_title_1: "Smart Digital Tools ",
    hero_title_2: "Instant & Free For Everyone",
    hero_desc: "A comprehensive suite of essential daily web utilities: image compression, QR generation, secure password creation, text analysis, and math calculators. Everything runs client-side with zero tracking.",
    search_placeholder: "Search tools (e.g., QR, image compressor, password...)",
    
    // Categories
    cat_all: "All Tools",
    cat_media: "Media & Images",
    cat_security: "Security & Generators",
    cat_text: "Text & Data",
    cat_calc: "Calculators & Units",

    // Tags
    tag_popular: "Popular",
    tag_instant: "100% Instant",
    tag_security: "High Security",
    tag_writing: "Writing",
    tag_devs: "Developers",
    tag_math: "Math",
    tag_codec: "Codec",
    tag_design: "Design",
    tag_measure: "Measurement",
    btn_use_tool: "Launch Tool",

    // Tool Cards
    tool_qr_title: "Smart QR Code Generator",
    tool_qr_desc: "Generate custom QR codes for any link or text instantly with high-resolution PNG download.",
    tool_img_title: "Image Compressor & Converter",
    tool_img_desc: "Shrink image files by up to 80% without quality loss. Convert to WebP or JPG right in your browser.",
    tool_pass_title: "Secure Password Generator",
    tool_pass_desc: "Generate cryptographically secure random passwords with customizable length and characters.",
    tool_text_title: "Smart Text Analyzer & Counter",
    tool_text_desc: "Count words, characters, lines, and reading time with instant text formatting and cleanup.",
    tool_json_title: "JSON Formatter & Validator",
    tool_json_desc: "Format and inspect JSON data with syntax error detection, minification, and copy options.",
    tool_perc_title: "Smart Percentage Calculator",
    tool_perc_desc: "Calculate percentages, percentage increases, discounts, and differences in seconds.",
    tool_b64_title: "Base64 Encoder / Decoder",
    tool_b64_desc: "Encode and decode text to and from Base64 with full UTF-8 Arabic and symbol support.",
    tool_color_title: "Color Picker & Converter",
    tool_color_desc: "Pick any color and get exact values in HEX, RGB, and HSL with one-click copying.",
    tool_unit_title: "Unit & Measurement Converter",
    tool_unit_desc: "Instant precise conversion between length, area, mass, weight/force, volume, and temperature.",

    // No Results & Footer
    no_results_title: "No matching tools found",
    no_results_desc: "Try searching with different keywords or browse categories above.",
    footer_copy: "All tools are 100% free with zero subscriptions",
    footer_status: "All tools execute locally inside your browser",
    copied_toast: "Copied to clipboard successfully!",

    // QR Tool Modal
    qr_input_label: "Enter URL or text:",
    qr_color_fg: "QR Code Color:",
    qr_color_bg: "Background Color:",
    qr_size: "Size (pixels):",
    qr_download_btn: "Download QR Image (PNG)",

    // Image Compressor Modal
    img_select_label: "Select image from your device:",
    img_quality_label: "Compression Quality:",
    img_format_label: "Output Format:",
    img_original_size: "Original Size:",
    img_new_size: "Compressed Size:",
    img_saved: "Saved Space:",
    img_download_btn: "Download Compressed Image",
    img_drop_text: "Click or drag an image here",

    // Password Generator Modal
    pass_length: "Password Length:",
    pass_upper: "Uppercase letters (A-Z)",
    pass_lower: "Lowercase letters (a-z)",
    pass_numbers: "Numbers (0-9)",
    pass_symbols: "Special Symbols (!@#$)",
    pass_strength_weak: "Very Weak",
    pass_strength_fair: "Moderate",
    pass_strength_strong: "Very Strong",
    pass_strength_super: "Super Secure",
    pass_generate_btn: "Generate New Password",
    pass_copy_btn: "Copy Password",

    // Text Counter Modal
    text_placeholder: "Type or paste your text here for instant analysis...",
    stat_words: "Words",
    stat_chars: "Characters (with spaces)",
    stat_chars_no_spaces: "Characters (no spaces)",
    stat_lines: "Lines",
    stat_read_time: "Estimated Reading Time",
    stat_read_time_val: "{sec} seconds",
    btn_clean_spaces: "Clean Extra Spaces",
    btn_uppercase: "UPPERCASE",
    btn_lowercase: "lowercase",
    btn_copy_text: "Copy Text",

    // JSON Formatter Modal
    json_placeholder: "Paste JSON here to format and validate...",
    json_valid: "JSON is valid and formatted ✓",
    json_invalid: "JSON Syntax Error: ",
    btn_format_2: "Prettify (2 spaces)",
    btn_format_4: "Prettify (4 spaces)",
    btn_minify: "Minify",
    btn_copy_json: "Copy JSON",

    // Percentage Calculator Modal
    calc_tab_1: "What is X% of Y?",
    calc_tab_2: "What % is X of Y?",
    calc_tab_3: "Percentage change",
    calc_x_label: "Value (X):",
    calc_y_label: "Value (Y):",
    calc_result: "Result:",

    // Base64 Modal
    b64_input_label: "Original Text:",
    b64_output_label: "Output:",
    b64_encode_btn: "Encode to Base64",
    b64_decode_btn: "Decode from Base64",
    b64_copy_btn: "Copy Output",

    // Color Converter Modal
    color_pick_label: "Select Desired Color:",
    color_hex: "HEX Code:",
    color_rgb: "RGB Format:",
    color_hsl: "HSL Format:",
    color_preview_text: "Contrast and Readability Preview",

    // Unit Converter Modal
    unit_category: "Category:",
    unit_cat_length: "Length & Distance",
    unit_cat_area: "Area",
    unit_cat_mass: "Mass",
    unit_cat_weight: "Weight & Force",
    unit_cat_volume: "Volume & Capacity",
    unit_cat_temp: "Temperature",
    unit_from: "From:",
    unit_to: "To:",
    unit_input_val: "Value to convert:",

    // New Tools
    tag_unlimited: "Unlimited",
    tool_pdf_title: "PDF Tools & Merger",
    tool_pdf_desc: "Merge multiple PDF documents into a single file quickly, securely, and 100% in your browser.",
    tool_lorem_title: "Lorem Ipsum & Arabic Dummy Text",
    tool_lorem_desc: "Generate dummy placeholder text for your mockups and designs in both Arabic and classic Latin.",
    tool_calc_title: "Interactive Pocket Calculator",
    tool_calc_desc: "A sleek, easy-to-use digital keypad calculator for quick arithmetic, percentages, and fractions.",
    tool_case_title: "Text Case Converter & Cleaner",
    tool_case_desc: "Instant text case conversions (UPPERCASE, lowercase, Title Case, camelCase) and Arabic diacritics removal.",

    // PDF Merge Modal
    pdf_drop_text: "Click to select PDF files or drop them here (2 or more)",
    pdf_files_count: "Selected Files ({count}):",
    pdf_btn_merge: "Merge & Download Combined PDF",
    pdf_merging: "Merging pages...",
    pdf_btn_clear: "Clear List",
    pdf_success: "PDF files merged successfully!",

    // Lorem Ipsum Modal
    lorem_type_label: "Generation Type:",
    lorem_type_p: "Paragraphs",
    lorem_type_s: "Sentences",
    lorem_type_w: "Words",
    lorem_lang_label: "Dummy Text Language:",
    lorem_lang_ar: "Arabic Placeholder Text",
    lorem_lang_latin: "Classic Latin (Lorem Ipsum)",
    lorem_count_label: "Quantity:",
    lorem_btn_gen: "Generate Text",
    lorem_btn_copy: "Copy Generated Text",

    // Calculator Modal
    calc_history: "History:",

    // Case Converter Modal
    case_input_label: "Type or paste text here for instant transformation:",
    case_btn_upper: "UPPERCASE",
    case_btn_lower: "lowercase",
    case_btn_title: "Title Case",
    case_btn_sentence: "Sentence case",
    case_btn_camel: "camelCase",
    case_btn_snake: "snake_case",
    case_btn_kebab: "kebab-case",
    case_btn_clean_tashkeel: "Remove Arabic Tashkeel & Diacritics",
    case_btn_copy: "Copy Transformed Text",

    // Tool 14: Images to PDF
    tool_imgpdf_title: "Images to PDF Converter",
    tool_imgpdf_desc: "Combine multiple images into a high-quality PDF document locally in your browser.",
    imgpdf_drop_text: "Select images or drop them here (PNG, JPG, WebP)",
    imgpdf_files_count: "Selected Images ({count}):",
    imgpdf_fit_label: "Page Sizing:",
    imgpdf_fit_auto: "Fit Original Image Size",
    imgpdf_fit_a4: "Standard A4 Document",
    imgpdf_btn_convert: "Convert & Download PDF",
    imgpdf_converting: "Generating PDF document...",
    imgpdf_success: "PDF created successfully!",

    // Tool 15: Green Screen / Chroma Key
    tool_chroma_title: "Green Screen & Color Replacer",
    tool_chroma_desc: "Remove chroma green backgrounds with transparency or replace with any custom color.",
    chroma_drop_text: "Click or drop an image with green background here",
    chroma_target_color: "Background Color to Remove:",
    chroma_tolerance: "Removal Sensitivity (Tolerance):",
    chroma_mode_label: "Replacement Mode:",
    chroma_mode_trans: "Transparent Background (PNG)",
    chroma_mode_color: "Replace with New Color",
    chroma_new_color: "New Background Color:",
    chroma_download_btn: "Download Processed Image (PNG)",
    chroma_processing: "Processing image...",
  }
};

// Current State
let currentLang = localStorage.getItem('toolverse_lang') || 'ar';
let activeCategory = 'all';
let currentOpenToolId = null;

// --- 2. INITIALIZATION & LANGUAGE SWITCHING ---
function initApp() {
  applyLanguage(currentLang);
  setupEvents();
  lucide.createIcons();
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('toolverse_lang', lang);

  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update Language Button Text
  const langBtnText = document.getElementById('langBtnText');
  langBtnText.textContent = lang === 'ar' ? 'English' : 'العربية';

  // Translate all text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Translate placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // If a modal tool is open, re-render it with new language
  if (currentOpenToolId) {
    renderToolModal(currentOpenToolId);
  }

  lucide.createIcons();
}

function t(key, replacements = {}) {
  let text = (translations[currentLang] && translations[currentLang][key]) || key;
  for (const [k, v] of Object.entries(replacements)) {
    text = text.replace(`{${k}}`, v);
  }
  return text;
}

// --- 3. EVENT LISTENERS SETUP ---
function setupEvents() {
  // Language Toggle Button
  document.getElementById('langToggleBtn').addEventListener('click', () => {
    applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
  });

  // Category Filter Buttons
  document.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-filter-btn').forEach(b => {
        b.classList.remove('tab-active');
        b.classList.add('bg-slate-800/80', 'text-slate-300');
      });
      btn.classList.add('tab-active');
      btn.classList.remove('bg-slate-800/80', 'text-slate-300');
      activeCategory = btn.getAttribute('data-cat');
      filterTools();
    });
  });

  // Search Input
  const searchInput = document.getElementById('toolSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');

  searchInput.addEventListener('input', () => {
    if (searchInput.value.trim().length > 0) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
    filterTools();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.add('hidden');
    filterTools();
    searchInput.focus();
  });

  // Close modal when clicking outside
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') {
      closeModal();
    }
  });

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// --- 4. TOOL FILTERING (SEARCH & CATEGORIES) ---
function filterTools() {
  const query = document.getElementById('toolSearchInput').value.toLowerCase().trim();
  const cards = document.querySelectorAll('.tool-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const cats = card.getAttribute('data-category');
    const matchesCategory = (activeCategory === 'all' || cats.includes(activeCategory));
    
    // Search in card title, description, and tags
    const title = card.querySelector('h2').textContent.toLowerCase();
    const desc = card.querySelector('p').textContent.toLowerCase();
    const matchesSearch = query === '' || title.includes(query) || desc.includes(query);

    if (matchesCategory && matchesSearch) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  const noResults = document.getElementById('noResultsMessage');
  if (visibleCount === 0) {
    noResults.classList.remove('hidden');
  } else {
    noResults.classList.add('hidden');
  }
}

// --- 5. MODAL MANAGEMENT & TOOL RENDERING ---
function openModal(toolId) {
  currentOpenToolId = toolId;
  const overlay = document.getElementById('modalOverlay');
  const wrapper = document.getElementById('modalContentWrapper');
  
  renderToolModal(toolId);
  
  overlay.classList.remove('hidden');
  setTimeout(() => {
    wrapper.classList.remove('scale-95', 'opacity-0');
    wrapper.classList.add('scale-100', 'opacity-100');
  }, 10);
  lucide.createIcons();
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  const wrapper = document.getElementById('modalContentWrapper');
  
  wrapper.classList.remove('scale-100', 'opacity-100');
  wrapper.classList.add('scale-95', 'opacity-0');
  
  setTimeout(() => {
    overlay.classList.add('hidden');
    currentOpenToolId = null;
    document.getElementById('modalToolBody').innerHTML = '';
  }, 200);
}

function renderToolModal(toolId) {
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const iconContainer = document.getElementById('modalIconContainer');
  const body = document.getElementById('modalToolBody');

  switch (toolId) {
    case 'tool-qr':
      modalTitle.textContent = t('tool_qr_title');
      modalSubtitle.textContent = t('tool_qr_desc');
      iconContainer.innerHTML = '<i data-lucide="qr-code" class="w-6 h-6"></i>';
      body.innerHTML = getQrToolHtml();
      initQrTool();
      break;

    case 'tool-img-compress':
      modalTitle.textContent = t('tool_img_title');
      modalSubtitle.textContent = t('tool_img_desc');
      iconContainer.innerHTML = '<i data-lucide="image-down" class="w-6 h-6"></i>';
      body.innerHTML = getImageCompressToolHtml();
      initImageCompressTool();
      break;

    case 'tool-pass-gen':
      modalTitle.textContent = t('tool_pass_title');
      modalSubtitle.textContent = t('tool_pass_desc');
      iconContainer.innerHTML = '<i data-lucide="key-round" class="w-6 h-6"></i>';
      body.innerHTML = getPasswordToolHtml();
      initPasswordTool();
      break;

    case 'tool-text-counter':
      modalTitle.textContent = t('tool_text_title');
      modalSubtitle.textContent = t('tool_text_desc');
      iconContainer.innerHTML = '<i data-lucide="text-quote" class="w-6 h-6"></i>';
      body.innerHTML = getTextCounterHtml();
      initTextCounterTool();
      break;

    case 'tool-json-fmt':
      modalTitle.textContent = t('tool_json_title');
      modalSubtitle.textContent = t('tool_json_desc');
      iconContainer.innerHTML = '<i data-lucide="code-2" class="w-6 h-6"></i>';
      body.innerHTML = getJsonFormatterHtml();
      initJsonTool();
      break;

    case 'tool-perc-calc':
      modalTitle.textContent = t('tool_perc_title');
      modalSubtitle.textContent = t('tool_perc_desc');
      iconContainer.innerHTML = '<i data-lucide="percent" class="w-6 h-6"></i>';
      body.innerHTML = getPercCalculatorHtml();
      initPercCalcTool();
      break;

    case 'tool-base64':
      modalTitle.textContent = t('tool_b64_title');
      modalSubtitle.textContent = t('tool_b64_desc');
      iconContainer.innerHTML = '<i data-lucide="binary" class="w-6 h-6"></i>';
      body.innerHTML = getBase64Html();
      initBase64Tool();
      break;

    case 'tool-color-picker':
      modalTitle.textContent = t('tool_color_title');
      modalSubtitle.textContent = t('tool_color_desc');
      iconContainer.innerHTML = '<i data-lucide="palette" class="w-6 h-6"></i>';
      body.innerHTML = getColorPickerHtml();
      initColorTool();
      break;

    case 'tool-unit-conv':
      modalTitle.textContent = t('tool_unit_title');
      modalSubtitle.textContent = t('tool_unit_desc');
      iconContainer.innerHTML = '<i data-lucide="scale" class="w-6 h-6"></i>';
      body.innerHTML = getUnitConverterHtml();
      initUnitTool();
      break;

    case 'tool-pdf-merge':
      modalTitle.textContent = t('tool_pdf_title');
      modalSubtitle.textContent = t('tool_pdf_desc');
      iconContainer.innerHTML = '<i data-lucide="file-stack" class="w-6 h-6"></i>';
      body.innerHTML = getPdfMergeHtml();
      initPdfMergeTool();
      break;

    case 'tool-lorem-gen':
      modalTitle.textContent = t('tool_lorem_title');
      modalSubtitle.textContent = t('tool_lorem_desc');
      iconContainer.innerHTML = '<i data-lucide="align-left" class="w-6 h-6"></i>';
      body.innerHTML = getLoremGenHtml();
      initLoremGenTool();
      break;

    case 'tool-calc-tool':
      modalTitle.textContent = t('tool_calc_title');
      modalSubtitle.textContent = t('tool_calc_desc');
      iconContainer.innerHTML = '<i data-lucide="calculator" class="w-6 h-6"></i>';
      body.innerHTML = getCalculatorHtml();
      initCalculatorTool();
      break;

    case 'tool-case-conv':
      modalTitle.textContent = t('tool_case_title');
      modalSubtitle.textContent = t('tool_case_desc');
      iconContainer.innerHTML = '<i data-lucide="type" class="w-6 h-6"></i>';
      body.innerHTML = getCaseConverterHtml();
      initCaseConverterTool();
      break;

    case 'tool-img-to-pdf':
      modalTitle.textContent = t('tool_imgpdf_title');
      modalSubtitle.textContent = t('tool_imgpdf_desc');
      iconContainer.innerHTML = '<i data-lucide="images" class="w-6 h-6"></i>';
      body.innerHTML = getImgToPdfHtml();
      initImgToPdfTool();
      break;

    case 'tool-chroma-key':
      modalTitle.textContent = t('tool_chroma_title');
      modalSubtitle.textContent = t('tool_chroma_desc');
      iconContainer.innerHTML = '<i data-lucide="wand-2" class="w-6 h-6"></i>';
      body.innerHTML = getChromaKeyHtml();
      initChromaKeyTool();
      break;
  }
  lucide.createIcons();
}

// --- 6. TOAST NOTIFICATION ---
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMsg');
  msgEl.textContent = message || t('copied_toast');
  toast.classList.remove('hidden');
  toast.classList.add('flex');
  
  setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  }, 2600);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(t('copied_toast'));
  }).catch(err => {
    console.error('Copy failed: ', err);
  });
}

// ==========================================
// TOOL 1: QR CODE GENERATOR
// ==========================================
function getQrToolHtml() {
  return `
    <div class="space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center">
        <!-- Controls (7 cols) -->
        <div class="sm:col-span-7 space-y-3">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">${t('qr_input_label')}</label>
            <input type="text" id="qrTextInput" value="https://google.com" 
                   class="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-brand-500" placeholder="https://example.com" />
          </div>

          <div class="grid grid-cols-2 gap-2.5">
            <div>
              <label class="block text-[11px] font-medium text-slate-400 mb-1">${t('qr_color_fg')}</label>
              <div class="flex items-center gap-2 bg-slate-800 p-1.5 px-2.5 rounded-xl border border-slate-700">
                <input type="color" id="qrColorDark" value="#000000" class="w-6 h-6 rounded border-0 cursor-pointer bg-transparent" />
                <span id="qrColorDarkVal" class="text-[11px] font-mono text-slate-300">#000000</span>
              </div>
            </div>
            <div>
              <label class="block text-[11px] font-medium text-slate-400 mb-1">${t('qr_color_bg')}</label>
              <div class="flex items-center gap-2 bg-slate-800 p-1.5 px-2.5 rounded-xl border border-slate-700">
                <input type="color" id="qrColorLight" value="#ffffff" class="w-6 h-6 rounded border-0 cursor-pointer bg-transparent" />
                <span id="qrColorLightVal" class="text-[11px] font-mono text-slate-300">#ffffff</span>
              </div>
            </div>
          </div>
        </div>

        <!-- QR Canvas Preview (5 cols) -->
        <div class="sm:col-span-5 flex flex-col items-center justify-center p-3 bg-slate-950/70 rounded-2xl border border-slate-800">
          <div id="qrcodeCanvas" class="p-2.5 bg-white rounded-xl shadow-md flex items-center justify-center"></div>
        </div>
      </div>

      <button id="downloadQrBtn" class="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-brand-600/30">
        <i data-lucide="download" class="w-4 h-4"></i>
        <span>${t('qr_download_btn')}</span>
      </button>
    </div>
  `;
}

function initQrTool() {
  const textInput = document.getElementById('qrTextInput');
  const colorDark = document.getElementById('qrColorDark');
  const colorLight = document.getElementById('qrColorLight');
  const container = document.getElementById('qrcodeCanvas');
  const downloadBtn = document.getElementById('downloadQrBtn');

  let qrInstance = null;

  function updateQr() {
    container.innerHTML = '';
    const text = textInput.value.trim() || 'https://google.com';
    container.style.backgroundColor = colorLight.value;

    qrInstance = new QRCode(container, {
      text: text,
      width: 140,
      height: 140,
      colorDark: colorDark.value,
      colorLight: colorLight.value,
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  textInput.addEventListener('input', updateQr);
  colorDark.addEventListener('input', (e) => {
    document.getElementById('qrColorDarkVal').textContent = e.target.value;
    updateQr();
  });
  colorLight.addEventListener('input', (e) => {
    document.getElementById('qrColorLightVal').textContent = e.target.value;
    updateQr();
  });

  downloadBtn.addEventListener('click', () => {
    const img = container.querySelector('img');
    if (img && img.src) {
      const a = document.createElement('a');
      a.href = img.src;
      a.download = 'toolverse-qrcode.png';
      a.click();
    } else {
      const canvas = container.querySelector('canvas');
      if (canvas) {
        const a = document.createElement('a');
        a.href = canvas.toDataURL('image/png');
        a.download = 'toolverse-qrcode.png';
        a.click();
      }
    }
  });

  updateQr();
}

// ==========================================
// TOOL 2: IMAGE COMPRESSOR & CONVERTER
// ==========================================
function getImageCompressToolHtml() {
  return `
    <div class="space-y-5">
      <div id="dropZone" class="border-2 border-dashed border-slate-700 hover:border-brand-500 rounded-2xl p-8 text-center cursor-pointer transition-colors bg-slate-800/40">
        <input type="file" id="imageFileInput" accept="image/*" class="hidden" />
        <i data-lucide="upload-cloud" class="w-12 h-12 mx-auto text-brand-400 mb-3"></i>
        <p class="text-sm font-medium text-slate-200 mb-1">${t('img_drop_text')}</p>
        <p class="text-xs text-slate-400">PNG, JPG, WebP (Max 25MB)</p>
      </div>

      <div id="compressControls" class="hidden space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div class="flex justify-between text-xs text-slate-300 mb-2">
              <span>${t('img_quality_label')}</span>
              <span id="qualityValDisplay" class="font-bold text-brand-400">75%</span>
            </div>
            <input type="range" id="qualitySlider" min="10" max="100" value="75" class="w-full accent-brand-500 cursor-pointer" />
          </div>

          <div>
            <label class="block text-xs text-slate-300 mb-2">${t('img_format_label')}</label>
            <select id="outputFormatSelect" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500">
              <option value="image/webp">WebP (أعلى توفير للمساحة)</option>
              <option value="image/jpeg">JPEG / JPG</option>
              <option value="image/png">PNG</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3 p-4 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
          <div>
            <span class="text-xs text-slate-400 block mb-1">${t('img_original_size')}</span>
            <span id="origSizeDisplay" class="text-sm font-bold text-slate-200">0 KB</span>
          </div>
          <div>
            <span class="text-xs text-slate-400 block mb-1">${t('img_new_size')}</span>
            <span id="newSizeDisplay" class="text-sm font-bold text-emerald-400">0 KB</span>
          </div>
          <div>
            <span class="text-xs text-slate-400 block mb-1">${t('img_saved')}</span>
            <span id="savingsDisplay" class="text-sm font-bold text-purple-400">0%</span>
          </div>
        </div>

        <div class="flex justify-center p-2 bg-slate-950/40 rounded-xl">
          <img id="compressedPreview" class="max-h-48 rounded-lg object-contain shadow" alt="Preview" />
        </div>

        <button id="downloadCompressedBtn" class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/25">
          <i data-lucide="download" class="w-5 h-5"></i>
          <span>${t('img_download_btn')}</span>
        </button>
      </div>
    </div>
  `;
}

function initImageCompressTool() {
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('imageFileInput');
  const controls = document.getElementById('compressControls');
  const qualitySlider = document.getElementById('qualitySlider');
  const qualityValDisplay = document.getElementById('qualityValDisplay');
  const formatSelect = document.getElementById('outputFormatSelect');
  const preview = document.getElementById('compressedPreview');
  const origSizeEl = document.getElementById('origSizeDisplay');
  const newSizeEl = document.getElementById('newSizeDisplay');
  const savingsEl = document.getElementById('savingsDisplay');
  const downloadBtn = document.getElementById('downloadCompressedBtn');

  let originalFile = null;
  let compressedBlob = null;

  dropZone.addEventListener('click', () => fileInput.click());

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('border-brand-500');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('border-brand-500');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('border-brand-500');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImage(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleImage(e.target.files[0]);
    }
  });

  qualitySlider.addEventListener('input', (e) => {
    qualityValDisplay.textContent = e.target.value + '%';
    processCompression();
  });

  formatSelect.addEventListener('change', processCompression);

  function handleImage(file) {
    if (!file.type.startsWith('image/')) return;
    originalFile = file;
    origSizeEl.textContent = formatBytes(file.size);
    controls.classList.remove('hidden');
    processCompression();
  }

  function processCompression() {
    if (!originalFile) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const quality = parseInt(qualitySlider.value, 10) / 100;
        const mimeType = formatSelect.value;

        canvas.toBlob((blob) => {
          compressedBlob = blob;
          preview.src = URL.createObjectURL(blob);
          newSizeEl.textContent = formatBytes(blob.size);

          const savedRatio = Math.max(0, Math.round(((originalFile.size - blob.size) / originalFile.size) * 100));
          savingsEl.textContent = savedRatio + '%';
        }, mimeType, quality);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(originalFile);
  }

  downloadBtn.addEventListener('click', () => {
    if (!compressedBlob) return;
    const ext = formatSelect.value === 'image/webp' ? 'webp' : (formatSelect.value === 'image/jpeg' ? 'jpg' : 'png');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(compressedBlob);
    a.download = `toolverse-compressed.${ext}`;
    a.click();
  });

  function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// ==========================================
// TOOL 3: PASSWORD GENERATOR
// ==========================================
function getPasswordToolHtml() {
  return `
    <div class="space-y-6">
      <!-- Output Card -->
      <div class="relative bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-3">
        <input type="text" id="generatedPassword" readonly 
               class="w-full bg-transparent font-mono text-lg sm:text-xl font-bold tracking-wider text-brand-400 focus:outline-none" />
        <button id="copyPassBtn" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors">
          <i data-lucide="copy" class="w-4 h-4"></i>
          <span>${t('pass_copy_btn')}</span>
        </button>
      </div>

      <!-- Strength Bar -->
      <div>
        <div class="flex justify-between text-xs text-slate-400 mb-1.5">
          <span>قوة كلمة السر:</span>
          <span id="strengthText" class="font-bold text-emerald-400">${t('pass_strength_super')}</span>
        </div>
        <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
          <div id="strengthBar" class="h-full bg-emerald-500 transition-all duration-300 w-full"></div>
        </div>
      </div>

      <!-- Length Slider -->
      <div>
        <div class="flex justify-between text-sm text-slate-300 mb-2">
          <span>${t('pass_length')}</span>
          <span id="passLengthVal" class="font-mono font-bold text-brand-400">16</span>
        </div>
        <input type="range" id="passLengthSlider" min="8" max="48" value="16" class="w-full accent-brand-500 cursor-pointer" />
      </div>

      <!-- Checkboxes -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label class="flex items-center gap-3 p-3 bg-slate-800/60 rounded-xl cursor-pointer hover:bg-slate-800 transition">
          <input type="checkbox" id="chkUpper" checked class="w-4 h-4 accent-brand-500 rounded" />
          <span class="text-sm text-slate-200">${t('pass_upper')}</span>
        </label>
        <label class="flex items-center gap-3 p-3 bg-slate-800/60 rounded-xl cursor-pointer hover:bg-slate-800 transition">
          <input type="checkbox" id="chkLower" checked class="w-4 h-4 accent-brand-500 rounded" />
          <span class="text-sm text-slate-200">${t('pass_lower')}</span>
        </label>
        <label class="flex items-center gap-3 p-3 bg-slate-800/60 rounded-xl cursor-pointer hover:bg-slate-800 transition">
          <input type="checkbox" id="chkNumbers" checked class="w-4 h-4 accent-brand-500 rounded" />
          <span class="text-sm text-slate-200">${t('pass_numbers')}</span>
        </label>
        <label class="flex items-center gap-3 p-3 bg-slate-800/60 rounded-xl cursor-pointer hover:bg-slate-800 transition">
          <input type="checkbox" id="chkSymbols" checked class="w-4 h-4 accent-brand-500 rounded" />
          <span class="text-sm text-slate-200">${t('pass_symbols')}</span>
        </label>
      </div>

      <!-- Generate Button -->
      <button id="regenPassBtn" class="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-brand-600/30">
        <i data-lucide="refresh-cw" class="w-5 h-5"></i>
        <span>${t('pass_generate_btn')}</span>
      </button>
    </div>
  `;
}

function initPasswordTool() {
  const output = document.getElementById('generatedPassword');
  const lengthSlider = document.getElementById('passLengthSlider');
  const lengthDisplay = document.getElementById('passLengthVal');
  const chkUpper = document.getElementById('chkUpper');
  const chkLower = document.getElementById('chkLower');
  const chkNumbers = document.getElementById('chkNumbers');
  const chkSymbols = document.getElementById('chkSymbols');
  const copyBtn = document.getElementById('copyPassBtn');
  const regenBtn = document.getElementById('regenPassBtn');
  const strengthBar = document.getElementById('strengthBar');
  const strengthText = document.getElementById('strengthText');

  function generatePassword() {
    const length = parseInt(lengthSlider.value, 10);
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let charset = "";
    if (chkUpper.checked) charset += upper;
    if (chkLower.checked) charset += lower;
    if (chkNumbers.checked) charset += numbers;
    if (chkSymbols.checked) charset += symbols;

    if (charset === "") {
      output.value = "";
      return;
    }

    const randomBytes = new Uint32Array(length);
    window.crypto.getRandomValues(randomBytes);

    let password = "";
    for (let i = 0; i < length; i++) {
      password += charset[randomBytes[i] % charset.length];
    }
    output.value = password;

    // Calculate Strength
    let score = 0;
    if (length >= 12) score += 25;
    if (length >= 16) score += 15;
    if (chkUpper.checked) score += 15;
    if (chkLower.checked) score += 15;
    if (chkNumbers.checked) score += 15;
    if (chkSymbols.checked) score += 15;

    score = Math.min(100, score);
    strengthBar.style.width = score + '%';

    if (score < 40) {
      strengthBar.className = 'h-full bg-rose-500 transition-all duration-300';
      strengthText.className = 'font-bold text-rose-400';
      strengthText.textContent = t('pass_strength_weak');
    } else if (score < 70) {
      strengthBar.className = 'h-full bg-amber-500 transition-all duration-300';
      strengthText.className = 'font-bold text-amber-400';
      strengthText.textContent = t('pass_strength_fair');
    } else if (score < 90) {
      strengthBar.className = 'h-full bg-emerald-500 transition-all duration-300';
      strengthText.className = 'font-bold text-emerald-400';
      strengthText.textContent = t('pass_strength_strong');
    } else {
      strengthBar.className = 'h-full bg-purple-500 transition-all duration-300';
      strengthText.className = 'font-bold text-purple-400';
      strengthText.textContent = t('pass_strength_super');
    }
  }

  lengthSlider.addEventListener('input', (e) => {
    lengthDisplay.textContent = e.target.value;
    generatePassword();
  });

  [chkUpper, chkLower, chkNumbers, chkSymbols].forEach(el => {
    el.addEventListener('change', generatePassword);
  });

  regenBtn.addEventListener('click', generatePassword);
  copyBtn.addEventListener('click', () => copyToClipboard(output.value));

  generatePassword();
}

// ==========================================
// TOOL 4: TEXT ANALYZER & COUNTER
// ==========================================
function getTextCounterHtml() {
  return `
    <div class="space-y-4">
      <textarea id="textAnalyzerInput" rows="6"
                class="w-full p-4 bg-slate-800/80 border border-slate-700 rounded-2xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-500 text-sm leading-relaxed"
                placeholder="${t('text_placeholder')}"></textarea>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
          <span class="text-xs text-slate-400 block">${t('stat_words')}</span>
          <span id="statWords" class="text-xl font-bold text-white">0</span>
        </div>
        <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
          <span class="text-xs text-slate-400 block">${t('stat_chars')}</span>
          <span id="statChars" class="text-xl font-bold text-brand-400">0</span>
        </div>
        <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
          <span class="text-xs text-slate-400 block">${t('stat_chars_no_spaces')}</span>
          <span id="statCharsNoSpaces" class="text-xl font-bold text-emerald-400">0</span>
        </div>
        <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
          <span class="text-xs text-slate-400 block">${t('stat_lines')}</span>
          <span id="statLines" class="text-xl font-bold text-purple-400">0</span>
        </div>
      </div>

      <div class="p-3 bg-slate-950/40 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300">
        <span>${t('stat_read_time')}:</span>
        <span id="statReadTime" class="font-bold text-brand-400">0 ثانية</span>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-wrap gap-2 pt-2">
        <button id="btnCleanSpaces" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition">
          ${t('btn_clean_spaces')}
        </button>
        <button id="btnUpper" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition">
          ${t('btn_uppercase')}
        </button>
        <button id="btnLower" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition">
          ${t('btn_lowercase')}
        </button>
        <button id="btnCopyText" class="px-4 py-2 ms-auto rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition flex items-center gap-1.5">
          <i data-lucide="copy" class="w-4 h-4"></i>
          <span>${t('btn_copy_text')}</span>
        </button>
      </div>
    </div>
  `;
}

function initTextCounterTool() {
  const input = document.getElementById('textAnalyzerInput');
  const statWords = document.getElementById('statWords');
  const statChars = document.getElementById('statChars');
  const statCharsNoSpaces = document.getElementById('statCharsNoSpaces');
  const statLines = document.getElementById('statLines');
  const statReadTime = document.getElementById('statReadTime');

  function updateStats() {
    const text = input.value;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, '').length;
    const lines = text === '' ? 0 : text.split(/\r\n|\r|\n/).length;

    statWords.textContent = words.toLocaleString();
    statChars.textContent = chars.toLocaleString();
    statCharsNoSpaces.textContent = charsNoSpaces.toLocaleString();
    statLines.textContent = lines.toLocaleString();

    // 200 words per minute average reading speed
    const seconds = Math.ceil((words / 200) * 60);
    statReadTime.textContent = t('stat_read_time_val', { sec: seconds });
  }

  input.addEventListener('input', updateStats);

  document.getElementById('btnCleanSpaces').addEventListener('click', () => {
    input.value = input.value.replace(/[ \t]+/g, ' ').trim();
    updateStats();
  });

  document.getElementById('btnUpper').addEventListener('click', () => {
    input.value = input.value.toUpperCase();
    updateStats();
  });

  document.getElementById('btnLower').addEventListener('click', () => {
    input.value = input.value.toLowerCase();
    updateStats();
  });

  document.getElementById('btnCopyText').addEventListener('click', () => {
    copyToClipboard(input.value);
  });

  updateStats();
}

// ==========================================
// TOOL 5: JSON FORMATTER & VALIDATOR
// ==========================================
function getJsonFormatterHtml() {
  return `
    <div class="space-y-4">
      <div id="jsonStatusBadge" class="hidden px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2"></div>

      <textarea id="jsonInput" rows="9"
                class="w-full p-4 bg-slate-950 font-mono text-xs text-emerald-400 border border-slate-800 rounded-2xl focus:outline-none focus:border-brand-500 leading-relaxed"
                placeholder='{\n  "title": "ToolVerse",\n  "status": "ready",\n  "free": true\n}'></textarea>

      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="flex flex-wrap gap-2">
          <button id="btnFormat2" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition">
            ${t('btn_format_2')}
          </button>
          <button id="btnFormat4" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition">
            ${t('btn_format_4')}
          </button>
          <button id="btnMinify" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition">
            ${t('btn_minify')}
          </button>
        </div>
        <button id="btnCopyJson" class="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition flex items-center gap-1.5">
          <i data-lucide="copy" class="w-4 h-4"></i>
          <span>${t('btn_copy_json')}</span>
        </button>
      </div>
    </div>
  `;
}

function initJsonTool() {
  const jsonInput = document.getElementById('jsonInput');
  const statusBadge = document.getElementById('jsonStatusBadge');

  function validateAndFormat(indent) {
    const raw = jsonInput.value.trim();
    if (!raw) {
      statusBadge.classList.add('hidden');
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      if (indent !== undefined) {
        jsonInput.value = JSON.stringify(parsed, null, indent);
      }
      statusBadge.className = 'px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
      statusBadge.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i><span>${t('json_valid')}</span>`;
      statusBadge.classList.remove('hidden');
    } catch (err) {
      statusBadge.className = 'px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 bg-rose-500/10 text-rose-400 border border-rose-500/20';
      statusBadge.innerHTML = `<i data-lucide="alert-triangle" class="w-4 h-4"></i><span>${t('json_invalid') + err.message}</span>`;
      statusBadge.classList.remove('hidden');
    }
    lucide.createIcons();
  }

  jsonInput.addEventListener('input', () => validateAndFormat());
  document.getElementById('btnFormat2').addEventListener('click', () => validateAndFormat(2));
  document.getElementById('btnFormat4').addEventListener('click', () => validateAndFormat(4));
  document.getElementById('btnMinify').addEventListener('click', () => validateAndFormat(0));
  document.getElementById('btnCopyJson').addEventListener('click', () => copyToClipboard(jsonInput.value));
}

// ==========================================
// TOOL 6: PERCENTAGE CALCULATOR
// ==========================================
function getPercCalculatorHtml() {
  return `
    <div class="space-y-6">
      <!-- Mode Tabs -->
      <div class="grid grid-cols-3 gap-2 p-1.5 bg-slate-950 rounded-2xl border border-slate-800 text-xs font-semibold text-center">
        <button id="pTab1" class="py-2.5 rounded-xl bg-brand-600 text-white transition">${t('calc_tab_1')}</button>
        <button id="pTab2" class="py-2.5 rounded-xl text-slate-400 hover:text-white transition">${t('calc_tab_2')}</button>
        <button id="pTab3" class="py-2.5 rounded-xl text-slate-400 hover:text-white transition">${t('calc_tab_3')}</button>
      </div>

      <!-- Inputs -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label id="lblX" class="block text-xs font-medium text-slate-300 mb-2">${t('calc_x_label')}</label>
          <input type="number" id="inputX" value="20" class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-500" />
        </div>
        <div>
          <label id="lblY" class="block text-xs font-medium text-slate-300 mb-2">${t('calc_y_label')}</label>
          <input type="number" id="inputY" value="150" class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-500" />
        </div>
      </div>

      <!-- Result Card -->
      <div class="p-6 bg-slate-950/70 border border-slate-800 rounded-2xl text-center">
        <span class="text-xs text-slate-400 block mb-1">${t('calc_result')}</span>
        <span id="percResultDisplay" class="text-3xl font-extrabold text-brand-400">30</span>
      </div>
    </div>
  `;
}

function initPercCalcTool() {
  let mode = 1;
  const inputX = document.getElementById('inputX');
  const inputY = document.getElementById('inputY');
  const resDisplay = document.getElementById('percResultDisplay');
  const tab1 = document.getElementById('pTab1');
  const tab2 = document.getElementById('pTab2');
  const tab3 = document.getElementById('pTab3');

  function calculate() {
    const x = parseFloat(inputX.value) || 0;
    const y = parseFloat(inputY.value) || 0;
    let result = 0;

    if (mode === 1) {
      // What is X% of Y?
      result = (x / 100) * y;
      resDisplay.textContent = result.toLocaleString();
    } else if (mode === 2) {
      // What % is X of Y?
      result = y !== 0 ? (x / y) * 100 : 0;
      resDisplay.textContent = result.toFixed(2) + '%';
    } else if (mode === 3) {
      // Percentage increase/decrease
      result = x !== 0 ? ((y - x) / x) * 100 : 0;
      const sign = result >= 0 ? '+' : '';
      resDisplay.textContent = sign + result.toFixed(2) + '%';
    }
  }

  function setMode(newMode) {
    mode = newMode;
    [tab1, tab2, tab3].forEach((t, i) => {
      if (i + 1 === mode) {
        t.className = 'py-2.5 rounded-xl bg-brand-600 text-white transition';
      } else {
        t.className = 'py-2.5 rounded-xl text-slate-400 hover:text-white transition';
      }
    });
    calculate();
  }

  tab1.addEventListener('click', () => setMode(1));
  tab2.addEventListener('click', () => setMode(2));
  tab3.addEventListener('click', () => setMode(3));
  inputX.addEventListener('input', calculate);
  inputY.addEventListener('input', calculate);

  calculate();
}

// ==========================================
// TOOL 7: BASE64 ENCODER / DECODER
// ==========================================
function getBase64Html() {
  return `
    <div class="space-y-4">
      <div>
        <label class="block text-xs font-medium text-slate-300 mb-2">${t('b64_input_label')}</label>
        <textarea id="b64Input" rows="4" class="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-brand-500"></textarea>
      </div>

      <div class="flex gap-3">
        <button id="btnB64Encode" class="flex-1 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition">
          ${t('b64_encode_btn')}
        </button>
        <button id="btnB64Decode" class="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition border border-slate-700">
          ${t('b64_decode_btn')}
        </button>
      </div>

      <div>
        <label class="block text-xs font-medium text-slate-300 mb-2">${t('b64_output_label')}</label>
        <textarea id="b64Output" rows="4" readonly class="w-full p-3 bg-slate-950 font-mono text-xs text-emerald-400 border border-slate-800 rounded-xl focus:outline-none"></textarea>
      </div>

      <button id="btnCopyB64" class="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition">
        <i data-lucide="copy" class="w-4 h-4"></i>
        <span>${t('b64_copy_btn')}</span>
      </button>
    </div>
  `;
}

function initBase64Tool() {
  const input = document.getElementById('b64Input');
  const output = document.getElementById('b64Output');

  // UTF-8 safe encode/decode
  document.getElementById('btnB64Encode').addEventListener('click', () => {
    try {
      const utf8Bytes = new TextEncoder().encode(input.value);
      let binary = '';
      for (let i = 0; i < utf8Bytes.length; i++) {
        binary += String.fromCharCode(utf8Bytes[i]);
      }
      output.value = btoa(binary);
    } catch (e) {
      output.value = 'Error: ' + e.message;
    }
  });

  document.getElementById('btnB64Decode').addEventListener('click', () => {
    try {
      const binary = atob(input.value.trim());
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      output.value = new TextDecoder().decode(bytes);
    } catch (e) {
      output.value = 'Invalid Base64 string';
    }
  });

  document.getElementById('btnCopyB64').addEventListener('click', () => {
    copyToClipboard(output.value);
  });
}

// ==========================================
// TOOL 8: COLOR CONVERTER & PICKER
// ==========================================
function getColorPickerHtml() {
  return `
    <div class="space-y-5">
      <div class="flex items-center gap-4 bg-slate-800/70 p-4 rounded-2xl border border-slate-700">
        <input type="color" id="mainColorPicker" value="#6366f1" class="w-14 h-14 rounded-xl border-0 cursor-pointer bg-transparent" />
        <div class="flex-1">
          <label class="block text-xs text-slate-400 mb-1">${t('color_pick_label')}</label>
          <input type="text" id="colorHexInput" value="#6366f1" class="font-mono font-bold text-white bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm uppercase w-32 focus:outline-none" />
        </div>
      </div>

      <!-- Formats List with Copy Buttons -->
      <div class="space-y-3">
        <div class="flex items-center justify-between p-3 bg-slate-950/60 rounded-xl border border-slate-800">
          <div>
            <span class="text-xs text-slate-400 block">${t('color_hex')}</span>
            <span id="dispValHex" class="font-mono font-bold text-sm text-brand-400">#6366F1</span>
          </div>
          <button onclick="copyToClipboard(document.getElementById('dispValHex').textContent)" class="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition">
            <i data-lucide="copy" class="w-4 h-4"></i>
          </button>
        </div>

        <div class="flex items-center justify-between p-3 bg-slate-950/60 rounded-xl border border-slate-800">
          <div>
            <span class="text-xs text-slate-400 block">${t('color_rgb')}</span>
            <span id="dispValRgb" class="font-mono font-bold text-sm text-emerald-400">rgb(99, 102, 241)</span>
          </div>
          <button onclick="copyToClipboard(document.getElementById('dispValRgb').textContent)" class="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition">
            <i data-lucide="copy" class="w-4 h-4"></i>
          </button>
        </div>

        <div class="flex items-center justify-between p-3 bg-slate-950/60 rounded-xl border border-slate-800">
          <div>
            <span class="text-xs text-slate-400 block">${t('color_hsl')}</span>
            <span id="dispValHsl" class="font-mono font-bold text-sm text-purple-400">hsl(239, 84%, 67%)</span>
          </div>
          <button onclick="copyToClipboard(document.getElementById('dispValHsl').textContent)" class="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition">
            <i data-lucide="copy" class="w-4 h-4"></i>
          </button>
        </div>
      </div>

      <!-- Preview Box -->
      <div id="colorPreviewBox" class="p-6 rounded-2xl text-center font-bold text-white transition-colors duration-200" style="background-color: #6366f1;">
        <span class="drop-shadow">${t('color_preview_text')}</span>
      </div>
    </div>
  `;
}

function initColorTool() {
  const picker = document.getElementById('mainColorPicker');
  const hexInput = document.getElementById('colorHexInput');
  const dispHex = document.getElementById('dispValHex');
  const dispRgb = document.getElementById('dispValRgb');
  const dispHsl = document.getElementById('dispValHsl');
  const previewBox = document.getElementById('colorPreviewBox');

  function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const num = parseInt(hex, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  }

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  }

  function updateColor(hex) {
    if (!/^#([0-9A-Fa-f]{3}){1,2}$/.test(hex)) return;
    picker.value = hex;
    hexInput.value = hex.toUpperCase();
    dispHex.textContent = hex.toUpperCase();

    const rgb = hexToRgb(hex);
    dispRgb.textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    dispHsl.textContent = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

    previewBox.style.backgroundColor = hex;
  }

  picker.addEventListener('input', (e) => updateColor(e.target.value));
  hexInput.addEventListener('input', (e) => {
    let val = e.target.value;
    if (!val.startsWith('#')) val = '#' + val;
    updateColor(val);
  });
}

// ==========================================
// TOOL 9: UNIT CONVERTER
// ==========================================
function getUnitConverterHtml() {
  return `
    <div class="space-y-4">
      <div>
        <label class="block text-xs font-medium text-slate-300 mb-2">${t('unit_category')}</label>
        <select id="unitCatSelect" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500">
          <option value="length">${t('unit_cat_length')}</option>
          <option value="area">${t('unit_cat_area')}</option>
          <option value="mass">${t('unit_cat_mass')}</option>
          <option value="weight">${t('unit_cat_weight')}</option>
          <option value="volume">${t('unit_cat_volume')}</option>
          <option value="temp">${t('unit_cat_temp')}</option>
        </select>
      </div>

      <div>
        <label class="block text-xs font-medium text-slate-300 mb-2">${t('unit_input_val')}</label>
        <input type="number" id="unitValInput" value="10" class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-500 font-bold" />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-medium text-slate-300 mb-2">${t('unit_from')}</label>
          <select id="unitFromSelect" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none"></select>
        </div>
        <div>
          <label class="block text-xs font-medium text-slate-300 mb-2">${t('unit_to')}</label>
          <select id="unitToSelect" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none"></select>
        </div>
      </div>

      <div class="p-6 bg-slate-950/70 border border-slate-800 rounded-2xl text-center">
        <span class="text-xs text-slate-400 block mb-1">${t('calc_result')}</span>
        <span id="unitResultDisplay" class="text-2xl font-bold text-emerald-400">0</span>
      </div>
    </div>
  `;
}

function initUnitTool() {
  const catSelect = document.getElementById('unitCatSelect');
  const valInput = document.getElementById('unitValInput');
  const fromSelect = document.getElementById('unitFromSelect');
  const toSelect = document.getElementById('unitToSelect');
  const resDisplay = document.getElementById('unitResultDisplay');

  const unitData = {
    length: {
      units: [
        { id: 'm', name: 'متر (Meters - m)', factor: 1 },
        { id: 'km', name: 'كيلومتر (Kilometers - km)', factor: 1000 },
        { id: 'cm', name: 'سنتيمتر (Centimeters - cm)', factor: 0.01 },
        { id: 'mm', name: 'مليمتر (Millimeters - mm)', factor: 0.001 },
        { id: 'mi', name: 'ميل (Miles - mi)', factor: 1609.34 },
        { id: 'yd', name: 'ياردة (Yards - yd)', factor: 0.9144 },
        { id: 'ft', name: 'قدم (Feet - ft)', factor: 0.3048 },
        { id: 'in', name: 'بوصة (Inches - in)', factor: 0.0254 }
      ]
    },
    area: {
      units: [
        { id: 'm2', name: 'متر مربع (m²)', factor: 1 },
        { id: 'km2', name: 'كيلومتر مربع (km²)', factor: 1000000 },
        { id: 'cm2', name: 'سنتيمتر مربع (cm²)', factor: 0.0001 },
        { id: 'ha', name: 'هكتار (Hectares - ha)', factor: 10000 },
        { id: 'ac', name: 'فدان / أكر (Acres - ac)', factor: 4046.86 },
        { id: 'ft2', name: 'قدم مربع (ft²)', factor: 0.092903 }
      ]
    },
    mass: {
      units: [
        { id: 'kg', name: 'كيلوغرام (Kilograms - kg)', factor: 1 },
        { id: 'g', name: 'غرام (Grams - g)', factor: 0.001 },
        { id: 'mg', name: 'مليغرام (Milligrams - mg)', factor: 0.000001 },
        { id: 't', name: 'طن متري (Metric Tons - t)', factor: 1000 },
        { id: 'lb', name: 'باوند / رطل (Pounds - lb)', factor: 0.453592 },
        { id: 'oz', name: 'أونصة (Ounces - oz)', factor: 0.0283495 }
      ]
    },
    weight: {
      units: [
        { id: 'n', name: 'نيوتن (Newtons - N)', factor: 1 },
        { id: 'kn', name: 'كيلونيوتن (Kilonewtons - kN)', factor: 1000 },
        { id: 'kgf', name: 'كيلوغرام ثقلي (kgf)', factor: 9.80665 },
        { id: 'lbf', name: 'باوند ثقلي (lbf)', factor: 4.44822 },
        { id: 'dyn', name: 'داين (Dyn - dyn)', factor: 0.00001 }
      ]
    },
    volume: {
      units: [
        { id: 'l', name: 'لتر (Liters - L)', factor: 1 },
        { id: 'ml', name: 'مليلتر (Milliliters - mL)', factor: 0.001 },
        { id: 'm3', name: 'متر مكعب (Cubic Meters - m³)', factor: 1000 },
        { id: 'gal', name: 'جالون أمريكي (US Gallons - gal)', factor: 3.78541 },
        { id: 'cup', name: 'كوب (Cups)', factor: 0.24 }
      ]
    },
    temp: {
      units: [
        { id: 'c', name: 'مئوي (°C)' },
        { id: 'f', name: 'فهرنهايت (°F)' },
        { id: 'k', name: 'كلفن (K)' }
      ]
    }
  };

  function populateUnitDropdowns() {
    const cat = catSelect.value;
    const units = unitData[cat].units;
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';

    units.forEach((u, i) => {
      fromSelect.add(new Option(u.name, u.id, false, i === 0));
      toSelect.add(new Option(u.name, u.id, false, i === 1));
    });

    calculateUnit();
  }

  function calculateUnit() {
    const cat = catSelect.value;
    const val = parseFloat(valInput.value) || 0;
    const fromId = fromSelect.value;
    const toId = toSelect.value;

    if (cat === 'temp') {
      let celsius = val;
      if (fromId === 'f') celsius = (val - 32) * (5 / 9);
      if (fromId === 'k') celsius = val - 273.15;

      let result = celsius;
      if (toId === 'f') result = (celsius * 9 / 5) + 32;
      if (toId === 'k') result = celsius + 273.15;

      resDisplay.textContent = result.toFixed(2);
    } else {
      const units = unitData[cat].units;
      const fromObj = units.find(u => u.id === fromId);
      const toObj = units.find(u => u.id === toId);

      const baseVal = val * fromObj.factor;
      const result = baseVal / toObj.factor;
      resDisplay.textContent = result.toLocaleString(undefined, { maximumFractionDigits: 4 });
    }
  }

  catSelect.addEventListener('change', populateUnitDropdowns);
  valInput.addEventListener('input', calculateUnit);
  fromSelect.addEventListener('change', calculateUnit);
  toSelect.addEventListener('change', calculateUnit);

  populateUnitDropdowns();
}

// ==========================================
// TOOL 10: PDF MERGER (100% CLIENT-SIDE)
// ==========================================
function getPdfMergeHtml() {
  return `
    <div class="space-y-5">
      <div id="pdfDropZone" class="border-2 border-dashed border-slate-700 hover:border-red-500 rounded-2xl p-8 text-center cursor-pointer transition-colors bg-slate-800/40">
        <input type="file" id="pdfFileInput" accept="application/pdf" multiple class="hidden" />
        <i data-lucide="file-stack" class="w-12 h-12 mx-auto text-red-400 mb-3"></i>
        <p class="text-sm font-medium text-slate-200 mb-1">${t('pdf_drop_text')}</p>
        <p class="text-xs text-slate-400">PDF Document Files</p>
      </div>

      <div id="pdfFileListWrapper" class="hidden space-y-3">
        <div class="flex items-center justify-between">
          <span id="pdfFileCountText" class="text-xs font-semibold text-slate-300"></span>
          <button id="pdfClearBtn" class="text-xs text-rose-400 hover:text-rose-300 font-medium transition">
            ${t('pdf_btn_clear')}
          </button>
        </div>

        <div id="pdfFilesContainer" class="max-h-52 overflow-y-auto space-y-2 pr-1"></div>

        <button id="pdfMergeActionBtn" class="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-red-600/30">
          <i data-lucide="combine" class="w-5 h-5"></i>
          <span id="pdfMergeBtnLabel">${t('pdf_btn_merge')}</span>
        </button>
      </div>
    </div>
  `;
}

function initPdfMergeTool() {
  const dropZone = document.getElementById('pdfDropZone');
  const fileInput = document.getElementById('pdfFileInput');
  const listWrapper = document.getElementById('pdfFileListWrapper');
  const filesContainer = document.getElementById('pdfFilesContainer');
  const countText = document.getElementById('pdfFileCountText');
  const clearBtn = document.getElementById('pdfClearBtn');
  const mergeBtn = document.getElementById('pdfMergeActionBtn');
  const mergeBtnLabel = document.getElementById('pdfMergeBtnLabel');

  let pdfFiles = [];

  dropZone.addEventListener('click', () => fileInput.click());

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('border-red-500');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('border-red-500');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('border-red-500');
    if (e.dataTransfer.files) {
      addFiles(Array.from(e.dataTransfer.files));
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files) {
      addFiles(Array.from(e.target.files));
    }
  });

  function addFiles(newFiles) {
    const validPdfs = newFiles.filter(f => f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf'));
    pdfFiles = [...pdfFiles, ...validPdfs];
    renderFileList();
  }

  function renderFileList() {
    if (pdfFiles.length === 0) {
      listWrapper.classList.add('hidden');
      return;
    }

    listWrapper.classList.remove('hidden');
    countText.textContent = t('pdf_files_count', { count: pdfFiles.length });
    filesContainer.innerHTML = '';

    pdfFiles.forEach((file, index) => {
      const item = document.createElement('div');
      item.className = 'flex items-center justify-between p-3 bg-slate-950/70 border border-slate-800 rounded-xl text-xs text-slate-200';
      item.innerHTML = `
        <div class="flex items-center gap-2.5 overflow-hidden">
          <span class="w-5 h-5 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center font-bold text-[10px] shrink-0">${index + 1}</span>
          <span class="truncate font-medium">${file.name}</span>
          <span class="text-slate-500 text-[10px] shrink-0">(${formatFileSize(file.size)})</span>
        </div>
        <button class="remove-pdf-btn text-slate-400 hover:text-rose-400 p-1 transition shrink-0" data-index="${index}">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      `;
      filesContainer.appendChild(item);
    });

    filesContainer.querySelectorAll('.remove-pdf-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        pdfFiles.splice(idx, 1);
        renderFileList();
      });
    });

    lucide.createIcons();
  }

  clearBtn.addEventListener('click', () => {
    pdfFiles = [];
    renderFileList();
  });

  mergeBtn.addEventListener('click', async () => {
    if (pdfFiles.length < 2) {
      alert(currentLang === 'ar' ? 'يرجى اختيار ملفين PDF على الأقل للدمج' : 'Please select at least 2 PDF files to merge');
      return;
    }

    try {
      mergeBtn.disabled = true;
      mergeBtnLabel.textContent = t('pdf_merging');

      const mergedPdf = await PDFLib.PDFDocument.create();

      for (const file of pdfFiles) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'toolverse-merged.pdf';
      a.click();

      showToast(t('pdf_success'));
    } catch (err) {
      console.error('PDF Merge Error:', err);
      alert('Error merging PDFs: ' + err.message);
    } finally {
      mergeBtn.disabled = false;
      mergeBtnLabel.textContent = t('pdf_btn_merge');
    }
  });

  function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }
}

// ==========================================
// TOOL 11: LOREM IPSUM & DUMMY TEXT GENERATOR
// ==========================================
function getLoremGenHtml() {
  return `
    <div class="space-y-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-medium text-slate-300 mb-2">${t('lorem_lang_label')}</label>
          <select id="loremLangSelect" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500">
            <option value="ar">${t('lorem_lang_ar')}</option>
            <option value="latin">${t('lorem_lang_latin')}</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-medium text-slate-300 mb-2">${t('lorem_type_label')}</label>
          <select id="loremTypeSelect" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500">
            <option value="paragraphs">${t('lorem_type_p')}</option>
            <option value="sentences">${t('lorem_type_s')}</option>
            <option value="words">${t('lorem_type_w')}</option>
          </select>
        </div>
      </div>

      <div>
        <div class="flex justify-between text-xs text-slate-300 mb-2">
          <span>${t('lorem_count_label')}</span>
          <span id="loremCountVal" class="font-bold text-brand-400">3</span>
        </div>
        <input type="range" id="loremCountSlider" min="1" max="15" value="3" class="w-full accent-brand-500 cursor-pointer" />
      </div>

      <div class="relative">
        <textarea id="loremResultArea" rows="7" readonly
                  class="w-full p-4 bg-slate-950 font-normal text-sm text-slate-200 border border-slate-800 rounded-2xl focus:outline-none leading-relaxed"></textarea>
      </div>

      <div class="flex gap-3">
        <button id="loremRegenBtn" class="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition flex items-center justify-center gap-2 border border-slate-700">
          <i data-lucide="refresh-cw" class="w-4 h-4"></i>
          <span>${t('lorem_btn_gen')}</span>
        </button>
        <button id="loremCopyBtn" class="flex-1 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-brand-600/30">
          <i data-lucide="copy" class="w-4 h-4"></i>
          <span>${t('lorem_btn_copy')}</span>
        </button>
      </div>
    </div>
  `;
}

function initLoremGenTool() {
  const langSelect = document.getElementById('loremLangSelect');
  const typeSelect = document.getElementById('loremTypeSelect');
  const slider = document.getElementById('loremCountSlider');
  const sliderVal = document.getElementById('loremCountVal');
  const output = document.getElementById('loremResultArea');
  const regenBtn = document.getElementById('loremRegenBtn');
  const copyBtn = document.getElementById('loremCopyBtn');

  const arabicParagraphs = [
    "هذا نص تجريبي يتم استخدامه لتوضيح التصميم والشكل النهائي للصفحة أو المطبوعة قبل إضافة المحتوى الفعلي. يتميز هذا النص بتوزيع طبيعي للحروف والكلمات ليعطي انطباعاً واقعياً عن كيفية ظهور النصوص دون إشغال القارئ بالمعنى الحقيقي للكلمات.",
    "يمكن استبدال هذا النص في أي وقت بالنص الحقيقي المخصص للمشروع، حيث يساعد المصممين والمطورين على ضبط المسافات وتنسيق الفقرات وتجربة الخطوط المختلفة وتناسق الألوان في واجهة المستخدم بكل سلاسة واحترافية.",
    "إن الغاية الأساسية من النص البديل هي إعطاء تصور حقيقي لشكل الخطوط وتناسب المسافات بين الأسطر والهوامش في التصاميم الرقمية والمطبوعات الحديثة دون تشتيت الانتباه نحو قراءة المحتوى الفعلي.",
    "تم تصميم هذا النص بعناية فائقة ليعكس التراكيب اللغوية المألوفة وطول الكلمات المعتاد في اللغة العربية، مما يتيح لك رؤية الهيكل الطباعي الكامل للموقع أو التطبيق بصورة دقيقة وجذابة.",
    "تعتبر النصوص المؤقتة أداة ضرورية لكل مصمم ومطور واجهات لتسهيل عملية المراجعة الأولية واختبار استجابة العناصر على مختلف أحجام الشاشات الذكية والأجهزة المحمولة."
  ];

  const latinParagraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.",
    "Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Quisque id mi. Ut tincidunt tincidunt erat.",
    "Donec vitae orci sed dolor rutrum auctor. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris."
  ];

  function generateText() {
    const lang = langSelect.value;
    const type = typeSelect.value;
    const count = parseInt(slider.value, 10);
    const pool = lang === 'ar' ? arabicParagraphs : latinParagraphs;

    if (type === 'paragraphs') {
      let result = [];
      for (let i = 0; i < count; i++) {
        result.push(pool[i % pool.length]);
      }
      output.value = result.join('\n\n');
    } else if (type === 'sentences') {
      const allSentences = pool.join(' ').split(/[.،]/).map(s => s.trim()).filter(s => s.length > 5);
      let result = [];
      for (let i = 0; i < count; i++) {
        result.push(allSentences[i % allSentences.length] + (lang === 'ar' ? '،' : '.'));
      }
      output.value = result.join(' ');
    } else if (type === 'words') {
      const allWords = pool.join(' ').split(/\s+/).filter(w => w.length > 1);
      let result = [];
      for (let i = 0; i < count * 5; i++) {
        result.push(allWords[i % allWords.length]);
      }
      output.value = result.join(' ');
    }
  }

  slider.addEventListener('input', (e) => {
    sliderVal.textContent = e.target.value;
    generateText();
  });

  langSelect.addEventListener('change', generateText);
  typeSelect.addEventListener('change', generateText);
  regenBtn.addEventListener('click', generateText);
  copyBtn.addEventListener('click', () => copyToClipboard(output.value));

  generateText();
}

// ==========================================
// TOOL 12: INTERACTIVE POCKET CALCULATOR
// ==========================================
function getCalculatorHtml() {
  return `
    <div class="space-y-3 max-w-xs sm:max-w-sm mx-auto">
      <!-- Screen Display (Compact & Crisp) -->
      <div class="bg-slate-950 px-4 py-3 rounded-2xl border border-slate-800 text-end shadow-inner">
        <div id="calcHistoryDisplay" class="text-xs font-mono text-slate-400 h-4 overflow-hidden"></div>
        <div id="calcCurrentDisplay" class="text-3xl font-black font-mono text-white tracking-wider truncate">0</div>
      </div>

      <!-- Keypad Grid (Standard, Balanced Proportions) -->
      <div class="grid grid-cols-4 gap-2 sm:gap-2.5">
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-rose-400 font-bold text-base transition border border-slate-700/60 shadow" data-action="clear">C</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 font-bold text-base transition border border-slate-700/60 shadow" data-action="backspace">⌫</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-brand-400 font-bold text-base transition border border-slate-700/60 shadow" data-action="percent">%</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-brand-600/20 hover:bg-brand-600/30 active:scale-95 text-brand-400 font-black text-2xl transition border border-brand-500/25 shadow" data-action="op" data-val="/">÷</button>

        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-95 text-white font-bold text-xl transition border border-slate-700/40 shadow" data-action="num" data-val="7">7</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-95 text-white font-bold text-xl transition border border-slate-700/40 shadow" data-action="num" data-val="8">8</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-95 text-white font-bold text-xl transition border border-slate-700/40 shadow" data-action="num" data-val="9">9</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-brand-600/20 hover:bg-brand-600/30 active:scale-95 text-brand-400 font-black text-2xl transition border border-brand-500/25 shadow" data-action="op" data-val="*">×</button>

        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-95 text-white font-bold text-xl transition border border-slate-700/40 shadow" data-action="num" data-val="4">4</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-95 text-white font-bold text-xl transition border border-slate-700/40 shadow" data-action="num" data-val="5">5</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-95 text-white font-bold text-xl transition border border-slate-700/40 shadow" data-action="num" data-val="6">6</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-brand-600/20 hover:bg-brand-600/30 active:scale-95 text-brand-400 font-black text-2xl transition border border-brand-500/25 shadow" data-action="op" data-val="-">−</button>

        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-95 text-white font-bold text-xl transition border border-slate-700/40 shadow" data-action="num" data-val="1">1</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-95 text-white font-bold text-xl transition border border-slate-700/40 shadow" data-action="num" data-val="2">2</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-95 text-white font-bold text-xl transition border border-slate-700/40 shadow" data-action="num" data-val="3">3</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-brand-600/20 hover:bg-brand-600/30 active:scale-95 text-brand-400 font-black text-2xl transition border border-brand-500/25 shadow" data-action="op" data-val="+">+</button>

        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 font-bold text-base transition border border-slate-700/60 shadow" data-action="negate">±</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800/90 hover:bg-slate-700 active:scale-95 text-white font-bold text-xl transition border border-slate-700/40 shadow" data-action="num" data-val="0">0</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-black text-xl transition border border-slate-700/60 shadow" data-action="num" data-val=".">.</button>
        <button class="calc-key h-11 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 active:scale-95 text-white font-black text-2xl transition shadow-md shadow-brand-600/30 border border-brand-400/25" data-action="equals">=</button>
      </div>
    </div>
  `;
}

function initCalculatorTool() {
  const currentDisp = document.getElementById('calcCurrentDisplay');
  const historyDisp = document.getElementById('calcHistoryDisplay');
  
  let currentVal = '0';
  let prevVal = null;
  let op = null;
  let resetOnNextNum = false;

  function updateDisplay() {
    currentDisp.textContent = currentVal;
    if (prevVal !== null && op) {
      historyDisp.textContent = `${prevVal} ${op}`;
    } else {
      historyDisp.textContent = '';
    }
  }

  function handleInput(action, val) {
    if (action === 'num') {
      if (val === '.') {
        if (resetOnNextNum) {
          currentVal = '0.';
          resetOnNextNum = false;
        } else if (!currentVal.includes('.')) {
          currentVal += '.';
        }
      } else {
        if (currentVal === '0' || resetOnNextNum) {
          currentVal = val;
          resetOnNextNum = false;
        } else {
          currentVal += val;
        }
      }
    } else if (action === 'clear') {
      currentVal = '0';
      prevVal = null;
      op = null;
      resetOnNextNum = false;
    } else if (action === 'backspace') {
      if (currentVal.length > 1) {
        currentVal = currentVal.slice(0, -1);
      } else {
        currentVal = '0';
      }
    } else if (action === 'negate') {
      currentVal = (parseFloat(currentVal) * -1).toString();
    } else if (action === 'percent') {
      currentVal = (parseFloat(currentVal) / 100).toString();
    } else if (action === 'op') {
      if (op && prevVal !== null && !resetOnNextNum) {
        calculateResult();
      }
      prevVal = currentVal;
      op = val;
      resetOnNextNum = true;
    } else if (action === 'equals') {
      if (op && prevVal !== null) {
        calculateResult();
        op = null;
        prevVal = null;
        resetOnNextNum = true;
      }
    }
    updateDisplay();
  }

  function calculateResult() {
    const a = parseFloat(prevVal);
    const b = parseFloat(currentVal);
    let res = 0;
    if (op === '+') res = a + b;
    if (op === '-') res = a - b;
    if (op === '*') res = a * b;
    if (op === '/') res = b !== 0 ? a / b : 'Error';

    currentVal = res.toString();
  }

  document.querySelectorAll('.calc-key').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-action');
      const val = btn.getAttribute('data-val');
      handleInput(action, val);
    });
  });

  updateDisplay();
}

// ==========================================
// TOOL 13: TEXT CASE CONVERTER & CLEANER
// ==========================================
function getCaseConverterHtml() {
  return `
    <div class="space-y-4">
      <div>
        <label class="block text-xs font-medium text-slate-300 mb-2">${t('case_input_label')}</label>
        <textarea id="caseConverterInput" rows="5"
                  class="w-full p-4 bg-slate-800/80 border border-slate-700 rounded-2xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-500 text-sm leading-relaxed"
                  placeholder="Type your text here... / اكتب نصك هنا..."></textarea>
      </div>

      <!-- Action Buttons Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button id="caseBtnUpper" class="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition border border-slate-700/60">
          UPPERCASE
        </button>
        <button id="caseBtnLower" class="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition border border-slate-700/60">
          lowercase
        </button>
        <button id="caseBtnTitle" class="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition border border-slate-700/60">
          Title Case
        </button>
        <button id="caseBtnSentence" class="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition border border-slate-700/60">
          Sentence case
        </button>
        <button id="caseBtnCamel" class="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition border border-slate-700/60">
          camelCase
        </button>
        <button id="caseBtnSnake" class="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition border border-slate-700/60">
          snake_case
        </button>
        <button id="caseBtnKebab" class="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition border border-slate-700/60">
          kebab-case
        </button>
        <button id="caseBtnTashkeel" class="p-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-semibold transition border border-amber-500/20 col-span-2 sm:col-span-1">
          إزالة التشكيل العربي
        </button>
      </div>

      <button id="caseCopyBtn" class="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-brand-600/30">
        <i data-lucide="copy" class="w-4 h-4"></i>
        <span>${t('case_btn_copy')}</span>
      </button>
    </div>
  `;
}

function initCaseConverterTool() {
  const input = document.getElementById('caseConverterInput');
  const copyBtn = document.getElementById('caseCopyBtn');

  document.getElementById('caseBtnUpper').addEventListener('click', () => {
    input.value = input.value.toUpperCase();
  });

  document.getElementById('caseBtnLower').addEventListener('click', () => {
    input.value = input.value.toLowerCase();
  });

  document.getElementById('caseBtnTitle').addEventListener('click', () => {
    input.value = input.value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  });

  document.getElementById('caseBtnSentence').addEventListener('click', () => {
    input.value = input.value.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
  });

  document.getElementById('caseBtnCamel').addEventListener('click', () => {
    input.value = input.value
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase())
      .replace(/\s+/g, '');
  });

  document.getElementById('caseBtnSnake').addEventListener('click', () => {
    input.value = input.value.trim().toLowerCase().replace(/\s+/g, '_');
  });

  document.getElementById('caseBtnKebab').addEventListener('click', () => {
    input.value = input.value.trim().toLowerCase().replace(/\s+/g, '-');
  });

  document.getElementById('caseBtnTashkeel').addEventListener('click', () => {
    // Remove Arabic Tashkeel (harakat) and Tatweel/Kashida
    input.value = input.value.replace(/[\u064B-\u065F\u0670\u0640]/g, '');
  });

  copyBtn.addEventListener('click', () => copyToClipboard(input.value));
}

// ==========================================
// TOOL 14: IMAGES TO PDF (100% CLIENT-SIDE)
// ==========================================
function getImgToPdfHtml() {
  return `
    <div class="space-y-4">
      <div id="imgPdfDropZone" class="border-2 border-dashed border-slate-700 hover:border-orange-500 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-slate-800/40">
        <input type="file" id="imgPdfFileInput" accept="image/*" multiple class="hidden" />
        <i data-lucide="images" class="w-10 h-10 mx-auto text-orange-400 mb-2"></i>
        <p class="text-xs sm:text-sm font-medium text-slate-200 mb-1">${t('imgpdf_drop_text')}</p>
        <p class="text-[11px] text-slate-400">PNG, JPG, WebP, GIF</p>
      </div>

      <div id="imgPdfControlsWrapper" class="hidden space-y-3">
        <div class="flex items-center justify-between text-xs">
          <span id="imgPdfCountText" class="font-semibold text-slate-300"></span>
          <button id="imgPdfClearBtn" class="text-rose-400 hover:text-rose-300 font-medium transition">
            ${t('pdf_btn_clear')}
          </button>
        </div>

        <!-- Thumbnails Container -->
        <div id="imgPdfThumbsContainer" class="max-h-36 overflow-y-auto grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 bg-slate-950/70 border border-slate-800 rounded-xl"></div>

        <!-- Page Format Option -->
        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1.5">${t('imgpdf_fit_label')}</label>
          <select id="imgPdfFitSelect" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-500">
            <option value="auto">${t('imgpdf_fit_auto')}</option>
            <option value="a4">${t('imgpdf_fit_a4')}</option>
          </select>
        </div>

        <button id="imgPdfActionBtn" class="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-orange-600/30">
          <i data-lucide="file-down" class="w-4 h-4"></i>
          <span id="imgPdfActionLabel">${t('imgpdf_btn_convert')}</span>
        </button>
      </div>
    </div>
  `;
}

function initImgToPdfTool() {
  const dropZone = document.getElementById('imgPdfDropZone');
  const fileInput = document.getElementById('imgPdfFileInput');
  const wrapper = document.getElementById('imgPdfControlsWrapper');
  const countText = document.getElementById('imgPdfCountText');
  const thumbsContainer = document.getElementById('imgPdfThumbsContainer');
  const clearBtn = document.getElementById('imgPdfClearBtn');
  const fitSelect = document.getElementById('imgPdfFitSelect');
  const actionBtn = document.getElementById('imgPdfActionBtn');
  const actionLabel = document.getElementById('imgPdfActionLabel');

  let selectedImages = [];

  dropZone.addEventListener('click', () => fileInput.click());

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('border-orange-500');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('border-orange-500');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('border-orange-500');
    if (e.dataTransfer.files) {
      addImages(Array.from(e.dataTransfer.files));
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files) {
      addImages(Array.from(e.target.files));
    }
  });

  function addImages(files) {
    const valid = files.filter(f => f.type.startsWith('image/'));
    selectedImages = [...selectedImages, ...valid];
    renderThumbnails();
  }

  function renderThumbnails() {
    if (selectedImages.length === 0) {
      wrapper.classList.add('hidden');
      return;
    }

    wrapper.classList.remove('hidden');
    countText.textContent = t('imgpdf_files_count', { count: selectedImages.length });
    thumbsContainer.innerHTML = '';

    selectedImages.forEach((file, index) => {
      const card = document.createElement('div');
      card.className = 'relative group aspect-square rounded-lg overflow-hidden border border-slate-700 bg-slate-900 flex items-center justify-center';
      
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.className = 'w-full h-full object-cover';
      
      const removeBtn = document.createElement('button');
      removeBtn.className = 'absolute top-1 end-1 w-5 h-5 rounded-full bg-rose-600/90 text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition shadow';
      removeBtn.innerHTML = '×';
      removeBtn.onclick = (e) => {
        e.stopPropagation();
        selectedImages.splice(index, 1);
        renderThumbnails();
      };

      card.appendChild(img);
      card.appendChild(removeBtn);
      thumbsContainer.appendChild(card);
    });
  }

  clearBtn.addEventListener('click', () => {
    selectedImages = [];
    renderThumbnails();
  });

  actionBtn.addEventListener('click', async () => {
    if (selectedImages.length === 0) return;

    try {
      actionBtn.disabled = true;
      actionLabel.textContent = t('imgpdf_converting');

      const pdfDoc = await PDFLib.PDFDocument.create();
      const fitMode = fitSelect.value; // 'auto' or 'a4'

      for (const file of selectedImages) {
        // Render image to canvas to normalize format to high quality JPEG
        const imgBitmap = await createImageBitmap(file);
        const canvas = document.createElement('canvas');
        canvas.width = imgBitmap.width;
        canvas.height = imgBitmap.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(imgBitmap, 0, 0);

        const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.92);
        const jpegBytes = await fetch(jpegDataUrl).then(res => res.arrayBuffer());
        const embeddedImg = await pdfDoc.embedJpg(jpegBytes);

        if (fitMode === 'a4') {
          // Standard A4: 595.28 x 841.89 points
          const a4Width = 595.28;
          const a4Height = 841.89;
          const page = pdfDoc.addPage([a4Width, a4Height]);
          
          const margin = 20;
          const maxWidth = a4Width - (margin * 2);
          const maxHeight = a4Height - (margin * 2);
          
          const scale = Math.min(maxWidth / embeddedImg.width, maxHeight / embeddedImg.height);
          const drawWidth = embeddedImg.width * scale;
          const drawHeight = embeddedImg.height * scale;
          
          const posX = (a4Width - drawWidth) / 2;
          const posY = (a4Height - drawHeight) / 2;

          page.drawImage(embeddedImg, {
            x: posX,
            y: posY,
            width: drawWidth,
            height: drawHeight
          });
        } else {
          // Fit original image aspect and dimensions
          const page = pdfDoc.addPage([embeddedImg.width, embeddedImg.height]);
          page.drawImage(embeddedImg, {
            x: 0,
            y: 0,
            width: embeddedImg.width,
            height: embeddedImg.height
          });
        }
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'toolverse-images.pdf';
      a.click();

      showToast(t('imgpdf_success'));
    } catch (err) {
      console.error('Image to PDF error:', err);
      alert('Error creating PDF: ' + err.message);
    } finally {
      actionBtn.disabled = false;
      actionLabel.textContent = t('imgpdf_btn_convert');
    }
  });
}

// ==========================================
// TOOL 15: GREEN SCREEN & CHROMA KEY REMOVER (100% CLIENT-SIDE)
// ==========================================
function getChromaKeyHtml() {
  return `
    <div class="space-y-3.5">
      <!-- File drop zone -->
      <div id="chromaDropZone" class="border-2 border-dashed border-slate-700 hover:border-emerald-500 rounded-2xl p-5 text-center cursor-pointer transition-colors bg-slate-800/40">
        <input type="file" id="chromaFileInput" accept="image/*" class="hidden" />
        <i data-lucide="wand-2" class="w-8 h-8 mx-auto text-emerald-400 mb-2"></i>
        <p class="text-xs sm:text-sm font-medium text-slate-200 mb-0.5">${t('chroma_drop_text')}</p>
        <p class="text-[11px] text-slate-400">PNG, JPG, WebP</p>
      </div>

      <!-- Controls & Preview (Hidden until image is selected) -->
      <div id="chromaControlsWrapper" class="hidden space-y-3">
        
        <!-- Controls row -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <!-- Target Color (Key Color) -->
          <div>
            <label class="block text-[11px] font-medium text-slate-300 mb-1">${t('chroma_target_color')}</label>
            <div class="flex items-center gap-2 bg-slate-800 p-1.5 px-2.5 rounded-lg border border-slate-700">
              <input type="color" id="chromaKeyColor" value="#00FF00" class="w-6 h-6 rounded cursor-pointer bg-transparent border-0" />
              <span id="chromaKeyColorVal" class="text-xs font-mono text-slate-200">#00FF00 (Green)</span>
            </div>
          </div>

          <!-- Sensitivity (Tolerance) Slider -->
          <div>
            <div class="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>${t('chroma_tolerance')}</span>
              <span id="chromaTolVal" class="font-bold text-emerald-400">65</span>
            </div>
            <input type="range" id="chromaTolSlider" min="15" max="150" value="65" class="w-full accent-emerald-500 cursor-pointer" />
          </div>

          <!-- Mode Selector: Transparent vs Replace Color -->
          <div>
            <label class="block text-[11px] font-medium text-slate-300 mb-1">${t('chroma_mode_label')}</label>
            <select id="chromaModeSelect" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none">
              <option value="transparent">${t('chroma_mode_trans')}</option>
              <option value="color">${t('chroma_mode_color')}</option>
            </select>
          </div>

          <!-- Replacement Color (Enabled when mode is color) -->
          <div id="chromaNewColorContainer" class="hidden">
            <label class="block text-[11px] font-medium text-slate-300 mb-1">${t('chroma_new_color')}</label>
            <div class="flex items-center gap-2 bg-slate-800 p-1.5 px-2.5 rounded-lg border border-slate-700">
              <input type="color" id="chromaNewColor" value="#1e293b" class="w-6 h-6 rounded cursor-pointer bg-transparent border-0" />
              <span id="chromaNewColorVal" class="text-xs font-mono text-slate-200">#1E293B</span>
            </div>
          </div>
        </div>

        <!-- Canvas Preview Area with Checkered Pattern for Transparency -->
        <div class="flex justify-center p-3 bg-slate-950/80 rounded-2xl border border-slate-800 overflow-hidden" 
             style="background-image: repeating-conic-gradient(#1e293b 0% 25%, #0f172a 0% 50%); background-size: 16px 16px;">
          <canvas id="chromaPreviewCanvas" class="max-h-48 max-w-full rounded-lg shadow-lg object-contain"></canvas>
        </div>

        <!-- Download Button -->
        <button id="chromaDownloadBtn" class="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/30">
          <i data-lucide="download" class="w-4 h-4"></i>
          <span>${t('chroma_download_btn')}</span>
        </button>
      </div>
    </div>
  `;
}

function initChromaKeyTool() {
  const dropZone = document.getElementById('chromaDropZone');
  const fileInput = document.getElementById('chromaFileInput');
  const wrapper = document.getElementById('chromaControlsWrapper');
  const keyColorInput = document.getElementById('chromaKeyColor');
  const keyColorVal = document.getElementById('chromaKeyColorVal');
  const tolSlider = document.getElementById('chromaTolSlider');
  const tolVal = document.getElementById('chromaTolVal');
  const modeSelect = document.getElementById('chromaModeSelect');
  const newColorContainer = document.getElementById('chromaNewColorContainer');
  const newColorInput = document.getElementById('chromaNewColor');
  const newColorVal = document.getElementById('chromaNewColorVal');
  const canvas = document.getElementById('chromaPreviewCanvas');
  const ctx = canvas.getContext('2d');
  const downloadBtn = document.getElementById('chromaDownloadBtn');

  let rawImage = null;

  dropZone.addEventListener('click', () => fileInput.click());

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('border-emerald-500');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('border-emerald-500');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('border-emerald-500');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      loadImage(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      loadImage(e.target.files[0]);
    }
  });

  function loadImage(file) {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        rawImage = img;
        wrapper.classList.remove('hidden');
        processChroma();
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const num = parseInt(hex, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  }

  function processChroma() {
    if (!rawImage) return;

    // Set canvas dimensions (scale down for max performance if massive)
    const maxDim = 1200;
    let w = rawImage.width;
    let h = rawImage.height;
    if (w > maxDim || h > maxDim) {
      if (w > h) {
        h = Math.round((h * maxDim) / w);
        w = maxDim;
      } else {
        w = Math.round((w * maxDim) / h);
        h = maxDim;
      }
    }

    canvas.width = w;
    canvas.height = h;

    // Draw original image
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(rawImage, 0, 0, w, h);

    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    const target = hexToRgb(keyColorInput.value);
    const tolerance = parseInt(tolSlider.value, 10);
    const mode = modeSelect.value;
    const repColor = hexToRgb(newColorInput.value);

    // Fast Color Distance algorithm
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const dr = r - target.r;
      const dg = g - target.g;
      const db = b - target.b;
      const dist = Math.sqrt(dr * dr + dg * dg + db * db);

      if (dist < tolerance) {
        if (mode === 'transparent') {
          // Make pixel transparent
          data[i + 3] = 0;
        } else {
          // Replace with new color
          data[i] = repColor.r;
          data[i + 1] = repColor.g;
          data[i + 2] = repColor.b;
          data[i + 3] = 255;
        }
      } else if (dist < tolerance + 15) {
        // Soft edge antialiasing
        const ratio = (dist - tolerance) / 15;
        if (mode === 'transparent') {
          data[i + 3] = Math.round(data[i + 3] * ratio);
        } else {
          data[i] = Math.round(repColor.r * (1 - ratio) + r * ratio);
          data[i + 1] = Math.round(repColor.g * (1 - ratio) + g * ratio);
          data[i + 2] = Math.round(repColor.b * (1 - ratio) + b * ratio);
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }

  keyColorInput.addEventListener('input', (e) => {
    keyColorVal.textContent = e.target.value.toUpperCase();
    processChroma();
  });

  tolSlider.addEventListener('input', (e) => {
    tolVal.textContent = e.target.value;
    processChroma();
  });

  modeSelect.addEventListener('change', () => {
    if (modeSelect.value === 'color') {
      newColorContainer.classList.remove('hidden');
    } else {
      newColorContainer.classList.add('hidden');
    }
    processChroma();
  });

  newColorInput.addEventListener('input', (e) => {
    newColorVal.textContent = e.target.value.toUpperCase();
    processChroma();
  });

  downloadBtn.addEventListener('click', () => {
    if (!rawImage) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'toolverse-chroma-removed.png';
    a.click();
  });
}

// Kickstart on DOM Ready
document.addEventListener('DOMContentLoaded', initApp);


