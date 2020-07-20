const stageMiddlewareClean = (data) => {
  const imageData = [];
  for (var item of data.results) {
    imageData.push({
      description: item.description,
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