export type ProductSlug =
  | "bath-towels"
  | "hand-towels"
  | "face-towels"
  | "hotel-towels"
  | "beach-towels"
  | "kitchen-towels"
  | "hotel-bathrobes"
  | "spa-bathrobes"
  | "waffle-bathrobes"
  | "terry-bathrobes"
  | "duvet-covers"
  | "bed-sheets"
  | "fitted-sheets"
  | "pillowcases"
  | "bedding-sets"
  | "hotel-bed-linen"
  | "ranforce"
  | "cotton-satin"
  | "poplin"
  | "muslin"
  | "panama-duck"
  | "printed-fabrics";

export type CategorySlug = "towels" | "bathrobes" | "bedding" | "fabrics";

export type Product = {
  slug: ProductSlug;
  image: string;
  specs: {
    material: string;
    weight: string;
    options: string;
  };
};

export type Category = {
  slug: CategorySlug;
  image: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    slug: "towels",
    image: "/images/towels.jpg",
    products: [
      {
        slug: "bath-towels",
        image: "/images/bathroom.jpg",
        specs: {
          material: "100% cotton terry",
          weight: "400–700 GSM",
          options: "Hotel, retail and custom sizes",
        },
      },
      {
        slug: "hand-towels",
        image: "/images/towels.jpg",
        specs: {
          material: "100% cotton terry",
          weight: "400–550 GSM",
          options: "Matching bath collections",
        },
      },
      {
        slug: "face-towels",
        image: "/images/spa.jpg",
        specs: {
          material: "Cotton terry or velour",
          weight: "350–500 GSM",
          options: "Spa, hotel and retail packs",
        },
      },
      {
        slug: "hotel-towels",
        image: "/images/hotel.jpg",
        specs: {
          material: "Ring-spun or open-end cotton",
          weight: "450–650 GSM",
          options: "Dobby borders, logos, colour programs",
        },
      },
      {
        slug: "beach-towels",
        image: "/images/beach.jpg",
        specs: {
          material: "Cotton terry or velour print",
          weight: "350–500 GSM",
          options: "Large formats, jacquard and print",
        },
      },
      {
        slug: "kitchen-towels",
        image: "/images/kitchen.jpg",
        specs: {
          material: "Cotton terry, waffle or woven",
          weight: "250–400 GSM",
          options: "Retail sets and hospitality use",
        },
      },
    ],
  },
  {
    slug: "bathrobes",
    image: "/images/hero.jpg",
    products: [
      {
        slug: "hotel-bathrobes",
        image: "/images/hero.jpg",
        specs: {
          material: "Cotton terry or velour",
          weight: "350–450 GSM",
          options: "Kimono or shawl collar, embroidery",
        },
      },
      {
        slug: "spa-bathrobes",
        image: "/images/spa.jpg",
        specs: {
          material: "Cotton terry, velour or waffle",
          weight: "300–420 GSM",
          options: "Lightweight spa programs",
        },
      },
      {
        slug: "waffle-bathrobes",
        image: "/images/spa-towels.jpg",
        specs: {
          material: "Cotton waffle",
          weight: "220–320 GSM",
          options: "Fast-dry, year-round programs",
        },
      },
      {
        slug: "terry-bathrobes",
        image: "/images/bathroom.jpg",
        specs: {
          material: "Cotton terry",
          weight: "380–500 GSM",
          options: "Retail and hotel collections",
        },
      },
    ],
  },
  {
    slug: "bedding",
    image: "/images/white-bed.jpg",
    products: [
      {
        slug: "duvet-covers",
        image: "/images/white-bed.jpg",
        specs: {
          material: "Cotton ranforce, poplin or satin",
          weight: "120–300 TC",
          options: "Hotel and retail sizes",
        },
      },
      {
        slug: "bed-sheets",
        image: "/images/satin.jpg",
        specs: {
          material: "Cotton ranforce, poplin or satin",
          weight: "120–300 TC",
          options: "White programs and colour stories",
        },
      },
      {
        slug: "fitted-sheets",
        image: "/images/hotel-bed.jpg",
        specs: {
          material: "Cotton ranforce, poplin or satin",
          weight: "120–300 TC",
          options: "Deep-pocket hotel mattresses",
        },
      },
      {
        slug: "pillowcases",
        image: "/images/pillows.jpg",
        specs: {
          material: "Matching bedding fabrics",
          weight: "120–300 TC",
          options: "Oxford or housewife styles",
        },
      },
      {
        slug: "bedding-sets",
        image: "/images/bedding.jpg",
        specs: {
          material: "Coordinated cotton programs",
          weight: "120–300 TC",
          options: "Private label packaging",
        },
      },
      {
        slug: "hotel-bed-linen",
        image: "/images/hotel.jpg",
        specs: {
          material: "Durable cotton hotel fabrics",
          weight: "120–200 TC typical",
          options: "White rental and hotel programs",
        },
      },
    ],
  },
  {
    slug: "fabrics",
    image: "/images/fabric.jpg",
    products: [
      {
        slug: "ranforce",
        image: "/images/satin.jpg",
        specs: {
          material: "100% cotton ranforce",
          weight: "Approx. 60×60 / 70×70",
          options: "Plain, dyed and printed",
        },
      },
      {
        slug: "cotton-satin",
        image: "/images/white-bed.jpg",
        specs: {
          material: "Cotton satin",
          weight: "Higher-thread-count programs",
          options: "Hotel and premium retail",
        },
      },
      {
        slug: "poplin",
        image: "/images/cotton.jpg",
        specs: {
          material: "Cotton poplin",
          weight: "Crisp, durable weaves",
          options: "Sheets, uniforms and home use",
        },
      },
      {
        slug: "muslin",
        image: "/images/printed.jpg",
        specs: {
          material: "Cotton muslin",
          weight: "Light, breathable constructions",
          options: "Baby, summer and home textiles",
        },
      },
      {
        slug: "panama-duck",
        image: "/images/fabric.jpg",
        specs: {
          material: "Cotton panama / duck",
          weight: "Heavier plain weaves",
          options: "Upholstery, bags and home",
        },
      },
      {
        slug: "printed-fabrics",
        image: "/images/printed.jpg",
        specs: {
          material: "Cotton base cloths",
          weight: "According to selected fabric",
          options: "Custom print and colour matching",
        },
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProduct(categorySlug: string, productSlug: string) {
  const category = getCategory(categorySlug);
  return category?.products.find((product) => product.slug === productSlug);
}

export function getAllProducts() {
  return categories.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      category: category.slug,
    })),
  );
}
