"use client"

import { useState } from "react"
import Image, { ImageProps } from "next/image"
import { Spinner } from "@/components/ui/spinner"

// Expects to sit inside a positioned (relative/absolute) ancestor — same contract as next/image's `fill`.
// The opacity fade lives on a wrapper div, never on the <Image> itself, so it never collides with
// hover/transform transition classes callers put on the image (e.g. group-hover:scale-105).
export function LoadingImage(props: ImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/60 animate-pulse">
          <Spinner className="size-6 text-muted-foreground" />
        </div>
      )}
      <div className="absolute inset-0" style={{ opacity: loaded ? 1 : 0, transition: "opacity 500ms" }}>
        <Image
          {...props}
          onLoad={(e) => {
            setLoaded(true)
            props.onLoad?.(e)
          }}
          onError={(e) => {
            setLoaded(true)
            props.onError?.(e)
          }}
        />
      </div>
    </>
  )
}
