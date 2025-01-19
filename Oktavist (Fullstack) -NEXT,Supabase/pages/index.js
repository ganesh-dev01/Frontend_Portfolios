import { ThemeContext } from '@/Theme/Themestate'
import React, { useContext } from 'react'
import Welcome from './Welcome'

function Home() {
  const data = useContext(ThemeContext)
  return (
    <div>
      <Welcome />
    </div>
  )
}

export default Home
