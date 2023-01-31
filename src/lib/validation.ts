export function validateInput(value: string) {
  if(value.length > 2) {
    return true;
  } else {
    return false;
  }
}