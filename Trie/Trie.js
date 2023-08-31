// Define a class to represent a node in the suffix trie
class SuffixTrieNode {
    constructor() {
      this.children = {}; // Initialize an empty object to store child nodes
      this.indexes = []; // Initialize an empty array to store the indexes of the suffixes that end at this node
    }
  
    // Define a method to insert a word (suffix) and its index into the suffix trie
    insert(word, index) {
      this.indexes.push(index); // Add the current index to the array of indexes for this node
      if (word.length > 0) { // If the word has more than one character
        const firstChar = word[0]; // Get the first character of the word
        let child;
        if (this.children[firstChar]) { // If the first character already has a child node
          child = this.children[firstChar]; // Use the existing child node
        } else { // If the first character doesn't have a child node yet
          child = new SuffixTrieNode(); // Create a new child node
          this.children[firstChar] = child; // Add the new child node to the children object
        }
        child.insert(word.slice(1), index); // Recursively insert the remaining characters of the word into the child node
      }
    }
  
    // Define a method to search for a word in the suffix trie and return the indexes of the suffixes that end at the corresponding node
    search(word) {
      if (word.length === 0) { // If the word has no more characters
        return this.indexes; // Return the array of indexes for this node
      }
      const firstChar = word[0]; // Get the first character of the word
      if (!this.children[firstChar]) { // If the first character doesn't have a child node
        return null; // Return null to indicate that the word is not in the suffix trie
      }
      return this.children[firstChar].search(word.slice(1)); // Recursively search for the remaining characters of the word in the child node
    }
  }
  
  // Define a class to represent a suffix trie
  class SuffixTrie {
    constructor(string) {
      this.root = new SuffixTrieNode(); // Initialize the root node of the suffix trie
      for (let i = 0; i < string.length; i++) { // Iterate over each character in the input string
        const suffix = string.slice(i); // Extract the suffix that starts at the current position
        this.root.insert(suffix, i); // Insert the suffix and its index into the suffix trie
      }
    }
  
    // Define a method to search for a word in the suffix trie and return the indexes of the suffixes that end at the corresponding node
    search(word) {
      return this.root.search(word); // Call the search method of the root node to recursively search for the word in the suffix trie
    }
  }
  
  // Example usage:
  const suffixTrie = new SuffixTrie("banana"); // Create a new suffix trie with the input string "banana"
  console.log(suffixTrie.search("an")); // [1, 3] - The indexes of the suffixes "an" and "ana" in the input string
  console.log(suffixTrie.search("na")); // [2, 5] - The indexes of the suffixes "na" and "nana" in the input string
  console.log(suffixTrie.search("anana")); // [1] - The index of the suffix "anana" in the input string
  console.log(suffixTrie.search("berry")); // null
  