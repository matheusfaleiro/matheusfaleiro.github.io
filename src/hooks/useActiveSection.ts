import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[], defaultSection: string = 'hero') {
  const [activeSection, setActiveSection] = useState<string>(defaultSection)

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    const observers: IntersectionObserver[] = []

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    observers.push(observer)

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [sectionIds])

  return activeSection
}
