export const items = [
    {
        _id: "a",
        title: "גוף תאורת מסלול הסעה מורם (ישן)",
        subtitle: "עוצמה בינונית, רב-כיווני",
        status: "new", // new, obselete, discontinued, or future
        technology: "LED", // LED or Halogen
        image: "./images/items/l-861.jpg",
        compliances: [
            {
                standard: "ICAO",
                document: "Annex 14 Vol. 1",
                specification: "5.3.18",
            },
            {
                standard: "FAA",
                document: "AC 150/5345-46",
                spcification: "L-861T",
            },
        ],
        purposeIcons: ["./images/icons/edge.svg"],
        purpose: [
            "תאורת שוליים למסלולי הסעה, קושרות, רחבות, כניסות לליינים ודת&quot;קים",
            "מסלולי טיסה בעוצמה בינונית",
            "Taxiway Edge, Aproach Edge",
            "Medium Intensity Runway Lighting",
        ],
        techSpecs: [
            ["עוצמת הארה", "בינונית"],
            ["התקנה על חבית", "L-867B"],
            ["סוג נורה", "הלוגן, הברגה T10"],
            ["אורך חיים לנורה", "1,000 שעות"],
            ["הספק חשמלי", "45W"],
            ["זרם עבודה", "6.6A"],
        ],
        products: [199011503],
    },
];

export const products = [
    {
        _id: "abcd123",
        iafNo: 199011503,
        name: 'ג"ת בעוצמה נמוכה ישן',
        available: false,
        providerId: null,
        manufacturerId: null,
        marketCatalogNo: null,
        price: null,
        notes: [
            "גוף תאורה זה מיועד לפסילה ולהחלפה בגופי תאורה הלוגן חדשים או בגופי LED",
        ],
        datasheet: null, // Datasheet PDF URL
        manual: null, // Manual PDF URL
        parts: [
            199010687, 199010695, 199010661, 199010646, 199010653, 199010794,
            199010778, 199686627, 199011347,
        ],
    },
    // add more products based on the 'parts' array above, use the number as iafNo property
    {
        _id: "abcd124",
        iafNo: 199010687,
        name: "נורת הלוגן 30W מסוג T10",
        available: false,
        providerId: null,
        manufacturerId: null,
        marketCatalogNo: null,
        price: null,
        notes: [],
        datasheet: null, // Datasheet PDF URL
        manual: null, // Manual PDF URL
    },
    {
        _id: "abcd125",
        iafNo: 199010695,
        name: 'נורת הלוגן 45W מסוג T10',
        available: false,
        providerId: null,
        manufacturerId: null,
        marketCatalogNo: null,
        price: null,
        notes: [
            "כיסוי זה מיועד להחלפה בגופי תאורה הלוגן חדשים או בגופי LED",
        ],
        datasheet: null, // Datasheet PDF URL
        manual: null, // Manual PDF URL
    },
    {
        _id: "abcd126",
        iafNo: 199010661,
        name: 'מפזר זכוכית לג"ת בעוצמה נמוכה ישן',
        available: false,
        providerId: null,
        manufacturerId: null,
        marketCatalogNo: null,
        price: null,
        notes: [
            "מפזר זה מיועד להחלפה בגופי תאורה הלוגן חדשים או בגופי LED",
        ],
        datasheet: null, // Datasheet PDF URL
        manual: null, // Manual PDF URL
    },
    {
        _id: "abcd127",
        iafNo: 199010646,
        name: 'מפזר פלסטיק לג"ת בעוצמה נמוכה ישן',
        available: false,
        providerId: null,
        manufacturerId: null,
        marketCatalogNo: null,
        price: null,
        notes: [
            "מפזר זה מיועד להחלפה בגופי תאורה הלוגן חדשים או בגופי LED",
        ],
        datasheet: null, // Datasheet PDF URL
        manual: null, // Manual PDF URL
    },
    {
        _id: "abcd128",
        iafNo: 199010653,
        name: 'פס חיבור לג"ת בעוצמה נמוכה ישן',
        available: false,
        providerId: null,
        manufacturerId: null,
        marketCatalogNo: null,
        price: null,
        notes: [
            "פס זה מיועד להחלפה בגופי תאורה הלוגן חדשים או בגופי LED",
        ],
        datasheet: null, // Datasheet PDF URL
        manual: null, // Manual PDF URL
    },
    {
        _id: "abcd129",
        iafNo: 199010794,
        name: 'פס חיבור לג"ת בעוצמה נמוכה ישן',
        available: false,
        providerId: null,
        manufacturerId: null,
        marketCatalogNo: null,
        price: null,
        notes: [
            "פס זה מיועד להחלפה בגופי תאורה הלוגן חדשים או בגופי LED",
        ],
        datasheet: null, // Datasheet PDF URL
        manual: null, // Manual PDF URL
    },
    {
        _id: "abcd130",
        iafNo: 199010778,
        name: 'פס חיבור לג"ת בעוצמה נמוכה ישן',
        available: false,
        providerId: null,
        manufacturerId: null,
        marketCatalogNo: null,
        price: null,
        notes: [
            "פס זה מיועד להחלפה בגופי תאורה הלוגן חדשים או בגופי LED",
        ],
        datasheet: null, // Datasheet PDF URL
        manual: null, // Manual PDF URL
    },
    {
        _id: "abcd131",
        iafNo: 199686627,
        name: 'פס חיבור לג"ת בעוצמה נמוכה ישן',
        available: false,
        providerId: null,
        manufacturerId: null,
        marketCatalogNo: null,
        price: null,
        notes: [
            "פס זה מיועד להחלפה בגופי תאורה הלוגן חדשים או בגופי LED",
        ],
        datasheet: null, // Datasheet PDF URL
        manual: null, // Manual PDF URL
    },
    {
        _id: "abcd132",
        iafNo: 199011347,
        name: 'פס חיבור לג"ת בעוצמה נמוכה ישן',
        available: false,
        providerId: null,
        manufacturerId: null,
        marketCatalogNo: null,
        price: null,
        notes: [
            "פס זה מיועד להחלפה בגופי תאורה הלוגן חדשים או בגופי LED",
        ],
        datasheet: null, // Datasheet PDF URL
        manual: null, // Manual PDF URL
    },
];

export const providers = [{
    _id: "energotech",
    name: "אנרגוטק",
    phone: "Provider Phone",
    email: "omri@energotech.co.il",
    website: "https://energotech.co.il",
    logo: "./images/logos/energotech.png",
    products: [199011503],
}];