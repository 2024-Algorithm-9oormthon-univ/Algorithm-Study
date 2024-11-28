def solution(array, commands):
    answer = []
    for i in range(len(commands)):
        tmp_arr = array[commands[i][0]-1:commands[i][1]]
        tmp_arr.sort()
        answer.append(tmp_arr[commands[i][2]-1])
    return answer