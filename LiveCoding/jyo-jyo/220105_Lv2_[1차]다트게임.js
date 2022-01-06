function solution(dartResult) {
    const SCORE = {
        'S': 1,
        'D': 2,
        'T': 3
    }
    const splited_result = dartResult.match(/\d\d?[SDT][*#]?/g);
    const result = [];
    splited_result.forEach((value, index) => {
        let num = '';
        while(+value[0] || value[0] === '0'){
            num += value[0];
            value = value.slice(1);
        }
        const score = Math.pow(+num, SCORE[value[0]]);
        if(value.length < 2){
            result.push(score);
            return;
        }
        if(value[1] === '*'){
            if(index > 0)
                result[index-1] *= 2;
            result.push(score*2);
        }else{
            result.push(-score);
        }
        return;
    });
    return result.reduce((acc, value) => acc + value)
}
