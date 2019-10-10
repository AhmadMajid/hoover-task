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

}
