var num=new Array();
for (var i=0; i<5; i++) {
    num[i]=parseInt(prompt("enter the 5 number"));
   document.write(num[i]+ "<br>");
}

var sum=0;
for (var i=0; i<5; i++) {
    
    sum=sum+num[i];
    
}
document.write("total sum : "+ sum+ "<br>");

document.write("total Array legth : "+num.length +"<br>");
document.write("slicing first two number : "+num.slice(0,2));

