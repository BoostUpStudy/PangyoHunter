#include <string>
#include <vector>
#include <stack>
#include <iostream>

using namespace std;

string solution(string p) {
    // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다. 
    string tmp = p;
    string answer = "";
    
    // 균형잡힌 괄호 문자열 확인
    // 개수 세기
    int left = 0;
    int right = 0;
    bool balance = false; // 균형 잡힌 문자열이면 true
    
    for (int i = 0; i < p.size(); ++i){
        if (p[i] == '(') left++;
        else right++;
    }
    if(right == left) balance = true;
    
    // 올바른 괄호 문자열 확인
    stack<char> s;
    bool chk = true; // 올바른 괄호 문자열이면 true
    for (int i = 0; i < p.size(); ++i){
        if (p[i] == '(') s.push('(');
        else {
            if (s.size() != 0) s.pop(); // 오류 1 - 스택이 비었다면 오류 발생
            else {
                chk = false;
                break;
            }
        }
    }
    if (s.size()) chk = false; // 오류 2 - 스택이 남아있으면 올바른 괄호 문자열이 아님 
    if (chk == true) answer = p;
    
    
    while(!chk) {
        // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.
        //     단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
        left = 0;
        right = 0;
        string u;
        string v;
        
        for (int i = 0; i < p.size(); ++i){
            if (p[i] == '(') left++;
            else right++;
            if (left == right) break;
        }
        
        u = tmp.substr(0,left+right);
        v = tmp.substr(left+right);
        
        // 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다. 
        //     3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다. 
        chk = true; // 올바른 괄호 문자열이면 true
        while(!s.empty()) s.pop();
        for (int i = 0; i < u.size(); ++i){
            if (p[i] == '(') s.push('(');
            else {
                if (s.size() != 0) s.pop(); // 스택이 비었다면 오류 발생 - 이거 잡아야함
                else {
                    chk = false;
                    break;
                }
            }
        }
        if (s.size()) chk = false; // 오류 2 - 스택이 남아있으면 올바른 괄호 문자열이 아님 
        
        if (chk == true) {
            answer += u;
            answer += solution(v);
        }
        
        // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
          // 4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다. 
          // 4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다. 
          // 4-3. ')'를 다시 붙입니다. 
          // 4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다. 
          // 4-5. 생성된 문자열을 반환합니다.
        
        if (chk == false){
            string tmp2 = "(";
            tmp2 += solution(v);
            tmp2 += ")";
            string tmp3 = "";
            for (int i = 1; i < u.size()-1; ++i){
                if(u[i] == '(') tmp3 += ')';
                else tmp3 += '(';
            }
            tmp2 += tmp3;
            answer = tmp2;
            break;
        }   
    }
        
    return answer;
}
