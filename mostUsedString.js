const countingChar = (str) =>{
    const charCount = {};
    let maxCharCount = 0;
    let maxChar = '';
    for(let i = 0; i < str.length; i++){
        charCount[str[i]] = ++charCount[str[i]] || 1;
    }
    for(let key in charCount){
        if(charCount[key] >= maxCharCount){
            maxCharCount = charCount[key]
            maxChar = key;
        }
    }
    return maxChar;
}