

export interface Availbility {
    property_id: string
    offer_summary_data: OfferSummaryData
    offer_list: OfferList[]
    offers: Offer[]
}

export interface OfferSummaryData { }

export interface OfferList {
    offer_id: string
    price_total: number
    rate_nightly: number
    room_name: string
    room_available: string
    room_bed_groups: string
    room_size_sqm: number
    room_views: string
    room_images: RoomImage[]
    meal_plan_code: string
    meal_plan_description: string
    cancel_policy_code: string
    cancel_policy_deadline: string
    cancel_policy_description: string
    price_check_href: string
    tax: number
    tax_rate: number
    xcode_log: XcodeLog
    room_data: RoomData
    pricing_data: PricingData
}

export interface RoomImage {
    caption: string
    size_sm: string
}

export interface XcodeLog {
    id: string
    status: string
    available_rooms: number
    refundable: boolean
    member_deal_available: boolean
    sale_scenario: SaleScenario
    merchant_of_record: string
    amenities: Amenities
    links: Links
    bed_groups: BedGroups
    cancel_penalties: CancelPenalty[]
    occupancy_pricing: OccupancyPricing
}

export interface SaleScenario {
    package: boolean
    member: boolean
    corporate: boolean
    distribution: boolean
}

export interface Amenities {
    "2109": N2109
    "2192": N2192
    "1073742786"?: N1073742786
}

export interface N2109 {
    id: string
    name: string
}

export interface N2192 {
    id: string
    name: string
}

export interface N1073742786 {
    id: string
    name: string
}

export interface Links {
    payment_options: PaymentOptions
}

export interface PaymentOptions {
    method: string
    href: string
}

export interface BedGroups {
    "37365"?: N37365
    "37340"?: N37340
    "37321"?: N37321
    "37339"?: N37339
    "37316"?: N37316
    "37979"?: N37979
    "37417"?: N37417
}

export interface N37365 {
    id: string
    description: string
    links: Links2
    configuration: Configuration[]
}

export interface Links2 {
    price_check: PriceCheck
}

export interface PriceCheck {
    method: string
    href: string
}

export interface Configuration {
    type: string
    size: string
    quantity: number
}

export interface N37340 {
    id: string
    description: string
    links: Links3
    configuration: Configuration2[]
}

export interface Links3 {
    price_check: PriceCheck2
}

export interface PriceCheck2 {
    method: string
    href: string
}

export interface Configuration2 {
    type: string
    size: string
    quantity: number
}

export interface N37321 {
    id: string
    description: string
    links: Links4
    configuration: Configuration3[]
}

export interface Links4 {
    price_check: PriceCheck3
}

export interface PriceCheck3 {
    method: string
    href: string
}

export interface Configuration3 {
    type: string
    size: string
    quantity: number
}

export interface N37339 {
    id: string
    description: string
    links: Links5
    configuration: Configuration4[]
}

export interface Links5 {
    price_check: PriceCheck4
}

export interface PriceCheck4 {
    method: string
    href: string
}

export interface Configuration4 {
    type: string
    size: string
    quantity: number
}

export interface N37316 {
    id: string
    description: string
    links: Links6
    configuration: Configuration5[]
}

export interface Links6 {
    price_check: PriceCheck5
}

export interface PriceCheck5 {
    method: string
    href: string
}

export interface Configuration5 {
    type: string
    size: string
    quantity: number
}

export interface N37979 {
    id: string
    description: string
    links: Links7
    configuration: Configuration6[]
}

export interface Links7 {
    price_check: PriceCheck6
}

export interface PriceCheck6 {
    method: string
    href: string
}

export interface Configuration6 {
    type: string
    size: string
    quantity: number
}

export interface N37417 {
    id: string
    description: string
    links: Links8
    configuration: Configuration7[]
}

export interface Links8 {
    price_check: PriceCheck7
}

export interface PriceCheck7 {
    method: string
    href: string
}

export interface Configuration7 {
    type: string
    size: string
    quantity: number
}

export interface CancelPenalty {
    start: string
    end: string
    nights: string
    currency: string
}

export interface OccupancyPricing {
    "2": N2
}

export interface N2 {
    nightly: Nightly[][]
    totals: Totals
}

export interface Nightly {
    type: string
    value: string
    currency: string
}

export interface Totals {
    gross_profit: GrossProfit
    exclusive: Exclusive
    inclusive: Inclusive
    property_inclusive: PropertyInclusive
    marketing_fee: MarketingFee
}

export interface GrossProfit {
    billable_currency: BillableCurrency
    request_currency: RequestCurrency
}

export interface BillableCurrency {
    value: string
    currency: string
}

export interface RequestCurrency {
    value: string
    currency: string
}

export interface Exclusive {
    billable_currency: BillableCurrency2
    request_currency: RequestCurrency2
}

export interface BillableCurrency2 {
    value: string
    currency: string
}

export interface RequestCurrency2 {
    value: string
    currency: string
}

export interface Inclusive {
    billable_currency: BillableCurrency3
    request_currency: RequestCurrency3
}

export interface BillableCurrency3 {
    value: string
    currency: string
}

export interface RequestCurrency3 {
    value: string
    currency: string
}

export interface PropertyInclusive {
    billable_currency: BillableCurrency4
    request_currency: RequestCurrency4
}

export interface BillableCurrency4 {
    value: string
    currency: string
}

export interface RequestCurrency4 {
    value: string
    currency: string
}

export interface MarketingFee {
    billable_currency: BillableCurrency5
    request_currency: RequestCurrency5
}

export interface BillableCurrency5 {
    value: string
    currency: string
}

export interface RequestCurrency5 {
    value: string
    currency: string
}

export interface RoomData {
    is_mapped: boolean
    is_decoded: boolean
    id: string
}

export interface PricingData {
    strikethrough_rate_nightly: any
    strikethrough_price_total: any
    rate_nightly: number
    price_total: number
    cashback_rate: number
    cashback_pct: number
    net_rate_nightly: number
    net_price_total: number
    bonus_cashback_rate: number
    bonus_cashback_pct: number
    net_rate_nightly_with_bonus: number
    net_price_total_with_bonus: number
    wisata_point: number
    saving_pct: number
}

export interface Offer {
    offer_id: string
    price_total: number
    rate_nightly: number
    room_name: string
    room_available: string
    room_bed_groups: string
    room_size_sqm: number
    room_views: string
    room_images: RoomImage2[]
    meal_plan_code: string
    meal_plan_description: string
    cancel_policy_code: string
    cancel_policy_deadline: string
    cancel_policy_description: string
    price_check_href: string
    tax: number
    tax_rate: number
    xcode_log: XcodeLog2
    room_data: RoomData2
    pricing_data: PricingData2
}

export interface RoomImage2 {
    caption: string
    size_sm: string
}

export interface XcodeLog2 {
    id: string
    status: string
    available_rooms: number
    refundable: boolean
    member_deal_available: boolean
    sale_scenario: SaleScenario2
    merchant_of_record: string
    amenities: Amenities2
    links: Links9
    bed_groups: BedGroups2
    cancel_penalties: CancelPenalty2[]
    occupancy_pricing: OccupancyPricing2
}

export interface SaleScenario2 {
    package: boolean
    member: boolean
    corporate: boolean
    distribution: boolean
}

export interface Amenities2 {
    "2109": N21092
    "2192": N21922
    "1073742786"?: N10737427862
}

export interface N21092 {
    id: string
    name: string
}

export interface N21922 {
    id: string
    name: string
}

export interface N10737427862 {
    id: string
    name: string
}

export interface Links9 {
    payment_options: PaymentOptions2
}

export interface PaymentOptions2 {
    method: string
    href: string
}

export interface BedGroups2 {
    "37365"?: N373652
    "37340"?: N373402
    "37321"?: N373212
    "37339"?: N373392
    "37316"?: N373162
    "37979"?: N379792
    "37417"?: N374172
}

export interface N373652 {
    id: string
    description: string
    links: Links10
    configuration: Configuration8[]
}

export interface Links10 {
    price_check: PriceCheck8
}

export interface PriceCheck8 {
    method: string
    href: string
}

export interface Configuration8 {
    type: string
    size: string
    quantity: number
}

export interface N373402 {
    id: string
    description: string
    links: Links11
    configuration: Configuration9[]
}

export interface Links11 {
    price_check: PriceCheck9
}

export interface PriceCheck9 {
    method: string
    href: string
}

export interface Configuration9 {
    type: string
    size: string
    quantity: number
}

export interface N373212 {
    id: string
    description: string
    links: Links12
    configuration: Configuration10[]
}

export interface Links12 {
    price_check: PriceCheck10
}

export interface PriceCheck10 {
    method: string
    href: string
}

export interface Configuration10 {
    type: string
    size: string
    quantity: number
}

export interface N373392 {
    id: string
    description: string
    links: Links13
    configuration: Configuration11[]
}

export interface Links13 {
    price_check: PriceCheck11
}

export interface PriceCheck11 {
    method: string
    href: string
}

export interface Configuration11 {
    type: string
    size: string
    quantity: number
}

export interface N373162 {
    id: string
    description: string
    links: Links14
    configuration: Configuration12[]
}

export interface Links14 {
    price_check: PriceCheck12
}

export interface PriceCheck12 {
    method: string
    href: string
}

export interface Configuration12 {
    type: string
    size: string
    quantity: number
}

export interface N379792 {
    id: string
    description: string
    links: Links15
    configuration: Configuration13[]
}

export interface Links15 {
    price_check: PriceCheck13
}

export interface PriceCheck13 {
    method: string
    href: string
}

export interface Configuration13 {
    type: string
    size: string
    quantity: number
}

export interface N374172 {
    id: string
    description: string
    links: Links16
    configuration: Configuration14[]
}

export interface Links16 {
    price_check: PriceCheck14
}

export interface PriceCheck14 {
    method: string
    href: string
}

export interface Configuration14 {
    type: string
    size: string
    quantity: number
}

export interface CancelPenalty2 {
    start: string
    end: string
    nights: string
    currency: string
}

export interface OccupancyPricing2 {
    "2": N22
}

export interface N22 {
    nightly: Nightly2[][]
    totals: Totals2
}

export interface Nightly2 {
    type: string
    value: string
    currency: string
}

export interface Totals2 {
    gross_profit: GrossProfit2
    exclusive: Exclusive2
    inclusive: Inclusive2
    property_inclusive: PropertyInclusive2
    marketing_fee: MarketingFee2
}

export interface GrossProfit2 {
    billable_currency: BillableCurrency6
    request_currency: RequestCurrency6
}

export interface BillableCurrency6 {
    value: string
    currency: string
}

export interface RequestCurrency6 {
    value: string
    currency: string
}

export interface Exclusive2 {
    billable_currency: BillableCurrency7
    request_currency: RequestCurrency7
}

export interface BillableCurrency7 {
    value: string
    currency: string
}

export interface RequestCurrency7 {
    value: string
    currency: string
}

export interface Inclusive2 {
    billable_currency: BillableCurrency8
    request_currency: RequestCurrency8
}

export interface BillableCurrency8 {
    value: string
    currency: string
}

export interface RequestCurrency8 {
    value: string
    currency: string
}

export interface PropertyInclusive2 {
    billable_currency: BillableCurrency9
    request_currency: RequestCurrency9
}

export interface BillableCurrency9 {
    value: string
    currency: string
}

export interface RequestCurrency9 {
    value: string
    currency: string
}

export interface MarketingFee2 {
    billable_currency: BillableCurrency10
    request_currency: RequestCurrency10
}

export interface BillableCurrency10 {
    value: string
    currency: string
}

export interface RequestCurrency10 {
    value: string
    currency: string
}

export interface RoomData2 {
    is_mapped: boolean
    is_decoded: boolean
    id: string
}

export interface PricingData2 {
    strikethrough_rate_nightly: any
    strikethrough_price_total: any
    rate_nightly: number
    price_total: number
    cashback_rate: number
    cashback_pct: number
    net_rate_nightly: number
    net_price_total: number
    bonus_cashback_rate: number
    bonus_cashback_pct: number
    net_rate_nightly_with_bonus: number
    net_price_total_with_bonus: number
    wisata_point: number
    saving_pct: number
}
