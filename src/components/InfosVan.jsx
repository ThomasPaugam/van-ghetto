import styles from './InfosVan.module.css'

const VAN_SPECS = [
  { label: 'Modèle', value: 'Renault Trafic 3' },
  { label: 'Version', value: 'L1H1 · Fourgon nu' },
  { label: 'Depuis', value: '2014' },
  { label: 'Coffre L', value: '182 cm' },
  { label: 'Coffre l', value: '169 cm (124 cm entre arches)' },
  { label: 'Hauteur int.', value: '136 cm (H1)' },
  { label: 'Diagonale', value: '~248 cm ✓' },
]

const ELEC_SPECS = [
  { label: 'Batterie', value: 'EcoFlow Delta 2', sub: '1024Wh · LiFePO4 · 3000 cycles' },
  { label: 'Solaire', value: 'Panneau 200W rigide/pliable', sub: 'Prod. ~480Wh/j (sud FR, été)' },
  { label: 'Frigo', value: 'Compresseur 12V · 40L', sub: '~530-600Wh/24h réel' },
  { label: 'Autonomie', value: '~24h avec frigo + usage', sub: 'Recharge solaire quotidienne' },
]

const TIPS = [
  { icon: '⚡', tip: 'Panneau rigide uniquement — le flexible perd 20-30% à 75°C en été' },
  { icon: '🌡', tip: 'Delta 2 : 0→80% en 50min sur secteur (pratique sur aires de camping) ' },
  { icon: '🐕', tip: 'Chien 40kg = ~1L d\'eau/heure par grosse chaleur — jerricane 20L minimum' },
  { icon: '🔧', tip: 'Découpe contreplaqué gratuite chez LM avec achat — faire un gabarit carton avant' },
  { icon: '🌿', tip: 'Fourgon nu : cloison métallique = chien déjà isolé de l\'habitacle en roulant' },
  { icon: '🗺', tip: 'Dans le sud : 200W suffisent. Dans le nord ou météo capricieuse : prévoir recharge secteur' },
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
