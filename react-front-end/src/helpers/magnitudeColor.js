export default function colorMaker(magnitude) {

  if (magnitude <= 5.5) {
    return "lightgreen"
  } else if (magnitude > 5.5 && magnitude <= 6.5) {
    return "yellow"
  } else if (magnitude > 6.5 && magnitude <= 7.5) {
    return "orange"
  } else {
    console.log(magnitude)
    return "red"
  }

}
