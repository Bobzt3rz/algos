function <int> main <> {
    for(var i = 1; i < 11 ; i++){
        if(i % 2 == 0){
            $stdout <:: "(value of " <:: i <:: " ) is even" <:: '\n';
        } else {
            $stdout <:: "(value of " <:: i <:: " ) is odd" <:: '\n';
        }
    }

    return 0;
}
