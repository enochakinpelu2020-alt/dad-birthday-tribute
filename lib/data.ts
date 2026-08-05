import { GalleryImage, TimelineEvent, BiographySection } from "./types";

// EDIT ME: Dad's name, used across the site
export const DAD_NAME = "Dad";

// EDIT ME: replace each src with a real photo path (e.g. "/images/dad-1.jpg")
// after adding your own images to the /public/images folder.
export const galleryImages: GalleryImage[] = [
  { id: "img-1", src: "/images/placeholder-1.svg", alt: "Dad smiling at a family gathering" },
  { id: "img-2", src: "/images/placeholder-2.svg", alt: "Dad as a young man" },
  { id: "img-3", src: "/images/placeholder-3.svg", alt: "Dad with the family on holiday" },
  { id: "img-4", src: "/images/placeholder-4.svg", alt: "Dad at work, early in his career" },
  { id: "img-5", src: "/images/placeholder-5.svg", alt: "Dad celebrating a birthday" },
  { id: "img-6", src: "/images/placeholder-6.svg", alt: "Dad with grandchildren" },
  { id: "img-7", src: "/images/placeholder-7.svg", alt: "Dad on his wedding day" },
  { id: "img-8", src: "/images/placeholder-8.svg", alt: "Dad relaxing at home" },
];

// EDIT ME: swap in Dad's real featured photo
export const heroPhoto = "/images/hero-photo.svg";

// EDIT ME: rewrite each section with Dad's real story
export const biographySections: BiographySection[] = [
  {
    id: "childhood",
    title: "Childhood",
    content:
      "Born into a close-knit family, [Dad's Name] grew up with a curiosity that never quite settled down. Replace this paragraph with a memory from his early years — the street he grew up on, the games he played, the sibling who could never keep up with him.",
  },
  {
    id: "career",
    title: "Career",
    content:
      "Over the years, [Dad's Name] built a career defined by discipline and quiet ambition. Replace this paragraph with the roles he held, the industry he shaped, and the milestones that made him proud to clock in every morning.",
  },
  {
    id: "family",
    title: "Family",
    content:
      "As a husband and father, [Dad's Name] gave more than he ever asked for in return. Replace this paragraph with how he met your mother, the family he built, and the small rituals that made your house a home.",
  },
  {
    id: "values",
    title: "Values",
    content:
      "Honesty, hard work, and patience — these are the values [Dad's Name] lived by and passed on. Replace this paragraph with the lessons he taught you, in his own words if you remember them.",
  },
  {
    id: "achievements",
    title: "Achievements",
    content:
      "From career milestones to personal triumphs, [Dad's Name] has plenty to be proud of. Replace this paragraph with the awards, promotions, or personal victories that mattered most to him.",
  },
  {
    id: "legacy",
    title: "Legacy",
    content:
      "What [Dad's Name] leaves behind is far more than memories — it's a way of living. Replace this paragraph with how his legacy shows up in the people around him today.",
  },
];

// EDIT ME: replace with real milestones from Dad's life
export const timelineEvents: TimelineEvent[] = [
  { id: "t1", year: "1958", title: "Born", description: "Welcomed into the world, the beginning of a remarkable story." },
  { id: "t2", year: "1976", title: "Finished School", description: "Graduated with big dreams and an even bigger work ethic." },
  { id: "t3", year: "1982", title: "Started His Career", description: "Took his first big step into the working world." },
  { id: "t4", year: "1988", title: "Got Married", description: "Found his partner in life and began a new chapter together." },
  { id: "t5", year: "1990", title: "Became a Father", description: "Welcomed his first child and stepped into the role he was born for." },
  { id: "t6", year: "2010", title: "Career Milestone", description: "Reached a career high point after years of dedication." },
  { id: "t7", year: "2020", title: "Became a Grandfather", description: "A new generation arrived to carry on the family's story." },
  { id: "t8", year: "2026", title: "Today", description: "Still going strong, still loved by everyone around him." },
];

// EDIT ME: replace with real banking details for gifts
export const giftDetails = {
  bankName: "First Trust Bank",
  accountName: "[Dad's Name]",
  accountNumber: "0123456789",
};
