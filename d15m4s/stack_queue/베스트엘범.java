import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Stream;

public class Solution {
    public int[] solution(String[] genres, int[] plays){
        HashMap<String, ArrayList<int[]>> genreHashMap = new HashMap<>();
        HashMap<String, Integer> playHashMap = new HashMap<>();

        //save
        for(int i = 0; i < genres.length; i++){
            String genre = genres[i];
            int play = plays[i];
            if(!genreHashMap.containsKey(genre)){
                genreHashMap.put(genre, new ArrayList<>());
                playHashMap.put(genre, 0);
            }
            genreHashMap.get(genre).add(new int[]{i, play});
            playHashMap.put(genre, playHashMap.get(genre) + play);
        }

        ArrayList<Integer> answer =  new ArrayList<>();

        //sort
        Stream<Map.Entry<String, Integer>> stream = playHashMap.entrySet()
                .stream()
                .sorted((o1, o2) -> Integer.compare(o2.getValue(), o1.getValue()));

        //search and set
        stream.forEach(entry -> {
            Stream<int[]> sorted = genreHashMap.get(entry.getKey()).stream()
                    .sorted((o1, o2) -> Integer.compare(o2[1], o1[1]))
                    .limit(2);
            sorted.forEach(ans -> answer.add[ans[0]]);
        });
        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
}
