class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9- ']+/g, '');
    

  }
  static titleize(str){
    let exception = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let words = str.split(" ")
    let wordStr ="";
   let k =0;

for (let i = 0; i < words.length; i++) {
   if(words[i] === "the" || words[i] === "a" ||
     words[i] === "an" || words[i] === "but" ||
     words[i] === "of" || words[i] === "and" ||
     words[i] === "for" || words[i] === "at"||
     words[i] === "by" || words[i] === "from" ){
        wordStr += words[i].charAt(0).toLowerCase() + words[i].slice(1);
        if(i + 1 < words.length){wordStr += " "
      }}
   else{
      wordStr += words[i].charAt(0).toUpperCase() + words[i].slice(1);
        if(i + 1 < words.length){wordStr += " "
      
   }}
      
}




   
   return wordStr.charAt(0).toUpperCase() + wordStr.slice(1);

}


}