/**
 * Single source of truth for all editable restaurant content.
 * Update hours, contact details, menu items and prices here — the pages read from this file.
 */

export const RESTAURANT = {
  name: "Rooftop Soi3",
  tagline: "Kebabs, skyline & string lights above Dhanmondi",
  cuisine: "Asian fusion · Chinese · Kebab house",
  address: {
    line1: "R Plaza, Satmasjid Road",
    line2: "Dhanmondi, Dhaka 1209, Bangladesh",
  },
  phone: "+880 1700-000000",
  phoneHref: "tel:+8801700000000",
  email: "hello@rooftopsoi3.com",
  website: "http://rooftopsoi3.com/",
  mapEmbed:
    "https://www.google.com/maps?q=R%20Plaza%2C%20Satmasjid%20Road%2C%20Dhanmondi%2C%20Dhaka%201209&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=R+Plaza,+Satmasjid+Road,+Dhanmondi,+Dhaka+1209",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
} as const;

export const HOURS = [
  { day: "Monday – Thursday", time: "12:00 PM – 11:00 PM" },
  { day: "Friday", time: "3:00 PM – 12:00 AM" },
  { day: "Saturday – Sunday", time: "12:00 PM – 12:00 AM" },
] as const;

export type MenuItem = {
  name: string;
  description: string;
  /** Price in BDT (৳) */
  price: number;
  tags?: Array<"spicy" | "chef's special" | "vegetarian">;
};

export type MenuCategory = {
  id: string;
  label: string;
  blurb: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "kebabs",
    label: "Kebabs & Grills",
    blurb: "Charcoal-fired over open flame, served sizzling off the skewer.",
    items: [
      {
        name: "Beef Sheek Kebab",
        description: "Hand-minced beef, green chilli and warm spices on the skewer.",
        price: 420,
        tags: ["spicy", "chef's special"],
      },
      {
        name: "Afghan Malai Kebab",
        description: "Cream and cheese marinated chicken, mild and buttery.",
        price: 460,
        tags: ["chef's special"],
      },
      {
        name: "Chicken Reshmi Kebab",
        description: "Silky yoghurt-marinated chicken with cashew paste.",
        price: 440,
      },
      {
        name: "Peshwari Chicken",
        description: "Peshawari-style spiced chicken, slow grilled on the bone.",
        price: 520,
        tags: ["spicy"],
      },
      {
        name: "Tandoori Chicken (Half)",
        description: "Classic tandoor-roasted chicken with mint chutney.",
        price: 490,
      },
      {
        name: "BBQ Chicken Platter",
        description: "Smoky barbecue chicken with grilled vegetables and salad.",
        price: 560,
      },
    ],
  },
  {
    id: "breads",
    label: "Naan & Breads",
    blurb: "Baked to order in the clay tandoor.",
    items: [
      {
        name: "Rooftop Soi3 Special Naan",
        description: "Our signature stuffed naan with cheese, herb butter and nuts.",
        price: 220,
        tags: ["chef's special", "vegetarian"],
      },
      {
        name: "Butter Naan",
        description: "Soft tandoori naan brushed with melted butter.",
        price: 90,
        tags: ["vegetarian"],
      },
      {
        name: "Garlic Naan",
        description: "Roasted garlic and coriander.",
        price: 120,
        tags: ["vegetarian"],
      },
      {
        name: "Tandoori Roti",
        description: "Whole-wheat roti straight from the tandoor.",
        price: 60,
        tags: ["vegetarian"],
      },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    blurb: "Asian-leaning pastas built for sharing.",
    items: [
      {
        name: "Chicken Alfredo",
        description: "Fettuccine in parmesan cream with grilled chicken.",
        price: 540,
      },
      {
        name: "Spicy Arrabbiata",
        description: "Penne, roasted tomato, bird's eye chilli and basil.",
        price: 480,
        tags: ["spicy", "vegetarian"],
      },
      {
        name: "Prawn Aglio e Olio",
        description: "Garlic, olive oil, chilli flakes and river prawns.",
        price: 690,
      },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    blurb: "Fresh from the coast, grilled or wok-tossed.",
    items: [
      {
        name: "Grilled Prawn Platter",
        description: "Six jumbo prawns, lemon butter and herb rice.",
        price: 890,
        tags: ["chef's special"],
      },
      {
        name: "Chilli Garlic Fish",
        description: "Wok-tossed fillet in chilli garlic sauce.",
        price: 640,
        tags: ["spicy"],
      },
      {
        name: "Thai Style Steamed Fish",
        description: "Lemongrass, lime and coriander broth.",
        price: 720,
      },
    ],
  },
  {
    id: "steaks",
    label: "Steaks",
    blurb: "Cut thick, rested properly, sauced to order.",
    items: [
      {
        name: "American Steak",
        description: "Grilled beef steak with black pepper sauce and fries.",
        price: 950,
        tags: ["chef's special"],
      },
      {
        name: "Mushroom Steak",
        description: "Tenderloin in creamy mushroom sauce with buttered vegetables.",
        price: 980,
      },
      {
        name: "Chicken Steak",
        description: "Grilled chicken breast, demi-glace and mashed potato.",
        price: 720,
      },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    blurb: "Coolers and mocktails for the warm Dhaka evening.",
    items: [
      {
        name: "Rooftop Sunset Cooler",
        description: "Orange, passionfruit and mint over crushed ice.",
        price: 260,
        tags: ["chef's special"],
      },
      { name: "Fresh Lime Mint", description: "Lime, mint and soda.", price: 180 },
      { name: "Mango Lassi", description: "Sweet yoghurt and ripe mango.", price: 220 },
      { name: "Masala Tea", description: "Spiced milk tea, brewed to order.", price: 90 },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    blurb: "A sweet finish under the string lights.",
    items: [
      {
        name: "Molten Chocolate Lava",
        description: "Warm chocolate cake with vanilla ice cream.",
        price: 320,
        tags: ["chef's special"],
      },
      { name: "Crème Caramel", description: "Silky baked custard, burnt sugar.", price: 260 },
      { name: "Kulfi Falooda", description: "Saffron kulfi, vermicelli and rose.", price: 280 },
    ],
  },
];

export const REVIEWS = [
  {
    name: "Farhana R.",
    rating: 5,
    quote:
      "The skyline at sunset plus that special naan — easily the best rooftop evening we've had in Dhanmondi.",
  },
  {
    name: "Tanvir A.",
    rating: 5,
    quote:
      "Afghan malai kebab was unreal. Open-air seating, breeze, city lights. Perfect date spot.",
  },
  {
    name: "Nusrat J.",
    rating: 4,
    quote:
      "Came with eight friends and the staff sorted a long table on the terrace without any fuss.",
  },
];
