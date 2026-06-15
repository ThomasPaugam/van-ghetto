import styles from './PlanVan.module.css'

export default function PlanVan() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2 className={styles.title}>Plan d'aménagement</h2>
        <p className={styles.subtitle}>Renault Trafic 3 · L1H1 · Coffre 254 × 166 cm</p>
      </div>

      <div className={styles.views}>

        {/* ── VUE DE DESSUS ── */}
        <div className={styles.viewBlock}>
          <p className={styles.viewLabel}>Vue de dessus</p>
          <div className={styles.svgWrap}>
            <svg viewBox="0 0 290 410" className={styles.svg}>
              <defs>
                <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="6" stroke="#2c2c26" strokeWidth="1"/>
                </pattern>
              </defs>

              {/* Van outline */}
              <rect x="35" y="20" width="200" height="360" rx="10"
                fill="#181814" stroke="#3a3a32" strokeWidth="2"/>

              {/* Cloison avant */}
              <rect x="35" y="20" width="200" height="30" rx="10" fill="#111110"/>
              <rect x="35" y="38" width="200" height="12" fill="#111110"/>
              <text x="135" y="32" textAnchor="middle" fill="#4a4840"
                fontSize="8" fontFamily="DM Mono, monospace" letterSpacing="0.1em">▲ CLOISON AVANT</text>

              {/* Portes arrière */}
              <rect x="35" y="350" width="200" height="30" rx="10" fill="#111110"/>
              <rect x="35" y="350" width="200" height="12" fill="#111110"/>
              <line x1="135" y1="350" x2="135" y2="380" stroke="#3a3a32" strokeWidth="1"/>
              <text x="135" y="370" textAnchor="middle" fill="#4a4840"
                fontSize="8" fontFamily="DM Mono, monospace" letterSpacing="0.1em">▼ PORTES ARRIÈRE</text>

              {/* ── ZONE CHIEN (avant) ── */}
              <rect x="36" y="50" width="198" height="72"
                fill="rgba(94,122,80,0.18)" stroke="rgba(94,122,80,0.5)" strokeWidth="1.5"/>
              <text x="135" y="82" textAnchor="middle"
                fill="rgba(94,122,80,0.95)" fontSize="16"
                fontFamily="Barlow Condensed, sans-serif" fontWeight="900" letterSpacing="0.05em">
                CHIEN
              </text>
              <text x="135" y="97" textAnchor="middle"
                fill="rgba(94,122,80,0.55)" fontSize="10" fontFamily="DM Mono, monospace">
                40kg · ~60cm
              </text>

              {/* ── ZONE LIT (arrière, pleine largeur) ── */}
              <rect x="36" y="122" width="198" height="228"
                fill="rgba(196,145,42,0.13)" stroke="rgba(196,145,42,0.5)" strokeWidth="1.5"/>

              {/* Caissons latéraux (représentation) */}
              <rect x="36" y="122" width="44" height="228"
                fill="rgba(74,106,140,0.12)" stroke="rgba(74,106,140,0.4)" strokeWidth="1" strokeDasharray="4,3"/>
              <rect x="190" y="122" width="44" height="228"
                fill="rgba(74,106,140,0.12)" stroke="rgba(74,106,140,0.4)" strokeWidth="1" strokeDasharray="4,3"/>

              {/* Arches de roue (sous la plateforme, pas de gêne) */}
              <rect x="36" y="240" width="28" height="62" rx="3"
                fill="rgba(30,30,28,0.6)" stroke="#2c2c26" strokeWidth="1"/>
              <rect x="206" y="240" width="28" height="62" rx="3"
                fill="rgba(30,30,28,0.6)" stroke="#2c2c26" strokeWidth="1"/>
              <text x="50" y="275" textAnchor="middle" fill="#3a3a32"
                fontSize="6" fontFamily="DM Mono, monospace" transform="rotate(-90 50 275)">ROUE</text>
              <text x="220" y="275" textAnchor="middle" fill="#3a3a32"
                fontSize="6" fontFamily="DM Mono, monospace" transform="rotate(90 220 275)">ROUE</text>

              {/* Labels lit */}
              <text x="135" y="228" textAnchor="middle"
                fill="rgba(196,145,42,0.95)" fontSize="20"
                fontFamily="Barlow Condensed, sans-serif" fontWeight="900" letterSpacing="0.05em">
                LIT FIXE
              </text>
              <text x="135" y="248" textAnchor="middle"
                fill="rgba(196,145,42,0.6)" fontSize="11" fontFamily="DM Mono, monospace">
                2 personnes · pleine largeur
              </text>
              <text x="135" y="264" textAnchor="middle"
                fill="rgba(196,145,42,0.4)" fontSize="10" fontFamily="DM Mono, monospace">
                plateforme à ~60cm de hauteur
              </text>

              {/* Labels caissons */}
              <text x="58" y="170" textAnchor="middle"
                fill="rgba(74,106,140,0.8)" fontSize="8"
                fontFamily="Barlow Condensed, sans-serif" fontWeight="700" transform="rotate(-90 58 210)">
                CAISSON
              </text>
              <text x="212" y="170" textAnchor="middle"
                fill="rgba(74,106,140,0.8)" fontSize="8"
                fontFamily="Barlow Condensed, sans-serif" fontWeight="700" transform="rotate(90 212 210)">
                CAISSON
              </text>

              {/* ── Dimensions ── */}
              {/* Largeur */}
              <line x1="35" y1="12" x2="235" y2="12" stroke="#3a3a32" strokeWidth="0.8"/>
              <line x1="35" y1="8" x2="35" y2="16" stroke="#3a3a32" strokeWidth="0.8"/>
              <line x1="235" y1="8" x2="235" y2="16" stroke="#3a3a32" strokeWidth="0.8"/>
              <text x="135" y="10" textAnchor="middle" fill="#5a5a50"
                fontSize="8.5" fontFamily="DM Mono, monospace">← 166 cm →</text>

              {/* Longueur totale */}
              <line x1="250" y1="50" x2="250" y2="350" stroke="#3a3a32" strokeWidth="0.8"/>
              <line x1="246" y1="50" x2="254" y2="50" stroke="#3a3a32" strokeWidth="0.8"/>
              <line x1="246" y1="350" x2="254" y2="350" stroke="#3a3a32" strokeWidth="0.8"/>
              <text x="268" y="203" textAnchor="middle" fill="#5a5a50"
                fontSize="8.5" fontFamily="DM Mono, monospace"
                transform="rotate(90 268 203)">← 254 cm →</text>

              {/* Cote chien */}
              <line x1="260" y1="50" x2="260" y2="122" stroke="rgba(94,122,80,0.4)" strokeWidth="0.8" strokeDasharray="3,2"/>
              <text x="276" y="90" textAnchor="middle" fill="rgba(94,122,80,0.6)"
                fontSize="8" fontFamily="DM Mono, monospace"
                transform="rotate(90 276 90)">60 cm</text>

              {/* Cote lit */}
              <line x1="260" y1="122" x2="260" y2="350" stroke="rgba(196,145,42,0.4)" strokeWidth="0.8" strokeDasharray="3,2"/>
              <text x="276" y="240" textAnchor="middle" fill="rgba(196,145,42,0.6)"
                fontSize="8" fontFamily="DM Mono, monospace"
                transform="rotate(90 276 240)">190 cm</text>
            </svg>
          </div>
        </div>

        {/* ── VUE DE CÔTÉ ── */}
        <div className={styles.viewBlock}>
          <p className={styles.viewLabel}>Vue de côté (profil)</p>
          <div className={styles.svgWrap}>
            <svg viewBox="0 0 370 210" className={styles.svgWide}>

              {/* Van outline */}
              <rect x="20" y="20" width="320" height="155" rx="8"
                fill="#181814" stroke="#3a3a32" strokeWidth="2"/>

              {/* Cloison (gauche = avant) */}
              <rect x="20" y="20" width="25" height="155" rx="8" fill="#111110"/>
              <rect x="33" y="20" width="12" height="155" fill="#111110"/>
              <text x="29" y="102" textAnchor="middle" fill="#4a4840"
                fontSize="7" fontFamily="DM Mono, monospace"
                transform="rotate(-90 29 102)">◄ AVANT</text>

              {/* Portes arrière (droite) */}
              <rect x="315" y="20" width="25" height="155" rx="8" fill="#111110"/>
              <rect x="315" y="20" width="12" height="155" fill="#111110"/>
              <text x="330" y="102" textAnchor="middle" fill="#4a4840"
                fontSize="7" fontFamily="DM Mono, monospace"
                transform="rotate(90 330 102)">PORTES ►</text>

              {/* Sol */}
              <rect x="45" y="155" width="270" height="8" fill="#111110" stroke="#2c2c26" strokeWidth="1"/>

              {/* ── ZONE CHIEN (avant, pas de plateforme) ── */}
              <rect x="45" y="20" width="75" height="135"
                fill="rgba(94,122,80,0.15)" stroke="rgba(94,122,80,0.5)" strokeWidth="1.5"/>
              <text x="82" y="82" textAnchor="middle"
                fill="rgba(94,122,80,0.9)" fontSize="13"
                fontFamily="Barlow Condensed, sans-serif" fontWeight="900">CHIEN</text>
              <text x="82" y="96" textAnchor="middle"
                fill="rgba(94,122,80,0.5)" fontSize="9" fontFamily="DM Mono, monospace">hauteur libre</text>
              <text x="82" y="108" textAnchor="middle"
                fill="rgba(94,122,80,0.5)" fontSize="9" fontFamily="DM Mono, monospace">138 cm ✓</text>

              {/* ── PLATEFORME LIT ── */}
              {/* Espace sous la plateforme (stockage) */}
              <rect x="120" y="80" width="195" height="75"
                fill="rgba(74,106,140,0.1)" stroke="rgba(74,106,140,0.3)" strokeWidth="1" strokeDasharray="4,3"/>
              <text x="217" y="118" textAnchor="middle"
                fill="rgba(74,106,140,0.7)" fontSize="11"
                fontFamily="Barlow Condensed, sans-serif" fontWeight="700">STOCKAGE</text>
              <text x="217" y="131" textAnchor="middle"
                fill="rgba(74,106,140,0.5)" fontSize="9" fontFamily="DM Mono, monospace">frigo · valises · matos</text>

              {/* Caissons (support) */}
              <rect x="120" y="80" width="22" height="75"
                fill="rgba(74,106,140,0.2)" stroke="rgba(74,106,140,0.5)" strokeWidth="1"/>
              <rect x="293" y="80" width="22" height="75"
                fill="rgba(74,106,140,0.2)" stroke="rgba(74,106,140,0.5)" strokeWidth="1"/>

              {/* Plateau (la plateforme) */}
              <rect x="120" y="74" width="195" height="8"
                fill="rgba(196,145,42,0.4)" stroke="rgba(196,145,42,0.7)" strokeWidth="1.5"/>

              {/* Matelas */}
              <rect x="120" y="54" width="195" height="20"
                fill="rgba(196,145,42,0.15)" stroke="rgba(196,145,42,0.4)" strokeWidth="1" strokeDasharray="3,3"/>
              <text x="217" y="68" textAnchor="middle"
                fill="rgba(196,145,42,0.6)" fontSize="9" fontFamily="DM Mono, monospace">matelas 10cm</text>

              {/* Label lit */}
              <text x="217" y="44" textAnchor="middle"
                fill="rgba(196,145,42,0.9)" fontSize="14"
                fontFamily="Barlow Condensed, sans-serif" fontWeight="900">LIT FIXE</text>

              {/* ── Dimensions ── */}
              {/* Hauteur totale */}
              <line x1="12" y1="20" x2="12" y2="163" stroke="#3a3a32" strokeWidth="0.8"/>
              <line x1="8" y1="20" x2="16" y2="20" stroke="#3a3a32" strokeWidth="0.8"/>
              <line x1="8" y1="163" x2="16" y2="163" stroke="#3a3a32" strokeWidth="0.8"/>
              <text x="7" y="96" textAnchor="middle" fill="#5a5a50"
                fontSize="8" fontFamily="DM Mono, monospace"
                transform="rotate(-90 7 96)">138 cm</text>

              {/* Hauteur plateforme */}
              <line x1="350" y1="82" x2="350" y2="163" stroke="rgba(196,145,42,0.5)" strokeWidth="0.8" strokeDasharray="3,2"/>
              <line x1="346" y1="82" x2="354" y2="82" stroke="rgba(196,145,42,0.5)" strokeWidth="0.8"/>
              <line x1="346" y1="163" x2="354" y2="163" stroke="rgba(196,145,42,0.5)" strokeWidth="0.8"/>
              <text x="360" y="128" textAnchor="middle" fill="rgba(196,145,42,0.6)"
                fontSize="8" fontFamily="DM Mono, monospace"
                transform="rotate(90 360 128)">~60 cm</text>

              {/* Longueur lit */}
              <line x1="120" y1="190" x2="315" y2="190" stroke="rgba(196,145,42,0.4)" strokeWidth="0.8" strokeDasharray="3,2"/>
              <text x="217" y="200" textAnchor="middle" fill="rgba(196,145,42,0.6)"
                fontSize="8" fontFamily="DM Mono, monospace">190 cm</text>

              {/* Longueur chien */}
              <line x1="45" y1="190" x2="120" y2="190" stroke="rgba(94,122,80,0.4)" strokeWidth="0.8" strokeDasharray="3,2"/>
              <text x="82" y="200" textAnchor="middle" fill="rgba(94,122,80,0.6)"
                fontSize="8" fontFamily="DM Mono, monospace">60 cm</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Légende */}
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={styles.dot} style={{ background: '#c4912a' }}/>
          <div>
            <div className={styles.legendLabel}>Lit fixe · 190 × 166 cm</div>
            <div className={styles.legendSub}>Plateforme contreplaqué 18mm · sur 2 caissons latéraux · hauteur ~60cm</div>
          </div>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.dot} style={{ background: '#5e7a50' }}/>
          <div>
            <div className={styles.legendLabel}>Coin chien · ~60cm</div>
            <div className={styles.legendSub}>Sol plat · hauteur libre 138cm · accès depuis portes ou côtés</div>
          </div>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.dot} style={{ background: '#4a6a8c' }}/>
          <div>
            <div className={styles.legendLabel}>Stockage sous le lit</div>
            <div className={styles.legendSub}>Frigo · valises · matériel · caissons intégrés sur les côtés</div>
          </div>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.dot} style={{ background: '#3a3a32' }}/>
          <div>
            <div className={styles.legendLabel}>Arches de roue</div>
            <div className={styles.legendSub}>Montées à ~25cm seulement → plateforme à 60cm passe au-dessus, pleine largeur 166cm ✓</div>
          </div>
        </div>
      </div>
    </div>
  )
}
