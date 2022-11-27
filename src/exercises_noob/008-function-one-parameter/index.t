function <int> main <> {
    $stdout <:: greet("bob") <:: '\n';
    return 0;
}

function <string> greet <string a> {
    return "hello " + a; 
}
