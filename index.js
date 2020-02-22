// Adds `reverse` to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  //returns prococessed content for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  //makes the phrase Louder.
  this.louder = function louder() {
    return this.content.toUpperCase();
  }
}

String.prototype.blank = function blank() {
  return !!(this.match(/^\s+$/));
}

Array.prototype.last = function last() {
  return this.slice(-1)
}
