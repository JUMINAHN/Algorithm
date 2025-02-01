function solution(todo_list, finished) {
    //todo_list, 할일을 마친 boolean === finish, 즉 boolean false인 애들
    return todo_list.filter((str, idx) => {if(!finished[idx]) return str})
    // console.log(result)
    }