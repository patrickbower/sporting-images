// clean data and only return what we need
const stageMiddlewareClean = (data) => {
  return data.results.map(item => {
    return {
      description: item.description === null ? item.alt_description : item.description,
      alt: item.alt_description,
      url: item.urls.regular,
      name: item.user.name,
      link: item.user.links.html,
      color: item.color,
      id: item.id
    }
  })  
}

export default stageMiddlewareClean;