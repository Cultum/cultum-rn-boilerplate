import * as React from 'react'
// components
import { LogIn } from '../../../modules/auth/log-in'
import { Screen } from '../../../shared/components'
// theme
import { styles } from '../../../shared/theme'

const LogInScreen = () => {
  return (
    <Screen style={styles.SCREEN_CONTAINER}>
      <LogIn />
    </Screen>
  )
}

export { LogInScreen }
