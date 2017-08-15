import Vuex from 'vuex'
// import headerIMG from '~/assets/images/headerPhoto.jpg'

/* Innuti store så sätts alla default-värden, och kan användas och/eller ändras för olika sidor */
const store = () => {
  return new Vuex.Store({
    state: {
      headerTitle: '',
      headerText: '',
      headerImageFileName: 'index'
    },
    mutations: {
      changeHeaderImageFileName (state, name) {
        state.headerImageFileName = name
      },
      changeHeaderTitle (state, title) {
        // console.log('CHANGING TITLE TO:' + title)
        state.headerTitle = title
      },
      changeHeaderText (state, text) {
        // console.log('CHANGING TEXT TO:' + text)
        state.headerText = text
      },
      resetHeaderTextandTitle (state) {
        state.headerText = ''
        state.headerTitle = ''
      }
    },
    actions: {
      // Denna action körs för att få tillgång till store och default-värden vid server side rendering
      nuxtServerInit ({ commit }) {
        // console.log('nuxtServerInit dispatch')
      },
      resetHeaderTextandTitle ({ commit }) {
        commit('resetHeaderTextandTitle')
      },
      changeHeaderImageFileName ({ commit }, fileName) {
        commit('changeHeaderImageFileName', fileName)
      }
    },
    getters: {
      headerImageFileName: state => {
        return state.headerImageFileName
      }
    }
  })
}

export default store
