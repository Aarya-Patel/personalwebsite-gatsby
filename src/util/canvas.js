class Circle {
  constructor(x, y) {
    this.x = x
    this.y = y

    this.radius = Math.random() * 35 + 3
    this.sAngle = 0
    this.eAngle = 2 * Math.PI

    this.dx = Math.random() * 0.2
    this.dy = Math.random() * 0.2

    this.colorArray = ["#013644", "#8f1a1d", "#d3623a", "#fba92e", "#008a93"]
    this.index = Math.floor(Math.random() * this.colorArray.length)
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.fillStyle = this.colorArray[this.index]
    ctx.strokeStyle = this.colorArray[this.index]
    ctx.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle)
    ctx.stroke()
    ctx.fill()
  }
}

export { Circle }
