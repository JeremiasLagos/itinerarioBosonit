const arrCities2 = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Bordeaux', country: 'France', capital: false},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Florence', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]

const noCapitalCities = (arr) => {
  let newArr = []
  arr.filter(arr => arr.capital !== true).map((cities) => {if(cities.country === 'Spain') {
    newArr.push({city: cities.city, 'isSpain': true})
  } else {
    newArr.push({city: cities.city, 'isSpain': false})
  }})
  return newArr
}
console.log(noCapitalCities(arrCities2));



                                            