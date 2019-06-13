function solution(a, b) {
    var answer = '';

    // 만약 실제 있는 날짜가 아니면 예외 처리한다.
    if (a > 12 || a < 1 || b < 1) {
        return ("The date is not existed.")
    }

    let tot = 0;

    // 월별 날짜를 고려해 tot에 더해준다.
    for (let i = 1; i < a; i++) {
        switch (i) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                tot = tot + 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                tot = tot + 30;
                break;
            case 2:
                tot = tot + 29;
                break;
        }
    }
    // 일수가 31일 이상일때 예외처리 | 그렇지 않을땐 tot에 더해준다.
    if (b > 31) {
        return ("The day is not existed.")
    } else {
        tot = tot + b;
        console.log(tot);
    }

    // 요일 계산
    if ((tot % 7) === 0) {
        answer = 'THU'
    } else if ((tot % 7) === 1) {
        answer = 'FRI'
    } else if ((tot % 7) === 2) {
        answer = 'SAT'
    } else if ((tot % 7) === 3) {
        answer = 'SUN'
    } else if ((tot % 7) === 4) {
        answer = 'MON'
    } else if ((tot % 7) === 5) {
        answer = 'TUE'
    } else {
        answer = 'WED'
    }

    return answer;
}


// date 함수 썼을때
function getDayName(a, b) {
    let arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let date = new Date(`2016-${a}-${b}`);
    let day = date.getDay();

    return arr[day];
}