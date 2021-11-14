function steps(n) {
    let temp = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            temp += '#';
        }
        for (let j = i; j < n - i; j++) {
            temp += ' ';
        }
        console.log(temp);
        temp = '';
    }
    return;
}
steps(3);
steps(5);
steps(7);