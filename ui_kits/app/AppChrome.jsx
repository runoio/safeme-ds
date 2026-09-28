// SafeMe app chrome: phone frame, status bar, top bar, bottom tab bar, faux map.
const { IconButton, Logo } = window.SafeMeDesignSystem_c9bbeb;

function Icon({ n, size = 22, color = 'currentColor', strokeWidth = 2 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide && lucide[n]) {
      ref.current.innerHTML = '';
      const el = lucide.createElement(lucide[n]);
      el.setAttribute('width', size); el.setAttribute('height', size);
      el.setAttribute('stroke', color); el.setAttribute('stroke-width', strokeWidth);
      ref.current.appendChild(el);
    }
  });
  return <span ref={ref} style={{ display: 'inline-flex' }} />;
}

function StatusBar({ dark = true }) {
  const c = dark ? '#fff' : 'var(--app-text)';
  return (
    <div style={{ height: 50, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 26px 4px', flex: 'none' }}>
      <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 15, color: c }}>9:41</span>
      <div style={{ display: 'flex', gap: 6, color: c }}>
        <Icon n="Signal" size={16} color={c} /><Icon n="Wifi" size={16} color={c} /><Icon n="BatteryFull" size={16} color={c} />
      </div>
    </div>
  );
}

function TopBar({ dark = false, title, right }) {
  const c = dark ? '#fff' : 'var(--app-text)';
  return (
    <div style={{ height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px', flex: 'none' }}>
      {title ? <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 20, color: c }}>{title}</span>
             : <Logo variant="wordmark" tone={dark ? 'light' : 'dark'} height={24} />}
      <div style={{ display: 'flex', gap: 6 }}>{right}</div>
    </div>
  );
}

// Dark pill tab bar matching the real app: SafeMe / Tutorial / Profile.
function TabBar({ active = 'home', onNav }) {
  const tabs = [
    { id: 'home', icon: 'Shield', label: 'SafeMe' },
    { id: 'tutorial', icon: 'GraduationCap', label: 'Samouczek' },
    { id: 'profile', icon: 'CircleUser', label: 'Profil' },
  ];
  return (
    <div style={{ padding: '10px 16px 22px', flex: 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', background: 'var(--app-surface)', borderRadius: 'var(--radius-pill)', padding: '10px 8px' }}>
        {tabs.map(t => {
          const on = active === t.id;
          return (
            <button key={t.id} onClick={() => onNav && onNav(t.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 80 }}>
              <span style={{ width: 46, height: 30, borderRadius: 'var(--radius-pill)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: on ? 'var(--app-surface-2)' : 'transparent' }}>
                <Icon n={t.icon} size={21} color={on ? '#fff' : 'var(--app-text-muted)'} strokeWidth={on ? 2.2 : 2} />
              </span>
              <span style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 11.5, color: on ? '#fff' : 'var(--app-text-muted)' }}>{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Stylized map background with an optional route line. Dark by default (mobile app is dark).
function FauxMap({ children, showRoute = false, progress = 0.4, dark = true }) {
  const c = dark
    ? { base: '#14151A', block: '#1D1F26', road: '#2A2C34', water: '#182838' }
    : { base: '#E9EDF6', block: '#F4F6FB', road: '#DCE1EE', water: '#D6E4F5' };
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: c.base }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} preserveAspectRatio="xMidYMid slice" viewBox="0 0 390 700">
        <rect width="390" height="700" fill={c.base} />
        {/* blocks */}
        <g fill={c.block}>
          <rect x="20" y="40" width="120" height="90" rx="6" /><rect x="160" y="30" width="120" height="70" rx="6" />
          <rect x="300" y="60" width="90" height="120" rx="6" /><rect x="30" y="160" width="90" height="120" rx="6" />
          <rect x="150" y="140" width="140" height="100" rx="6" /><rect x="40" y="320" width="110" height="130" rx="6" />
          <rect x="180" y="300" width="120" height="90" rx="6" /><rect x="300" y="360" width="90" height="150" rx="6" />
          <rect x="30" y="500" width="130" height="110" rx="6" /><rect x="190" y="470" width="100" height="150" rx="6" />
        </g>
        {/* roads */}
        <g stroke={c.road} strokeWidth="10" fill="none">
          <path d="M0 145 H390" /><path d="M0 300 H390" /><path d="M0 460 H390" />
          <path d="M145 0 V700" /><path d="M300 0 V700" />
        </g>
        {/* water */}
        <path d="M0 620 Q120 590 200 630 T390 610 V700 H0 Z" fill={c.water} />
        {showRoute && (
          <g>
            <path id="sm-route" d="M70 600 L70 470 L145 470 L145 300 L300 300 L300 120" stroke="#5BADFF" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset={1000 * (1 - progress)} opacity="0.95" />
            <circle cx="70" cy="600" r="9" fill="#5BADFF" stroke={c.base} strokeWidth="3" />
            <circle cx="300" cy="120" r="9" fill="#ED3745" stroke={c.base} strokeWidth="3" />
          </g>
        )}
      </svg>
      {children}
    </div>
  );
}

Object.assign(window, { Icon, StatusBar, TopBar, TabBar, FauxMap });
