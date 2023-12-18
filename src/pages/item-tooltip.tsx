import { useState, useEffect, createContext } from 'react'
import { fetchItems, fetchJPAbilities } from '@/script/fetch'
import Text from '@/pages/components/Text'
import AbilityCastType from './components/AbilityCastType'


export default () => {
  const [abilityName, setAbilityName] = useState<string>('')
  const [itemData, setItemData] = useState(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const url = new URL(window.location.href)
    const params = url.searchParams
    const abilityName = params.get('name')
    if(!abilityName) {
      setError('パラメータが不正です')
      return
    }
    setAbilityName(abilityName)
  })

  useEffect(() => {
    if (!abilityName) return
    const fetchData = async () => {
      try {
        const itemData = await fetchItems()
        setItemData(itemData[abilityName])
      } catch (error) {
        setError('データの取得に失敗しました')
      }
    }
    fetchData()
  }, [abilityName])

  return (
    <>
      {itemData ? (
        <div>
          <section className='title'>
            <h1><Text f='abilities' k={`DOTA_Tooltip_Ability_${abilityName}`}></Text></h1>
          </section>
          <p>キャスト: <AbilityCastType value={itemData['AbilityBehavior']}></AbilityCastType></p>
        </div>
      ) : (
        <div>{error || "Loading..." }</div>
      )}
    </>
  )
}