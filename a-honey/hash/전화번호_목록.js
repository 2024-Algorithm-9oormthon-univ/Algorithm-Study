function solution(phone_book) {
    const sorted_phone_book = phone_book.sort();
    
    for (let i = 0; i < sorted_phone_book.length - 1; i++) {
        if (sorted_phone_book[i + 1].startsWith(sorted_phone_book[i])) {
            return false;
        }
    }
  
    return true;
}

console.log(solution(["119", "97674223", "1195524421"]))
console.log(solution(["123","456","789"]))
