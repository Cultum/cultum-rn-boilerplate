import * as React from 'react'
// components
import { Screen } from '../../../shared/components'
import { UserDetails } from '../../../modules/home'
// theme
import { styles } from '../../../shared/theme'

const UserDetailsScreen = () => {
  return (
    <Screen style={styles.SCREEN_CONTAINER} statusBar={'dark-content'}>
      <UserDetails />
    </Screen>
  )
}

export { UserDetailsScreen }
