export const prosCons = [
  {
    id: 1,
    status: "failure",
    title: "Studying without SwiftStudy ❌",
    features: [
      "Overwhelming documents",
      "Manual flashcards",
      "Inefficient study sessions",
      "Hard to memorise traditionally",
      "Time consuming review process",
    ],
  },
  {
    id: 2,
    status: "success",
    title: "Studying with SwiftStudy ✅",
    features: [
      "Instant flashcards",
      "Microlearning boosting memory",
      "Spaced repetition",
      "Efficient study sessions",
      "Fast content reviews",
    ],
  },
];

export const pricingPlans = [
  {
    plan: "Free",
    price: "$0",
    quota: 1,
    features: [
      {
        text: "5 pages per PDF",
        footnote: "The maximum amount of pages per PDF-file.",
      },
      {
        text: "4MB file size limit",
        footnote: "The maximum file size of a single PDF file.",
      },
      {
        text: "Mobile-friendly interface",
      },
      {
        text: "Higher-quality responses",
        footnote: "Better algorithmic responses for enhanced content quality",
        negative: true,
      },
      {
        text: "Priority support",
        negative: true,
      },
    ],
  },
  {
    plan: "Pro",
    price: "$5",
    quota: 50,
    features: [
      {
        text: "25 pages per PDF",
        footnote: "The maximum amount of pages per PDF-file.",
      },
      {
        text: "16MB file size limit",
        footnote: "The maximum file size of a single PDF file.",
      },
      {
        text: "Mobile-friendly interface",
      },
      {
        text: "Higher-quality responses",
        footnote: "Better algorithmic responses for enhanced content quality",
      },
      {
        text: "Priority support",
      },
    ],
  },
];
