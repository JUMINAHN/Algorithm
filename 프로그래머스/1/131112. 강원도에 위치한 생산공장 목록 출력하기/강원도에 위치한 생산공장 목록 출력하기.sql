-- 코드를 입력하세요

-- ID, 공장 이름, 주소, 전화번호

-- 공장 ID, 이름, 주소 => 전화번호 제외
-- 공장 기준 오름 차순
-- SELECT * NOT IN (T1.TLNO)
SELECT T1.FACTORY_ID, T1.FACTORY_NAME, T1.ADDRESS
FROM FOOD_FACTORY T1
WHERE T1.ADDRESS LIKE '강원도%'
ORDER BY T1.FACTORY_ID