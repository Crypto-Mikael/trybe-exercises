let height = 4;
let space = ' ';
let ast = '*';

for (let width = 1; width <= height; width += 1) { 
  console.log(space.repeat(height - width),ast.repeat(width)) 
}