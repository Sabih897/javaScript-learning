export function validate(data) {
  let valid = true;
  data.foreach((el) => {
    if (el.id && el.name && el.lastActive) {
    } else {
      valid = false;
    }
  });
  return valid;
}
