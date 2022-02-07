import { AxiosInstance } from 'axios'
import { User } from '../../../types/entities'

export interface GetUserParams {
  id: string
}

export interface GetUserResponse {
  data: User
}

export interface GetUsersParams {
  page?: number
}

export interface GetUsersResponse {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
}

export const getUserControllers = (api: AxiosInstance) => ({
  getUser: (params: GetUserParams) => api.get<GetUserResponse>(`/users/${params.id}`),
  getUsers: (params: GetUsersParams) =>
    api.get<GetUsersResponse>('/users', {
      params: { page: 0, ...params },
    }),
})
