# API

- Application
- Programming
- Interface: 상호작용 할 수 있게 해주는것 Ex) 리모컨은 tv 상호 작용 할 수 있게하는 인터페이스다

# REST API

커뮤닛케이션을 하기위한 인터페이스

ex) nomadmovies.co/api/movies
nomadmovies.co/api/movies/1
nomadmovies.co/api/search?rating=9

API 컨밴션

url을 보고 벡엔드에서 필터링을 할것이다.

동사를 넣는 것은 좋은 방법이 아니다(명세서에만 값을 넣어줌).
명사만 넣어서 어떤 동작을 하는지 명확이 확인 할 수 있다.
표준명세 HTTP 메소드에 의존해서 보내자

GET /2/users/:id/bookmarks 북마크 줘
POST /2/users/:id/bookmarks 북마크 만들게!
DELETE /2/users/:source_user_id/following/:target_user_id 삭제할게!
PUT /2/lists/:id 수정할게!

# graphQL

필요한것만 요청하세요!

- over-fetching: 너무 많은 데이터를 받아온다.
- under-fetching: 우리가 필요한 것보다는 덜 받고 있다.

테스트 서버 https://graphql.org/swapi-graphql?

- 예시:https://graphql.org/swapi-graphql?query=%7B%0A%20%20allFilms%20%7B%0A%20%20%20%20totalCount%0A%20%20%20%20films%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20episodeID%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20allPeople%7B%0A%20%20%20%20totalCount%0A%20%20%20%20people%20%7B%0A%20%20%20%20%09name%0A%20%20%20%20%20%20hairColor%0A%20%20%20%20%20%20eyeColor%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D
