// Emergency assistant screen — dark, calm, connected. Shown after pressing SOS.
const { Button } = window.SafeMeDesignSystem_c9bbeb;

function AssistantCallScreen({ onBack }) {
  const [msgs, setMsgs] = React.useState([
    { who: 'assistant', text: 'Jestem z Tobą. Nazywam się Marek. Czy możesz bezpiecznie mówić?' },
  ]);
  const [connected, setConnected] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setConnected(true), 1400); return () => clearTimeout(t); }, []);

  const quick = ['Tak, mogę mówić', 'Nie, tylko czat', 'Ktoś mnie śledzi'];
  const send = (text) => {
    setMsgs(m => [...m, { who: 'me', text }]);
    setTimeout(() => setMsgs(m => [...m, { who: 'assistant', text: 'Zrozumiałem. Widzę Twoją lokalizację i wysyłam wsparcie. Zostań na linii — jestem z Tobą.' }]), 900);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--app-bg)' }}>
      <StatusBar dark />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 18px 10px', flex: 'none' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: connected ? '#3ce07a' : '#E8A317', boxShadow: `0 0 0 4px ${connected ? 'rgba(60,224,122,.25)' : 'rgba(232,163,23,.25)'}` }} />
          <span style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 14, color: '#fff' }}>{connected ? 'Połączono z asystentem' : 'Łączenie...'}</span>
        </span>
        <button onClick={onBack} style={{ background: 'rgba(255,255,255,.12)', border: 'none', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '6px 14px', cursor: 'pointer', fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 13 }}>Anuluj</button>
      </div>

      {/* assistant identity */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '14px 0 20px', flex: 'none' }}>
        <div style={{ position: 'relative', width: 84, height: 84 }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'linear-gradient(135deg,#5BADFF,#3A45B5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon n="ShieldCheck" size={40} color="#fff" />
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 18, color: '#fff' }}>Asystent Marek</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.6)' }}>Certyfikowany · odpowiada w 8 s</div>
        </div>
      </div>

      {/* chat */}
      <div style={{ flex: 1, background: 'var(--app-surface)', borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 16, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {msgs.map((m, i) => (
          <div key={i} style={{ alignSelf: m.who === 'me' ? 'flex-end' : 'flex-start', maxWidth: '82%', background: m.who === 'me' ? 'var(--blue-action-500)' : 'var(--app-surface-2)', color: '#fff', padding: '10px 14px', borderRadius: 16, borderBottomRightRadius: m.who === 'me' ? 4 : 16, borderBottomLeftRadius: m.who === 'me' ? 16 : 4, fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.45 }}>
            {m.text}
          </div>
        ))}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
          {quick.map(q => (
            <button key={q} onClick={() => send(q)} style={{ border: '1px solid var(--app-border)', background: 'var(--app-surface-2)', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '8px 14px', cursor: 'pointer', fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 13 }}>{q}</button>
          ))}
        </div>
      </div>

      {/* call controls */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 26, padding: '16px 0 26px', background: 'var(--app-surface)', flex: 'none' }}>
        <CallBtn icon="Mic" label="Mów" bg="var(--app-surface-2)" fg="#fff" />
        <CallBtn icon="Phone" label="Połącz" bg="var(--success)" fg="#fff" big />
        <CallBtn icon="MapPin" label="Lokalizacja" bg="var(--app-surface-2)" fg="#fff" />
      </div>
    </div>
  );
}

function CallBtn({ icon, label, bg, fg, big }) {
  const d = big ? 62 : 54;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <button style={{ width: d, height: d, borderRadius: '50%', border: 'none', background: bg, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: big ? 'var(--shadow-md)' : 'none' }}>
        <Icon n={icon} size={big ? 26 : 22} color={fg} />
      </button>
      <span style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 11.5, color: 'var(--app-text-muted)' }}>{label}</span>
    </div>
  );
}

Object.assign(window, { AssistantCallScreen });
