const API_KEY = "decc092c5b55feda6934813533f356d3"

// 🌍 текущая погода
export const getWeather = async (city: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )

    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
    return null
  }
}

// 📅 недельный прогноз
export const getWeeklyWeather = async (city: string) => {
  try {
    const geoRes = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    )

    const geoData = await geoRes.json()

    if (!geoData.length) return []

    const { lat, lon } = geoData[0]

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`
    )

    const data = await res.json()

    return data.daily || []

  } catch (err) {
    console.error(err)
    return []
  }
}