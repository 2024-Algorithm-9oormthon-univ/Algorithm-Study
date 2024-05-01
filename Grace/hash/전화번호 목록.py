def solution(phone_book):
    # 1. Hash map을 만든다
    hash_map = {}
    for phone_number in phone_book:
        hash_map[phone_number] = 1
    
    for phone_number in phone_book:
        jubdoo = ""
        for number in phone_number:
            jubdoo += number
            
            if jubdoo in hash_map and jubdoo != phone_number:
                return False
    return True