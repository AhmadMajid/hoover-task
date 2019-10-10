window.addEventListener('load', () => {
  let roomDimensions;
  let hooverPosition;
  let patchesOfDirt;
  let instructions = 'NNESEESWNWW'
  let lines;
  let hoover;
  const hooverPositionX = document.querySelector('.hoover-position .x-coordinate')
  const hooverPositionY = document.querySelector('.hoover-position .y-coordinate')
  const dirtySection = document.querySelector('.dirt .patches-of-dirt')
  const instructionsText = document.querySelector('.coordinate-message')
  const patchesOfDirtText = document.querySelector('.patches-of-dirt-text')
  const input = document.querySelector('input[type="file"]')


  instructionsText.addEventListener('click', () => {
    hooverPositionX.textContent = hoover.position.x
    hooverPositionY.textContent = hoover.position.y
    console.log("The final coordinates of the hoover is: " + (hooverPositionX.textContent) + ", " + (hooverPositionY.textContent));
  })

  patchesOfDirtText.addEventListener('click', () => {
    dirtySection.textContent = hoover.counter
    console.log(("The number of patches cleaned were: ") + dirtySection.textContent)
  })

  input.addEventListener('change', (i) => {
    const reader = new FileReader()
    reader.onload = () => {
      lines = reader.result.split('\n').map((line) => {
        return line.replace(/ /g, "").split('')
      })
      lines.splice(-1,1)
      roomDimensions = stringToInt(lines[0])
      hooverPosition = stringToInt(lines[1])
      patchesOfDirt = [stringToInt(lines[2]), stringToInt(lines[3]), stringToInt(lines[4])]
      hoover = new Hoover(roomDimensions, hooverPosition, patchesOfDirt, instructions)
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
