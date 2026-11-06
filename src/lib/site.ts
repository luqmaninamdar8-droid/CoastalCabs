export const siteName = "Coastal Cabs";

export const phoneDisplay = "+91 95112 40399";
export const phoneTel = "+919511240399";
export const whatsappNumber = "919511240399";
export const email = "sayedashpak24@gmail.com";

export const address = {
  line1: "Shop 4, St. Anthony Ward",
  line2: "Calangute–Baga Road, Bardez",
  city: "Goa 403516",
  maps: "https://www.google.com/maps/search/?api=1&query=Calangute+Baga+Road+Goa",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const otherPlace = "Other place in Goa" as const;

export const places = [
  "Mopa Airport (GOX)",
  "Dabolim Airport (GOI)",
  "Panaji",
  "Porvorim",
  "Mapusa",
  "Candolim",
  "Calangute",
  "Baga",
  "Anjuna",
  "Vagator",
  "Morjim",
  "Arambol",
  "Old Goa",
  "Margao",
  "Colva",
  "Benaulim",
  "Agonda",
  "Palolem",
  "Dudhsagar",
  otherPlace,
] as const;

export type Place = (typeof places)[number];

export const cabs = [
  {
    id: "sedan",
    name: "Sedan",
    cars: "Dzire, Amaze, or similar",
    seats: "4 guests",
    bags: "2 medium bags",
    bestFor: "Couples, solo flyers, and short beach hops",
    startsAt: 1800,
    points: ["Air conditioning", "Bottled water", "Phone charger"],
  },
  {
    id: "suv",
    name: "SUV",
    cars: "Ertiga or Carens",
    seats: "6 guests",
    bags: "4 medium bags",
    bestFor: "Families landing with a full trolley",
    startsAt: 2400,
    points: ["Three rows", "Airport name board", "Child seat on request"],
  },
  {
    id: "premium",
    name: "Innova",
    cars: "Crysta or Hycross",
    seats: "6 or 7 guests",
    bags: "5 medium bags",
    bestFor: "Long days to Dudhsagar or Palolem",
    startsAt: 2900,
    points: ["Quieter cabin", "Extra legroom", "Cooler box on request"],
  },
  {
    id: "tempo",
    name: "Tempo",
    cars: "Force Traveller",
    seats: "12 guests",
    bags: "10 medium bags",
    bestFor: "Wedding parties and friend groups",
    startsAt: 4500,
    points: ["Push-back seats", "One pickup point", "PA on request"],
  },
] as const;

export type CabId = (typeof cabs)[number]["id"];

export type Prices = Record<CabId, number>;

export type Fare = {
  from: string;
  to: string;
  km: number;
  minutes: number;
} & Prices;

export const defaultRide = {
  from: "Mopa Airport (GOX)" as Place,
  to: "Calangute" as Place,
  cab: "sedan" as CabId,
};

export const fares: Fare[] = [
  { from: "Mopa Airport (GOX)", to: "Calangute", km: 42, minutes: 70, sedan: 2200, suv: 2800, premium: 3400, tempo: 5200 },
  { from: "Mopa Airport (GOX)", to: "Panaji", km: 36, minutes: 55, sedan: 1800, suv: 2400, premium: 2900, tempo: 4500 },
  { from: "Mopa Airport (GOX)", to: "Palolem", km: 98, minutes: 160, sedan: 4500, suv: 5600, premium: 6500, tempo: 8600 },
  { from: "Dabolim Airport (GOI)", to: "Calangute", km: 38, minutes: 75, sedan: 1800, suv: 2400, premium: 3000, tempo: 4600 },
  { from: "Dabolim Airport (GOI)", to: "Baga", km: 40, minutes: 80, sedan: 1900, suv: 2500, premium: 3100, tempo: 4700 },
  { from: "Dabolim Airport (GOI)", to: "Palolem", km: 62, minutes: 100, sedan: 2800, suv: 3500, premium: 4200, tempo: 6000 },
  { from: "Panaji", to: "Calangute", km: 16, minutes: 35, sedan: 900, suv: 1200, premium: 1600, tempo: 2500 },
  { from: "Calangute", to: "Anjuna", km: 14, minutes: 30, sedan: 800, suv: 1100, premium: 1400, tempo: 2200 },
  { from: "Panaji", to: "Old Goa", km: 9, minutes: 20, sedan: 600, suv: 850, premium: 1100, tempo: 1800 },
  { from: "Margao", to: "Palolem", km: 37, minutes: 65, sedan: 1600, suv: 2100, premium: 2600, tempo: 4000 },
  { from: "Calangute", to: "Dudhsagar", km: 75, minutes: 130, sedan: 4800, suv: 5800, premium: 6800, tempo: 9000 },
  { from: "Candolim", to: "Mapusa", km: 10, minutes: 25, sedan: 600, suv: 800, premium: 1100, tempo: 1800 },
];

export const dayHires: ({ name: string; hours: number; km: number } & Prices)[] = [
  { name: "Half day", hours: 4, km: 40, sedan: 1600, suv: 2200, premium: 2800, tempo: 4200 },
  { name: "Full day", hours: 8, km: 80, sedan: 2800, suv: 3600, premium: 4500, tempo: 6800 },
  { name: "Long day", hours: 12, km: 120, sedan: 3900, suv: 5000, premium: 6200, tempo: 9000 },
];

export const extraRates: Prices = { sedan: 20, suv: 24, premium: 28, tempo: 36 };

export const fareNotes = [
  "Fares are starting one-way rates for a point-to-point drop. The desk confirms the figure on WhatsApp before the cab moves.",
  "The first 45 minutes after a domestic landing are included. After that, waiting is ₹150 per half hour.",
  "Rides between 10:00 pm and 6:00 am carry a 15% night addition.",
  "Tolls, parking, and Dudhsagar jeep tickets are extra and paid as they come.",
  "Kilometres past a day-hire package are billed at the per-km rate for that cab.",
];

export const faqs = [
  {
    q: "Do you meet flights at both airports?",
    a: "Yes. Mopa (GOX) and Dabolim (GOI). Send the flight number and the driver tracks the landing, then waits at arrivals with a name board.",
  },
  {
    q: "Can the fare change in traffic?",
    a: "Point-to-point airport and town drops stay on the confirmed fare. Day hires change only if you cross the included kilometres or hours.",
  },
  {
    q: "How do I pay?",
    a: "UPI or cash at the end of the ride. For tempo and wedding bookings we ask for a small advance on UPI to hold the vehicle.",
  },
  {
    q: "Do you take pets and child seats?",
    a: "A small pet in a carrier is fine if you mention it while booking. One child seat is free when it is requested a few hours ahead.",
  },
  {
    q: "Is Dudhsagar included in the cab fare?",
    a: "The cab fare covers the drive to the gate. Forest entry, the jeep, and parking are paid at the site and depend on the season.",
  },
];

export const services = [
  {
    title: "Airport transfers",
    text: "Meet-and-greet at Mopa and Dabolim, including late landings. The driver waits inside arrivals with your name.",
    points: ["Flight tracking", "45 minutes of waiting included", "Both terminals, any hour"],
  },
  {
    title: "Local hourly hire",
    text: "Keep the same cab for a beach hop, a market run, or a slow afternoon between Calangute and Anjuna.",
    points: ["4, 8, or 12 hour blocks", "Hotel-to-hotel drops", "Stops where you like"],
  },
  {
    title: "Outstation days",
    text: "Dudhsagar, Karwar, or a quiet drive down to Palolem and back, with a driver who knows the ghats.",
    points: ["Fixed day rate", "Hill-road SUVs", "Return the same evening or next day"],
  },
  {
    title: "Sightseeing",
    text: "North beaches, Old Goa, Fontainhas, and the spice hills, paced for photos rather than a checklist.",
    points: ["Printed-style plan on WhatsApp", "Entry tickets extra", "Sunset timed on request"],
  },
  {
    title: "Weddings and groups",
    text: "Tempos and a run of Innovas for baraat days, church weddings, and friend groups sharing one pickup.",
    points: ["12-seat Traveller", "Matched sedans for family", "Advance to hold the date"],
  },
  {
    title: "Hotel and casino drops",
    text: "Short night runs from Candolim, Sinquerim, and Panaji to the jetty or a casino boat, then home again.",
    points: ["On-call after dinner", "Return pickup by time", "No shared seating"],
  },
];

export type Tour = {
  slug: string;
  title: string;
  image: string;
  region: string;
  hours: string;
  from: number;
  summary: string;
  intro: string;
  stops: { time: string; place: string; note: string }[];
  included: string[];
  extra: string[];
};

export const tours: Tour[] = [
  {
    slug: "north-goa-beaches",
    title: "North Goa beaches",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=80",
    region: "Bardez",
    hours: "8 hours",
    from: 2800,
    summary: "A slow loop of Calangute, Baga, Anjuna, and Vagator with time to swim and eat.",
    intro:
      "Start after breakfast and stay on the sand as long as you like. The cab waits, so you are not watching a meter between beaches.",
    stops: [
      { time: "09:30", place: "Hotel pickup", note: "Calangute, Candolim, or Baga. Other hotels on the way are fine." },
      { time: "10:30", place: "Calangute and Baga", note: "A swim, or just the market lane if the tide is high." },
      { time: "13:00", place: "Anjuna", note: "Lunch on your own. Wednesday market if it is on." },
      { time: "15:30", place: "Vagator cliff", note: "A short stop above the cove before the drive back." },
      { time: "17:30", place: "Drop", note: "Hotel, or a sunset shack if you want to end on the beach." },
    ],
    included: ["Sedan and driver for 8 hours / 80 km", "Parking at the usual beach lots", "Bottled water"],
    extra: ["Meals", "Beach beds and sports", "Kilometres past the package"],
  },
  {
    slug: "south-goa",
    title: "South Goa quiet day",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    region: "Salcete and Canacona",
    hours: "10 hours",
    from: 3900,
    summary: "Colva, Benaulim, and a long stop at Palolem, away from the north-shore traffic.",
    intro:
      "South Goa is a longer drive and a slower day. Palolem is the point of the trip, with Colva as a first swim if you start from the north.",
    stops: [
      { time: "08:00", place: "Pickup", note: "Earlier if you are starting from Calangute or Mopa." },
      { time: "10:00", place: "Colva or Benaulim", note: "A wide beach and a short walk. Skip it if you want more time at Palolem." },
      { time: "12:30", place: "Palolem", note: "Swim, lunch, and the curve of the bay. The cab waits in the village lot." },
      { time: "16:00", place: "Agonda lookout", note: "Optional stop on the way back if the light is good." },
      { time: "18:30", place: "Drop", note: "North Goa hotels are a late return. South hotels finish sooner." },
    ],
    included: ["Sedan for the day", "Driver allowance", "Parking"],
    extra: ["Meals", "Boat rides at Palolem", "Night return addition after 10 pm"],
  },
  {
    slug: "old-goa",
    title: "Old Goa and Fontainhas",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1400&q=80",
    region: "Tiswadi",
    hours: "6 hours",
    from: 2200,
    summary: "Churches of Old Goa, then the painted lanes of Fontainhas and the Panaji riverfront.",
    intro:
      "A short heritage day that still leaves the evening free. Mornings are kinder on the church steps, before the courtyards heat up.",
    stops: [
      { time: "08:30", place: "Pickup", note: "Any north or Panaji hotel." },
      { time: "09:15", place: "Basilica of Bom Jesus", note: "Shoes off inside. The facade photos are from the lawn." },
      { time: "10:30", place: "Se Cathedral", note: "Across the road. We keep the stop unhurried." },
      { time: "12:00", place: "Fontainhas", note: "Walk the Latin quarter. The cab cannot enter the narrow lanes, so it waits on the edge." },
      { time: "13:30", place: "Panaji jetty", note: "Riverfront drop, or back to the hotel." },
    ],
    included: ["Sedan for 6 hours", "Waiting during the walks", "Parking at Old Goa"],
    extra: ["Church donations", "Cafe stops", "A later casino drop"],
  },
  {
    slug: "dudhsagar",
    title: "Dudhsagar waterfall",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=80",
    region: "Sanguem",
    hours: "Full day",
    from: 4800,
    summary: "A seasonal drive to the falls, with a clear note on jeep tickets and gate timings.",
    intro:
      "The waterfall is at its best in the monsoon and just after. The cab goes to the designated gate. The last stretch is a separate jeep booked at the site.",
    stops: [
      { time: "06:30", place: "Early pickup", note: "Gates reward an early start. We will say if the falls are closed." },
      { time: "09:00", place: "Gate and jeep queue", note: "Entry and the jeep are paid there, not to the cab driver." },
      { time: "11:00", place: "The falls", note: "Time on the rocks depends on the crowd and the water level." },
      { time: "14:00", place: "Lunch on the way back", note: "Mollem or a highway stop. You pay the restaurant." },
      { time: "17:30", place: "Hotel drop", note: "Later if the jeep queue was long." },
    ],
    included: ["Cab to the gate and back", "Driver for the day", "Waiting while you are at the falls"],
    extra: ["Forest entry", "Jeep", "Meals", "Days when the gate is shut"],
  },
  {
    slug: "spice-plantation",
    title: "Spice plantation and sunset",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80",
    region: "Ponda",
    hours: "8 hours",
    from: 3200,
    summary: "A plantation walk in the Ponda hills, then a sunset drop on the north coast.",
    intro:
      "The plantation tour itself is guided by the estate. We handle the drive, the timing, and a beach or riverfront end to the day.",
    stops: [
      { time: "09:00", place: "Pickup", note: "After breakfast works well. The estate tour is about an hour." },
      { time: "10:30", place: "Spice estate", note: "Sahakari or a similar Ponda plantation. Tickets bought at the gate." },
      { time: "13:00", place: "Lunch", note: "The estate thali, or a short drive to a quieter place." },
      { time: "16:00", place: "Return toward the coast", note: "We aim the drive so you hit the beach before the sun drops." },
      { time: "18:00", place: "Sunset drop", note: "Candolim, Calangute, or the Panaji promenade." },
    ],
    included: ["Sedan and driver for 8 hours / 80 km", "Parking", "Water"],
    extra: ["Plantation entry", "Lunch", "Elephant or extra shows at the estate"],
  },
];

export const coasts = [
  {
    name: "North Goa",
    places: ["Arambol", "Mandrem", "Morjim", "Anjuna", "Vagator", "Baga", "Calangute", "Candolim", "Mopa"],
  },
  {
    name: "Central Goa",
    places: ["Panaji", "Fontainhas", "Old Goa", "Porvorim", "Mapusa", "Bambolim"],
  },
  {
    name: "South Goa",
    places: ["Margao", "Colva", "Benaulim", "Betalbatim", "Agonda", "Palolem", "Dabolim"],
  },
];

export const steps = [
  {
    title: "Share the ride",
    text: "Pickup, drop, date, and how many bags. A flight number helps on airport runs.",
  },
  {
    title: "Lock the fare",
    text: "We answer on WhatsApp with the cab type and the price before the driver starts.",
  },
  {
    title: "Meet the driver",
    text: "At arrivals, the hotel gate, or the jetty. Pay by UPI or cash when you step out.",
  },
];

export const testimonials = [
  {
    quote: "Landed at Mopa after midnight. The name board was there, and the fare was the one they sent on WhatsApp.",
    name: "Neha K.",
    from: "Pune",
    trip: "Mopa to Candolim",
  },
  {
    quote: "We kept the Innova for a full south day and never felt rushed between Palolem and the drive back.",
    name: "Adam P.",
    from: "London",
    trip: "Full-day south Goa",
  },
  {
    quote: "Old Goa in the morning, Fontainhas before lunch, and the same driver waiting at the lane. Easy with parents.",
    name: "Rohan D.",
    from: "Bengaluru",
    trip: "Heritage half day",
  },
];

export function inr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDrive(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return `${mins} min`;
  if (mins === 0) return `${hours} hr`;
  return `${hours} hr ${mins} min`;
}

export function isKnownPlace(value: string) {
  return (places as readonly string[]).includes(value);
}

export function isCabId(value: string): value is CabId {
  return cabs.some((cab) => cab.id === value);
}

export function cabById(value: string) {
  return cabs.find((cab) => cab.id === value) ?? cabs[0];
}

export function findFare(from: string, to: string) {
  return fares.find(
    (fare) =>
      (fare.from === from && fare.to === to) ||
      (fare.from === to && fare.to === from),
  );
}

export function getTour(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function firstParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export function ridePlace(selected: string, custom: string) {
  return selected === otherPlace ? custom.trim() : selected;
}

export function bookHref(input: {
  from?: string;
  to?: string;
  date?: string;
  cab?: string;
  note?: string;
  fromPlace?: string;
  toPlace?: string;
  name?: string;
  phone?: string;
  guests?: string;
}) {
  const params = new URLSearchParams();
  if (input.from) params.set("from", input.from);
  if (input.to) params.set("to", input.to);
  if (input.date) params.set("date", input.date);
  if (input.cab) params.set("cab", input.cab);
  if (input.note) params.set("note", input.note);
  if (input.fromPlace) params.set("fromPlace", input.fromPlace);
  if (input.toPlace) params.set("toPlace", input.toPlace);
  if (input.name) params.set("name", input.name);
  if (input.phone) params.set("phone", input.phone);
  if (input.guests) params.set("guests", input.guests);
  const query = params.toString();
  return query ? `/?${query}#ride` : "/#ride";
}

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function bookingMessage(draft: {
  name?: string;
  phone?: string;
  from?: string;
  to?: string;
  date?: string;
  time?: string;
  cab?: string;
  guests?: string;
  notes?: string;
}) {
  return [
    `Hello ${siteName}, I need a cab in Goa.`,
    draft.name?.trim() ? `Name: ${draft.name.trim()}` : "",
    draft.phone?.trim() ? `Phone: ${draft.phone.trim()}` : "",
    draft.from?.trim() ? `From: ${draft.from.trim()}` : "",
    draft.to?.trim() ? `To: ${draft.to.trim()}` : "",
    draft.date?.trim() ? `When: ${draft.date.trim()}${draft.time?.trim() ? ` at ${draft.time.trim()}` : ""}` : "",
    draft.cab?.trim() ? `Cab: ${draft.cab.trim()}` : "",
    draft.guests?.trim() ? `Guests: ${draft.guests.trim()}` : "",
    draft.notes?.trim() ? `Notes: ${draft.notes.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function cleanPhone(input: string) {
  const digits = input.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits;
}
