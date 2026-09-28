// Active monitoring — dark theme; live map, assigned assistant, ETA, progress, help.
const { Button, Badge } = window.SafeMeDesignSystem_c9bbeb;

function ActiveMonitoringScreen({ onBack, onSOS }) {
  const [progress, setProgress] = React.useState(0.15);
  React.useEffect(() => {
    const t = setInterval(() => setProgress(p => (p >= 0.85 ? 0.85 : p + 0.01)), 400);
    return () => clearInterval(t);
  }, []);
  const eta = Math.max(1, Math.round(14 * (1 - progress)));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--app-bg)' }}>
      <div style={{ position: 'relative', flex: 1 }}>
        <FauxMap showRoute progress={progress} dark>
          <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <StatusBar dark />
            <div style={{ padding: '0 18px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--app-surface)', padding: '9px 15px', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-md)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#5BADFF', boxShadow: '0 0 0 4px rgba(91,173,255,.3)' }} />
                <span style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 13, color: '#fff' }}>Trasa monitorowana na żywo</span>
              </span>
            </div>
          </div>
        </FauxMap>
      </div>

      {/* bottom sheet */}
      <div style={{ background: 'var(--app-surface)', borderTopLeftRadius: 24, borderTopRightRadius: 24, marginTop: -24, padding: '16px 18px 26px', flex: 'none' }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--app-surface-2)', margin: '0 auto 16px' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg,#3A45B5,#5BADFF)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', flex: 'none', overflow: 'hidden' }}>
            <Icon n="UserRound" size={30} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 15, color: '#fff' }}>Asystent Dominik czuwa</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--app-text-muted)' }}>Przyjazd za ~{eta} min · ul. Marszałkowska 100</div>
          </div>
          <Badge tone="safe" dot>Aktywna</Badge>
        </div>

        <div style={{ height: 6, borderRadius: 3, background: 'var(--app-surface-2)', overflow: 'hidden', marginBottom: 16 }}>
          <div style={{ height: '100%', width: `${progress * 100}%`, background: 'var(--blue-action-500)', borderRadius: 3, transition: 'width .4s linear' }} />
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="outline" style={{ flex: 1, background: 'var(--app-surface-2)', color: '#fff', border: '1px solid var(--app-border)' }} iconLeft={<Icon n="MessageCircle" size={19} color="#fff" />}>Napisz</Button>
          <Button variant="danger" style={{ flex: 1 }} iconLeft={<Icon n="BellPlus" size={19} color="#fff" />} onClick={onSOS}>Wezwij pomoc</Button>
        </div>
        <button onClick={onBack} style={{ width: '100%', marginTop: 12, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 14, color: 'var(--app-text-muted)' }}>Zakończ obserwację</button>
      </div>
    </div>
  );
}

Object.assign(window, { ActiveMonitoringScreen });
