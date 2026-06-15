import styles from './Ressources.module.css'

const SECTIONS = [
  {
    id: 'lit',
    title: 'Lit plateforme DIY',
    links: [
      {
        url: 'https://lesavanturiers.com/creation-du-couchage-lit-fixe/',
        label: 'Les Avanturiers — Créer un lit fixe dans un fourgon',
        desc: 'Meilleur tuto. Étapes détaillées, liste matériaux, photos.',
        tag: 'Tuto',
      },
      {
        url: 'https://superbaroudeur.com/lit-peigne-van',
        label: 'Superbaroudeur — Lit peigne van',
        desc: 'Caissons CP18mm, bonne base pour adapter au Trafic.',
        tag: 'Tuto',
      },
      {
        url: 'https://toitsalternatifs.fr/conseils-pratiques/amenager-un-fourgon-construire-un-lit-peigne-coulissant-etape-par-etape/',
        label: 'Toits Alternatifs — Lit peigne coulissant étape par étape',
        desc: 'Plan + liste de débit complète. Spécifique Trafic H1L1.',
        tag: 'Tuto',
      },
      {
        url: 'https://inoko.fr/comment-fabriquer-un-lit-peigne/',
        label: 'Inoko — Comment fabriquer un lit peigne',
        desc: 'Synthèse matériaux, alternatives sans scie sauteuse.',
        tag: 'Tuto',
      },
      {
        url: 'https://www.trafic-amenage.com/forum/viewtopic.php?t=31439',
        label: 'trafic-amenage.com — Lit dans la largeur à l\'arrière',
        desc: 'Thread avec photos, retours de gens sur Trafic L1H1.',
        tag: 'Forum',
      },
      {
        url: 'https://www.trafic-amenage.com/forum/viewtopic.php?t=57806',
        label: 'trafic-amenage.com — Eric, Trafic 2 L1H1 + lit avec photos',
        desc: 'Build complet documenté avec photos.',
        tag: 'Forum',
      },
      {
        url: 'https://www.trafic-amenage.com/forum/viewtopic.php?t=40934',
        label: 'trafic-amenage.com — Comment faire le lit peigne',
        desc: 'Technique bandes contreplaqué.',
        tag: 'Forum',
      },
      {
        url: 'https://www.forum.trafic-amenage.com/viewtopic.php?t=33306',
        label: 'trafic-amenage.com — Quelle banquette/lit pour L1H1',
        desc: 'Comparatif solutions couchage L1H1.',
        tag: 'Forum',
      },
    ],
  },
  {
    id: 'amenagement',
    title: 'Aménagement général',
    links: [
      {
        url: 'https://superbaroudeur.com/amenager-un-renault-trafic-l1h1-avec-deux-portes',
        label: 'Superbaroudeur — Guide aménagement Trafic L1H1',
        desc: 'Référence FR, guide complet.',
        tag: 'Guide',
      },
      {
        url: 'https://bougetafrance.fr/itineraires-experiences/amenagement-trafic-l1h1-guide-ultime-transformer-utilitaire-van-loisirs',
        label: 'Bouge ta France — Guide ultime Trafic L1H1',
        desc: 'Transformation utilitaire en van loisirs.',
        tag: 'Guide',
      },
      {
        url: 'https://www.trafic-amenage.com/forum/',
        label: 'trafic-amenage.com — Forum de référence',
        desc: '43 000 topics, LA communauté Trafic française.',
        tag: 'Forum',
      },
    ],
  },
  {
    id: 'electricite',
    title: 'Électricité & solaire',
    links: [
      {
        url: 'https://ooba.fr/tests-avis-produits/materiel-energetique/ecoflow-delta-2-mon-retour-dexperience-apres-6-mois/',
        label: 'Ooba.fr — EcoFlow Delta 2, retour 6 mois van life',
        desc: 'Frigo 50L + LEDs + ventilo + PC sans problème.',
        tag: 'Test',
      },
      {
        url: 'https://vanpowercalc.com/en/flexible-vs-rigid-solar-panels-van-roof',
        label: 'VanPowerCalc — Panneaux flexibles vs rigides',
        desc: 'Rigide 172W vs flexible 128W dans les mêmes conditions.',
        tag: 'Test',
      },
      {
        url: 'https://re.jrc.ec.europa.eu/pvg_tools/en/',
        label: 'PVGIS (EU) — Ensoleillement France',
        desc: 'Outil officiel EU pour calculer production solaire par région.',
        tag: 'Outil',
      },
    ],
  },
  {
    id: 'bivouac',
    title: 'Spots & bivouac',
    links: [
      {
        url: 'https://park4night.com',
        label: 'Park4Night',
        desc: 'Spots bivouac France + Europe, avec avis et photos.',
        tag: 'Appli',
      },
      {
        url: 'https://www.france-passion.com',
        label: 'France Passion',
        desc: '~30€/an · 2 200 domaines agricoles pour dormir gratuitement.',
        tag: 'Appli',
      },
    ],
  },
]

const TAG_COLORS = {
  'Tuto': 'var(--ochre)',
  'Forum': 'var(--sage)',
  'Guide': 'var(--ochre)',
  'Test': '#6a8ca0',
  'Outil': '#8a6ab0',
  'Appli': 'var(--terra)',
}

export default function Ressources() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2 className={styles.title}>Ressources</h2>
        <p className={styles.subtitle}>{SECTIONS.reduce((acc, s) => acc + s.links.length, 0)} liens · tutos · forums · outils</p>
      </div>

      <div className={styles.sections}>
        {SECTIONS.map(section => (
          <div key={section.id} className={styles.section}>
            <h3 className={styles.sectionTitle}>{section.title}</h3>
            <div className={styles.links}>
              {section.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <div className={styles.linkTop}>
                    <span className={styles.linkLabel}>{link.label}</span>
                    <span
                      className={styles.linkTag}
                      style={{ color: TAG_COLORS[link.tag] }}
                    >
                      {link.tag}
                    </span>
                  </div>
                  <p className={styles.linkDesc}>{link.desc}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
