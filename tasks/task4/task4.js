const generateGoogleString = (times = 0) => `G${'o'.repeat(Math.max(2, times))}gle`

console.log(generateGoogleString(4));
// Goooogle

console.log(generateGoogleString(0));
// Google

console.log(generateGoogleString(-2));
// Google
