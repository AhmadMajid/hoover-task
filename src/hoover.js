class Hoover {
  constructor(roomDimensions, hooverPosition, patchDirt, instructions) {
    this.roomDimensions = roomDimensions;
    this.position = {x: hooverPosition[0], y: hooverPosition[1]};
    this.patchDirt = patchDirt;
    this.instructions = instructions;
    this.counter = 0;
  }

  moveHoover(instructions) {
    if(instructions == 'N') {
      this.position.y += 1;
    }else if (instructions == 'E') {
      this.position.x += 1;
    }else if (instructions == 'S') {
      this.position.y -= 1;
    }else if (instructions == 'W') {
      this.position.x -= 1;
    }
    return this.position
  }

  runHoover(instructions) {
    let arrayInstructions = instructions.split('')

    arrayInstructions.forEach((instruction) => {
      this.moveHoover(instruction)

      this.patchDirt.forEach((dirtyPatch) => {
        if (this.position.x == dirtyPatch[0] && this.position.y == dirtyPatch[1]){
          let index = this.patchDirt.indexOf(dirtyPatch)
          this.counter +=1
          this.patchDirt.splice(index, 1)
        }
      })
    })

    return `Here are the X and Y coordinates marking the position of the hoover after processing all commands: X:${this.position.x}, Y:${this.position.y}.`
    return `Here are the number of patches of dirt the robot cleaned up: ${this.counter}`
  }


}
