"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

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
  const containerRef = useRef<HTMLDivElement>(null)
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null)

  // Scroll parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Exaggerated movement: starts from right and moves far to the left
  const xRaw = useTransform(scrollYProgress, [0, 1], [300, -1400])
  const x = useSpring(xRaw, { stiffness: 50, damping: 20 })

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => setReviewsData(data))
      .catch(console.error)
  }, [])

  const reviews = reviewsData?.reviews || []
  const rating = reviewsData?.rating || 4.9
  const totalReviews = reviewsData?.user_ratings_total || 162

  return (
    <section ref={containerRef} className="py-24 lg:py-32 relative overflow-hidden bg-muted/20" aria-labelledby="testimonios-heading">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0091DA] uppercase tracking-wider mb-3">Opiniones reales</p>
            <h2 id="testimonios-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05] mb-6">Lo que dicen nuestros clientes</h2>
            <p className="text-muted-foreground leading-relaxed">
<<<<<<< HEAD
              Opiniones reales de nuestros asegurados.
=======
              Opiniones verificadas de nuestros clientes.{" "}
              {reviewsData?.source === 'google_api' && (
                <span className="inline-flex items-center gap-1 text-xs text-[#0091DA] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  En directo
                </span>
              )}
>>>>>>> 549132e (Añadir login + bugs)
            </p>
          </div>
          <div className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-border/60 shadow-sm shrink-0">
            <div className="flex items-center gap-3">
<<<<<<< HEAD
              <Star className="w-7 h-7 text-amber-400 fill-amber-400" />
=======
              <div className="w-10 h-10 rounded-full bg-[#0091DA]/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-[#0091DA] fill-[#0091DA]" />
              </div>
>>>>>>> 549132e (Añadir login + bugs)
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
              <p className="text-xs text-muted-foreground">verificadas</p>
>>>>>>> 549132e (Añadir login + bugs)
            </div>
          </div>
        </Reveal>

        <div className="relative -mx-6 px-6 overflow-visible">
          <motion.div 
            style={{ x }}
            className="flex gap-6 pb-4"
          >
            {reviews.map((review, i) => (
              <div key={`${review.author_name}-${i}`} className="shrink-0 w-[340px] sm:w-[400px] group bg-white rounded-3xl p-8 border border-border/60 hover:border-[#0091DA]/20 hover:shadow-xl transition-all duration-300">
                <Quote className="w-10 h-10 text-[#0091DA]/10 mb-6" />
                <p className="text-muted-foreground text-base leading-relaxed mb-8 line-clamp-5">{review.text}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0091DA]/10 flex items-center justify-center">
                      <span className="text-[#0091DA] font-bold text-sm">{review.author_name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground">{review.author_name}</p>
                      <p className="text-xs text-muted-foreground">{review.relative_time_description}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
