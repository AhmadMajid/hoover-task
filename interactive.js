window.addEventListener('load', () => {
  let roomDimensions = [5,5];
  let hooverPosition = [1,2];
  let patchDirt = [[1,0],[2,2],[2,3]];
  let instructions = 'NNESEESWNWW'
  const hooverPositionX = document.querySelector('.hoover-position .x-coordinate')
  const hooverPositionY = document.querySelector('.hoover-position .y-coordinate')
  const dirt = document.querySelector('.dirt .patch-dirt')
  const coordinates = document.querySelector('.coordinate')
  const dirtyPatchesMessage = document.querySelector('.patch-dirt-mesesage')

  let hoover = new Hoover(roomDimensions, hooverPosition, patchDirt, instructions)

  hoover.runHoover(hoover.instructions)

  coordinates.addEventListener('click', () => {
    hooverPositionX.textContent = hoover.position.x
    hooverPositionY.textContent = hoover.position.y
  })

  dirtyPatchesMessage.addEventListener('click', () => {
    dirt.textContent = hoover.counter
  })

})
