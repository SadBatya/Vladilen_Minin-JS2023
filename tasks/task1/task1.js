const wrapper = document.querySelector('.wrapper')

const car = {
  name: 'Hendai Solaris',
	type: 'sedan',
	maxSpeed: '320',
	color: 'red',
}

function createHTMLInfoCar(obj){
  let name = obj.name
  let type = obj.type
  let maxSpeed = obj.maxSpeed
  let color = obj.color

  const container = document.createElement('article')
  const divCarName = document.createElement('div')
  const divCarSpeed = document.createElement('div')
  const divCarColor = document.createElement('div')
  const h2NameCar = document.createElement('h2')
  h2NameCar.innerHTML = name


  const spanFormCar = document.createElement('span')
  spanFormCar.innerHTML = type

  const spanSpeedTitle = document.createElement('span')
  spanSpeedTitle.innerHTML = 'Maximum speed:'
  const spanSpeed = document.createElement('span')
  spanSpeed.innerHTML = maxSpeed



  const spanCarColor = document.createElement('span')
  spanCarColor.innerHTML = 'color:'


  const spanNameColor = document.createElement('span')
  spanNameColor.innerHTML = color

  wrapper.append(container)
  container.append(divCarName)
  divCarName.append(h2NameCar)
  divCarName.append(spanFormCar)

  container.append(divCarSpeed)
  divCarSpeed.prepend(spanSpeedTitle)
  divCarSpeed.append(spanSpeed)

  container.append(divCarColor)
  divCarColor.append(spanCarColor)
  divCarColor.append(spanNameColor)
}


createHTMLInfoCar(car)