import React, { useState } from 'react'
import { Choice } from "@cmsgov/design-system-core"

export const Checkbox = ({ text }) => {
  const [totalCheckbox, setCheckbox] = useState('')
  const toggleChoice = e => {
    setCheckbox(e.currentTarget.checked)
  }

  return (
    <Choice
      className={`part__checkboxFlag ${totalCheckbox ? `checked` : ``}`}
      name={`2020-03-c-04-a`}
      id={`2020-03-c-04-01-unmarked_descendants`}
      onChange={toggleChoice}
    >{text}</Choice>
  )
}