import React from 'react'
import './Badge.css'

function Badge({variant="gray", shape="square", children}) {
  return (
    <div className={`badge-component ${variant} ${shape}`}>{children}</div>
  )
}

export default Badge


// How to use :
/*
    import Badge from './components/Badge'
    
    // Square variant
    <Badge variant='red'>Badge</Badge>
    <Badge variant='green'>Badge</Badge>
    <Badge variant='blue'>Badge</Badge>
    
    // Pill variant
    <Badge variant='yellow' shape='pill'>Badge</Badge>
    <Badge variant='purple' shape='pill'>Badge</Badge>
    <Badge variant='indigo' shape='pill'>Badge</Badge>
*/