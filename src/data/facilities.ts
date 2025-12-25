export interface Facility {
  title: string;
  desc: string;
  icon: string;
  delay: string;
}

export const facilitiesData: Facility[] = [
  {
    title: "Olympic Class Pool",
    desc: "A massive infinity-edge swimming pool and a dedicated children's wading pool.",
    icon: "🌊",
    delay: "100"
  },
  {
    title: "Multi-Tier Security",
    desc: "24-hour guard patrol, CCTV surveillance, and card access for residents' peace of mind.",
    icon: "🛡️",
    delay: "200"
  },
  {
    title: "Lush Jogging Track",
    desc: "Beautifully landscaped tracks surrounding the 12-acre development for your daily exercise.",
    icon: "🏃",
    delay: "300"
  },
  {
    title: "Multi-Purpose Hall",
    desc: "A spacious community hall available for resident functions and JMB meetings.",
    icon: "🏛️",
    delay: "400"
  },
  {
    title: "Children's Playground",
    desc: "Safe and modern play equipment located within the greenery of the inner courts.",
    icon: "🎠",
    delay: "500"
  },
  {
    title: "Covered Parking",
    desc: "Dedicated 2-bay parking for most units with easy access to block elevators.",
    icon: "🚗",
    delay: "600"
  }
];