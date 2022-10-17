let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 10, 'community centre']
]


const chooseStations = function (stations) {
  let goodStations = [];
  for (let item of stations) {
    if ((item[1] >= 20) && (item[2] === 'school' || item[2] === 'community centre')) {
      goodStations.push(item[0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));