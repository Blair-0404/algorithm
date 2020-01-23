# CodeSquad_algorithm
## [20200108]
* [프로그래머스 완주하지 못한 선수 출력하기](https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript)
    * 참가자배열과, 완주선수배열을 각각 정렬 후 반복문을 돌면서 일치하지 않는 선수이름이 나올시 출력하게 한다.
    * [코드-(findNotParticipant.js)](https://github.com/Rachel4858/algorithm/blob/master/CodeSquad_algorithm/findNotParticipant.html)
* [정수뒤집기](https://leetcode.com/problems/reverse-integer/)
    * 내장되어있는 함수 이용해서 단순 역변경, 반복문 돌면서 뒤에있는 00은 거르면서 역변경, 뒤에있는 00을 애초에 제거하고 역변경
    * [코드-(reverseInt.html)](https://github.com/Rachel4858/algorithm/blob/master/CodeSquad_algorithm/reverseInt.html)
    * 더 구현해볼 것 -> 음수일때 양수로 변환해서 역변경

## [20200115]
### 공부하기
* 버블 정렬, 삽입 정렬, 퀵 정렬, 머지 정렬, 힙 정렬을 직접 구현해 보자( 각 정렬의 장단점과 복잡도에 대해 알아보자 )
  - count sort와 radix sort의 코드를 이해하보고 장점은 무엇인지 알아보자
### 오늘의 팁
* 이론상 무작위 원소의 정렬은 O(nlogn) 의 복잡도를 가진다. 다만 원소의 갯수에 제한이 있다면 (ex: 백만 이하의 자연수) O(n) 정렬도 가능하다.
* 퀵소트는 면접에서 종종 물어보므로 코드를 외우는 편이 편하다.
* 퀵소트를 함수형으로 구현할 경우 좀 더 빠르게 구현할 수 있다. (성능이 좋지 않으므로 큰 의미는 없다.)
### 문제 
* [프로그래머스 - k번째 수 찾기](https://programmers.co.kr/learn/courses/30/lessons/42748)
    * [코드-kthNumber.js](https://github.com/Rachel4858/algorithm/blob/master/CodeSquad_algorithm/kthNumber.js)
* [백준 - N개의 수 정렬](https://www.acmicpc.net/problem/10989)
    * 1.버블정렬 2.삽입정렬 3.선택정렬 *4.퀵정렬* 5.머지정령 6.힙정렬 구현해보기
    * for문 코딩 주의 - i가 어떤역할을 하는지 주의하기
    * [코드-NumbersSort.js](https://github.com/Rachel4858/algorithm/blob/master/CodeSquad_algorithm/NumbersSort.js)

## [20200122]
### 더 공부하기
* 해시에 대해 더 공부해 보자
* [추천강좌 (회원가입 필요)](https://www.edwith.org/introalgorithm/lecture/26426/)
### 문제
* [LeetCode-hyppyNumber, unhappyNumber구분](https://leetcode.com/problems/happy-number/)
    * [코드-happuNumber.js](https://github.com/Rachel4858/algorithm/blob/master/CodeSquad_algorithm/hyppyNumber.js)
* [LeetCode-findsingleNumber](https://leetcode.com/problems/single-number/)
    * [코드-findSingleNumber.js](https://github.com/Rachel4858/algorithm/blob/master/CodeSquad_algorithm/findsingleNumber.js)
* [프로그래머스 - 위장](https://programmers.co.kr/learn/courses/30/lessons/42578)
    * [코드-camouflage.js](https://github.com/Rachel4858/algorithm/blob/master/CodeSquad_algorithm/camouflage.js)