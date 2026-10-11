'use client'

import { useEffect, useRef } from 'react'

const EFFECT_DEPENDENCIES = [
  'pattern-waves-canvas',
] as const

type PatternWavesProps = {
  className?: string
  color?: string
  backgroundColor?: string
  interactive?: boolean
  cursorSize?: number
  cursorStrength?: number
  spacing?: number
  speed?: number
  direction?: number
  opacity?: number
  fadeSize?: number
  intro?: boolean
  paused?: boolean
  preset?: string
  fade?: string
  pattern?: string
  wave?: string
  markSize?: number
  depth?: number
  light?: number
  shine?: number
  contrast?: number
  scale?: number
  characters?: string
}

export default function PatternWaves({
  className = '',
  color = '#ffffff',
  backgroundColor = '#120f17',
  interactive = true,
  cursorSize = 50,
  cursorStrength = 0.6,
  spacing = 9,
  speed = 0.35,
  direction = 20,
  opacity = 1,
  fadeSize = 0.5,
  intro = true,
  paused = false,
  depth = 0.95,
  shine = 0.8,
}: PatternWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const settingsRef = useRef({
    backgroundColor,
    color,
    cursorSize,
    cursorStrength,
    depth,
    direction,
    fadeSize,
    interactive,
    intro,
    opacity,
    paused,
    shine,
    spacing,
    speed,
  })
  settingsRef.current = {
    backgroundColor,
    color,
    cursorSize,
    cursorStrength,
    depth,
    direction,
    fadeSize,
    interactive,
    intro,
    opacity,
    paused,
    shine,
    spacing,
    speed,
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    let frame = 0
    let raf = 0
    let width = 0
    let height = 0
    let start = performance.now()
    const pointer = { x: -1000, y: -1000 }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
    }
    const leave = () => { pointer.x = -1000; pointer.y = -1000 }

    const draw = (now: number) => {
      const {
        backgroundColor,
        color,
        cursorSize,
        cursorStrength,
        depth,
        direction,
        fadeSize,
        interactive,
        intro,
        opacity,
        paused,
        shine,
        spacing,
        speed,
      } = settingsRef.current

      if (!paused) {
        const elapsed = (now - start) * 0.001 * speed
        context.fillStyle = backgroundColor
        context.fillRect(0, 0, width, height)
        const angle = direction * Math.PI / 180
        const cos = Math.cos(angle)
        const sin = Math.sin(angle)
        const diagonal = Math.hypot(width, height)
        const rows = Math.ceil(diagonal / spacing) + 4
        const columns = Math.ceil(diagonal / spacing) + 4
        const centerX = width / 2
        const centerY = height / 2
        context.strokeStyle = color
        context.lineWidth = 1
        context.globalAlpha = opacity

        const reveal = intro ? Math.min(1, (now - start) / 1200) : 1
        for (let row = -rows; row < rows; row += 1) {
          const sourceY = row * spacing
          context.beginPath()
          for (let column = -columns; column < columns; column += 1) {
            const sourceX = column * spacing
            const x = centerX + sourceX * cos - sourceY * sin
            const y = centerY + sourceX * sin + sourceY * cos
            const distance = Math.hypot(x - pointer.x, y - pointer.y)
            const influence = interactive ? Math.max(0, 1 - distance / (cursorSize * 4)) * cursorStrength : 0
            const silk = Math.sin(sourceX * 0.028 + elapsed * 2.4 + Math.sin(sourceY * 0.02 + elapsed * 1.7))
            const ripple = influence * Math.sin(distance * 0.12 - elapsed * 4.5)
            const lift = silk * 8 * depth + ripple * 26
            const pointX = x + lift * cos
            const pointY = y + lift * sin
            const edge = Math.min(x / width, 1 - x / width, y / height, 1 - y / height)
            const alpha = Math.max(0, Math.min(1, edge / Math.max(0.01, fadeSize * 0.5)))
            const pointAlpha = opacity * alpha * reveal * (0.42 + (silk + 1) * 0.18)
            if (column === -columns) context.moveTo(pointX, pointY)
            else context.lineTo(pointX, pointY)
            context.globalAlpha = pointAlpha
          }
          context.strokeStyle = color
          context.lineWidth = 0.55 + shine * 0.45
          context.stroke()
        }

        for (let row = -rows; row < rows; row += 2) {
          for (let column = -columns; column < columns; column += 2) {
            const sourceX = column * spacing
            const sourceY = row * spacing
            const x = centerX + sourceX * cos - sourceY * sin
            const y = centerY + sourceX * sin + sourceY * cos
            const distance = Math.hypot(x - pointer.x, y - pointer.y)
            const influence = interactive ? Math.max(0, 1 - distance / (cursorSize * 4)) * cursorStrength : 0
            const edge = Math.min(x / width, 1 - x / width, y / height, 1 - y / height)
            const alpha = Math.max(0, Math.min(1, edge / Math.max(0.01, fadeSize * 0.5)))
            context.globalAlpha = opacity * alpha * reveal * (0.15 + influence * 0.85)
            context.fillStyle = color
            context.beginPath()
            context.arc(x, y, 0.45 + influence * 1.5, 0, Math.PI * 2)
            context.fill()
          }
        }
        context.globalAlpha = 1
      }
      frame += 1
      raf = requestAnimationFrame(draw)
    }

    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    if (interactive) {
      canvas.addEventListener('pointermove', move, { passive: true })
      canvas.addEventListener('pointerleave', leave, { passive: true })
    }
    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      canvas.removeEventListener('pointermove', move)
      canvas.removeEventListener('pointerleave', leave)
      frame = 0
    }
  }, EFFECT_DEPENDENCIES)

  return <canvas ref={canvasRef} className={`pattern-waves-canvas ${className}`} aria-hidden="true" />
}
