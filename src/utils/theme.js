const theme = {
  colors: {
    primary: '#011627',
    outro1: '#B1B1B1',  
    outro2: '#F9F9F9',
    postCategories: {
      programming: '#00F95B',
      personal: '#FF9F1C',
      computing: '#011627',
      english: '#E71D36',
      web: '#009EF9',
      default: '#69306D'
    }  
  }
}


export const getPostCategoryColor = (category) => {
  return theme.colors.postCategories[category] || theme.colors.postCategories.default;
}

export default theme;
