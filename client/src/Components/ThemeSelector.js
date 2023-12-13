import { useState } from 'react'
import { useTheme } from '../hooks/useTheme.js'
import './ThemeSelector.css'
import modeIcon from '../SVG/mode.svg'

const color = ['#58249c', '#249c6b', '#b70233']




export default function ThemeSelector() {

  const { changeColor , state , changeMode } = useTheme()
 
  let btnColor = ''
  const changeAllColor = (e) => {
    let target = e.target.style.backgroundColor

    if (target === 'rgb(88, 36, 156)') {
      btnColor = '#d7c4f7'
    
    }
    if (target === 'rgb(36, 156, 107)' ) {
      btnColor = '#c3f5e7'
   
    }
    if (target === 'rgb(183, 2, 51)') {
      btnColor = '#ffd3d7'
    
    }


 
  changeColor(e.target.style.backgroundColor, btnColor)
}


return (
  <div className='themeSelector'>
    <div className='contaner' >
      <div> <img style={{filter : state.mode ? 'invert(100%)' :  'invert(20%)'}}  src={modeIcon} onClick={()=> changeMode(!state.mode)} /></div>
     
      <div className='btn_box'>
      {color.map(c => (
        <button key={c} className='btn' style={{ backgroundColor: c }} onClick={(e) => changeAllColor(e)}> </button>
      ))}
      </div>
    </div>
  </div>
)
}
