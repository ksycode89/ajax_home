

class estimate {

    constructor(param){
        this.unit=param;
       
    }

    getEstmate(unitType, width, height) { // wood 20 20 => 100*20*20
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
        {
            type: 'wood',
            price: 100
        },
        {
            type: 'plastic',
            price: 200
        },
        {
            type: 'iron',
            price: 300
        }


    ];
//     function isFind2(val) {
//         if(val.type === 'wood'){
//             return true;
//         }
//     }


//     let priceInfo2 = unitInfo.find(isFind2)

// console.log(`wood의 가격은 ${priceInfo2.price}`)

    
    let estmate = new estimate(unitInfo);

    let result = estmate.getEstmate('wood', 30, 20);
    // console.log(estmate.unit)

    estmate.addUnit( {
        type: 'ceramic',
        price: 400
    })





    console.log(result)