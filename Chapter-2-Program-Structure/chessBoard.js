for(var cell = "", size = 8, i = 0; i < size; i++) {
    for(var j = 0; j < size; j++) {
        if((i + j) % 2 == 0)
            cell += " ";
        else
            cell += "#";
    }
    cell += "\n";
}

console.log(cell);
