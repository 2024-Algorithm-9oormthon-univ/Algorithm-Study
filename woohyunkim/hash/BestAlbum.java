import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
class BestAlbum{
    public int[] solution(String[] genres, int[] plays) {
        List<Integer>answerList=new ArrayList<>();
        //해쉬맵 선언
        HashMap<String,HashMap<Integer,Integer>> songList=new HashMap<>();
        HashMap<String,Integer> mostPlayGenres=new HashMap<>();
        int j=0;  //answer배열에 넣을거임
        //1.장르에 따른 분류 후 해쉬맵에 저장
        for(int i=0; i<genres.length; i++){
            if(!songList.containsKey(genres[i])){//만약 해당 장르가 존재하지않는다면
                HashMap<Integer,Integer> indexAndPlay=new HashMap<>();
                indexAndPlay.put(i,plays[i]);//인덱스 번호와 재생 횟수 
                songList.put(genres[i],indexAndPlay);
                mostPlayGenres.put(genres[i],plays[i]);
            }
            else{//만약 해당 장르가 존재하는 장르라면...
                songList.get(genres[i]).put(i,plays[i]);
                mostPlayGenres.put(genres[i],mostPlayGenres.get(genres[i])+
                plays[i]);
            }
        }
        //가장 많은 재생횟수를 가진 장르 분류
        //collection과 람다를 사용해서 mostPlayGenres해쉬맵을 sorting해준다.
        
        List<String> keySet=new ArrayList<>(mostPlayGenres.keySet());
        keySet.sort((o1,o2)->mostPlayGenres.get(o2).compareTo(mostPlayGenres.get         (o1)));
        
        //이제 mostPlayGenres에 나열된 장르에 속한 노래를 찾는다
        
        for(String genreName:keySet){
            HashMap<Integer,Integer> songsInGenre=songList.get(genreName);
            List<Integer> wow=new ArrayList<>(songsInGenre.keySet());
            wow.sort((o1,o2)->songsInGenre.get(o2).compareTo(songsInGenre.get
            (o1)));
            //예외처리 곡이 한개만 있다면?
            if(wow.size()==1){
                answerList.add(wow.get(0));
            }
            else{
                answerList.add(wow.get(0));
                answerList.add(wow.get(1));
            }

        }
        int[] answer=answerList.stream().mapToInt(Integer::intValue).toArray();
        
        return answer;
    }
}