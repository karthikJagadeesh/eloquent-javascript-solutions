let cell = "";

for(let size = 8, i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
        if((i + j) % 2 == 0)
            cell += " ";
        else
            cell += "#";
    }
    cell += "\n";
}

console.log(cell);
