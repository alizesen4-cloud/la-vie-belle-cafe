import { useEffect, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Coffee,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Truck,
  X,
} from 'lucide-react';

type Language = 'en' | 'ar';

type Copy = {
  nav: {
    home: string;
    story: string;
    menu: string;
    gallery: string;
    visit: string;
    viewMenu: string;
    visitCta: string;
    language: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctaMenu: string;
    ctaVisit: string;
    imageAlt: string;
  };
  story: { eyebrow: string; title: string; body: string; imageAlt: string; offerings: string[] };
  menu: {
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
    contact: string;
    browse: string;
    selected: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
    open: string;
    close: string;
    previous: string;
    next: string;
    keyboard: string;
  };
  instagram: { eyebrow: string; title: string; body: string; link: string };
  visit: {
    eyebrow: string;
    title: string;
    body: string;
    address: string;
    hours: string;
    hoursDetails: string;
    friday: string;
    phone: string;
    services: string;
    map: string;
    directions: string;
    whatsapp: string;
    visitImageAlt: string;
  };
  footer: { note: string; toTop: string; addressLabel: string; hoursLabel: string; friday: string; copyright: string };
};

const content: Record<Language, Copy> = {
  en: {
    nav: {
      home: 'Home',
      story: 'Our Story',
      menu: 'Menu',
      gallery: 'Gallery',
      visit: 'Visit Us',
      viewMenu: 'View Menu',
      visitCta: 'Find us',
      language: 'العربية',
      openMenu: 'Open navigation',
      closeMenu: 'Close navigation',
    },
    hero: {
      eyebrow: 'A cafe & bakery in Jubail',
      title: 'Life is beautiful. Take a moment to enjoy it.',
      description: 'A welcoming room for carefully made coffee, good food and the small pauses that make a day feel better.',
      ctaMenu: 'Explore our menu',
      ctaVisit: 'Find our cafe',
      imageAlt: 'The bright interior of La Vie Belle Cafe in Jubail',
    },
    story: {
      eyebrow: 'A place to pause',
      title: 'A little place to feel at ease.',
      body: 'La Vie Belle is a welcoming cafe and bakery in Jubail City Center — a place to settle in with a book, meet someone for coffee or take something lovely with you.',
      imageAlt: 'Seating and illustrated wall inside La Vie Belle Cafe',
      offerings: ['Outdoor seating', 'Books available for reading', 'Dine-in & takeaway', 'No-contact delivery'],
    },
    menu: {
      eyebrow: 'Made to be discovered',
      title: 'Something for the moment.',
      intro: 'Browse the categories below for a visual taste of the cafe. The current menu is best discovered in person.',
      note: 'Selections and availability can change. Contact the cafe for the latest menu.',
      contact: 'Call the cafe',
      browse: 'Browse category',
      selected: 'Selected category',
    },
    gallery: {
      eyebrow: 'A glimpse of the place',
      title: 'Room for a slower moment.',
      intro: 'Real corners, tables and little details from La Vie Belle Cafe & Bakery.',
      open: 'Open gallery image',
      close: 'Close gallery image',
      previous: 'Previous image',
      next: 'Next image',
      keyboard: 'Use arrow keys to browse · Escape to close',
    },
    instagram: { eyebrow: 'Follow along', title: 'A little more, on Instagram.', body: 'See the latest moments from La Vie Belle Cafe.', link: 'Visit Instagram' },
    visit: {
      eyebrow: 'Come as you are',
      title: 'We’ll leave a little space for you.',
      body: 'Find us in Jubail City Center. We look forward to welcoming you.',
      address: 'Address',
      hours: 'Hours',
      hoursDetails: 'Saturday–Thursday · 7:00 AM–10:00 PM',
      friday: 'Friday hours have not been verified.',
      phone: 'Phone',
      services: 'At the cafe',
      map: 'Open directions',
      directions: 'Directions',
      whatsapp: 'WhatsApp',
      visitImageAlt: 'Outdoor seating at La Vie Belle Cafe',
    },
    footer: {
      note: 'A cafe & bakery in Jubail, Saudi Arabia',
      toTop: 'Back to top',
      addressLabel: 'Address',
      hoursLabel: 'Hours',
      friday: 'Friday hours have not been verified.',
      copyright: '© La Vie Belle Cafe & Bakery. All rights reserved.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      story: 'قصتنا',
      menu: 'القائمة',
      gallery: 'معرض الصور',
      visit: 'زورونا',
      viewMenu: 'عرض القائمة',
      visitCta: 'اعثر علينا',
      language: 'English',
      openMenu: 'افتح قائمة التنقل',
      closeMenu: 'أغلق قائمة التنقل',
    },
    hero: {
      eyebrow: 'مقهى ومخبز في الجبيل',
      title: 'الحياة جميلة. خذ لحظة واستمتع بها.',
      description: 'مساحة ترحّب بك لقهوة تُحضّر بعناية، وطعام طيب، ولحظات صغيرة تجعل اليوم أجمل.',
      ctaMenu: 'استكشف قائمتنا',
      ctaVisit: 'اعثر على مقهانا',
      imageAlt: 'الداخل المشرق لمقهى لا في بيل في الجبيل',
    },
    story: {
      eyebrow: 'مكان للراحة',
      title: 'مكان صغير تشعر فيه بالراحة.',
      body: 'لا في بيل مقهى ومخبز مرحّب في مركز مدينة الجبيل؛ مكان للجلوس مع كتاب، أو لقاء شخص عزيز، أو أخذ شيء جميل معك.',
      imageAlt: 'جلسات وجدار مرسوم داخل مقهى لا في بيل',
      offerings: ['جلسات خارجية', 'كتب متاحة للقراءة', 'تناول الطعام أو الاستلام', 'توصيل دون تلامس'],
    },
    menu: {
      eyebrow: 'اكتشف ما يناسب لحظتك',
      title: 'شيء يناسب هذه اللحظة.',
      intro: 'تصفّح الفئات أدناه لتأخذ لمحة بصرية عن المقهى. أفضل طريقة لاكتشاف القائمة الحالية هي زيارتنا.',
      note: 'قد تتغير الأصناف والتوفر. تواصل معنا لمعرفة القائمة الأحدث.',
      contact: 'اتصل بالمقهى',
      browse: 'تصفح الفئة',
      selected: 'الفئة المختارة',
    },
    gallery: {
      eyebrow: 'لمحة عن المكان',
      title: 'مساحة للحظات أكثر هدوءاً.',
      intro: 'زوايا وطاولات وتفاصيل صغيرة حقيقية من مقهى ومخبز لا في بيل.',
      open: 'افتح صورة المعرض',
      close: 'أغلق صورة المعرض',
      previous: 'الصورة السابقة',
      next: 'الصورة التالية',
      keyboard: 'استخدم الأسهم للتنقل · Escape للإغلاق',
    },
    instagram: { eyebrow: 'تابعونا', title: 'المزيد من لحظاتنا على إنستغرام.', body: 'شاهدوا أحدث لحظات مقهى لا في بيل.', link: 'زيارة إنستغرام' },
    visit: {
      eyebrow: 'أهلاً بكم',
      title: 'سنترك لكم مساحة صغيرة.',
      body: 'اعثروا علينا في مركز مدينة الجبيل. يسعدنا استقبالكم.',
      address: 'العنوان',
      hours: 'ساعات العمل',
      hoursDetails: 'السبت–الخميس · ٧:٠٠ صباحاً–١٠:٠٠ مساءً',
      friday: 'لم يتم التحقق من ساعات يوم الجمعة.',
      phone: 'الهاتف',
      services: 'في المقهى',
      map: 'افتح الاتجاهات',
      directions: 'الاتجاهات',
      whatsapp: 'واتساب',
      visitImageAlt: 'جلسات خارجية في مقهى لا في بيل',
    },
    footer: {
      note: 'مقهى ومخبز في الجبيل، المملكة العربية السعودية',
      toTop: 'العودة إلى الأعلى',
      addressLabel: 'العنوان',
      hoursLabel: 'ساعات العمل',
      friday: 'لم يتم التحقق من ساعات يوم الجمعة.',
      copyright: '© La Vie Belle Cafe & Bakery. جميع الحقوق محفوظة.',
    },
  },
};

const business = {
  name: 'La Vie Belle Cafe & Bakery',
  address: ['7502 Al Madinah Al Mounawwarah', 'Jubail City Center, 3863', 'Al Jubail 35514', 'Saudi Arabia'],
  phoneDisplay: '+966 53 773 3332',
  phoneHref: 'tel:+966537733332',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=La+Vie+Belle+Cafe+Jubail+Saudi+Arabia',
  whatsapp: 'https://wa.me/966537733332',
  instagram: 'https://www.instagram.com/lvb.cafe/',
};

const menuCategories = [
  { en: 'Coffee', ar: 'القهوة', image: '/menu_images/6.png', alt: 'Coffee photograph', note: 'A quiet coffee moment from the cafe.' },
  { en: 'Specialty Drinks', ar: 'مشروبات خاصة', image: '/menu_images/11.png', alt: 'Specialty drink photographs', note: 'A look at the cafe’s drink rituals.' },
  { en: 'Cold Beverages', ar: 'مشروبات باردة', image: '/menu_images/8.png', alt: 'Cold beverage photograph', note: 'A refreshing detail from the menu collection.' },
  { en: 'Bakery', ar: 'المخبوزات', image: '/menu_images/12.png', alt: 'Bakery photograph', note: 'A warm bakery detail, photographed at the cafe.' },
  { en: 'Food & Desserts', ar: 'الأطعمة والحلويات', image: '/menu_images/7.png', alt: 'Dessert photograph', note: 'A sweet moment from the cafe table.' },
];

const galleryItems = [
  { src: '/ambiance/2.png', en: 'The cafe interior', ar: 'داخل المقهى', alt: 'Wide view of the La Vie Belle cafe interior' },
  { src: '/ambiance/3.png', en: 'A seat in the sun', ar: 'جلسة في الشمس', alt: 'Outdoor seating area at La Vie Belle Cafe' },
  { src: '/ambiance/5.png', en: 'A welcoming corner', ar: 'زاوية مرحّبة', alt: 'Interior seating and illustrated wall at La Vie Belle Cafe' },
  { src: '/ambiance/7.png', en: 'Outdoor lounge', ar: 'جلسة خارجية', alt: 'Outdoor lounge seating at La Vie Belle Cafe' },
  { src: '/ambiance/1.png', en: 'The counter and illustrated wall', ar: 'الكاونتر والجدار المرسوم', alt: 'Cafe counter and illustrated wall at La Vie Belle Cafe' },
  { src: '/menu_images/6.png', en: 'A coffee detail', ar: 'تفاصيل القهوة', alt: 'Latte art photographed at La Vie Belle Cafe' },
];

const experienceIcons = [<ArrowDownRight size={19} />, <BookOpen size={19} />, <Coffee size={19} />, <Truck size={19} />];

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const touchStart = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const galleryTriggerRef = useRef<HTMLElement | null>(null);
  const t = content[language];
  const isArabic = language === 'ar';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [language, isArabic]);

  useEffect(() => {
    if (activeGallery === null && galleryTriggerRef.current) {
      galleryTriggerRef.current.focus();
      galleryTriggerRef.current = null;
    }
  }, [activeGallery]);

  useEffect(() => {
    if (activeGallery === null) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveGallery(null);
      if (event.key === 'ArrowRight') setActiveGallery((current) => current === null ? null : (current + 1) % galleryItems.length);
      if (event.key === 'ArrowLeft') setActiveGallery((current) => current === null ? null : (current - 1 + galleryItems.length) % galleryItems.length);
      if (event.key === 'Tab') {
        const controls = document.querySelectorAll<HTMLElement>('.lightbox button');
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeGallery]);

  const toggleLanguage = () => setLanguage((current) => current === 'en' ? 'ar' : 'en');
  const closeMobile = () => setMobileOpen(false);
  const galleryStep = (direction: number) => {
    setActiveGallery((current) => current === null ? null : (current + direction + galleryItems.length) % galleryItems.length);
  };
  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#story', label: t.nav.story },
    { href: '#menu', label: t.nav.menu },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#visit', label: t.nav.visit },
  ];
  const selectedCategory = menuCategories[activeCategory];

  return (
    <div className="site-shell" dir={isArabic ? 'rtl' : 'ltr'}>
      <a className="skip-link" href="#main">{isArabic ? 'انتقل إلى المحتوى' : 'Skip to content'}</a>
      <header className="topbar">
        <div className="nav-inner">
          <a className="brand" href="#home" aria-label={business.name}>
            <span className="brand-mark" aria-hidden="true">v</span>
            <span className="brand-name">La Vie Belle<small>Cafe &amp; Bakery</small></span>
          </a>
          <nav className="desktop-nav" aria-label={isArabic ? 'التنقل الرئيسي' : 'Main navigation'}>
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="nav-actions">
            <button className="lang-button" type="button" onClick={toggleLanguage} aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}>{t.nav.language}</button>
            <a className="nav-menu" href="#menu">{t.nav.viewMenu}</a>
            <a className="nav-visit" href="#visit">{t.nav.visitCta}</a>
            <button className="menu-button" type="button" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}>
              {mobileOpen ? <X size={21} /> : <MenuIcon size={21} />}
            </button>
          </div>
        </div>
        {mobileOpen && <nav className="mobile-nav" aria-label={isArabic ? 'التنقل الرئيسي' : 'Main navigation'}>
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMobile}>{item.label}</a>)}
          <a className="mobile-action-menu" href="#menu" onClick={closeMobile}>{t.nav.viewMenu}</a>
          <a href="#visit" onClick={closeMobile}>{t.nav.visitCta}</a>
        </nav>}
      </header>

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1 id="hero-title">{t.hero.title}</h1>
            <p>{t.hero.description}</p>
            <div className="hero-actions">
              <a className="hero-cta hero-cta-primary" href="#menu">{t.hero.ctaMenu}<span aria-hidden="true">{isArabic ? '←' : '→'}</span></a>
              <a className="hero-cta hero-cta-secondary" href="#visit">{t.hero.ctaVisit}<span aria-hidden="true">{isArabic ? '←' : '→'}</span></a>
            </div>
            <span className="hero-index">JUBAIL · 01</span>
          </div>
          <div className="hero-art">
            <img src="/ambiance/2.png" alt={t.hero.imageAlt} fetchPriority="high" />
            <span className="hero-photo-note">La Vie Belle · Jubail</span>
          </div>
        </section>

        <section className="section-wrap section-pad" id="story" aria-labelledby="story-title">
          <div className="intro">
            <div className="story-media-wrap"><span className="eyebrow">{t.story.eyebrow}</span><div className="intro-mark" aria-hidden="true">v.</div><img className="story-media" src="/ambiance/5.png" alt={t.story.imageAlt} loading="lazy" /></div>
            <div className="intro-copy">
              <h2 id="story-title">{t.story.title}</h2>
              <p>{t.story.body}</p>
              <a className="text-link" href="#visit">{t.nav.visit}<span aria-hidden="true">{isArabic ? '←' : '→'}</span></a>
            </div>
          </div>
          <div className="experience" aria-label={isArabic ? 'تجارب متاحة' : 'Available experiences'}>
            {t.story.offerings.map((offering, index) => (
              <div className="experience-item" key={offering}><span className="experience-icon" aria-hidden="true">{experienceIcons[index]}</span><span>{offering}</span></div>
            ))}
          </div>
        </section>

        <section className="menu-section section-pad" id="menu" aria-labelledby="menu-title">
          <div className="section-wrap">
            <div className="menu-head">
              <div><span className="eyebrow">{t.menu.eyebrow}</span><h2 id="menu-title">{t.menu.title}</h2></div>
              <p>{t.menu.intro}</p>
            </div>
            <div className="menu-browser">
              <div className="menu-list" role="tablist" aria-label={isArabic ? 'فئات القائمة' : 'Menu categories'}>
                {menuCategories.map((category, index) => (
                  <button className={`menu-row ${activeCategory === index ? 'is-active' : ''}`} key={category.en} type="button" role="tab" aria-selected={activeCategory === index} aria-controls={`menu-panel-${index}`} onClick={() => setActiveCategory(index)}>
                    <span className="menu-number">0{index + 1}</span>
                    <span className="menu-row-title">{isArabic ? category.ar : category.en}</span>
                    <span className="menu-arrow" aria-hidden="true">{activeCategory === index ? '↘' : isArabic ? '←' : '↗'}</span>
                  </button>
                ))}
              </div>
              <div className="menu-panel" id={`menu-panel-${activeCategory}`} role="tabpanel" aria-live="polite">
                <div className="menu-panel-image"><img src={selectedCategory.image} alt={selectedCategory.alt} loading="lazy" /></div>
                <div className="menu-panel-copy">
                  <span className="eyebrow">{t.menu.selected}</span>
                  <h3>{isArabic ? selectedCategory.ar : selectedCategory.en}</h3>
                  <p>{selectedCategory.note}</p>
                  <span className="menu-panel-hint">{t.menu.browse} · {activeCategory + 1}/{menuCategories.length}</span>
                </div>
              </div>
            </div>
            <div className="menu-note">
              <p>{t.menu.note}</p>
              <a className="button-dark" href={business.phoneHref}><Phone size={14} aria-hidden="true" />{t.menu.contact}</a>
            </div>
          </div>
        </section>

        <section className="gallery-section section-wrap section-pad" id="gallery" aria-labelledby="gallery-title">
          <div className="gallery-heading">
            <div><span className="eyebrow">{t.gallery.eyebrow}</span><h2 id="gallery-title">{t.gallery.title}</h2></div>
            <p>{t.gallery.intro}</p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item, index) => <button className="gallery-tile" key={item.src} type="button" onClick={(event) => { galleryTriggerRef.current = event.currentTarget; setActiveGallery(index); }} aria-label={`${t.gallery.open}: ${isArabic ? item.ar : item.en}`}>
              <img className="gallery-image" src={item.src} alt={item.alt} loading="lazy" />
              <span className="gallery-label">{isArabic ? item.ar : item.en}</span>
              <span className="gallery-open" aria-hidden="true"><ArrowUpRight size={17} /></span>
            </button>)}
          </div>
        </section>

        <section className="instagram-band" aria-labelledby="instagram-title">
          <div className="section-wrap instagram-inner">
            <div><span className="eyebrow">{t.instagram.eyebrow}</span><h2 id="instagram-title">{t.instagram.title}</h2><p>{t.instagram.body}</p></div>
            <a className="instagram-link" href={business.instagram} target="_blank" rel="noopener noreferrer">{t.instagram.link}<ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="visit-section section-wrap section-pad" id="visit" aria-labelledby="visit-title">
          <div className="visit-intro">
            <span className="eyebrow">{t.visit.eyebrow}</span>
            <h2 id="visit-title">{t.visit.title}</h2>
            <p>{t.visit.body}</p>
            <div className="visit-actions">
              <a className="button-dark" href={business.maps} target="_blank" rel="noopener noreferrer"><MapPin size={14} aria-hidden="true" />{t.visit.directions}</a>
              <a className="button-outline" href={business.whatsapp} target="_blank" rel="noopener noreferrer">{t.visit.whatsapp}<ArrowUpRight size={13} aria-hidden="true" /></a>
            </div>
            <div className="visit-photo"><img src="/ambiance/3.png" alt={t.visit.visitImageAlt} loading="lazy" /><a className="photo-link" href={business.maps} target="_blank" rel="noopener noreferrer"><MapPin size={13} aria-hidden="true" />{t.visit.map}</a></div>
          </div>
          <div className="visit-details">
            <div className="detail-row"><span className="detail-label">{t.visit.address}</span><span className="detail-value">{business.address.map((line) => <span key={line} style={{ display: 'block' }}>{line}</span>)}</span></div>
            <div className="detail-row"><span className="detail-label">{t.visit.hours}</span><span className="detail-value">{t.visit.hoursDetails}<span className="hours-note">{t.visit.friday}</span></span></div>
            <div className="detail-row"><span className="detail-label">{t.visit.phone}</span><span className="detail-value"><a href={business.phoneHref} dir="ltr">{business.phoneDisplay}</a></span></div>
            <div className="detail-row"><span className="detail-label">{t.visit.services}</span><span className="detail-value">{t.story.offerings.join(' · ')}</span></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-content">
          <div className="footer-topline">
            <div>
              <a className="footer-brand" href="#home">{business.name}</a>
              <p className="footer-note">{t.footer.note}</p>
            </div>
            <nav className="footer-nav" aria-label={isArabic ? 'روابط الأقسام' : 'Section navigation'}>
              {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            </nav>
          </div>
          <div className="footer-details">
            <div><span>{t.footer.addressLabel}</span><p>{business.address.map((line, index) => <span key={line}>{index ? ', ' : ''}{line}</span>)}</p></div>
            <div><span>{t.footer.hoursLabel}</span><p>{t.visit.hoursDetails}<br /><em>{t.footer.friday}</em></p></div>
            <div><span>{t.visit.phone}</span><p><a href={business.phoneHref} dir="ltr">{business.phoneDisplay}</a></p></div>
            <div><span>{isArabic ? 'تابعونا' : 'Follow'}</span><p><a href={business.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p></div>
          </div>
          <div className="footer-bottom"><span>{t.footer.copyright}</span><a href="#home">{t.footer.toTop}</a></div>
        </div>
      </footer>

      {activeGallery !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={isArabic ? 'عارض الصور' : 'Gallery viewer'} onClick={(event) => { if (event.target === event.currentTarget) setActiveGallery(null); }} onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null; }} onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const delta = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current;
        if (Math.abs(delta) > 45) galleryStep(delta < 0 ? 1 : -1);
        touchStart.current = null;
      }}>
        <div className="lightbox-frame">
          <img className="lightbox-image" src={galleryItems[activeGallery].src} alt={galleryItems[activeGallery].alt} />
          <button ref={closeButtonRef} className="lightbox-close" type="button" onClick={() => setActiveGallery(null)} aria-label={t.gallery.close}><X size={21} /></button>
          <button className="lightbox-step lightbox-prev" type="button" onClick={() => galleryStep(-1)} aria-label={t.gallery.previous}><ArrowLeft size={20} /></button>
          <button className="lightbox-step lightbox-next" type="button" onClick={() => galleryStep(1)} aria-label={t.gallery.next}><ArrowRight size={20} /></button>
          <div className="lightbox-caption"><span>{isArabic ? galleryItems[activeGallery].ar : galleryItems[activeGallery].en}</span><span>{activeGallery + 1} / {galleryItems.length}</span></div>
        </div>
        <p className="lightbox-help">{t.gallery.keyboard}</p>
      </div>}
    </div>
  );
}

export default App;
