let media={
    show:"News"
};

let food={
    biryani:"Amazing"
};

let class1={
    sai:"kumar"
};

food.show="saikumar";

food.__proto__=media;
class1.__proto__==food;

console.log(food.show);
console.log(food.biryani);
console.lof(class1.biryani);

