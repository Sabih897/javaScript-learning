console.log(process.version);
console.log(process.platform);
console.log(process.cwd());
console.log(process.argv);
console.log(process.env.USERNAME);


const port = process.env.PORT || 3000;

console.log(`Server is running on port ${port}`);
