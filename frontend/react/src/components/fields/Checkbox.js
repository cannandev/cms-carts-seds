import React, { useState } from 'react'
import { Choice } from "@cmsgov/design-system-core"

export const Checkbox = _ => {
  const [totalCheckbox, setCheckbox] = useState('')
  const checkboxFlagText = `I don’t have data for the individual age groups. I’ll report data for the total number for all age groups (0-18 years) instead.`
  const toggleChoice = e => {
    setCheckbox(e.currentTarget.checked)
  }

  return (
    <Choice
      className={`part__checkboxFlag ${totalCheckbox ? `checked` : ``}`}
      name={`2020-03-c-04-a`}
      id={`2020-03-c-04-01-unmarked_descendants`}
      onChange={toggleChoice}
    >{checkboxFlagText}</Choice>
  )
}