import { useEffect, useRef, useState } from 'react'

/** Adds `.visible` to `.reveal` children when they scroll into view. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const targets = root.classList.contains('reveal')
      ? [root, ...root.querySelectorAll<HTMLElement>('.reveal')]
      : [...root.querySelectorAll<HTMLElement>('.reveal')]

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12 },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return ref
}

/** Type-writer effect cycling through a list of phrases. */
export function useTyped(phrases: string[], typeMs = 65, holdMs = 2200) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(phrases[0])
      return
    }
    let phrase = 0
    let char = 0
    let deleting = false
    let timer: number

    const tick = () => {
      const current = phrases[phrase]
      if (!deleting) {
        char++
        setText(current.slice(0, char))
        if (char === current.length) {
          deleting = true
          timer = window.setTimeout(tick, holdMs)
          return
        }
        timer = window.setTimeout(tick, typeMs)
      } else {
        char--
        setText(current.slice(0, char))
        if (char === 0) {
          deleting = false
          phrase = (phrase + 1) % phrases.length
        }
        timer = window.setTimeout(tick, deleting ? 28 : 500)
      }
    }
    timer = window.setTimeout(tick, 300)
    return () => window.clearTimeout(timer)
  }, [phrases, typeMs, holdMs])

  return text
}

/** Counts a stat like "15+" up from 0 when it enters the viewport. */
export function useCountUp(value: string, durationMs = 1400) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const match = value.match(/^(\d+)(.*)$/)
    if (!match || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }
    const target = parseInt(match[1], 10)
    const suffix = match[2]
    setDisplay(`0${suffix}`)

    let raf = 0
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const step = (now: number) => {
          const t = Math.min((now - start) / durationMs, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(`${Math.round(target * eased)}${suffix}`)
          if (t < 1) raf = requestAnimationFrame(step)
        }
        raf = requestAnimationFrame(step)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, durationMs])

  return { ref, display }
}
