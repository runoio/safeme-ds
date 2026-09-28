// Route setup ("Obserwacja") — dark theme; choose transport + destination, then start.
const { Button } = window.SafeMeDesignSystem_c9bbeb;

function DarkField({ label, icon, value }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 13, color: 'var(--app-text-muted)', marginBottom: 7 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, height: 52, padding: '0 15px', background: 'var(--app-surface)', border: '1px solid var(--app-border)', borderRadius: 'var(--radius-md)' }}>
        <Icon n={icon} size={19} color="var(--app-text-muted)" />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, color: '#fff' }}>{value}</span>
      </div>
    </div>
  );
}

function RouteSetupScreen({ onBack, onStart }) {
  const [mode, setMode] = React.useState('taxi');
  const modes = [
    { id: 'walk', icon: 'Footprints', label: 'Pieszo' },
    { id: 'taxi', icon: 'Car', label: 'Taxi' },
    { id: 'transit', icon: 'Bus', label: 'Komunikacja' },
    { id: 'bike', icon: 'Bike', label: 'Rower' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--app-bg)' }}>
      <StatusBar dark />
      <div style={{ height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px', flex: 'none' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', padding: 8 }}><Icon n="ArrowLeft" size={24} color="#fff" /></button>
        <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 18, color: '#fff' }}>Obserwacja trasy</span>
        <span style={{ width: 40 }} />
      </div>

      <div style={{ padding: '8px 18px', overflowY: 'auto', flex: 1 }}>
        <p style={{ margin: '0 0 20px', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5, color: 'var(--app-text-muted)' }}>
          Wskaż cel podróży i środek transportu — Asystent Bezpieczeństwa zajmie się resztą.
        </p>

        <div style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 13, color: 'var(--app-text-muted)', marginBottom: 8 }}>Środek transportu</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 24 }}>
          {modes.map(m => {
            const on = mode === m.id;
            return (
              <button key={m.id} onClick={() => setMode(m.id)} style={{ cursor: 'pointer', border: on ? '2px solid var(--blue-action-500)' : '1px solid var(--app-border)', background: on ? 'rgba(91,173,255,.12)' : 'var(--app-surface)', borderRadius: 'var(--radius-md)', padding: '14px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}>
                <Icon n={m.icon} size={24} color={on ? 'var(--blue-action-500)' : 'var(--app-text-muted)'} />
                <span style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 11.5, color: on ? 'var(--blue-action-500)' : 'var(--app-text-muted)' }}>{m.label}</span>
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 22 }}>
          <DarkField label="Skąd" icon="LocateFixed" value="Moja lokalizacja" />
          <DarkField label="Dokąd" icon="MapPin" value="ul. Marszałkowska 100" />
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: 'rgba(91,173,255,.10)', border: '1px solid rgba(91,173,255,.22)', borderRadius: 'var(--radius-md)', padding: 16 }}>
          <Icon n="ShieldCheck" size={22} color="var(--blue-action-500)" />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.45, color: '#C9D6E8' }}>
            Powiadomimy odpowiednie służby, jeśli zboczysz z trasy lub nie dotrzesz na czas.
          </span>
        </div>
      </div>

      <div style={{ padding: '14px 18px 26px', flex: 'none' }}>
        <Button variant="safe" size="lg" fullWidth iconLeft={<Icon n="MapPinned" size={20} color="#fff" />} onClick={onStart}>Rozpocznij obserwację</Button>
      </div>
    </div>
  );
}

Object.assign(window, { RouteSetupScreen });
