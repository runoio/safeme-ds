// Home screen — matches the real SafeMe app: dark theme, assistant header,
// assistant intro card + carousel, and the two circular actions (Pomoc / Obserwacja).
const { Logo, SOSButton } = window.SafeMeDesignSystem_c9bbeb;

function AssistantHeader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '4px 18px 8px', flex: 'none' }}>
      <div style={{ position: 'relative', width: 46, height: 46, flex: 'none' }}>
        <div style={{ width: 46, height: 46, borderRadius: '50%', overflow: 'hidden', background: 'linear-gradient(135deg,#3A45B5,#5BADFF)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <Icon n="UserRound" size={30} color="#fff" />
        </div>
        <span style={{ position: 'absolute', right: -1, bottom: -1, width: 13, height: 13, borderRadius: '50%', background: 'var(--app-online)', border: '2.5px solid var(--app-bg)' }} />
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 19, color: '#fff', lineHeight: 1.1 }}>Dominik</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--app-text-muted)' }}>Asystent Bezpieczeństwa</div>
      </div>
      <Logo variant="sygnet" height={26} style={{ flex: 'none' }} />
    </div>
  );
}

function HomeScreen({ onNav, onSOS }) {
  const [hidden, setHidden] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--app-bg)' }}>
      <StatusBar dark />
      <AssistantHeader />

      <div style={{ flex: 1 }} />

      {/* assistant intro card + carousel */}
      {!hidden && (
        <div style={{ padding: '0 18px' }}>
          <div style={{ background: 'var(--app-surface)', borderRadius: 20, padding: '20px 20px 16px' }}>
            <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 10 }}>Dominik Asystent Bezpieczeństwa</div>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.55, color: 'var(--app-text-muted)' }}>
              Cześć, dziś jestem Twoim Asystentem Bezpieczeństwa. Będę czuwać nad Twoim bezpieczeństwem i reagować zawsze, gdy będziesz tego potrzebować.
            </p>
            <div style={{ textAlign: 'right', marginTop: 6 }}>
              <button onClick={() => setHidden(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 15, color: '#fff' }}>Schowaj</button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, padding: '16px 0' }}>
            <span style={{ width: 22, height: 7, borderRadius: 4, background: 'var(--app-text-muted)' }} />
            {[0, 1, 2].map(i => <span key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--app-surface-2)' }} />)}
          </div>
        </div>
      )}

      {/* two circular actions */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 26, padding: '10px 0 14px' }}>
        <SOSButton variant="help" size={148} onClick={onSOS} />
        <SOSButton variant="observe" size={148} onClick={() => onNav('route')} />
      </div>

      <TabBar active="home" onNav={(id) => onNav(id === 'home' ? 'home' : id)} />
    </div>
  );
}

Object.assign(window, { HomeScreen, AssistantHeader });
