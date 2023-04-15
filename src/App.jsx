import React from 'react'
// import CakeContianer from './components/cakeContianer'
import { Provider } from 'react-redux'
// import store from './redux/store'
import postsReducer from './redux/postsReducer';
import { configureStore } from '@reduxjs/toolkit';
import DashboardTablePage from './components/DashboardTablePage'
import NavBar from './components/NavBar';
// import CreatePostModal from './CreatePostModal';
// import store from './store'

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});


export default function App() {
  return (
  <Provider store={store}>
    <div>
      <NavBar/>
      <DashboardTablePage/>
    </div>
  </Provider>
  )
}
 