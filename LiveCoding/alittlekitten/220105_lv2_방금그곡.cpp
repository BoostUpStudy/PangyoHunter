#include <string>
#include <vector>
#include <sstream>
#include <iostream>
#include <regex>

using namespace std;

vector<string> split(string input, char delimiter) {
    vector<string> answer;
    stringstream ss(input);
    string temp;
 
    while (getline(ss, temp, delimiter)) {
        answer.push_back(temp);
    }
 
    return answer;
}

string solution(string m, vector<string> musicinfos) {
    string answer = "";
    string songName = ""; // 가장 비슷한 노래
    int max = 0;  // 비슷한 단어의 수
    int maxtime = 0; // 재생된 시간
    int starttime = 0;
    for (int i = 0; i < musicinfos.size(); ++i){
        // 1. 시간을 잰다.
        int time = 0;
        vector<string>v = split(musicinfos[i],',');

        time += (stoi(v[1].substr(0,2)) - stoi(v[0].substr(0,2))) * 60;
        time += (stoi(v[1].substr(3,2)) - stoi(v[0].substr(3,2)));
        
        // 2. # 제거
        m = regex_replace(m, regex("C#"), "c");
        v[3] = regex_replace(v[3], regex("C#"), "c");
        m = regex_replace(m, regex("D#"), "d");
        v[3] = regex_replace(v[3], regex("D#"), "d");
        m = regex_replace(m, regex("F#"), "f");
        v[3] = regex_replace(v[3], regex("F#"), "f");
        m = regex_replace(m, regex("G#"), "g");
        v[3] = regex_replace(v[3], regex("G#"), "g");
        m = regex_replace(m, regex("A#"), "a");
        v[3] = regex_replace(v[3], regex("A#"), "a");
        
        
        // 3. 연주 시간동안 같은 노래가 연속해서 연주된다.
        string allsong = "";
        
        for(int j = 0; j < time; ++j){
            allsong += v[3][j % v[3].size()];
        }
        
        
        // 4. 돌면서 같은 요소가 있는지 확인
        for (int j = 0; j < allsong.size(); ++j){
            int chk = 0;
            for (int k = 0; k < m.size(); ++k){
                if (allsong[j+k] == m[k]) chk++;
            }
            if (chk > max) {
                max = chk;
                songName = v[2];
                maxtime = time;
            }
            else if (chk == max && maxtime < time) {
                max = chk;
                songName = v[2];
                maxtime = time;
            }
        }
    }
    if (max != m.size()) songName = "(None)";
    
    return songName;
}
