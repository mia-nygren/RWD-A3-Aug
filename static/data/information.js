import categoriesJson from '~/static/data/categories'

let C = {}
for (let category of categoriesJson.categories) {
  C[category.name] = category.name
}

const information = [
  { category: C.Batterier,
    info: 'Det är viktigt att du lämnar in ditt elavfall för återvinning, eftersom de innehåller material som kan bli till nya produkter' +
    ' Metallerna kan återvinnas gång på gång utan att de tappar kvalitet.'
  },
  { category: C.Plast,
    info: 'Simul mollis nostrum sit ne, eos ex alienum partiendo. An mea amet aeque, saepe albucius an usu, quem percipit comprehensam usu at. An his eripuit fabellas abhorreant, ei posse dolorem posidonium nec, an nam pertinacia elaboraret. Id has iriure accumsan, vocent iisque consequuntur est a te cum tincidunt scripserit.'
  },
  { category: C.Papper,
    info: 'Ne nostrud fuisset atomorum cum. Ex qui omnesque evertitur. Eu cum ubique debitis. Libris praesent sadipscing ut eum. Duis facilis nusquam id usu, pri consul volumus in, quem quaeque commune ut mea.'
  },
  { category: C.Grovavfall,
    info: 'Ex qui omnesque evertitur. Eu cum ubique debitis. Libris praesent sadipscing ut eum. Duis facilis nusquam id usu, pri consul volumus in, quem quaeque commune ut mea.Ex qui omnesque evertitur. Eu cum ubique debitis. Libris praesent sadipscing ut eum.'
  },
  { category: C.Elavfall,
    info: 'Libris praesent sadipscing ut eum. Duis facilis nusquam id usu, pri consul volumus in, quem quaeque commune ut mea.'
  }
]

export default information
