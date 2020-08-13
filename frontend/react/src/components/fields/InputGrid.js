import React from "react"
import { TextField } from "@cmsgov/design-system-core"

export const InputGrid = question => {
  return (
    <div className="input-grid ds-l-container ds-u-padding--0">
      <h4 className="ds-u-margin-bottom--0 ds-u-padding-top--2">{question.title}</h4>
      <label className="ds-c-label" fieldId={`2020-03-c-04-${question.marker}`} >{`${question.marker}. ${question.label}`}</label>
      <span className="ds-c-field__hint">{question.hint}</span>
      <div className="ds-l-row input-grid__total">
        <div className="ds-l-col"><TextField name={`2020-03-c-04-${question.marker}-a`} id={`${question.id}-a`} numeric label="Total for all ages (0-16 year olds)" size="medium" /></div>
      </div>
      <div className="ds-l-row input-grid__subset ds-u-margin-top--0">
        <div className="ds-l-col"><TextField name={`${question.id}-b`} id={`${question.id}-b`} numeric label="0-1 year olds" /></div>
        <div className="ds-l-col"><TextField name={`${question.id}-c`} id={`${question.id}-c`} numeric label="1-5 year olds" /></div>
        <div className="ds-l-col"><TextField name={`${question.id}-d`} id={`${question.id}-d`} numeric label="6-12 year olds" /></div>
        <div className="ds-l-col"><TextField name={`${question.id}-e`} id={`${question.id}-e`} numeric label="13-16 year olds" /></div>
      </div>
    </div>
  )
}
