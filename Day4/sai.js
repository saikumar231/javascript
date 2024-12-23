var emp1={
    name:"sai",
    eno:111
};

var emp2={
    lname:"kumar",
    seno:222
};

function invite(h1,h2){
    console.log(h1+this.name+h2+this.eno);
    console.log(h1+ this.lname+h2+this.seno);
}

invite.call(emp1,"Hello","How are you?");
invite.apply(emp1,["Hello","How are you?"]);
invite.call(emp2,"Hello","How are you?");
invite.apply(emp2,["Hello","How are you?"]);

var inviteemp1=invite.bind(emp1);
inviteemp1("Hello","How are you?");