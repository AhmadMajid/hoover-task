class Hoover {
  constructor(roomDimensions, hooverPosition, patchesOfDirt, instructions) {
    this.roomDimensions = {x: roomDimensions[0], y: roomDimensions[1]};
    this.position = {x: hooverPosition[0], y: hooverPosition[1]};
    this.patchesOfDirt = patchesOfDirt;
    this.instructions = instructions;

    this.counter = 0;
  }

  moveHoover(instruction) {
    if(instruction == 'N' && this.position.y < 5) {
      this.position.y += 1;
    }else if (instruction == 'E' && this.position.x < 5) {
      this.position.x += 1;
    }else if (instruction == 'S' && this.position.y > -1) {
      this.position.y -= 1;
    }else if (instruction == 'W' && this.position.x > -1) {
      this.position.x -= 1;
    }

    return this.position
  }

  runHoover(instructions) {
    let arrayinstructions = instructions.split('')

    arrayinstructions.forEach((instruction) => {
      this.moveHoover(instruction)

      this.patchesOfDirt.forEach((patchOfDirt) => {
        if (this.position.x == patchOfDirt[0] && this.position.y == patchOfDirt[1]){
          let index = this.patchesOfDirt.indexOf(patchOfDirt)
          this.counter +=1
          this.patchesOfDirt.splice(index, 1)
        }
      })
    })
  }
}
