export function usePageMotion() {
  const scrollMotion = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay }
  })

  const staggerMotion = (index = 0) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    inViewOptions: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay: index * 0.08 }
  })

  const enterMotion = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay }
  })

  return { scrollMotion, staggerMotion, enterMotion }
}
