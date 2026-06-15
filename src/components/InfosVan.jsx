import styles from './InfosVan.module.css'

const VAN_SPECS = [
  { label: 'Modèle', value: 'Renault Trafic 3' },
  { label: 'Version', value: 'L1H1 · Fourgon nu' },
  { label: 'Depuis', value: '2014' },
  { label: 'Coffre L', value: '254 cm' },
  { label: 'Coffre l', value: '166 cm (124 cm entre arches)' },
  { label: 'Hauteur int.', value: '138.7 cm (H1)' },
  { label: 'Arches de roue', value: '~25 cm de haut → plateforme 60cm passe au-dessus ✓' },
]

const ELEC_SPECS = [
  { label: 'Batterie', value: 'EcoFlow Delta 3 Classic', sub: '1024Wh · LiFePO4 · charge 0→80% en 45min · garantie 5 ans' },
  { label: 'Solaire', value: 'Panneau 220W dépliant EcoFlow', sub: 'Prod. ~880Wh/j (sud FR, été) · branché XT60 natif' },
  { label: 'Frigo', value: 'Alpicool CX40 · 40L · branché AC 230V', sub: '~500Wh/24h via prise secteur Delta 3' },
  { label: 'Sans solaire', value: '~37h d\'autonomie', sub: 'Frigo + ventilo + 2 téléphones' },
  { label: 'Avec solaire', value: 'Autonomie illimitée', sub: '+880Wh produits − 650Wh conso = +230Wh/jour de surplus' },
]

const TIPS = [
  { icon: '⚡', tip: 'Delta 3 Classic : pas de sortie 12V DC — brancher le frigo sur la prise AC 230V' },
  { icon: '⚡', tip: 'Delta 3 Classic : 0→80% en 45min sur secteur (pratique sur aires de camping)' },
  { icon: '🌞', tip: 'Panneau dépliant : orienter plein sud, inclinaison 30-60° — +25% vs posé à plat' },
  { icon: '🐕', tip: 'Chien 40kg = ~1L d\'eau/heure par grosse chaleur — jerricane 20L minimum' },
  { icon: '🔧', tip: 'Découpe contreplaqué gratuite chez LM avec achat — faire un gabarit carton avant' },
  { icon: '🚐', tip: 'Aménagement amovible (zéro vis dans la tôle) = reste utilitaire légalement · pas de VASP' },
]

export default function InfosVan() {
  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        {/* Véhicule */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Véhicule</h2>
          <dl className={styles.specs}>
            {VAN_SPECS.map(s => (
              <div key={s.label} className={styles.specRow}>
                <dt className={styles.specLabel}>{s.label}</dt>
                <dd className={styles.specValue}>{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Électricité */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Électricité</h2>
          <div className={styles.elecList}>
            {ELEC_SPECS.map(s => (
              <div key={s.label} className={styles.elecItem}>
                <div className={styles.elecLabel}>{s.label}</div>
                <div className={styles.elecValue}>{s.value}</div>
                <div className={styles.elecSub}>{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className={`${styles.card} ${styles.cardFull}`}>
          <h2 className={styles.cardTitle}>Tips & pièges à éviter</h2>
          <ul className={styles.tipsList}>
            {TIPS.map((t, i) => (
              <li key={i} className={styles.tipItem}>
                <span className={styles.tipIcon}>{t.icon}</span>
                <span className={styles.tipText}>{t.tip}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
