import { createStore } from "vuex";

// firebase imports
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log("user state changed: ", state.user)
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    }
  },

  // Functions
  actions: {
    async signup(context, { email, password }) {
      console.log('context & payload', email)

      // async code for signup with firebase auth
      const res = await createUserWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could not fetch the result')
      }
    },
    async login(context, { email, password }) {
      console.log('login action')

      const res = await signInWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could not fetch the login')
      }
    },
    async logout(context) {
      console.log("log out")

      await signOut(auth)
      context.commit('setUser', null)
    }
  },
})
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  unsub()
})

export default store