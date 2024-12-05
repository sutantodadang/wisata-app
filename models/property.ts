
export interface Property {
    id: string
    location_type: string
    name: string
    name_suffix: string
    slug: string
    fuzzy_ratio: number
    hit_quality: number
    highlight_data: HighlightData
}

export interface HighlightData {
    name: string
    name_suffix: string
}
