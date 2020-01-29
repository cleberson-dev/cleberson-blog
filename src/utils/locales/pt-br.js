const categories = {
  all: `Todos`,
  programming: `Programação`,
  personal: `Pessoal`,
  computing: `Computação`,
  english: `Inglês`,
  web: `Web`
}

export const getCategoryLocale = (category) => categories[category] || category;