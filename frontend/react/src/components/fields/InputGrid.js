import React from "react"
import { TextField } from "@cmsgov/design-system-core"
import { InputGridHint } from "./InputGridHint"


export const InputGrid = question => {
  const subStyle = question.subquestion ? `ds-u-padding--2 subquestion` : `ds-u-padding--1`
  return (
    <div className={`input-grid ${subStyle}`}>
      <label className="ds-c-label" >{question.label}</label>
      <span className="ds-c-field__hint">{question.hint}</span>
      {question.helpDrawer && <InputGridHint />}
      <div className="ds-l-row input-grid__total">
        <div className="ds-l-col"><TextField name={`${question.id}-a`} id={`${question.id}-a`} numeric label="Total for all ages (0-16 year olds)" size="medium" /></div>
      </div>
      <div className="ds-l-row input-grid__groups ds-u-margin-top--0">
        <div className="ds-l-col"><TextField name={`${question.id}-b`} id={`${question.id}-b`} numeric label="0-1 year olds" /></div>
        <div className="ds-l-col"><TextField name={`${question.id}-c`} id={`${question.id}-c`} numeric label="1-5 year olds" /></div>
        <div className="ds-l-col"><TextField name={`${question.id}-d`} id={`${question.id}-d`} numeric label="6-12 year olds" /></div>
        <div className="ds-l-col"><TextField name={`${question.id}-e`} id={`${question.id}-e`} numeric label="13-16 year olds" /></div>
      </div>
    </div>
  )
}
