function cleanSlug (slug) {
  return slug.toLowerCase().split(' ').join('')
}

let small = 'small'
let medium = 'medium'
let large = 'large'

// export so this can imported in other files
export {cleanSlug, small, medium, large}
