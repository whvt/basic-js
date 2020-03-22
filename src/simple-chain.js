const chainMaker = {
  res: [],

  getLength() {
    return this.res.length
  },
  
  addLink(value) {
    this.res.push(`( ${value} )`);
    return this
  },

  removeLink(position) {
    if ( (typeof position !== 'number') || position - 1 < 0 || this.res.length < position) {
      this.res = [];
      throw new Error()
    }
    this.res.splice(--position, 1);
    return this
  },

  reverseChain() {
    this.res.reverse();
    return this
  },

  finishChain() {
   const nresult = this.res.join('~~');
   this.res = [];
   return nresult;
  }

};

module.exports = chainMaker;