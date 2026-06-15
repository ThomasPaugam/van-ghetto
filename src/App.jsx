import { useState, useEffect } from 'react'
import Achats from './components/Achats'
import PlanVan from './components/PlanVan'
import InfosVan from './components/InfosVan'
import Ressources from './components/Ressources'
import { CATEGORIES, STATUT_CYCLE } from './data/achats'
import styles from './App.module.css'

const TABS = [
  { id: 'achats', label: 'Achats' },
  { id: 'plan', label: 'Plan' },
  { id: 'van', label: 'Van' },
  { id: 'ressources', label: 'Ressources' },
]

const STORAGE_KEY = 'van-ghetto-statuts'

export default function App() {
  const [activeTab, setActiveTab] = useState('achats')

  const [statuts, setStatuts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(statuts))
  }, [statuts])

  const cycleStatut = (itemId) => {
    setStatuts(prev => ({
      ...prev,
      [itemId]: STATUT_CYCLE[prev[itemId] || 'a-acheter'],
    }))
  }

  const getStatut = (itemId) => {
    if (statuts[itemId] !== undefined) return statuts[itemId]
    const item = CATEGORIES.flatMap(c => c.items).find(i => i.id === itemId)
    return item?.statut || 'a-acheter'
  }

  const allItems = CATEGORIES.flatMap(c => c.items)
  const totalBudget = allItems.reduce((acc, i) => acc + i.prix, 0)
  const totalRecu = allItems
    .filter(i => getStatut(i.id) === 'recu')
    .reduce((acc, i) => acc + i.prix, 0)
  const totalCommande = allItems
    .filter(i => getStatut(i.id) === 'commande')
    .reduce((acc, i) => acc + i.prix, 0)

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.title}>
            <span className={styles.titleVan}>VAN</span>
            <span className={styles.titleGhetto}>GHETTO</span>
            <span className={styles.titleYear}>ÉTÉ 2026</span>
          </div>
          <div className={styles.headerMeta}>
            <span className={styles.metaTag}>Trafic 3 · L1H1</span>
            <span className={styles.metaTag}>2 pers. + 1 chien 40kg</span>
          </div>
        </div>
      </header>

      <nav className={styles.nav}>
        <div className={styles.navInner}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
          <div className={styles.budgetPill}>
            <span className={styles.budgetSpent}>{totalRecu}€</span>
            <span className={styles.budgetSep}>/</span>
            <span className={styles.budgetTotal}>{totalBudget}€</span>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        {activeTab === 'achats' && (
          <Achats
            categories={CATEGORIES}
            getStatut={getStatut}
            cycleStatut={cycleStatut}
            totalBudget={totalBudget}
            totalRecu={totalRecu}
            totalCommande={totalCommande}
          />
        )}
        {activeTab === 'plan' && <PlanVan />}
        {activeTab === 'van' && <InfosVan />}
        {activeTab === 'ressources' && <Ressources />}
      </main>
    </div>
  )
}
