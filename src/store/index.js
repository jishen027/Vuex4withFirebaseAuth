import { createStore } from "vuex";

// firebase imports
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const store = createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log("user state changed: ", state.user)
    },
  },
  // Functions
  actions: {
    async signup(context, {email, password}) {
      console.log('context & payload', email)

      // async code for signup with firebase auth
      const res = await createUserWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      }else{
        throw new Error('could not fetch the result')
      }
    },
    async login(context, {email, password}){
      console.log('login action')

      const res = await signInWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      }else{
        throw new Error('could not fetch the login')
      }
    }

  }
})

export default store