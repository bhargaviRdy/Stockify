export class Processor {
  static _fetchData = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (message) {
      return message
    }
  }

  static _formatData = (data) => {
    let dataToRender = []
    let tempData = Object.values(data)[1]
    let dates = Object.keys(tempData)

    dates.map((item) => {
      dataToRender.push({
        label: item,
        value: tempData[item]['4. close']
      })
    })

    return dataToRender
  }
}
