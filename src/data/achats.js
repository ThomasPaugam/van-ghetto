export const CATEGORIES = [
  {
    id: 'electricite',
    label: 'Électricité',
    icon: '⚡',
    items: [
      {
        id: 'batterie',
        label: 'EcoFlow Delta 3 Classic',
        detail: '1024Wh · LiFePO4 · charge 0→80% en 45min · 500W entrée solaire · garantie 5 ans',
        prix: 549,
        statut: 'commande',
      },
      {
        id: 'panneau',
        label: 'Panneau solaire 220W EcoFlow (dépliant)',
        detail: 'TOPCon · 5.1kg · 60×60cm replié · connecteur XT60 natif · IP68 · ~880Wh/jour en été',
        prix: 349,
        statut: 'commande',
      },
      {
        id: 'cable-cigare',
        label: 'Câble allume-cigare EcoFlow',
        detail: 'Charge passive en roulant · 126W · non inclus dans la boîte',
        prix: 20,
        statut: 'commande',
      },
      {
        id: 'frigo',
        label: 'Frigo compresseur 12V — Alpicool CX40',
        detail: '40L · hauteur 44cm (passe sous plateforme 60cm) · ~530-600Wh/24h réel',
        prix: 280,
      },
    ],
  },
  {
    id: 'couchage',
    label: 'Lit / Couchage',
    icon: '🛏',
    items: [
      {
        id: 'plateforme',
        label: 'Plateforme lit DIY (fixe, pleine largeur)',
        detail: 'Contreplaqué pin maritime 18mm · 2 caissons latéraux en tasseaux · H≈60cm (au-dessus des arches) · 190×166cm · découpes droites = LM gratuit',
        prix: 220,
      },
      {
        id: 'mousse',
        label: 'Mousse 10cm (190×166cm)',
        detail: 'Pleine largeur, à faire couper chez un moussieste ou commande en ligne · plus stable qu\'un gonflable',
        prix: 80,
      },
      {
        id: 'sacs',
        label: 'Sacs de couchage × 2',
        detail: 'Adapter à la saison',
        prix: 60,
      },
      {
        id: 'coussin-chien',
        label: 'Tapis / coussin chien',
        detail: 'Dans la zone avant (côté cloison) — sol plat, hauteur libre totale 138cm',
        prix: 15,
      },
    ],
  },
  {
    id: 'cuisine',
    label: 'Cuisine',
    icon: '🔥',
    items: [
      {
        id: 'rechaud',
        label: 'Réchaud Campingaz 1 feu + bouteille',
        detail: '',
        prix: 40,
      },
      {
        id: 'vaisselle',
        label: 'Vaisselle',
        detail: 'Casserole, assiettes, couverts, couteau',
        prix: 25,
      },
    ],
  },
  {
    id: 'eau',
    label: 'Eau',
    icon: '💧',
    items: [
      {
        id: 'jerricane',
        label: 'Jerricane 20L',
        detail: 'Volume pour 2 personnes + chien 40kg par grosse chaleur',
        prix: 25,
      },
      {
        id: 'eaux-grises',
        label: 'Bidon eaux grises',
        detail: '',
        prix: 10,
      },
    ],
  },
  {
    id: 'exterieur',
    label: 'Vie extérieure',
    icon: '🌿',
    items: [
      {
        id: 'tarp',
        label: 'Tarp + cordes (auvent)',
        detail: 'Solution ghetto et polyvalente · pas besoin de rails de toit',
        prix: 30,
      },
      {
        id: 'table',
        label: 'Table pliante camping',
        detail: '',
        prix: 40,
      },
      {
        id: 'chaises',
        label: 'Chaises camping × 2',
        detail: '',
        prix: 45,
      },
      {
        id: 'tapis-ext',
        label: 'Tapis extérieur',
        detail: 'Délimite l\'espace salon devant le van',
        prix: 25,
      },
      {
        id: 'lanterne',
        label: 'Lanterne LED rechargeable',
        detail: '',
        prix: 25,
      },
    ],
  },
  {
    id: 'ventilation',
    label: 'Ventilation',
    icon: '💨',
    items: [
      {
        id: 'moustiquaire',
        label: 'Moustiquaire magnétique portes arrière',
        detail: 'Se fixe sans outil sur les portes · insectes dehors, air qui circule',
        prix: 20,
      },
      {
        id: 'tendeur',
        label: 'Tendeur / câble butée portes',
        detail: 'Maintient les portes entrouvertes à ~10cm',
        prix: 5,
      },
      {
        id: 'ventilo',
        label: 'Ventilateur 12V portable',
        detail: 'Branché sur l\'EcoFlow · dirigé vers le bas pour brasser l\'air',
        prix: 20,
      },
      {
        id: 'stores',
        label: 'Stores réfléchissants vitres',
        detail: 'Priorité 1 sans travaux · réduit massivement la chaleur par radiation solaire',
        prix: 50,
      },
    ],
  },
  {
    id: 'chien',
    label: 'Chien',
    icon: '🐕',
    items: [
      {
        id: 'gamelles',
        label: 'Gamelles pliantes × 2',
        detail: '',
        prix: 10,
      },
      {
        id: 'tapis-rafraichissant',
        label: 'Tapis rafraîchissant gel',
        detail: 'Fonctionne passivement, pas besoin d\'électricité · 15-30€',
        prix: 20,
      },
    ],
  },
]

export const STATUTS = {
  'a-acheter': { label: 'À acheter', color: 'muted' },
  'commande': { label: 'Commandé', color: 'ochre' },
  'recu': { label: 'Reçu ✓', color: 'sage' },
}

export const STATUT_CYCLE = {
  'a-acheter': 'commande',
  'commande': 'recu',
  'recu': 'a-acheter',
}
