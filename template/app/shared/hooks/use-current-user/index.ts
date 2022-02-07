// hooks
import { useSelector } from 'react-redux'
// types
import { User } from '../../types/entities'
import { RootStore } from '../../../store/modules'

const useCurrentUser = () => {
  return useSelector<RootStore, RootStore['profile']['user']>((state) => state.profile.user) as User
}

export { useCurrentUser }
