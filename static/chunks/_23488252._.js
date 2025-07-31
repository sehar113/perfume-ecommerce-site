(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/products.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getProductById": (()=>getProductById),
    "getProductBySlug": (()=>getProductBySlug),
    "getProducts": (()=>getProducts)
});
const products = [
    {
        id: 1,
        name: 'Midnight Bloom',
        slug: 'midnight-bloom',
        description: 'An enigmatic and alluring fragrance that captures the essence of a moonlit garden. Perfect for evening wear.',
        price: 180,
        image: 'https://saeedghani.pk/cdn/shop/files/OudAlShams_300x.jpg?v=1750943020',
        category: 'Women',
        scentFamily: 'Floral',
        notes: {
            top: [
                'Jasmine',
                'Tuberose'
            ],
            middle: [
                'Ylang-Ylang',
                'Orange Blossom'
            ],
            base: [
                'Sandalwood',
                'Musk'
            ]
        },
        rating: 4.8,
        reviewCount: 124,
        reviews: [
            {
                id: '1',
                author: 'Eleanor',
                rating: 5,
                title: 'Absolutely Captivating!',
                comment: 'This is my new signature scent. It\'s dark, mysterious, and so elegant. I get compliments every time I wear it.',
                date: '2023-10-15'
            },
            {
                id: '2',
                author: 'Mark',
                rating: 4,
                title: 'A beautiful floral',
                comment: 'Bought this for my wife and she loves it. It\'s a very sophisticated and long-lasting floral fragrance.',
                date: '2023-09-22'
            }
        ]
    },
    {
        id: 2,
        name: 'Citrus Dawn',
        slug: 'citrus-dawn',
        description: 'A vibrant and refreshing scent that evokes the feeling of a sun-drenched morning in an orchard.',
        price: 150,
        image: 'https://saeedghani.pk/cdn/shop/files/Gush-Rush_300x.jpg?v=1750943026',
        category: 'Unisex',
        scentFamily: 'Fresh',
        notes: {
            top: [
                'Bergamot',
                'Grapefruit'
            ],
            middle: [
                'Neroli',
                'Petitgrain'
            ],
            base: [
                'Vetiver',
                'Amber'
            ]
        },
        rating: 4.6,
        reviewCount: 98,
        reviews: [
            {
                id: '1',
                author: 'Sophia',
                rating: 5,
                title: 'Perfect for summer!',
                comment: 'So fresh and uplifting! It\'s like sunshine in a bottle. My go-to for warm weather.',
                date: '2023-08-05'
            }
        ]
    },
    {
        id: 3,
        name: 'Oud Mystique',
        slug: 'oud-mystique',
        description: 'A rich and opulent fragrance featuring rare oud wood, balanced with warm spices and precious resins.',
        price: 250,
        image: 'https://saeedghani.pk/cdn/shop/files/Sultan_300x.jpg?v=1750943031',
        category: 'Men',
        scentFamily: 'Woody',
        notes: {
            top: [
                'Saffron',
                'Cardamom'
            ],
            middle: [
                'Oud',
                'Rose'
            ],
            base: [
                'Amber',
                'Patchouli',
                'Vanilla'
            ]
        },
        rating: 4.9,
        reviewCount: 210,
        reviews: [
            {
                id: '1',
                author: 'James',
                rating: 5,
                title: 'Masterpiece!',
                comment: 'The best oud fragrance I have ever smelled. It\'s powerful, complex, and incredibly luxurious. Worth every penny.',
                date: '2023-11-01'
            }
        ]
    },
    {
        id: 4,
        name: 'Velvet Amber',
        slug: 'velvet-amber',
        description: 'A warm, sensual, and comforting scent that wraps you in a soft blanket of amber and vanilla.',
        price: 190,
        image: 'https://saeedghani.pk/cdn/shop/files/Gush-Rush_300x.jpg?v=1750943026',
        category: 'Unisex',
        scentFamily: 'Oriental',
        notes: {
            top: [
                'Pink Pepper',
                'Bergamot'
            ],
            middle: [
                'Labdanum',
                'Cinnamon'
            ],
            base: [
                'Amber',
                'Tonka Bean',
                'Benzoin'
            ]
        },
        rating: 4.7,
        reviewCount: 155,
        reviews: []
    },
    {
        id: 5,
        name: 'Aqua Marine',
        slug: 'aqua-marine',
        description: 'A crisp and invigorating aquatic fragrance that captures the essence of a cool sea breeze on a summer day.',
        price: 160,
        image: 'https://saeedghani.pk/cdn/shop/files/imagination2_300x.jpg?v=1750943036',
        category: 'Men',
        scentFamily: 'Fresh',
        notes: {
            top: [
                'Sea Salt',
                'Mint'
            ],
            middle: [
                'Lavender',
                'Geranium'
            ],
            base: [
                'Driftwood',
                'White Musk'
            ]
        },
        rating: 4.5,
        reviewCount: 88,
        reviews: []
    },
    {
        id: 6,
        name: 'Rose Élégance',
        slug: 'rose-elegance',
        description: 'A modern and sophisticated take on a classic rose perfume, blending fresh rose petals with a hint of spice.',
        price: 200,
        image: 'https://saeedghani.pk/cdn/shop/files/Dark2_300x.jpg?v=1750943050',
        category: 'Women',
        scentFamily: 'Floral',
        notes: {
            top: [
                'Lychee',
                'Peony'
            ],
            middle: [
                'Rose de Mai',
                'Magnolia'
            ],
            base: [
                'Cedarwood',
                'Honey'
            ]
        },
        rating: 4.8,
        reviewCount: 132,
        reviews: []
    },
    {
        id: 7,
        name: 'Smoked Leather',
        slug: 'smoked-leather',
        description: 'A bold and confident fragrance with dominant notes of leather and smoke, reminiscent of a vintage library.',
        price: 220,
        image: 'https://saeedghani.pk/cdn/shop/files/212-men2_300x.jpg?v=1750943055',
        category: 'Men',
        scentFamily: 'Woody',
        notes: {
            top: [
                'Birch Tar',
                'Black Pepper'
            ],
            middle: [
                'Leather',
                'Juniper'
            ],
            base: [
                'Cade Oil',
                'Vanilla',
                'Sandalwood'
            ]
        },
        rating: 4.9,
        reviewCount: 180,
        reviews: []
    },
    {
        id: 8,
        name: 'Orchid Noir',
        slug: 'orchid-noir',
        description: 'A mysterious and seductive oriental fragrance, centered around the exotic black orchid.',
        price: 210,
        image: 'https://saeedghani.pk/cdn/shop/files/Dark2_300x.jpg?v=1750943050',
        category: 'Women',
        scentFamily: 'Oriental',
        notes: {
            top: [
                'Black Truffle',
                'Plum'
            ],
            middle: [
                'Black Orchid',
                'Spice'
            ],
            base: [
                'Patchouli',
                'Dark Chocolate',
                'Incense'
            ]
        },
        rating: 4.7,
        reviewCount: 165,
        reviews: []
    },
    {
        id: 9,
        name: 'Solar Flare',
        slug: 'solar-flare',
        description: 'A radiant burst of citrus and white florals, capturing the warmth of the sun.',
        price: 175,
        image: 'https://saeedghani.pk/cdn/shop/files/Cool-Water-new-box_300x.jpg?v=1750943054',
        category: 'Unisex',
        scentFamily: 'Fresh',
        notes: {
            top: [
                'Mandarin',
                'Lemon'
            ],
            middle: [
                'Neroli',
                'Jasmine'
            ],
            base: [
                'Amber',
                'Musk'
            ]
        },
        rating: 4.6,
        reviewCount: 112,
        reviews: []
    },
    {
        id: 10,
        name: 'Emerald Woods',
        slug: 'emerald-woods',
        description: 'A deep, green fragrance reminiscent of a dense forest after rain.',
        price: 195,
        image: 'https://saeedghani.pk/cdn/shop/files/cigar_300x.jpg?v=1750943040',
        category: 'Men',
        scentFamily: 'Woody',
        notes: {
            top: [
                'Galbanum',
                'Pine'
            ],
            middle: [
                'Cedarwood',
                'Moss'
            ],
            base: [
                'Vetiver',
                'Patchouli'
            ]
        },
        rating: 4.8,
        reviewCount: 95,
        reviews: []
    },
    {
        id: 11,
        name: 'Peony Blush',
        slug: 'peony-blush',
        description: 'A delicate and romantic floral scent, soft as a blush on a cheek.',
        price: 165,
        image: 'https://saeedghani.pk/cdn/shop/files/Temptation_300x.jpg?v=1750943041',
        category: 'Women',
        scentFamily: 'Floral',
        notes: {
            top: [
                'Red Apple',
                'Peony'
            ],
            middle: [
                'Rose',
                'Jasmine'
            ],
            base: [
                'Suede',
                'Musk'
            ]
        },
        rating: 4.7,
        reviewCount: 140,
        reviews: []
    },
    {
        id: 12,
        name: 'Spice Bazaar',
        slug: 'spice-bazaar',
        description: 'An exotic and warm journey through a bustling spice market.',
        price: 230,
        image: 'https://saeedghani.pk/cdn/shop/files/Attar-2_24188ef1-0c05-47d0-8e16-5c3a26c0de57_300x.jpg?v=1750942879',
        category: 'Unisex',
        scentFamily: 'Oriental',
        notes: {
            top: [
                'Cinnamon',
                'Clove'
            ],
            middle: [
                'Nutmeg',
                'Ginger'
            ],
            base: [
                'Vanilla',
                'Tonka Bean'
            ]
        },
        rating: 4.9,
        reviewCount: 201,
        reviews: []
    },
    {
        id: 13,
        name: 'Azure Coast',
        slug: 'azure-coast',
        description: 'A refreshing aquatic scent that transports you to the Mediterranean seaside.',
        price: 155,
        image: 'https://saeedghani.pk/cdn/shop/files/signature_300x.jpg?v=1750943042',
        category: 'Unisex',
        scentFamily: 'Fresh',
        notes: {
            top: [
                'Sea Water',
                'Cypress'
            ],
            middle: [
                'Fig',
                'Lavender'
            ],
            base: [
                'Ambergris',
                'Driftwood'
            ]
        },
        rating: 4.6,
        reviewCount: 105,
        reviews: []
    },
    {
        id: 14,
        name: 'Crimson Oud',
        slug: 'crimson-oud',
        description: 'A passionate and intense fragrance combining the richness of oud with juicy red fruits.',
        price: 260,
        image: 'https://saeedghani.pk/cdn/shop/files/FinalAttarImage_300x.jpg?v=1750942831',
        category: 'Unisex',
        scentFamily: 'Woody',
        notes: {
            top: [
                'Raspberry',
                'Saffron'
            ],
            middle: [
                'Oud',
                'Rose'
            ],
            base: [
                'Leather',
                'Amberwood'
            ]
        },
        rating: 4.9,
        reviewCount: 189,
        reviews: []
    },
    {
        id: 15,
        name: 'Gardenia Veil',
        slug: 'gardenia-veil',
        description: 'A creamy, intoxicating white floral fragrance that is both elegant and timeless.',
        price: 185,
        image: 'https://saeedghani.pk/cdn/shop/files/fantasy_300x.jpg?v=1750943039',
        category: 'Women',
        scentFamily: 'Floral',
        notes: {
            top: [
                'Green Leaves',
                'Pear'
            ],
            middle: [
                'Gardenia',
                'Tuberose'
            ],
            base: [
                'Sandalwood',
                'Musk'
            ]
        },
        rating: 4.8,
        reviewCount: 120,
        reviews: []
    },
    {
        id: 16,
        name: 'Golden Sahara',
        slug: 'golden-sahara',
        description: 'A warm, resinous scent that evokes the heat of desert sands at sunset.',
        price: 215,
        image: 'https://saeedghani.pk/cdn/shop/files/Desire_300x.jpg?v=1750943028',
        category: 'Unisex',
        scentFamily: 'Oriental',
        notes: {
            top: [
                'Incense',
                'Myrrh'
            ],
            middle: [
                'Labdanum',
                'Benzoin'
            ],
            base: [
                'Amber',
                'Vanilla'
            ]
        },
        rating: 4.7,
        reviewCount: 143,
        reviews: []
    },
    {
        id: 17,
        name: 'Silver Birch',
        slug: 'silver-birch',
        description: 'A crisp, clean, and modern woody scent with a cool, metallic edge.',
        price: 190,
        image: 'https://saeedghani.pk/cdn/shop/files/Untitled-1_1_300x.jpg?v=1750943025',
        category: 'Men',
        scentFamily: 'Woody',
        notes: {
            top: [
                'Bergamot',
                'Cardamom'
            ],
            middle: [
                'Birch',
                'Lavender'
            ],
            base: [
                'Vetiver',
                'Musk'
            ]
        },
        rating: 4.6,
        reviewCount: 110,
        reviews: []
    },
    {
        id: 18,
        name: 'Vanilla Sky',
        slug: 'vanilla-sky',
        description: 'A dreamy and comforting gourmand fragrance with a sophisticated, airy vanilla.',
        price: 170,
        image: 'https://saeedghani.pk/cdn/shop/files/Untitled-1_1_300x.jpg?v=1750943025',
        category: 'Unisex',
        scentFamily: 'Oriental',
        notes: {
            top: [
                'Milk',
                'Sugar'
            ],
            middle: [
                'Vanilla Orchid',
                'Heliotrope'
            ],
            base: [
                'Bourbon Vanilla',
                'Sandalwood'
            ]
        },
        rating: 4.8,
        reviewCount: 198,
        reviews: []
    },
    {
        id: 19,
        name: 'Fico di Amalfi',
        slug: 'fico-di-amalfi',
        description: 'A vibrant scent capturing the essence of Italian fig groves.',
        price: 168,
        image: 'https://saeedghani.pk/cdn/shop/files/Sultan_300x.jpg?v=1750943031',
        category: 'Unisex',
        scentFamily: 'Fresh',
        notes: {
            top: [
                'Fig Nectar',
                'Bergamot'
            ],
            middle: [
                'Fig Leaf',
                'Jasmine'
            ],
            base: [
                'Cedarwood',
                'Musk'
            ]
        },
        rating: 4.7,
        reviewCount: 135,
        reviews: []
    },
    {
        id: 20,
        name: 'Black Vetiver',
        slug: 'black-vetiver',
        description: 'A dark, earthy, and smoky vetiver fragrance for the confident individual.',
        price: 205,
        image: 'https://saeedghani.pk/cdn/shop/files/Fate_50ml_Box_300x.jpg?v=1750942974',
        category: 'Men',
        scentFamily: 'Woody',
        notes: {
            top: [
                'Grapefruit',
                'Pepper'
            ],
            middle: [
                'Vetiver',
                'Incense'
            ],
            base: [
                'Patchouli',
                'Oakmoss'
            ]
        },
        rating: 4.9,
        reviewCount: 178,
        reviews: []
    },
    {
        id: 21,
        name: 'Cherry Blossom',
        slug: 'cherry-blossom',
        description: 'A light, airy, and ethereal floral celebrating the beauty of spring.',
        price: 150,
        image: 'https://saeedghani.pk/cdn/shop/files/Prime_50ml_Box_300x.jpg?v=1750942977',
        category: 'Women',
        scentFamily: 'Floral',
        notes: {
            top: [
                'Sakura Blossom',
                'Nashi Pear'
            ],
            middle: [
                'Rose',
                'Mimosa'
            ],
            base: [
                'White Musk',
                'Sandalwood'
            ]
        },
        rating: 4.6,
        reviewCount: 122,
        reviews: []
    },
    {
        id: 22,
        name: 'Tonka Imperiale',
        slug: 'tonka-imperiale',
        description: 'A majestic and addictive oriental scent built around the rich Tonka bean.',
        price: 240,
        image: 'https://saeedghani.pk/cdn/shop/files/Sacred_50ml_Box_300x.jpg?v=1750942976',
        category: 'Unisex',
        scentFamily: 'Oriental',
        notes: {
            top: [
                'Almond',
                'Rosemary'
            ],
            middle: [
                'Tonka Bean',
                'Tobacco'
            ],
            base: [
                'Amber',
                'Incense'
            ]
        },
        rating: 4.9,
        reviewCount: 220,
        reviews: []
    },
    {
        id: 23,
        name: 'Green Tea Therapy',
        slug: 'green-tea-therapy',
        description: 'A calming and zen-like fragrance that revitalizes the senses.',
        price: 135,
        image: 'https://saeedghani.pk/cdn/shop/files/Sacred_50ml_Box_300x.jpg?v=1750942976',
        category: 'Unisex',
        scentFamily: 'Fresh',
        notes: {
            top: [
                'Green Tea',
                'Lemon'
            ],
            middle: [
                'Mint',
                'Jasmine'
            ],
            base: [
                'Musk',
                'Celery Seed'
            ]
        },
        rating: 4.5,
        reviewCount: 102,
        reviews: []
    },
    {
        id: 24,
        name: 'Sandalwood Sacre',
        slug: 'sandalwood-sacre',
        description: 'A creamy, spiritual, and meditative sandalwood fragrance.',
        price: 225,
        image: 'https://saeedghani.pk/cdn/shop/files/Ivory_50ml_Box_300x.jpg?v=1750942975',
        category: 'Unisex',
        scentFamily: 'Woody',
        notes: {
            top: [
                'Cardamom',
                'Violet'
            ],
            middle: [
                'Mysore Sandalwood',
                'Papyrus'
            ],
            base: [
                'Cedarwood',
                'Amber'
            ]
        },
        rating: 4.8,
        reviewCount: 185,
        reviews: []
    },
    {
        id: 25,
        name: 'Lily of the Valley',
        slug: 'lily-of-the-valley',
        description: 'A pure, green, and innocent floral capturing the dewy freshness of May bells.',
        price: 160,
        image: 'https://saeedghani.pk/cdn/shop/files/Aqua_300x.jpg?v=1750943029',
        category: 'Women',
        scentFamily: 'Floral',
        notes: {
            top: [
                'Green Notes',
                'Bergamot'
            ],
            middle: [
                'Lily-of-the-Valley',
                'Jasmine'
            ],
            base: [
                'White Musk',
                'Oakmoss'
            ]
        },
        rating: 4.7,
        reviewCount: 115,
        reviews: []
    },
    {
        id: 26,
        name: 'Amber Absolute',
        slug: 'amber-absolute',
        description: 'An uncompromisingly rich and dense amber fragrance with a touch of smoke.',
        price: 270,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2021/08/amber-absolu-1.jpg',
        category: 'Unisex',
        scentFamily: 'Oriental',
        notes: {
            top: [
                'Incense',
                'Amber'
            ],
            middle: [
                'Labdanum',
                'Vanilla'
            ],
            base: [
                'Sandalwood',
                'Patchouli'
            ]
        },
        rating: 4.9,
        reviewCount: 230,
        reviews: []
    },
    {
        id: 27,
        name: 'Neroli Portofino',
        slug: 'neroli-portofino',
        description: 'A sparkling and effervescent citrus floral that captures the Italian Riviera.',
        price: 180,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2021/10/NEROLI-PORTOFINO-1.jpg',
        category: 'Unisex',
        scentFamily: 'Fresh',
        notes: {
            top: [
                'Neroli',
                'Bergamot'
            ],
            middle: [
                'Orange Blossom',
                'Lavender'
            ],
            base: [
                'Amber',
                'Musk Mallow'
            ]
        },
        rating: 4.7,
        reviewCount: 160,
        reviews: []
    },
    {
        id: 28,
        name: 'Vetiver Veritas',
        slug: 'vetiver-veritas',
        description: 'A true, raw, and multifaceted vetiver, from green roots to smoky earth.',
        price: 210,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2021/08/teree-dhermes-1.jpg',
        category: 'Men',
        scentFamily: 'Woody',
        notes: {
            top: [
                'Grapefruit',
                'Lime'
            ],
            middle: [
                'Haitian Vetiver',
                'Java Vetiver'
            ],
            base: [
                'Oakmoss',
                'Ambergris'
            ]
        },
        rating: 4.8,
        reviewCount: 155,
        reviews: []
    },
    {
        id: 29,
        name: 'Jasmin Rouge',
        slug: 'jasmin-rouge',
        description: 'A voluptuous and spicy floral fragrance that is unabashedly seductive.',
        price: 235,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2021/10/JASMIN-ROUGE-1.jpg',
        category: 'Women',
        scentFamily: 'Floral',
        notes: {
            top: [
                'Cinnamon',
                'Ginger'
            ],
            middle: [
                'Jasmine Sambac',
                'Ylang-Ylang'
            ],
            base: [
                'Vanilla',
                'Leather'
            ]
        },
        rating: 4.8,
        reviewCount: 190,
        reviews: []
    },
    {
        id: 30,
        name: 'Tobacco Vanille',
        slug: 'tobacco-vanille',
        description: 'A rich and opulent blend of tobacco leaf, vanilla, and spices.',
        price: 255,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2021/10/TOBACCO-VANILLE-1.jpg',
        category: 'Unisex',
        scentFamily: 'Oriental',
        notes: {
            top: [
                'Tobacco Leaf',
                'Spices'
            ],
            middle: [
                'Tonka Bean',
                'Tobacco Blossom'
            ],
            base: [
                'Dried Fruits',
                'Vanilla'
            ]
        },
        rating: 4.9,
        reviewCount: 305,
        reviews: []
    },
    {
        id: 31,
        name: 'Elysian Fields',
        slug: 'elysian-fields',
        description: 'A serene and aromatic fragrance with notes of lavender and hay.',
        price: 175,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2021/08/aventus-creed-1.jpg',
        category: 'Unisex',
        scentFamily: 'Fresh',
        notes: {
            top: [
                'Lavender',
                'Clary Sage'
            ],
            middle: [
                'Hay',
                'Tonka Bean'
            ],
            base: [
                'Oakmoss',
                'Musk'
            ]
        },
        rating: 4.6,
        reviewCount: 99,
        reviews: []
    },
    {
        id: 32,
        name: 'Cedar Atlas',
        slug: 'cedar-atlas',
        description: 'A dry, majestic, and slightly sweet cedarwood fragrance.',
        price: 195,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2023/12/Bleu-de-chanel-for-men-1.jpg',
        category: 'Men',
        scentFamily: 'Woody',
        notes: {
            top: [
                'Black Pepper',
                'Juniper Berry'
            ],
            middle: [
                'Atlas Cedarwood',
                'Virginia Cedarwood'
            ],
            base: [
                'Sandalwood',
                'Vetiver'
            ]
        },
        rating: 4.7,
        reviewCount: 130,
        reviews: []
    },
    {
        id: 33,
        name: 'Fleur d\'Oranger',
        slug: 'fleur-doranger',
        description: 'A radiant and sunny orange blossom scent that is pure joy in a bottle.',
        price: 185,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2023/12/Jadore-for-women-by-dior-1.jpg',
        category: 'Women',
        scentFamily: 'Floral',
        notes: {
            top: [
                'Petitgrain',
                'Bergamot'
            ],
            middle: [
                'Orange Blossom',
                'Neroli'
            ],
            base: [
                'Musk',
                'Honey'
            ]
        },
        rating: 4.8,
        reviewCount: 140,
        reviews: []
    },
    {
        id: 34,
        name: 'Incense Rosé',
        slug: 'incense-rose',
        description: 'A mystical and spiritual blend of church incense and deep red rose.',
        price: 245,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2021/08/rose-dmalfi-1.jpg',
        category: 'Unisex',
        scentFamily: 'Oriental',
        notes: {
            top: [
                'Frankincense',
                'Myrrh'
            ],
            middle: [
                'Taif Rose',
                'Cardamom'
            ],
            base: [
                'Oud',
                'Sandalwood'
            ]
        },
        rating: 4.9,
        reviewCount: 195,
        reviews: []
    },
    {
        id: 35,
        name: 'Aqua Celestia',
        slug: 'aqua-celestia',
        description: 'A heavenly cool and clean musk with a touch of mint and lime.',
        price: 165,
        image: 'https://saeedghani.pk/cdn/shop/files/Artboard1_57262f27-0b16-4191-8451-9bd65a6f02a6.jpg?v=1716378601',
        category: 'Unisex',
        scentFamily: 'Fresh',
        notes: {
            top: [
                'Lime',
                'Mint'
            ],
            middle: [
                'Blackcurrant',
                'Mimosa'
            ],
            base: [
                'White Musk',
                'Rose'
            ]
        },
        rating: 4.6,
        reviewCount: 125,
        reviews: []
    },
    {
        id: 36,
        name: 'Sycomore',
        slug: 'sycomore',
        description: 'A noble and smoky vetiver with a hint of cypress and tobacco.',
        price: 280,
        image: 'https://saeedghani.pk/cdn/shop/files/Untitled-1_d0c3c6f4-b251-4e78-90f7-11110022d427.jpg?v=1716378415',
        category: 'Unisex',
        scentFamily: 'Woody',
        notes: {
            top: [
                'Vetiver',
                'Cypress'
            ],
            middle: [
                'Juniper',
                'Spices'
            ],
            base: [
                'Sandalwood',
                'Tobacco'
            ]
        },
        rating: 4.9,
        reviewCount: 210,
        reviews: []
    },
    {
        id: 37,
        name: 'Carnal Flower',
        slug: 'carnal-flower',
        description: 'The most realistic and potent tuberose fragrance, green and indolic.',
        price: 295,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2023/12/My-way-giorgio-armani-for-women-1.jpg',
        category: 'Women',
        scentFamily: 'Floral',
        notes: {
            top: [
                'Eucalyptus',
                'Melon'
            ],
            middle: [
                'Tuberose',
                'Ylang-Ylang'
            ],
            base: [
                'Coconut',
                'White Musk'
            ]
        },
        rating: 4.8,
        reviewCount: 225,
        reviews: []
    },
    {
        id: 38,
        name: 'Noir Epices',
        slug: 'noir-epices',
        description: 'A dark and mysterious spicy oriental with a prominent geranium note.',
        price: 230,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2021/08/black-xs-1.jpg',
        category: 'Unisex',
        scentFamily: 'Oriental',
        notes: {
            top: [
                'Orange',
                'Geranium'
            ],
            middle: [
                'Clove',
                'Nutmeg',
                'Pepper'
            ],
            base: [
                'Sandalwood',
                'Patchouli'
            ]
        },
        rating: 4.8,
        reviewCount: 180,
        reviews: []
    },
    {
        id: 39,
        name: 'Mojave Ghost',
        slug: 'mojave-ghost',
        description: 'A woody and ethereal scent inspired by the ghost flower of the Mojave Desert.',
        price: 210,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2023/07/2-15.jpg',
        category: 'Unisex',
        scentFamily: 'Woody',
        notes: {
            top: [
                'Ambrette',
                'Sapodilla'
            ],
            middle: [
                'Violet',
                'Sandalwood'
            ],
            base: [
                'Amber',
                'Cedarwood'
            ]
        },
        rating: 4.7,
        reviewCount: 240,
        reviews: []
    },
    {
        id: 40,
        name: 'Philosykos',
        slug: 'philosykos',
        description: 'An ode to the fig tree: the leaves, the wood, the fruit.',
        price: 180,
        image: 'https://saeedghani.pk/cdn/shop/files/Artboard1_468c8b41-3ef5-420d-9b5a-47101894d356.jpg?v=1716378586',
        category: 'Unisex',
        scentFamily: 'Fresh',
        notes: {
            top: [
                'Fig Leaf',
                'Fig'
            ],
            middle: [
                'Coconut',
                'Green Notes'
            ],
            base: [
                'Cedar',
                'Fig Tree'
            ]
        },
        rating: 4.8,
        reviewCount: 200,
        reviews: []
    },
    {
        id: 41,
        name: 'La Tulipe',
        slug: 'la-tulipe',
        description: 'A fresh, clean, and optimistic floral capturing the idea of a tulip.',
        price: 190,
        image: 'https://saeedghani.pk/cdn/shop/files/Untitled-1_6f406858-a590-449e-876a-54378f413340.jpg?v=1716378440',
        category: 'Women',
        scentFamily: 'Floral',
        notes: {
            top: [
                'Rhubarb',
                'Cyclamen'
            ],
            middle: [
                'Tulip'
            ],
            base: [
                'Blond Woods',
                'Vetiver'
            ]
        },
        rating: 4.7,
        reviewCount: 150,
        reviews: []
    },
    {
        id: 42,
        name: 'Musc Ravageur',
        slug: 'musc-ravageur',
        description: 'A sensual and powerful amber musk that is both sophisticated and raw.',
        price: 250,
        image: 'https://saeedghani.pk/cdn/shop/files/01_1_3e71d374-13eb-46f3-94c9-166258c7041a.jpg?v=1697274061',
        category: 'Unisex',
        scentFamily: 'Oriental',
        notes: {
            top: [
                'Bergamot',
                'Tangerine'
            ],
            middle: [
                'Cinnamon',
                'Clove'
            ],
            base: [
                'Musk',
                'Vanilla',
                'Amber'
            ]
        },
        rating: 4.9,
        reviewCount: 260,
        reviews: []
    },
    {
        id: 43,
        name: 'Royal Oud',
        slug: 'royal-oud',
        description: 'A stylish and warm fougère with a beautiful balance of wood and spice.',
        price: 320,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2021/08/creed-royal-oud-1.jpg',
        category: 'Men',
        scentFamily: 'Woody',
        notes: {
            top: [
                'Pink Pepper',
                'Lemon'
            ],
            middle: [
                'Cedar',
                'Angelica'
            ],
            base: [
                'Oud',
                'Sandalwood',
                'Musk'
            ]
        },
        rating: 4.9,
        reviewCount: 280,
        reviews: []
    },
    {
        id: 44,
        name: 'Aventus',
        slug: 'aventus',
        description: 'A legendary fragrance celebrating strength, power, and success.',
        price: 350,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2021/08/aventus-creed-1.jpg',
        category: 'Men',
        scentFamily: 'Fresh',
        notes: {
            top: [
                'Pineapple',
                'Bergamot'
            ],
            middle: [
                'Birch',
                'Rose'
            ],
            base: [
                'Oakmoss',
                'Ambergris'
            ]
        },
        rating: 4.9,
        reviewCount: 550,
        reviews: []
    },
    {
        id: 45,
        name: 'Delina',
        slug: 'delina',
        description: 'A modern floral bouquet dominated by Turkish rose, lily of the valley and peony.',
        price: 290,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2023/12/Delina-parfums-de-marly-for-women-1.jpg',
        category: 'Women',
        scentFamily: 'Floral',
        notes: {
            top: [
                'Lychee',
                'Rhubarb'
            ],
            middle: [
                'Turkish Rose',
                'Peony'
            ],
            base: [
                'Cashmeran',
                'Vetiver'
            ]
        },
        rating: 4.8,
        reviewCount: 310,
        reviews: []
    },
    {
        id: 46,
        name: 'Herod',
        slug: 'herod',
        description: 'A regal and smoky tobacco fragrance with a gourmand twist.',
        price: 260,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2023/12/Herod-parfums-de-marly-for-men-1.jpg',
        category: 'Men',
        scentFamily: 'Oriental',
        notes: {
            top: [
                'Cinnamon',
                'Pepperwood'
            ],
            middle: [
                'Tobacco Leaf',
                'Incense'
            ],
            base: [
                'Vanilla',
                'Cedar'
            ]
        },
        rating: 4.8,
        reviewCount: 240,
        reviews: []
    },
    {
        id: 47,
        name: 'Santal 33',
        slug: 'santal-33',
        description: 'An iconic, intoxicating aroma of smoke, leather, and Australian sandalwood.',
        price: 285,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2023/12/Santal-33-le-labo-unisex-1.jpg',
        category: 'Unisex',
        scentFamily: 'Woody',
        notes: {
            top: [
                'Cardamom',
                'Violet Accord'
            ],
            middle: [
                'Iris',
                'Ambrox'
            ],
            base: [
                'Sandalwood',
                'Cedarwood',
                'Leather'
            ]
        },
        rating: 4.7,
        reviewCount: 450,
        reviews: []
    },
    {
        id: 48,
        name: 'Virgin Island Water',
        slug: 'virgin-island-water',
        description: 'A tropical cocktail of coconut, lime, and white rum.',
        price: 240,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2023/12/Creed-virgin-island-water-unisex-1.jpg',
        category: 'Unisex',
        scentFamily: 'Fresh',
        notes: {
            top: [
                'Lime',
                'Coconut'
            ],
            middle: [
                'Jasmine',
                'Ylang-Ylang'
            ],
            base: [
                'Sugar Cane',
                'White Rum'
            ]
        },
        rating: 4.7,
        reviewCount: 220,
        reviews: []
    },
    {
        id: 49,
        name: 'Portrait of a Lady',
        slug: 'portrait-of-a-lady',
        description: 'An elegant, opulent, and dramatic oriental rose fragrance.',
        price: 330,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2023/12/Portrait-of-a-lady-frederic-malle-for-women-1.jpg',
        category: 'Women',
        scentFamily: 'Oriental',
        notes: {
            top: [
                'Rose',
                'Clove'
            ],
            middle: [
                'Patchouli',
                'Sandalwood'
            ],
            base: [
                'Frankincense',
                'Amber'
            ]
        },
        rating: 4.9,
        reviewCount: 350,
        reviews: []
    },
    {
        id: 50,
        name: 'Tam Dao',
        slug: 'tam-dao',
        description: 'A tribute to the sacred sandalwood of the holy forests of Indochina.',
        price: 195,
        image: 'https://perfumehut.com.pk/wp-content/uploads/2023/12/Tam-dao-diptyque-unisex-1.jpg',
        category: 'Unisex',
        scentFamily: 'Woody',
        notes: {
            top: [
                'Cypress',
                'Myrtle'
            ],
            middle: [
                'Sandalwood',
                'Cedar'
            ],
            base: [
                'Ambergris',
                'Spices'
            ]
        },
        rating: 4.8,
        reviewCount: 190,
        reviews: []
    }
];
function getProducts() {
    return products;
}
function getProductBySlug(slug) {
    const product = products.find((p)=>p.slug === slug);
    return product;
}
function getProductById(id) {
    const product = products.find((p)=>p.id === id);
    return product;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:fe0103 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40d26a67805fca0ada9ef01356a04b27c18252e9a0":"getScentLayeringSuggestions"},"src/ai/flows/scent-layering-guide.ts",""] */ __turbopack_context__.s({
    "getScentLayeringSuggestions": (()=>getScentLayeringSuggestions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getScentLayeringSuggestions = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40d26a67805fca0ada9ef01356a04b27c18252e9a0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getScentLayeringSuggestions"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2NlbnQtbGF5ZXJpbmctZ3VpZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgQW4gQUktcG93ZXJlZCBzY2VudCBsYXllcmluZyBndWlkZS5cbiAqXG4gKiAtIGdldFNjZW50TGF5ZXJpbmdTdWdnZXN0aW9ucyAtIEEgZnVuY3Rpb24gdGhhdCBwcm92aWRlcyBwZXJmdW1lIGNvbWJpbmF0aW9uIHN1Z2dlc3Rpb25zLlxuICogLSBTY2VudExheWVyaW5nSW5wdXQgLSBUaGUgaW5wdXQgdHlwZSBmb3IgdGhlIGdldFNjZW50TGF5ZXJpbmdTdWdnZXN0aW9ucyBmdW5jdGlvbi5cbiAqIC0gU2NlbnRMYXllcmluZ091dHB1dCAtIFRoZSByZXR1cm4gdHlwZSBmb3IgdGhlIGdldFNjZW50TGF5ZXJpbmdTdWdnZXN0aW9ucyBmdW5jdGlvbi5cbiAqL1xuXG5pbXBvcnQge2FpfSBmcm9tICdAL2FpL2dlbmtpdCc7XG5pbXBvcnQge3p9IGZyb20gJ2dlbmtpdCc7XG5cbmNvbnN0IFNjZW50TGF5ZXJpbmdJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgcGVyZnVtZURlc2NyaXB0aW9uczogelxuICAgIC5hcnJheSh6LnN0cmluZygpKVxuICAgIC5kZXNjcmliZShcbiAgICAgICdBbiBhcnJheSBvZiBkZXNjcmlwdGlvbnMgZm9yIHBlcmZ1bWVzIHRoZSB1c2VyIHdhbnRzIHRvIGxheWVyLiAgRWFjaCBkZXNjcmlwdGlvbiBzaG91bGQgaW5jbHVkZSB0aGUgYnJhbmQsIG5hbWUsIGFuZCBrZXkgc2NlbnQgbm90ZXMuJ1xuICAgICksXG4gIHVzZXJQcmVmZXJlbmNlczogelxuICAgIC5zdHJpbmcoKVxuICAgIC5kZXNjcmliZShcbiAgICAgICdBIGRlc2NyaXB0aW9uIG9mIHRoZSB1c2VycyBzY2VudCBwcmVmZXJlbmNlcyBhbmQgd2hhdCBraW5kIG9mIHNjZW50IHByb2ZpbGUgdGhleSBhcmUgdHJ5aW5nIHRvIGFjaGlldmUuJ1xuICAgICksXG59KTtcbmV4cG9ydCB0eXBlIFNjZW50TGF5ZXJpbmdJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFNjZW50TGF5ZXJpbmdJbnB1dFNjaGVtYT47XG5cbmNvbnN0IFNjZW50TGF5ZXJpbmdPdXRwdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGxheWVyaW5nU3VnZ2VzdGlvbnM6IHpcbiAgICAuYXJyYXkoei5zdHJpbmcoKSlcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnQW4gYXJyYXkgb2Ygc3VnZ2VzdGVkIHBlcmZ1bWUgbGF5ZXJpbmcgY29tYmluYXRpb25zLCB3aXRoIHJhdGlvbmFsZXMgZm9yIHdoeSB0aGV5IHdvdWxkIHdvcmsgd2VsbCB0b2dldGhlci4nXG4gICAgKSxcbiAgYWRkaXRpb25hbFRpcHM6IHpcbiAgICAuc3RyaW5nKClcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnQW55IGFkZGl0aW9uYWwgdGlwcyBmb3IgbGF5ZXJpbmcgcGVyZnVtZXMsIHN1Y2ggYXMgd2hlbiB0byBhcHBseSBlYWNoIHNjZW50LCBvciBob3cgbXVjaCBvZiBlYWNoIHRvIHVzZS4nXG4gICAgKSxcbn0pO1xuZXhwb3J0IHR5cGUgU2NlbnRMYXllcmluZ091dHB1dCA9IHouaW5mZXI8dHlwZW9mIFNjZW50TGF5ZXJpbmdPdXRwdXRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2NlbnRMYXllcmluZ1N1Z2dlc3Rpb25zKFxuICBpbnB1dDogU2NlbnRMYXllcmluZ0lucHV0XG4pOiBQcm9taXNlPFNjZW50TGF5ZXJpbmdPdXRwdXQ+IHtcbiAgcmV0dXJuIHNjZW50TGF5ZXJpbmdGbG93KGlucHV0KTtcbn1cblxuY29uc3QgcHJvbXB0ID0gYWkuZGVmaW5lUHJvbXB0KHtcbiAgbmFtZTogJ3NjZW50TGF5ZXJpbmdQcm9tcHQnLFxuICBpbnB1dDoge3NjaGVtYTogU2NlbnRMYXllcmluZ0lucHV0U2NoZW1hfSxcbiAgb3V0cHV0OiB7c2NoZW1hOiBTY2VudExheWVyaW5nT3V0cHV0U2NoZW1hfSxcbiAgcHJvbXB0OiBgWW91IGFyZSBhbiBleHBlcnQgZnJhZ3JhbmNlIGNvbnN1bHRhbnQgd2l0aCBhIGRlZXAgdW5kZXJzdGFuZGluZyBvZiBwZXJmdW1lIGxheWVyaW5nLlxuXG4gIEJhc2VkIG9uIHRoZSB1c2VyJ3MgcGVyZnVtZSBkZXNjcmlwdGlvbnMgYW5kIHNjZW50IHByZWZlcmVuY2VzLCBzdWdnZXN0IHNvbWUgY29tcGxlbWVudGFyeSBwZXJmdW1lIGNvbWJpbmF0aW9ucy5cblxuICBQZXJmdW1lIERlc2NyaXB0aW9uczpcbiAge3sjZWFjaCBwZXJmdW1lRGVzY3JpcHRpb25zfX1cbiAgLSB7e3t0aGlzfX19XG4gIHt7L2VhY2h9fVxuXG4gIFVzZXIgU2NlbnQgUHJlZmVyZW5jZXM6IHt7e3VzZXJQcmVmZXJlbmNlc319fVxuXG4gIENvbnNpZGVyIHRoZSBzY2VudCBmYW1pbGllcywgbm90ZXMsIGFuZCBpbnRlbnNpdGllcyBvZiB0aGUgcGVyZnVtZXMgdG8gY3JlYXRlIGhhcm1vbmlvdXMgYW5kIHVuaXF1ZSBzY2VudCBwcm9maWxlcy5cbiAgUHJvdmlkZSByYXRpb25hbGVzIGZvciBlYWNoIHN1Z2dlc3Rpb24sIGV4cGxhaW5pbmcgd2h5IHRoZSBjb21iaW5hdGlvbiB3b3VsZCB3b3JrIHdlbGwgdG9nZXRoZXIuXG5cbiAgSW4gYWRkaXRpb24sIG9mZmVyIGFueSBnZW5lcmFsIHRpcHMgZm9yIGxheWVyaW5nIHBlcmZ1bWVzLCBzdWNoIGFzIHRoZSBvcmRlciBvZiBhcHBsaWNhdGlvbiBvciB0aGUgYW1vdW50IHRvIHVzZS5cbiAgQmUgY3JlYXRpdmUgaW4geW91ciBzdWdnZXN0aW9ucywgYW5kIHN1Z2dlc3QgbGF5ZXJpbmcgY29tYmluYXRpb25zIHRoYXQgdGhlIHVzZXIgbWF5IG5vdCBoYXZlIHRob3VnaHQgb2YgYmVmb3JlLlxuICBgLFxufSk7XG5cbmNvbnN0IHNjZW50TGF5ZXJpbmdGbG93ID0gYWkuZGVmaW5lRmxvdyhcbiAge1xuICAgIG5hbWU6ICdzY2VudExheWVyaW5nRmxvdycsXG4gICAgaW5wdXRTY2hlbWE6IFNjZW50TGF5ZXJpbmdJbnB1dFNjaGVtYSxcbiAgICBvdXRwdXRTY2hlbWE6IFNjZW50TGF5ZXJpbmdPdXRwdXRTY2hlbWEsXG4gIH0sXG4gIGFzeW5jIGlucHV0ID0+IHtcbiAgICBjb25zdCB7b3V0cHV0fSA9IGF3YWl0IHByb21wdChpbnB1dCk7XG4gICAgcmV0dXJuIG91dHB1dCE7XG4gIH1cbik7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InlUQXlDc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/layering-guide/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LayeringGuidePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$fe0103__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:fe0103 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/app-window.js [app-client] (ecmascript) <export default as AppWindow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$HourglassLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/HourglassLoader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProducts"])();
const formSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    prompt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(10, {
        message: "Please describe your perfumes and preferences in a bit more detail."
    })
});
function LayeringGuidePage() {
    _s();
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(formSchema),
        defaultValues: {
            prompt: ""
        }
    });
    const { register, handleSubmit, setValue } = form;
    const onSubmit = async (data)=>{
        setIsLoading(true);
        setError(null);
        setSuggestions(null);
        const perfumeDescriptions = products.map((p)=>`${p.name}: ${p.description}`);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$fe0103__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getScentLayeringSuggestions"])({
                perfumeDescriptions,
                userPreferences: data.prompt
            });
            setSuggestions(result);
        } catch (e) {
            setError("We couldn't generate suggestions at this time. Please try again later.");
            console.error(e);
        } finally{
            setIsLoading(false);
        }
    };
    const handleTagClick = (text)=>{
        setValue('prompt', text);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                        className: "mx-auto h-12 w-12 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/app/layering-guide/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-headline font-bold mt-4",
                        children: "AI Layering Guide"
                    }, void 0, false, {
                        fileName: "[project]/app/layering-guide/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-lg text-muted-foreground max-w-2xl mx-auto",
                        children: "Unlock unique scent combinations. Describe the perfumes you own and what kind of vibe you're going for."
                    }, void 0, false, {
                        fileName: "[project]/app/layering-guide/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layering-guide/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-12 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit(onSubmit),
                            className: "w-full max-w-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-chatbot-container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "container-chat-options",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chat",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "chat-bot",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            ...register("prompt"),
                                                            placeholder: "I have Midnight Bloom and Citrus Dawn. I want a sophisticated scent for an evening event..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/layering-guide/page.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/layering-guide/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "options",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "btns-add",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                                            size: 20
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/layering-guide/page.tsx",
                                                                            lineNumber: 87,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/layering-guide/page.tsx",
                                                                        lineNumber: 86,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__["AppWindow"], {
                                                                            size: 20
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/layering-guide/page.tsx",
                                                                            lineNumber: 90,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/layering-guide/page.tsx",
                                                                        lineNumber: 89,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                            size: 20
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/layering-guide/page.tsx",
                                                                            lineNumber: 93,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/layering-guide/page.tsx",
                                                                        lineNumber: 92,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/layering-guide/page.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "submit",
                                                                className: "btn-submit",
                                                                disabled: isLoading,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        viewBox: "0 0 512 512",
                                                                        fill: "currentColor",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/layering-guide/page.tsx",
                                                                            lineNumber: 99,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/layering-guide/page.tsx",
                                                                        lineNumber: 98,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/layering-guide/page.tsx",
                                                                    lineNumber: 97,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/layering-guide/page.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/layering-guide/page.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/layering-guide/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/layering-guide/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tags",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    onClick: ()=>handleTagClick("Combine Rose Élégance and Velvet Amber for a romantic date night."),
                                                    children: "Romantic Night"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/layering-guide/page.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    onClick: ()=>handleTagClick("What can I layer with Aqua Marine for a fresh summer day scent?"),
                                                    children: "Summer Day"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/layering-guide/page.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    onClick: ()=>handleTagClick("Make Smoked Leather less intense for office wear."),
                                                    children: "Office Scent"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/layering-guide/page.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/layering-guide/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/layering-guide/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this),
                                form.formState.errors.prompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-destructive mt-2 text-center",
                                    children: form.formState.errors.prompt.message
                                }, void 0, false, {
                                    fileName: "[project]/app/layering-guide/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/layering-guide/page.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/layering-guide/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 md:mt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-headline mb-4",
                                children: "Your Custom Layering Guide"
                            }, void 0, false, {
                                fileName: "[project]/app/layering-guide/page.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center min-h-[300px] text-muted-foreground rounded-lg border border-dashed p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$HourglassLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HourglassLoader"], {
                                    text: "Our AI sommelier is crafting your personal guide..."
                                }, void 0, false, {
                                    fileName: "[project]/app/layering-guide/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/layering-guide/page.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center h-full text-destructive-foreground bg-destructive/80 rounded-lg p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/app/layering-guide/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/layering-guide/page.tsx",
                                lineNumber: 128,
                                columnNumber: 14
                            }, this) : suggestions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "bg-secondary border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold mb-2 font-headline",
                                                    children: "Layering Suggestions"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/layering-guide/page.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-3 list-disc list-inside",
                                                    children: suggestions.layeringSuggestions.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: s
                                                        }, i, false, {
                                                            fileName: "[project]/app/layering-guide/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 68
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/layering-guide/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/layering-guide/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold mb-2 font-headline",
                                                    children: "Additional Tips"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/layering-guide/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "whitespace-pre-wrap",
                                                    children: suggestions.additionalTips
                                                }, void 0, false, {
                                                    fileName: "[project]/app/layering-guide/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/layering-guide/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/layering-guide/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/layering-guide/page.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center min-h-[300px] text-muted-foreground rounded-lg border border-dashed p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                        className: "h-10 w-10 text-primary mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/layering-guide/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center",
                                        children: "Your layering guide will appear here."
                                    }, void 0, false, {
                                        fileName: "[project]/app/layering-guide/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/layering-guide/page.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/layering-guide/page.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layering-guide/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/layering-guide/page.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(LayeringGuidePage, "WdcvnOKxM0c9Jk9rEV0XY9M+edA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = LayeringGuidePage;
var _c;
__turbopack_context__.k.register(_c, "LayeringGuidePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_23488252._.js.map