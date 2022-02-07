import * as React from 'react'
// components
import { Users } from '../../../modules/home'
import { Screen } from '../../../shared/components'
// theme
import { styles } from '../../../shared/theme'

const UsersScreen = () => {
  return (
    <Screen style={styles.SCREEN_CONTAINER}>
      <Users />
    </Screen>
  )
}

export { UsersScreen }
