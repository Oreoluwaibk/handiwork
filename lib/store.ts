import authReducer from '@/redux/reducer/auth'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
    }
  })
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch'];
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof makeStore.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof makeStore.dispatch