window.addEventListener('load', () => {
  let roomDimensions;
  let hooverPosition;
  let patchDirt;
  let instructions = 'NNESEESWNWW'
  let lines;
  let hoover;
  const hooverPositionX = document.querySelector('.hoover-position .x-coordinate')
  const hooverPositionY = document.querySelector('.hoover-position .y-coordinate')
  const dirt = document.querySelector('.dirt .patch-dirt')
  const coordinates = document.querySelector('.coordinate')
  const dirtyPatchesMessage = document.querySelector('.patch-dirt-mesesage')
  const input = document.querySelector('input[type="file"]')

  let hoover = new Hoover(roomDimensions, hooverPosition, patchDirt, instructions)

  hoover.runHoover(hoover.instructions)

  coordinates.addEventListener('click', () => {
    hooverPositionX.textContent = hoover.position.x
    hooverPositionY.textContent = hoover.position.y
  })

  dirtyPatchesMessage.addEventListener('click', () => {
    dirt.textContent = hoover.counter
  })


  input.addEventListener('change', (c) => {
    const reader = new FileReader()
    reader.onload = () => {
      lines = reader.result.split('\n').map((line) => {
        return line.replace(/ /g, "").split('')
      })
      lines.splice(-1,1)
      roomDimensions = stringToInt(lines[0])
      hooverPosition = stringToInt(lines[1])
      patchDirt = [stringToInt(lines[2]), stringToInt(lines[3]), stringToInt(lines[4])]
      hoover = new Hoover(roomDimensions, hooverPosition, patchDirt, instructions)
      hoover.runHoover(hoover.instructions)
    }
    reader.readAsText(input.files[0])
  }, false)

  function stringToInt(array){
    let newArray=[];
    for(var i=0; i<array.length; i++) {
      newArray.push(parseInt(array[i]))
    }
    return newArray
  }



})
