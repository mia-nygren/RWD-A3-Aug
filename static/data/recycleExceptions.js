import categoriesJson from '~/static/data/categories'
import municipalitiesJson from '~/static/data/municipalities'

let C = {}
for (let category of categoriesJson.categories) {
  C[category.name] = category.name
}

let M = {}
for (let municipality of municipalitiesJson.municipalities) {
  M[municipality.name] = municipality.name
}

const recycleExceptions = [
  { municipality: M.Nora,
    additionalInfo: [{
      category: C.Plast,
      info: 'I Nora kommun sorterar vi plast i två olika behållare. Mjukplast för sig och hårdplast för sig.'
    }]},
  { municipality: M.Lindesberg,
    additionalInfo: [{
      category: C.Batterier,
      info: 'I Lindesberg kommun sorterar vi batterier i två olika behållare.'
    }]}
]

export default recycleExceptions
