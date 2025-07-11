-- 코드를 입력하세요
-- 진료과가 흉부외과 CS, 일반외과 GS인 의사의 이름, 의사 ID, 진료과, 고용일자 조회
-- 고용일자 기준 내림차순, 고용일자가 같다면 이름 기준 오름차순
-- 날짜 포맷

SELECT T1.DR_NAME
     , T1.DR_ID
     , T1.MCDP_CD
     , SUBSTR(T1.HIRE_YMD,1,10)
FROM DOCTOR T1
WHERE T1.MCDP_CD IN ('CS', 'GS')
ORDER BY T1.HIRE_YMD DESC, T1.DR_NAME