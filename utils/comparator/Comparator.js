export default class Comparator {
    static defaultCompareFunction (a, b) {
        if(a === b){
            return 0;
        }
        return a < b ? -1 : 1;
    }
    constructor(compareFunction) {
        this.compare= compareFunction || Comparator.defaultCompareFunction;
    }

    equal(a, b){
        return this.compare(a, b) === 0;
    }
    lessThan(a, b){
        return this.compare(a, b) < 0;
    }
    greaterThan(a, b){
        return this.compare(a, b) > 0;
    }
    lessThanOrEqual(a, b) {
        return this.lessThan(a, b) || this.equal(a, b);
    }
    greaterThanOrEqual(a, b) {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

};


