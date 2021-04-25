class Processor {
  fetchData = (url) => {
    debugger

    return fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        return data
      })
      .catch((message) => {
        return message
      })
  }
}

export default Processor
