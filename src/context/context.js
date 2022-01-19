import React, { useState } from 'react'
import sublinks from '../constants/links'

const GatsbyContext = React.createContext()

export const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [links] = useState(sublinks)

  const showSidebar = () => {
    setIsSidebarOpen(true)
  }
  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <GatsbyContext.Provider
      value={{ isSidebarOpen, links, showSidebar, hideSidebar }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

// custom useGlobalContext hook
export const useGlobalContext = () => {
  return React.useContext(GatsbyContext)
}
