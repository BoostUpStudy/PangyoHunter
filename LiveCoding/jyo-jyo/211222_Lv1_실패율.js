function solution(N, stages) {
    stages = stages.sort((a, b) => a - b);
    let prev_stage = stages[0];
    let rest = stages.length;
    let count = 0;
    const temp = new Array(N).fill(0).reduce((acc, value, index) => {
        acc[index+1] = value;
        return acc;
    }, {});
    
    for(let i = 0; i < stages.length; i++){
        const curr_stage = stages[i];
        if(curr_stage === prev_stage)
            count++;
        else{
            temp[prev_stage] = count / rest;
            rest -= count;
            prev_stage = curr_stage;
            count = 1;
        }
    }
    if(count > 0 && N >= stages[stages.length - 1]){
        temp[stages[stages.length - 1]] = count / rest;
    }
    const result = Object.keys(temp).sort((a, b) => temp[b] - temp[a]);
    return result.map((value) => Number(value));
}
