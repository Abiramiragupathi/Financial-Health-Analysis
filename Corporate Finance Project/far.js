function calculate(){
      var ca=document.getElementById("ca").value
      var cl=document.getElementById("cl").value
      var ta=document.getElementById("ta").value
      var re=document.getElementById("re").value
      var ebit=document.getElementById("ebit").value 
      var mv=document.getElementById("mv").value
      var tl=document.getElementById("tl").value
      var sales=document.getElementById("sales").value
      var x1=(ca+cl)/ta
      var x2=re/ta
      var x3=ebit/ta
      var x4=mv/tl
      var x5=sales/ta
      var zscore=1.2*x1+1.4*x2+3.3*x3+0.6*x4+1*x5

      document.getElementById("message").innerHTML = zscore; 
      document.getElementById("hid").value=zscore;
      var T = document.getElementById("res");
      T.style.display = "block";
      return true 
}