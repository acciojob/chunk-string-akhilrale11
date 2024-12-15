function stringChop(str, size) {
    // If the string is null or size is not positive, return an empty array
    if (!str || size <= 0) {
        return [];
    }

    const chunks = [];
    // Loop through the string in increments of `size`
    for (let i = 0; i < str.length; i += size) {
        // Push each chunk into the array
        chunks.push(str.substring(i, i + size));
    }

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));
