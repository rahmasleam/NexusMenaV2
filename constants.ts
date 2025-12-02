
import { NewsItem, EventItem, PodcastItem, MarketMetric, PartnerItem, NewsletterItem, ResourceItem, IndustryData } from './types';

// ==========================================
// CENTRAL DATA SOURCE
// Update this file to add new links, news, events, etc.
// Dates are automatically handled relative to "today" via getDate()
// ==========================================

// Helper for dynamic dates
const getDate = (offset: number) => {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().split('T')[0];
};

export const TRANSLATIONS = {
  en: {
    nav: {
      latest: 'Latest',
      startups: 'Startups',
      events: 'Events',
      podcasts: 'Podcasts',
      podcastAnalysis: 'Podcast Analysis',
      newsletters: 'Newsletters',
      market: 'Market Analysis',
      industry: 'Industry Analysis',
      partners: 'Partners',
      resources: 'Resources',
      aiAssistant: 'AI Assistant',
      saved: 'Saved Items',
      login: 'Login',
      logout: 'Logout',
      admin: 'Admin Panel'
    },
    common: {
      searchPlaceholder: 'Search...',
      readMore: 'Read Source',
      aiSummary: 'AI Summary',
      aiTranslate: 'Translate to Arabic',
      save: 'Save',
      saved: 'Saved',
      register: 'Register Now',
      listen: 'Listen Episode',
      subscribe: 'Subscribe',
      contact: 'Contact',
      marketInsights: 'AI Market Insights',
      chatTitle: 'Nexus AI Assistant',
      filter: 'Filter',
      apply: 'Apply',
      all: 'All',
      generateAudio: 'Generate Audio',
      playAudio: 'Play Summary'
    },
    sections: {
        latestTitle: 'Global & Egyptian Tech News',
        startupsTitle: 'Startup Ecosystem',
        eventsTitle: 'Tech Events Calendar',
        marketTitle: 'Financial & Market Data',
        podcastsTitle: 'Tech & Business Podcasts',
        newslettersTitle: 'Curated Newsletters',
        partnersTitle: 'Our Partners',
        resourcesTitle: 'Platform Resources & Sources',
        authTitle: 'Welcome to NexusMena',
        aiPageTitle: 'AI Knowledge Assistant'
    }
  },
  ar: {
    nav: {
      latest: 'أحدث الأخبار',
      startups: 'الشركات الناشئة',
      events: 'الفعاليات',
      podcasts: 'بودكاست',
      podcastAnalysis: 'تحليل البودكاست',
      newsletters: 'النشرات البريدية',
      market: 'تحليل السوق',
      industry: 'تحليل القطاعات',
      partners: 'الشركاء',
      resources: 'المصادر',
      aiAssistant: 'المساعد الذكي',
      saved: 'المحفوظات',
      login: 'دخول',
      logout: 'خروج',
      admin: 'لوحة التحكم'
    },
    common: {
      searchPlaceholder: 'بحث...',
      readMore: 'اقرأ المصدر',
      aiSummary: 'ملخص ذكي',
      aiTranslate: 'ترجم للإنجليزية',
      save: 'حفظ',
      saved: 'محفوظ',
      register: 'سجل الآن',
      listen: 'استمع للحلقة',
      subscribe: 'اشترك',
      contact: 'تواصل',
      marketInsights: 'رؤى السوق الذكية',
      chatTitle: 'مساعد نيكسوس الذكي',
      filter: 'تصفية',
      apply: 'تطبيق',
      all: 'الكل',
      generateAudio: 'توليد صوت',
      playAudio: 'تشغيل الملخص'
    },
    sections: {
        latestTitle: 'أخبار التكنولوجيا العالمية والمصرية',
        startupsTitle: 'منظومة الشركات الناشئة',
        eventsTitle: 'تقويم الفعاليات التقنية',
        marketTitle: 'البيانات المالية والسوقية',
        podcastsTitle: 'بودكاست التكنولوجيا والأعمال',
        newslettersTitle: 'نشرات بريدية مختارة',
        partnersTitle: 'شركاؤنا',
        resourcesTitle: 'موارد ومنصات المنصة',
        authTitle: 'مرحباً بك في نيكسوس',
        aiPageTitle: 'المساعد المعرفي الذكي'
    }
  }
};

// RESOURCES - Categorized for Page Distribution
export const RESOURCES: ResourceItem[] = [
  // --- STARTUP SOURCES (Global) ---
  { id: 'r_pb', name: 'PitchBook', url: 'https://pitchbook.com/news', type: 'Startup', description: 'Comprehensive M&A, PE and VC data' },
  { id: 'r_cb', name: 'Crunchbase News', url: 'https://news.crunchbase.com', type: 'Startup', description: 'Data-driven business journalism' },
  { id: 'r_cbi', name: 'CB Insights', url: 'https://www.cbinsights.com/research', type: 'Startup', description: 'Tech market intelligence and reports' },
  { id: 'r_ent_daily', name: 'Daily Enterprise', url: 'https://enterprise.press', type: 'News', description: 'Essential business news for Egypt & Global' },

  // --- STARTUP SOURCES (Egypt/MENA) ---
  { id: 'r_dne', name: 'Daily News Egypt', url: 'https://dailynewsegypt.com/business/tech', type: 'Startup', description: 'Leading English daily in Egypt' },
  { id: 'r_almal', name: 'Al Mal News', url: 'https://almalnews.com/category/technology', type: 'Startup', description: 'Top financial newspaper in Egypt (Arabic)' },
  { id: 'r_wamda', name: 'Wamda', url: 'https://wamda.com', type: 'Startup', description: 'Leading platform for MENA entrepreneurship ecosystem' },
  { id: 'r_mena', name: 'MENAbytes', url: 'https://www.menabytes.com', type: 'Startup', description: 'Tracking startups and VC in the Middle East' },
  { id: 'r_flat6', name: 'Flat6Labs', url: 'https://flat6labs.com', type: 'Startup', description: 'Regional startup accelerator' },
  
  // --- OTHER NEWS ---
  { id: 'r1', name: 'TechCrunch', url: 'https://techcrunch.com', type: 'News', description: 'Top tier global tech news' },
  { id: 'r12', name: 'Business Insider', url: 'https://businessinsider.com', type: 'News', description: 'Global business and tech news' },
  { id: 'r13', name: 'Forbes Entrepreneurs', url: 'https://forbes.com/entrepreneurs', type: 'News', description: 'Leading source for reliable business news' },
  { id: 'r5', name: 'The Verge', url: 'https://theverge.com', type: 'News', description: 'Gadgets, science, and tech culture' },
  { id: 'r14', name: 'Wired', url: 'https://wired.com', type: 'News', description: 'How technology affects culture and politics' },
  
  // Others
  { id: 'r8', name: 'Apple Podcasts', url: 'https://apple.com/podcasts', type: 'Podcast', description: 'Podcast platform' },
  { id: 'r6', name: 'ITIDA', url: 'https://itida.gov.eg', type: 'Other', description: 'Egypt IT Industry Development Agency' },
  { id: 'r4', name: 'RiseUp', url: 'https://riseupsummit.com', type: 'Event', description: 'Largest entrepreneurship summit in MENA' },
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 'n_cz_1',
    title: 'Another 100 million for innovation: Technology Incubation expands support for Czech startups',
    description: 'CzechInvest announces a significant funding boost to support local innovation and technology incubation programs.',
    source: 'CzechInvest',
    url: 'https://czechinvest.gov.cz/en/Homepage/News/November-2025/Another-100-million-for-innovation-Technology-Incubation-expands-support-for-Czech-startups',
    date: '2025-11-15',
    region: 'Global',
    category: 'Startup',
    sector: 'General',
    imageUrl: 'https://picsum.photos/800/400?random=88',
    tags: ['Innovation', 'Funding', 'Incubation']
  },
  {
    id: 'n_wired_1',
    title: 'The Rabbit R1 Review: AI in a Box',
    description: 'Wired reviews the latest dedicated AI hardware device, questioning if it can replace your smartphone apps.',
    source: 'Wired',
    url: 'https://www.wired.com/story/rabbit-r1-review/',
    date: getDate(0),
    region: 'Global',
    category: 'Tech',
    sector: 'AI',
    imageUrl: 'https://picsum.photos/800/400?random=40',
    tags: ['Hardware', 'AI', 'Review']
  },
  {
    id: 'n_tc_1',
    title: 'Stripe valuation stays steady at $65B in latest employee tender offer',
    description: 'TechCrunch reports that the payments giant is providing liquidity to employees without raising new capital.',
    source: 'TechCrunch',
    url: 'https://techcrunch.com/2024/02/14/stripe-valuation-tender-offer/',
    date: getDate(0),
    region: 'Global',
    category: 'Economy',
    sector: 'Fintech',
    imageUrl: 'https://picsum.photos/800/400?random=41',
    tags: ['Fintech', 'Valuation']
  },
  {
    id: 'n_verge_1',
    title: 'Nothing Phone 3 rumors point to a major AI upgrade',
    description: 'The Verge explores leaks suggesting the next Nothing handset will integrate generative AI directly into the OS.',
    source: 'The Verge',
    url: 'https://www.theverge.com/2024/5/nothing-phone-3-ai',
    date: getDate(-1),
    region: 'Global',
    category: 'Tech',
    sector: 'General',
    imageUrl: 'https://picsum.photos/800/400?random=42',
    tags: ['Mobile', 'AI']
  },
  {
    id: 'n_bi_1',
    title: 'Microsoft’s AI push is changing office productivity forever',
    description: 'Business Insider analyzes how Copilot is being adopted in Fortune 500 companies.',
    source: 'Business Insider',
    url: 'https://www.businessinsider.com/microsoft-copilot-office-productivity-change-2024',
    date: getDate(-1),
    region: 'Global',
    category: 'Tech',
    sector: 'SaaS',
    imageUrl: 'https://picsum.photos/800/400?random=43',
    tags: ['Enterprise', 'Microsoft']
  },
  {
    id: 'n1',
    title: 'Egypt’s digital exports reach $6.2 billion in 2024',
    titleAr: 'صادرات مصر الرقمية تصل إلى 6.2 مليار دولار في 2024',
    description: 'The ITIDA report confirms a massive surge in outsourcing and digital services exports, positioning Egypt as a global hub.',
    source: 'Enterprise',
    url: 'https://enterprise.press/stories/2024/01/15/egypt-digital-exports-surge/',
    date: getDate(-3),
    region: 'Egypt',
    category: 'Economy',
    sector: 'General',
    imageUrl: 'https://picsum.photos/800/400?random=1',
    tags: ['Economy', 'ITIDA', 'Outsourcing']
  },
];

export const STARTUP_NEWS: NewsItem[] = [
  // --- GLOBAL SOURCES ---
  {
    id: 's_pitchbook_1',
    title: 'PitchBook Report: Q3 2025 VC Valuations Stabilize',
    description: 'PitchBook releases its latest monitor showing a stabilization in late-stage valuations after a volatile year.',
    source: 'PitchBook',
    url: 'https://pitchbook.com/news',
    date: getDate(0),
    region: 'Global',
    category: 'Startup',
    sector: 'General',
    imageUrl: 'https://picsum.photos/800/400?random=201',
    tags: ['VC', 'Investment', 'Report']
  },
  {
    id: 's_crunchbase_1',
    title: 'Global funding slows but AI startups see 40% increase',
    description: 'Crunchbase News data indicates that while overall market is cooling, Artificial Intelligence remains the hotbed for investor cash.',
    source: 'Crunchbase News',
    url: 'https://news.crunchbase.com',
    date: getDate(0),
    region: 'Global',
    category: 'Startup',
    sector: 'AI',
    imageUrl: 'https://picsum.photos/800/400?random=202',
    tags: ['Funding', 'AI', 'Data']
  },
  {
    id: 's_cbi_1',
    title: 'CB Insights: State of Deep Tech 2025',
    description: 'The definitive report on the future of deep tech, quantum computing, and biotech investments.',
    source: 'CB Insights',
    url: 'https://www.cbinsights.com/research',
    date: getDate(-1),
    region: 'Global',
    category: 'Startup',
    sector: 'Deep Tech',
    imageUrl: 'https://picsum.photos/800/400?random=203',
    tags: ['Deep Tech', 'Research']
  },
  {
    id: 's_enterprise_1',
    title: 'Enterprise: Egypt\'s startup scene defies global downturn',
    description: 'Daily Enterprise reports on the resilience of the local ecosystem with 3 new IPOs planned for 2025.',
    source: 'Daily Enterprise',
    url: 'https://enterprise.press',
    date: getDate(0),
    region: 'Egypt',
    category: 'Startup',
    sector: 'Economy',
    imageUrl: 'https://picsum.photos/800/400?random=204',
    tags: ['Economy', 'IPO']
  },

  // --- EGYPT SOURCES ---
  {
    id: 's_dne_1',
    title: 'Daily News Egypt: Gov\'t launches new $50M fund for Fintech',
    description: 'The Ministry of CIT announces a new investment vehicle targeting early-stage fintech startups in Upper Egypt.',
    source: 'Daily News Egypt',
    url: 'https://dailynewsegypt.com/business/tech',
    date: getDate(0),
    region: 'Egypt',
    category: 'Startup',
    sector: 'Fintech',
    imageUrl: 'https://picsum.photos/800/400?random=205',
    tags: ['Government', 'Fintech', 'Funding']
  },
  {
    id: 's_almal_1',
    title: 'Al Mal News: EGX sees record tech volume in Q3',
    titleAr: 'المال: قطاع التكنولوجيا يقود تداولات البورصة في الربع الثالث',
    description: 'Al Mal reports significant movement in tech stocks listed on the Egyptian Exchange this quarter.',
    source: 'Al Mal News',
    url: 'https://almalnews.com/category/technology',
    date: getDate(-1),
    region: 'Egypt',
    category: 'Economy',
    sector: 'General',
    imageUrl: 'https://picsum.photos/800/400?random=206',
    tags: ['EGX', 'Stock Market']
  },
  {
    id: 's_wamda_1',
    title: 'Saudi Arabia\'s Tamer Group acquires Mumzworld',
    description: 'Wamda covers the major acquisition that is set to dominate the mother and child e-commerce vertical in MENA.',
    source: 'Wamda',
    url: 'https://www.wamda.com/2021/06/tamer-group-acquires-mumzworld',
    date: getDate(0),
    region: 'MENA',
    category: 'Startup',
    sector: 'E-commerce',
    imageUrl: 'https://picsum.photos/800/400?random=50',
    tags: ['Exit', 'Acquisition', 'KSA']
  },
  
  // --- EXISTING/OTHER ---
  {
    id: 's_sg_1',
    title: 'Startup Funding November 2025: Key Highlights, Trends & Insights',
    description: 'A comprehensive look at global startup funding trends, key investment rounds, and market insights for November 2025.',
    source: 'StartupGatha',
    url: 'https://startupgatha.com/startup-funding-november-2025-key-highlights-trends-insights/',
    date: '2025-11-01',
    region: 'Global',
    category: 'Startup',
    sector: 'General',
    imageUrl: 'https://picsum.photos/800/400?random=99',
    tags: ['Funding', 'Trends', 'Insights']
  },
  {
    id: 's_scene_1',
    title: 'Egyptian fashion e-commerce platform "La Reina" raises pre-Series A',
    description: 'StartupScene highlights the funding round led by Algebra Ventures to support local designers.',
    source: 'StartupScene',
    url: 'https://thestartupscene.me/INVESTMENTS/La-Reina-Raises-Pre-Series-A',
    date: getDate(-1),
    region: 'Egypt',
    category: 'Startup',
    sector: 'E-commerce',
    imageUrl: 'https://picsum.photos/800/400?random=52',
    tags: ['Fashion', 'Funding']
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'RiseUp Summit 2024',
    description: 'The largest entrepreneurship event in the Middle East taking place at the Grand Egyptian Museum.',
    location: 'Giza, Egypt',
    startDate: getDate(30),
    endDate: getDate(32),
    registrationLink: 'https://riseupsummit.com',
    isVirtual: false,
    region: 'Egypt',
    source: 'RiseUp',
    url: 'https://riseupsummit.com',
    imageUrl: 'https://picsum.photos/800/400?random=8',
    date: getDate(30),
    type: 'Conference'
  },
  {
    id: 'e2',
    title: 'Web Summit Lisbon',
    description: 'Where the future goes to be born. The premier global tech conference.',
    location: 'Lisbon, Portugal',
    startDate: getDate(60),
    endDate: getDate(63),
    registrationLink: 'https://websummit.com',
    isVirtual: false,
    region: 'Global',
    source: 'Web Summit',
    url: 'https://websummit.com',
    imageUrl: 'https://picsum.photos/800/400?random=9',
    date: getDate(60),
    type: 'Conference'
  },
  {
    id: 'e3',
    title: 'Google I/O Extended Cairo',
    description: 'Local community event discussing the latest announcements from Google I/O.',
    location: 'AUC New Cairo',
    startDate: getDate(5),
    endDate: getDate(5),
    registrationLink: 'https://gdg.community.dev',
    isVirtual: false,
    region: 'Egypt',
    source: 'GDG Cairo',
    url: 'https://gdg.community.dev',
    imageUrl: 'https://picsum.photos/800/400?random=10',
    date: getDate(5),
    type: 'Meetup'
  },
  {
    id: 'e4',
    title: 'AI Hackathon MENA',
    description: '48 hours of coding to solve regional challenges using Gemini.',
    location: 'Online',
    startDate: getDate(10),
    endDate: getDate(12),
    registrationLink: 'https://hackathon.mena',
    isVirtual: true,
    region: 'MENA',
    source: 'Devpost',
    url: 'https://devpost.com',
    imageUrl: 'https://picsum.photos/800/400?random=25',
    date: getDate(10),
    type: 'Hackathon'
  }
];

export const PODCASTS: PodcastItem[] = [
  // 1. Business Made Easy
  {
    id: 'p_req_1',
    title: 'Business Made Easy',
    description: 'Strategies for easy business growth and simplified concepts for entrepreneurs. Hosted by Amy Porterfield.',
    duration: '40 min',
    region: 'Global',
    source: 'Spotify',
    url: 'https://open.spotify.com/show/3ULANVC0n6XfXDYqn9QY3Q',
    channelUrl: 'https://open.spotify.com/show/3ULANVC0n6XfXDYqn9QY3Q',
    spotifyUrl: 'https://open.spotify.com/show/3ULANVC0n6XfXDYqn9QY3Q',
    appleUrl: 'https://podcasts.apple.com/us/podcast/bme-podcast-business-made-easy/id1445501936',
    date: getDate(-1),
    imageUrl: 'https://picsum.photos/800/400?random=100',
    summaryPoints: ['Strategy', 'Marketing', 'Growth'],
    language: 'en',
    topic: 'Business',
    latestEpisodeTitle: 'How to Scale Your Business Without Burning Out',
    recentEpisodes: [
        { title: 'Email Marketing 101', date: getDate(-5), duration: '35 min', url: 'https://open.spotify.com/show/3ULANVC0n6XfXDYqn9QY3Q' },
        { title: 'Course Creation Secrets', date: getDate(-12), duration: '42 min', url: 'https://open.spotify.com/show/3ULANVC0n6XfXDYqn9QY3Q' }
    ]
  },
  // 2. 7aki Business
  {
    id: 'p_req_2',
    title: '7aki Business - حكي بيزنس',
    titleAr: 'حكي بيزنس',
    description: 'In-depth conversations with business leaders in the MENA region about challenges and opportunities.',
    duration: '50 min',
    region: 'MENA',
    source: 'YouTube',
    url: 'https://www.youtube.com/@7akiBusiness',
    channelUrl: 'https://www.youtube.com/@7akiBusiness',
    youtubeUrl: 'https://www.youtube.com/@7akiBusiness',
    spotifyUrl: 'https://open.spotify.com/show/3fdkR33kideFoyunaAtylt',
    anghamiUrl: 'https://play.anghami.com/podcast/1038691248',
    date: getDate(-2),
    imageUrl: 'https://picsum.photos/800/400?random=101',
    summaryPoints: ['MENA Market', 'Startup Stories', 'Scale-ups'],
    language: 'ar',
    topic: 'Entrepreneurship',
    latestEpisodeTitle: 'The Future of E-commerce in Saudi Arabia',
    recentEpisodes: [
        { title: 'Interview with Careem Co-founder', date: getDate(-7), duration: '55 min', url: 'https://www.youtube.com/watch?v=example1' },
        { title: 'Fintech Regulations in Egypt', date: getDate(-14), duration: '48 min', url: 'https://www.youtube.com/watch?v=example2' }
    ]
  },
  // 3. This Week in Startups
  {
    id: 'p_req_3',
    title: 'This Week in Startups',
    description: 'Jason Calacanis and Molly Wood cover the latest in tech, entrepreneurship, and VC news.',
    duration: '60 min',
    region: 'Global',
    source: 'YouTube',
    url: 'https://www.youtube.com/c/thisweekin',
    channelUrl: 'https://www.youtube.com/c/thisweekin',
    youtubeUrl: 'https://www.youtube.com/c/thisweekin',
    spotifyUrl: 'https://open.spotify.com/show/6ULQ0ewYf5zmsDgBchlkr9',
    date: getDate(0),
    imageUrl: 'https://picsum.photos/800/400?random=102',
    summaryPoints: ['Silicon Valley', 'Investment', 'Tech News', 'AI'],
    language: 'en',
    topic: 'Startup',
    latestEpisodeTitle: 'E1002: AI Regulation & The Next Big Thing',
    recentEpisodes: [
        { title: 'E1001: Interview with Sam Altman', date: getDate(-2), duration: '70 min', url: 'https://www.youtube.com/c/thisweekin' },
        { title: 'E1000: 10 Years of TWiS', date: getDate(-5), duration: '90 min', url: 'https://www.youtube.com/c/thisweekin' }
    ]
  },
  // 4. The Diary Of A CEO
  {
    id: 'p_req_4',
    title: 'The Diary Of A CEO',
    description: 'Unfiltered conversations with the most influential people in the world, hosted by Steven Bartlett.',
    duration: '75 min',
    region: 'Global',
    source: 'YouTube',
    url: 'https://www.youtube.com/@TheDiaryOfACEO',
    channelUrl: 'https://www.youtube.com/@TheDiaryOfACEO',
    youtubeUrl: 'https://www.youtube.com/@TheDiaryOfACEO',
    spotifyUrl: 'https://open.spotify.com/show/7iQXmUT7XGuZSzAMjoNWlX',
    date: getDate(-3),
    imageUrl: 'https://picsum.photos/800/400?random=103',
    summaryPoints: ['Leadership', 'Mental Health', 'Success', 'Business'],
    language: 'en',
    topic: 'Business',
    latestEpisodeTitle: 'How to Master Your Mind and Emotions',
    recentEpisodes: [
        { title: 'The Science of Sleep', date: getDate(-6), duration: '80 min', url: 'https://www.youtube.com/@TheDiaryOfACEO' },
        { title: 'Billionaire Mindset', date: getDate(-10), duration: '65 min', url: 'https://www.youtube.com/@TheDiaryOfACEO' }
    ]
  },
  // 5. Startup Sync Podcast
  {
    id: 'p_req_5',
    title: 'Startup Sync Podcast',
    description: 'Synchronizing you with the latest startup ecosystem pulses and founder stories.',
    duration: '35 min',
    region: 'Global',
    source: 'YouTube',
    url: 'https://www.youtube.com/@StartupSyncPodcast',
    channelUrl: 'https://www.youtube.com/@StartupSyncPodcast',
    youtubeUrl: 'https://www.youtube.com/@StartupSyncPodcast',
    date: getDate(-4),
    imageUrl: 'https://picsum.photos/800/400?random=104',
    summaryPoints: ['Ecosystem', 'Founders', 'Sync'],
    language: 'en',
    topic: 'Startup',
    latestEpisodeTitle: 'Navigating the Funding Winter',
    recentEpisodes: [
        { title: 'Bootstrapping 101', date: getDate(-8), duration: '30 min', url: 'https://www.youtube.com/@StartupSyncPodcast' }
    ]
  },
  // 6. The GaryVee Audio Experience
  {
    id: 'p_req_6',
    title: 'The GaryVee Audio Experience',
    description: 'Keynotes, interviews, and fireside chats from entrepreneur Gary Vaynerchuk.',
    duration: '30 min',
    region: 'Global',
    source: 'Spotify',
    url: 'https://open.spotify.com/show/6iedJ7xZQQsYIvuhfcsax0',
    channelUrl: 'https://open.spotify.com/show/6iedJ7xZQQsYIvuhfcsax0',
    spotifyUrl: 'https://open.spotify.com/show/6iedJ7xZQQsYIvuhfcsax0',
    date: getDate(-5),
    imageUrl: 'https://picsum.photos/800/400?random=105',
    summaryPoints: ['Marketing', 'Social Media', 'Hustle', 'Mindset'],
    language: 'en',
    topic: 'Entrepreneurship',
    latestEpisodeTitle: 'The Importance of Patience in Business',
    recentEpisodes: [
        { title: 'DailyVee 600', date: getDate(-2), duration: '15 min', url: 'https://open.spotify.com/show/6iedJ7xZQQsYIvuhfcsax0' }
    ]
  },
  // 7. Masters of Scale
  {
    id: 'p_req_7',
    title: 'Masters of Scale',
    description: 'Legendary Reid Hoffman tests his theories on how businesses scale.',
    duration: '45 min',
    region: 'Global',
    source: 'Spotify',
    url: 'https://open.spotify.com/show/7CZAY2rPWgJelEDjoLaDOv',
    channelUrl: 'https://open.spotify.com/show/7CZAY2rPWgJelEDjoLaDOv',
    spotifyUrl: 'https://open.spotify.com/show/7CZAY2rPWgJelEDjoLaDOv',
    date: getDate(-2),
    imageUrl: 'https://picsum.photos/800/400?random=106',
    summaryPoints: ['Scaling', 'Management', 'Strategy', 'VC'],
    language: 'en',
    topic: 'Business',
    latestEpisodeTitle: 'Airbnb\'s Brian Chesky on Design-Led Growth',
    recentEpisodes: [
        { title: 'Bill Gates on AI', date: getDate(-9), duration: '50 min', url: 'https://open.spotify.com/show/7CZAY2rPWgJelEDjoLaDOv' }
    ]
  },
  // 8. Startup Hustle (Highlights)
  {
    id: 'p_req_8',
    title: 'Startup Hustle',
    description: 'Real stories from real entrepreneurs building real businesses. Daily episodes.',
    duration: '25 min',
    region: 'Global',
    source: 'YouTube',
    url: 'https://www.youtube.com/playlist?list=PLeNNUmE-BlnE5GVCM_aZtWCLzCzHYA-ho',
    channelUrl: 'https://www.youtube.com/playlist?list=PLeNNUmE-BlnE5GVCM_aZtWCLzCzHYA-ho',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLeNNUmE-BlnE5GVCM_aZtWCLzCzHYA-ho',
    date: getDate(-6),
    imageUrl: 'https://picsum.photos/800/400?random=107',
    summaryPoints: ['Hustle', 'Real Stories', 'Tactics'],
    language: 'en',
    topic: 'Startup',
    latestEpisodeTitle: 'Bootstrapping vs Venture Capital',
    recentEpisodes: [
        { title: 'Hiring your first employee', date: getDate(-10), duration: '20 min', url: 'https://www.youtube.com/playlist?list=PLeNNUmE-BlnE5GVCM_aZtWCLzCzHYA-ho' }
    ]
  },
];

export const NEWSLETTERS: NewsletterItem[] = [
  {
    id: 'nl1',
    title: 'TLDR Tech',
    description: 'Keep up with tech in 5 minutes. The most important stories in tech, science, and coding.',
    source: 'TLDR',
    url: 'https://tldr.tech',
    date: getDate(0),
    region: 'Global',
    imageUrl: 'https://picsum.photos/800/400?random=28',
    frequency: 'Daily',
    subscribeLink: 'https://tldr.tech'
  },
  {
    id: 'nl2',
    title: 'Enterprise Egypt',
    description: 'The essential morning read for business and finance in Egypt.',
    source: 'Enterprise',
    url: 'https://enterprise.press',
    date: getDate(0),
    region: 'Egypt',
    imageUrl: 'https://picsum.photos/800/400?random=29',
    frequency: 'Daily',
    subscribeLink: 'https://enterprise.press/subscribe'
  },
  {
    id: 'nl3',
    title: 'The Hustle',
    description: 'Business and tech news that is actually enjoyable to read.',
    source: 'The Hustle',
    url: 'https://thehustle.co',
    date: getDate(0),
    region: 'Global',
    imageUrl: 'https://picsum.photos/800/400?random=30',
    frequency: 'Daily',
    subscribeLink: 'https://thehustle.co/join'
  }
];

export const MARKET_DATA_INDICES: MarketMetric[] = [
  { name: 'EGX 30', value: 28500.45, change: 1.2, trend: 'up', currency: 'pts', type: 'Index' },
  { name: 'NASDAQ', value: 16340.20, change: 0.8, trend: 'up', currency: 'USD', type: 'Index' },
  { name: 'S&P 500', value: 5200.10, change: 0.3, trend: 'up', currency: 'USD', type: 'Index' },
  { name: 'Tadawul', value: 12500.00, change: -0.2, trend: 'down', currency: 'SAR', type: 'Index' }
];

export const MARKET_DATA_CRYPTO: MarketMetric[] = [
  { name: 'Bitcoin', value: 64200.00, change: -1.5, trend: 'down', currency: 'USD', type: 'Crypto' },
  { name: 'Ethereum', value: 3200.50, change: 0.5, trend: 'up', currency: 'USD', type: 'Crypto' },
  { name: 'Solana', value: 145.20, change: 2.1, trend: 'up', currency: 'USD', type: 'Crypto' }
];

export const MARKET_DATA_CURRENCY: MarketMetric[] = [
  { name: 'USD/EGP', value: 47.85, change: -0.1, trend: 'neutral', currency: 'EGP', type: 'Currency' },
  { name: 'EUR/EGP', value: 51.20, change: 0.2, trend: 'up', currency: 'EGP', type: 'Currency' },
  { name: 'SAR/EGP', value: 12.75, change: 0.0, trend: 'neutral', currency: 'EGP', type: 'Currency' }
];

export const PARTNERS: PartnerItem[] = [
  { 
    id: 'pt1', 
    name: 'ITIDA', 
    logo: 'https://picsum.photos/200/200?random=20', 
    website: 'https://itida.gov.eg', 
    type: 'Egypt',
    description: 'Information Technology Industry Development Agency',
    contactEmail: 'info@itida.gov.eg',
    services: ['Grants', 'Training', 'Export Support']
  },
  { 
    id: 'pt2', 
    name: 'TechCrunch', 
    logo: 'https://picsum.photos/200/200?random=21', 
    website: 'https://techcrunch.com', 
    type: 'Global',
    description: 'Leading technology media property, dedicated to obsessively profiling startups.',
    contactEmail: 'partners@techcrunch.com',
    services: ['Media Coverage', 'Events', 'Advertising']
  },
  { 
    id: 'pt3', 
    name: 'Flat6Labs', 
    logo: 'https://picsum.photos/200/200?random=22', 
    website: 'https://flat6labs.com', 
    type: 'Egypt',
    description: 'MENA’s leading seed and early stage venture capital firm.',
    contactEmail: 'cairo@flat6labs.com',
    services: ['Investment', 'Mentorship', 'Office Space']
  },
  { 
    id: 'pt4', 
    name: 'Plug and Play', 
    logo: 'https://picsum.photos/200/200?random=23', 
    website: 'https://plugandplaytechcenter.com', 
    type: 'Global',
    description: 'The ultimate innovation platform, connecting startups to corporations.',
    contactEmail: 'egypt@pnptc.com',
    services: ['Corporate Innovation', 'Acceleration', 'Investment']
  },
];

export const INDUSTRY_DATA: IndustryData = {
    sectors: [
        { name: 'AI & Machine Learning', growth: 24.5, companies: 120, investment: 850, color: '#6366f1', source: 'Gartner', url: 'https://www.gartner.com/en/industries/high-tech', lastUpdated: '2025-10-15' },
        { name: 'Fintech', growth: 18.2, companies: 350, investment: 1200, color: '#10b981', source: 'CB Insights', url: 'https://www.cbinsights.com/research/report/fintech-trends-2025/', lastUpdated: '2025-11-01' },
        { name: 'Deep Tech', growth: 31.0, companies: 45, investment: 400, color: '#ec4899', source: 'Wamda', url: 'https://wamda.com', lastUpdated: '2025-11-10' },
        { name: 'Proptech', growth: 12.4, companies: 85, investment: 250, color: '#f59e0b', source: 'Magnitt', url: 'https://magnitt.com', lastUpdated: '2025-09-20' },
        { name: 'E-commerce', growth: 8.5, companies: 500, investment: 900, color: '#3b82f6', source: 'eMarketer', url: 'https://www.emarketer.com', lastUpdated: '2025-11-05' }
    ],
    marketSizing: [
        { name: 'TAM', value: 50, color: '#e2e8f0', label: '$50B Global Potential', source: 'Statista', url: 'https://www.statista.com' },
        { name: 'SAM', value: 20, color: '#94a3b8', label: '$20B MENA Market', source: 'Statista', url: 'https://www.statista.com' },
        { name: 'SOM', value: 5, color: '#0ea5e9', label: '$5B Target Share', source: 'Statista', url: 'https://www.statista.com' },
    ],
    growthForecast: [
        { year: '2023', value: 1.2 },
        { year: '2024', value: 1.5 },
        { year: '2025', value: 2.1 },
        { year: '2026', value: 2.8 },
        { year: '2027', value: 3.9 },
    ],
    competitors: [
        { name: 'Fawry', share: 35, type: 'Leader', strength: 'Distribution Network', source: 'EGX Reports', url: 'https://www.egx.com.eg' },
        { name: 'Paymob', share: 20, type: 'Challenger', strength: 'Tech Stack', source: 'Crunchbase', url: 'https://www.crunchbase.com' },
        { name: 'InstaPay', share: 15, type: 'Disruptor', strength: 'UX/Speed', source: 'CBE', url: 'https://www.cbe.org.eg' },
        { name: 'Others', share: 30, type: 'Fragmented', strength: 'Niche Markets', source: 'Market Research', url: 'https://example.com' }
    ]
};
