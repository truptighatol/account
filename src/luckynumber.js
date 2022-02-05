import React from 'react';

const LuckyNumber = props =>{
    let LuckyNumber = 1,
    start = 1,
    end = 9999;

    const getSingleDigit =()=>{
        let LuckyNumber = 1,
        start = 1,
        end = 9999;
        for (var i = start; i <= end; i++) {
            // if i = 5555 then 5+5+5+5 = 20; then 2+0 = 2;
        // if 2 == LuckyNumber then push in array else ignore
            var digitSum = i.toString().split('').map(iNum => parseInt(iNum,10));
         }
         console.log(digitSum);
         var luckyNumberArray= [];
         return digitSum >= 10 ? getSingleDigit(digitSum) : digitSum;
    }
    return(
        <div>Test Demo</div>
    )
}

export default LuckyNumber;