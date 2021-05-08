const pagerConversion = {
  red: {
    damage: "$1 Billion+",
    fatalities: "1,000+"
  },
  orange: {
    damage: "$100 Million - $1 Billion",
    fatalities: "100 - 999"
  },
  yellow: {
    damage: "$1 million - $100 million",
    fatalities: "1 - 99"
  },
  green: {
    damage: "Under $1 million",
    fatalities: "0"
  }
};

export default pagerConversion;