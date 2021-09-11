// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

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

  update(ctx) {
    this.draw(ctx)
    this.collision()
    this.x += this.dx
    this.y += this.dy
  }

  collision() {
    if (this.x < 0 || this.x > window.innerWidth) {
      this.dx *= -1
    } else if (this.y < 0 || this.y > window.innerHeight) {
      this.dy *= -1
    }
  }
}

//Clear the screen
function clearScreen(ctx) {
  ctx.fillStyle = "#FFFFFF"
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
}

function resizeCanvasToDisplaySize(canvas) {
  // look up the size the canvas is being displayed
  const width = canvas.clientWidth
  const height = canvas.clientHeight

  // If it's resolution does not match change it
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
    return true
  }

  return false
}
// function drawLines(c) {
//   c.beginPath()
//   c.strokeStyle = "#959595"
//   if (circle[0] != null) {
//     c.moveTo(circle[0].x, circle[0].y)
//   }

//   for (var i = 1; i < circle.length; i++) {
//     c.lineTo(circle[i].x, circle[i].y)
//   }
//   c.stroke()
// }

function animate(circle, canvas, ctx) {
  requestAnimationFrame(animate)
  // resizeCanvasToDisplaySize(canvas)
  // clearScreen(ctx)
  for (var i = 0; i < circle.length; i++) {
    circle[i].update(ctx)
  }
}

export { Circle, animate }
