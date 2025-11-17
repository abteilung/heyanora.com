import createImageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'
import {createPreviewSubscriptionStore} from './sveltekit/previewSubscriptionStore'
import {sanityConfig} from './config'
import {createCurrentUserStore} from './sveltekit/currentUser'

export const previewSubscription = createPreviewSubscriptionStore(sanityConfig)
export const imageBuilder = createImageUrlBuilder(sanityConfig)

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Automatically respects hotspot and crop settings from Sanity backend.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlForImage = (
  source: SanityImageSource,
  width: number,
  height?: number,
  fitMode: 'crop' | 'max' | 'fill' = 'crop'
) => {
  // Start building the image URL - this automatically includes hotspot/crop data from the asset
  let builder = imageBuilder.image(source).width(width).auto('format')

  // For crop mode, height is required for proper cropping
  // For max/fill modes, height is optional but recommended for better control
  if (height !== undefined && height > 0) {
    builder = builder.height(height)
  }

  // Apply fit mode - hotspot data will be respected automatically
  return builder.fit(fitMode)
}

export const responsiveImage = (
  source: SanityImageSource,
  alt: string = 'image',
  classList: string = '',
  srcs = '780,1280,1920',
  sizes: string = '100vw'
) => {
  const sizeArray: string[] = srcs.split(',')
  const firstSize: string = sizeArray[0]
  const lastSize: string = sizeArray[sizeArray.length - 1]
  const srcSetContent = sizeArray
    .map((size: string) => {
      const url = urlForImage(source, sanityConfig).width(parseInt(size)).auto('format').fit('max').url()
      return `${url} ${size}w`
    })
    .join(',')

  return `<img
			src="${urlForImage(source, sanityConfig).width(parseInt(firstSize))}"
			${classList ? "class='" + classList + "'" : ''}
			${alt ? "alt='" + alt + "'" : 'image'}
			srcset="${srcSetContent}"
			sizes="${sizes}"
			width="${lastSize.trim()}"
		>`
}

export const sanityUser = createCurrentUserStore(sanityConfig)
