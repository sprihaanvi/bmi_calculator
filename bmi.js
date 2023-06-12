const express=require('express');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var ht=parseFloat(req.body.ht);
  var wt=parseFloat(req.body.wt);
  var bmi=wt/(ht*ht);
  bmi=bmi.toFixed(2);
  var result="Your current bmi is:"+bmi+"<br>";
  // res.send("Your current bmi is:"+bmi);
if(bmi<18.5){
  result+="You are Under-Weight";
}
else if(bmi>18.5 && bmi<24.9){
  result+="Your BMI is Normal";
}
else if(bmi>25 && bmi<29.9){
  result+="You are Over-Weight";
}
else{
  result+="You are Obese";
}
 res.send(result);
});
app.listen(3000,function(){
  console.log("Server is running");
});
