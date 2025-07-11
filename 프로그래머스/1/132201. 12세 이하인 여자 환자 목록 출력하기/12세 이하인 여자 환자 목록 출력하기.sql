-- 코드를 입력하세요
-- 12세 이하인 여자아이, 환자 이름 / 환자번호 / 성별코드 / 나이 / 전화번호 조회
-- 전화번호가 없을 경우 -> NONE으로 출력
-- 나이 기준 내림차순, 나이가 같다면 환자이름으로 오름차순

-- 전화번호가 없을 경우 => NVL?
SELECT T1.PT_NAME
     , T1.PT_NO
     , T1.GEND_CD
     , T1.AGE
     , IFNULL(T1.TLNO, 'NONE') AS TLNO
     -- ORACLE NVL === IFNULL
FROM PATIENT T1
WHERE T1.GEND_CD = 'W'
    AND T1.AGE <= 12 
ORDER BY T1.AGE DESC, T1.PT_NAME