export const fetchNPCAbilities = async () => {
  const res = await fetch("https://raw.githubusercontent.com/dotabuff/d2vpkr/master/dota/scripts/npc/npc_abilities.json")
  const json = await res.json()
  return json.DOTAAbilities
}

export const fetchItems = async () => {
  const res = await fetch("https://raw.githubusercontent.com/dotabuff/d2vpkr/master/dota/scripts/npc/items.json")
  const json = await res.json()
  return json.DOTAAbilities
}

export const fetchJPAbilities = async (): Promise<Map<string, string>> => {
  const res = await fetch("https://raw.githubusercontent.com/nihongoka/dota2/master/main/resource/localization/abilities_japanese.txt.json")
  const json = await res.json()
  return new Map(Object.entries(json))
}

export const fetchJPDota = async (): Promise<Map<string, string>> => {
  const res = await fetch("https://raw.githubusercontent.com/nihongoka/dota2/master/main/resource/localization/dota_japanese.txt.json")
  const json = await res.json()
  return new Map(Object.entries(json))
}
