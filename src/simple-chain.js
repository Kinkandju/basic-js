const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
*/

const chainMaker = {
  chain: [],

  // returns the current length of the chain
  getLength() {
    return this.chain.length;
  },

  // adds a new link to the chain
  addLink(value) {

    // the value provided is converted to a string 
    // representation and wrapped in parentheses
    const link = `( ${value} )`;
    this.chain.push(link);

    return this;
  },

  // removes a link from the chain based on the specified position. 
  removeLink(position) {
    const ERROR = "You can't remove incorrect link!";

    // it validates the position parameter to ensure it's a
    // valid number within the range of the chain's length
    if (typeof position !== 'number' || position < 1 || position > this.chain.length) {

      // if the position is invalid, it clears the chain and throws an error
      this.chain = [];
      throw new Error(ERROR);
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  // reverse the order of the links in the chain
  reverseChain() {
    this.chain.reverse();
    return this;
  },

  // ends the chain
  finishChain() {

    // joins the links with the '~~' separator
    const result = this.chain.join('~~');

    // clears the chain array
    this.chain = [];

    // returns the finished chain as a string
    return result;
  }
};

module.exports = {
  chainMaker
};
