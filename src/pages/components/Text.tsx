import { createContext, useEffect, useState, useContext } from "react";

import { fetchJPAbilities, fetchJPDota } from "@/script/fetch";

const TextContext = createContext<Map<string, Map<string, string>>>(new Map())

const useText = () => {
  const [text] = useState<Map<string, Map<string, string>>>(new Map())
  useEffect(() => {
    const fetchData = async () => {
      const [abilitiesText, dotaText] = await Promise.all([
        fetchJPAbilities(),
        fetchJPDota(),
      ])
      text.set('abilities', abilitiesText)
      text.set('dota', dotaText)
    }
    if (text.size === 0) {
      fetchData()
    }
  }, [])
  return text
}

type Props = {
  f: 'abilities' | 'dota'
  k: string
}

const Text = (props: Props) => {
  const files = useContext(TextContext)
  const file = files.get(props.f)
  if (!file) return props.k
  return file.get(props.k) || props.k
}

export default Text
export { TextContext, useText }