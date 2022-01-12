function solution(cacheSize, cities) {
  let cache = [];
  let answer = 0;
  cities = cities.map((val) => val.toLowerCase());
  if (cacheSize === 0) return 5 * cities.length;
  for (let i = 0; i < cities.length; i++) {
    if (cache.includes(cities[i])) {
      answer++;
      cache = cache.filter((val) => val != cities[i]);
    } else {
      answer += 5;
      if (cache.length >= cacheSize) cache.shift();
    }
    cache.push(cities[i]);
  }
  return answer;
}
