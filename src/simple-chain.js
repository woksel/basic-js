const chainMaker = {
  sChain : [],
  getLength() {
    return this.sChain.length;
  },
  addLink(value) {
    this.sChain.push(value);
    return this;
  },
  removeLink(position) {
    if(typeof (position)!== 'number'){
        this.sChain = [];
        throw new Error();
    }
      if(position-1 < 0 || position-1 >= this.getLength()){
          this.sChain = [];
          throw new Error();
      }
    this.sChain.splice(--position,1);
      return this;
  },
  reverseChain() {
    this.sChain.reverse();
      return this;
  },
  finishChain() {
    let chainString = '';
    for(let i = 0;i<this.sChain.length;i++){
      if(i<this.sChain.length-1 ){
          chainString+= '( ' + this.sChain[i] + ' )' + '~~';
      }
      else{
          chainString+= '( ' + this.sChain[i] + ' )';
      }
    }
    this.sChain=[];
    return chainString;
  }
};

module.exports = chainMaker;