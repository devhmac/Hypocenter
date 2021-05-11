export default function magnitudeColor(magnitude, pager) {

  if (magnitude > 7.5 || pager === "red") {
    return "red"
  } else if ((magnitude > 6.5 && magnitude <= 7.5) || pager === "orange") {
    return "orange"
  } else if ((magnitude > 5.5 && magnitude <= 6.5) || pager === "yellow") {
    return "yellow"
  } else {
    return "lightgreen"
  }
};
