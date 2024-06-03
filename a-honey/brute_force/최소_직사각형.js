function solution(sizes) {
    let max_width = 0;
    let max_height = 0;
    
    sizes.forEach(size => {
        const [w, h] = size;
        const width = Math.max(w, h);
        const height = Math.min(w, h);
        
        if (width > max_width) max_width = width;
        if (height > max_height) max_height = height;
    });
    
    return max_width * max_height;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));
console.log(solution(([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])))
