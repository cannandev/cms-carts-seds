import React from 'react'
import { HelpDrawer as Drawer } from '@cmsgov/design-system-core'

export const HelpDrawer = _ => {
  return (
    <Drawer
      footerTitle="Footer Title"
      footerBody={<p className="ds-text ds-u-margin--0">Footer content</p>}
      heading="Help Drawer Heading"
      onCloseClick={() => this.handleDrawerClose()} >
      <strong>Possible reasons for not being enrolled:</strong>
      <ul>
        <li>Transferred to another health insurance program other than CHIP</li>
        <li>Didn’ t meet eligibility criteria anymore</li>
        <li>Didn’ t complete documentation</li>
        <li>Didn’ t pay a premium or enrollment fee</li>
      </ul>
    </Drawer >
  )
}