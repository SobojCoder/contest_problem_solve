function findFirstUniqueChar(s) {
    for(let i=0;i<s.length;i++){
        let char = s[i];
        let count = 0

        for(let j=0;j<s.length;j++){
            if(s[j] === char){
                count++;
            }
        }
        if(count ===1){
            return char;
        }
    }
    return -1;
}
console.log(findFirstUniqueChar("aabbccfff"))