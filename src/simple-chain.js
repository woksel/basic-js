const chainMaker = {
  content: [],
  getLength() {
    return this.content.length;
  },
  addLink(value) {
    this.content.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.content.length || position <= 0) {
      this.content = [];
      throw new Error();
    }

    this.content.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.content.reverse();
    return this;
  },
  finishChain() {
    const s = this.content.reduce((acc, item, index, arr) => `${acc}( ${item} )${index == arr.length - 1 ? '' : '~~'}`, '');
    this.content = [];
    return s;
  }
};

module.exports = chainMaker;
