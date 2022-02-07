import * as React from 'react'
// components
import { Screen } from '../../shared/components'
import { Settings } from '../../modules/settings'
// theme
import { styles } from '../../shared/theme'

const SettingsScreen = () => {
  return (
    <Screen style={styles.SCREEN_CONTAINER}>
      <Settings />
    </Screen>
  )
}

export { SettingsScreen }
