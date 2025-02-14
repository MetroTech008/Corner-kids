"use client"

import { useState } from "react"

export default function ColorButton() {
  const [color, setColor] = useState("bg-red-500")

  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-pink-500"]

  const changeColor = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)]
    setColor(newColor)
  }

  return (
    <button
      className={`${color} text-white font-bold py-2 px-4 rounded-full text-lg transition-colors duration-300`}
      onClick={changeColor}
    >
      Click me to change my color!
    </button>
  )
}

