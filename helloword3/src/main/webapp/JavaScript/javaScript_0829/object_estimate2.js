class Estimate {
    constructor(param) {
        this.unit = param;
    }
    // 재료와 부피정보
    getEstimate(unitType, width, height) { // wood 20 20 => 100*20*20
        let priceInfo = this.unit.find(function(val) {
            return val.type == unitType;
        })

        return priceInfo.price * width * height;
    }
    addUnit(unit) {
        this.unit.push(unit);
    }
}

let unitInfo = [
    {type: 'wood', price: 100},
    {type: 'iron', price: 300},
    {type: 'plastic', price: 200}
];

let estmate = new Estimate(unitInfo);
let result = estmate.getEstimate('wood', 30, 50);

estmate.addUnit({type: 'ceramic', price: 400})
// result = estmate.getEstimate('ceramic', 20, 80)

console.log(`계산 값은 ${result}`);