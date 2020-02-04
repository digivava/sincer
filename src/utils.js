export function convertTime(millisec) {
  var seconds = (millisec / 1000).toFixed(0);
  var minutes = (millisec / (1000 * 60)).toFixed(0);
  var hours = (millisec / (1000 * 60 * 60)).toFixed(0);
  var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(0);

  if (seconds < 60) {
    return seconds + ' sec';
  } else if (minutes < 60) {
    return minutes + ' min';
  } else if (hours < 24) {
    return hours + ' hrs';
  } else {
    return days + ' days';
  }
}
