function convertToCamelCase(sentence){
    const words = sentence.trim().split(" ");
        const firstWord = words[0].charAt(0).toLowerCase() + words[0].slice(1).toLowerCase();  
        const otherWords = words.slice(1).map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });

        return [firstWord,...otherWords].join('');
}
console.log(convertToCamelCase("I Love JavaScript Programming"))