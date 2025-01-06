const express =require("express");
const passport = require("passport");

require('./auth');
const app =express();

app.get ('/',(req,res)=>{
    res.send('<a href ="/auth/google">authenticate with google </a>');
});

app.get('/auth/google',
    passport.authenticate('google',{scope: ['email','password']})
);

app.get('/auth/google/callback',passport.authenticate('google',{
    successRedirect :'/prodected',
    failureRedirect:'/auth/failure'
}));

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/login");
  });
});

app.get('/protected',(req,res) =>{
    res.send ('hello')
}
);
app.listen(5000,()=>
console.log("listen the :5000")
);