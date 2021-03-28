module.export = {
    q_1:`#include <bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin >> n;
    int freq[101] = {};
    for (int i = 0; i < n; i++) {
        int c;
        cin >> c;
        freq[c]++;
    }

    int res = 0;
    for (int i = 0; i <= 100; i++) {
        res += freq[i] / 2;
    }
    cout << res << endl;
    return 0;
}`
}