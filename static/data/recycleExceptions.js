import teaJSON from '~/static/data/tea'
import citiesJson from '~/static/data/cities'

let T = {}
for (let tea of teaJSON.tea) {
  T[tea.name] = tea.name
}

let M = {}
for (let city of citiesJson.cities) {
  M[city.name] = city.name
}

const recycleExceptions = [
  { municipality: M.Oslo,
    additionalInfo: [{
      category: T.Plast,
      info: 'I Nora kommun sorterar vi plast i två olika behållare. Mjukplast för sig och hårdplast för sig.'
    }]},
  { municipality: M.Helsingfors,
    additionalInfo: [{
      category: T.Batterier,
      info: 'I Lindesberg kommun sorterar vi batterier i två olika behållare.'
    }]}
]

export default recycleExceptions
