# 전화번호를 정렬하여 반복하여 접두사인지 확인

def solution(phone_book):
    # 전화번호를 정렬
    phone_book.sort()
    
    # 다음에 있는 전화번호를 반복하며 접두어인지 확인하여 반환
    for i in range(len(phone_book) - 1):
        if phone_book[i+1].startswith(phone_book[i]):
            return False
    
    # 전체 조회 후 없으면 반환
    return True
