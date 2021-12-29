const person = {};
const MAX_SIZE = 5;

function addStr(str, start_index, arr, index){
    let result = [];
    if(str.length === MAX_SIZE-1){
        const value = str.join('');
        const score = +arr[start_index];
        if(person[value])
            person[value].push(score);
        else
            person[value] = [score];
        
        return;
    }
    addStr([...str, arr[start_index]], start_index+1, arr, index);
    addStr([...str, '-'], start_index+1, arr, index);
}


function solution(info, query) {
    info = info.map((value, index) => addStr('', 0, value.split(' '), index));
    const result = [];
    
    Object.keys(person).forEach((value) => {
        person[value].sort((a, b) => a - b);
    })
    
    query.forEach((value, index) => {
        const arr = value.replace(/ *and */g, ' ').split(' ');
        const score = arr.pop();
        const str = arr.join('');
        const curr_arr = person[str];
        if(!curr_arr) {
            result.push(0);
            return;
        };
        let mid, left = 0, right = curr_arr.length;
        while(left <= right){
            mid = Math.floor((left+right) / 2);
            if(curr_arr[mid] < score)
                left = mid + 1;
            else
                right = mid - 1;
        }
        
        result.push(curr_arr.length - left);
        
    })
    
    return result;
}
