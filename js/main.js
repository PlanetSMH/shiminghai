// 滚动淡入动画
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ========== 多语言切换（默认英文） ==========
const I18N = {
  en: {
    "nav.about": "About", "nav.projects": "Projects", "nav.news": "News", "nav.contact": "Contact",
    "hero.role": "Medical AI Researcher",
    "about.title": "About",
    "about.lead": "Medical AI researcher at Shanghai AI Laboratory, working on AI for real-world clinical practice:",
    "about.i1": "Multimodal AI-assisted decision-making in endoscopic surgery",
    "about.i2": "Integrated multimodal intelligent screening and diagnosis for cervical cancer",
    "about.i3": "Drug–dosage co-decision prediction and evolution models for metabolic comorbidities",
    "about.edu": "Education",
    "edu.nus": "National University of Singapore",
    "edu.nus.degree": "Master of Science in Biomedical Engineering",
    "edu.nus.date": "2024 – 2026",
    "about.xp": "Experience",
    "xp.shlab.role": "Algorithm Researcher · Medical Intelligence Center",
    "xp.now": "Current",
    "xp.shlab.date": "2026.05 – Present",
    "xp.shlab.desc": "Developing and optimizing multimodal medical AI algorithms that integrate medical imaging and clinical information for intelligent diagnosis.",
    "clin.gi.name": "Gastrointestinal Endoscopic Surgery AI",
    "clin.gi.goal": "Goal: multimodal AI-assisted decision-making in endoscopic surgery.",
    "clin.cv.name": "Cervical Cancer Screening and Diagnosis",
    "clin.cv.goal": "Goal: an integrated multimodal intelligent screening and diagnosis system for cervical cancer.",
    "clin.mt.name": "World-Model Prediction for Metabolic Comorbidities",
    "clin.mt.goal": "Goal: drug–dosage co-decision prediction and evolution models for metabolic comorbidities.",
    "label.period": "Period",
    "depthscopy.period": "2025.03 – 2026.02",
    "echorisk.period": "2026.05 – 2026.08",
    "clin.gi.period": "2026.08 – Present",
    "clin.cv.period": "2026.05 – Present",
    "clin.mt.period": "2026.06 – Present",
    "echorisk.name": "Cardiac Function Estimation",
    "echorisk.sub": "EchoRisk-MICCAI 2026 Challenge · Task 1: LVEF Estimation",
    "echorisk.desc": "MultiPhys-EF: decorrelated multi-signal fusion for LVEF estimation in cardiotoxicity surveillance.",
    "echorisk.award": "Second Prize",
    "label.award": "Award",
    "label.website": "Website ↗",
    "label.report": "Report ↗",
    "xp.laforge.role": "Research Student",
    "xp.laforge.date": "2025.10 – 2026.04",
    "xp.laforge.desc": "Optimized game asset production by training customized DiT-based generative models, with automated data curation and model quantization for high-performance generation.",
    "xp.astar.role": "Algorithm Engineer Intern",
    "xp.astar.date": "2025.08 – 2025.10",
    "xp.astar.desc": "Developed a multimodal 3D scene understanding framework for embodied AI, integrating 2D visual priors into 3D segmentation to enhance interactive affordance perception.",
    "projects.title": "Projects",
    "projects.clinical": "Clinical Collaborations",
    "clin.cv.award": "Second Prize, 1st National Digital-Intelligent Health Competition",
    "news3.head": "Cervical cancer screening project — Second Prize, 1st National Digital-Intelligent Health Competition",
    "news4.head": "2nd Place — Articulate3D Challenge, OpenSUN3D Workshop @ ICCV 2025",
    "depthscopy.sub": "Decoupling Frequency for Endoscopic Depth Estimation in Sparsely-Textured Regions",
    "depthscopy.desc": "We propose a framework centered on a gated wavelet dense prediction transform that decomposes feature maps into directional spectral subbands with learnable weights, selectively amplifying sparse edge signals while preserving robust geometric structure in low-texture regions — surpassing previous state-of-the-art on C3VD and SimCol3D.",
    "laforge.sub": "Research Internship — Game AI · 2025.10 – 2026.04",
    "laforge.desc": "Optimized game asset production by training customized DiT-based generative models, implementing automated data curation and model quantization (seamless) to deliver high-performance generation pipelines.",
    "laforge.kw": "DiT Generative Models · Data Curation · Model Quantization",
    "laforge.cap.orig": "Original (2×2)",
    "laforge.cap.seam": "Seamless (2×2)",
    "astar.sub": "Research Internship — Embodied AI · 2025.08 – 2025.10",
    "astar.desc": "Developed a multimodal 3D scene understanding framework for embodied AI, integrating 2D visual priors into 3D segmentation model frameworks to enhance interactive affordance perception.",
    "astar.kw": "3D Scene Understanding · Embodied AI · Multimodal Perception",
    "astar.award": "2nd Place — Articulate3D Challenge, OpenSUN3D Workshop @ ICCV 2025",
    "astar.awardmeta": "2nd Place — Articulate3D Challenge",
    "label.challenge": "Challenge ↗",
    "label.authors": "Authors",
    "label.role": "Role",
    "label.focus": "Focus",
    "label.paper": "Paper ↗",
    "news.title": "News",
    "news1.head": "DepthScopy accepted to CVPR 2026 Findings",
    "news1.sub": "Decoupling Frequency for Endoscopic Depth Estimation in Sparsely-Textured Regions",
    "news2.head": "Second Prize — EchoRisk-MICCAI 2026 Challenge (Task 1: LVEF Estimation)",
    "contact.title": "Contact",
    "contact.lead": "Open to collaboration, research discussion, and opportunities in medical AI.",
    "footer.text": "© 2026 Minghai Shi · Life speaks in patterns.",
  },
  zh: {
    "nav.about": "关于", "nav.projects": "项目", "nav.news": "动态", "nav.contact": "联系",
    "hero.role": "医学算法研究员",
    "about.title": "关于",
    "about.lead": "上海人工智能实验室医学智能中心算法研究员，致力于面向真实临床的 AI 应用研究：",
    "about.i1": "多模态内镜手术辅助决策",
    "about.i2": "多模态宫颈癌一体化智能筛查与辅助诊断系统",
    "about.i3": "代谢共病的药物-剂量协同决策预测演化模型",
    "about.edu": "教育经历",
    "edu.nus": "新加坡国立大学",
    "edu.nus.degree": "理学硕士 · 生物医学工程",
    "edu.nus.date": "2024 – 2026",
    "about.xp": "工作经历",
    "xp.shlab.role": "算法研究员 · 医学智能中心",
    "xp.now": "现任",
    "xp.shlab.date": "2026.05 – 至今",
    "xp.shlab.desc": "研发并优化多模态医学 AI 算法，融合医学影像与临床信息实现智能诊断。",
    "clin.gi.name": "胃肠内镜手术 AI",
    "clin.gi.goal": "任务目标：多模态内镜手术辅助决策。",
    "clin.cv.name": "宫颈癌筛查与辅助诊断",
    "clin.cv.goal": "任务目标：多模态宫颈癌一体化智能筛查与辅助诊断系统。",
    "clin.mt.name": "代谢共病世界模型预测",
    "clin.mt.goal": "任务目标：代谢共病的药物-剂量协同决策预测演化模型。",
    "label.period": "周期",
    "depthscopy.period": "2025.03 – 2026.02",
    "echorisk.period": "2026.05 – 2026.08",
    "clin.gi.period": "2026.08 – 至今",
    "clin.cv.period": "2026.05 – 至今",
    "clin.mt.period": "2026.06 – 至今",
    "echorisk.name": "心脏功能智能评估",
    "echorisk.sub": "EchoRisk-MICCAI 2026 挑战赛 · Task 1：LVEF 估计",
    "echorisk.desc": "MultiPhys-EF：面向心脏毒性监测中 LVEF 估计的去相关多信号融合方法。",
    "echorisk.award": "二等奖",
    "label.award": "奖项",
    "label.website": "官网 ↗",
    "label.report": "报道 ↗",
    "news2.head": "EchoRisk-MICCAI 2026 挑战赛（Task 1：LVEF 估计）二等奖",
    "xp.laforge.role": "研究学生",
    "xp.laforge.date": "2025.10 – 2026.04",
    "xp.laforge.desc": "通过训练定制 DiT 生成模型优化游戏资产生产流程，实现自动化数据管理与模型量化，交付高性能生成管线。",
    "xp.astar.role": "算法工程师（实习）",
    "xp.astar.date": "2025.08 – 2025.10",
    "xp.astar.desc": "面向具身智能开发多模态三维场景理解框架，将二维视觉先验融入三维分割模型，增强交互可供性感知。",
    "projects.title": "项目",
    "projects.clinical": "医学临床合作",
    "clin.cv.award": "首届全国数智健康大赛二等奖（一等奖空缺）",
    "news3.head": "宫颈癌筛查项目获首届全国数智健康大赛二等奖",
    "news4.head": "Articulate3D 挑战赛第二名（OpenSUN3D Workshop @ ICCV 2025）",
    "projects.lead": "科研与工业界代表工作。",
    "depthscopy.sub": "稀疏纹理区域的内镜深度估计：频域解耦方法",
    "depthscopy.desc": "我们提出以门控小波密集预测变换为核心的框架：将特征图分解为带可学习权重的方向性频带子带，选择性放大稀疏边缘信号，同时保留下低纹理区域的稳健几何结构——在 C3VD 与 SimCol3D 数据集上超越此前最优结果。",
    "laforge.sub": "研究实习 — 游戏 AI · 2025.10 – 2026.04",
    "laforge.desc": "通过训练定制 DiT 生成模型优化游戏资产生产流程，实现自动化数据管理与模型量化，交付高性能生成管线。",
    "laforge.kw": "DiT 生成模型 · 数据管理 · 模型量化",
    "laforge.cap.orig": "原始 (2×2)",
    "laforge.cap.seam": "无缝 (2×2)",
    "astar.sub": "研究实习 — 具身智能 · 2025.08 – 2025.10",
    "astar.desc": "面向具身智能开发多模态三维场景理解框架，将二维视觉先验融入三维分割模型，增强交互可供性感知。",
    "astar.kw": "三维场景理解 · 具身智能 · 多模态感知",
    "astar.award": "Articulate3D 挑战赛第二名（OpenSUN3D Workshop @ ICCV 2025）",
    "astar.awardmeta": "Articulate3D 挑战赛第二名",
    "label.challenge": "挑战赛 ↗",
    "label.authors": "作者",
    "label.role": "角色",
    "label.focus": "方向",
    "label.paper": "论文 ↗",
    "news.title": "动态",
    "news1.head": "DepthScopy 被 CVPR 2026 Findings 接收",
    "news1.sub": "稀疏纹理区域的内镜深度估计：频域解耦方法",
    "contact.title": "联系",
    "contact.lead": "欢迎医学 AI 方向的合作、学术交流与机会洽谈。",
    "footer.text": "© 2026 石明海 · Life speaks in patterns.",
  },
};

const langToggle = document.getElementById("lang-toggle");
function setLang(lang) {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });
  langToggle.textContent = lang === "en" ? "中文" : "EN";
  localStorage.setItem("lang", lang);
}
const savedLang = localStorage.getItem("lang") || "en";
setLang(savedLang);
langToggle.addEventListener("click", () => {
  setLang(document.documentElement.lang === "en" ? "zh" : "en");
});

// 移动端视频自动播放兜底：部分浏览器需要用户交互后才允许播放
const video = document.querySelector(".hero__video");
if (video) {
  video.play().catch(() => {
    document.addEventListener("touchstart", () => video.play(), { once: true });
  });
}

