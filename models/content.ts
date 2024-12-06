
export interface DataContent {
    id: string
    slug: string
    type: string
    name: string
    name_suffix: string
    country_code: string
    address_line: string
    latitude: number
    longitude: number
    catalog: Catalog
    image: Image[]
    room: any
    important_info: ImportantInfo
    general_info: GeneralInfo
    show_amenity: any
}

export interface Catalog {
    fax: string
    city: string
    brand: string
    chain: string
    phone: string
    category: string
    postal_code: string
    star_rating: number
    review_count: number
    review_rating: number
    hero_image_url: HeroImageUrl
}

export interface HeroImageUrl {
    lg: string
    md: string
    sm: string
    th: string
    ori: string
}

export interface Image {
    url: Url
    group: string
    caption: string
}

export interface Url {
    lg: string
    md: string
    sm: string
    th: string
    ori: string
}

export interface Room {
    "314898047": N314898047
    "314898050": N314898050
    "314898052": N314898052
    "314898054": N314898054
    "314898055": N314898055
    "314898056": N314898056
    "314898057": N314898057
    "314898058": N314898058
    "314898060": N314898060
    "314898061": N314898061
    "314898063": N314898063
    "314898066": N314898066
    "314898068": N314898068
    "314898070": N314898070
    "314898073": N314898073
    "314898074": N314898074
    "315445184": N315445184
    "315445185": N315445185
    "315445186": N315445186
    "315445189": N315445189
}

export interface N314898047 {
    id: string
    area: Area
    name: string
    images: Image2[]
    amenities: Amenities
    occupancy: Occupancy
    bed_groups: BedGroups
    descriptions: Descriptions
}

export interface Area {
    square_feet: number
    square_meters: number
}

export interface Image2 {
    links: Links
    caption: string
    category: number
    hero_image: boolean
}

export interface Links {
    "70px": N70px
    "200px": N200px
    "350px": N350px
    "1000px": N1000px
}

export interface N70px {
    href: string
    method: string
}

export interface N200px {
    href: string
    method: string
}

export interface N350px {
    href: string
    method: string
}

export interface N1000px {
    href: string
    method: string
}

export interface Amenities {
    "1": N1
    "26": N26
    "123": N123
    "126": N126
    "128": N128
    "131": N131
    "132": N132
    "133": N133
    "136": N136
    "138": N138
    "141": N141
    "142": N142
    "144": N144
    "145": N145
    "146": N146
    "2015": N2015
    "2025": N2025
    "2026": N2026
    "2034": N2034
    "2037": N2037
    "2039": N2039
    "2046": N2046
    "2054": N2054
    "2056": N2056
    "2057": N2057
    "2081": N2081
    "2149": N2149
    "2162": N2162
    "2170": N2170
    "2370": N2370
    "2379": N2379
    "2397": N2397
    "2399": N2399
    "2403": N2403
    "2405": N2405
    "2579": N2579
    "2807": N2807
    "3501": N3501
    "3502": N3502
    "4951": N4951
    "6213": N6213
    "1073743370": N1073743370
    "1073743371": N1073743371
    "1073743918": N1073743918
    "1073743926": N1073743926
    "1073744237": N1073744237
    "1073744240": N1073744240
    "1073744242": N1073744242
    "1073744243": N1073744243
    "1073744706": N1073744706
    "1073744828": N1073744828
    "1073744831": N1073744831
    "1073745166": N1073745166
    "1073745167": N1073745167
    "1073745294": N1073745294
}

export interface N1 {
    id: string
    name: string
    categories: string[]
}

export interface N26 {
    id: string
    name: string
}

export interface N123 {
    id: string
    name: string
}

export interface N126 {
    id: string
    name: string
}

export interface N128 {
    id: string
    name: string
}

export interface N131 {
    id: string
    name: string
}

export interface N132 {
    id: string
    name: string
}

export interface N133 {
    id: string
    name: string
}

export interface N136 {
    id: string
    name: string
}

export interface N138 {
    id: string
    name: string
}

export interface N141 {
    id: string
    name: string
}

export interface N142 {
    id: string
    name: string
}

export interface N144 {
    id: string
    name: string
}

export interface N145 {
    id: string
    name: string
}

export interface N146 {
    id: string
    name: string
}

export interface N2015 {
    id: string
    name: string
}

export interface N2025 {
    id: string
    name: string
}

export interface N2026 {
    id: string
    name: string
}

export interface N2034 {
    id: string
    name: string
}

export interface N2037 {
    id: string
    name: string
}

export interface N2039 {
    id: string
    name: string
}

export interface N2046 {
    id: string
    name: string
}

export interface N2054 {
    id: string
    name: string
}

export interface N2056 {
    id: string
    name: string
}

export interface N2057 {
    id: string
    name: string
}

export interface N2081 {
    id: string
    name: string
}

export interface N2149 {
    id: string
    name: string
}

export interface N2162 {
    id: string
    name: string
}

export interface N2170 {
    id: string
    name: string
}

export interface N2370 {
    id: string
    name: string
}

export interface N2379 {
    id: string
    name: string
}

export interface N2397 {
    id: string
    name: string
}

export interface N2399 {
    id: string
    name: string
}

export interface N2403 {
    id: string
    name: string
    categories: string[]
}

export interface N2405 {
    id: string
    name: string
}

export interface N2579 {
    id: string
    name: string
    value: string
}

export interface N2807 {
    id: string
    name: string
}

export interface N3501 {
    id: string
    name: string
}

export interface N3502 {
    id: string
    name: string
}

export interface N4951 {
    id: string
    name: string
    categories: string[]
}

export interface N6213 {
    id: string
    name: string
}

export interface N1073743370 {
    id: string
    name: string
}

export interface N1073743371 {
    id: string
    name: string
}

export interface N1073743918 {
    id: string
    name: string
    value: string
}

export interface N1073743926 {
    id: string
    name: string
}

export interface N1073744237 {
    id: string
    name: string
}

export interface N1073744240 {
    id: string
    name: string
}

export interface N1073744242 {
    id: string
    name: string
}

export interface N1073744243 {
    id: string
    name: string
}

export interface N1073744706 {
    id: string
    name: string
}

export interface N1073744828 {
    id: string
    name: string
}

export interface N1073744831 {
    id: string
    name: string
}

export interface N1073745166 {
    id: string
    name: string
}

export interface N1073745167 {
    id: string
    name: string
}

export interface N1073745294 {
    id: string
    name: string
}

export interface Occupancy {
    max_allowed: MaxAllowed
    age_categories: AgeCategories
}

export interface MaxAllowed {
    total: number
    adults: number
    children: number
}

export interface AgeCategories {
    Adult: Adult
    ChildAgeA: ChildAgeA
}

export interface Adult {
    name: string
    minimum_age: number
}

export interface ChildAgeA {
    name: string
    minimum_age: number
}

export interface BedGroups {
    "37321": N37321
}

export interface N37321 {
    id: string
    description: string
    configuration: Configuration[]
}

export interface Configuration {
    size: string
    type: string
    quantity: number
}

export interface Descriptions {
    overview: string
}

export interface N314898050 {
    id: string
    area: Area2
    name: string
    images: Image3[]
    amenities: Amenities2
    occupancy: Occupancy2
    bed_groups: BedGroups2
    descriptions: Descriptions2
}

export interface Area2 {
    square_feet: number
    square_meters: number
}

export interface Image3 {
    links: Links2
    caption: string
    category: number
    hero_image: boolean
}

export interface Links2 {
    "70px": N70px2
    "200px": N200px2
    "350px": N350px2
    "1000px": N1000px2
}

export interface N70px2 {
    href: string
    method: string
}

export interface N200px2 {
    href: string
    method: string
}

export interface N350px2 {
    href: string
    method: string
}

export interface N1000px2 {
    href: string
    method: string
}

export interface Amenities2 {
    "1": N12
    "26": N262
    "123": N1232
    "126": N1262
    "128": N1282
    "131": N1312
    "132": N1322
    "133": N1332
    "136": N1362
    "138": N1382
    "141": N1412
    "142": N1422
    "144": N1442
    "145": N1452
    "146": N1462
    "2015": N20152
    "2025": N20252
    "2026": N20262
    "2034": N20342
    "2037": N20372
    "2039": N20392
    "2046": N20462
    "2054": N20542
    "2056": N20562
    "2057": N20572
    "2081": N20812
    "2149": N21492
    "2162": N21622
    "2170": N21702
    "2379": N23792
    "2397": N23972
    "2399": N23992
    "2403": N24032
    "2405": N24052
    "2579": N25792
    "2807": N28072
    "3501": N35012
    "3502": N35022
    "4951": N49512
    "6213": N62132
    "1073743370": N10737433702
    "1073743371": N10737433712
    "1073743918": N10737439182
    "1073743926": N10737439262
    "1073744237": N10737442372
    "1073744240": N10737442402
    "1073744242": N10737442422
    "1073744243": N10737442432
    "1073744706": N10737447062
    "1073744828": N10737448282
    "1073744831": N10737448312
    "1073745166": N10737451662
    "1073745294": N10737452942
}

export interface N12 {
    id: string
    name: string
    categories: string[]
}

export interface N262 {
    id: string
    name: string
}

export interface N1232 {
    id: string
    name: string
}

export interface N1262 {
    id: string
    name: string
}

export interface N1282 {
    id: string
    name: string
}

export interface N1312 {
    id: string
    name: string
}

export interface N1322 {
    id: string
    name: string
}

export interface N1332 {
    id: string
    name: string
}

export interface N1362 {
    id: string
    name: string
}

export interface N1382 {
    id: string
    name: string
}

export interface N1412 {
    id: string
    name: string
}

export interface N1422 {
    id: string
    name: string
}

export interface N1442 {
    id: string
    name: string
}

export interface N1452 {
    id: string
    name: string
}

export interface N1462 {
    id: string
    name: string
}

export interface N20152 {
    id: string
    name: string
}

export interface N20252 {
    id: string
    name: string
}

export interface N20262 {
    id: string
    name: string
}

export interface N20342 {
    id: string
    name: string
}

export interface N20372 {
    id: string
    name: string
}

export interface N20392 {
    id: string
    name: string
}

export interface N20462 {
    id: string
    name: string
}

export interface N20542 {
    id: string
    name: string
}

export interface N20562 {
    id: string
    name: string
}

export interface N20572 {
    id: string
    name: string
}

export interface N20812 {
    id: string
    name: string
}

export interface N21492 {
    id: string
    name: string
}

export interface N21622 {
    id: string
    name: string
}

export interface N21702 {
    id: string
    name: string
}

export interface N23792 {
    id: string
    name: string
}

export interface N23972 {
    id: string
    name: string
}

export interface N23992 {
    id: string
    name: string
}

export interface N24032 {
    id: string
    name: string
    categories: string[]
}

export interface N24052 {
    id: string
    name: string
}

export interface N25792 {
    id: string
    name: string
    value: string
}

export interface N28072 {
    id: string
    name: string
}

export interface N35012 {
    id: string
    name: string
}

export interface N35022 {
    id: string
    name: string
}

export interface N49512 {
    id: string
    name: string
    categories: string[]
}

export interface N62132 {
    id: string
    name: string
}

export interface N10737433702 {
    id: string
    name: string
}

export interface N10737433712 {
    id: string
    name: string
}

export interface N10737439182 {
    id: string
    name: string
    value: string
}

export interface N10737439262 {
    id: string
    name: string
}

export interface N10737442372 {
    id: string
    name: string
}

export interface N10737442402 {
    id: string
    name: string
}

export interface N10737442422 {
    id: string
    name: string
}

export interface N10737442432 {
    id: string
    name: string
}

export interface N10737447062 {
    id: string
    name: string
}

export interface N10737448282 {
    id: string
    name: string
}

export interface N10737448312 {
    id: string
    name: string
}

export interface N10737451662 {
    id: string
    name: string
}

export interface N10737452942 {
    id: string
    name: string
}

export interface Occupancy2 {
    max_allowed: MaxAllowed2
    age_categories: AgeCategories2
}

export interface MaxAllowed2 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories2 {
    Adult: Adult2
    ChildAgeA: ChildAgeA2
}

export interface Adult2 {
    name: string
    minimum_age: number
}

export interface ChildAgeA2 {
    name: string
    minimum_age: number
}

export interface BedGroups2 {
    "37365": N37365
}

export interface N37365 {
    id: string
    description: string
    configuration: Configuration2[]
}

export interface Configuration2 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions2 {
    overview: string
}

export interface N314898052 {
    id: string
    area: Area3
    name: string
    images: Image4[]
    amenities: Amenities3
    occupancy: Occupancy3
    bed_groups: BedGroups3
    descriptions: Descriptions3
}

export interface Area3 {
    square_feet: number
    square_meters: number
}

export interface Image4 {
    links: Links3
    caption: string
    category: number
    hero_image: boolean
}

export interface Links3 {
    "70px": N70px3
    "200px": N200px3
    "350px": N350px3
    "1000px": N1000px3
}

export interface N70px3 {
    href: string
    method: string
}

export interface N200px3 {
    href: string
    method: string
}

export interface N350px3 {
    href: string
    method: string
}

export interface N1000px3 {
    href: string
    method: string
}

export interface Amenities3 {
    "1": N13
    "26": N263
    "123": N1233
    "126": N1263
    "128": N1283
    "131": N1313
    "132": N1323
    "133": N1333
    "136": N1363
    "138": N1383
    "141": N1413
    "142": N1423
    "144": N1443
    "145": N1453
    "146": N1463
    "2015": N20153
    "2025": N20253
    "2026": N20263
    "2034": N20343
    "2037": N20373
    "2039": N20393
    "2046": N20463
    "2054": N20543
    "2056": N20563
    "2057": N20573
    "2081": N20813
    "2149": N21493
    "2162": N21623
    "2170": N21703
    "2379": N23793
    "2397": N23973
    "2399": N23993
    "2403": N24033
    "2405": N24053
    "2579": N25793
    "2807": N28073
    "3501": N35013
    "3502": N35023
    "4951": N49513
    "6213": N62133
    "1073743370": N10737433703
    "1073743371": N10737433713
    "1073743918": N10737439183
    "1073743926": N10737439263
    "1073744237": N10737442373
    "1073744240": N10737442403
    "1073744242": N10737442423
    "1073744243": N10737442433
    "1073744706": N10737447063
    "1073744828": N10737448283
    "1073744831": N10737448313
    "1073745166": N10737451663
    "1073745294": N10737452943
}

export interface N13 {
    id: string
    name: string
    categories: string[]
}

export interface N263 {
    id: string
    name: string
}

export interface N1233 {
    id: string
    name: string
}

export interface N1263 {
    id: string
    name: string
}

export interface N1283 {
    id: string
    name: string
}

export interface N1313 {
    id: string
    name: string
}

export interface N1323 {
    id: string
    name: string
}

export interface N1333 {
    id: string
    name: string
}

export interface N1363 {
    id: string
    name: string
}

export interface N1383 {
    id: string
    name: string
}

export interface N1413 {
    id: string
    name: string
}

export interface N1423 {
    id: string
    name: string
}

export interface N1443 {
    id: string
    name: string
}

export interface N1453 {
    id: string
    name: string
}

export interface N1463 {
    id: string
    name: string
}

export interface N20153 {
    id: string
    name: string
}

export interface N20253 {
    id: string
    name: string
}

export interface N20263 {
    id: string
    name: string
}

export interface N20343 {
    id: string
    name: string
}

export interface N20373 {
    id: string
    name: string
}

export interface N20393 {
    id: string
    name: string
}

export interface N20463 {
    id: string
    name: string
}

export interface N20543 {
    id: string
    name: string
}

export interface N20563 {
    id: string
    name: string
}

export interface N20573 {
    id: string
    name: string
}

export interface N20813 {
    id: string
    name: string
}

export interface N21493 {
    id: string
    name: string
}

export interface N21623 {
    id: string
    name: string
}

export interface N21703 {
    id: string
    name: string
}

export interface N23793 {
    id: string
    name: string
}

export interface N23973 {
    id: string
    name: string
}

export interface N23993 {
    id: string
    name: string
}

export interface N24033 {
    id: string
    name: string
    categories: string[]
}

export interface N24053 {
    id: string
    name: string
}

export interface N25793 {
    id: string
    name: string
    value: string
}

export interface N28073 {
    id: string
    name: string
}

export interface N35013 {
    id: string
    name: string
}

export interface N35023 {
    id: string
    name: string
}

export interface N49513 {
    id: string
    name: string
    categories: string[]
}

export interface N62133 {
    id: string
    name: string
}

export interface N10737433703 {
    id: string
    name: string
}

export interface N10737433713 {
    id: string
    name: string
}

export interface N10737439183 {
    id: string
    name: string
    value: string
}

export interface N10737439263 {
    id: string
    name: string
}

export interface N10737442373 {
    id: string
    name: string
}

export interface N10737442403 {
    id: string
    name: string
}

export interface N10737442423 {
    id: string
    name: string
}

export interface N10737442433 {
    id: string
    name: string
}

export interface N10737447063 {
    id: string
    name: string
}

export interface N10737448283 {
    id: string
    name: string
}

export interface N10737448313 {
    id: string
    name: string
}

export interface N10737451663 {
    id: string
    name: string
}

export interface N10737452943 {
    id: string
    name: string
}

export interface Occupancy3 {
    max_allowed: MaxAllowed3
    age_categories: AgeCategories3
}

export interface MaxAllowed3 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories3 {
    Adult: Adult3
    ChildAgeA: ChildAgeA3
}

export interface Adult3 {
    name: string
    minimum_age: number
}

export interface ChildAgeA3 {
    name: string
    minimum_age: number
}

export interface BedGroups3 {
    "37321": N373212
}

export interface N373212 {
    id: string
    description: string
    configuration: Configuration3[]
}

export interface Configuration3 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions3 {
    overview: string
}

export interface N314898054 {
    id: string
    area: Area4
    name: string
    images: Image5[]
    amenities: Amenities4
    occupancy: Occupancy4
    bed_groups: BedGroups4
    descriptions: Descriptions4
}

export interface Area4 {
    square_feet: number
    square_meters: number
}

export interface Image5 {
    links: Links4
    caption: string
    category: number
    hero_image: boolean
}

export interface Links4 {
    "70px": N70px4
    "200px": N200px4
    "350px": N350px4
    "1000px": N1000px4
}

export interface N70px4 {
    href: string
    method: string
}

export interface N200px4 {
    href: string
    method: string
}

export interface N350px4 {
    href: string
    method: string
}

export interface N1000px4 {
    href: string
    method: string
}

export interface Amenities4 {
    "1": N14
    "26": N264
    "123": N1234
    "126": N1264
    "128": N1284
    "131": N1314
    "132": N1324
    "133": N1334
    "136": N1364
    "138": N1384
    "141": N1414
    "142": N1424
    "144": N1444
    "145": N1454
    "146": N1464
    "2015": N20154
    "2025": N20254
    "2026": N20264
    "2034": N20344
    "2037": N20374
    "2039": N20394
    "2046": N20464
    "2054": N20544
    "2056": N20564
    "2057": N20574
    "2081": N20814
    "2149": N21494
    "2162": N21624
    "2170": N21704
    "2379": N23794
    "2397": N23974
    "2399": N23994
    "2403": N24034
    "2405": N24054
    "2579": N25794
    "2807": N28074
    "3501": N35014
    "3502": N35024
    "4951": N49514
    "6213": N62134
    "1073743370": N10737433704
    "1073743371": N10737433714
    "1073743918": N10737439184
    "1073743926": N10737439264
    "1073744237": N10737442374
    "1073744240": N10737442404
    "1073744242": N10737442424
    "1073744243": N10737442434
    "1073744706": N10737447064
    "1073744828": N10737448284
    "1073744831": N10737448314
    "1073745166": N10737451664
    "1073745294": N10737452944
}

export interface N14 {
    id: string
    name: string
    categories: string[]
}

export interface N264 {
    id: string
    name: string
}

export interface N1234 {
    id: string
    name: string
}

export interface N1264 {
    id: string
    name: string
}

export interface N1284 {
    id: string
    name: string
}

export interface N1314 {
    id: string
    name: string
}

export interface N1324 {
    id: string
    name: string
}

export interface N1334 {
    id: string
    name: string
}

export interface N1364 {
    id: string
    name: string
}

export interface N1384 {
    id: string
    name: string
}

export interface N1414 {
    id: string
    name: string
}

export interface N1424 {
    id: string
    name: string
}

export interface N1444 {
    id: string
    name: string
}

export interface N1454 {
    id: string
    name: string
}

export interface N1464 {
    id: string
    name: string
}

export interface N20154 {
    id: string
    name: string
}

export interface N20254 {
    id: string
    name: string
}

export interface N20264 {
    id: string
    name: string
}

export interface N20344 {
    id: string
    name: string
}

export interface N20374 {
    id: string
    name: string
}

export interface N20394 {
    id: string
    name: string
}

export interface N20464 {
    id: string
    name: string
}

export interface N20544 {
    id: string
    name: string
}

export interface N20564 {
    id: string
    name: string
}

export interface N20574 {
    id: string
    name: string
}

export interface N20814 {
    id: string
    name: string
}

export interface N21494 {
    id: string
    name: string
}

export interface N21624 {
    id: string
    name: string
}

export interface N21704 {
    id: string
    name: string
}

export interface N23794 {
    id: string
    name: string
}

export interface N23974 {
    id: string
    name: string
}

export interface N23994 {
    id: string
    name: string
}

export interface N24034 {
    id: string
    name: string
    categories: string[]
}

export interface N24054 {
    id: string
    name: string
}

export interface N25794 {
    id: string
    name: string
    value: string
}

export interface N28074 {
    id: string
    name: string
}

export interface N35014 {
    id: string
    name: string
}

export interface N35024 {
    id: string
    name: string
}

export interface N49514 {
    id: string
    name: string
    categories: string[]
}

export interface N62134 {
    id: string
    name: string
}

export interface N10737433704 {
    id: string
    name: string
}

export interface N10737433714 {
    id: string
    name: string
}

export interface N10737439184 {
    id: string
    name: string
    value: string
}

export interface N10737439264 {
    id: string
    name: string
}

export interface N10737442374 {
    id: string
    name: string
}

export interface N10737442404 {
    id: string
    name: string
}

export interface N10737442424 {
    id: string
    name: string
}

export interface N10737442434 {
    id: string
    name: string
}

export interface N10737447064 {
    id: string
    name: string
}

export interface N10737448284 {
    id: string
    name: string
}

export interface N10737448314 {
    id: string
    name: string
}

export interface N10737451664 {
    id: string
    name: string
}

export interface N10737452944 {
    id: string
    name: string
}

export interface Occupancy4 {
    max_allowed: MaxAllowed4
    age_categories: AgeCategories4
}

export interface MaxAllowed4 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories4 {
    Adult: Adult4
    ChildAgeA: ChildAgeA4
}

export interface Adult4 {
    name: string
    minimum_age: number
}

export interface ChildAgeA4 {
    name: string
    minimum_age: number
}

export interface BedGroups4 {
    "37365": N373652
}

export interface N373652 {
    id: string
    description: string
    configuration: Configuration4[]
}

export interface Configuration4 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions4 {
    overview: string
}

export interface N314898055 {
    id: string
    area: Area5
    name: string
    images: Image6[]
    amenities: Amenities5
    occupancy: Occupancy5
    bed_groups: BedGroups5
    descriptions: Descriptions5
}

export interface Area5 {
    square_feet: number
    square_meters: number
}

export interface Image6 {
    links: Links5
    caption: string
    category: number
    hero_image: boolean
}

export interface Links5 {
    "70px": N70px5
    "200px": N200px5
    "350px": N350px5
    "1000px": N1000px5
}

export interface N70px5 {
    href: string
    method: string
}

export interface N200px5 {
    href: string
    method: string
}

export interface N350px5 {
    href: string
    method: string
}

export interface N1000px5 {
    href: string
    method: string
}

export interface Amenities5 {
    "1": N15
    "26": N265
    "123": N1235
    "126": N1265
    "128": N1285
    "131": N1315
    "132": N1325
    "133": N1335
    "136": N1365
    "138": N1385
    "141": N1415
    "142": N1425
    "144": N1445
    "145": N1455
    "146": N1465
    "2015": N20155
    "2025": N20255
    "2026": N20265
    "2034": N20345
    "2037": N20375
    "2039": N20395
    "2046": N20465
    "2054": N20545
    "2056": N20565
    "2057": N20575
    "2081": N20815
    "2149": N21495
    "2162": N21625
    "2170": N21705
    "2379": N23795
    "2397": N23975
    "2399": N23995
    "2403": N24035
    "2405": N24055
    "2579": N25795
    "2807": N28075
    "3501": N35015
    "3502": N35025
    "4951": N49515
    "6213": N62135
    "1073743370": N10737433705
    "1073743371": N10737433715
    "1073743918": N10737439185
    "1073743926": N10737439265
    "1073744237": N10737442375
    "1073744240": N10737442405
    "1073744242": N10737442425
    "1073744243": N10737442435
    "1073744706": N10737447065
    "1073744828": N10737448285
    "1073744831": N10737448315
    "1073745166": N10737451665
    "1073745294": N10737452945
}

export interface N15 {
    id: string
    name: string
    categories: string[]
}

export interface N265 {
    id: string
    name: string
}

export interface N1235 {
    id: string
    name: string
}

export interface N1265 {
    id: string
    name: string
}

export interface N1285 {
    id: string
    name: string
}

export interface N1315 {
    id: string
    name: string
}

export interface N1325 {
    id: string
    name: string
}

export interface N1335 {
    id: string
    name: string
}

export interface N1365 {
    id: string
    name: string
}

export interface N1385 {
    id: string
    name: string
}

export interface N1415 {
    id: string
    name: string
}

export interface N1425 {
    id: string
    name: string
}

export interface N1445 {
    id: string
    name: string
}

export interface N1455 {
    id: string
    name: string
}

export interface N1465 {
    id: string
    name: string
}

export interface N20155 {
    id: string
    name: string
}

export interface N20255 {
    id: string
    name: string
}

export interface N20265 {
    id: string
    name: string
}

export interface N20345 {
    id: string
    name: string
}

export interface N20375 {
    id: string
    name: string
}

export interface N20395 {
    id: string
    name: string
}

export interface N20465 {
    id: string
    name: string
}

export interface N20545 {
    id: string
    name: string
}

export interface N20565 {
    id: string
    name: string
}

export interface N20575 {
    id: string
    name: string
}

export interface N20815 {
    id: string
    name: string
}

export interface N21495 {
    id: string
    name: string
}

export interface N21625 {
    id: string
    name: string
}

export interface N21705 {
    id: string
    name: string
}

export interface N23795 {
    id: string
    name: string
}

export interface N23975 {
    id: string
    name: string
}

export interface N23995 {
    id: string
    name: string
}

export interface N24035 {
    id: string
    name: string
    categories: string[]
}

export interface N24055 {
    id: string
    name: string
}

export interface N25795 {
    id: string
    name: string
    value: string
}

export interface N28075 {
    id: string
    name: string
}

export interface N35015 {
    id: string
    name: string
}

export interface N35025 {
    id: string
    name: string
}

export interface N49515 {
    id: string
    name: string
    categories: string[]
}

export interface N62135 {
    id: string
    name: string
}

export interface N10737433705 {
    id: string
    name: string
}

export interface N10737433715 {
    id: string
    name: string
}

export interface N10737439185 {
    id: string
    name: string
    value: string
}

export interface N10737439265 {
    id: string
    name: string
}

export interface N10737442375 {
    id: string
    name: string
}

export interface N10737442405 {
    id: string
    name: string
}

export interface N10737442425 {
    id: string
    name: string
}

export interface N10737442435 {
    id: string
    name: string
}

export interface N10737447065 {
    id: string
    name: string
}

export interface N10737448285 {
    id: string
    name: string
}

export interface N10737448315 {
    id: string
    name: string
}

export interface N10737451665 {
    id: string
    name: string
}

export interface N10737452945 {
    id: string
    name: string
}

export interface Occupancy5 {
    max_allowed: MaxAllowed5
    age_categories: AgeCategories5
}

export interface MaxAllowed5 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories5 {
    Adult: Adult5
    ChildAgeA: ChildAgeA5
}

export interface Adult5 {
    name: string
    minimum_age: number
}

export interface ChildAgeA5 {
    name: string
    minimum_age: number
}

export interface BedGroups5 {
    "37340": N37340
}

export interface N37340 {
    id: string
    description: string
    configuration: Configuration5[]
}

export interface Configuration5 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions5 {
    overview: string
}

export interface N314898056 {
    id: string
    area: Area6
    name: string
    images: Image7[]
    amenities: Amenities6
    occupancy: Occupancy6
    bed_groups: BedGroups6
    descriptions: Descriptions6
}

export interface Area6 {
    square_feet: number
    square_meters: number
}

export interface Image7 {
    links: Links6
    caption: string
    category: number
    hero_image: boolean
}

export interface Links6 {
    "70px": N70px6
    "200px": N200px6
    "350px": N350px6
    "1000px": N1000px6
}

export interface N70px6 {
    href: string
    method: string
}

export interface N200px6 {
    href: string
    method: string
}

export interface N350px6 {
    href: string
    method: string
}

export interface N1000px6 {
    href: string
    method: string
}

export interface Amenities6 {
    "1": N16
    "26": N266
    "123": N1236
    "126": N1266
    "128": N1286
    "131": N1316
    "132": N1326
    "133": N1336
    "136": N1366
    "138": N1386
    "141": N1416
    "142": N1426
    "144": N1446
    "145": N1456
    "146": N1466
    "2015": N20156
    "2025": N20256
    "2026": N20266
    "2034": N20346
    "2037": N20376
    "2039": N20396
    "2046": N20466
    "2054": N20546
    "2056": N20566
    "2057": N20576
    "2081": N20816
    "2149": N21496
    "2162": N21626
    "2170": N21706
    "2379": N23796
    "2397": N23976
    "2399": N23996
    "2403": N24036
    "2405": N24056
    "2579": N25796
    "2807": N28076
    "3501": N35016
    "3502": N35026
    "4951": N49516
    "6213": N62136
    "1073743370": N10737433706
    "1073743371": N10737433716
    "1073743918": N10737439186
    "1073743926": N10737439266
    "1073744237": N10737442376
    "1073744240": N10737442406
    "1073744242": N10737442426
    "1073744243": N10737442436
    "1073744706": N10737447066
    "1073744828": N10737448286
    "1073744831": N10737448316
    "1073745166": N10737451666
    "1073745294": N10737452946
}

export interface N16 {
    id: string
    name: string
    categories: string[]
}

export interface N266 {
    id: string
    name: string
}

export interface N1236 {
    id: string
    name: string
}

export interface N1266 {
    id: string
    name: string
}

export interface N1286 {
    id: string
    name: string
}

export interface N1316 {
    id: string
    name: string
}

export interface N1326 {
    id: string
    name: string
}

export interface N1336 {
    id: string
    name: string
}

export interface N1366 {
    id: string
    name: string
}

export interface N1386 {
    id: string
    name: string
}

export interface N1416 {
    id: string
    name: string
}

export interface N1426 {
    id: string
    name: string
}

export interface N1446 {
    id: string
    name: string
}

export interface N1456 {
    id: string
    name: string
}

export interface N1466 {
    id: string
    name: string
}

export interface N20156 {
    id: string
    name: string
}

export interface N20256 {
    id: string
    name: string
}

export interface N20266 {
    id: string
    name: string
}

export interface N20346 {
    id: string
    name: string
}

export interface N20376 {
    id: string
    name: string
}

export interface N20396 {
    id: string
    name: string
}

export interface N20466 {
    id: string
    name: string
}

export interface N20546 {
    id: string
    name: string
}

export interface N20566 {
    id: string
    name: string
}

export interface N20576 {
    id: string
    name: string
}

export interface N20816 {
    id: string
    name: string
}

export interface N21496 {
    id: string
    name: string
}

export interface N21626 {
    id: string
    name: string
}

export interface N21706 {
    id: string
    name: string
}

export interface N23796 {
    id: string
    name: string
}

export interface N23976 {
    id: string
    name: string
}

export interface N23996 {
    id: string
    name: string
}

export interface N24036 {
    id: string
    name: string
    categories: string[]
}

export interface N24056 {
    id: string
    name: string
}

export interface N25796 {
    id: string
    name: string
    value: string
}

export interface N28076 {
    id: string
    name: string
}

export interface N35016 {
    id: string
    name: string
}

export interface N35026 {
    id: string
    name: string
}

export interface N49516 {
    id: string
    name: string
    categories: string[]
}

export interface N62136 {
    id: string
    name: string
}

export interface N10737433706 {
    id: string
    name: string
}

export interface N10737433716 {
    id: string
    name: string
}

export interface N10737439186 {
    id: string
    name: string
    value: string
}

export interface N10737439266 {
    id: string
    name: string
}

export interface N10737442376 {
    id: string
    name: string
}

export interface N10737442406 {
    id: string
    name: string
}

export interface N10737442426 {
    id: string
    name: string
}

export interface N10737442436 {
    id: string
    name: string
}

export interface N10737447066 {
    id: string
    name: string
}

export interface N10737448286 {
    id: string
    name: string
}

export interface N10737448316 {
    id: string
    name: string
}

export interface N10737451666 {
    id: string
    name: string
}

export interface N10737452946 {
    id: string
    name: string
}

export interface Occupancy6 {
    max_allowed: MaxAllowed6
    age_categories: AgeCategories6
}

export interface MaxAllowed6 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories6 {
    Adult: Adult6
    ChildAgeA: ChildAgeA6
}

export interface Adult6 {
    name: string
    minimum_age: number
}

export interface ChildAgeA6 {
    name: string
    minimum_age: number
}

export interface BedGroups6 {
    "37365": N373653
}

export interface N373653 {
    id: string
    description: string
    configuration: Configuration6[]
}

export interface Configuration6 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions6 {
    overview: string
}

export interface N314898057 {
    id: string
    area: Area7
    name: string
    images: Image8[]
    amenities: Amenities7
    occupancy: Occupancy7
    bed_groups: BedGroups7
    descriptions: Descriptions7
}

export interface Area7 {
    square_feet: number
    square_meters: number
}

export interface Image8 {
    links: Links7
    caption: string
    category: number
    hero_image: boolean
}

export interface Links7 {
    "70px": N70px7
    "200px": N200px7
    "350px": N350px7
    "1000px": N1000px7
}

export interface N70px7 {
    href: string
    method: string
}

export interface N200px7 {
    href: string
    method: string
}

export interface N350px7 {
    href: string
    method: string
}

export interface N1000px7 {
    href: string
    method: string
}

export interface Amenities7 {
    "1": N17
    "26": N267
    "123": N1237
    "126": N1267
    "128": N1287
    "131": N1317
    "132": N1327
    "133": N1337
    "136": N1367
    "138": N1387
    "141": N1417
    "142": N1427
    "144": N1447
    "145": N1457
    "146": N1467
    "2015": N20157
    "2025": N20257
    "2026": N20267
    "2034": N20347
    "2037": N20377
    "2039": N20397
    "2046": N20467
    "2054": N20547
    "2056": N20567
    "2057": N20577
    "2081": N20817
    "2149": N21497
    "2162": N21627
    "2170": N21707
    "2379": N23797
    "2397": N23977
    "2399": N23997
    "2403": N24037
    "2405": N24057
    "2579": N25797
    "2807": N28077
    "3501": N35017
    "3502": N35027
    "4951": N49517
    "6213": N62137
    "1073743370": N10737433707
    "1073743371": N10737433717
    "1073743918": N10737439187
    "1073743926": N10737439267
    "1073744237": N10737442377
    "1073744240": N10737442407
    "1073744242": N10737442427
    "1073744243": N10737442437
    "1073744706": N10737447067
    "1073744828": N10737448287
    "1073744831": N10737448317
    "1073745166": N10737451667
    "1073745294": N10737452947
}

export interface N17 {
    id: string
    name: string
    categories: string[]
}

export interface N267 {
    id: string
    name: string
}

export interface N1237 {
    id: string
    name: string
}

export interface N1267 {
    id: string
    name: string
}

export interface N1287 {
    id: string
    name: string
}

export interface N1317 {
    id: string
    name: string
}

export interface N1327 {
    id: string
    name: string
}

export interface N1337 {
    id: string
    name: string
}

export interface N1367 {
    id: string
    name: string
}

export interface N1387 {
    id: string
    name: string
}

export interface N1417 {
    id: string
    name: string
}

export interface N1427 {
    id: string
    name: string
}

export interface N1447 {
    id: string
    name: string
}

export interface N1457 {
    id: string
    name: string
}

export interface N1467 {
    id: string
    name: string
}

export interface N20157 {
    id: string
    name: string
}

export interface N20257 {
    id: string
    name: string
}

export interface N20267 {
    id: string
    name: string
}

export interface N20347 {
    id: string
    name: string
}

export interface N20377 {
    id: string
    name: string
}

export interface N20397 {
    id: string
    name: string
}

export interface N20467 {
    id: string
    name: string
}

export interface N20547 {
    id: string
    name: string
}

export interface N20567 {
    id: string
    name: string
}

export interface N20577 {
    id: string
    name: string
}

export interface N20817 {
    id: string
    name: string
}

export interface N21497 {
    id: string
    name: string
}

export interface N21627 {
    id: string
    name: string
}

export interface N21707 {
    id: string
    name: string
}

export interface N23797 {
    id: string
    name: string
}

export interface N23977 {
    id: string
    name: string
}

export interface N23997 {
    id: string
    name: string
}

export interface N24037 {
    id: string
    name: string
    categories: string[]
}

export interface N24057 {
    id: string
    name: string
}

export interface N25797 {
    id: string
    name: string
    value: string
}

export interface N28077 {
    id: string
    name: string
}

export interface N35017 {
    id: string
    name: string
}

export interface N35027 {
    id: string
    name: string
}

export interface N49517 {
    id: string
    name: string
    categories: string[]
}

export interface N62137 {
    id: string
    name: string
}

export interface N10737433707 {
    id: string
    name: string
}

export interface N10737433717 {
    id: string
    name: string
}

export interface N10737439187 {
    id: string
    name: string
    value: string
}

export interface N10737439267 {
    id: string
    name: string
}

export interface N10737442377 {
    id: string
    name: string
}

export interface N10737442407 {
    id: string
    name: string
}

export interface N10737442427 {
    id: string
    name: string
}

export interface N10737442437 {
    id: string
    name: string
}

export interface N10737447067 {
    id: string
    name: string
}

export interface N10737448287 {
    id: string
    name: string
}

export interface N10737448317 {
    id: string
    name: string
}

export interface N10737451667 {
    id: string
    name: string
}

export interface N10737452947 {
    id: string
    name: string
}

export interface Occupancy7 {
    max_allowed: MaxAllowed7
    age_categories: AgeCategories7
}

export interface MaxAllowed7 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories7 {
    Adult: Adult7
    ChildAgeA: ChildAgeA7
}

export interface Adult7 {
    name: string
    minimum_age: number
}

export interface ChildAgeA7 {
    name: string
    minimum_age: number
}

export interface BedGroups7 {
    "37321": N373213
}

export interface N373213 {
    id: string
    description: string
    configuration: Configuration7[]
}

export interface Configuration7 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions7 {
    overview: string
}

export interface N314898058 {
    id: string
    area: Area8
    name: string
    images: Image9[]
    amenities: Amenities8
    occupancy: Occupancy8
    bed_groups: BedGroups8
    descriptions: Descriptions8
}

export interface Area8 {
    square_feet: number
    square_meters: number
}

export interface Image9 {
    links: Links8
    caption: string
    category: number
    hero_image: boolean
}

export interface Links8 {
    "70px": N70px8
    "200px": N200px8
    "350px": N350px8
    "1000px": N1000px8
}

export interface N70px8 {
    href: string
    method: string
}

export interface N200px8 {
    href: string
    method: string
}

export interface N350px8 {
    href: string
    method: string
}

export interface N1000px8 {
    href: string
    method: string
}

export interface Amenities8 {
    "1": N18
    "26": N268
    "123": N1238
    "126": N1268
    "128": N1288
    "131": N1318
    "132": N1328
    "133": N1338
    "136": N1368
    "138": N1388
    "141": N1418
    "142": N1428
    "144": N1448
    "145": N1458
    "146": N1468
    "2015": N20158
    "2025": N20258
    "2026": N20268
    "2034": N20348
    "2037": N20378
    "2039": N20398
    "2046": N20468
    "2054": N20548
    "2056": N20568
    "2057": N20578
    "2081": N20818
    "2149": N21498
    "2162": N21628
    "2170": N21708
    "2379": N23798
    "2397": N23978
    "2399": N23998
    "2403": N24038
    "2405": N24058
    "2579": N25798
    "2807": N28078
    "3501": N35018
    "3502": N35028
    "4951": N49518
    "6213": N62138
    "1073743370": N10737433708
    "1073743371": N10737433718
    "1073743918": N10737439188
    "1073743926": N10737439268
    "1073744237": N10737442378
    "1073744240": N10737442408
    "1073744242": N10737442428
    "1073744243": N10737442438
    "1073744706": N10737447068
    "1073744828": N10737448288
    "1073744831": N10737448318
    "1073745166": N10737451668
    "1073745294": N10737452948
}

export interface N18 {
    id: string
    name: string
    categories: string[]
}

export interface N268 {
    id: string
    name: string
}

export interface N1238 {
    id: string
    name: string
}

export interface N1268 {
    id: string
    name: string
}

export interface N1288 {
    id: string
    name: string
}

export interface N1318 {
    id: string
    name: string
}

export interface N1328 {
    id: string
    name: string
}

export interface N1338 {
    id: string
    name: string
}

export interface N1368 {
    id: string
    name: string
}

export interface N1388 {
    id: string
    name: string
}

export interface N1418 {
    id: string
    name: string
}

export interface N1428 {
    id: string
    name: string
}

export interface N1448 {
    id: string
    name: string
}

export interface N1458 {
    id: string
    name: string
}

export interface N1468 {
    id: string
    name: string
}

export interface N20158 {
    id: string
    name: string
}

export interface N20258 {
    id: string
    name: string
}

export interface N20268 {
    id: string
    name: string
}

export interface N20348 {
    id: string
    name: string
}

export interface N20378 {
    id: string
    name: string
}

export interface N20398 {
    id: string
    name: string
}

export interface N20468 {
    id: string
    name: string
}

export interface N20548 {
    id: string
    name: string
}

export interface N20568 {
    id: string
    name: string
}

export interface N20578 {
    id: string
    name: string
}

export interface N20818 {
    id: string
    name: string
}

export interface N21498 {
    id: string
    name: string
}

export interface N21628 {
    id: string
    name: string
}

export interface N21708 {
    id: string
    name: string
}

export interface N23798 {
    id: string
    name: string
}

export interface N23978 {
    id: string
    name: string
}

export interface N23998 {
    id: string
    name: string
}

export interface N24038 {
    id: string
    name: string
    categories: string[]
}

export interface N24058 {
    id: string
    name: string
}

export interface N25798 {
    id: string
    name: string
    value: string
}

export interface N28078 {
    id: string
    name: string
}

export interface N35018 {
    id: string
    name: string
}

export interface N35028 {
    id: string
    name: string
}

export interface N49518 {
    id: string
    name: string
    categories: string[]
}

export interface N62138 {
    id: string
    name: string
}

export interface N10737433708 {
    id: string
    name: string
}

export interface N10737433718 {
    id: string
    name: string
}

export interface N10737439188 {
    id: string
    name: string
    value: string
}

export interface N10737439268 {
    id: string
    name: string
}

export interface N10737442378 {
    id: string
    name: string
}

export interface N10737442408 {
    id: string
    name: string
}

export interface N10737442428 {
    id: string
    name: string
}

export interface N10737442438 {
    id: string
    name: string
}

export interface N10737447068 {
    id: string
    name: string
}

export interface N10737448288 {
    id: string
    name: string
}

export interface N10737448318 {
    id: string
    name: string
}

export interface N10737451668 {
    id: string
    name: string
}

export interface N10737452948 {
    id: string
    name: string
}

export interface Occupancy8 {
    max_allowed: MaxAllowed8
    age_categories: AgeCategories8
}

export interface MaxAllowed8 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories8 {
    Adult: Adult8
    ChildAgeA: ChildAgeA8
}

export interface Adult8 {
    name: string
    minimum_age: number
}

export interface ChildAgeA8 {
    name: string
    minimum_age: number
}

export interface BedGroups8 {
    "37321": N373214
}

export interface N373214 {
    id: string
    description: string
    configuration: Configuration8[]
}

export interface Configuration8 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions8 {
    overview: string
}

export interface N314898060 {
    id: string
    area: Area9
    name: string
    images: Image10[]
    amenities: Amenities9
    occupancy: Occupancy9
    bed_groups: BedGroups9
    descriptions: Descriptions9
}

export interface Area9 {
    square_feet: number
    square_meters: number
}

export interface Image10 {
    links: Links9
    caption: string
    category: number
    hero_image: boolean
}

export interface Links9 {
    "70px": N70px9
    "200px": N200px9
    "350px": N350px9
    "1000px": N1000px9
}

export interface N70px9 {
    href: string
    method: string
}

export interface N200px9 {
    href: string
    method: string
}

export interface N350px9 {
    href: string
    method: string
}

export interface N1000px9 {
    href: string
    method: string
}

export interface Amenities9 {
    "1": N19
    "26": N269
    "123": N1239
    "126": N1269
    "128": N1289
    "131": N1319
    "132": N1329
    "133": N1339
    "136": N1369
    "138": N1389
    "141": N1419
    "142": N1429
    "144": N1449
    "145": N1459
    "146": N1469
    "2015": N20159
    "2025": N20259
    "2026": N20269
    "2034": N20349
    "2037": N20379
    "2039": N20399
    "2046": N20469
    "2054": N20549
    "2056": N20569
    "2057": N20579
    "2081": N20819
    "2149": N21499
    "2162": N21629
    "2170": N21709
    "2379": N23799
    "2397": N23979
    "2399": N23999
    "2403": N24039
    "2405": N24059
    "2579": N25799
    "2807": N28079
    "3501": N35019
    "3502": N35029
    "4951": N49519
    "6213": N62139
    "1073743370": N10737433709
    "1073743371": N10737433719
    "1073743918": N10737439189
    "1073743926": N10737439269
    "1073744237": N10737442379
    "1073744240": N10737442409
    "1073744242": N10737442429
    "1073744243": N10737442439
    "1073744706": N10737447069
    "1073744828": N10737448289
    "1073744831": N10737448319
    "1073745166": N10737451669
    "1073745294": N10737452949
}

export interface N19 {
    id: string
    name: string
    categories: string[]
}

export interface N269 {
    id: string
    name: string
}

export interface N1239 {
    id: string
    name: string
}

export interface N1269 {
    id: string
    name: string
}

export interface N1289 {
    id: string
    name: string
}

export interface N1319 {
    id: string
    name: string
}

export interface N1329 {
    id: string
    name: string
}

export interface N1339 {
    id: string
    name: string
}

export interface N1369 {
    id: string
    name: string
}

export interface N1389 {
    id: string
    name: string
}

export interface N1419 {
    id: string
    name: string
}

export interface N1429 {
    id: string
    name: string
}

export interface N1449 {
    id: string
    name: string
}

export interface N1459 {
    id: string
    name: string
}

export interface N1469 {
    id: string
    name: string
}

export interface N20159 {
    id: string
    name: string
}

export interface N20259 {
    id: string
    name: string
}

export interface N20269 {
    id: string
    name: string
}

export interface N20349 {
    id: string
    name: string
}

export interface N20379 {
    id: string
    name: string
}

export interface N20399 {
    id: string
    name: string
}

export interface N20469 {
    id: string
    name: string
}

export interface N20549 {
    id: string
    name: string
}

export interface N20569 {
    id: string
    name: string
}

export interface N20579 {
    id: string
    name: string
}

export interface N20819 {
    id: string
    name: string
}

export interface N21499 {
    id: string
    name: string
}

export interface N21629 {
    id: string
    name: string
}

export interface N21709 {
    id: string
    name: string
}

export interface N23799 {
    id: string
    name: string
}

export interface N23979 {
    id: string
    name: string
}

export interface N23999 {
    id: string
    name: string
}

export interface N24039 {
    id: string
    name: string
    categories: string[]
}

export interface N24059 {
    id: string
    name: string
}

export interface N25799 {
    id: string
    name: string
    value: string
}

export interface N28079 {
    id: string
    name: string
}

export interface N35019 {
    id: string
    name: string
}

export interface N35029 {
    id: string
    name: string
}

export interface N49519 {
    id: string
    name: string
    categories: string[]
}

export interface N62139 {
    id: string
    name: string
}

export interface N10737433709 {
    id: string
    name: string
}

export interface N10737433719 {
    id: string
    name: string
}

export interface N10737439189 {
    id: string
    name: string
    value: string
}

export interface N10737439269 {
    id: string
    name: string
}

export interface N10737442379 {
    id: string
    name: string
}

export interface N10737442409 {
    id: string
    name: string
}

export interface N10737442429 {
    id: string
    name: string
}

export interface N10737442439 {
    id: string
    name: string
}

export interface N10737447069 {
    id: string
    name: string
}

export interface N10737448289 {
    id: string
    name: string
}

export interface N10737448319 {
    id: string
    name: string
}

export interface N10737451669 {
    id: string
    name: string
}

export interface N10737452949 {
    id: string
    name: string
}

export interface Occupancy9 {
    max_allowed: MaxAllowed9
    age_categories: AgeCategories9
}

export interface MaxAllowed9 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories9 {
    Adult: Adult9
    ChildAgeA: ChildAgeA9
}

export interface Adult9 {
    name: string
    minimum_age: number
}

export interface ChildAgeA9 {
    name: string
    minimum_age: number
}

export interface BedGroups9 {
    "37321": N373215
}

export interface N373215 {
    id: string
    description: string
    configuration: Configuration9[]
}

export interface Configuration9 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions9 {
    overview: string
}

export interface N314898061 {
    id: string
    area: Area10
    name: string
    images: Image11[]
    amenities: Amenities10
    occupancy: Occupancy10
    bed_groups: BedGroups10
    descriptions: Descriptions10
}

export interface Area10 {
    square_feet: number
    square_meters: number
}

export interface Image11 {
    links: Links10
    caption: string
    category: number
    hero_image: boolean
}

export interface Links10 {
    "70px": N70px10
    "200px": N200px10
    "350px": N350px10
    "1000px": N1000px10
}

export interface N70px10 {
    href: string
    method: string
}

export interface N200px10 {
    href: string
    method: string
}

export interface N350px10 {
    href: string
    method: string
}

export interface N1000px10 {
    href: string
    method: string
}

export interface Amenities10 {
    "1": N110
    "26": N2610
    "123": N12310
    "126": N12610
    "128": N12810
    "131": N13110
    "132": N13210
    "133": N13310
    "136": N13610
    "138": N13810
    "141": N14110
    "142": N14210
    "144": N14410
    "145": N14510
    "146": N14610
    "2015": N201510
    "2025": N202510
    "2026": N202610
    "2034": N203410
    "2037": N203710
    "2039": N203910
    "2046": N204610
    "2054": N205410
    "2056": N205610
    "2057": N205710
    "2081": N208110
    "2149": N214910
    "2162": N216210
    "2170": N217010
    "2379": N237910
    "2397": N239710
    "2399": N239910
    "2403": N240310
    "2405": N240510
    "2579": N257910
    "2807": N280710
    "3501": N350110
    "3502": N350210
    "4951": N495110
    "6213": N621310
    "1073743370": N107374337010
    "1073743371": N107374337110
    "1073743918": N107374391810
    "1073743926": N107374392610
    "1073744237": N107374423710
    "1073744240": N107374424010
    "1073744242": N107374424210
    "1073744243": N107374424310
    "1073744706": N107374470610
    "1073744828": N107374482810
    "1073744831": N107374483110
    "1073745166": N107374516610
    "1073745294": N107374529410
}

export interface N110 {
    id: string
    name: string
    categories: string[]
}

export interface N2610 {
    id: string
    name: string
}

export interface N12310 {
    id: string
    name: string
}

export interface N12610 {
    id: string
    name: string
}

export interface N12810 {
    id: string
    name: string
}

export interface N13110 {
    id: string
    name: string
}

export interface N13210 {
    id: string
    name: string
}

export interface N13310 {
    id: string
    name: string
}

export interface N13610 {
    id: string
    name: string
}

export interface N13810 {
    id: string
    name: string
}

export interface N14110 {
    id: string
    name: string
}

export interface N14210 {
    id: string
    name: string
}

export interface N14410 {
    id: string
    name: string
}

export interface N14510 {
    id: string
    name: string
}

export interface N14610 {
    id: string
    name: string
}

export interface N201510 {
    id: string
    name: string
}

export interface N202510 {
    id: string
    name: string
}

export interface N202610 {
    id: string
    name: string
}

export interface N203410 {
    id: string
    name: string
}

export interface N203710 {
    id: string
    name: string
}

export interface N203910 {
    id: string
    name: string
}

export interface N204610 {
    id: string
    name: string
}

export interface N205410 {
    id: string
    name: string
}

export interface N205610 {
    id: string
    name: string
}

export interface N205710 {
    id: string
    name: string
}

export interface N208110 {
    id: string
    name: string
}

export interface N214910 {
    id: string
    name: string
}

export interface N216210 {
    id: string
    name: string
}

export interface N217010 {
    id: string
    name: string
}

export interface N237910 {
    id: string
    name: string
}

export interface N239710 {
    id: string
    name: string
}

export interface N239910 {
    id: string
    name: string
}

export interface N240310 {
    id: string
    name: string
    categories: string[]
}

export interface N240510 {
    id: string
    name: string
}

export interface N257910 {
    id: string
    name: string
    value: string
}

export interface N280710 {
    id: string
    name: string
}

export interface N350110 {
    id: string
    name: string
}

export interface N350210 {
    id: string
    name: string
}

export interface N495110 {
    id: string
    name: string
    categories: string[]
}

export interface N621310 {
    id: string
    name: string
}

export interface N107374337010 {
    id: string
    name: string
}

export interface N107374337110 {
    id: string
    name: string
}

export interface N107374391810 {
    id: string
    name: string
    value: string
}

export interface N107374392610 {
    id: string
    name: string
}

export interface N107374423710 {
    id: string
    name: string
}

export interface N107374424010 {
    id: string
    name: string
}

export interface N107374424210 {
    id: string
    name: string
}

export interface N107374424310 {
    id: string
    name: string
}

export interface N107374470610 {
    id: string
    name: string
}

export interface N107374482810 {
    id: string
    name: string
}

export interface N107374483110 {
    id: string
    name: string
}

export interface N107374516610 {
    id: string
    name: string
}

export interface N107374529410 {
    id: string
    name: string
}

export interface Occupancy10 {
    max_allowed: MaxAllowed10
    age_categories: AgeCategories10
}

export interface MaxAllowed10 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories10 {
    Adult: Adult10
    ChildAgeA: ChildAgeA10
}

export interface Adult10 {
    name: string
    minimum_age: number
}

export interface ChildAgeA10 {
    name: string
    minimum_age: number
}

export interface BedGroups10 {
    "37365": N373654
}

export interface N373654 {
    id: string
    description: string
    configuration: Configuration10[]
}

export interface Configuration10 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions10 {
    overview: string
}

export interface N314898063 {
    id: string
    area: Area11
    name: string
    images: Image12[]
    amenities: Amenities11
    occupancy: Occupancy11
    bed_groups: BedGroups11
    descriptions: Descriptions11
}

export interface Area11 {
    square_feet: number
    square_meters: number
}

export interface Image12 {
    links: Links11
    caption: string
    category: number
    hero_image: boolean
}

export interface Links11 {
    "70px": N70px11
    "200px": N200px11
    "350px": N350px11
    "1000px": N1000px11
}

export interface N70px11 {
    href: string
    method: string
}

export interface N200px11 {
    href: string
    method: string
}

export interface N350px11 {
    href: string
    method: string
}

export interface N1000px11 {
    href: string
    method: string
}

export interface Amenities11 {
    "1": N111
    "26": N2611
    "123": N12311
    "126": N12611
    "128": N12811
    "131": N13111
    "132": N13211
    "133": N13311
    "136": N13611
    "138": N13811
    "141": N14111
    "142": N14211
    "144": N14411
    "145": N14511
    "146": N14611
    "2015": N201511
    "2025": N202511
    "2026": N202611
    "2034": N203411
    "2037": N203711
    "2039": N203911
    "2046": N204611
    "2054": N205411
    "2056": N205611
    "2057": N205711
    "2081": N208111
    "2149": N214911
    "2162": N216211
    "2170": N217011
    "2370": N23702
    "2379": N237911
    "2397": N239711
    "2399": N239911
    "2403": N240311
    "2405": N240511
    "2579": N257911
    "2807": N280711
    "3501": N350111
    "3502": N350211
    "4951": N495111
    "6213": N621311
    "1073743370": N107374337011
    "1073743371": N107374337111
    "1073743918": N107374391811
    "1073743926": N107374392611
    "1073744237": N107374423711
    "1073744240": N107374424011
    "1073744242": N107374424211
    "1073744243": N107374424311
    "1073744706": N107374470611
    "1073744828": N107374482811
    "1073744831": N107374483111
    "1073745166": N107374516611
    "1073745167": N10737451672
    "1073745294": N107374529411
}

export interface N111 {
    id: string
    name: string
    categories: string[]
}

export interface N2611 {
    id: string
    name: string
}

export interface N12311 {
    id: string
    name: string
}

export interface N12611 {
    id: string
    name: string
}

export interface N12811 {
    id: string
    name: string
}

export interface N13111 {
    id: string
    name: string
}

export interface N13211 {
    id: string
    name: string
}

export interface N13311 {
    id: string
    name: string
}

export interface N13611 {
    id: string
    name: string
}

export interface N13811 {
    id: string
    name: string
}

export interface N14111 {
    id: string
    name: string
}

export interface N14211 {
    id: string
    name: string
}

export interface N14411 {
    id: string
    name: string
}

export interface N14511 {
    id: string
    name: string
}

export interface N14611 {
    id: string
    name: string
}

export interface N201511 {
    id: string
    name: string
}

export interface N202511 {
    id: string
    name: string
}

export interface N202611 {
    id: string
    name: string
}

export interface N203411 {
    id: string
    name: string
}

export interface N203711 {
    id: string
    name: string
}

export interface N203911 {
    id: string
    name: string
}

export interface N204611 {
    id: string
    name: string
}

export interface N205411 {
    id: string
    name: string
}

export interface N205611 {
    id: string
    name: string
}

export interface N205711 {
    id: string
    name: string
}

export interface N208111 {
    id: string
    name: string
}

export interface N214911 {
    id: string
    name: string
}

export interface N216211 {
    id: string
    name: string
}

export interface N217011 {
    id: string
    name: string
}

export interface N23702 {
    id: string
    name: string
}

export interface N237911 {
    id: string
    name: string
}

export interface N239711 {
    id: string
    name: string
}

export interface N239911 {
    id: string
    name: string
}

export interface N240311 {
    id: string
    name: string
    categories: string[]
}

export interface N240511 {
    id: string
    name: string
}

export interface N257911 {
    id: string
    name: string
    value: string
}

export interface N280711 {
    id: string
    name: string
}

export interface N350111 {
    id: string
    name: string
}

export interface N350211 {
    id: string
    name: string
}

export interface N495111 {
    id: string
    name: string
    categories: string[]
}

export interface N621311 {
    id: string
    name: string
}

export interface N107374337011 {
    id: string
    name: string
}

export interface N107374337111 {
    id: string
    name: string
}

export interface N107374391811 {
    id: string
    name: string
    value: string
}

export interface N107374392611 {
    id: string
    name: string
}

export interface N107374423711 {
    id: string
    name: string
}

export interface N107374424011 {
    id: string
    name: string
}

export interface N107374424211 {
    id: string
    name: string
}

export interface N107374424311 {
    id: string
    name: string
}

export interface N107374470611 {
    id: string
    name: string
}

export interface N107374482811 {
    id: string
    name: string
}

export interface N107374483111 {
    id: string
    name: string
}

export interface N107374516611 {
    id: string
    name: string
}

export interface N10737451672 {
    id: string
    name: string
}

export interface N107374529411 {
    id: string
    name: string
}

export interface Occupancy11 {
    max_allowed: MaxAllowed11
    age_categories: AgeCategories11
}

export interface MaxAllowed11 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories11 {
    Adult: Adult11
    ChildAgeA: ChildAgeA11
}

export interface Adult11 {
    name: string
    minimum_age: number
}

export interface ChildAgeA11 {
    name: string
    minimum_age: number
}

export interface BedGroups11 {
    "37339": N37339
}

export interface N37339 {
    id: string
    description: string
    configuration: Configuration11[]
}

export interface Configuration11 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions11 {
    overview: string
}

export interface N314898066 {
    id: string
    area: Area12
    name: string
    images: Image13[]
    amenities: Amenities12
    occupancy: Occupancy12
    bed_groups: BedGroups12
    descriptions: Descriptions12
}

export interface Area12 {
    square_feet: number
    square_meters: number
}

export interface Image13 {
    links: Links12
    caption: string
    category: number
    hero_image: boolean
}

export interface Links12 {
    "70px": N70px12
    "200px": N200px12
    "350px": N350px12
    "1000px": N1000px12
}

export interface N70px12 {
    href: string
    method: string
}

export interface N200px12 {
    href: string
    method: string
}

export interface N350px12 {
    href: string
    method: string
}

export interface N1000px12 {
    href: string
    method: string
}

export interface Amenities12 {
    "1": N112
    "26": N2612
    "123": N12312
    "126": N12612
    "128": N12812
    "131": N13112
    "132": N13212
    "133": N13312
    "136": N13612
    "138": N13812
    "141": N14112
    "142": N14212
    "144": N14412
    "145": N14512
    "146": N14612
    "2015": N201512
    "2025": N202512
    "2026": N202612
    "2034": N203412
    "2037": N203712
    "2039": N203912
    "2046": N204612
    "2054": N205412
    "2056": N205612
    "2057": N205712
    "2081": N208112
    "2149": N214912
    "2162": N216212
    "2170": N217012
    "2379": N237912
    "2397": N239712
    "2399": N239912
    "2403": N240312
    "2405": N240512
    "2579": N257912
    "2807": N280712
    "3501": N350112
    "3502": N350212
    "4951": N495112
    "6213": N621312
    "1073743370": N107374337012
    "1073743371": N107374337112
    "1073743918": N107374391812
    "1073743926": N107374392612
    "1073744237": N107374423712
    "1073744240": N107374424012
    "1073744242": N107374424212
    "1073744243": N107374424312
    "1073744706": N107374470612
    "1073744828": N107374482812
    "1073744831": N107374483112
    "1073745166": N107374516612
    "1073745294": N107374529412
}

export interface N112 {
    id: string
    name: string
    categories: string[]
}

export interface N2612 {
    id: string
    name: string
}

export interface N12312 {
    id: string
    name: string
}

export interface N12612 {
    id: string
    name: string
}

export interface N12812 {
    id: string
    name: string
}

export interface N13112 {
    id: string
    name: string
}

export interface N13212 {
    id: string
    name: string
}

export interface N13312 {
    id: string
    name: string
}

export interface N13612 {
    id: string
    name: string
}

export interface N13812 {
    id: string
    name: string
}

export interface N14112 {
    id: string
    name: string
}

export interface N14212 {
    id: string
    name: string
}

export interface N14412 {
    id: string
    name: string
}

export interface N14512 {
    id: string
    name: string
}

export interface N14612 {
    id: string
    name: string
}

export interface N201512 {
    id: string
    name: string
}

export interface N202512 {
    id: string
    name: string
}

export interface N202612 {
    id: string
    name: string
}

export interface N203412 {
    id: string
    name: string
}

export interface N203712 {
    id: string
    name: string
}

export interface N203912 {
    id: string
    name: string
}

export interface N204612 {
    id: string
    name: string
}

export interface N205412 {
    id: string
    name: string
}

export interface N205612 {
    id: string
    name: string
}

export interface N205712 {
    id: string
    name: string
}

export interface N208112 {
    id: string
    name: string
}

export interface N214912 {
    id: string
    name: string
}

export interface N216212 {
    id: string
    name: string
}

export interface N217012 {
    id: string
    name: string
}

export interface N237912 {
    id: string
    name: string
}

export interface N239712 {
    id: string
    name: string
}

export interface N239912 {
    id: string
    name: string
}

export interface N240312 {
    id: string
    name: string
    categories: string[]
}

export interface N240512 {
    id: string
    name: string
}

export interface N257912 {
    id: string
    name: string
    value: string
}

export interface N280712 {
    id: string
    name: string
}

export interface N350112 {
    id: string
    name: string
}

export interface N350212 {
    id: string
    name: string
}

export interface N495112 {
    id: string
    name: string
    categories: string[]
}

export interface N621312 {
    id: string
    name: string
}

export interface N107374337012 {
    id: string
    name: string
}

export interface N107374337112 {
    id: string
    name: string
}

export interface N107374391812 {
    id: string
    name: string
    value: string
}

export interface N107374392612 {
    id: string
    name: string
}

export interface N107374423712 {
    id: string
    name: string
}

export interface N107374424012 {
    id: string
    name: string
}

export interface N107374424212 {
    id: string
    name: string
}

export interface N107374424312 {
    id: string
    name: string
}

export interface N107374470612 {
    id: string
    name: string
}

export interface N107374482812 {
    id: string
    name: string
}

export interface N107374483112 {
    id: string
    name: string
}

export interface N107374516612 {
    id: string
    name: string
}

export interface N107374529412 {
    id: string
    name: string
}

export interface Occupancy12 {
    max_allowed: MaxAllowed12
    age_categories: AgeCategories12
}

export interface MaxAllowed12 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories12 {
    Adult: Adult12
    ChildAgeA: ChildAgeA12
}

export interface Adult12 {
    name: string
    minimum_age: number
}

export interface ChildAgeA12 {
    name: string
    minimum_age: number
}

export interface BedGroups12 {
    "37321": N373216
}

export interface N373216 {
    id: string
    description: string
    configuration: Configuration12[]
}

export interface Configuration12 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions12 {
    overview: string
}

export interface N314898068 {
    id: string
    area: Area13
    name: string
    images: Image14[]
    amenities: Amenities13
    occupancy: Occupancy13
    bed_groups: BedGroups13
    descriptions: Descriptions13
}

export interface Area13 {
    square_feet: number
    square_meters: number
}

export interface Image14 {
    links: Links13
    caption: string
    category: number
    hero_image: boolean
}

export interface Links13 {
    "70px": N70px13
    "200px": N200px13
    "350px": N350px13
    "1000px": N1000px13
}

export interface N70px13 {
    href: string
    method: string
}

export interface N200px13 {
    href: string
    method: string
}

export interface N350px13 {
    href: string
    method: string
}

export interface N1000px13 {
    href: string
    method: string
}

export interface Amenities13 {
    "1": N113
    "26": N2613
    "123": N12313
    "126": N12613
    "128": N12813
    "131": N13113
    "132": N13213
    "133": N13313
    "136": N13613
    "138": N13813
    "141": N14113
    "142": N14213
    "144": N14413
    "145": N14513
    "146": N14613
    "2015": N201513
    "2025": N202513
    "2026": N202613
    "2034": N203413
    "2037": N203713
    "2039": N203913
    "2046": N204613
    "2054": N205413
    "2056": N205613
    "2057": N205713
    "2081": N208113
    "2149": N214913
    "2162": N216213
    "2170": N217013
    "2370": N23703
    "2379": N237913
    "2397": N239713
    "2399": N239913
    "2403": N240313
    "2405": N240513
    "2579": N257913
    "2807": N280713
    "3501": N350113
    "3502": N350213
    "4951": N495113
    "6213": N621313
    "1073743370": N107374337013
    "1073743371": N107374337113
    "1073743918": N107374391813
    "1073743926": N107374392613
    "1073744237": N107374423713
    "1073744240": N107374424013
    "1073744242": N107374424213
    "1073744243": N107374424313
    "1073744706": N107374470613
    "1073744802": N1073744802
    "1073744828": N107374482813
    "1073744831": N107374483113
    "1073745166": N107374516613
    "1073745167": N10737451673
    "1073745294": N107374529413
}

export interface N113 {
    id: string
    name: string
    categories: string[]
}

export interface N2613 {
    id: string
    name: string
}

export interface N12313 {
    id: string
    name: string
}

export interface N12613 {
    id: string
    name: string
}

export interface N12813 {
    id: string
    name: string
}

export interface N13113 {
    id: string
    name: string
}

export interface N13213 {
    id: string
    name: string
}

export interface N13313 {
    id: string
    name: string
}

export interface N13613 {
    id: string
    name: string
}

export interface N13813 {
    id: string
    name: string
}

export interface N14113 {
    id: string
    name: string
}

export interface N14213 {
    id: string
    name: string
}

export interface N14413 {
    id: string
    name: string
}

export interface N14513 {
    id: string
    name: string
}

export interface N14613 {
    id: string
    name: string
}

export interface N201513 {
    id: string
    name: string
}

export interface N202513 {
    id: string
    name: string
}

export interface N202613 {
    id: string
    name: string
}

export interface N203413 {
    id: string
    name: string
}

export interface N203713 {
    id: string
    name: string
}

export interface N203913 {
    id: string
    name: string
}

export interface N204613 {
    id: string
    name: string
}

export interface N205413 {
    id: string
    name: string
}

export interface N205613 {
    id: string
    name: string
}

export interface N205713 {
    id: string
    name: string
}

export interface N208113 {
    id: string
    name: string
}

export interface N214913 {
    id: string
    name: string
}

export interface N216213 {
    id: string
    name: string
}

export interface N217013 {
    id: string
    name: string
}

export interface N23703 {
    id: string
    name: string
}

export interface N237913 {
    id: string
    name: string
}

export interface N239713 {
    id: string
    name: string
}

export interface N239913 {
    id: string
    name: string
}

export interface N240313 {
    id: string
    name: string
    categories: string[]
}

export interface N240513 {
    id: string
    name: string
}

export interface N257913 {
    id: string
    name: string
    value: string
}

export interface N280713 {
    id: string
    name: string
}

export interface N350113 {
    id: string
    name: string
}

export interface N350213 {
    id: string
    name: string
}

export interface N495113 {
    id: string
    name: string
    categories: string[]
}

export interface N621313 {
    id: string
    name: string
}

export interface N107374337013 {
    id: string
    name: string
}

export interface N107374337113 {
    id: string
    name: string
}

export interface N107374391813 {
    id: string
    name: string
    value: string
}

export interface N107374392613 {
    id: string
    name: string
}

export interface N107374423713 {
    id: string
    name: string
}

export interface N107374424013 {
    id: string
    name: string
}

export interface N107374424213 {
    id: string
    name: string
}

export interface N107374424313 {
    id: string
    name: string
}

export interface N107374470613 {
    id: string
    name: string
}

export interface N1073744802 {
    id: string
    name: string
}

export interface N107374482813 {
    id: string
    name: string
}

export interface N107374483113 {
    id: string
    name: string
}

export interface N107374516613 {
    id: string
    name: string
}

export interface N10737451673 {
    id: string
    name: string
}

export interface N107374529413 {
    id: string
    name: string
}

export interface Occupancy13 {
    max_allowed: MaxAllowed13
    age_categories: AgeCategories13
}

export interface MaxAllowed13 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories13 {
    Adult: Adult13
    ChildAgeA: ChildAgeA13
}

export interface Adult13 {
    name: string
    minimum_age: number
}

export interface ChildAgeA13 {
    name: string
    minimum_age: number
}

export interface BedGroups13 {
    "37316": N37316
}

export interface N37316 {
    id: string
    description: string
    configuration: Configuration13[]
}

export interface Configuration13 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions13 {
    overview: string
}

export interface N314898070 {
    id: string
    area: Area14
    name: string
    images: Image15[]
    amenities: Amenities14
    occupancy: Occupancy14
    bed_groups: BedGroups14
    descriptions: Descriptions14
}

export interface Area14 {
    square_feet: number
    square_meters: number
}

export interface Image15 {
    links: Links14
    caption: string
    category: number
    hero_image: boolean
}

export interface Links14 {
    "70px": N70px14
    "200px": N200px14
    "350px": N350px14
    "1000px": N1000px14
}

export interface N70px14 {
    href: string
    method: string
}

export interface N200px14 {
    href: string
    method: string
}

export interface N350px14 {
    href: string
    method: string
}

export interface N1000px14 {
    href: string
    method: string
}

export interface Amenities14 {
    "1": N114
    "26": N2614
    "123": N12314
    "126": N12614
    "128": N12814
    "131": N13114
    "132": N13214
    "133": N13314
    "136": N13614
    "138": N13814
    "141": N14114
    "142": N14214
    "144": N14414
    "145": N14514
    "146": N14614
    "2015": N201514
    "2025": N202514
    "2026": N202614
    "2034": N203414
    "2037": N203714
    "2039": N203914
    "2046": N204614
    "2054": N205414
    "2056": N205614
    "2057": N205714
    "2081": N208114
    "2149": N214914
    "2162": N216214
    "2170": N217014
    "2370": N23704
    "2379": N237914
    "2397": N239714
    "2399": N239914
    "2403": N240314
    "2405": N240514
    "2579": N257914
    "2807": N280714
    "3501": N350114
    "3502": N350214
    "4951": N495114
    "6213": N621314
    "1073743370": N107374337014
    "1073743371": N107374337114
    "1073743918": N107374391814
    "1073743926": N107374392614
    "1073744237": N107374423714
    "1073744240": N107374424014
    "1073744242": N107374424214
    "1073744243": N107374424314
    "1073744706": N107374470614
    "1073744802": N10737448022
    "1073744828": N107374482814
    "1073744831": N107374483114
    "1073745166": N107374516614
    "1073745167": N10737451674
    "1073745294": N107374529414
}

export interface N114 {
    id: string
    name: string
    categories: string[]
}

export interface N2614 {
    id: string
    name: string
}

export interface N12314 {
    id: string
    name: string
}

export interface N12614 {
    id: string
    name: string
}

export interface N12814 {
    id: string
    name: string
}

export interface N13114 {
    id: string
    name: string
}

export interface N13214 {
    id: string
    name: string
}

export interface N13314 {
    id: string
    name: string
}

export interface N13614 {
    id: string
    name: string
}

export interface N13814 {
    id: string
    name: string
}

export interface N14114 {
    id: string
    name: string
}

export interface N14214 {
    id: string
    name: string
}

export interface N14414 {
    id: string
    name: string
}

export interface N14514 {
    id: string
    name: string
}

export interface N14614 {
    id: string
    name: string
}

export interface N201514 {
    id: string
    name: string
}

export interface N202514 {
    id: string
    name: string
}

export interface N202614 {
    id: string
    name: string
}

export interface N203414 {
    id: string
    name: string
}

export interface N203714 {
    id: string
    name: string
}

export interface N203914 {
    id: string
    name: string
}

export interface N204614 {
    id: string
    name: string
}

export interface N205414 {
    id: string
    name: string
}

export interface N205614 {
    id: string
    name: string
}

export interface N205714 {
    id: string
    name: string
}

export interface N208114 {
    id: string
    name: string
}

export interface N214914 {
    id: string
    name: string
}

export interface N216214 {
    id: string
    name: string
}

export interface N217014 {
    id: string
    name: string
}

export interface N23704 {
    id: string
    name: string
}

export interface N237914 {
    id: string
    name: string
}

export interface N239714 {
    id: string
    name: string
}

export interface N239914 {
    id: string
    name: string
}

export interface N240314 {
    id: string
    name: string
    categories: string[]
}

export interface N240514 {
    id: string
    name: string
}

export interface N257914 {
    id: string
    name: string
    value: string
}

export interface N280714 {
    id: string
    name: string
}

export interface N350114 {
    id: string
    name: string
}

export interface N350214 {
    id: string
    name: string
}

export interface N495114 {
    id: string
    name: string
    categories: string[]
}

export interface N621314 {
    id: string
    name: string
}

export interface N107374337014 {
    id: string
    name: string
}

export interface N107374337114 {
    id: string
    name: string
}

export interface N107374391814 {
    id: string
    name: string
    value: string
}

export interface N107374392614 {
    id: string
    name: string
}

export interface N107374423714 {
    id: string
    name: string
}

export interface N107374424014 {
    id: string
    name: string
}

export interface N107374424214 {
    id: string
    name: string
}

export interface N107374424314 {
    id: string
    name: string
}

export interface N107374470614 {
    id: string
    name: string
}

export interface N10737448022 {
    id: string
    name: string
}

export interface N107374482814 {
    id: string
    name: string
}

export interface N107374483114 {
    id: string
    name: string
}

export interface N107374516614 {
    id: string
    name: string
}

export interface N10737451674 {
    id: string
    name: string
}

export interface N107374529414 {
    id: string
    name: string
}

export interface Occupancy14 {
    max_allowed: MaxAllowed14
    age_categories: AgeCategories14
}

export interface MaxAllowed14 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories14 {
    Adult: Adult14
    ChildAgeA: ChildAgeA14
}

export interface Adult14 {
    name: string
    minimum_age: number
}

export interface ChildAgeA14 {
    name: string
    minimum_age: number
}

export interface BedGroups14 {
    "37417": N37417
}

export interface N37417 {
    id: string
    description: string
    configuration: Configuration14[]
}

export interface Configuration14 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions14 {
    overview: string
}

export interface N314898073 {
    id: string
    area: Area15
    name: string
    images: Image16[]
    amenities: Amenities15
    occupancy: Occupancy15
    bed_groups: BedGroups15
    descriptions: Descriptions15
}

export interface Area15 {
    square_feet: number
    square_meters: number
}

export interface Image16 {
    links: Links15
    caption: string
    category: number
    hero_image: boolean
}

export interface Links15 {
    "70px": N70px15
    "200px": N200px15
    "350px": N350px15
    "1000px": N1000px15
}

export interface N70px15 {
    href: string
    method: string
}

export interface N200px15 {
    href: string
    method: string
}

export interface N350px15 {
    href: string
    method: string
}

export interface N1000px15 {
    href: string
    method: string
}

export interface Amenities15 {
    "1": N115
    "26": N2615
    "123": N12315
    "126": N12615
    "128": N12815
    "131": N13115
    "132": N13215
    "133": N13315
    "136": N13615
    "138": N13815
    "141": N14115
    "142": N14215
    "144": N14415
    "145": N14515
    "146": N14615
    "2015": N201515
    "2025": N202515
    "2026": N202615
    "2034": N203415
    "2037": N203715
    "2039": N203915
    "2046": N204615
    "2054": N205415
    "2056": N205615
    "2057": N205715
    "2081": N208115
    "2149": N214915
    "2162": N216215
    "2170": N217015
    "2370": N23705
    "2379": N237915
    "2397": N239715
    "2399": N239915
    "2403": N240315
    "2405": N240515
    "2579": N257915
    "2807": N280715
    "3501": N350115
    "3502": N350215
    "4951": N495115
    "6213": N621315
    "1073743370": N107374337015
    "1073743371": N107374337115
    "1073743918": N107374391815
    "1073743926": N107374392615
    "1073744237": N107374423715
    "1073744240": N107374424015
    "1073744242": N107374424215
    "1073744243": N107374424315
    "1073744706": N107374470615
    "1073744828": N107374482815
    "1073744831": N107374483115
    "1073745166": N107374516615
    "1073745167": N10737451675
    "1073745294": N107374529415
}

export interface N115 {
    id: string
    name: string
    categories: string[]
}

export interface N2615 {
    id: string
    name: string
}

export interface N12315 {
    id: string
    name: string
}

export interface N12615 {
    id: string
    name: string
}

export interface N12815 {
    id: string
    name: string
}

export interface N13115 {
    id: string
    name: string
}

export interface N13215 {
    id: string
    name: string
}

export interface N13315 {
    id: string
    name: string
}

export interface N13615 {
    id: string
    name: string
}

export interface N13815 {
    id: string
    name: string
}

export interface N14115 {
    id: string
    name: string
}

export interface N14215 {
    id: string
    name: string
}

export interface N14415 {
    id: string
    name: string
}

export interface N14515 {
    id: string
    name: string
}

export interface N14615 {
    id: string
    name: string
}

export interface N201515 {
    id: string
    name: string
}

export interface N202515 {
    id: string
    name: string
}

export interface N202615 {
    id: string
    name: string
}

export interface N203415 {
    id: string
    name: string
}

export interface N203715 {
    id: string
    name: string
}

export interface N203915 {
    id: string
    name: string
}

export interface N204615 {
    id: string
    name: string
}

export interface N205415 {
    id: string
    name: string
}

export interface N205615 {
    id: string
    name: string
}

export interface N205715 {
    id: string
    name: string
}

export interface N208115 {
    id: string
    name: string
}

export interface N214915 {
    id: string
    name: string
}

export interface N216215 {
    id: string
    name: string
}

export interface N217015 {
    id: string
    name: string
}

export interface N23705 {
    id: string
    name: string
}

export interface N237915 {
    id: string
    name: string
}

export interface N239715 {
    id: string
    name: string
}

export interface N239915 {
    id: string
    name: string
}

export interface N240315 {
    id: string
    name: string
    categories: string[]
}

export interface N240515 {
    id: string
    name: string
}

export interface N257915 {
    id: string
    name: string
    value: string
}

export interface N280715 {
    id: string
    name: string
}

export interface N350115 {
    id: string
    name: string
}

export interface N350215 {
    id: string
    name: string
}

export interface N495115 {
    id: string
    name: string
    categories: string[]
}

export interface N621315 {
    id: string
    name: string
}

export interface N107374337015 {
    id: string
    name: string
}

export interface N107374337115 {
    id: string
    name: string
}

export interface N107374391815 {
    id: string
    name: string
    value: string
}

export interface N107374392615 {
    id: string
    name: string
}

export interface N107374423715 {
    id: string
    name: string
}

export interface N107374424015 {
    id: string
    name: string
}

export interface N107374424215 {
    id: string
    name: string
}

export interface N107374424315 {
    id: string
    name: string
}

export interface N107374470615 {
    id: string
    name: string
}

export interface N107374482815 {
    id: string
    name: string
}

export interface N107374483115 {
    id: string
    name: string
}

export interface N107374516615 {
    id: string
    name: string
}

export interface N10737451675 {
    id: string
    name: string
}

export interface N107374529415 {
    id: string
    name: string
}

export interface Occupancy15 {
    max_allowed: MaxAllowed15
    age_categories: AgeCategories15
}

export interface MaxAllowed15 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories15 {
    Adult: Adult15
    ChildAgeA: ChildAgeA15
}

export interface Adult15 {
    name: string
    minimum_age: number
}

export interface ChildAgeA15 {
    name: string
    minimum_age: number
}

export interface BedGroups15 {
    "37979": N37979
}

export interface N37979 {
    id: string
    description: string
    configuration: Configuration15[]
}

export interface Configuration15 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions15 {
    overview: string
}

export interface N314898074 {
    id: string
    area: Area16
    name: string
    images: Image17[]
    amenities: Amenities16
    occupancy: Occupancy16
    bed_groups: BedGroups16
    descriptions: Descriptions16
}

export interface Area16 {
    square_feet: number
    square_meters: number
}

export interface Image17 {
    links: Links16
    caption: string
    category: number
    hero_image: boolean
}

export interface Links16 {
    "70px": N70px16
    "200px": N200px16
    "350px": N350px16
    "1000px": N1000px16
}

export interface N70px16 {
    href: string
    method: string
}

export interface N200px16 {
    href: string
    method: string
}

export interface N350px16 {
    href: string
    method: string
}

export interface N1000px16 {
    href: string
    method: string
}

export interface Amenities16 {
    "1": N116
    "26": N2616
    "123": N12316
    "126": N12616
    "128": N12816
    "131": N13116
    "132": N13216
    "133": N13316
    "136": N13616
    "138": N13816
    "141": N14116
    "142": N14216
    "144": N14416
    "145": N14516
    "146": N14616
    "2015": N201516
    "2025": N202516
    "2026": N202616
    "2034": N203416
    "2037": N203716
    "2039": N203916
    "2046": N204616
    "2054": N205416
    "2056": N205616
    "2057": N205716
    "2081": N208116
    "2149": N214916
    "2162": N216216
    "2170": N217016
    "2370": N23706
    "2379": N237916
    "2397": N239716
    "2399": N239916
    "2403": N240316
    "2405": N240516
    "2579": N257916
    "2807": N280716
    "3501": N350116
    "3502": N350216
    "4951": N495116
    "6213": N621316
    "1073743370": N107374337016
    "1073743371": N107374337116
    "1073743918": N107374391816
    "1073743926": N107374392616
    "1073744237": N107374423716
    "1073744240": N107374424016
    "1073744242": N107374424216
    "1073744243": N107374424316
    "1073744706": N107374470616
    "1073744828": N107374482816
    "1073744831": N107374483116
    "1073745166": N107374516616
    "1073745167": N10737451676
    "1073745294": N107374529416
}

export interface N116 {
    id: string
    name: string
    categories: string[]
}

export interface N2616 {
    id: string
    name: string
}

export interface N12316 {
    id: string
    name: string
}

export interface N12616 {
    id: string
    name: string
}

export interface N12816 {
    id: string
    name: string
}

export interface N13116 {
    id: string
    name: string
}

export interface N13216 {
    id: string
    name: string
}

export interface N13316 {
    id: string
    name: string
}

export interface N13616 {
    id: string
    name: string
}

export interface N13816 {
    id: string
    name: string
}

export interface N14116 {
    id: string
    name: string
}

export interface N14216 {
    id: string
    name: string
}

export interface N14416 {
    id: string
    name: string
}

export interface N14516 {
    id: string
    name: string
}

export interface N14616 {
    id: string
    name: string
}

export interface N201516 {
    id: string
    name: string
}

export interface N202516 {
    id: string
    name: string
}

export interface N202616 {
    id: string
    name: string
}

export interface N203416 {
    id: string
    name: string
}

export interface N203716 {
    id: string
    name: string
}

export interface N203916 {
    id: string
    name: string
}

export interface N204616 {
    id: string
    name: string
}

export interface N205416 {
    id: string
    name: string
}

export interface N205616 {
    id: string
    name: string
}

export interface N205716 {
    id: string
    name: string
}

export interface N208116 {
    id: string
    name: string
}

export interface N214916 {
    id: string
    name: string
}

export interface N216216 {
    id: string
    name: string
}

export interface N217016 {
    id: string
    name: string
}

export interface N23706 {
    id: string
    name: string
}

export interface N237916 {
    id: string
    name: string
}

export interface N239716 {
    id: string
    name: string
}

export interface N239916 {
    id: string
    name: string
}

export interface N240316 {
    id: string
    name: string
    categories: string[]
}

export interface N240516 {
    id: string
    name: string
}

export interface N257916 {
    id: string
    name: string
    value: string
}

export interface N280716 {
    id: string
    name: string
}

export interface N350116 {
    id: string
    name: string
}

export interface N350216 {
    id: string
    name: string
}

export interface N495116 {
    id: string
    name: string
    categories: string[]
}

export interface N621316 {
    id: string
    name: string
}

export interface N107374337016 {
    id: string
    name: string
}

export interface N107374337116 {
    id: string
    name: string
}

export interface N107374391816 {
    id: string
    name: string
    value: string
}

export interface N107374392616 {
    id: string
    name: string
}

export interface N107374423716 {
    id: string
    name: string
}

export interface N107374424016 {
    id: string
    name: string
}

export interface N107374424216 {
    id: string
    name: string
}

export interface N107374424316 {
    id: string
    name: string
}

export interface N107374470616 {
    id: string
    name: string
}

export interface N107374482816 {
    id: string
    name: string
}

export interface N107374483116 {
    id: string
    name: string
}

export interface N107374516616 {
    id: string
    name: string
}

export interface N10737451676 {
    id: string
    name: string
}

export interface N107374529416 {
    id: string
    name: string
}

export interface Occupancy16 {
    max_allowed: MaxAllowed16
    age_categories: AgeCategories16
}

export interface MaxAllowed16 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories16 {
    Adult: Adult16
    ChildAgeA: ChildAgeA16
}

export interface Adult16 {
    name: string
    minimum_age: number
}

export interface ChildAgeA16 {
    name: string
    minimum_age: number
}

export interface BedGroups16 {
    "37339": N373392
}

export interface N373392 {
    id: string
    description: string
    configuration: Configuration16[]
}

export interface Configuration16 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions16 {
    overview: string
}

export interface N315445184 {
    id: string
    area: Area17
    name: string
    images: Image18[]
    amenities: Amenities17
    occupancy: Occupancy17
    bed_groups: BedGroups17
    descriptions: Descriptions17
}

export interface Area17 {
    square_feet: number
    square_meters: number
}

export interface Image18 {
    links: Links17
    caption: string
    category: number
    hero_image: boolean
}

export interface Links17 {
    "70px": N70px17
    "200px": N200px17
    "350px": N350px17
    "1000px": N1000px17
}

export interface N70px17 {
    href: string
    method: string
}

export interface N200px17 {
    href: string
    method: string
}

export interface N350px17 {
    href: string
    method: string
}

export interface N1000px17 {
    href: string
    method: string
}

export interface Amenities17 {
    "1": N117
    "26": N2617
    "123": N12317
    "126": N12617
    "128": N12817
    "131": N13117
    "132": N13217
    "133": N13317
    "136": N13617
    "138": N13817
    "141": N14117
    "142": N14217
    "144": N14417
    "145": N14517
    "146": N14617
    "2015": N201517
    "2025": N202517
    "2026": N202617
    "2034": N203417
    "2037": N203717
    "2039": N203917
    "2046": N204617
    "2054": N205417
    "2056": N205617
    "2057": N205717
    "2081": N208117
    "2149": N214917
    "2162": N216217
    "2170": N217017
    "2379": N237917
    "2397": N239717
    "2399": N239917
    "2403": N240317
    "2405": N240517
    "2579": N257917
    "2807": N280717
    "3501": N350117
    "3502": N350217
    "4951": N495117
    "6213": N621317
    "1073743370": N107374337017
    "1073743371": N107374337117
    "1073743918": N107374391817
    "1073743926": N107374392617
    "1073744237": N107374423717
    "1073744240": N107374424017
    "1073744242": N107374424217
    "1073744243": N107374424317
    "1073744706": N107374470617
    "1073744828": N107374482817
    "1073744831": N107374483117
    "1073745166": N107374516617
    "1073745294": N107374529417
}

export interface N117 {
    id: string
    name: string
    categories: string[]
}

export interface N2617 {
    id: string
    name: string
}

export interface N12317 {
    id: string
    name: string
}

export interface N12617 {
    id: string
    name: string
}

export interface N12817 {
    id: string
    name: string
}

export interface N13117 {
    id: string
    name: string
}

export interface N13217 {
    id: string
    name: string
}

export interface N13317 {
    id: string
    name: string
}

export interface N13617 {
    id: string
    name: string
}

export interface N13817 {
    id: string
    name: string
}

export interface N14117 {
    id: string
    name: string
}

export interface N14217 {
    id: string
    name: string
}

export interface N14417 {
    id: string
    name: string
}

export interface N14517 {
    id: string
    name: string
}

export interface N14617 {
    id: string
    name: string
}

export interface N201517 {
    id: string
    name: string
}

export interface N202517 {
    id: string
    name: string
}

export interface N202617 {
    id: string
    name: string
}

export interface N203417 {
    id: string
    name: string
}

export interface N203717 {
    id: string
    name: string
}

export interface N203917 {
    id: string
    name: string
}

export interface N204617 {
    id: string
    name: string
}

export interface N205417 {
    id: string
    name: string
}

export interface N205617 {
    id: string
    name: string
}

export interface N205717 {
    id: string
    name: string
}

export interface N208117 {
    id: string
    name: string
}

export interface N214917 {
    id: string
    name: string
}

export interface N216217 {
    id: string
    name: string
}

export interface N217017 {
    id: string
    name: string
}

export interface N237917 {
    id: string
    name: string
}

export interface N239717 {
    id: string
    name: string
}

export interface N239917 {
    id: string
    name: string
}

export interface N240317 {
    id: string
    name: string
    categories: string[]
}

export interface N240517 {
    id: string
    name: string
}

export interface N257917 {
    id: string
    name: string
    value: string
}

export interface N280717 {
    id: string
    name: string
}

export interface N350117 {
    id: string
    name: string
}

export interface N350217 {
    id: string
    name: string
}

export interface N495117 {
    id: string
    name: string
    categories: string[]
}

export interface N621317 {
    id: string
    name: string
}

export interface N107374337017 {
    id: string
    name: string
}

export interface N107374337117 {
    id: string
    name: string
}

export interface N107374391817 {
    id: string
    name: string
    value: string
}

export interface N107374392617 {
    id: string
    name: string
}

export interface N107374423717 {
    id: string
    name: string
}

export interface N107374424017 {
    id: string
    name: string
}

export interface N107374424217 {
    id: string
    name: string
}

export interface N107374424317 {
    id: string
    name: string
}

export interface N107374470617 {
    id: string
    name: string
}

export interface N107374482817 {
    id: string
    name: string
}

export interface N107374483117 {
    id: string
    name: string
}

export interface N107374516617 {
    id: string
    name: string
}

export interface N107374529417 {
    id: string
    name: string
}

export interface Occupancy17 {
    max_allowed: MaxAllowed17
    age_categories: AgeCategories17
}

export interface MaxAllowed17 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories17 {
    Adult: Adult17
    ChildAgeA: ChildAgeA17
}

export interface Adult17 {
    name: string
    minimum_age: number
}

export interface ChildAgeA17 {
    name: string
    minimum_age: number
}

export interface BedGroups17 {
    "37340": N373402
}

export interface N373402 {
    id: string
    description: string
    configuration: Configuration17[]
}

export interface Configuration17 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions17 {
    overview: string
}

export interface N315445185 {
    id: string
    area: Area18
    name: string
    images: Image19[]
    amenities: Amenities18
    occupancy: Occupancy18
    bed_groups: BedGroups18
    descriptions: Descriptions18
}

export interface Area18 {
    square_feet: number
    square_meters: number
}

export interface Image19 {
    links: Links18
    caption: string
    category: number
    hero_image: boolean
}

export interface Links18 {
    "70px": N70px18
    "200px": N200px18
    "350px": N350px18
    "1000px": N1000px18
}

export interface N70px18 {
    href: string
    method: string
}

export interface N200px18 {
    href: string
    method: string
}

export interface N350px18 {
    href: string
    method: string
}

export interface N1000px18 {
    href: string
    method: string
}

export interface Amenities18 {
    "1": N118
    "26": N2618
    "123": N12318
    "126": N12618
    "128": N12818
    "131": N13118
    "132": N13218
    "133": N13318
    "136": N13618
    "138": N13818
    "141": N14118
    "142": N14218
    "144": N14418
    "145": N14518
    "146": N14618
    "2015": N201518
    "2025": N202518
    "2026": N202618
    "2034": N203418
    "2037": N203718
    "2039": N203918
    "2046": N204618
    "2054": N205418
    "2056": N205618
    "2057": N205718
    "2081": N208118
    "2149": N214918
    "2162": N216218
    "2170": N217018
    "2370": N23707
    "2379": N237918
    "2397": N239718
    "2399": N239918
    "2403": N240318
    "2405": N240518
    "2579": N257918
    "2807": N280718
    "3501": N350118
    "3502": N350218
    "4951": N495118
    "6213": N621318
    "1073743370": N107374337018
    "1073743371": N107374337118
    "1073743918": N107374391818
    "1073743926": N107374392618
    "1073744237": N107374423718
    "1073744240": N107374424018
    "1073744242": N107374424218
    "1073744243": N107374424318
    "1073744706": N107374470618
    "1073744828": N107374482818
    "1073744831": N107374483118
    "1073745166": N107374516618
    "1073745167": N10737451677
    "1073745294": N107374529418
}

export interface N118 {
    id: string
    name: string
    categories: string[]
}

export interface N2618 {
    id: string
    name: string
}

export interface N12318 {
    id: string
    name: string
}

export interface N12618 {
    id: string
    name: string
}

export interface N12818 {
    id: string
    name: string
}

export interface N13118 {
    id: string
    name: string
}

export interface N13218 {
    id: string
    name: string
}

export interface N13318 {
    id: string
    name: string
}

export interface N13618 {
    id: string
    name: string
}

export interface N13818 {
    id: string
    name: string
}

export interface N14118 {
    id: string
    name: string
}

export interface N14218 {
    id: string
    name: string
}

export interface N14418 {
    id: string
    name: string
}

export interface N14518 {
    id: string
    name: string
}

export interface N14618 {
    id: string
    name: string
}

export interface N201518 {
    id: string
    name: string
}

export interface N202518 {
    id: string
    name: string
}

export interface N202618 {
    id: string
    name: string
}

export interface N203418 {
    id: string
    name: string
}

export interface N203718 {
    id: string
    name: string
}

export interface N203918 {
    id: string
    name: string
}

export interface N204618 {
    id: string
    name: string
}

export interface N205418 {
    id: string
    name: string
}

export interface N205618 {
    id: string
    name: string
}

export interface N205718 {
    id: string
    name: string
}

export interface N208118 {
    id: string
    name: string
}

export interface N214918 {
    id: string
    name: string
}

export interface N216218 {
    id: string
    name: string
}

export interface N217018 {
    id: string
    name: string
}

export interface N23707 {
    id: string
    name: string
}

export interface N237918 {
    id: string
    name: string
}

export interface N239718 {
    id: string
    name: string
}

export interface N239918 {
    id: string
    name: string
}

export interface N240318 {
    id: string
    name: string
    categories: string[]
}

export interface N240518 {
    id: string
    name: string
}

export interface N257918 {
    id: string
    name: string
    value: string
}

export interface N280718 {
    id: string
    name: string
}

export interface N350118 {
    id: string
    name: string
}

export interface N350218 {
    id: string
    name: string
}

export interface N495118 {
    id: string
    name: string
    categories: string[]
}

export interface N621318 {
    id: string
    name: string
}

export interface N107374337018 {
    id: string
    name: string
}

export interface N107374337118 {
    id: string
    name: string
}

export interface N107374391818 {
    id: string
    name: string
    value: string
}

export interface N107374392618 {
    id: string
    name: string
}

export interface N107374423718 {
    id: string
    name: string
}

export interface N107374424018 {
    id: string
    name: string
}

export interface N107374424218 {
    id: string
    name: string
}

export interface N107374424318 {
    id: string
    name: string
}

export interface N107374470618 {
    id: string
    name: string
}

export interface N107374482818 {
    id: string
    name: string
}

export interface N107374483118 {
    id: string
    name: string
}

export interface N107374516618 {
    id: string
    name: string
}

export interface N10737451677 {
    id: string
    name: string
}

export interface N107374529418 {
    id: string
    name: string
}

export interface Occupancy18 {
    max_allowed: MaxAllowed18
    age_categories: AgeCategories18
}

export interface MaxAllowed18 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories18 {
    Adult: Adult18
    ChildAgeA: ChildAgeA18
}

export interface Adult18 {
    name: string
    minimum_age: number
}

export interface ChildAgeA18 {
    name: string
    minimum_age: number
}

export interface BedGroups18 {
    "37316": N373162
}

export interface N373162 {
    id: string
    description: string
    configuration: Configuration18[]
}

export interface Configuration18 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions18 {
    overview: string
}

export interface N315445186 {
    id: string
    area: Area19
    name: string
    images: Image20[]
    amenities: Amenities19
    occupancy: Occupancy19
    bed_groups: BedGroups19
    descriptions: Descriptions19
}

export interface Area19 {
    square_feet: number
    square_meters: number
}

export interface Image20 {
    links: Links19
    caption: string
    category: number
    hero_image: boolean
}

export interface Links19 {
    "70px": N70px19
    "200px": N200px19
    "350px": N350px19
    "1000px": N1000px19
}

export interface N70px19 {
    href: string
    method: string
}

export interface N200px19 {
    href: string
    method: string
}

export interface N350px19 {
    href: string
    method: string
}

export interface N1000px19 {
    href: string
    method: string
}

export interface Amenities19 {
    "1": N119
    "26": N2619
    "123": N12319
    "126": N12619
    "128": N12819
    "131": N13119
    "132": N13219
    "133": N13319
    "136": N13619
    "138": N13819
    "141": N14119
    "142": N14219
    "144": N14419
    "145": N14519
    "146": N14619
    "2015": N201519
    "2025": N202519
    "2026": N202619
    "2034": N203419
    "2037": N203719
    "2039": N203919
    "2046": N204619
    "2054": N205419
    "2056": N205619
    "2057": N205719
    "2081": N208119
    "2149": N214919
    "2162": N216219
    "2170": N217019
    "2370": N23708
    "2379": N237919
    "2397": N239719
    "2399": N239919
    "2403": N240319
    "2405": N240519
    "2579": N257919
    "2807": N280719
    "3501": N350119
    "3502": N350219
    "4951": N495119
    "6213": N621319
    "1073743370": N107374337019
    "1073743371": N107374337119
    "1073743918": N107374391819
    "1073743926": N107374392619
    "1073744237": N107374423719
    "1073744240": N107374424019
    "1073744242": N107374424219
    "1073744243": N107374424319
    "1073744706": N107374470619
    "1073744828": N107374482819
    "1073744831": N107374483119
    "1073745166": N107374516619
    "1073745167": N10737451678
    "1073745294": N107374529419
}

export interface N119 {
    id: string
    name: string
    categories: string[]
}

export interface N2619 {
    id: string
    name: string
}

export interface N12319 {
    id: string
    name: string
}

export interface N12619 {
    id: string
    name: string
}

export interface N12819 {
    id: string
    name: string
}

export interface N13119 {
    id: string
    name: string
}

export interface N13219 {
    id: string
    name: string
}

export interface N13319 {
    id: string
    name: string
}

export interface N13619 {
    id: string
    name: string
}

export interface N13819 {
    id: string
    name: string
}

export interface N14119 {
    id: string
    name: string
}

export interface N14219 {
    id: string
    name: string
}

export interface N14419 {
    id: string
    name: string
}

export interface N14519 {
    id: string
    name: string
}

export interface N14619 {
    id: string
    name: string
}

export interface N201519 {
    id: string
    name: string
}

export interface N202519 {
    id: string
    name: string
}

export interface N202619 {
    id: string
    name: string
}

export interface N203419 {
    id: string
    name: string
}

export interface N203719 {
    id: string
    name: string
}

export interface N203919 {
    id: string
    name: string
}

export interface N204619 {
    id: string
    name: string
}

export interface N205419 {
    id: string
    name: string
}

export interface N205619 {
    id: string
    name: string
}

export interface N205719 {
    id: string
    name: string
}

export interface N208119 {
    id: string
    name: string
}

export interface N214919 {
    id: string
    name: string
}

export interface N216219 {
    id: string
    name: string
}

export interface N217019 {
    id: string
    name: string
}

export interface N23708 {
    id: string
    name: string
}

export interface N237919 {
    id: string
    name: string
}

export interface N239719 {
    id: string
    name: string
}

export interface N239919 {
    id: string
    name: string
}

export interface N240319 {
    id: string
    name: string
    categories: string[]
}

export interface N240519 {
    id: string
    name: string
}

export interface N257919 {
    id: string
    name: string
    value: string
}

export interface N280719 {
    id: string
    name: string
}

export interface N350119 {
    id: string
    name: string
}

export interface N350219 {
    id: string
    name: string
}

export interface N495119 {
    id: string
    name: string
    categories: string[]
}

export interface N621319 {
    id: string
    name: string
}

export interface N107374337019 {
    id: string
    name: string
}

export interface N107374337119 {
    id: string
    name: string
}

export interface N107374391819 {
    id: string
    name: string
    value: string
}

export interface N107374392619 {
    id: string
    name: string
}

export interface N107374423719 {
    id: string
    name: string
}

export interface N107374424019 {
    id: string
    name: string
}

export interface N107374424219 {
    id: string
    name: string
}

export interface N107374424319 {
    id: string
    name: string
}

export interface N107374470619 {
    id: string
    name: string
}

export interface N107374482819 {
    id: string
    name: string
}

export interface N107374483119 {
    id: string
    name: string
}

export interface N107374516619 {
    id: string
    name: string
}

export interface N10737451678 {
    id: string
    name: string
}

export interface N107374529419 {
    id: string
    name: string
}

export interface Occupancy19 {
    max_allowed: MaxAllowed19
    age_categories: AgeCategories19
}

export interface MaxAllowed19 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories19 {
    Adult: Adult19
    ChildAgeA: ChildAgeA19
}

export interface Adult19 {
    name: string
    minimum_age: number
}

export interface ChildAgeA19 {
    name: string
    minimum_age: number
}

export interface BedGroups19 {
    "37316": N373163
}

export interface N373163 {
    id: string
    description: string
    configuration: Configuration19[]
}

export interface Configuration19 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions19 {
    overview: string
}

export interface N315445189 {
    id: string
    area: Area20
    name: string
    images: Image21[]
    amenities: Amenities20
    occupancy: Occupancy20
    bed_groups: BedGroups20
    descriptions: Descriptions20
}

export interface Area20 {
    square_feet: number
    square_meters: number
}

export interface Image21 {
    links: Links20
    caption: string
    category: number
    hero_image: boolean
}

export interface Links20 {
    "70px": N70px20
    "200px": N200px20
    "350px": N350px20
    "1000px": N1000px20
}

export interface N70px20 {
    href: string
    method: string
}

export interface N200px20 {
    href: string
    method: string
}

export interface N350px20 {
    href: string
    method: string
}

export interface N1000px20 {
    href: string
    method: string
}

export interface Amenities20 {
    "1": N120
    "26": N2620
    "123": N12320
    "126": N12620
    "128": N12820
    "131": N13120
    "132": N13220
    "133": N13320
    "136": N13620
    "138": N13820
    "141": N14120
    "142": N14220
    "144": N14420
    "145": N14520
    "146": N14620
    "2015": N201520
    "2025": N202520
    "2026": N202620
    "2034": N203420
    "2037": N203720
    "2039": N203920
    "2046": N204620
    "2054": N205420
    "2056": N205620
    "2057": N205720
    "2081": N208120
    "2149": N214920
    "2162": N216220
    "2170": N217020
    "2370": N23709
    "2379": N237920
    "2397": N239720
    "2399": N239920
    "2403": N240320
    "2405": N240520
    "2579": N257920
    "2807": N280720
    "3501": N350120
    "3502": N350220
    "4951": N495120
    "6213": N621320
    "1073743370": N107374337020
    "1073743371": N107374337120
    "1073743918": N107374391820
    "1073743926": N107374392620
    "1073744237": N107374423720
    "1073744240": N107374424020
    "1073744242": N107374424220
    "1073744243": N107374424320
    "1073744706": N107374470620
    "1073744828": N107374482820
    "1073744831": N107374483120
    "1073745166": N107374516620
    "1073745167": N10737451679
    "1073745294": N107374529420
}

export interface N120 {
    id: string
    name: string
    categories: string[]
}

export interface N2620 {
    id: string
    name: string
}

export interface N12320 {
    id: string
    name: string
}

export interface N12620 {
    id: string
    name: string
}

export interface N12820 {
    id: string
    name: string
}

export interface N13120 {
    id: string
    name: string
}

export interface N13220 {
    id: string
    name: string
}

export interface N13320 {
    id: string
    name: string
}

export interface N13620 {
    id: string
    name: string
}

export interface N13820 {
    id: string
    name: string
}

export interface N14120 {
    id: string
    name: string
}

export interface N14220 {
    id: string
    name: string
}

export interface N14420 {
    id: string
    name: string
}

export interface N14520 {
    id: string
    name: string
}

export interface N14620 {
    id: string
    name: string
}

export interface N201520 {
    id: string
    name: string
}

export interface N202520 {
    id: string
    name: string
}

export interface N202620 {
    id: string
    name: string
}

export interface N203420 {
    id: string
    name: string
}

export interface N203720 {
    id: string
    name: string
}

export interface N203920 {
    id: string
    name: string
}

export interface N204620 {
    id: string
    name: string
}

export interface N205420 {
    id: string
    name: string
}

export interface N205620 {
    id: string
    name: string
}

export interface N205720 {
    id: string
    name: string
}

export interface N208120 {
    id: string
    name: string
}

export interface N214920 {
    id: string
    name: string
}

export interface N216220 {
    id: string
    name: string
}

export interface N217020 {
    id: string
    name: string
}

export interface N23709 {
    id: string
    name: string
}

export interface N237920 {
    id: string
    name: string
}

export interface N239720 {
    id: string
    name: string
}

export interface N239920 {
    id: string
    name: string
}

export interface N240320 {
    id: string
    name: string
    categories: string[]
}

export interface N240520 {
    id: string
    name: string
}

export interface N257920 {
    id: string
    name: string
    value: string
}

export interface N280720 {
    id: string
    name: string
}

export interface N350120 {
    id: string
    name: string
}

export interface N350220 {
    id: string
    name: string
}

export interface N495120 {
    id: string
    name: string
    categories: string[]
}

export interface N621320 {
    id: string
    name: string
}

export interface N107374337020 {
    id: string
    name: string
}

export interface N107374337120 {
    id: string
    name: string
}

export interface N107374391820 {
    id: string
    name: string
    value: string
}

export interface N107374392620 {
    id: string
    name: string
}

export interface N107374423720 {
    id: string
    name: string
}

export interface N107374424020 {
    id: string
    name: string
}

export interface N107374424220 {
    id: string
    name: string
}

export interface N107374424320 {
    id: string
    name: string
}

export interface N107374470620 {
    id: string
    name: string
}

export interface N107374482820 {
    id: string
    name: string
}

export interface N107374483120 {
    id: string
    name: string
}

export interface N107374516620 {
    id: string
    name: string
}

export interface N10737451679 {
    id: string
    name: string
}

export interface N107374529420 {
    id: string
    name: string
}

export interface Occupancy20 {
    max_allowed: MaxAllowed20
    age_categories: AgeCategories20
}

export interface MaxAllowed20 {
    total: number
    adults: number
    children: number
}

export interface AgeCategories20 {
    Adult: Adult20
    ChildAgeA: ChildAgeA20
}

export interface Adult20 {
    name: string
    minimum_age: number
}

export interface ChildAgeA20 {
    name: string
    minimum_age: number
}

export interface BedGroups20 {
    "37316": N373164
}

export interface N373164 {
    id: string
    description: string
    configuration: Configuration20[]
}

export interface Configuration20 {
    size: string
    type: string
    quantity: number
}

export interface Descriptions20 {
    overview: string
}

export interface ImportantInfo {
    fees: Fees
    checkin: Checkin
    checkout: Checkout
    policies: Policies
    localization: Localization
}

export interface Fees {
    optional: string
}

export interface Checkin {
    end_time: string
    begin_time: string
    instructions: string
    special_instructions: string
}

export interface Checkout {
    time: string
}

export interface Policies {
    know_before_you_go: string
}

export interface Localization {
    "id-id": IdId
}

export interface IdId {
    fees: Fees2
    checkin: Checkin2
    checkout: Checkout2
    policies: Policies2
}

export interface Fees2 {
    optional: string
}

export interface Checkin2 {
    end_time: string
    begin_time: string
    instructions: string
    special_instructions: string
}

export interface Checkout2 {
    time: string
}

export interface Policies2 {
    know_before_you_go: string
}

export interface GeneralInfo {
    themes: Themes
    airports: Airports
    amenities: Amenities21
    attributes: Attributes
    statistics: Statistics
    descriptions: Descriptions21
    localization: Localization2
    onsite_payments: OnsitePayments2
    spoken_languages: SpokenLanguages2
    vacation_rental_details: VacationRentalDetails2
}

export interface Themes {
    "2328": N2328
    "2332": N2332
    "2333": N2333
    "2334": N2334
    "2337": N2337
    "2341": N2341
    "5001": N5001
    "1073744355": N1073744355
    "1073744361": N1073744361
    "1073744362": N1073744362
    "1073744368": N1073744368
    "1073744370": N1073744370
}

export interface N2328 {
    id: string
    name: string
}

export interface N2332 {
    id: string
    name: string
}

export interface N2333 {
    id: string
    name: string
}

export interface N2334 {
    id: string
    name: string
}

export interface N2337 {
    id: string
    name: string
}

export interface N2341 {
    id: string
    name: string
}

export interface N5001 {
    id: string
    name: string
}

export interface N1073744355 {
    id: string
    name: string
}

export interface N1073744361 {
    id: string
    name: string
}

export interface N1073744362 {
    id: string
    name: string
}

export interface N1073744368 {
    id: string
    name: string
}

export interface N1073744370 {
    id: string
    name: string
}

export interface Airports {
    preferred: Preferred
}

export interface Preferred {
    iata_airport_code: string
}

export interface Amenities21 {
    "8": N8
    "9": N9
    "40": N40
    "41": N41
    "43": N43
    "44": N44
    "56": N56
    "81": N81
    "102": N102
    "324": N324
    "347": N347
    "361": N361
    "369": N369
    "378": N378
    "2008": N2008
    "2014": N2014
    "2016": N2016
    "2017": N2017
    "2063": N2063
    "2065": N2065
    "2066": N2066
    "2067": N2067
    "2070": N2070
    "2074": N2074
    "2123": N2123
    "2125": N2125
    "2129": N2129
    "2134": N2134
    "2135": N2135
    "2137": N2137
    "2177": N2177
    "2352": N2352
    "2387": N2387
    "2390": N2390
    "2392": N2392
    "2537": N2537
    "2539": N2539
    "2592": N2592
    "2593": N2593
    "2821": N2821
    "2822": N2822
    "3372": N3372
    "3778": N3778
    "3861": N3861
    "3864": N3864
    "3913": N3913
    "3914": N3914
    "3929": N3929
    "4003": N4003
    "4436": N4436
    "4438": N4438
    "4514": N4514
    "1073742791": N1073742791
    "1073743877": N1073743877
    "1073743926": N107374392621
    "1073743955": N1073743955
    "1073744066": N1073744066
    "1073744069": N1073744069
    "1073744070": N1073744070
    "1073744071": N1073744071
    "1073744087": N1073744087
    "1073744099": N1073744099
    "1073744110": N1073744110
    "1073744111": N1073744111
    "1073744240": N107374424021
    "1073744242": N107374424221
    "1073744243": N107374424321
    "1073744256": N1073744256
    "1073744398": N1073744398
    "1073744430": N1073744430
    "1073744635": N1073744635
    "1073744641": N1073744641
    "1073744828": N107374482821
    "1073744831": N107374483121
    "1073745265": N1073745265
    "1073745284": N1073745284
    "1073745287": N1073745287
    "1073745288": N1073745288
    "1073745289": N1073745289
    "1073745290": N1073745290
    "1073745291": N1073745291
    "1073745292": N1073745292
    "1073745293": N1073745293
    "1073745294": N107374529421
    "1073745295": N1073745295
    "1073745297": N1073745297
    "1073745298": N1073745298
    "1073745299": N1073745299
    "1073745300": N1073745300
    "1073745301": N1073745301
    "1073745302": N1073745302
    "1073745303": N1073745303
    "1073745304": N1073745304
    "1073745305": N1073745305
    "1073745306": N1073745306
    "1073745307": N1073745307
    "1073745308": N1073745308
    "1073745309": N1073745309
    "1073745310": N1073745310
}

export interface N8 {
    id: string
    name: string
}

export interface N9 {
    id: string
    name: string
    categories: string[]
}

export interface N40 {
    id: string
    name: string
}

export interface N41 {
    id: string
    name: string
}

export interface N43 {
    id: string
    name: string
}

export interface N44 {
    id: string
    name: string
}

export interface N56 {
    id: string
    name: string
    categories: string[]
}

export interface N81 {
    id: string
    name: string
    categories: string[]
}

export interface N102 {
    id: string
    name: string
}

export interface N324 {
    id: string
    name: string
}

export interface N347 {
    id: string
    name: string
}

export interface N361 {
    id: string
    name: string
}

export interface N369 {
    id: string
    name: string
}

export interface N378 {
    id: string
    name: string
}

export interface N2008 {
    id: string
    name: string
    categories: string[]
}

export interface N2014 {
    id: string
    name: string
    categories: string[]
}

export interface N2016 {
    id: string
    name: string
}

export interface N2017 {
    id: string
    name: string
    categories: string[]
}

export interface N2063 {
    id: string
    name: string
}

export interface N2065 {
    id: string
    name: string
}

export interface N2066 {
    id: string
    name: string
}

export interface N2067 {
    id: string
    name: string
}

export interface N2070 {
    id: string
    name: string
    categories: string[]
}

export interface N2074 {
    id: string
    name: string
    categories: string[]
}

export interface N2123 {
    id: string
    name: string
    categories: string[]
}

export interface N2125 {
    id: string
    name: string
}

export interface N2129 {
    id: string
    name: string
    categories: string[]
}

export interface N2134 {
    id: string
    name: string
}

export interface N2135 {
    id: string
    name: string
}

export interface N2137 {
    id: string
    name: string
}

export interface N2177 {
    id: string
    name: string
}

export interface N2352 {
    id: string
    name: string
}

export interface N2387 {
    id: string
    name: string
}

export interface N2390 {
    id: string
    name: string
    categories: string[]
}

export interface N2392 {
    id: string
    name: string
}

export interface N2537 {
    id: string
    name: string
    value: string
}

export interface N2539 {
    id: string
    name: string
    value: string
}

export interface N2592 {
    id: string
    name: string
    value: string
}

export interface N2593 {
    id: string
    name: string
    value: string
}

export interface N2821 {
    id: string
    name: string
    value: string
}

export interface N2822 {
    id: string
    name: string
    value: string
}

export interface N3372 {
    id: string
    name: string
    categories: string[]
}

export interface N3778 {
    id: string
    name: string
}

export interface N3861 {
    id: string
    name: string
    categories: string[]
}

export interface N3864 {
    id: string
    name: string
    categories: string[]
}

export interface N3913 {
    id: string
    name: string
    value: string
}

export interface N3914 {
    id: string
    name: string
    value: string
}

export interface N3929 {
    id: string
    name: string
    value: string
}

export interface N4003 {
    id: string
    name: string
}

export interface N4436 {
    id: string
    name: string
}

export interface N4438 {
    id: string
    name: string
}

export interface N4514 {
    id: string
    name: string
}

export interface N1073742791 {
    id: string
    name: string
}

export interface N1073743877 {
    id: string
    name: string
}

export interface N107374392621 {
    id: string
    name: string
}

export interface N1073743955 {
    id: string
    name: string
}

export interface N1073744066 {
    id: string
    name: string
}

export interface N1073744069 {
    id: string
    name: string
}

export interface N1073744070 {
    id: string
    name: string
}

export interface N1073744071 {
    id: string
    name: string
}

export interface N1073744087 {
    id: string
    name: string
}

export interface N1073744099 {
    id: string
    name: string
}

export interface N1073744110 {
    id: string
    name: string
}

export interface N1073744111 {
    id: string
    name: string
}

export interface N107374424021 {
    id: string
    name: string
}

export interface N107374424221 {
    id: string
    name: string
}

export interface N107374424321 {
    id: string
    name: string
}

export interface N1073744256 {
    id: string
    name: string
}

export interface N1073744398 {
    id: string
    name: string
}

export interface N1073744430 {
    id: string
    name: string
}

export interface N1073744635 {
    id: string
    name: string
}

export interface N1073744641 {
    id: string
    name: string
}

export interface N107374482821 {
    id: string
    name: string
}

export interface N107374483121 {
    id: string
    name: string
}

export interface N1073745265 {
    id: string
    name: string
}

export interface N1073745284 {
    id: string
    name: string
}

export interface N1073745287 {
    id: string
    name: string
}

export interface N1073745288 {
    id: string
    name: string
}

export interface N1073745289 {
    id: string
    name: string
}

export interface N1073745290 {
    id: string
    name: string
}

export interface N1073745291 {
    id: string
    name: string
}

export interface N1073745292 {
    id: string
    name: string
}

export interface N1073745293 {
    id: string
    name: string
}

export interface N107374529421 {
    id: string
    name: string
}

export interface N1073745295 {
    id: string
    name: string
}

export interface N1073745297 {
    id: string
    name: string
}

export interface N1073745298 {
    id: string
    name: string
}

export interface N1073745299 {
    id: string
    name: string
}

export interface N1073745300 {
    id: string
    name: string
}

export interface N1073745301 {
    id: string
    name: string
}

export interface N1073745302 {
    id: string
    name: string
}

export interface N1073745303 {
    id: string
    name: string
}

export interface N1073745304 {
    id: string
    name: string
}

export interface N1073745305 {
    id: string
    name: string
}

export interface N1073745306 {
    id: string
    name: string
}

export interface N1073745307 {
    id: string
    name: string
}

export interface N1073745308 {
    id: string
    name: string
}

export interface N1073745309 {
    id: string
    name: string
}

export interface N1073745310 {
    id: string
    name: string
}

export interface Attributes {
    pets: Pets
    general: General
}

export interface Pets {
    "2050": N2050
    "2808": N2808
}

export interface N2050 {
    id: string
    name: string
}

export interface N2808 {
    id: string
    name: string
}

export interface General {
    "2544": N2544
    "3004": N3004
    "1073744992": N1073744992
    "1073744994": N1073744994
    "1073744996": N1073744996
    "1073744997": N1073744997
    "1073744998": N1073744998
    "1073745000": N1073745000
    "1073745002": N1073745002
    "1073745004": N1073745004
    "1073745010": N1073745010
    "1073745013": N1073745013
    "1073745015": N1073745015
    "1073745016": N1073745016
    "1073745017": N1073745017
    "1073745018": N1073745018
    "1073745019": N1073745019
    "1073745045": N1073745045
    "1073745047": N1073745047
    "1073745049": N1073745049
    "1073745051": N1073745051
    "1073745053": N1073745053
}

export interface N2544 {
    id: string
    name: string
}

export interface N3004 {
    id: string
    name: string
}

export interface N1073744992 {
    id: string
    name: string
}

export interface N1073744994 {
    id: string
    name: string
}

export interface N1073744996 {
    id: string
    name: string
}

export interface N1073744997 {
    id: string
    name: string
}

export interface N1073744998 {
    id: string
    name: string
}

export interface N1073745000 {
    id: string
    name: string
}

export interface N1073745002 {
    id: string
    name: string
}

export interface N1073745004 {
    id: string
    name: string
}

export interface N1073745010 {
    id: string
    name: string
    value: string
}

export interface N1073745013 {
    id: string
    name: string
}

export interface N1073745015 {
    id: string
    name: string
}

export interface N1073745016 {
    id: string
    name: string
}

export interface N1073745017 {
    id: string
    name: string
}

export interface N1073745018 {
    id: string
    name: string
}

export interface N1073745019 {
    id: string
    name: string
}

export interface N1073745045 {
    id: string
    name: string
}

export interface N1073745047 {
    id: string
    name: string
}

export interface N1073745049 {
    id: string
    name: string
}

export interface N1073745051 {
    id: string
    name: string
}

export interface N1073745053 {
    id: string
    name: string
}

export interface Statistics {
    "52": N52
    "54": N54
}

export interface N52 {
    id: string
    name: string
    value: string
}

export interface N54 {
    id: string
    name: string
    value: string
}

export interface Descriptions21 {
    rooms: string
    dining: string
    headline: string
    location: string
    amenities: string
    attractions: string
    business_amenities: string
}

export interface Localization2 {
    "id-id": IdId2
}

export interface IdId2 {
    themes: Themes2
    airports: Airports2
    amenities: Amenities22
    attributes: Attributes2
    statistics: Statistics2
    descriptions: Descriptions22
    onsite_payments: OnsitePayments
    spoken_languages: SpokenLanguages
    vacation_rental_details: VacationRentalDetails
}

export interface Themes2 {
    "2328": N23282
    "2332": N23322
    "2333": N23332
    "2334": N23342
    "2337": N23372
    "2341": N23412
    "5001": N50012
    "1073744355": N10737443552
    "1073744361": N10737443612
    "1073744362": N10737443622
    "1073744368": N10737443682
    "1073744370": N10737443702
}

export interface N23282 {
    id: string
    name: string
}

export interface N23322 {
    id: string
    name: string
}

export interface N23332 {
    id: string
    name: string
}

export interface N23342 {
    id: string
    name: string
}

export interface N23372 {
    id: string
    name: string
}

export interface N23412 {
    id: string
    name: string
}

export interface N50012 {
    id: string
    name: string
}

export interface N10737443552 {
    id: string
    name: string
}

export interface N10737443612 {
    id: string
    name: string
}

export interface N10737443622 {
    id: string
    name: string
}

export interface N10737443682 {
    id: string
    name: string
}

export interface N10737443702 {
    id: string
    name: string
}

export interface Airports2 {
    preferred: Preferred2
}

export interface Preferred2 {
    iata_airport_code: string
}

export interface Amenities22 {
    "8": N82
    "9": N92
    "40": N402
    "41": N412
    "43": N432
    "44": N442
    "56": N562
    "81": N812
    "102": N1022
    "324": N3242
    "347": N3472
    "361": N3612
    "369": N3692
    "378": N3782
    "2008": N20082
    "2014": N20142
    "2016": N20162
    "2017": N20172
    "2063": N20632
    "2065": N20652
    "2066": N20662
    "2067": N20672
    "2070": N20702
    "2074": N20742
    "2123": N21232
    "2125": N21252
    "2129": N21292
    "2134": N21342
    "2135": N21352
    "2137": N21372
    "2177": N21772
    "2352": N23522
    "2387": N23872
    "2390": N23902
    "2392": N23922
    "2537": N25372
    "2539": N25392
    "2592": N25922
    "2593": N25932
    "2821": N28212
    "2822": N28222
    "3372": N33722
    "3778": N37782
    "3861": N38612
    "3864": N38642
    "3913": N39132
    "3914": N39142
    "3929": N39292
    "4003": N40032
    "4436": N44362
    "4438": N44382
    "4514": N45142
    "1073742791": N10737427912
    "1073743877": N10737438772
    "1073743926": N107374392622
    "1073743955": N10737439552
    "1073744066": N10737440662
    "1073744069": N10737440692
    "1073744070": N10737440702
    "1073744071": N10737440712
    "1073744087": N10737440872
    "1073744099": N10737440992
    "1073744110": N10737441102
    "1073744111": N10737441112
    "1073744240": N107374424022
    "1073744242": N107374424222
    "1073744243": N107374424322
    "1073744256": N10737442562
    "1073744398": N10737443982
    "1073744430": N10737444302
    "1073744635": N10737446352
    "1073744641": N10737446412
    "1073744828": N107374482822
    "1073744831": N107374483122
    "1073745265": N10737452652
    "1073745284": N10737452842
    "1073745287": N10737452872
    "1073745288": N10737452882
    "1073745289": N10737452892
    "1073745290": N10737452902
    "1073745291": N10737452912
    "1073745292": N10737452922
    "1073745293": N10737452932
    "1073745294": N107374529422
    "1073745295": N10737452952
    "1073745297": N10737452972
    "1073745298": N10737452982
    "1073745299": N10737452992
    "1073745300": N10737453002
    "1073745301": N10737453012
    "1073745302": N10737453022
    "1073745303": N10737453032
    "1073745304": N10737453042
    "1073745305": N10737453052
    "1073745306": N10737453062
    "1073745307": N10737453072
    "1073745308": N10737453082
    "1073745309": N10737453092
    "1073745310": N10737453102
}

export interface N82 {
    id: string
    name: string
}

export interface N92 {
    id: string
    name: string
    categories: string[]
}

export interface N402 {
    id: string
    name: string
}

export interface N412 {
    id: string
    name: string
}

export interface N432 {
    id: string
    name: string
}

export interface N442 {
    id: string
    name: string
}

export interface N562 {
    id: string
    name: string
    categories: string[]
}

export interface N812 {
    id: string
    name: string
    categories: string[]
}

export interface N1022 {
    id: string
    name: string
}

export interface N3242 {
    id: string
    name: string
}

export interface N3472 {
    id: string
    name: string
}

export interface N3612 {
    id: string
    name: string
}

export interface N3692 {
    id: string
    name: string
}

export interface N3782 {
    id: string
    name: string
}

export interface N20082 {
    id: string
    name: string
    categories: string[]
}

export interface N20142 {
    id: string
    name: string
    categories: string[]
}

export interface N20162 {
    id: string
    name: string
}

export interface N20172 {
    id: string
    name: string
    categories: string[]
}

export interface N20632 {
    id: string
    name: string
}

export interface N20652 {
    id: string
    name: string
}

export interface N20662 {
    id: string
    name: string
}

export interface N20672 {
    id: string
    name: string
}

export interface N20702 {
    id: string
    name: string
    categories: string[]
}

export interface N20742 {
    id: string
    name: string
    categories: string[]
}

export interface N21232 {
    id: string
    name: string
    categories: string[]
}

export interface N21252 {
    id: string
    name: string
}

export interface N21292 {
    id: string
    name: string
    categories: string[]
}

export interface N21342 {
    id: string
    name: string
}

export interface N21352 {
    id: string
    name: string
}

export interface N21372 {
    id: string
    name: string
}

export interface N21772 {
    id: string
    name: string
}

export interface N23522 {
    id: string
    name: string
}

export interface N23872 {
    id: string
    name: string
}

export interface N23902 {
    id: string
    name: string
    categories: string[]
}

export interface N23922 {
    id: string
    name: string
}

export interface N25372 {
    id: string
    name: string
    value: string
}

export interface N25392 {
    id: string
    name: string
    value: string
}

export interface N25922 {
    id: string
    name: string
    value: string
}

export interface N25932 {
    id: string
    name: string
    value: string
}

export interface N28212 {
    id: string
    name: string
    value: string
}

export interface N28222 {
    id: string
    name: string
    value: string
}

export interface N33722 {
    id: string
    name: string
    categories: string[]
}

export interface N37782 {
    id: string
    name: string
}

export interface N38612 {
    id: string
    name: string
    categories: string[]
}

export interface N38642 {
    id: string
    name: string
    categories: string[]
}

export interface N39132 {
    id: string
    name: string
    value: string
}

export interface N39142 {
    id: string
    name: string
    value: string
}

export interface N39292 {
    id: string
    name: string
    value: string
}

export interface N40032 {
    id: string
    name: string
}

export interface N44362 {
    id: string
    name: string
}

export interface N44382 {
    id: string
    name: string
}

export interface N45142 {
    id: string
    name: string
}

export interface N10737427912 {
    id: string
    name: string
}

export interface N10737438772 {
    id: string
    name: string
}

export interface N107374392622 {
    id: string
    name: string
}

export interface N10737439552 {
    id: string
    name: string
}

export interface N10737440662 {
    id: string
    name: string
}

export interface N10737440692 {
    id: string
    name: string
}

export interface N10737440702 {
    id: string
    name: string
}

export interface N10737440712 {
    id: string
    name: string
}

export interface N10737440872 {
    id: string
    name: string
}

export interface N10737440992 {
    id: string
    name: string
}

export interface N10737441102 {
    id: string
    name: string
}

export interface N10737441112 {
    id: string
    name: string
}

export interface N107374424022 {
    id: string
    name: string
}

export interface N107374424222 {
    id: string
    name: string
}

export interface N107374424322 {
    id: string
    name: string
}

export interface N10737442562 {
    id: string
    name: string
}

export interface N10737443982 {
    id: string
    name: string
}

export interface N10737444302 {
    id: string
    name: string
}

export interface N10737446352 {
    id: string
    name: string
}

export interface N10737446412 {
    id: string
    name: string
}

export interface N107374482822 {
    id: string
    name: string
}

export interface N107374483122 {
    id: string
    name: string
}

export interface N10737452652 {
    id: string
    name: string
}

export interface N10737452842 {
    id: string
    name: string
}

export interface N10737452872 {
    id: string
    name: string
}

export interface N10737452882 {
    id: string
    name: string
}

export interface N10737452892 {
    id: string
    name: string
}

export interface N10737452902 {
    id: string
    name: string
}

export interface N10737452912 {
    id: string
    name: string
}

export interface N10737452922 {
    id: string
    name: string
}

export interface N10737452932 {
    id: string
    name: string
}

export interface N107374529422 {
    id: string
    name: string
}

export interface N10737452952 {
    id: string
    name: string
}

export interface N10737452972 {
    id: string
    name: string
}

export interface N10737452982 {
    id: string
    name: string
}

export interface N10737452992 {
    id: string
    name: string
}

export interface N10737453002 {
    id: string
    name: string
}

export interface N10737453012 {
    id: string
    name: string
}

export interface N10737453022 {
    id: string
    name: string
}

export interface N10737453032 {
    id: string
    name: string
}

export interface N10737453042 {
    id: string
    name: string
}

export interface N10737453052 {
    id: string
    name: string
}

export interface N10737453062 {
    id: string
    name: string
}

export interface N10737453072 {
    id: string
    name: string
}

export interface N10737453082 {
    id: string
    name: string
}

export interface N10737453092 {
    id: string
    name: string
}

export interface N10737453102 {
    id: string
    name: string
}

export interface Attributes2 {
    pets: Pets2
    general: General2
}

export interface Pets2 {
    "2050": N20502
    "2808": N28082
}

export interface N20502 {
    id: string
    name: string
}

export interface N28082 {
    id: string
    name: string
}

export interface General2 {
    "2544": N25442
    "3004": N30042
    "1073744992": N10737449922
    "1073744994": N10737449942
    "1073744996": N10737449962
    "1073744997": N10737449972
    "1073744998": N10737449982
    "1073745000": N10737450002
    "1073745002": N10737450022
    "1073745004": N10737450042
    "1073745010": N10737450102
    "1073745013": N10737450132
    "1073745015": N10737450152
    "1073745016": N10737450162
    "1073745017": N10737450172
    "1073745018": N10737450182
    "1073745019": N10737450192
    "1073745045": N10737450452
    "1073745047": N10737450472
    "1073745049": N10737450492
    "1073745051": N10737450512
    "1073745053": N10737450532
}

export interface N25442 {
    id: string
    name: string
}

export interface N30042 {
    id: string
    name: string
}

export interface N10737449922 {
    id: string
    name: string
}

export interface N10737449942 {
    id: string
    name: string
}

export interface N10737449962 {
    id: string
    name: string
}

export interface N10737449972 {
    id: string
    name: string
}

export interface N10737449982 {
    id: string
    name: string
}

export interface N10737450002 {
    id: string
    name: string
}

export interface N10737450022 {
    id: string
    name: string
}

export interface N10737450042 {
    id: string
    name: string
}

export interface N10737450102 {
    id: string
    name: string
    value: string
}

export interface N10737450132 {
    id: string
    name: string
}

export interface N10737450152 {
    id: string
    name: string
}

export interface N10737450162 {
    id: string
    name: string
}

export interface N10737450172 {
    id: string
    name: string
}

export interface N10737450182 {
    id: string
    name: string
}

export interface N10737450192 {
    id: string
    name: string
}

export interface N10737450452 {
    id: string
    name: string
}

export interface N10737450472 {
    id: string
    name: string
}

export interface N10737450492 {
    id: string
    name: string
}

export interface N10737450512 {
    id: string
    name: string
}

export interface N10737450532 {
    id: string
    name: string
}

export interface Statistics2 {
    "52": N522
    "54": N542
}

export interface N522 {
    id: string
    name: string
    value: string
}

export interface N542 {
    id: string
    name: string
    value: string
}

export interface Descriptions22 {
    rooms: string
    dining: string
    headline: string
    location: string
    amenities: string
    attractions: string
    business_amenities: string
}

export interface OnsitePayments {
    types: Types
    currency: string
}

export interface Types {
    "171": N171
    "177": N177
    "180": N180
    "183": N183
    "184": N184
    "189": N189
    "407": N407
    "1073742461": N1073742461
    "1073743307": N1073743307
}

export interface N171 {
    id: string
    name: string
}

export interface N177 {
    id: string
    name: string
}

export interface N180 {
    id: string
    name: string
}

export interface N183 {
    id: string
    name: string
}

export interface N184 {
    id: string
    name: string
}

export interface N189 {
    id: string
    name: string
}

export interface N407 {
    id: string
    name: string
}

export interface N1073742461 {
    id: string
    name: string
}

export interface N1073743307 {
    id: string
    name: string
}

export interface SpokenLanguages {
    en: En
    id: Id
    ja: Ja
    "zh-cmn": ZhCmn
}

export interface En {
    id: string
    name: string
}

export interface Id {
    id: string
    name: string
}

export interface Ja {
    id: string
    name: string
}

export interface ZhCmn {
    id: string
    name: string
}

export interface VacationRentalDetails {
    house_rules: string[]
    private_host: boolean
    unit_configurations: UnitConfigurations
}

export interface UnitConfigurations {
    "1": N121[]
}

export interface N121 {
    type: string
    quantity: number
    description: string
}

export interface OnsitePayments2 {
    types: Types2
    currency: string
}

export interface Types2 {
    "171": N1712
    "177": N1772
    "180": N1802
    "183": N1832
    "184": N1842
    "189": N1892
    "407": N4072
    "1073742461": N10737424612
    "1073743307": N10737433072
}

export interface N1712 {
    id: string
    name: string
}

export interface N1772 {
    id: string
    name: string
}

export interface N1802 {
    id: string
    name: string
}

export interface N1832 {
    id: string
    name: string
}

export interface N1842 {
    id: string
    name: string
}

export interface N1892 {
    id: string
    name: string
}

export interface N4072 {
    id: string
    name: string
}

export interface N10737424612 {
    id: string
    name: string
}

export interface N10737433072 {
    id: string
    name: string
}

export interface SpokenLanguages2 {
    en: En2
    id: Id2
    ja: Ja2
    "zh-cmn": ZhCmn2
}

export interface En2 {
    id: string
    name: string
}

export interface Id2 {
    id: string
    name: string
}

export interface Ja2 {
    id: string
    name: string
}

export interface ZhCmn2 {
    id: string
    name: string
}

export interface VacationRentalDetails2 {
    house_rules: string[]
    private_host: boolean
    unit_configurations: UnitConfigurations2
    enhanced_house_rules: EnhancedHouseRules
}

export interface UnitConfigurations2 {
    "1": N122[]
    "2": N2[]
}

export interface N122 {
    type: string
    quantity: number
    description: string
}

export interface N2 {
    type: string
    quantity: number
    description: string
}

export interface EnhancedHouseRules {
    pets: Pets3
    smoking: Smoking
    check_in: CheckIn
    check_out: CheckOut
}

export interface Pets3 {
    rule: string
    additional_information: any[]
}

export interface Smoking {
    rule: string
    additional_information: any[]
}

export interface CheckIn {
    rule: string
    additional_information: any[]
}

export interface CheckOut {
    rule: string
    additional_information: any[]
}
