module.exports = {

"[project]/src/lib/products.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/components/product/StarRating.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StarRating": (()=>StarRating)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
function StarRating({ rating, maxRating = 5, className, starClassName }) {
    const fullStars = Math.floor(rating);
    const partialStarPercentage = rating % 1 * 100;
    const emptyStars = maxRating - Math.ceil(rating);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center", className),
        children: [
            [
                ...Array(fullStars)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 text-primary fill-primary", starClassName)
                }, `full-${i}`, false, {
                    fileName: "[project]/src/components/product/StarRating.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)),
            partialStarPercentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 text-primary", starClassName)
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/StarRating.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 overflow-hidden",
                        style: {
                            width: `${partialStarPercentage}%`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 text-primary fill-primary", starClassName)
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/StarRating.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/StarRating.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product/StarRating.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this),
            [
                ...Array(emptyStars)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 text-primary", starClassName)
                }, `empty-${i}`, false, {
                    fileName: "[project]/src/components/product/StarRating.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/product/StarRating.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/hooks/use-wishlist.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useWishlist": (()=>useWishlist)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WishlistProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/WishlistProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const useWishlist = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WishlistProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WishlistContext"]);
    if (context === undefined) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
};
}}),
"[project]/src/components/product/WishlistButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WishlistButton": (()=>WishlistButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$wishlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-wishlist.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$notification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-notification.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function WishlistButton({ product }) {
    const { isProductInWishlist, addToWishlist, removeFromWishlist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$wishlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWishlist"])();
    const { addNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$notification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotification"])();
    // Initialize state directly from the context to avoid a re-render flash.
    const [isChecked, setIsChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>isProductInWishlist(product.id));
    const inputId = `wishlist-checkbox-${product.id}`;
    // This effect ensures the button's state stays in sync if the wishlist is modified elsewhere.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsChecked(isProductInWishlist(product.id));
    }, [
        isProductInWishlist,
        product.id
    ]);
    const handleChange = (event)=>{
        const checked = event.target.checked;
        setIsChecked(checked);
        if (checked) {
            addToWishlist(product);
            addNotification({
                type: 'success',
                title: "Added to Wishlist",
                message: `${product.name} has been saved.`
            });
        } else {
            removeFromWishlist(product.id);
            addNotification({
                type: 'success',
                title: "Removed from Wishlist",
                message: `${product.name} has been removed.`
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "heart-container",
        title: isChecked ? "Remove from wishlist" : "Add to wishlist",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                className: "checkbox",
                id: inputId,
                checked: isChecked,
                onChange: handleChange
            }, void 0, false, {
                fileName: "[project]/src/components/product/WishlistButton.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "svg-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        className: "svg-outline",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/WishlistButton.tsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/WishlistButton.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        className: "svg-filled",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/WishlistButton.tsx",
                            lineNumber: 62,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/WishlistButton.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "svg-celebrate",
                        width: "100",
                        height: "100",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "10,10 20,20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/WishlistButton.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "10,50 20,50"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/WishlistButton.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "20,80 30,70"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/WishlistButton.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "90,10 80,20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/WishlistButton.tsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "90,50 80,50"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/WishlistButton.tsx",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "80,80 70,70"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/WishlistButton.tsx",
                                lineNumber: 71,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product/WishlistButton.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product/WishlistButton.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/product/WishlistButton.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/product/ProductCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProductCard": (()=>ProductCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-cart.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$StarRating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/StarRating.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$WishlistButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/WishlistButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$notification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-notification.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
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
;
function ProductCard({ product }) {
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const { addNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$notification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotification"])();
    const handleAddToCart = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
        addNotification({
            type: 'success',
            title: `Added ${product.name}`,
            message: `A ${product.scentFamily.toLowerCase()} scent with top notes of ${product.notes.top.join(", ")}.`
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "w-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: `/products/${product.slug}`,
            className: "block",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[3/4] w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: product.image,
                            alt: product.name,
                            "data-ai-hint": "perfume bottle",
                            fill: true,
                            className: "object-cover transition-transform duration-500 group-hover:scale-110",
                            sizes: "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductCard.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-2 right-2 z-10",
                            onClick: (e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$WishlistButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WishlistButton"], {
                                product: product
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/ProductCard.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductCard.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-2 left-2 z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs bg-black/50 text-white rounded-full px-2 py-1 backdrop-blur-sm",
                                children: product.scentFamily
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/ProductCard.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductCard.tsx",
                            lineNumber: 49,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/product/ProductCard.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-headline text-lg font-semibold truncate group-hover:text-primary",
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductCard.tsx",
                            lineNumber: 56,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-medium text-primary",
                                    children: [
                                        "$",
                                        product.price.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/product/ProductCard.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$StarRating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarRating"], {
                                    rating: product.rating,
                                    starClassName: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product/ProductCard.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/product/ProductCard.tsx",
                            lineNumber: 57,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleAddToCart,
                            size: "sm",
                            className: "w-full mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                    className: "mr-2 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product/ProductCard.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                " Add to Cart"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/product/ProductCard.tsx",
                            lineNumber: 61,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/product/ProductCard.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/product/ProductCard.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/product/ProductCard.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
Input.displayName = "Input";
;
}}),
"[project]/src/ai/flows/data:e2db9a [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40c586d01a32009b167db98147da14fc6029d42f70":"searchProducts"},"src/ai/flows/search-products.ts",""] */ __turbopack_context__.s({
    "searchProducts": (()=>searchProducts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var searchProducts = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40c586d01a32009b167db98147da14fc6029d42f70", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "searchProducts"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VhcmNoLXByb2R1Y3RzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzZXJ2ZXInO1xuXG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgUHJvZHVjdCBzZWFyY2ggQUkgYWdlbnQuXG4gKlxuICogLSBzZWFyY2hQcm9kdWN0cyAtIEEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIHByb2R1Y3Qgc2VhcmNoIGFuZCByZWNvbW1lbmRhdGlvbi5cbiAqIC0gU2VhcmNoUHJvZHVjdHNJbnB1dCAtIFRoZSBpbnB1dCB0eXBlIGZvciB0aGUgc2VhcmNoUHJvZHVjdHMgZnVuY3Rpb24uXG4gKiAtIFNlYXJjaFByb2R1Y3RzT3V0cHV0IC0gVGhlIHJldHVybiB0eXBlIGZvciB0aGUgc2VhcmNoUHJvZHVjdHMgZnVuY3Rpb24uXG4gKi9cblxuaW1wb3J0IHthaX0gZnJvbSAnQC9haS9nZW5raXQnO1xuaW1wb3J0IHt6fSBmcm9tICdnZW5raXQnO1xuXG5jb25zdCBTZWFyY2hQcm9kdWN0c0lucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBxdWVyeTogelxuICAgIC5zdHJpbmcoKVxuICAgIC5kZXNjcmliZSgnVGhlIHVzZXJcXCdzIHNlYXJjaCBxdWVyeSBmb3IgYSBwZXJmdW1lLicpLFxuICBwcm9kdWN0TmFtZXM6IHouYXJyYXkoei5zdHJpbmcoKSkuZGVzY3JpYmUoJ0EgbGlzdCBvZiBhdmFpbGFibGUgcGVyZnVtZSBuYW1lcyBpbiB0aGUgc3RvcmUuJyksXG59KTtcbmV4cG9ydCB0eXBlIFNlYXJjaFByb2R1Y3RzSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBTZWFyY2hQcm9kdWN0c0lucHV0U2NoZW1hPjtcblxuY29uc3QgU2VhcmNoUHJvZHVjdHNPdXRwdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHJlY29tbWVuZGF0aW9uczogei5hcnJheSh6LnN0cmluZygpKS5kZXNjcmliZSgnQW4gYXJyYXkgb2YgdXAgdG8gOCByZWNvbW1lbmRlZCBwZXJmdW1lIG5hbWVzIHRoYXQgYXJlIG1vc3QgcmVsZXZhbnQgdG8gdGhlIHVzZXIgcXVlcnkuJyksXG59KTtcbmV4cG9ydCB0eXBlIFNlYXJjaFByb2R1Y3RzT3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgU2VhcmNoUHJvZHVjdHNPdXRwdXRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoUHJvZHVjdHMoaW5wdXQ6IFNlYXJjaFByb2R1Y3RzSW5wdXQpOiBQcm9taXNlPFNlYXJjaFByb2R1Y3RzT3V0cHV0PiB7XG4gIHJldHVybiBzZWFyY2hQcm9kdWN0c0Zsb3coaW5wdXQpO1xufVxuXG5jb25zdCBwcm9tcHQgPSBhaS5kZWZpbmVQcm9tcHQoe1xuICBuYW1lOiAnc2VhcmNoUHJvZHVjdHNQcm9tcHQnLFxuICBpbnB1dDoge3NjaGVtYTogU2VhcmNoUHJvZHVjdHNJbnB1dFNjaGVtYX0sXG4gIG91dHB1dDoge3NjaGVtYTogU2VhcmNoUHJvZHVjdHNPdXRwdXRTY2hlbWF9LFxuICBwcm9tcHQ6IGBZb3UgYXJlIGEgaGVscGZ1bCBlLWNvbW1lcmNlIHNlYXJjaCBhc3Npc3RhbnQgZm9yIGEgcGVyZnVtZSBzdG9yZS5cbllvdSB3aWxsIGJlIGdpdmVuIGEgdXNlcidzIHNlYXJjaCBxdWVyeSBhbmQgYSBsaXN0IG9mIGFsbCBhdmFpbGFibGUgcGVyZnVtZSBuYW1lcy5cbllvdXIgdGFzayBpcyB0byBpZGVudGlmeSB0aGUgbW9zdCByZWxldmFudCBwZXJmdW1lcyBmcm9tIHRoZSBsaXN0IGJhc2VkIG9uIHRoZSB1c2VyJ3MgcXVlcnkuXG5UaGUgcXVlcnkgbWlnaHQgYmUgYSBkaXJlY3QgcHJvZHVjdCBuYW1lLCBvciBpdCBjb3VsZCBkZXNjcmliZSBhIG1vb2QsIG9jY2FzaW9uLCBvciBzY2VudCBwcmVmZXJlbmNlIChlLmcuLCBcInN1bW1lciBmbG9yYWxcIiwgXCJhIHNjZW50IGZvciBhIG5pZ2h0IG91dFwiKS5cblxuUmV0dXJuIGEgbGlzdCBvZiB1cCB0byA4IG9mIHRoZSBtb3N0IHJlbGV2YW50IHByb2R1Y3QgbmFtZXMuIE9ubHkgcmV0dXJuIG5hbWVzIHRoYXQgZXhpc3QgaW4gdGhlIHByb3ZpZGVkIGxpc3QuXG5cblVzZXIgUXVlcnk6IHt7e3F1ZXJ5fX19XG5cbkF2YWlsYWJsZSBQZXJmdW1lczpcbnt7I2VhY2ggcHJvZHVjdE5hbWVzfX1cbi0ge3t7dGhpc319fVxue3svZWFjaH19XG5gLFxufSk7XG5cbmNvbnN0IHNlYXJjaFByb2R1Y3RzRmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAnc2VhcmNoUHJvZHVjdHNGbG93JyxcbiAgICBpbnB1dFNjaGVtYTogU2VhcmNoUHJvZHVjdHNJbnB1dFNjaGVtYSxcbiAgICBvdXRwdXRTY2hlbWE6IFNlYXJjaFByb2R1Y3RzT3V0cHV0U2NoZW1hLFxuICB9LFxuICBhc3luYyBpbnB1dCA9PiB7XG4gICAgY29uc3Qge291dHB1dH0gPSBhd2FpdCBwcm9tcHQoaW5wdXQpO1xuICAgIHJldHVybiBvdXRwdXQhO1xuICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ1U0EyQnNCIn0=
}}),
"[project]/app/search/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SearchPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/products.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/ProductCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$e2db9a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:e2db9a [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$HourglassLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/HourglassLoader.tsx [app-ssr] (ecmascript)");
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
;
// Hand-pick some popular product IDs for the trending section
const trendingProductIds = [
    44,
    45,
    47,
    49
];
function SearchComponent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const initialQuery = searchParams.get('q') || '';
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialQuery);
    const [displayedQuery, setDisplayedQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialQuery);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const allProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProducts"])(), []);
    const trendingProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>trendingProductIds.map((id)=>allProducts.find((p)=>p.id === id)).filter((p)=>p !== undefined), [
        allProducts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const performSearch = async ()=>{
            if (!displayedQuery) {
                setProducts([]);
                return;
            }
            setIsLoading(true);
            setError(null);
            // 1. Basic local search
            const lowercasedQuery = displayedQuery.toLowerCase();
            const directMatches = allProducts.filter((p)=>p.name.toLowerCase().includes(lowercasedQuery) || p.description.toLowerCase().includes(lowercasedQuery) || p.scentFamily.toLowerCase().includes(lowercasedQuery));
            if (directMatches.length > 0) {
                setProducts(directMatches);
                setIsLoading(false);
                return;
            }
            // 2. If no direct matches, use AI for related items
            try {
                const productNames = allProducts.map((p)=>p.name);
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$e2db9a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["searchProducts"])({
                    query: displayedQuery,
                    productNames
                });
                const aiRecommendedProducts = result.recommendations.map((name)=>allProducts.find((p)=>p.name === name)).filter((p)=>p !== undefined);
                setProducts(aiRecommendedProducts);
                if (aiRecommendedProducts.length === 0) {
                    setError("Our AI couldn't find any related products for your search.");
                }
            } catch (e) {
                console.error("AI search failed:", e);
                setError("We couldn't find any products matching your search, and our AI assistant is currently unavailable.");
                setProducts([]);
            } finally{
                setIsLoading(false);
            }
        };
        performSearch();
    }, [
        displayedQuery,
        allProducts
    ]);
    const handleSearch = (e)=>{
        e.preventDefault();
        setDisplayedQuery(searchTerm);
        router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-headline font-bold text-center mb-4",
                        children: "Search Our Collection"
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-muted-foreground text-center mb-8",
                        children: "Find your next signature scent."
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSearch,
                        className: "flex gap-2 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                type: "search",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                placeholder: "e.g., 'summer floral' or 'Oud Mystique'",
                                className: "h-12 text-lg"
                            }, void 0, false, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                size: "lg",
                                className: "h-12",
                                disabled: isLoading,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center text-center py-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$HourglassLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HourglassLoader"], {
                        text: "Looking for the perfect scent for you..."
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/search/page.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center text-center py-20 bg-destructive/10 rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-headline text-destructive",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 118,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-muted-foreground",
                            children: "Please try a different search term."
                        }, void 0, false, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 119,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/search/page.tsx",
                    lineNumber: 117,
                    columnNumber: 12
                }, this) : products.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-headline mb-6",
                            children: [
                                'Search Results for "',
                                displayedQuery,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8",
                            children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                                    product: product
                                }, product.id, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : displayedQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center text-center py-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-headline",
                            children: [
                                'No Products Found for "',
                                displayedQuery,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 136,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-muted-foreground",
                            children: "Try adjusting your search to find what you're looking for."
                        }, void 0, false, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 137,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/search/page.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-headline mb-8",
                            children: "Trending Products"
                        }, void 0, false, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 143,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto",
                            children: trendingProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                                    product: product
                                }, product.id, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 21
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 144,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/search/page.tsx",
                    lineNumber: 142,
                    columnNumber: 12
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/search/page.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
function SearchPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center flex-grow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$HourglassLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HourglassLoader"], {
                text: "Loading search..."
            }, void 0, false, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 158,
                columnNumber: 89
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/app/search/page.tsx",
            lineNumber: 158,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchComponent, {}, void 0, false, {
            fileName: "[project]/app/search/page.tsx",
            lineNumber: 159,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/search/page.tsx",
        lineNumber: 158,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=_9f0025af._.js.map