
public class Solution {
    public int solution(int N, int number) {
        List<Integer>[] dp = new ArrayList[9];
        for (int i = 1; i <= 8; i++) {
            dp[i] = new ArrayList<>();
            Set<Integer> combList = new HashSet<>();
            combList.add(Integer.parseInt(String.valueOf(N).repeat(i)));
            for (int j = 1; j < i; j++) {
                for (int comb1 : dp[i - j]) {
                    for (int comb2 : dp[j]) {
                        int plus = comb1 + comb2;
                        int minus = comb1 - comb2;
                        int mul = comb1 * comb2;
                        if (comb2 != 0) {
                            int div = comb1 / comb2;
                            if (comb1 % comb2 == 0) {
                                combList.add(div);
                            }
                        }
                        combList.add(plus);
                        combList.add(minus);
                        combList.add(mul);
                    }
                }
            }
            if (combList.contains(number)) {
                return i;
            }
            dp[i].addAll(combList);
        }
        return -1;
    }
}