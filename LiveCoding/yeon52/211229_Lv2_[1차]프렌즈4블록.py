def solution(m, n, board):
    answer = 0
    boardArr = []
    for i in range(m):
        boardArr.append(list(board[i]))
        
    while True:
        isExistBomb = False
        bomb = set()
        
        for i in range(m-1):
            for j in range(n-1):
                if boardArr[i][j]==boardArr[i+1][j]==boardArr[i+1][j+1]==boardArr[i][j+1]!=0:
                    bomb.update([(i,j),(i+1,j),(i+1,j+1),(i,j+1)])
                    isExistBomb = True
        
        if not isExistBomb : break

        for x, y in bomb:
            boardArr[x][y] = 0

        for i in range(n):
            for j in range(m-1,-1,-1):
                if boardArr[j][i] == 0:
                    end = j
                    while boardArr[end][i] == 0 and end>0:
                        end -=1
                    boardArr[j][i] = boardArr[end][i]
                    boardArr[end][i] = 0
    for i in range(m):
        answer+=boardArr[i].count(0)
    return answer