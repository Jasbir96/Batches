module.exports = {
    codes: [
        {
        qName: "Counting Valleys",
        soln: `#include <iostream>
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
    }]

}