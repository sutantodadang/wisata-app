
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
    amenities: Amenities
    attributes: Attributes
    statistics: Statistics
    descriptions: Descriptions
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

export interface Amenities {
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
    "1073743926": N1073743926
    "1073743955": N1073743955
    "1073744066": N1073744066
    "1073744069": N1073744069
    "1073744070": N1073744070
    "1073744071": N1073744071
    "1073744087": N1073744087
    "1073744099": N1073744099
    "1073744110": N1073744110
    "1073744111": N1073744111
    "1073744240": N1073744240
    "1073744242": N1073744242
    "1073744243": N1073744243
    "1073744256": N1073744256
    "1073744398": N1073744398
    "1073744430": N1073744430
    "1073744635": N1073744635
    "1073744641": N1073744641
    "1073744828": N1073744828
    "1073744831": N1073744831
    "1073745265": N1073745265
    "1073745284": N1073745284
    "1073745287": N1073745287
    "1073745288": N1073745288
    "1073745289": N1073745289
    "1073745290": N1073745290
    "1073745291": N1073745291
    "1073745292": N1073745292
    "1073745293": N1073745293
    "1073745294": N1073745294
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

export interface N1073743926 {
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

export interface N1073744828 {
    id: string
    name: string
}

export interface N1073744831 {
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

export interface N1073745294 {
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

export interface Descriptions {
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
    amenities: Amenities2
    attributes: Attributes2
    statistics: Statistics2
    descriptions: Descriptions2
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

export interface Amenities2 {
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
    "1073743926": N10737439262
    "1073743955": N10737439552
    "1073744066": N10737440662
    "1073744069": N10737440692
    "1073744070": N10737440702
    "1073744071": N10737440712
    "1073744087": N10737440872
    "1073744099": N10737440992
    "1073744110": N10737441102
    "1073744111": N10737441112
    "1073744240": N10737442402
    "1073744242": N10737442422
    "1073744243": N10737442432
    "1073744256": N10737442562
    "1073744398": N10737443982
    "1073744430": N10737444302
    "1073744635": N10737446352
    "1073744641": N10737446412
    "1073744828": N10737448282
    "1073744831": N10737448312
    "1073745265": N10737452652
    "1073745284": N10737452842
    "1073745287": N10737452872
    "1073745288": N10737452882
    "1073745289": N10737452892
    "1073745290": N10737452902
    "1073745291": N10737452912
    "1073745292": N10737452922
    "1073745293": N10737452932
    "1073745294": N10737452942
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

export interface N10737439262 {
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

export interface N10737448282 {
    id: string
    name: string
}

export interface N10737448312 {
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

export interface N10737452942 {
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

export interface Descriptions2 {
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
    "1": N1[]
}

export interface N1 {
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
    "1": N12[]
    "2": N2[]
}

export interface N12 {
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
