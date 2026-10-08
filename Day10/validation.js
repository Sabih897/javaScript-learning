export function validate(name,price,category) {
    if (!name || !price || !category) {
    throw new Error("All fields are mandatory");
  }

  if (typeof name !== 'string') {
    throw new Error("name should be of string type");
  }
  if (typeof price !== 'number') {
    throw new Error("price should be of type number");
  }
   if (typeof category !== 'string') {
    throw new Error("categoryshould be of string type");
  }

}
