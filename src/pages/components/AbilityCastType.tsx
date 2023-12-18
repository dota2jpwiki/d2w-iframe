import React from 'react'
import Text from '@/pages/components/Text'

type Props = {
  value: string
}

const AbilityCastType = (props: Props) => {
  const value = new Set(props.value.split('|').map((v) => v.trim()))
  if(value.has('DOTA_ABILITY_BEHAVIOR_POINT')) {
    return <Text f='dota' k='DOTA_ToolTip_Ability_Point'></Text>
  }
  return <Text f='dota' k='DOTA_ToolTip_Ability_NoTarget'></Text>
}

export default AbilityCastType
