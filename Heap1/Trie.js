class SuffixTrieNode {
  constructor() {
    this.children = {};
    this.indexes = [];
  }
  insert(word, index) {
    this.indexes.push(index);
    if (word.length > 0) {
      const firstChar = word[0];
      let child;
      if (this.children[firstChar]) {
        child = this.children[firstChar];
      } else {
        child = new SuffixTrieNode();
        this.children[firstChar] = child;
      }
      child.insert(word.slice(1), index);
    }
  }
  search(word) {
    if (word.length === 0) {
      return this.indexes;
    }
    const firstChar = word[0];
    if (!this.children[firstChar]) {
      return null;
    }
    return this.children[firstChar].search(word.slice(1));
  }
}
class SuffixTrie {
  constructor(string) {
    this.root = new SuffixTrieNode();
    for (let i = 0; i < string.length; i++) {
      const suffix = string.slice(i);
      this.root.insert(suffix, i);
    }
  }
  search(word) {
    return this.root.search(word);
  }
}
// Example usage:
const suffixTrie = new SuffixTrie("banana");
console.log(suffixTrie.search("an")); // [1, 3]
console.log(suffixTrie.search("na")); // [2, 5]
console.log(suffixTrie.search("anana")); // [1]
console.log(suffixTrie.search("berry")); // null
