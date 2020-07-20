// clean data and only return what we need
const stageMiddlewareClean = (data) => {
  const imageData = [];
  for (var item of data.results) {
    const imageDesc = item.description === null ? item.alt_description : item.description;
    imageData.push({
      description: imageDesc,
      alt: item.alt_description,
      url: item.urls.regular,
      name: item.user.name,
      link: item.user.links.html,
      color: item.color,
      id: item.id
    })
  }
  return imageData;
}

export default stageMiddlewareClean;