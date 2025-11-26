/**
 * Cloudflare Pages Function for fetching Google Reviews
 * Uses Places API (New) to fetch reviews server-side
 */

interface GoogleReview {
  authorAttribution?: {
    displayName?: string
  }
  originalText?: {
    text?: string
  }
  text?: {
    text?: string
  }
  rating?: number
  relativePublishTimeDescription?: string
}

interface GooglePlacesResponse {
  displayName?: {
    text?: string
  }
  rating?: number
  userRatingCount?: number
  reviews?: GoogleReview[]
}

export async function onRequestGet(context: { env: { GOOGLE_PLACES_API_KEY?: string, GOOGLE_PLACES_PLACE_ID?: string } }): Promise<Response> {
  const apiKey = context.env.GOOGLE_PLACES_API_KEY
  const placeId = context.env.GOOGLE_PLACES_PLACE_ID

  if (!apiKey || !placeId) {
    console.error('Missing Google Places config:', {
      hasApiKey: !!apiKey,
      hasPlaceId: !!placeId,
    })
    return new Response(
      JSON.stringify({ error: 'Missing Google Places configuration' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  const fields = [
    'displayName',
    'rating',
    'userRatingCount',
    'reviews',
  ].join(',')

  const url = `https://places.googleapis.com/v1/places/${placeId}`

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': fields,
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('Places API error:', {
        status: res.status,
        statusText: res.statusText,
        body: text,
      })
      return new Response(
        JSON.stringify({ error: 'Failed to fetch reviews from Google Places API' }),
        {
          status: res.status,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const data: GooglePlacesResponse = await res.json()

    // Format response for frontend
    const formattedData = {
      name: data.displayName?.text || 'Kelly\'s Appliance Center',
      rating: data.rating || 0,
      count: data.userRatingCount || 0,
      reviews: (data.reviews || []).map((r: GoogleReview) => ({
        author: r.authorAttribution?.displayName || 'Google user',
        text: r.originalText?.text || r.text?.text || '',
        rating: r.rating || 0,
        relativeTime: r.relativePublishTimeDescription || '',
      })),
    }

    return new Response(JSON.stringify(formattedData), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error while fetching reviews' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}



