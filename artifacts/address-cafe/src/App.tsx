import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Clock3, Coffee, MapPin, Menu, Phone, ShoppingBag, X } from 'lucide-react';

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Address%20Cafe%2C%20King%20Faisal%20W%2C%20Jubail%20City%20Center%2C%20Al%20Jubail%2035514%2C%20Saudi%20Arabia';
const phoneUrl = 'tel:920031993';

const copy = {
  en: {
    nav: ['Our place', 'What we pour', 'Find us'],
    visit: 'Come by',
    eyebrow: 'A little pause, any hour',
    titleA: 'Good coffee,',
    titleB: 'whenever you',
    titleC: 'need a moment.',
    lead: 'A friendly 24-hour stop in the heart of Jubail. Come in for a thoughtful cup, stay for the quiet.',
    directions: 'Get directions',
    aboutLabel: 'A place to land',
    aboutTitle: 'An open door, day and night.',
    aboutBody: 'Some days call for a slow start. Others ask for one more stop on the way home. Address Cafe is here for both — a pleasant, unhurried corner for Jubail locals and travelers alike.',
    aboutNote: 'Coffee chosen with care. A place to take your time.',
    drinksLabel: 'A few favourites',
    drinksTitle: 'Something worth pausing for.',
    drinksSub: 'A glimpse of the cups our guests come back to.',
    note: 'Ask our team what feels right today.',
    features: ['Flat White 7oz', 'Latte with Coffee Drip Bag', 'Cloudy Matcha', 'Iced Spanish Latte', 'Karkade Slash'],
    rhythm: 'Here when the day unfolds.',
    rhythmText: 'Listed open 24 hours, with dine-in and no-contact delivery available.',
    open: 'Open 24 hours',
    dine: 'Dine-in',
    delivery: 'No-contact delivery',
    visitLabel: 'Find your way here',
    visitTitle: 'Right here in Jubail.',
    address: 'King Faisal W, Jubail City Center, Al Jubail 35514, Saudi Arabia',
    phoneLabel: 'Call the cafe',
    directionsLink: 'Open in Google Maps',
    retailTitle: 'Coffee for the road home.',
    retailBody: 'Explore the Address online shop for carefully selected coffee crops, careful roasting, coffee products, cups and delivery across Saudi Arabia.',
    shop: 'Visit the online shop',
    footer: 'A good cup, at any hour.',
    lang: 'العربية',
    ariaMenu: 'Open navigation',
    ariaClose: 'Close navigation',
  },
  ar: {
    nav: ['مكاننا', 'مشروباتنا', 'زورونا'],
    visit: 'زورونا',
    eyebrow: 'استراحة صغيرة، في أي وقت',
    titleA: 'قهوة طيبة،',
    titleB: 'كلما احتجت',
    titleC: 'إلى لحظة هادئة.',
    lead: 'محطة ودودة على مدار ٢٤ ساعة في قلب الجبيل. تفضلوا لفنجان مختار بعناية، وامكثوا قليلًا.',
    directions: 'الاتجاهات',
    aboutLabel: 'مكان تستريح فيه',
    aboutTitle: 'باب مفتوح، ليلًا ونهارًا.',
    aboutBody: 'هناك أيام تحتاج إلى بداية هادئة، وأيام أخرى تستدعي محطة إضافية في طريق العودة. عنوان القهوة هنا لكليهما — ركن لطيف وهادئ لأهل الجبيل والمسافرين.',
    aboutNote: 'قهوة مختارة بعناية. ومكان يمنحك وقتك.',
    drinksLabel: 'من اختياراتنا',
    drinksTitle: 'ما يستحق لحظة من وقتك.',
    drinksSub: 'لمحة عن أكواب يعود إليها ضيوفنا.',
    note: 'اسألوا فريقنا عمّا يناسب يومكم.',
    features: ['فلات وايت ٧ أونصات', 'لاتيه مع كيس قهوة مقطرة', 'ماتشا كلاودي', 'آيس سبانيش لاتيه', 'كركديه سلاش'],
    rhythm: 'معكم في كل ساعات اليوم.',
    rhythmText: 'المقهى مفتوح على مدار ٢٤ ساعة، مع خدمة الجلوس في المقهى والتوصيل دون تلامس.',
    open: 'مفتوح ٢٤ ساعة',
    dine: 'الجلوس في المقهى',
    delivery: 'توصيل دون تلامس',
    visitLabel: 'اعثروا علينا',
    visitTitle: 'هنا، في الجبيل.',
    address: 'طريق الملك فيصل الغربي، مركز مدينة الجبيل، الجبيل ٣٥٥١٤، المملكة العربية السعودية',
    phoneLabel: 'اتصل بالمقهى',
    directionsLink: 'افتح في خرائط Google',
    retailTitle: 'قهوة ترافقكم إلى المنزل.',
    retailBody: 'اكتشفوا المتجر الإلكتروني لعنوان القهوة: محاصيل مختارة بعناية، وتحميص متقن، ومنتجات القهوة والأكواب، مع التوصيل في أنحاء المملكة العربية السعودية.',
    shop: 'تصفحوا المتجر الإلكتروني',
    footer: 'فنجان طيب، في أي ساعة.',
    lang: 'English',
    ariaMenu: 'افتح قائمة التنقل',
    ariaClose: 'أغلق قائمة التنقل',
  },
} as const;

function App() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  const isArabic = language === 'ar';

  const toggleLanguage = () => setLanguage(isArabic ? 'en' : 'ar');
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={isArabic ? 'site arabic' : 'site'} dir={isArabic ? 'rtl' : 'ltr'} lang={language}>
      <header className="topbar">
        <a href="#top" className="wordmark" aria-label="Address Cafe home" data-testid="link-home">
          <span className="wordmark-main">Address Cafe</span>
          <span className="wordmark-ar">عنوان القهوة</span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label={isArabic ? 'التنقل الرئيسي' : 'Main navigation'}>
          <a href="#place" onClick={closeMenu} data-testid="link-nav-place">{t.nav[0]}</a>
          <a href="#pour" onClick={closeMenu} data-testid="link-nav-pour">{t.nav[1]}</a>
          <a href="#visit" onClick={closeMenu} data-testid="link-nav-visit">{t.nav[2]}</a>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="nav-visit" data-testid="link-nav-directions">{t.visit}<ArrowUpRight size={14} /></a>
        </nav>
        <div className="header-actions">
          <button type="button" className="language-switch" onClick={toggleLanguage} aria-label={isArabic ? 'Switch language to English' : 'تغيير اللغة إلى العربية'} data-testid="button-language">{t.lang}</button>
          <button type="button" className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.ariaClose : t.ariaMenu} aria-expanded={menuOpen} data-testid="button-menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero grain" aria-labelledby="hero-title">
          <img className="hero-image" src="/address-cafe-hero.jpg" alt="A flat white on a warm walnut counter inside a quiet, softly lit Jubail cafe" width="1600" height="900" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow fade-up"><span className="eyebrow-line" />{t.eyebrow}</p>
            <h1 id="hero-title" className="serif fade-up delay-1">{t.titleA}<br />{t.titleB}<br /><em>{t.titleC}</em></h1>
            <p className="hero-lead fade-up delay-2">{t.lead}</p>
            <div className="hero-actions fade-up delay-2">
              <a className="button button-sand" href={mapUrl} target="_blank" rel="noopener noreferrer" data-testid="link-hero-directions">{t.directions}<ArrowUpRight size={16} /></a>
              <a className="text-link light" href="#place" data-testid="link-hero-explore">{t.nav[0]}<ArrowDown size={15} /></a>
            </div>
          </div>
          <div className="hero-index"><span>26°57′N</span><i /> <span>49°39′E</span></div>
          <div className="hero-side">{isArabic ? 'الجبيل، المملكة العربية السعودية' : 'JUBAIL · SAUDI ARABIA'}</div>
        </section>

        <section className="intro section-wrap" id="place">
          <div className="section-kicker"><span>01</span><span>{t.aboutLabel}</span></div>
          <div className="intro-copy">
            <h2 className="serif">{t.aboutTitle}</h2>
            <div className="intro-detail">
              <p>{t.aboutBody}</p>
              <p className="intro-note">{t.aboutNote}</p>
            </div>
          </div>
          <div className="intro-stamp" aria-hidden="true"><Coffee size={31} strokeWidth={1.25} /><span>JUBAIL<br />24 / 7</span></div>
        </section>

        <section className="menu-section" id="pour">
          <div className="menu-top section-wrap">
            <div>
              <div className="section-kicker"><span>02</span><span>{t.drinksLabel}</span></div>
              <h2 className="serif">{t.drinksTitle}</h2>
              <p>{t.drinksSub}</p>
            </div>
            <span className="menu-mark" aria-hidden="true">A.</span>
          </div>
          <div className="menu-list">
            {t.features.map((item, index) => (
              <article className="menu-row" key={item} data-testid={`item-highlight-${index}`}>
                <span className="menu-number">0{index + 1}</span>
                <h3 className="serif">{item}</h3>
                <span className="menu-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
              </article>
            ))}
          </div>
          <p className="menu-note">{t.note}</p>
        </section>

        <section className="always section-wrap">
          <div className="always-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="always-content">
            <div className="section-kicker"><span>03</span><span>{t.open}</span></div>
            <h2 className="serif">{t.rhythm}</h2>
            <p>{t.rhythmText}</p>
            <div className="service-list">
              {[t.dine, t.delivery].map((service) => <span key={service}><span className="service-dot" />{service}</span>)}
            </div>
          </div>
          <div className="clock-badge"><Clock3 size={22} strokeWidth={1.4} /><span>24<br />HRS</span></div>
        </section>

        <section className="visit-section" id="visit">
          <div className="visit-inner section-wrap">
            <div className="visit-copy">
              <div className="section-kicker"><span>04</span><span>{t.visitLabel}</span></div>
              <h2 className="serif">{t.visitTitle}</h2>
              <div className="address-block">
                <MapPin size={19} strokeWidth={1.5} />
                <p>{t.address}</p>
              </div>
              <a className="text-link visit-link" href={mapUrl} target="_blank" rel="noopener noreferrer" data-testid="link-maps">{t.directionsLink}<ArrowUpRight size={16} /></a>
              <a className="phone-link" href={phoneUrl} data-testid="link-phone"><Phone size={16} />{t.phoneLabel}<span dir="ltr">9200 31993</span></a>
            </div>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="map-card" aria-label={t.directionsLink} data-testid="link-map-card">
              <div className="map-lines" aria-hidden="true"><span /><span /><span /><span /><i /><i /><i /></div>
              <span className="map-label"><MapPin size={17} fill="currentColor" />{isArabic ? 'عنوان القهوة' : 'Address Cafe'}</span>
              <span className="map-caption">{isArabic ? 'مركز مدينة الجبيل' : 'JUBAIL CITY CENTER'}</span>
              <span className="map-open"><ArrowUpRight size={16} /></span>
            </a>
          </div>
        </section>

        <section className="shop-banner">
          <div className="shop-icon"><ShoppingBag size={21} strokeWidth={1.4} /></div>
          <div className="shop-copy"><p className="eyebrow dark-eyebrow">{isArabic ? 'متجر عنوان القهوة الإلكتروني' : 'THE ADDRESS ONLINE SHOP'}</p><h2 className="serif">{t.retailTitle}</h2><p>{t.retailBody}</p></div>
          <a href="https://addresscafe.sa/" target="_blank" rel="noopener noreferrer" className="button button-dark" data-testid="link-online-shop">{t.shop}<ArrowUpRight size={16} /></a>
        </section>
      </main>

      <footer className="footer">
        <a href="#top" className="footer-wordmark serif">Address <em>Cafe.</em></a>
        <p>{t.footer}</p>
        <span className="footer-ar">عنوان القهوة</span>
        <a href={phoneUrl} className="footer-phone" data-testid="link-footer-phone">9200 31993</a>
      </footer>
    </div>
  );
}

export default App;
