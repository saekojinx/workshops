function countConsonantsAndVowels(str) {
    var consonants = 0;
    var vowels = 0;
    
    // Loop through each character in the input string
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      
      // Check if the character is a vowel
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowels++;
      } else {
        consonants++;
      }
    }
    
    // Print the result
    console.log(str + " has " + consonants + " consonants and " + vowels + " vowels");
  }
  
  // Test cases
  countConsonantsAndVowels("hello");
  countConsonantsAndVowels("ukelele");
  countConsonantsAndVowels("awesome");
  countConsonantsAndVowels("onomonopia");
  countConsonantsAndVowels("textbook");