import React from 'react'

export const InputGridHint = _ => {
  return (
    <div className="ds-c-field__hint">
      <span>Possible reasons for not being enrolled:</span>
      <ul>
        <li>Transferred to another health insurance program other than CHIP</li>
        <li>Didn’ t meet eligibility criteria anymore</li>
        <li>Didn’ t complete documentation</li>
        <li>Didn’ t pay a premium or enrollment fee</li>
      </ul>
    </div>
  )
}