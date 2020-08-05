import React from "react"
import { TextField } from "@cmsgov/design-system-core"
import { Choice } from "@cmsgov/design-system-core"

export const InputGrid = props => {
  const index = props.index
  const checkedTotal = <TextField name={`p3_q3_${index}_total`} numeric label="0-16 years old" size="small" />
  return (
    <div className="input-grid ds-l-container ds-u-padding--0">
      <h4 className="ds-u-margin-bottom--0 ds-u-padding-top--2">{index}. {props.title}</h4>
      <div className="ds-l-row ds-u-margin-top--0">
        <div className="ds-l-col"><TextField name={`p3_q3_${index}_a`} numeric label="0-1 year old" /></div>
        <div className="ds-l-col"><TextField name={`p3_q3_${index}_b`} numeric label="1-5 years old" /></div>
        <div className="ds-l-col"><TextField name={`p3_q3_${index}_c`} numeric label="6-12 years old" /></div>
        <div className="ds-l-col"><TextField name={`p3_q3_${index}_d`} numeric label="13-16 years old" /></div>
      </div>
      <Choice
        name={`p3_q3_${index}_total_check`}
        checkedChildren={<div className="ds-c-choice__checkedChild">{checkedTotal}</div>}
      >
        You only have the total number of children between 0-16 years old</Choice>
    </div>
  )

}