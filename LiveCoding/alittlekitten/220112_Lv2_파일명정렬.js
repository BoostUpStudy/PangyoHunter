const solution = (files) => {
    let answer = [];
    let result = [];
    
    for (let i = 0; i < files.length; ++i){
        let regExp = /(?<head>[^0-9]+)(?<number>\d+)(?<tail>.*)/i;
        const {head, number, tail} = files[i].match(regExp).groups;  
        answer.push({head, number, tail});        
    }
    
    answer = answer.sort((a, b)=>{
        if (a.head.toUpperCase() === b.head.toUpperCase()) return +a.number < +b.number ? -1 : 1;
        return a.head.toUpperCase() < b.head.toUpperCase() ? -1 : 1;
    });
    
    answer.forEach(elem=> {
        let tmp = elem.head + elem.number + elem.tail;
        result.push(tmp);
    })

    
    return result;
}
