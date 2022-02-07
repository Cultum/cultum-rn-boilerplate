import * as React from 'react'
// components
import { SignUp } from '../../../modules/auth'
import { Screen } from '../../../shared/components'
// theme
import { styles } from '../../../shared/theme'

const SignUpScreen = () => {
  return (
    <Screen style={styles.SCREEN_CONTAINER}>
      <SignUp />
    </Screen>
  )
}

export { SignUpScreen }
