import * as React from 'react'
// hooks
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
// components
import { Auth } from '../shared/components/auth'
// store
import * as API from '../../../store/modules/api'
// types
import { RootStore } from '../../../store/modules'
import { ThunkDispatch } from '../../../store/helpers'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
// constants
import { PrimaryParamList, ROUTES } from '../../../navigation/constants'

interface FormInputs {
  email: string
  password: string
}

type LogInScreenProp = NativeStackNavigationProp<PrimaryParamList, 'LOG_IN'>

const LogIn = () => {
  const dispatch = useDispatch<ThunkDispatch>()
  const navigation = useNavigation<LogInScreenProp>()

  const isLoading = useSelector<RootStore, RootStore['api']['auth']['logIn']['loading']>(
    (state) => state.api.auth.logIn.loading,
  )

  const goToSignUp = () => navigation.navigate(ROUTES.auth.SIGN_UP)

  const logIn = (data: FormInputs) => dispatch(API.auth.logIn.performAPILogIn({ ...data }))

  return <Auth isLoading={isLoading} onFormSubmit={logIn} onNavButtonPress={goToSignUp} />
}

export { LogIn }
