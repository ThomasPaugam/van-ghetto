import { useState } from 'react'
import { STATUTS } from '../data/achats'
import styles from './Achats.module.css'

export default function Achats({ categories, getStatut, cycleStatut, totalBudget, totalRecu, totalCommande }) {
  const [openCats, setOpenCats] = useState(() => new Set(categories.map(c => c.id)))

  const toggleCat = (id) => {
    setOpenCats(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const pctRecu = Math.round((totalRecu / totalBudget) * 100)
  const pctCommande = Math.round((totalCommande / totalBudget) * 100)

  return (
    <div className={styles.root}>
      {/* Budget global */}
      <div className={styles.budgetCard}>
        <div className={styles.budgetHeader}>
          <span className={styles.budgetLabel}>Budget total estimé</span>
          <span className={styles.budgetAmount}>{totalBudget} €</span>
        </div>
        <div className={styles.budgetBar}>
          <div className={styles.budgetBarRecu} style={{ width: `${pctRecu}%` }} />
          <div className={styles.budgetBarCommande} style={{ width: `${pctCommande}%`, marginLeft: `${pctRecu}%` }} />
        </div>
        <div className={styles.budgetLegend}>
          <span className={styles.legendRecu}>Reçu — {totalRecu} €</span>
          <span className={styles.legendCommande}>Commandé — {totalCommande} €</span>
          <span className={styles.legendReste}>Reste — {totalBudget - totalRecu - totalCommande} €</span>
        </div>
      </div>

      {/* Catégories */}
      <div className={styles.categories}>
        {categories.map(cat => {
          const isOpen = openCats.has(cat.id)
          const catTotal = cat.items.reduce((acc, i) => acc + i.prix, 0)
          const catRecu = cat.items.filter(i => getStatut(i.id) === 'recu').length
          const catDone = catRecu === cat.items.length

          return (
            <div key={cat.id} className={`${styles.category} ${catDone ? styles.categoryDone : ''}`}>
              <button className={styles.catHeader} onClick={() => toggleCat(cat.id)}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <span className={styles.catLabel}>{cat.label}</span>
                <span className={styles.catCount}>{catRecu}/{cat.items.length}</span>
                <span className={styles.catTotal}>{catTotal} €</span>
                <span className={styles.catChevron}>{isOpen ? '−' : '+'}</span>
              </button>

              {isOpen && (
                <ul className={styles.items}>
                  {cat.items.map(item => {
                    const statut = getStatut(item.id)
                    const { label: statutLabel, color } = STATUTS[statut]
                    return (
                      <li key={item.id} className={`${styles.item} ${styles[`item_${statut.replace('-', '_')}`]}`}>
                        <button
                          className={`${styles.badge} ${styles[`badge_${color}`]}`}
                          onClick={() => cycleStatut(item.id)}
                          title="Cliquer pour changer le statut"
                        >
                          {statutLabel}
                        </button>
                        <div className={styles.itemBody}>
                          <span className={`${styles.itemLabel} ${statut === 'recu' ? styles.itemLabelDone : ''}`}>
                            {item.label}
                          </span>
                          {item.detail && (
                            <span className={styles.itemDetail}>{item.detail}</span>
                          )}
                        </div>
                        <span className={styles.itemPrix}>{item.prix} €</span>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
