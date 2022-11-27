class ArrayList {
    var length: int;
    var capacity: int;
    var arrayList: vector<int>;
    ctor<> {
        var newList: vector<int>[2];
        arrayList = newList;
        length = 0;
        capacity = 2;
    }
    method <int> peek <int idx> {
        if(idx > capacity - 1 || idx< 0) {
            return -1;
        }
        return arrayList[idx];
    }
    method <int> pop <> {
        if(length == 0) {
            return -1;
        }
        var value = arrayList[length - 1];
        arrayList[length-1] = <int>();
        length--;
        return value;
    }
    method <> push <int value> {
        // expand vector if full
        if(length == capacity){
            var newList: vector<int>[capacity * 2];
            var idx: int = 0;
            for var item in arrayList do {
                newList[idx] = item;
                idx++;
            }
            arrayList = newList; 
            capacity = capacity * 2;
        }
        arrayList[length] = value;
        length++;
    }
}

function <int> main <> {
    var arrayList = ArrayList();
    // list in the capacity
    assert arrayList->peek(0) == 0;
    // out of capacity
    assert arrayList->peek(2) == -1;
    assert arrayList->pop() == -1;
    assert arrayList->peek(-1) == -1;
    arrayList->push(1);
    assert arrayList->peek(0) == 1;
    arrayList->push(2);
    assert arrayList->peek(1) == 2;
    arrayList->push(3);
    assert arrayList->peek(2) == 3;
    // capacity expanded
    assert arrayList->peek(3) == 0; 
    assert arrayList->peek(4) == -1;
    assert arrayList->pop() == 3;
    assert arrayList->pop() == 2;
    assert arrayList->pop() == 1;
    assert arrayList->peek(3) == 0;
    assert arrayList->peek(0) == 0;
    return 0;
}
