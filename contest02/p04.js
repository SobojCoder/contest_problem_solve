function findLongestWord(sentence) {
  if(sentence === ""){
    return "";
  }
    const words = sentence.split(" ");
    
    let firstWord = "";
    for(let word of words){
        let secondWord = "";
        for(let i=0; i<word.length;i++){
            if(word[i]>="a" && word[i]<="z" || word[i]>="A" && word[i]<="Z" || word[i]>="0" && word[i]<= "9"){
                secondWord += word[i];
            }
        }
        if(secondWord.length > firstWord.length){
            firstWord = secondWord;
        }
    } 
    return firstWord
}

console.log(findLongestWord("hello, world"))