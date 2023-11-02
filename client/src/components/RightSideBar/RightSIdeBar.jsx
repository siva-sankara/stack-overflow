import React from 'react'
import './RightSideBar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'
const RightSIdeBar = ({theme}) => {
  return (
    <aside className='right-sidebar'>
        <Widget theme={theme} />
        <WidgetTags theme={theme} />
    </aside>
  )
}

export default RightSIdeBar
