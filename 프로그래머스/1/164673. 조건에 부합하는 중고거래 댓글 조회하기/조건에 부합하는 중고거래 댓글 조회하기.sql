-- 코드를 입력하세요
-- 10월에 작성된 게시글 제목, 게시글 ID, 댓글 ID, 댓글 작성자 ID, 댓글 내용, 댓글 작성일 조회
-- 댓글 작성일 기준 오름차순, 댓글 작성인이 같다면 게시글 제목을 기준으로 오름차순
-- 2022년 10월에 작성된 게시글
-- SELECT T1.TITLE
--      , T1.BOARD_ID
      -- 댓글 ID
--      , T1.WRITER_ID
      -- 댓글 작성자 ID,
      -- 댓글 내용
      -- 댓글 작성일
-- FROM USED_GOODS_BOARD AS T1
-- WHERE CREATED_DATE LIKE '2022-10%'
-- T1의 PK를 활용해서 -> T2의 FK로 접근..?
-- T1의 WRITER.ID로 접근해야하는거 아닌가 

-- 게시글 제목, 게시글 ID, 댓글 ID, 댓글 작성자 ID, 댓글 내용, 댓글 작성일
SELECT T1.TITLE, T1.BOARD_ID, T2.REPLY_ID, T2.WRITER_ID, T2.CONTENTS, SUBSTR(T2.CREATED_DATE, 1, 10) 
FROM USED_GOODS_BOARD T1
JOIN USED_GOODS_REPLY T2 ON (T1.BOARD_ID = T2.BOARD_ID) 
WHERE T1.CREATED_DATE LIKE '2022-10%' -- CREATE_DATE 포맷
ORDER BY T2.CREATED_DATE, T1.TITLE -- 작성일 기준, 1번 조건 성립
-- 기준이 같다면 오름차순, 게시글 제목 기준으로  오름차순
--    CASE WHEN T2.CREATED_DATE = T2.CREATED_DATE THEN T1.TITLE
--    END 
    
    -- CASE STH WHEN -> 특정 조건 부합
    -- CASE WHEN STH -> 범위가 다양
    -- 댓글 작성일을 기준으로 오름차순 -> 같다면, 제목을 기준으로 : 이걸 그럼 CASE_WHEN => 1로 바꿔주면 되겠다(작은거 별로 1)
--    CASE WHEN T2.CREATED_DATE 
--    CASE WHEN T2.CREATED_DATE = T2.CREATE_DATE THEN 
--    END ASC
--    ,
--    CASE WEHN T2.CREATED_TITLE TEHN T2.CREATE_TITLE
--    END ASC
    
-- 댓글 작성일을 기준으로 오름차순
-- 댓글 작성일이 같다면 게시글 제목을 기준으로 오름차순



-- SELECT *
-- FROM USED_GOODS_BOARD AS T1
-- UNION ALL : 컬럼 개수가 다르면 UNION을 못쓴다
-- SELECT *
-- FROM USED_GOODS_REPLY AS T2

-- 새로운 논리테이블 : T1

-- 중복제거

--    , 
    
-- 그럼 UNION으로 합쳐야하나