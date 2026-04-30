"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Reveal } from "@/components/reveal"

interface Review {
  author_name: string
  relative_time_description: string
  rating: number
  text: string
  profile_photo_url: string | null
  time: number
}

interface ReviewsData {
  rating: number
  user_ratings_total: number
  reviews: Review[]
  source: string
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => setReviewsData(data))
      .catch(console.error)
  }, [])

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', checkScroll, { passive: true })
    checkScroll()
    return () => el.removeEventListener('scroll', checkScroll)
  }, [checkScroll, reviewsData])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: direction === 'left' ? -360 : 360, behavior: 'smooth' })
  }

  useEffect(() => {
    if (!scrollRef.current || !reviewsData) return
    const interval = setInterval(() => {
      if (!scrollRef.current) return
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      if (scrollLeft >= scrollWidth - clientWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' })
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [reviewsData])

  const reviews = reviewsData?.reviews || []
  const rating = reviewsData?.rating || 4.7
  const totalReviews = reviewsData?.user_ratings_total || 143

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" aria-labelledby="testimonios-heading">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0091DA] uppercase tracking-wider mb-3">Opiniones reales</p>
            <h2 id="testimonios-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05] mb-6">Lo que dicen nuestros clientes</h2>
            <p className="text-muted-foreground leading-relaxed">
              Opiniones reales de nuestros asegurados.
            </p>
          </div>
          <div className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-border/60 shadow-sm shrink-0">
            <div className="flex items-center gap-3">
              <Star className="w-7 h-7 text-amber-400 fill-amber-400" />
              <div>
                <div className="text-3xl font-bold text-foreground leading-none">{rating}</div>
                <div className="flex gap-0.5 mt-1">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
              </div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-bold text-foreground">{totalReviews} opiniones</p>
              <p className="text-xs text-muted-foreground">Valoración media</p>
            </div>
          </div>
        </Reveal>

        <div className="flex gap-2 mb-4 justify-end">
          <button onClick={() => scroll('left')} className={`w-10 h-10 rounded-full border border-border/60 flex items-center justify-center transition-all ${canScrollLeft ? 'hover:bg-muted text-foreground' : 'text-muted-foreground/40 cursor-not-allowed'}`} disabled={!canScrollLeft} aria-label="Opiniones anteriores">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll('right')} className={`w-10 h-10 rounded-full border border-border/60 flex items-center justify-center transition-all ${canScrollRight ? 'hover:bg-muted text-foreground' : 'text-muted-foreground/40 cursor-not-allowed'}`} disabled={!canScrollRight} aria-label="Siguientes opiniones">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {reviews.map((review, i) => (
            <div key={`${review.author_name}-${i}`} className="snap-start shrink-0 w-[340px] sm:w-[360px] group bg-white rounded-2xl p-6 border border-border/60 hover:border-[#0091DA]/20 hover:shadow-lg transition-all duration-300">
              <Quote className="w-8 h-8 text-[#0091DA]/15 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-4">{review.text}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#0091DA]/10 flex items-center justify-center">
                    <span className="text-[#0091DA] font-semibold text-sm">{review.author_name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{review.author_name}</p>
                    <p className="text-xs text-muted-foreground">{review.relative_time_description}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
