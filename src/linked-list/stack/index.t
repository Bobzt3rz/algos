type T = <vector<T> next, int value>;
class Stack {
    var head: T;
    var length: int;
    ctor<>{
        length = 0;
        head = <T>();
    } 
    method <int> peek <> {
        if (head == <T>()){
            return -1;
        }
        return head.value;
    }
    method <> push <int a> {
        var newNode: T = ({}, a);
        if(head == <T>()){
            head = newNode; 
        } else {
            newNode.next = {head};
            head = newNode;
        }
    }
    method <int> pop <> {
        if(head == <T>()){
            return -1;
        }
        var headValue = head.value;
        if(head.next == <vector<T>>()){
            head = <T>();
        } else{
            head = head.next[0];
        }
        return headValue;

    }
}

function <int> main <> {
    var stack = Stack();
    assert stack->pop() == -1;
    assert stack->peek() == -1;
    stack->push(5);
    assert stack->peek() == 5;
    assert stack->pop() == 5;
    assert stack->peek() == -1;
    assert stack->pop() == -1;
    stack->push(1);
    stack->push(2);
    $stdout <:: stack->pop() <:: '\n' <:: stack->pop() <:: '\n';
    $stdout <:: stack->pop() <:: '\n';
    return 0;
}
