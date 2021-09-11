import React, { useRef, useEffect, useState } from "react"
import { Circle, animate } from "../../util/canvas"

const Canvas = props => {
  const canvasRef = useRef(null)
  const [context, setContext] = useState(null)
  const circleArray = []

  const draw = (ctx, circleArray) => {
    for (const circle of circleArray) {
      circle.draw(ctx)
    }
  }

  const animate = () => {
    context.fillStyle = "#FFFFFF"
    context.fillRect(0, 0, window.innerWidth, window.innerHeight)
    for (const circle of circleArray) {
      circle.update(context)
    }
    requestAnimationFrame(animate)
  }

  // Scales the canvas accordingly
  const resizeCanvas = (canvas, context, circleArray) => {
    var scale = window.devicePixelRatio // <--- Change to 1 on retina screens to see blurry canvas.
    canvas.width = canvas.clientWidth * scale
    canvas.height = canvas.clientHeight * scale

    context.scale(scale, scale)
    draw(context, circleArray)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    setContext(context)

    // Initial circles
    for (let i = 0; i < 10; i++) {
      circleArray.push(
        new Circle(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        )
      )
    }
    // Add the event listener to automatically resize canvas
    window.addEventListener("resize", () =>
      resizeCanvas(canvas, context, circleArray)
    )

    // Initially size the canvas
    resizeCanvas(canvas, context, circleArray)
    requestAnimationFrame(animate)
  }, [])

  return <canvas ref={canvasRef} {...props} />
}

export default Canvas
