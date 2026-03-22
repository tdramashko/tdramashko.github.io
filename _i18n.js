(function () {
  'use strict';

  var T = {
    // Nav
    'Status: System Online': { cs: 'Stav: Syst\u00e9m Online', uk: '\u0421\u0442\u0430\u0442\u0443\u0441 \u0421\u0438\u0441\u0442\u0435\u043c\u0438: \u041e\u043d\u043b\u0430\u0439\u043d' },
    'Home': { cs: 'Dom\u016f', uk: '\u0413\u043e\u043b\u043e\u0432\u043d\u0430' },
    'Services': { cs: 'Slu\u017eby', uk: '\u041f\u043e\u0441\u043b\u0443\u0433\u0438' },
    'Experience': { cs: 'Zku\u0161enosti', uk: '\u0414\u043e\u0441\u0432\u0456\u0434' },
    'Skills': { cs: 'Dovednosti', uk: '\u041d\u0430\u0432\u0438\u0447\u043a\u0438' },
    'Contact': { cs: 'Kontakt', uk: '\u041a\u043e\u043d\u0442\u0430\u043a\u0442' },
    'Work With Me': { cs: 'Spolupracujme', uk: '\u041f\u0440\u0430\u0446\u044e\u0439\u0442\u0435 \u0437\u0456 \u041c\u043d\u043e\u044e' },
    // Hero
    'Available \u00b7 Brno, Czech Republic': { cs: 'Dostupn\u00e1 \u00b7 Brno, \u010cesk\u00e1 republika', uk: '\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u00b7 \u0411\u0440\u043d\u043e, \u0427\u0435\u0441\u044c\u043a\u0430 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0456\u043a\u0430' },
    'Test Automation Engineer': { cs: 'Inžen\u00fdrka pro Testovac\u00ed Automatizaci', uk: '\u0406\u043d\u0436\u0435\u043d\u0435\u0440 \u0437 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u0457 \u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f' },
    'Software quality specialist with expertise in': { cs: 'Specialistka na kvalitu softwaru se zam\u011b\u0159en\u00edm na', uk: '\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u0456\u0441\u0442 \u0456\u0437 \u044f\u043a\u043e\u0441\u0442\u0456 \u041f\u0417 \u0437 \u0434\u043e\u0441\u0432\u0456\u0434\u043e\u043c \u0443' },
    'automation frameworks': { cs: 'automatiza\u010dn\u00ed frameworky', uk: '\u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0430\u0445 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u0457' },
    'and API validation. Oracle NetSuite \u00b7 AT&T \u00b7': { cs: 'a validaci API. Oracle NetSuite \u00b7 AT&T \u00b7', uk: '\u0442\u0430 \u0432\u0430\u043b\u0456\u0434\u0430\u0446\u0456\u0457 API. Oracle NetSuite \u00b7 AT&T \u00b7' },
    '15 years in education.': { cs: '15 let ve vzd\u011bl\u00e1v\u00e1n\u00ed.', uk: '15 \u0440\u043e\u043a\u0456\u0432 \u0443 \u043e\u0441\u0432\u0456\u0442\u0456.' },
    // straight apostrophe U+0027 (from &#x27; in HTML source)
    'Quality is not a phase \u2014 it\'s a mindset.': { cs: 'Kvalita nen\u00ed f\u00e1ze \u2014 je to zp\u016fsob my\u0161len\u00ed.', uk: '\u042f\u043a\u0456\u0441\u0442\u044c \u2014 \u0446\u0435 \u043d\u0435 \u0444\u0430\u0437\u0430, \u0446\u0435 \u043e\u0431\u0440\u0430\u0437 \u043c\u0438\u0441\u043b\u0435\u043d\u043d\u044f.' },
    'View My Work': { cs: 'Zobrazit Mou Pr\u00e1ci', uk: '\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0420\u043e\u0431\u043e\u0442\u0438' },
    'Get In Touch': { cs: 'Kontaktujte M\u011b', uk: '\u0417\u0432\u2019\u044f\u0436\u0456\u0442\u044c\u0441\u044f \u0437\u0456 \u041c\u043d\u043e\u044e' },
    'Years in Automation': { cs: 'Let v Automatizaci', uk: '\u0420\u043e\u043a\u0456\u0432 \u0432 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u0457' },
    'Years Teaching': { cs: 'Let V\u00fdky', uk: '\u0420\u043e\u043a\u0456\u0432 \u0412\u0438\u043a\u043b\u0430\u0434\u0430\u043d\u043d\u044f' },
    'Certifications': { cs: 'Certifikace', uk: '\u0421\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0438' },
    // Services
    '// Core Competencies': { cs: '// Kl\u00ed\u010dov\u00e9 Kompetence', uk: '// \u041a\u043b\u044e\u0447\u043e\u0432\u0456 \u041a\u043e\u043c\u043f\u0435\u0442\u0435\u043d\u0446\u0456\u0457' },
    'Technical Solutions': { cs: 'Technick\u00e1 \u0158e\u0161en\u00ed', uk: '\u0422\u0435\u0445\u043d\u0456\u0447\u043d\u0456 \u0420\u0456\u0448\u0435\u043d\u043d\u044f' },
    '\u201cEnsuring stability at scale through automated rigor and semantic precision.\u201d': { cs: '\u201eZaji\u0161\u0165ov\u00e1n\u00ed stability v m\u011b\u0159\u00edtku prost\u0159ednictv\u00edm automatizovan\u00e9 p\u0159\u00edsnosti a s\u00e9mantick\u00e9 p\u0159esnosti.\u201c', uk: '\u201e\u0417\u0430\u0431\u0435\u0437\u043f\u0435\u0447\u0435\u043d\u043d\u044f \u0441\u0442\u0430\u0431\u0456\u043b\u044c\u043d\u043e\u0441\u0442\u0456 \u0432 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0456 \u0447\u0435\u0440\u0435\u0437 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u043e\u0432\u0430\u043d\u0443 \u0441\u0443\u0432\u043e\u0440\u0456\u0441\u0442\u044c \u0442\u0430 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u043d\u0443 \u0442\u043e\u0447\u043d\u0456\u0441\u0442\u044c.\u201c' },
    'Test Automation': { cs: 'Automatizace Test\u016f', uk: '\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044f \u0422\u0435\u0441\u0442\u0456\u0432' },
    'Building reliable, maintainable frameworks with CI/CD integration. Robot Framework, Pytest, and Selenium pipelines that scale with your product.': { cs: 'Budov\u00e1n\u00ed spolehlivých, udržiteln\u00fdch framework\u016f s integrac\u00ed CI/CD. Pipeline Robot Framework, Pytest a Selenium, kter\u00e9 rostou s va\u0161\u00edm produktem.', uk: '\u041f\u043e\u0431\u0443\u0434\u043e\u0432\u0430 \u043d\u0430\u0434\u0456\u0439\u043d\u0438\u0445 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0456\u0432 \u0437 CI/CD. Pipeline Robot Framework, Pytest \u0442\u0430 Selenium, \u0449\u043e \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0443\u044e\u0442\u044c\u0441\u044f \u0437 \u0432\u0430\u0448\u0438\u043c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u043c.' },
    'API Testing & Validation': { cs: 'Testov\u00e1n\u00ed API & Validace', uk: '\u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f API \u0442\u0430 \u0412\u0430\u043b\u0456\u0434\u0430\u0446\u0456\u044f' },
    'End-to-end REST API validation, contract testing, and data integrity checks. Experienced with NetSuite and telecom-grade backend systems.': { cs: 'Komplexn\u00ed validace REST API, smluvn\u00ed testov\u00e1n\u00ed a kontroly datov\u00e9 integrity. Zku\u0161enosti se syst\u00e9my NetSuite a telekomunika\u010dn\u00edmi backendy.', uk: '\u041d\u0430\u0441\u043a\u0440\u0456\u0437\u043d\u0430 \u0432\u0430\u043b\u0456\u0434\u0430\u0446\u0456\u044f REST API, \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u043d\u0435 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0438 \u0446\u0456\u043b\u0456\u0441\u043d\u043e\u0441\u0442\u0456 \u0434\u0430\u043d\u0438\u0445. \u0414\u043e\u0441\u0432\u0456\u0434 \u0437 NetSuite \u0442\u0430 \u0442\u0435\u043b\u0435\u043a\u043e\u043c \u0431\u0435\u043a\u0435\u043d\u0434\u0430\u043c\u0438.' },
    'Manual QA & Strategy': { cs: 'Manu\u00e1ln\u00ed QA & Strategie', uk: '\u0420\u0443\u0447\u043d\u0435 QA \u0442\u0430 \u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u044f' },
    'Full-spectrum functional and regression testing. Defect lifecycle management in JIRA, test documentation in Confluence, Zephyr test case management.': { cs: 'Plnospektr\u00e1ln\u00ed funk\u010dn\u00ed a regresn\u00ed testov\u00e1n\u00ed. Spr\u00e1va \u017eivotn\u00edho cyklu defekt\u016f v JIRA, testovac\u00ed dokumentace v Confluence, spr\u00e1va testovac\u00edch p\u0159\u00edpad\u016f Zephyr.', uk: '\u041f\u043e\u0432\u043d\u043e\u0441\u043f\u0435\u043a\u0442\u0440\u0430\u043b\u044c\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0435 \u0442\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0456\u0439\u043d\u0435 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f. \u0423\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f \u0434\u0435\u0444\u0435\u043a\u0442\u0430\u043c\u0438 \u0432 JIRA, \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u044f \u0432 Confluence, \u043a\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u0435\u0441\u0442-\u043a\u0435\u0439\u0441\u0430\u043c\u0438 Zephyr.' },
    'AI-Assisted Testing': { cs: 'AI-Asistovan\u00e9 Testov\u00e1n\u00ed', uk: '\u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0437 \u041f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u043e\u044e AI' },
    'Leveraging AI tools to accelerate test generation, coverage analysis, and reporting. Hands-on from Oracle AI Hackathon focused on testing efficiency.': { cs: 'Vyu\u017eit\u00ed AI n\u00e1stroj\u016f k urychlen\u00ed generov\u00e1n\u00ed test\u016f, anal\u00fdzy pokryt\u00ed a reportingu. Praktick\u00e9 zku\u0161enosti z Oracle AI Hackathonu zam\u011b\u0159en\u00e9ho na efektivitu testov\u00e1n\u00ed.', uk: '\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f AI-\u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456\u0432 \u0434\u043b\u044f \u043f\u0440\u0438\u0448\u0432\u0438\u0434\u0448\u0435\u043d\u043d\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0456\u0457 \u0442\u0435\u0441\u0442\u0456\u0432. \u0414\u043e\u0441\u0432\u0456\u0434 Oracle AI Hackathon.' },
    'AI-Driven Web Development': { cs: 'AI-\u0158\u00edzen\u00fd V\u00fdvoj Webu', uk: 'AI-\u041a\u0435\u0440\u043e\u0432\u0430\u043d\u0430 \u0412\u0435\u0431-\u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0430' },
    'End-to-end web project creation using AI-accelerated workflows \u2014 from design systems and rapid prototyping to production-ready Next.js deployments. Fast, precise, built to last.': { cs: 'Komplexn\u00ed tvorba webov\u00fdch projekt\u016f s AI-akcelerovan\u00fdmi workflow \u2014 od designov\u00fdch syst\u00e9m\u016f a rychl\u00e9ho prototypov\u00e1n\u00ed po produk\u010dn\u00ed nasazen\u00ed Next.js. Rychle, p\u0159esn\u011b, pro trvalost.', uk: '\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u0435 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0432\u0435\u0431-\u043f\u0440\u043e\u0435\u043a\u0442\u0456\u0432 \u0437 AI-\u043f\u0440\u0438\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u043c\u0438 workflow \u2014 \u0432\u0456\u0434 \u0434\u0438\u0437\u0430\u0439\u043d-\u0441\u0438\u0441\u0442\u0435\u043c \u0434\u043e Next.js \u0440\u043e\u0437\u0433\u043e\u0440\u0442\u0430\u043d\u044c. \u0428\u0432\u0438\u0434\u043a\u043e, \u0442\u043e\u0447\u043d\u043e, \u043d\u0430 \u0434\u043e\u0432\u0433\u043e\u0432\u0456\u0447\u043d\u0456\u0441\u0442\u044c.' },
    'QA Consulting & Workshops': { cs: 'QA Poradenstv\u00ed & Workshopy', uk: 'QA \u041a\u043e\u043d\u0441\u0430\u043b\u0442\u0438\u043d\u0433 \u0442\u0430 \u0412\u043e\u0440\u043a\u0448\u043e\u043f\u0438' },
    '15 years of teaching experience translated into hands-on team enablement. From QA process audits and test strategy design to Python automation workshops and onboarding programmes for junior engineers.': { cs: '15 let pedagogick\u00fdch zku\u0161enost\u00ed p\u0159enesenych do praktick\u00e9ho rozvoje t\u00fdm\u016f. Od audit\u016f QA proces\u016f a n\u00e1vrhu testovac\u00ed strategie po Python automatiza\u010dn\u00ed workshopy a onboarding programy pro juniorni inžen\u00fdry.', uk: '15 \u0440\u043e\u043a\u0456\u0432 \u043f\u0435\u0434\u0430\u0433\u043e\u0433\u0456\u0447\u043d\u043e\u0433\u043e \u0434\u043e\u0441\u0432\u0456\u0434\u0443 \u0443 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u043e\u043c\u0443 \u0440\u043e\u0437\u0432\u0438\u0442\u043a\u0443 \u043a\u043e\u043c\u0430\u043d\u0434. \u0412\u0456\u0434 \u0430\u0443\u0434\u0438\u0442\u0456\u0432 QA \u0434\u043e \u0432\u043e\u0440\u043a\u0448\u043e\u043f\u0456\u0432 \u0442\u0430 \u043e\u043d\u0431\u043e\u0440\u0434\u0438\u043d\u0433\u0443.' },
    // Timeline
    'The Evolution': { cs: 'Evoluce', uk: '\u0415\u0432\u043e\u043b\u044e\u0446\u0456\u044f' },
    'Professional_History_Log.txt': { cs: 'Profesion\u00e1ln\u00ed_Historie_Log.txt', uk: '\u041f\u0440\u043e\u0444\u0435\u0441\u0456\u0439\u043d\u0430_\u0406\u0441\u0442\u043e\u0440\u0456\u044f_Log.txt' },
    'Software Engineer in Test': { cs: 'Inžen\u00fdrka Softwaru v Testov\u00e1n\u00ed', uk: '\u0406\u043d\u0436\u0435\u043d\u0435\u0440 \u0437 \u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043d\u043e\u0433\u043e \u0417\u0430\u0431\u0435\u0437\u043f\u0435\u0447\u0435\u043d\u043d\u044f' },
    'Brno, Czech Republic': { cs: 'Brno, \u010cesk\u00e1 republika', uk: '\u0411\u0440\u043d\u043e, \u0427\u0435\u0441\u044c\u043a\u0430 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0456\u043a\u0430' },
    'Led Robot Framework automation across backend systems. Managed Jenkins CI/CD pipelines, validated REST APIs at scale, and participated in an internal AI Hackathon focused on testing efficiency.': { cs: 'Vedla automatizaci Robot Framework nap\u0159\u00ed\u010d backendov\u00fdmi syst\u00e9my. Spravovala Jenkins CI/CD pipeline, validovala REST API ve velk\u00e9m m\u011b\u0159\u00edtku a z\u00fa\u010dastnila se intern\u00edho AI Hackathonu zam\u011b\u0159en\u00e9ho na efektivitu testov\u00e1n\u00ed.', uk: '\u041a\u0435\u0440\u0443\u0432\u0430\u043b\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u0454\u044e Robot Framework \u0434\u043b\u044f \u0431\u0435\u043a\u0435\u043d\u0434-\u0441\u0438\u0441\u0442\u0435\u043c. \u041a\u0435\u0440\u0443\u0432\u0430\u043b\u0430 Jenkins CI/CD-pipeline, \u0432\u0430\u043b\u0456\u0434\u0443\u0432\u0430\u043b\u0430 REST API \u0443 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0456 \u0442\u0430 \u0431\u0440\u0430\u043b\u0430 \u0443\u0447\u0430\u0441\u0442\u044c \u0432 AI Hackathon.' },
    'Junior Test Engineer': { cs: 'Juniorni Testovac\u00ed Inžen\u00fdr/ka', uk: '\u041c\u043e\u043b\u043e\u0434\u0448\u0438\u0439 \u0406\u043d\u0436\u0435\u043d\u0435\u0440 \u0437 \u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f' },
    'Tested telecom-grade platforms with functional and regression suites. Automated test coverage with Robot Framework and Jenkins. Collaborated across distributed teams in the US, Europe, and Asia.': { cs: 'Testovala telekomunika\u010dn\u00ed platformy s funk\u010dn\u00edmi a regresn\u00edmi sadami. Automatizovala testovac\u00ed pokryt\u00ed pomoc\u00ed Robot Framework a Jenkins. Spolupracovala s distribuovan\u00fdmi t\u00fdmy v USA, Evrop\u011b a Asii.', uk: '\u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043b\u0430 \u0442\u0435\u043b\u0435\u043a\u043e\u043c \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0438. \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0443\u0432\u0430\u043b\u0430 \u043f\u043e\u043a\u0440\u0438\u0442\u0442\u044f \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e Robot Framework \u0442\u0430 Jenkins. \u0421\u043f\u0456\u0432\u043f\u0440\u0430\u0446\u044e\u0432\u0430\u043b\u0430 \u0437 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c\u0438 \u0432 \u0421\u0428\u0410, \u0404\u0432\u0440\u043e\u043f\u0456 \u0442\u0430 \u0410\u0437\u0456\u0457.' },
    '8 Years': { cs: '8 Let', uk: '8 \u0420\u043e\u043a\u0456\u0432' },
    'Programming Teacher': { cs: 'Programovac\u00ed Pedagog/\u017eka', uk: '\u0412\u0438\u043a\u043b\u0430\u0434\u0430\u0447 \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f' },
    'Ukraine': { cs: 'Ukrajina', uk: '\u0423\u043a\u0440\u0430\u0457\u043d\u0430' },
    'Taught C/C++, Python, and C# to aspiring developers. Designed curricula covering testing methodologies, algorithms, and system design. Built the foundational mindset behind quality-first development.': { cs: 'Vyu\u010dovala C/C++, Python a C# za\u010d\u00ednaj\u00edc\u00edm v\u00fdvoj\u00e1\u0159\u016fm. Navrhovala osnovy zahrnuj\u00edc\u00ed metodologie testov\u00e1n\u00ed, algoritmy a syst\u00e9mov\u00fd design. Budovala z\u00e1kladn\u00ed my\u0161len\u00ed zam\u011b\u0159en\u00e9 na kvalitu v\u00fdvoje.', uk: '\u0412\u0438\u043a\u043b\u0430\u0434\u0430\u043b\u0430 C/C++, Python \u0442\u0430 C# \u043c\u0430\u0439\u0431\u0443\u0442\u043d\u0456\u043c \u0440\u043e\u0437\u0440\u043e\u0431\u043d\u0438\u043a\u0430\u043c. \u0420\u043e\u0437\u0440\u043e\u0431\u043c\u044f\u043b\u0430 \u043d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u0456 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438. \u0424\u043e\u0440\u043c\u0443\u0432\u0430\u043b\u0430 \u043e\u0440\u0456\u0454\u043d\u0442\u0430\u0446\u0456\u044e \u043d\u0430 \u044f\u043a\u0456\u0441\u0442\u044c.' },
    // Stack / Certs
    'The Stack': { cs: 'Technologick\u00fd Stack', uk: '\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u0447\u043d\u0438\u0439 \u0421\u0442\u0435\u043a' },
    '// Certifications': { cs: '// Certifikace', uk: '// \u0421\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0438' },
    'Verified Credentials': { cs: 'Ov\u011b\u0159en\u00e9 P\u0159ihla\u0161ovac\u00ed \u00dadaje', uk: '\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u0456 \u0421\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0438' },
    'Certified Tester \u2014 Foundation Level': { cs: 'Certifikovan\u00fd Tester \u2014 Z\u00e1kladn\u00ed \u00darove\u0148', uk: '\u0421\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u043e\u0432\u0430\u043d\u0438\u0439 \u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043b\u044c\u043d\u0438\u043a \u2014 \u0411\u0430\u0437\u043e\u0432\u0438\u0439 \u0420\u0456\u0432\u0435\u043d\u044c' },
    '2025 AI Foundations Associate \u2014 Oracle Cloud': { cs: 'Asoci\u00e1t Z\u00e1klad\u016f AI 2025 \u2014 Oracle Cloud', uk: '\u0410\u0441\u043e\u0446\u0456\u0430\u0442 \u041e\u0441\u043d\u043e\u0432 AI 2025 \u2014 Oracle Cloud' },
    'Certified Agilist \u2014 Scaled Agile Framework': { cs: 'Certifikovan\u00fd Agilista \u2014 Scaled Agile Framework', uk: '\u0421\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u043e\u0432\u0430\u043d\u0438\u0439 \u0410\u0434\u0436\u0438\u043b\u0456\u0441\u0442 \u2014 Scaled Agile Framework' },
    'Robot Framework Test Automation': { cs: 'Testovac\u00ed Automatizace Robot Framework', uk: '\u0422\u0435\u0441\u0442\u043e\u0432\u0430 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u044f Robot Framework' },
    // Contact — straight apostrophe U+0027 (HTML &#x27;)
    '// Open to Work': { cs: '// Otev\u0159ena Pr\u00e1ci', uk: '// \u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0430 \u0434\u043e \u0420\u043e\u0431\u043e\u0442\u0438' },
    'Let\'s Build Something Bug-Free': { cs: 'Postavme N\u011bco Bez Chyb', uk: '\u0421\u0442\u0432\u043e\u0440\u0456\u043c\u043e \u0429\u043e\u0441\u044c \u0411\u0435\u0437 \u041f\u043e\u043c\u0438\u043b\u043e\u043a' },
    'Available for freelance, consulting, and contract work. Remote-friendly \u00b7 Eligible to work in Czech Republic.': { cs: 'Dostupn\u00e1 pro freelance, poradenstv\u00ed a smluvn\u00ed pr\u00e1ci. Vhodn\u00e9 pro vzd\u00e1lenou pr\u00e1ci \u00b7 Opr\u00e1vn\u011bna pracovat v \u010cesk\u00e9 republice.', uk: '\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0434\u043b\u044f \u0444\u0440\u0456\u043b\u0430\u043d\u0441\u0443, \u043a\u043e\u043d\u0441\u0430\u043b\u0442\u0438\u043d\u0433\u0443 \u0442\u0430 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u043d\u043e\u0457 \u0440\u043e\u0431\u043e\u0442\u0438. \u041f\u0456\u0434\u0445\u043e\u0434\u0438\u0442\u044c \u0434\u043b\u044f \u0432\u0456\u0434\u0434\u0430\u043b\u0435\u043d\u043e\u0457 \u0440\u043e\u0431\u043e\u0442\u0438 \u00b7 \u041c\u0430\u0454 \u043f\u0440\u0430\u0432\u043e \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0432 \u0427\u0435\u0445\u0456\u0457.' },
    'Your Name': { cs: 'Va\u0161e Jm\u00e9no', uk: '\u0412\u0430\u0448\u0435 \u0406\u043c\u2019\u044f' },
    'Email Address': { cs: 'E-mailov\u00e1 Adresa', uk: '\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u0410\u0434\u0440\u0435\u0441\u0430' },
    'Your Message': { cs: 'Va\u0161e Zpr\u00e1va', uk: '\u0412\u0430\u0448\u0435 \u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f' },
    'Send Message': { cs: 'Odeslat Zpr\u00e1vu', uk: '\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438 \u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f' },
    '\u00a9 2026 Tetiana Dramashko \u00b7 All Rights Reserved': { cs: '\u00a9 2026 Tetiana Dramashko \u00b7 V\u0161echna Pr\u00e1va Vyhrazena', uk: '\u00a9 2026 Tetiana Dramashko \u00b7 \u0423\u0441\u0456 \u041f\u0440\u0430\u0432\u0430 \u0417\u0430\u0445\u0438\u0449\u0435\u043d\u0456' }
  };

  var PH = { 'Jane Smith': { cs: 'Jana Nov\u00e1kov\u00e1', uk: '\u0413\u0430\u043d\u043d\u0430 \u041f\u0435\u0442\u0440\u0435\u043d\u043a\u043e' } };

  var currentLang = 'en';

  // Snapshot all text nodes before React hydrates
  var snap = [];
  (function () {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    var n;
    while ((n = w.nextNode())) snap.push([n, n.textContent]);
  })();

  function applyLang(lang) {
    currentLang = lang;

    // Restore originals first
    snap.forEach(function (p) { if (p[0].parentNode) p[0].textContent = p[1]; });
    document.querySelectorAll('[placeholder]').forEach(function (el) {
      if (el._origPh !== undefined) el.placeholder = el._origPh;
    });

    document.documentElement.lang = { en: 'en', cs: 'cs', uk: 'uk' }[lang] || 'en';
    updateToggle(lang);
    closePopup();
    try { localStorage.setItem('td_lang', lang); } catch (e) {}
    if (lang === 'en') return;

    // Apply translations via TreeWalker
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    var n;
    while ((n = w.nextNode())) {
      if (n.parentNode && n.parentNode.closest && n.parentNode.closest('[data-ls]')) continue;
      var t = n.textContent.trim();
      if (t && T[t] && T[t][lang]) {
        var s = n.textContent;
        n.textContent = s.replace(t, T[t][lang]);
      }
    }

    document.querySelectorAll('[placeholder]').forEach(function (el) {
      var p = el.placeholder.trim();
      if (PH[p] && PH[p][lang]) el.placeholder = PH[p][lang];
    });
  }

  function updateToggle(lang) {
    var lbl = document.getElementById('td-ls-label');
    if (lbl) lbl.textContent = lang.toUpperCase();
    // Highlight active option in popup
    ['en', 'cs', 'uk'].forEach(function (l) {
      var opt = document.getElementById('td-ls-opt-' + l);
      if (!opt) return;
      var active = l === lang;
      opt.style.color = active ? '#c1fffe' : '#adaaaa';
      opt.style.background = active ? 'rgba(193,255,254,0.07)' : 'transparent';
    });
  }

  var popupOpen = false;

  function openPopup() {
    var p = document.getElementById('td-ls-popup');
    if (p) { p.style.display = 'flex'; popupOpen = true; }
  }

  function closePopup() {
    var p = document.getElementById('td-ls-popup');
    if (p) { p.style.display = 'none'; popupOpen = false; }
  }

  function togglePopup() {
    if (popupOpen) closePopup(); else openPopup();
  }

  function injectSwitcher() {
    if (document.getElementById('td-ls-toggle')) return;
    var nav = document.querySelector('nav[aria-label="Main navigation"]');
    if (!nav) return;

    // Insert before hamburger button (visible on all screen sizes)
    var hamburger = nav.querySelector('button[aria-label="Open menu"]');

    var wrap = document.createElement('div');
    wrap.setAttribute('data-ls', '1');
    wrap.style.cssText = 'position:relative;flex-shrink:0;display:flex;align-items:center;';

    // Toggle button
    var toggle = document.createElement('button');
    toggle.id = 'td-ls-toggle';
    toggle.setAttribute('data-ls', '1');
    toggle.setAttribute('aria-label', 'Switch language');
    toggle.setAttribute('aria-haspopup', 'true');
    toggle.style.cssText = [
      'display:flex;align-items:center;gap:4px',
      'background:none',
      'border:1px solid rgba(72,72,71,0.45)',
      'border-radius:6px',
      'padding:4px 8px',
      'cursor:pointer',
      'font-family:"Roboto Mono",monospace',
      'font-size:0.65rem',
      'letter-spacing:0.14em',
      'color:#adaaaa',
      'transition:border-color 0.15s,color 0.15s',
      'white-space:nowrap'
    ].join(';');

    var lbl = document.createElement('span');
    lbl.id = 'td-ls-label';
    lbl.setAttribute('data-ls', '1');
    lbl.textContent = 'EN';

    // Small globe SVG icon
    var icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('width', '11');
    icon.setAttribute('height', '11');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('fill', 'none');
    icon.setAttribute('stroke', 'currentColor');
    icon.setAttribute('stroke-width', '2');
    icon.setAttribute('stroke-linecap', 'round');
    icon.setAttribute('stroke-linejoin', 'round');
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>';
    icon.setAttribute('data-ls', '1');

    toggle.appendChild(icon);
    toggle.appendChild(lbl);
    toggle.addEventListener('click', function (e) { e.stopPropagation(); togglePopup(); });
    toggle.addEventListener('mouseenter', function () {
      toggle.style.borderColor = 'rgba(193,255,254,0.5)';
      toggle.style.color = '#c1fffe';
    });
    toggle.addEventListener('mouseleave', function () {
      toggle.style.borderColor = 'rgba(72,72,71,0.45)';
      toggle.style.color = '#adaaaa';
    });

    // Popup dropdown
    var popup = document.createElement('div');
    popup.id = 'td-ls-popup';
    popup.setAttribute('data-ls', '1');
    popup.style.cssText = [
      'display:none',
      'flex-direction:column',
      'position:absolute',
      'top:calc(100% + 6px)',
      'right:0',
      'background:#131313',
      'border:1px solid rgba(72,72,71,0.45)',
      'border-radius:8px',
      'padding:4px',
      'min-width:72px',
      'z-index:9999',
      'box-shadow:0 8px 24px rgba(0,0,0,0.5)'
    ].join(';');

    var LANGS = [
      { code: 'en', label: 'EN — English' },
      { code: 'cs', label: 'CS — \u010cesky' },
      { code: 'uk', label: 'UK — \u0423\u043a\u0440.' }
    ];

    LANGS.forEach(function (item) {
      var opt = document.createElement('button');
      opt.id = 'td-ls-opt-' + item.code;
      opt.setAttribute('data-ls', '1');
      opt.textContent = item.label;
      opt.style.cssText = [
        'background:transparent',
        'border:none',
        'cursor:pointer',
        'font-family:"Roboto Mono",monospace',
        'font-size:0.6rem',
        'letter-spacing:0.1em',
        'color:#adaaaa',
        'padding:6px 10px',
        'border-radius:4px',
        'text-align:left',
        'white-space:nowrap',
        'width:100%',
        'transition:background 0.1s,color 0.1s'
      ].join(';');
      opt.addEventListener('mouseenter', function () {
        if (item.code !== currentLang) { opt.style.background = 'rgba(255,255,255,0.05)'; opt.style.color = '#ffffff'; }
      });
      opt.addEventListener('mouseleave', function () {
        opt.style.background = item.code === currentLang ? 'rgba(193,255,254,0.07)' : 'transparent';
        opt.style.color = item.code === currentLang ? '#c1fffe' : '#adaaaa';
      });
      opt.addEventListener('click', function () { applyLang(item.code); });
      popup.appendChild(opt);
    });

    wrap.appendChild(toggle);
    wrap.appendChild(popup);

    if (hamburger) nav.insertBefore(wrap, hamburger);
    else nav.appendChild(wrap);

    // Close popup when clicking outside
    document.addEventListener('click', function (e) {
      if (popupOpen && !wrap.contains(e.target)) closePopup();
    });

    // Store original placeholders
    document.querySelectorAll('[placeholder]').forEach(function (el) { el._origPh = el.placeholder; });

    // Apply saved language
    var saved = 'en';
    try { saved = localStorage.getItem('td_lang') || 'en'; } catch (e) {}
    applyLang(saved);
  }

  window.__tdSetLang = applyLang;
  setTimeout(injectSwitcher, 300);
})();
