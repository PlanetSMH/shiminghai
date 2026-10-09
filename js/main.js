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
    "about.i2": "Integrated multimodal intelligent screening & diagnosis for cervical cancer",
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
    "xp.laforge.role": "Research Student",
    "xp.laforge.date": "2025.10 – 2026.04",
    "xp.laforge.desc": "Optimized game asset production by training customized DiT-based generative models, with automated data curation and model quantization for high-performance generation.",
    "xp.astar.role": "Algorithm Engineer Intern",
    "xp.astar.date": "2025.08 – 2025.10",
    "xp.astar.desc": "Developed a multimodal 3D scene understanding framework for embodied AI, integrating 2D visual priors into 3D segmentation to enhance interactive affordance perception.",
    "projects.title": "Projects",
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
    "label.authors": "Authors",
    "label.role": "Role",
    "label.focus": "Focus",
    "label.paper": "Paper ↗",
    "news.title": "News",
    "news1.head": "DepthScopy accepted to CVPR 2026 Findings",
    "news1.sub": "Decoupling Frequency for Endoscopic Depth Estimation in Sparsely-Textured Regions",
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
    "xp.laforge.role": "研究学生",
    "xp.laforge.date": "2025.10 – 2026.04",
    "xp.laforge.desc": "通过训练定制 DiT 生成模型优化游戏资产生产流程，实现自动化数据管理与模型量化，交付高性能生成管线。",
    "xp.astar.role": "算法工程师（实习）",
    "xp.astar.date": "2025.08 – 2025.10",
    "xp.astar.desc": "面向具身智能开发多模态三维场景理解框架，将二维视觉先验融入三维分割模型，增强交互可供性感知。",
    "projects.title": "项目",
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

// 浅色（方案 A）为永久默认；记住之后的选择
if (localStorage.getItem("theme") === "dark") {
  localStorage.setItem("theme", "light");
}
const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  root.setAttribute("data-theme", "light");
  toggle.textContent = "方案B";
} else {
  root.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
  toggle.textContent = "方案B";
}
toggle.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  if (isLight) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
    toggle.textContent = "方案A";
  } else {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggle.textContent = "方案B";
  }
});
