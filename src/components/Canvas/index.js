import React, { useRef, useEffect } from "react"
import { Circle } from "../../util/canvas"

const Canvas = props => {
  const canvasRef = useRef(null)

  const draw = (ctx, circleArray) => {
    for (const circle of circleArray) {
      circle.draw(ctx)
    }
  }
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const circleArray = []
    for (let i = 0; i < 10; i++) {
      circleArray.push(
        new Circle(
          Math.random() * canvas.clientWidth,
          Math.random() * canvas.clientHeight
        )
      )
    }
    // Scales the canvas appropriately
    const scale = window.devicePixelRatio // <--- Change to 1 on retina screens to see blurry canvas.
    canvas.width = canvas.clientWidth * scale
    canvas.height = canvas.clientHeight * scale

    ctx.scale(scale, scale)
    draw(ctx, circleArray)
  }, [])

  return <canvas ref={canvasRef} {...props} />
}

export default Canvas
