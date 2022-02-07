import * as React from 'react'
// components
import { User } from '../../../modules/home'
import { Screen } from '../../../shared/components'
// theme
import { styles } from '../../../shared/theme'

const UserScreen = () => {
  return (
    <Screen style={styles.SCREEN_CONTAINER} statusBar={'dark-content'}>
      <User />
    </Screen>
  )
}

export { UserScreen }
