import React, { useRef, useEffect } from "react"
import * as styles from "./canvas.module.css"
import { Circle } from "../../util/canvas"

const Canvas = props => {
  const canvasRef = useRef(null)

  // Scales the canvas accordingly
  const resizeCanvas = (canvas, context, circleArray) => {
    const scale = window.devicePixelRatio // <--- Change to 1 on retina screens to see blurry canvas.
    canvas.width = canvas.clientWidth * scale
    canvas.height = canvas.clientHeight * scale

    context.scale(scale, scale)
    draw(context, circleArray)
  }

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
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        )
      )
    }
    // Add the event listener to automatically resize canvas
    window.addEventListener("resize", () =>
      resizeCanvas(canvas, ctx, circleArray)
    )
    resizeCanvas(canvas, ctx, circleArray)
  }, [])

  return <canvas ref={canvasRef} {...props} />
}

export default Canvas
