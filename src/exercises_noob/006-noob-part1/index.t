function <int> main <> {

        var element: string = "fanta";
        var shoppingList: vector<string> = {"water", "coke", "cereal"};

        for var i in shoppingList do {
            $stdout <:: i <:: '\n';
            if (i == element){
                $stdout <:: "You have to buy " <:: element <:: '\n';
                break;
            }
            if(i == shoppingList[|shoppingList| - 1]){
                $stdout <:: "You don't have to buy " <:: element <:: '\n';
            }
        }
        return 0;
}
