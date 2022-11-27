function <int> main <> {
    var vec: vector<int> = {1,2,3,4};
    for var i in vec do {
        $stdout <:: i <:: '\n';
    }
    $stdout <:: "---------------------" <:: '\n';
    type P = <vector<int>>;
    var typeP: P = ({1,2,3});
    typeP[2] = 4;
    for var i in typeP do {
        $stdout <:: i <:: '\n';
    }
    $stdout <:: "---------------------" <:: '\n';
    typeP = {2,3,4,5};
    for var i in typeP do {
        $stdout <:: i <:: '\n';
    }
    $stdout <:: "---------------------" <:: '\n';
    type T = <vector<T> a, int b>;
    var typeT: T = ({}, 3);
    var typeT2: T = ({}, 4);
    typeT = ({typeT2}, 3);
    $stdout <:: typeT.a[0].b <:: '\n';
    return 0;
}
