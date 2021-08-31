//DOM Selectors

//Form Selectors
const search = document.querySelector('#search')
const form = document.querySelector('form')

const searchHeader = document.querySelector('#search-header')

const searchField = document.querySelector('.search-field')
const searchInput = document.querySelector('.search-input')
const searchButton = document.querySelector('#search-button')


//Result Selectors
const main = document.querySelector('main')

const results = document.querySelector('#results')
const leftPanel = document.querySelector('#left-panel')
const rightPanel = document.querySelector('#right-panel')

const webPanelTitle = document.querySelector('#web-panel-title')
const imagePanelTitle = document.querySelector('#image-panel-title')
const webPanelInformation = document.querySelector('#web-panel-information')
const imagePanelInformation = document.querySelector('#image-panel-information')

//Pagination Selectors
const webPagination = document.querySelector('#web-pagination')
const imagePagination = document.querySelector('#image-pagination')

const webPageFirst = document.querySelector('#web-page-first')
const webPageBefore = document.querySelector('#web-page-before')
const webPageCurrent = document.querySelector('#web-page-current')
const webPageAfter = document.querySelector('#web-page-after')
const webPageLast = document.querySelector('#web-page-last')

const imagePageFirst = document.querySelector('#image-page-first')
const imagePageBefore = document.querySelector('#image-page-before')
const imagePageCurrent = document.querySelector('#image-page-current')
const imagePageAfter = document.querySelector('#image-page-after')
const imagePageLast = document.querySelector('#image-page-last')

//Form Control

searchButton.onclick = e => {
    //Prevent form from submitting and just controlling user interaction
    e.preventDefault()
    //If user didn't search anything on the form fire validationError()
    if (searchInput.value === '') {
        validationError()
    } else {
        //From a form search user will always get the first page of search engine results
        webStartIndex = 1
        imageStartIndex = 1

        //Two calls will be made one for web and one for image results for the same form search value
        runWebQuery(searchInput.value)
        runImageQuery(searchInput.value)

        //Search header will display what the user searched for
        searchHeader.innerText = `Results for ${searchInput.value}`

        //Search value is stored for pagination control to rerun the query for web or image results independently
        searchValue = searchInput.value
    
        //Form will be reset for future searches
        searchInput.value = ''
        searchInput.setAttribute('placeholder', 'Search something!')
        searchInput.blur()

    }
}

//Form Validation Error

const validationError = error => {
    //If script passes an API error, user will informed that the service is unavailable.
    if(error !== undefined) {
        searchInput.setAttribute('placeholder', 'Service unavailable, please try later!')
        searchInput.classList = 'search-input search-input-active search-input-validation'
        searchField.classList = 'search-field search-field-active search-field-validation'
    //If script passes no API error, user didn't search anything on the form preventing empty value API calls.
    } else {
        searchInput.setAttribute('placeholder', 'Oopsie Doopsie!')
        searchInput.classList = 'search-input search-input-active search-input-validation'
        searchField.classList = 'search-field search-field-active search-field-validation'
    }
}

//Mock Data for Testing and Design

const mockTextData = {
    "kind": "customsearch#search",
    "url": {
        "type": "application/json",
        "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
    },
    "queries": {
        "request": [
            {
                "title": "Google Custom Search - 24i",
                "totalResults": "2750000",
                "searchTerms": "24i",
                "count": 10,
                "startIndex": 1,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "b61a304a101de452d"
            }
        ],
        "nextPage": [
            {
                "title": "Google Custom Search - 24i",
                "totalResults": "2750000",
                "searchTerms": "24i",
                "count": 10,
                "startIndex": 11,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "b61a304a101de452d"
            }
        ]
    },
    "context": {
        "title": "ekqt-search"
    },
    "searchInformation": {
        "searchTime": 0.410792,
        "formattedSearchTime": "0.41",
        "totalResults": "2750000",
        "formattedTotalResults": "2,750,000"
    },
    "items": [
        {
            "kind": "customsearch#result",
            "title": "24i - Experts in End-to-End Video Streaming Solutions for Pay TV ...",
            "htmlTitle": "<b>24i</b> - Experts in End-to-End Video Streaming Solutions for Pay TV ...",
            "link": "https://www.24i.com/",
            "displayLink": "www.24i.com",
            "snippet": "24i's video streaming solutions help pay TV operators and content providers deliver great OTT video user experiences and grow their business.",
            "htmlSnippet": "<b>24i&#39;s</b> video streaming solutions help pay TV operators and content providers deliver great OTT video user experiences and grow their business.",
            "cacheId": "QXKVmTho7twJ",
            "formattedUrl": "https://www.24i.com/",
            "htmlFormattedUrl": "https://www.<b>24i</b>.com/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwfB0fhHfgeTqU9HnKmxr9UmazmKmoo8f9YyETLaeabvE5UVl7b786kg",
                        "width": "310",
                        "height": "163"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://assets.website-files.com/5fa50caef7e41c7c350a6b45/5fc563369f41725f7478b249_open_graph_image.jpg",
                        "twitter:title": "24i - Experts in End-to-End Video Streaming Solutions for Pay TV and OTT",
                        "og:type": "website",
                        "twitter:card": "summary_large_image",
                        "viewport": "width=device-width, initial-scale=1",
                        "twitter:description": "24i’s video streaming solutions help pay TV operators and content providers deliver great OTT video user experiences and grow their business. Our content preparation and application publishing solutions support SVOD, AVOD, live TV channels, EPG and nPVR for smart tvs, streaming media devices, STBs, mobiles and web.",
                        "og:title": "24i - Experts in End-to-End Video Streaming Solutions for Pay TV and OTT",
                        "pinterest": "nopin",
                        "og:description": "24i’s video streaming solutions help pay TV operators and content providers deliver great OTT video user experiences and grow their business. Our content preparation and application publishing solutions support SVOD, AVOD, live TV channels, EPG and nPVR for smart tvs, streaming media devices, STBs, mobiles and web.",
                        "twitter:image": "https://assets.website-files.com/5fa50caef7e41c7c350a6b45/5fc563369f41725f7478b249_open_graph_image.jpg"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://assets.website-files.com/5fa50caef7e41c7c350a6b45/5fc563369f41725f7478b249_open_graph_image.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "24i - Crunchbase Company Profile & Funding",
            "htmlTitle": "<b>24i</b> - Crunchbase Company Profile &amp; Funding",
            "link": "https://www.crunchbase.com/organization/24i",
            "displayLink": "www.crunchbase.com",
            "snippet": "24i is an innovative leader in TV app development.",
            "htmlSnippet": "<b>24i</b> is an innovative leader in TV app development.",
            "cacheId": "3Lqv1UJnFsMJ",
            "formattedUrl": "https://www.crunchbase.com/organization/24i",
            "htmlFormattedUrl": "https://www.crunchbase.com/organization/<b>24i</b>",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-JAl35ACJAtzTgY4hmWHp0Z2Kl8_wr0wzJ7Occ2SlWk5ej6BGrRuPF8",
                        "width": "225",
                        "height": "225"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1446637022/kbjq55e5beu9s9t4iatd.png",
                        "og:type": "website",
                        "og:image:alt": "24i",
                        "og:image:width": "256",
                        "og:site_name": "Crunchbase",
                        "viewport": "width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=no",
                        "og:title": "24i - Crunchbase Company Profile & Funding",
                        "og:image:height": "256",
                        "og:url": "https://www.crunchbase.com/organization/24i",
                        "og:description": "24i is an innovative leader in TV app development.",
                        "og:image:secure_url": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1446637022/kbjq55e5beu9s9t4iatd.png"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1446637022/kbjq55e5beu9s9t4iatd.png"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "A Decade of Experience in Video Streaming - 24i",
            "htmlTitle": "A Decade of Experience in Video Streaming - 24i",
            "link": "https://www.24i.com/about",
            "displayLink": "www.24i.com",
            "snippet": "24i was founded in 2009 by Martijn van Horssen and Hans Disch with an ambition to change the future of TV. Today, 24i spearheads the global OTT revolution ...",
            "htmlSnippet": "<b>24i</b> was founded in 2009 by Martijn van Horssen and Hans Disch with an ambition to change the future of TV. Today, <b>24i</b> spearheads the global OTT revolution&nbsp;...",
            "cacheId": "MBsvUuuMbX8J",
            "formattedUrl": "https://www.24i.com/about",
            "htmlFormattedUrl": "https://www.<b>24i</b>.com/about",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwfB0fhHfgeTqU9HnKmxr9UmazmKmoo8f9YyETLaeabvE5UVl7b786kg",
                        "width": "310",
                        "height": "163"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://assets.website-files.com/5fa50caef7e41c7c350a6b45/5fc563369f41725f7478b249_open_graph_image.jpg",
                        "twitter:title": "24i – A Decade of Experience in Video Streaming",
                        "og:type": "website",
                        "twitter:card": "summary_large_image",
                        "viewport": "width=device-width, initial-scale=1",
                        "twitter:description": "Founded in Amsterdam in 2009, 24i is now at the forefront of the global OTT revolution with a reputation for front-end TV app excellence. Our clients include Tier One telcos, broadcasters and OTT content providers. In 2019 we became part of the Amino Technologies group.",
                        "og:title": "24i – A Decade of Experience in Video Streaming",
                        "pinterest": "nopin",
                        "og:description": "Founded in Amsterdam in 2009, 24i is now at the forefront of the global OTT revolution with a reputation for front-end TV app excellence. Our clients include Tier One telcos, broadcasters and OTT content providers. In 2019 we became part of the Amino Technologies group.",
                        "twitter:image": "https://assets.website-files.com/5fa50caef7e41c7c350a6b45/5fc563369f41725f7478b249_open_graph_image.jpg"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://assets.website-files.com/5fa50caef7e41c7c350a6b45/5fc563369f41725f7478b249_open_graph_image.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Chris King ThreadFit™ T47 24i Bottom Bracket – Chris King ...",
            "htmlTitle": "Chris King ThreadFit™ T47 <b>24i</b> Bottom Bracket – Chris King ...",
            "link": "https://chrisking.com/products/bottom-bracket-threadfit-t47-24i",
            "displayLink": "chrisking.com",
            "snippet": "The ThreadFit™ T47 is available in four variants and will fit 30mm, 24mm and 24mm stepped spindles. ThreadFit™ T47 24i fits 86mm and 92mm shell widths with 24mm ...",
            "htmlSnippet": "The ThreadFit™ T47 is available in four variants and will fit 30mm, 24mm and 24mm stepped spindles. ThreadFit™ T47 <b>24i</b> fits 86mm and 92mm shell widths with 24mm&nbsp;...",
            "cacheId": "UQt1qr1RPmIJ",
            "formattedUrl": "https://chrisking.com/products/bottom-bracket-threadfit-t47-24i",
            "htmlFormattedUrl": "https://chrisking.com/products/bottom-bracket-threadfit-t47-<b>24i</b>",
            "pagemap": {
                "offer": [
                    {
                        "pricecurrency": "USD",
                        "availability": "http://schema.org/InStock"
                    },
                    {
                        "pricecurrency": "USD",
                        "availability": "http://schema.org/InStock"
                    }
                ],
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0Zha6Tr7SL5fxG5XF9BCKGUnFQyRN6nmvkMELd2CbAIa9oEe4oF8SjZvn",
                        "width": "225",
                        "height": "225"
                    }
                ],
                "product": [
                    {
                        "image": "//cdn.shopify.com/s/files/1/2920/2114/products/T4724iBlack_grande.jpg?v=1618808786",
                        "name": "ThreadFit™ T47 24i",
                        "description": "Our ThreadFit™ T47 Bottom Bracket is the solution. A silky smooth, long-lasting bottom bracket built around our angular contact bearings that wear in instead of out. ThreadFit™ T47 provides...",
                        "url": "https://chrisking.com/products/bottom-bracket-threadfit-t47-24i"
                    }
                ],
                "organization": [
                    {
                        "logo": "https://cdn.shopify.com/s/files/1/2920/2114/files/ck-primary-black-w_800x.png?v=1563835081",
                        "url": "https://chrisking.com/"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "http://cdn.shopify.com/s/files/1/2920/2114/products/T4724iBlack_grande.jpg?v=1618808786",
                        "theme-color": "#212121",
                        "og:type": "product",
                        "twitter:card": "summary",
                        "twitter:title": "ThreadFit™ T47 24i",
                        "og:site_name": "Chris King Precision Components",
                        "og:price:amount": "178.00",
                        "og:title": "ThreadFit™ T47 24i",
                        "og:price:currency": "USD",
                        "twitter:image:height": "600",
                        "og:description": "Our ThreadFit™ T47 Bottom Bracket is the solution. A silky smooth, long-lasting bottom bracket built around our angular contact bearings that wear in instead of out. ThreadFit™ T47 provides the security and reliability of a threaded bottom bracket with the stiffness and power transfer gains of a PressFit 30 bottom bracket shell.\n\n\nThe ThreadFit™ T47 is available in four variants and will fit 30mm, 24mm and 24mm stepped spindles.\nThreadFit™ T47 24i fits 86mm and 92mm shell widths with 24mm spindles.\nThe Fit Kit for our ThreadFit™ T47 24i is available here.\n\nKing Lifetime Warranty\nLegendary made-in-house bearings\nCeramic bearing upgrade available\nThreaded security with PressFit 30 shell stiffness\nEngineered, manufactured and assembled in Portland, Oregon USA\nAvailable in Matte Jet and Matte Slate\n\n\nA Fit Kit is required for use and included in the purchase price\n\nUses Chris King bottom bracket cup tool for installation",
                        "og:image:secure_url": "https://cdn.shopify.com/s/files/1/2920/2114/products/T4724iBlack_grande.jpg?v=1618808786",
                        "twitter:image": "https://cdn.shopify.com/s/files/1/2920/2114/products/T4724iBlack_grande.jpg?v=1618808786",
                        "twitter:site": "@chriskingbuzz",
                        "twitter:image:width": "600",
                        "viewport": "width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, user-scalable=0",
                        "twitter:description": "Our ThreadFit™ T47 Bottom Bracket is the solution. A silky smooth, long-lasting bottom bracket built around our angular contact bearings that wear in instead of out. ThreadFit™ T47 provides the secu",
                        "shopify-digital-wallet": "/29202114/digital_wallets/dialog",
                        "og:url": "https://chrisking.com/products/bottom-bracket-threadfit-t47-24i",
                        "checkout": "1f5cd1557e6f92a69e33d97d5c5a6b36"
                    }
                ],
                "cse_image": [
                    {
                        "src": "http://cdn.shopify.com/s/files/1/2920/2114/products/T4724iBlack_grande.jpg?v=1618808786"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "24i | LinkedIn",
            "htmlTitle": "<b>24i</b> | LinkedIn",
            "link": "https://www.linkedin.com/company/24i",
            "displayLink": "www.linkedin.com",
            "snippet": "24i | 3796 followers on LinkedIn. We navigate you through the complex world of video services. | 24i offers a fast, cost-effective route to video streaming ...",
            "htmlSnippet": "<b>24i</b> | 3796 followers on LinkedIn. We navigate you through the complex world of video services. | <b>24i</b> offers a fast, cost-effective route to video streaming&nbsp;...",
            "formattedUrl": "https://www.linkedin.com/company/24i",
            "htmlFormattedUrl": "https://www.linkedin.com/company/<b>24i</b>",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjUkWgfsHuv4Ub7q5XG3w7hSdMT5RAjAnX13HyPLBOQVuA39YrLdGcNUsD",
                        "width": "200",
                        "height": "200"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://media-exp1.licdn.com/dms/image/C4D0BAQEpFch-Uw0EBQ/company-logo_200_200/0/1565361814045?e=2159024400&v=beta&t=BkFRoyR8fTTSPtgRDktoSufVLdQ9IvFzc_snTZ0nAUI",
                        "og:type": "article",
                        "twitter:card": "summary",
                        "twitter:title": "24i | LinkedIn",
                        "al:ios:app_name": "LinkedIn",
                        "og:title": "24i | LinkedIn",
                        "al:android:package": "com.linkedin.android",
                        "pagekey": "p_org_guest_company_overview",
                        "locale": "en_US",
                        "al:ios:url": "https://www.linkedin.com/company/24i",
                        "og:description": "24i | 3,796 followers on LinkedIn. We navigate you through the complex world of video services. | 24i offers a fast, cost-effective route to video streaming success on all consumer devices. \n\nOur expertise and end-to-end solutions enable pay TV operators, broadcasters, and content providers to manage and deliver elegant OTT user experiences and grow their business. \n\n24i’s flexible products for preparing streaming content and publishing front-end applications bring SVOD, TVOD and AVOD services to life on smart TVs, streaming devices, STBs, mobiles, and web browsers.\n\n24i embodies the Dutch spirit - we work hard, innovate, and explore. Headquartered in Amsterdam, with offices in Madrid, Brno, Los Angeles, Helsinki and  Buenos Aires, 24i is a group company of Amino Technologies plc.",
                        "al:ios:app_store_id": "288429040",
                        "twitter:image": "https://media-exp1.licdn.com/dms/image/C4D0BAQEpFch-Uw0EBQ/company-logo_200_200/0/1565361814045?e=2159024400&v=beta&t=BkFRoyR8fTTSPtgRDktoSufVLdQ9IvFzc_snTZ0nAUI",
                        "al:android:url": "https://www.linkedin.com/company/24i",
                        "twitter:site": "@linkedin",
                        "viewport": "width=device-width, initial-scale=1.0",
                        "twitter:description": "24i | 3,796 followers on LinkedIn. We navigate you through the complex world of video services. | 24i offers a fast, cost-effective route to video streaming success on all consumer devices. \n\nOur expertise and end-to-end solutions enable pay TV operators, broadcasters, and content providers to manage and deliver elegant OTT user experiences and grow their business. \n\n24i’s flexible products for preparing streaming content and publishing front-end applications bring SVOD, TVOD and AVOD services to life on smart TVs, streaming devices, STBs, mobiles, and web browsers.\n\n24i embodies the Dutch spirit - we work hard, innovate, and explore. Headquartered in Amsterdam, with offices in Madrid, Brno, Los Angeles, Helsinki and  Buenos Aires, 24i is a group company of Amino Technologies plc.",
                        "og:url": "https://www.linkedin.com/company/24i",
                        "al:android:app_name": "LinkedIn"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://media-exp1.licdn.com/dms/image/C4D0BAQEpFch-Uw0EBQ/company-logo_200_200/0/1565361814045?e=2159024400&v=beta&t=BkFRoyR8fTTSPtgRDktoSufVLdQ9IvFzc_snTZ0nAUI"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Adaptec - Microsemi Adaptec SmartHBA 2100-24i",
            "htmlTitle": "Adaptec - Microsemi Adaptec SmartHBA 2100-<b>24i</b>",
            "link": "https://storage.microsemi.com/en-us/support/sas/sas/aha-2100-24i/",
            "displayLink": "storage.microsemi.com",
            "snippet": "12 Gbps PCIe Gen3 SAS/SATA SmartHBA adapter with 24 internal native ports and LP/MD2 form factor. Small Image of Microsemi Adaptec SmartHBA 2100-24i.",
            "htmlSnippet": "12 Gbps PCIe Gen3 SAS/SATA SmartHBA adapter with 24 internal native ports and LP/MD2 form factor. Small Image of Microsemi Adaptec SmartHBA 2100-<b>24i</b>.",
            "cacheId": "yaA0yRld6s8J",
            "formattedUrl": "https://storage.microsemi.com/en-us/support/sas/sas/aha-2100-24i/",
            "htmlFormattedUrl": "https://storage.microsemi.com/en-us/support/sas/sas/aha-2100-<b>24i</b>/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYctyF-hkWrt-L1pBLTfJHdT1p0y1OQ2yfy2W2Yhyj0kOoXpdBSxWz8StG",
                        "width": "250",
                        "height": "176"
                    }
                ],
                "metatags": [
                    {
                        "searchlanguage": "en-US",
                        "subject": "ProductDetail",
                        "rank": "‐3",
                        "language": "en-US",
                        "searchtitle": "Microsemi Adaptec SmartHBA 2100-24i"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://storage.microsemi.com/nr/images/smarthba_2100-24i.png"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "SAS 9305-24i Host Bus Adapter",
            "htmlTitle": "SAS 9305-<b>24i</b> Host Bus Adapter",
            "link": "https://www.broadcom.com/products/storage/host-bus-adapters/sas-9305-24i",
            "displayLink": "www.broadcom.com",
            "snippet": "The SAS 9305-24i 12Gb/s SAS Host Bus Adapter Provides Maximum Connectivity and Performance for Servers and Appliances within External Storage.",
            "htmlSnippet": "The SAS 9305-<b>24i</b> 12Gb/s SAS Host Bus Adapter Provides Maximum Connectivity and Performance for Servers and Appliances within External Storage.",
            "cacheId": "PLKQ369Qk4MJ",
            "formattedUrl": "https://www.broadcom.com/products/storage/host-bus.../sas-9305-24i",
            "htmlFormattedUrl": "https://www.broadcom.com/products/storage/host-bus.../sas-9305-<b>24i</b>",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRBwBCdgfjP7mz1fbR_nCut2PMg-XCcyD7f_rigvygjem7ndGJQoHOU3y0",
                        "width": "237",
                        "height": "213"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://www.broadcom.com/media/blt4ac44e0e6c6d8341/blt4645a915548ebd66/604f60473a21c368b92ef651/9305-24i_vertical.jpg",
                        "twitter:card": "summary",
                        "twitter:site": "@Broadcom",
                        "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
                        "og:title": "SAS 9305-24i Host Bus Adapter",
                        "og:url": "https://www.broadcom.com/products/storage/host-bus-adapters/sas-9305-24i",
                        "og:description": "The SAS 9305-24i 12Gb/s SAS Host Bus Adapter Provides Maximum Connectivity and Performance for Servers and Appliances within External Storage"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://www.broadcom.com/media/blt4ac44e0e6c6d8341/blt4645a915548ebd66/604f60473a21c368b92ef651/9305-24i_vertical.jpg"
                    }
                ],
                "listitem": [
                    {
                        "item": "Products",
                        "name": "Products",
                        "position": "1"
                    },
                    {
                        "item": "Storage Adapters, Controllers, and ICs",
                        "name": "Storage Adapters, Controllers, and ICs",
                        "position": "2"
                    },
                    {
                        "item": "SAS/SATA/NVMe Host Bus Adapters",
                        "name": "SAS/SATA/NVMe Host Bus Adapters",
                        "position": "3"
                    },
                    {
                        "name": "SAS 9305-24i Host Bus Adapter",
                        "position": "4"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Adaptec - Microsemi Adaptec HBA 1100-24i",
            "htmlTitle": "Adaptec - Microsemi Adaptec HBA 1100-<b>24i</b>",
            "link": "https://storage.microsemi.com/en-us/support/sas/sas/aha-1100-24i/",
            "displayLink": "storage.microsemi.com",
            "snippet": "12 Gbps PCIe Gen3 SAS/SATA HBA adapter with 24 internal native ports and LP/MD2 form factor. Small Image of Microsemi Adaptec HBA 1100-24i.",
            "htmlSnippet": "12 Gbps PCIe Gen3 SAS/SATA HBA adapter with 24 internal native ports and LP/MD2 form factor. Small Image of Microsemi Adaptec HBA 1100-<b>24i</b>.",
            "cacheId": "BoNx_5amKqQJ",
            "formattedUrl": "https://storage.microsemi.com/en-us/support/sas/sas/aha-1100-24i/",
            "htmlFormattedUrl": "https://storage.microsemi.com/en-us/support/sas/sas/aha-1100-<b>24i</b>/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQwQCp2bYod0ZaQ8FZS-h0byJTTkyMRFM9jlO2ivImYPu3QEHT5NScofLo",
                        "width": "250",
                        "height": "176"
                    }
                ],
                "metatags": [
                    {
                        "searchlanguage": "en-US",
                        "subject": "ProductDetail",
                        "rank": "‐3",
                        "language": "en-US",
                        "searchtitle": "Microsemi Adaptec HBA 1100-24i"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://storage.microsemi.com/nr/images/hba_1100-24i.png"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "MegaRAID SAS 9361-24i",
            "htmlTitle": "MegaRAID SAS 9361-<b>24i</b>",
            "link": "https://www.broadcom.com/products/storage/raid-controllers/megaraid-sas-9361-24i",
            "displayLink": "www.broadcom.com",
            "snippet": "The MegaRAID SAS 9361-24i 12Gb/s SAS and SATA RAID controller card addresses these needs by delivering proven performance and RAID data protection for a ...",
            "htmlSnippet": "The MegaRAID SAS 9361-<b>24i</b> 12Gb/s SAS and SATA RAID controller card addresses these needs by delivering proven performance and RAID data protection for a&nbsp;...",
            "cacheId": "C1wPatKSGPMJ",
            "formattedUrl": "https://www.broadcom.com/products/storage/raid.../megaraid-sas-9361-24i",
            "htmlFormattedUrl": "https://www.broadcom.com/products/storage/raid.../megaraid-sas-9361-<b>24i</b>",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDQf5HxoHAo-YDPEKZVlYQickhzDEHIgqKw3wUbJOlkyw-MAUEyU22ZbYr",
                        "width": "225",
                        "height": "224"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://www.broadcom.com/media/blt4ac44e0e6c6d8341/blt5d680d1e282ab37d/604f611c0c5802474c999866/9361-24i_angled.jpg",
                        "twitter:card": "summary",
                        "twitter:site": "@Broadcom",
                        "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
                        "og:title": "MegaRAID SAS 9361-24i",
                        "og:url": "https://www.broadcom.com/products/storage/raid-controllers/megaraid-sas-9361-24i",
                        "og:description": "Data center, web, cloud and high-performance computing environments not only require large amounts of storage capacity, they also must provide the data protection and performance today's applications and end users demand."
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://www.broadcom.com/media/blt4ac44e0e6c6d8341/blt5d680d1e282ab37d/604f611c0c5802474c999866/9361-24i_angled.jpg"
                    }
                ],
                "listitem": [
                    {
                        "item": "Products",
                        "name": "Products",
                        "position": "1"
                    },
                    {
                        "item": "Storage Adapters, Controllers, and ICs",
                        "name": "Storage Adapters, Controllers, and ICs",
                        "position": "2"
                    },
                    {
                        "item": "RAID Controller Cards",
                        "name": "RAID Controller Cards",
                        "position": "3"
                    },
                    {
                        "name": "MegaRAID SAS 9361-24i",
                        "position": "4"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "AUDIO SPOTLIGHT AS-24i",
            "htmlTitle": "AUDIO SPOTLIGHT AS-<b>24i</b>",
            "link": "https://www.holosonics.com/audio-spotlight-24i",
            "displayLink": "www.holosonics.com",
            "snippet": "The AS-24i is a great highly directional speaker for museums, trade shows, supermarkets, outdoor applications, and many retail environments, and it easily ...",
            "htmlSnippet": "The AS-<b>24i</b> is a great highly directional speaker for museums, trade shows, supermarkets, outdoor applications, and many retail environments, and it easily&nbsp;...",
            "cacheId": "PC8JS-6lwS0J",
            "formattedUrl": "https://www.holosonics.com/audio-spotlight-24i",
            "htmlFormattedUrl": "https://www.holosonics.com/audio-spotlight-<b>24i</b>",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSkiIhkOEb5NHsCfW-xRZ0pA0hBCnCNBAoM7cyMQpcOAThBLYE8lSvsMg",
                        "width": "361",
                        "height": "117"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "http://static1.squarespace.com/static/588bb0112994ca40865371dd/t/588bb2125016e18349e8b317/1485550098410/audiospotlight_logo.png?format=1500w",
                        "og:type": "website",
                        "og:image:width": "361",
                        "twitter:title": "AUDIO SPOTLIGHT AS-24i",
                        "twitter:card": "summary",
                        "og:site_name": "Audio Spotlight by Holosonics",
                        "twitter:url": "https://www.holosonics.com/audio-spotlight-24i",
                        "og:title": "AUDIO SPOTLIGHT AS-24i",
                        "og:image:height": "117",
                        "og:description": "Our larger Audio Spotlight AS-24i offers the strongest output and deepest low frequency response of all models.",
                        "twitter:image": "http://static1.squarespace.com/static/588bb0112994ca40865371dd/t/588bb2125016e18349e8b317/1485550098410/audiospotlight_logo.png?format=1500w",
                        "viewport": "initial-scale=1",
                        "twitter:description": "Our larger Audio Spotlight AS-24i offers the strongest output and deepest low frequency response of all models.",
                        "og:url": "https://www.holosonics.com/audio-spotlight-24i"
                    }
                ],
                "cse_image": [
                    {
                        "src": "http://static1.squarespace.com/static/588bb0112994ca40865371dd/t/588bb2125016e18349e8b317/1485550098410/audiospotlight_logo.png?format=1500w"
                    }
                ]
            }
        }
    ]
}

const mockImageData = {
    "kind": "customsearch#search",
    "url": {
        "type": "application/json",
        "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
    },
    "queries": {
        "request": [
            {
                "title": "Google Custom Search - 24i",
                "totalResults": "6170000",
                "searchTerms": "24i",
                "count": 10,
                "startIndex": 1,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "b61a304a101de452d",
                "searchType": "image"
            }
        ],
        "nextPage": [
            {
                "title": "Google Custom Search - 24i",
                "totalResults": "6170000",
                "searchTerms": "24i",
                "count": 10,
                "startIndex": 11,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "b61a304a101de452d",
                "searchType": "image"
            }
        ]
    },
    "context": {
        "title": "ekqt-search"
    },
    "searchInformation": {
        "searchTime": 0.31301,
        "formattedSearchTime": "0.31",
        "totalResults": "6170000",
        "formattedTotalResults": "6,170,000"
    },
    "items": [
        {
            "kind": "customsearch#result",
            "title": "24i - Experts in End-to-End Video Streaming Solutions for Pay TV ...",
            "htmlTitle": "<b>24i</b> - Experts in End-to-End Video Streaming Solutions for Pay TV ...",
            "link": "https://assets.website-files.com/5fa50caef7e41c7c350a6b45/5fc563369f41725f7478b249_open_graph_image.jpg",
            "displayLink": "www.24i.com",
            "snippet": "24i - Experts in End-to-End Video Streaming Solutions for Pay TV ...",
            "htmlSnippet": "<b>24i</b> - Experts in End-to-End Video Streaming Solutions for Pay TV ...",
            "mime": "image/jpeg",
            "fileFormat": "image/jpeg",
            "image": {
                "contextLink": "https://www.24i.com/",
                "height": 630,
                "width": 1200,
                "byteSize": 31339,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatRblzUjwnOI7-fnWXRo-SzuhJmONQgiak7ysmOZMYW0qF63-v1g5&s",
                "thumbnailHeight": 79,
                "thumbnailWidth": 150
            }
        },
        {
            "kind": "customsearch#result",
            "title": "24i - Home | Facebook",
            "htmlTitle": "<b>24i</b> - Home | Facebook",
            "link": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=339678246056596",
            "displayLink": "www.facebook.com",
            "snippet": "24i - Home | Facebook",
            "htmlSnippet": "<b>24i</b> - Home | Facebook",
            "mime": "image/",
            "fileFormat": "image/",
            "image": {
                "contextLink": "https://www.facebook.com/twentyfouri/",
                "height": 960,
                "width": 960,
                "byteSize": 17786,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBiL0uA4K7oo6I2uAaFPEdgX_6-pPDXhgltBjbBV7VnPwcei-MeZNI9eE&s",
                "thumbnailHeight": 148,
                "thumbnailWidth": 148
            }
        },
        {
            "kind": "customsearch#result",
            "title": "24i | LinkedIn",
            "htmlTitle": "<b>24i</b> | LinkedIn",
            "link": "https://media-exp1.licdn.com/dms/image/C4D0BAQEpFch-Uw0EBQ/company-logo_200_200/0/1565361814045?e=2159024400&v=beta&t=BkFRoyR8fTTSPtgRDktoSufVLdQ9IvFzc_snTZ0nAUI",
            "displayLink": "www.linkedin.com",
            "snippet": "24i | LinkedIn",
            "htmlSnippet": "<b>24i</b> | LinkedIn",
            "mime": "image/",
            "fileFormat": "image/",
            "image": {
                "contextLink": "https://www.linkedin.com/company/24i",
                "height": 200,
                "width": 200,
                "byteSize": 3747,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pf7zac80lTbl_fSWejyUgdz9i244Cc8NAckFSrWedg2FTPBzMyrtNw&s",
                "thumbnailHeight": 104,
                "thumbnailWidth": 104
            }
        },
        {
            "kind": "customsearch#result",
            "title": "24i - Experts in End-to-End Video Streaming Solutions for Pay TV ...",
            "htmlTitle": "<b>24i</b> - Experts in End-to-End Video Streaming Solutions for Pay TV ...",
            "link": "https://assets.website-files.com/5fa50caef7e41c7c350a6b45/5fc2e489efab269b9dd1e85a_TV_start_peacock.png",
            "displayLink": "www.24i.com",
            "snippet": "24i - Experts in End-to-End Video Streaming Solutions for Pay TV ...",
            "htmlSnippet": "<b>24i</b> - Experts in End-to-End Video Streaming Solutions for Pay TV ...",
            "mime": "image/png",
            "fileFormat": "image/png",
            "image": {
                "contextLink": "https://www.24i.com/",
                "height": 1244,
                "width": 1920,
                "byteSize": 846388,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWbTrPYP_rggl-WAv3GFuRdCVIP2R968a688GAXANhdqEK7L7Yid3yGU&s",
                "thumbnailHeight": 97,
                "thumbnailWidth": 150
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Verizon Media selects 24i's Smart OTT and Backstage",
            "htmlTitle": "Verizon Media selects <b>24i&#39;s</b> Smart OTT and Backstage",
            "link": "https://i0.wp.com/www.broadbandtvnews.com/wp-content/uploads/2019/07/24i.png?fit=714%2C436&ssl=1",
            "displayLink": "www.broadbandtvnews.com",
            "snippet": "Verizon Media selects 24i's Smart OTT and Backstage",
            "htmlSnippet": "Verizon Media selects <b>24i&#39;s</b> Smart OTT and Backstage",
            "mime": "image/png",
            "fileFormat": "image/png",
            "image": {
                "contextLink": "https://www.broadbandtvnews.com/2020/11/24/verizon-media-selects-24is-smart-ott-and-backstage/",
                "height": 436,
                "width": 714,
                "byteSize": 19585,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh83wLo01sZW1eboLWy-MX-nACzq-lcBPNjjH7Ij3MEzijA27WWdvrqOM&s",
                "thumbnailHeight": 85,
                "thumbnailWidth": 140
            }
        },
        {
            "kind": "customsearch#result",
            "title": "24i - Experts in End-to-End Video Streaming Solutions for Pay TV ...",
            "htmlTitle": "<b>24i</b> - Experts in End-to-End Video Streaming Solutions for Pay TV ...",
            "link": "https://assets.website-files.com/5fa50caef7e41c7c350a6b45/5fc2e418055023243e50c5ff_home_style_1%402x.jpg",
            "displayLink": "www.24i.com",
            "snippet": "24i - Experts in End-to-End Video Streaming Solutions for Pay TV ...",
            "htmlSnippet": "<b>24i</b> - Experts in End-to-End Video Streaming Solutions for Pay TV ...",
            "mime": "image/jpeg",
            "fileFormat": "image/jpeg",
            "image": {
                "contextLink": "https://www.24i.com/",
                "height": 1900,
                "width": 3394,
                "byteSize": 369104,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSmF1vzbCVwF_U0b5ZaQ3a_ZLKpHO84kjglfcSmJGkX-iww4sV6y9nwQ&s",
                "thumbnailHeight": 84,
                "thumbnailWidth": 150
            }
        },
        {
            "kind": "customsearch#result",
            "title": "24i - Home | Facebook",
            "htmlTitle": "<b>24i</b> - Home | Facebook",
            "link": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=3610655698958818",
            "displayLink": "www.facebook.com",
            "snippet": "24i - Home | Facebook",
            "htmlSnippet": "<b>24i</b> - Home | Facebook",
            "mime": "image/",
            "fileFormat": "image/",
            "image": {
                "contextLink": "https://www.facebook.com/twentyfouri/",
                "height": 720,
                "width": 1640,
                "byteSize": 84711,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopgUCWht8wLDsg15UWXbJ84BxeDSLSTxpmNPTdtxd9qhZqI3q-qvc1wg&s",
                "thumbnailHeight": 66,
                "thumbnailWidth": 150
            }
        },
        {
            "kind": "customsearch#result",
            "title": "24i acquires Vigour to accelerate innovation and growth in OTT ...",
            "htmlTitle": "<b>24i</b> acquires Vigour to accelerate innovation and growth in OTT ...",
            "link": "https://www.realwire.com/twitter_writeitfiles/24i-logo.jpg",
            "displayLink": "www.realwire.com",
            "snippet": "24i acquires Vigour to accelerate innovation and growth in OTT ...",
            "htmlSnippet": "<b>24i</b> acquires Vigour to accelerate innovation and growth in OTT ...",
            "mime": "image/jpeg",
            "fileFormat": "image/jpeg",
            "image": {
                "contextLink": "https://www.realwire.com/releases/24i-acquires-Vigour-to-accelerate-innovation-and-growth-in-OTT-solutions",
                "height": 315,
                "width": 600,
                "byteSize": 13279,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAsClp5vM4m3UX-bZD1SsiAaVdAZFHxKh3Yw0VXe02qRE2uIP3tMTV5Iw&s",
                "thumbnailHeight": 71,
                "thumbnailWidth": 135
            }
        },
        {
            "kind": "customsearch#result",
            "title": "24i Media CZ - Home | Facebook",
            "htmlTitle": "<b>24i</b> Media CZ - Home | Facebook",
            "link": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=246089445444232",
            "displayLink": "www.facebook.com",
            "snippet": "24i Media CZ - Home | Facebook",
            "htmlSnippet": "<b>24i</b> Media CZ - Home | Facebook",
            "mime": "image/",
            "fileFormat": "image/",
            "image": {
                "contextLink": "https://www.facebook.com/24iMediaCZ/",
                "height": 1167,
                "width": 1167,
                "byteSize": 30978,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwXqMlRQCJxfwpqHmTLSyLMLXGNFODRGo7Y6B-uikSoRDukMLBMCsrBQ2&s",
                "thumbnailHeight": 150,
                "thumbnailWidth": 150
            }
        },
        {
            "kind": "customsearch#result",
            "title": "24i Media CZ s.r.o. | StartupJobs.cz",
            "htmlTitle": "<b>24i</b> Media CZ s.r.o. | StartupJobs.cz",
            "link": "https://www.startupjobs.cz/uploads/4GVP2QBR3LV324i-logo-high-resolution148354638175.png",
            "displayLink": "www.startupjobs.cz",
            "snippet": "24i Media CZ s.r.o. | StartupJobs.cz",
            "htmlSnippet": "<b>24i</b> Media CZ s.r.o. | StartupJobs.cz",
            "mime": "image/png",
            "fileFormat": "image/png",
            "image": {
                "contextLink": "https://www.startupjobs.cz/en/startup/24i-media-cz-s-r-o",
                "height": 425,
                "width": 980,
                "byteSize": 104257,
                "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGT5DqBhpkJSg9egrkYcyubgvGUajCS457MXNL5l0a0lxAMeGal73NOZw&s",
                "thumbnailHeight": 65,
                "thumbnailWidth": 149
            }
        }
    ]
}

//Google Programmable Search Engine API's Parameters

const APIKey = 'AIzaSyBF4jbaRfJKYf1sYX9yyVZVzxcZciM9Gz0'
const searchEngineId = 'b61a304a101de452d'
let webStartIndex = 1
let imageStartIndex = 1
let searchValue = ''

//Google PSE Fetch Functions

const runWebQuery = async searchQuery => {
    try {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${APIKey}&cx=${searchEngineId}&q=${searchQuery}&start=${webStartIndex}`)
        const data = await response.json()
        searchSuccess()
        renderWebResults()
        console.log(data)
        data.items.map(result => web(result))
        webPanelInformation.innerText = `Found ${data.searchInformation.formattedTotalResults} results in ${data.searchInformation.formattedSearchTime} seconds.`
    } catch (error) {
        console.log('Error has been found!')
        validationError(error)
        return error
    }

    //***Can enable code below to run mock data for testing and design***
    // searchSuccess()
    // renderWebResults()
    // mockTextData.items.map(result => web(result))
    // webPanelInformation.innerText = `Found ${mockTextData.searchInformation.formattedTotalResults} results in ${mockTextData.searchInformation.formattedSearchTime} seconds.`
}

const runImageQuery = async searchQuery => {
    try {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${APIKey}&cx=${searchEngineId}&searchType=image&q=${searchQuery}&start=${imageStartIndex}`)
        const data = await response.json()
        searchSuccess()
        renderImageResults()
        console.log(data)
        data.items.map(result => image(result))
        imagePanelInformation.innerText = `Found ${data.searchInformation.formattedTotalResults} results in ${data.searchInformation.formattedSearchTime} seconds.`
    } catch (error) {
        console.log('Error has been found!')
        validationError(error)
        return error
    }

    //***Can enable code below to run mock data for testing and design***
    // searchSuccess()
    // renderImageResults()
    // mockImageData.items.map(result => image(result))
    // imagePanelInformation.innerText = `Found ${mockImageData.searchInformation.formattedTotalResults} results in ${mockImageData.searchInformation.formattedSearchTime} seconds.`
}

//Search success styling function

const searchSuccess = () => {
    //If API call promise is fullfiled, script will display the main results panel with API response
    search.classList = ''
    form.classList = ''
    main.style.display = 'flex'
}

//Rendered Components

const renderWebResults = () => {
    //Checks if there is any existing element to remove and re-render a new element for future searches
    document.querySelector('#web-results') !== null && document.querySelector('#web-results').remove()
    //Creates an element, sets attributes, appends and styles in desired location
    const webResults = document.createElement('div')
    webResults.setAttribute('id', 'web-results')
    leftPanel.insertBefore(webResults, webPagination)
    webPagination.style.display = 'flex'
    webPanelTitle.style.display = 'flex'
    webPanelInformation.style.display = 'flex'
    //Renders pagination for results
    renderWebPagination()
}

const renderImageResults = () => {
    //Checks if there is any existing element to remove and re-render a new element for future searches
    document.querySelector('#image-results') !== null && document.querySelector('#image-results').remove()
    //Creates an element, sets attributes, appends and styles in desired location
    const imageResults = document.createElement('div')
    imageResults.setAttribute('id', 'image-results')
    rightPanel.insertBefore(imageResults, imagePagination)
    imagePagination.style.display = 'flex'
    imagePanelTitle.style.display = 'flex'
    imagePanelInformation.style.display = 'flex'
    //Renders pagination for results
    renderImagePagination()
}

const web = result => {
    //Creates and appends all of the required items for a given result
    const formattedUrl = document.createElement('a')
    formattedUrl.classList.add('formatted-url')
    formattedUrl.innerText = result.formattedUrl
    formattedUrl.href = result.formattedUrl

    const title = document.createElement('a')
    title.classList.add('title')
    title.innerText = result.title
    title.href = result.formattedUrl

    const snippet = document.createElement('p')
    snippet.classList.add('snippet')
    snippet.innerText = result.snippet

    const card = document.createElement('div')
    card.classList.add('card')

    card.append(formattedUrl)
    card.append(title)
    card.append(snippet)
    document.querySelector('#web-results').append(card)
}

const image = result => {
    //Creates and appends all of the required items for a given result
    const imageLink = document.createElement('a')
    imageLink.href = result.link

    const imageResult = document.createElement('img')
    imageResult.classList.add('image-result')
    imageResult.src = result.link

    const imageTitle = document.createElement('a')
    imageTitle.classList.add('image-title')
    imageTitle.innerText = result.title
    imageTitle.href = result.image.contextLink

    const displayLink = document.createElement('a')
    displayLink.classList.add('display-link')
    displayLink.innerText = result.displayLink
    displayLink.href = result.image.contextLink

    const card = document.createElement('div')
    card.classList.add('card')

    imageLink.append(imageResult)
    card.append(imageLink)
    card.append(imageTitle)
    card.append(displayLink)
    document.querySelector('#image-results').append(card)
}

const renderWebPagination = () => {
    //Checks pagination current state and renders itself for user interfaction
    if (webStartIndex === 1) {
        webPageFirst.style.display = 'none'
        webPageBefore.style.display = 'none'
        webPageCurrent.innerText = webStartIndex
        webPageAfter.innerText = webStartIndex + 1
        webPageAfter.style.display = 'flex'
        webPageLast.style.display = 'flex'
    } else if (webStartIndex === 10) {
        webPageFirst.style.display = 'flex'
        webPageBefore.style.display = 'flex'
        webPageBefore.innerText = webStartIndex - 1
        webPageCurrent.innerText = webStartIndex
        webPageAfter.style.display = 'none'
        webPageLast.style.display = 'none'
    } else {
        webPageFirst.style.display = 'flex'
        webPageBefore.style.display = 'flex'
        webPageBefore.innerText = webStartIndex - 1
        webPageCurrent.innerText = webStartIndex
        webPageAfter.innerText = webStartIndex + 1
        webPageAfter.style.display = 'flex'
        webPageLast.style.display = 'flex'
    }
}

const renderImagePagination = () => {
    //Checks pagination current state and renders itself for user interfaction
    if (imageStartIndex === 1) {
        imagePageFirst.style.display = 'none'
        imagePageBefore.style.display = 'none'
        imagePageCurrent.innerText = imageStartIndex
        imagePageAfter.innerText = imageStartIndex + 1
        imagePageAfter.style.display = 'flex'
        imagePageLast.style.display = 'flex'
    } else if (imageStartIndex === 10) {
        imagePageFirst.style.display = 'flex'
        imagePageBefore.style.display = 'flex'
        imagePageBefore.innerText = imageStartIndex - 1
        imagePageCurrent.innerText = imageStartIndex
        imagePageAfter.style.display = 'none'
        imagePageLast.style.display = 'none'
    } else {
        imagePageFirst.style.display = 'flex'
        imagePageBefore.style.display = 'flex'
        imagePageBefore.innerText = imageStartIndex - 1
        imagePageCurrent.innerText = imageStartIndex
        imagePageAfter.innerText = imageStartIndex + 1
        imagePageAfter.style.display = 'flex'
        imagePageLast.style.display = 'flex'
    }
}


//Form Event Listeners for Validation

searchInput.addEventListener('input', () => {
    searchInput.setAttribute('placeholder', 'Search something!')
    searchField.classList = 'search-field search-field-active'
    searchInput.classList = 'search-input search-input-active'
})

searchInput.addEventListener('focus', () => {
    searchField.classList = 'search-field search-field-active'
    searchInput.classList = 'search-input search-input-active'
})

searchInput.addEventListener('blur', () => {
    searchInput.setAttribute('placeholder', 'Search something!')
    searchField.classList = 'search-field'
    searchInput.classList = 'search-input'
})

//Pagination Controls

webPageFirst.onclick = () => {
    webStartIndex = 1
    renderWebResults()
    renderWebPagination()
    runWebQuery(searchValue)
}

webPageBefore.onclick = () => {
    webStartIndex -= 1
    renderWebResults()
    renderWebPagination()
    runWebQuery(searchValue)
}

webPageAfter.onclick = () => {
    webStartIndex += 1
    renderWebResults()
    renderWebPagination()
    runWebQuery(searchValue)
}

webPageLast.onclick = () => {
    webStartIndex = 10
    renderWebResults()
    renderWebPagination()
    runWebQuery(searchValue)
}

imagePageFirst.onclick = () => {
    imageStartIndex = 1
    renderImageResults()
    renderImagePagination()
    runImageQuery(searchValue)
}

imagePageBefore.onclick = () => {
    imageStartIndex -= 1
    renderImageResults()
    renderImagePagination()
    runImageQuery(searchValue)
}

imagePageAfter.onclick = () => {
    imageStartIndex += 1
    renderImageResults()
    renderImagePagination()
    runImageQuery(searchValue)
}

imagePageLast.onclick = () => {
    imageStartIndex = 10
    renderImageResults()
    renderImagePagination()
    runImageQuery(searchValue)
}


