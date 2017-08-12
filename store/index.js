import Vuex from 'vuex'
import headerIMG from '~/assets/images/headerPhoto.jpg'

/* Innuti store så sätts alla default-värden, och kan användas och/eller ändras för olika sidor */
const store = () => {
  return new Vuex.Store({
    state: {
      headerImageURL: headerIMG,
      headerTitle: '',
      headerText: ''
    },
    mutations: {
      changeHeaderImageURL (state, url) {
        console.log('CHANGING URL HEADER TO:' + url)
        state.headerImageURL = url
      },
      changeHeaderTitle (state, title) {
        console.log('CHANGING TITLE TO:' + title)
        state.headerTitle = title
      },
      changeHeaderText (state, text) {
        console.log('CHANGING TEXT TO:' + text)
        state.headerText = text
      }
    },
    actions: {
      // Denna action körs för att få tillgång till store och default-värden vid server side rendering
      nuxtServerInit ({ commit }) {
        console.log('nuxtServerInit dispatch')
      }
    },
    getters: {
      headerImageURL: state => {
        return state.headerImageURL
      }
    }
  })
}

export default store
