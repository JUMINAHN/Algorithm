-- 상반기 총주문량 > 3000
-- 아이스크림 주 성분이 과일인 아이스크림맛
-- 총주문량이 큰 순서대로 조회


-- 주문정보 & 성분
-- 출하번호, 아이스크림맛, 상반기 아이스크림 총주문량
-- 아이스크림맛, 아이스크림 성분 타입
-- flavor이 외래키
SELECT T1.FLAVOR
FROM FIRST_HALF T1
JOIN ICECREAM_INFO T2 ON (T1.FLAVOR = T2.FLAVOR)
WHERE T1.TOTAL_ORDER > 3000
  AND T2.INGREDIENT_TYPE = 'fruit_based'
ORDER BY T1.TOTAL_ORDER DESC
