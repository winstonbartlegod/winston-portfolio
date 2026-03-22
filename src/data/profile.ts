// ============================================================
// PROFILE DATA — Edit this file to update all site content
// ============================================================

export const profile = {
  // ── Identity ──────────────────────────────────────────────
  name: 'Winston Bartle',
  initials: 'WB',
  headline: 'Senior Consultant · Financial Risk Management',
  tagline:
    'Building the intelligence layer for modern finance — applying Machine Learning, NLP, and Deep Learning to reshape how institutions understand and manage risk.',
  email: 'winston.bartle@example.com', // ← update with real email
  phone: '',
  location: 'Hong Kong SAR',
  avatar: '/images/avatar.jpg', // ← replace with your actual photo (avatar.jpg)
  cvUrl: '/uploads/CVWinston.pdf',

  // ── Social Links ──────────────────────────────────────────
  social: {
    github: 'https://github.com/winstonbartlegod',
    linkedin: 'https://www.linkedin.com/in/winstonbartle/',
    twitter: 'https://twitter.com/winnieflyhigh',
  },

  // ── About / Biography ────────────────────────────────────
  bio: [
    `I'm an Senior Consultant in Financial Risk Management at Ernst & Young (EY) Hong Kong, where I apply cutting-edge artificial intelligence and machine learning algorithms to help financial institutions navigate an increasingly complex regulatory and risk landscape.`,
    `Malaysian at heart, data-driven by passion—leveraging AI, econometrics, and advanced analytics to reshape financial risk and decision-making in a fast-evolving world.`,
    `Alumnus of MCKL, where I achieved straight A* in CIE A-Levels (Further Mathematics, Mathematics, Physics, Chemistry). Initially gearing up for mechanical engineering, I pivoted toward data science and econometrics, drawn by their power to uncover insights from complex systems. This foundation led to a BSc in Econometrics and Data Science at the University of Amsterdam, followed by an MSc in Financial Technology from HKUST. `,
    `At EY, I drive innovation in financial risk management, specializing in behavioral models for interest rate risk in the banking book (IRRBB), early redemption risks, and predictive accuracy.`,
    `I harness Python automation, R, machine learning, and Retrieval-Augmented Generation (RAG) with large language models to streamline workflows, boost model performance, and deliver explainable, regulatory-compliant solutions.`,
    `Open to conversations on AI in finance, behavioral modeling, LLMs/RAG in risk, econometrics, or just sharing a solid data pun. Let’s connect!`
  ],

  // ── Key Stats (shown in About section) ───────────────────
  stats: [
    { label: 'Years in FinTech', value: '3+' },
    { label: 'ML Models Deployed', value: '10+' },
    { label: 'Degrees Earned', value: '2' },
    { label: 'Cities Lived In', value: '4' },
  ],

  // ── Experience ────────────────────────────────────────────
  experience: [
    {
      id: 'ey',
      title: 'Associate Consultant — Financial Risk Management',
      company: 'Ernst & Young (EY)',
      companyUrl: 'https://www.ey.com/en_gl/consulting/financial-services-risk-management',
      location: 'Hong Kong SAR',
      startDate: 'Sep 2023',
      endDate: null, // null = present
      logo: '/images/logos/ey.svg',
      logoFallback: 'EY',
      color: '#FFE600',
      type: 'Full-time',
      description: [
        'Design and deploy AI/ML algorithms for credit risk, market risk, and model risk management; monitor and review their ongoing performance through rigorous testing and validation frameworks.',
        'Deliver bespoke analytical solutions enabling clients to meet both regulatory obligations (HKMA, MAS, BCBS) and internal risk appetite requirements.',
        'Lead model documentation, governance reviews, and stress-testing exercises for Tier-1 banking clients across Hong Kong and South-East Asia.',
        'Collaborate cross-functionally with data engineering, compliance, and front-office quant teams to move models from research to production.',
      ],
      tags: ['Machine Learning', 'Risk Modelling', 'Python', 'Model Validation', 'Regulatory Compliance'],
    },
    {
      id: 'tencent',
      title: 'Business Analyst Apprentice',
      company: 'Tencent WeChat Pay HK',
      companyUrl: 'https://pay.wechat.com/en/index.shtml',
      location: 'Hong Kong SAR',
      startDate: 'Nov 2022',
      endDate: 'Mar 2023',
      logo: '/images/logos/wechat.svg',
      logoFallback: 'WC',
      color: '#07C160',
      type: 'Internship',
      description: [
        'Led a two-person research team investigating NFT use-cases within the WeChat Pay e-wallet ecosystem — culminating in a strategic report presented to senior product leadership.',
        'Provided expert guidance on the regulatory and compliance landscape for digital assets in Hong Kong (SFC licensing, VASP framework), helping align product strategy with evolving rules.',
        'Designed user-flow prototypes for potential NFT integration points, synthesising qualitative research with competitive benchmarking.',
      ],
      tags: ['NFT Research', 'Digital Assets', 'HK Regulations', 'Product Strategy', 'Stakeholder Presentations'],
    },
    {
      id: 'icla',
      title: 'Engineering Consultancy Intern',
      company: 'Jurutera Perunding ICLA Sdn. Bhd',
      companyUrl: 'https://www.linkedin.com/company/jpiclasb/',
      location: 'Kuala Lumpur, Malaysia',
      startDate: 'Dec 2022',
      endDate: 'Feb 2023',
      logo: '/images/logos/icla.svg',
      logoFallback: 'JP',
      color: '#3B82F6',
      type: 'Internship',
      description: [
        'Applied advanced hydraulic and fluid dynamics calculations to water distribution network design projects, using R for data analysis and reporting.',
        'Conducted detailed electrical engineering calculations for single-phase voltage-drop analyses, ensuring designs met local grid standards.',
        'Automated repetitive calculation workflows in R, reducing turnaround time by ~40% and improving report consistency.',
      ],
      tags: ['R Programming', 'Hydraulic Engineering', 'Electrical Systems', 'Automation'],
    },
  ],

  // ── Education ─────────────────────────────────────────────
  education: [
    {
      id: 'hkust',
      degree: 'MSc in Financial Technology',
      school: 'Hong Kong University of Science & Technology',
      shortName: 'HKUST',
      location: 'Hong Kong SAR',
      startYear: '2022',
      endYear: '2023',
      gpa: '',
      logo: '/images/logos/hkust.svg',
      logoFallback: 'HK',
      color: '#003366',
      description:
        'Specialised in algorithmic trading systems, risk analytics, blockchain applications, and advanced machine learning for financial forecasting. Completed a thesis on graph-based credit risk assessment using GNNs.',
      highlights: ['Graph Neural Networks', 'Algorithmic Trading', 'Blockchain', 'Risk Analytics'],
    },
    {
      id: 'uva',
      degree: 'BSc in Econometrics & Data Science',
      school: 'University of Amsterdam',
      shortName: 'UvA',
      location: 'Amsterdam, Netherlands',
      startYear: '2019',
      endYear: '2022',
      gpa: '',
      logo: '/images/logos/uva.svg',
      logoFallback: 'UA',
      color: '#BC0031',
      description:
        'Rigorous quantitative training combining classical econometrics, causal inference, time-series analysis, and modern data science methods. Minor in Mathematical Finance.',
      highlights: ['Time-Series Analysis', 'Causal Inference', 'Mathematical Finance', 'Statistical Learning'],
    },
    {
      id: 'rug',
      degree: 'BSc in Artificial Intelligence',
      school: 'University of Groningen',
      shortName: 'RUG',
      location: 'Groningen, Netherlands',
      startYear: '2016',
      endYear: '2019',
      gpa: '',
      logo: '/images/logos/rug.svg',
      logoFallback: 'RG',
      color: '#E41E20',
      description:
        'Foundational AI curriculum covering symbolic AI, search algorithms, machine learning, computer vision, and natural language processing. Built several award-winning projects in autonomous agents.',
      highlights: ['NLP', 'Computer Vision', 'Autonomous Agents', 'Deep Learning'],
    },
  ],

  // ── Skills ────────────────────────────────────────────────
  skills: [
    {
      category: 'Languages',
      icon: 'Code2',
      items: [
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'R', level: 92, icon: '📊' },
        { name: 'SQL', level: 85, icon: '🗄️' },
        { name: 'TypeScript', level: 72, icon: '💙' },
        { name: 'LaTeX', level: 88, icon: '📄' },
      ],
    },
    {
      category: 'AI / Machine Learning',
      icon: 'Brain',
      items: [
        { name: 'PyTorch', level: 88, icon: '🔥' },
        { name: 'TensorFlow / Keras', level: 82, icon: '🧠' },
        { name: 'scikit-learn', level: 95, icon: '🤖' },
        { name: 'Transformers / HuggingFace', level: 80, icon: '🤗' },
        { name: 'Graph Neural Networks', level: 75, icon: '🕸️' },
        { name: 'LLM Fine-tuning', level: 70, icon: '✨' },
      ],
    },
    {
      category: 'Finance & Risk',
      icon: 'TrendingUp',
      items: [
        { name: 'Credit Risk Modelling', level: 90, icon: '💳' },
        { name: 'Model Validation', level: 88, icon: '✅' },
        { name: 'Market Risk (VaR/ES)', level: 82, icon: '📈' },
        { name: 'Regulatory Frameworks', level: 85, icon: '⚖️' },
        { name: 'Quantitative Finance', level: 83, icon: '🔢' },
      ],
    },
    {
      category: 'Tools & Platforms',
      icon: 'Wrench',
      items: [
        { name: 'Git / GitHub', level: 90, icon: '🐙' },
        { name: 'Docker', level: 72, icon: '🐳' },
        { name: 'Jupyter / Notebooks', level: 95, icon: '📓' },
        { name: 'Azure ML', level: 68, icon: '☁️' },
        { name: 'Tableau', level: 75, icon: '📊' },
        { name: 'Stable Diffusion', level: 80, icon: '🎨' },
      ],
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      id: 'credit-gnns',
      title: 'Graph-Based Credit Risk with GNNs',
      description:
        'MSc thesis project — built a graph neural network that models borrower-counterparty relationships to improve credit default prediction by 12% over traditional logistic regression baselines.',
      longDescription:
        'Traditional credit models treat borrowers as isolated entities. This project constructs a heterogeneous knowledge graph of borrowers, transactions, and collateral assets, then applies a Graph Attention Network (GAT) to propagate risk signals through the network. Evaluated on a synthetic dataset mirroring HKMA stress-test scenarios.',
      image: '/images/projects/gnns.png',
      tags: ['Python', 'PyTorch Geometric', 'Graph Neural Networks', 'Credit Risk', 'Research'],
      github: 'https://github.com/winstonbartlegod',
      demo: '',
      featured: true,
      year: '2023',
    },
    {
      id: 'finbert-sentiment',
      title: 'FinBERT Sentiment for Earnings Calls',
      description:
        'Fine-tuned a FinBERT model on SEC earnings call transcripts to classify forward-looking statements as positive/neutral/negative — achieving 91% accuracy with calibrated uncertainty.',
      longDescription:
        'Earnings calls contain rich qualitative signals that quantitative models miss. This project scrapes and cleans EDGAR filings, segments forward-looking statements, and fine-tunes FinBERT using LoRA adapters for parameter-efficient training. A Platt-scaling layer provides calibrated confidence scores for downstream portfolio applications.',
      image: '/images/projects/finbert.png',
      tags: ['Python', 'HuggingFace', 'NLP', 'FinBERT', 'PEFT / LoRA', 'Sentiment Analysis'],
      github: 'https://github.com/winstonbartlegod',
      demo: '',
      featured: true,
      year: '2023',
    },
    {
      id: 'nft-market-analysis',
      title: 'NFT Market Microstructure Analysis',
      description:
        'Analysed trading patterns across OpenSea and LooksRare to identify wash-trading signals and price manipulation — informing regulatory guidance for Tencent WeChat Pay HK.',
      longDescription:
        'Using on-chain data from The Graph and Etherscan APIs, this project constructs transaction networks and applies anomaly-detection algorithms (Isolation Forest + network centrality measures) to flag suspicious trading clusters. The findings contributed to an internal report on VASP compliance in Hong Kong.',
      image: '/images/projects/nft.png',
      tags: ['Python', 'Web3.py', 'Network Analysis', 'Anomaly Detection', 'Blockchain', 'Regulatory'],
      github: '',
      demo: '',
      featured: true,
      year: '2023',
    },
    {
      id: 'var-backtesting',
      title: 'VaR Backtesting Suite',
      description:
        'An open-source R package for backtesting Value-at-Risk models using Kupiec, Christoffersen, and DQ tests with interactive Shiny dashboards.',
      longDescription:
        'This package implements the three standard VaR backtests (unconditional coverage, conditional coverage, and dynamic quantile) with clean tidy APIs, and includes a Shiny app for interactive exploration of exceedance patterns and traffic-light results.',
      image: '/images/projects/var.png',
      tags: ['R', 'Shiny', 'Risk Management', 'Backtesting', 'Open Source'],
      github: 'https://github.com/winstonbartlegod',
      demo: '',
      featured: false,
      year: '2022',
    },
  ],

  // ── Certifications ────────────────────────────────────────
  certifications: [
    {
      title: 'Neural Networks and Deep Learning',
      issuer: 'Coursera / DeepLearning.AI',
      date: 'Jan 2021',
      url: 'https://www.coursera.org',
      icon: '🧠',
    },
    {
      title: 'Blockchain Fundamentals',
      issuer: 'edX / UC Berkeley',
      date: 'Jan 2021',
      url: 'https://www.edx.org',
      icon: '⛓️',
    },
    {
      title: 'Object-Oriented Programming in R',
      issuer: 'DataCamp',
      date: 'Dec 2020',
      url: 'https://www.datacamp.com',
      icon: '📊',
    },
  ],
} as const;

export type Profile = typeof profile;
export type Experience = (typeof profile.experience)[number];
export type Education = (typeof profile.education)[number];
export type Project = (typeof profile.projects)[number];
