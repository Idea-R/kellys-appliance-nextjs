export type CountyKey = 'sonoma' | 'marin' | 'napa'

export interface CityDef {
  name: string
  slug: string
}

export const counties: Record<CountyKey, { name: string; slug: string; cities: CityDef[] }> = {
  sonoma: {
    name: 'Sonoma County',
    slug: 'sonoma-county',
    cities: [
      { name: 'Santa Rosa', slug: 'santa-rosa' },
      { name: 'Petaluma', slug: 'petaluma' },
      { name: 'Rohnert Park', slug: 'rohnert-park' },
      { name: 'Cotati', slug: 'cotati' },
      { name: 'Sebastopol', slug: 'sebastopol' },
      { name: 'Sonoma', slug: 'sonoma' },
      { name: 'Windsor', slug: 'windsor' },
      { name: 'Healdsburg', slug: 'healdsburg' },
      { name: 'Forestville', slug: 'forestville' },
      { name: 'Guerneville', slug: 'guerneville' },
      { name: 'Glen Ellen', slug: 'glen-ellen' },
      { name: 'Bodega Bay', slug: 'bodega-bay' },
      { name: 'Dillon Beach', slug: 'dillon-beach' },
    ],
  },
  marin: {
    name: 'Marin County',
    slug: 'marin-county',
    cities: [
      { name: 'San Rafael', slug: 'san-rafael' },
      { name: 'Novato', slug: 'novato' },
      { name: 'Mill Valley', slug: 'mill-valley' },
      { name: 'Sausalito', slug: 'sausalito' },
      { name: 'Tiburon', slug: 'tiburon' },
      { name: 'Corte Madera', slug: 'corte-madera' },
      { name: 'Larkspur', slug: 'larkspur' },
    ],
  },
  napa: {
    name: 'Napa County',
    slug: 'napa-county',
    cities: [
      { name: 'Napa', slug: 'napa' },
    ],
  },
}

export const allCitySlugs: string[] = Object.values(counties)
  .flatMap(c => c.cities.map(city => `/${city.slug}`))

export const allCountyPaths: string[] = Object.values(counties)
  .map(c => `/service-locations/${c.slug}`)

export const allCityPaths: string[] = Object.values(counties)
  .flatMap(c => c.cities.map(city => `/service-locations/${city.slug}`))


