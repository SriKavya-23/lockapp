// Write your code here
import React, {useState} from 'react'

import {
  AppContainer,
  AppStatus,
  AppImage,
  ToggleButton,
} from './styledComponents'

// Example usage in a component
const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)

  const unlockApp = () => {
    setIsLocked(false)
  }

  const lockApp = () => {
    setIsLocked(true)
  }

  return (
    <AppContainer>
      <AppImage
        src={
          isLocked
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={isLocked ? 'lock' : 'unlock'}
      />
      <AppStatus theme={{isLocked}}>
        {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </AppStatus>
      <ToggleButton onClick={isLocked ? unlockApp : lockApp}>
        {isLocked ? 'Unlock' : 'Lock'}
      </ToggleButton>
    </AppContainer>
  )
}

export default Unlock
