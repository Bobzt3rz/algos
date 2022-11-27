function <int> main <> {
    var number: float64 = 235.0;
    while number > 3 {
        number = number / 2;
    }
    $stdout <:: number <:: '\n';
    return 0;
}
