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
<<<<<<< HEAD
              Opiniones reales de nuestros asegurados.
=======
              Opiniones verificadas de Google.{" "}
              {reviewsData?.source === 'google_api' && (
                <span className="inline-flex items-center gap-1 text-xs text-[#0091DA] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  En directo
                </span>
              )}
>>>>>>> be20582e09389210bd048c3b8d7f471a367075e8
            </p>
          </div>
          <div className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-border/60 shadow-sm shrink-0">
            <div className="flex items-center gap-3">
<<<<<<< HEAD
              <Star className="w-7 h-7 text-amber-400 fill-amber-400" />
=======
              <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
>>>>>>> be20582e09389210bd048c3b8d7f471a367075e8
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
<<<<<<< HEAD
              <p className="text-xs text-muted-foreground">Valoración media</p>
=======
              <p className="text-xs text-muted-foreground">en Google</p>
>>>>>>> be20582e09389210bd048c3b8d7f471a367075e8
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
