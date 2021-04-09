module.exports = {
    codes : [
        {
            qName : "Sales by Match",
            soln : `#include <bits/stdc++.h>
                    using namespace std;

                    int main() {
                        int n;
                        cin>>n;
                        int freq[101] = {};
                        for(int i = 0; i < n; i++) {
                            int c;
                            cin >> c;
                            freq[c]++;
                        }

                        int res = 0;
                        for(int i = 0; i <= 100; i++){
                            res += freq[i] / 2;
                        }
                        cout << res << endl;
                        return 0;
                    }`
        }, 
        {
            qName : "Counting Valleys",
            soln : `#include <iostream>
                    #include <cstdio>
                    #include <string>
                    #include <sstream> 
                    #include <vector>
                    #include <set>
                    #include <map>
                    #include <queue>
                    #include <stack>
                    #include <cmath>
                    #include <algorithm>
                    #include <cstring>
                    #include <ctime>
                    #include <cassert>
                    using namespace std;
                    #define pb push_back
                    #define mp make_pair
                    #define pii pair<int,int>
                    #define vi vector<int>
                    #define vpii vector<pii>
                    #define SZ(x) ((int)(x.size()))
                    #define fi first
                    #define se second
                    #define FOR(i,n) for(int (i)=0;(i)<(n);++(i))
                    #define FORI(i,n) for(int (i)=1;(i)<=(n);++(i))
                    #define IN(x,y) ((y).find((x))!=(y).end())
                    #define ALL(t) t.begin(),t.end()
                    #define FOREACH(i,t) for (typeof(t.begin()) i=t.begin(); i!=t.end(); i++)
                    #define REP(i,a,b) for(int (i)=(a);(i)<=(b);++i)
                    #define REPD(i,a,b) for(int (i)=(a); (i)>=(b);--i)
                    #define REMAX(a,b) (a)=max((a),(b));
                    #define REMIN(a,b) (a)=min((a),(b));
                    #define DBG cerr << "debug here" << endl;
                    #define DBGV(vari) cerr << #vari<< " = "<< (vari) <<endl;
                    
                    typedef long long ll;
                    
                    const int MINN = 2;
                    const int MAXN = 1e6;
                    
                    int main()
                    {
                        ios_base::sync_with_stdio(0);
                        int n; 
                        cin >> n;
                        assert(n >= MINN && n <= MAXN);
                        string s;
                        cin >> s;
                        assert(s.length() == n);
                        int res = 0;
                        int level = 0;
                        FOR(i, n)
                        {
                            if(s[i] == 'D')
                            {
                                --level;
                            }
                            else if(s[i] == 'U')
                            {
                                ++level;
                                if(level == 0) ++res;
                            }
                        }
                        assert(level == 0);
                        cout << res << endl;
                    }` 
        }, 
        {
            qName : "Jumping on the Clouds",
            soln : `#include <bits/stdc++.h>
                    using namespace std;
                    
                    const int inf = 555;
                    int A[111], dp[111];
                    
                    int main() {
                        int n; cin >> n;
                    
                        for(int i=1; i<=n; i++) {
                            cin >> A[i];
                        }
                        for(int i=2; i<=n; i++) {
                            if(A[i] == 0) dp[i] = min(dp[i-1], dp[i-2]) + 1;
                            else dp[i] = inf;
                        }
                        cout << dp[n] << "\n";
                        return 0;
                    }`
        }, 
        {
            qName : "Repeated String",
            soln : `#include <bits/stdc++.h>

                    using namespace std;
                    
                    typedef long long ll;
                    
                    int main()
                    {
                        string s;
                        cin >> s;
                        ll n;
                        cin >> n;
                        ll ans = 0;
                        int A = 0;
                        int B = 0;
                        for (int i = 0; i < (int)s.size(); i++)
                        {
                        if (s[i] == 'a') A++;
                        if ((ll)i < n % (ll)s.size() && s[i] == 'a') B++;
                        }
                    
                        cout << n / (ll)s.size() * (ll)A + (ll) B << endl;
                        return 0;
                    }`
        }
    ]
}