//TIMER JS
  var seconds = 0; 
  var tens = 0; 
  var minutes = 0;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var appendMinutes = document.getElementById("minutes")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var timervisibility = document.getElementById('timerdiv').className;
  var Interval;

   function startnow(){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    //document.getElementById("button-start").style.visibility = "hidden";
  }

  
   function stopnow() {
       clearInterval(Interval);
  }
  
  function startTimer () {
    tens++; 
    
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens >= 60) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }

    if(seconds >=60){
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
  
    if(minutes > 9){
      appendMinutes.innerHTML = minutes;
    }
  }
  

//CPF JS

        setup();

        var score = 0;
        var stringscore;

        var coverhead;
        var coverheadcount = 0;

        var door;
        var doorcount = 0;

        var getfireext;
        var getfireextcount = 0;

        var usefireext;
        var usefireextcount = 0;

        var firstexit;
        var firstexitcount = 0;

        var rescueperson;
        var rescuepersoncount = 0;

        var exitafrescue;
        var exitafrescuecount = 0;

        var exitdidnrescue;
        var exitdidnrescuecount = 0;

        var questionscore = 0;
        var nameinput = "";
        var gradeandsection = "";
        var valarray = [];
        var storeId = "store" + 0;
        var valstring = "";

        function setup(){
        if(cpf)
            cpf.setPinMode('["resetPin"],["setPinMode", "digital", 2,"INPUT"],["setPinMode", "digital", 3,"INPUT"],["setPinMode", "digital", 4,"INPUT"],["setPinMode", "digital", 5,"INPUT"],["setPinMode", "digital", 6,"INPUT"],["setPinMode", "digital", 7,"INPUT"],["setPinMode", "analog", 2,"INPUT"],["setPinMode", "analog", 3,"INPUT"]');
        }



        function loop(){

            if(cpf){

                coverhead = cpf.get("d2");
                document.getElementById("cover").innerHTML = coverhead; 

                door = cpf.get("d3");
                document.getElementById("door").innerHTML = door;

                getfireext = cpf.get("d4");
                document.getElementById("getfire").innerHTML = getfireext;

                usefireext = cpf.get("d5");
                document.getElementById("usefire").innerHTML = usefireext;

                firstexit = cpf.get("d7");
                document.getElementById("firstexit").innerHTML = firstexit;

                rescueperson = cpf.get("d6");
                document.getElementById("rescue").innerHTML = rescueperson;

                exitafrescue = cpf.get("a2");
                document.getElementById("exitafterrescue").innerHTML = exitafrescue;

                exitdidnrescue = cpf.get("a3");
                document.getElementById("exitdidnotrescue").innerHTML = exitdidnrescue;

                alwaysshow = document.getElementById("alwaysshow").className;

                if(alwaysshow == "show"){
                    if(coverhead == 1 && coverheadcount == 0) {
                        setbackgcover();
                        addscore();
                        addcountercover();
                        showquestion1();
                    }

                    if(door == 1 && doorcount == 0){
                        setbackgdoor();
                        addscore();
                        addcounterdoor();
                        showquestion2();
                    }

                    if(getfireext == 1 && getfireextcount == 0){
                        setbackggetfire();
                        addscore();
                        addcountergetfire();
                        showquestion3();
                    }

                    if(usefireext == 1 && usefireextcount == 0){
                        setbackgusefire();
                        addscore();
                        addcounterusefire();
                        showquestion4();
                    }

                    if(firstexit == 1 && firstexitcount == 0){
                        setbackgfirstexit();
                        addscore();
                        addcounterfirstexit();
                    }

                    if(rescueperson == 1 && rescuepersoncount == 0){
                        setbackgrescueperson();
                        addscore();
                        addcounterrescueperson();
                    }

                    if(exitafrescue < 1000 && exitafrescuecount == 0){
                        if(exitdidnrescue >= 1000 && exitdidnrescuecount ==0){
                            setbackgexitdidnrescue();
                            addscore();
                            uploadfinalscore();
                            addcounterexitdidnrescue();
                            showquestion5();
                        }
                    }

                    if(exitafrescue >= 1000 && exitdidnrescuecount ==0){
                            setbackgexitafrescue();
                            addscore();
                            uploadfinalscore();
                            addcounterexitafrescue(); 
                            showquestion5();                           
                        }
                 }

            }

                setTimeout("loop()", 1000); 
        }

        loop();

        function setbackgcover(){
            document.body.style.backgroundImage = "url('img/InsertCoverInfo.jpg')";
        }

        function setbackgdoor(){
            document.body.style.backgroundImage = "url('img/InsertDoorInfo.jpg')";
        }

        function setbackggetfire(){
            document.body.style.backgroundImage = "url('img/InsertGetFireInfo.jpg')";
        }

        function setbackgusefire(){
            document.body.style.backgroundImage = "url('img/InsertUseFireInfo.jpg')";
        }

        function setbackgfirstexit(){
            document.body.style.backgroundImage = "url('img/InsertFirstExitInfo.jpg')";
        }

        function setbackgrescueperson(){
            document.body.style.backgroundImage = "url('img/InsertRescuePersonInfo.jpg')";
        }

        function setbackgexitafrescue(){
            document.body.style.backgroundImage = "url('img/InsertFinishInfo.jpg')";
        }

        function setbackgexitdidnrescue(){
            document.body.style.backgroundImage = "url('img/InsertFinishInfo.jpg')";
        }

        function setbackgback(){
            document.body.style.backgroundImage = "url('img/6thScreen.jpg')";
        }

        function addscore(){
            score = score + 100;
            document.getElementById("totalpoint").innerHTML = score;
            console.log(score);
        }

        function addcountercover(){
            coverheadcount = coverheadcount + 1;
            document.getElementById("covercount").innerHTML = coverheadcount;
        }

        function addcounterdoor(){
            doorcount = doorcount + 1;
            document.getElementById("doorcount").innerHTML = doorcount;
        }


        function addcountergetfire(){
            getfireextcount = getfireextcount + 1;
            document.getElementById("getfirecount").innerHTML = getfireextcount;
        }

        function addcounterusefire(){
            usefireextcount = usefireextcount + 1;
            document.getElementById("usefirecount").innerHTML = usefireextcount;
        }

        function addcounterfirstexit(){
            firstexitcount = firstexitcount + 1;
            document.getElementById("firstexitcount").innerHTML = firstexitcount;
        }

        function addcounterrescueperson(){
            rescuepersoncount = rescuepersoncount + 1;
            document.getElementById("rescuecount").innerHTML = rescuepersoncount;
        }

        function addcounterexitafrescue(){
            exitafrescuecount = exitafrescuecount + 1;
            document.getElementById("exitafterrescuecount").innerHTML = exitafrescuecount;
        }

        function addcounterexitdidnrescue(){
            exitdidnrescuecount = exitdidnrescuecount + 1;
            document.getElementById("exitdidnotrescuecount").innerHTML = exitdidnrescuecount;
        }

//BUTTON FUNCTIONS
function showandhide(){

    document.getElementById("modulediv").style.visibility = "hidden";
    document.getElementById("logindiv").className = "show";
    document.body.style.backgroundImage = "url('img/2ndScreen.jpg')";
}

function showandhide2() {
    nameinput = document.getElementById("userInput").value;
    gradeandsection = document.getElementById("userGS").value;
    document.getElementById("logindiv").style.visibility = "hidden";
    document.getElementById("nextdiv").className = "show";
    document.body.style.backgroundImage = "url('img/3rdScreen.jpg')";
}

function showandhide3(){

    document.getElementById("nextdiv").style.visibility = "hidden";
    document.getElementById("next2div").className = "show";
    document.body.style.backgroundImage = "url('img/4thScreen.jpg')";
}

function showandhide4(){

    document.getElementById("next2div").style.visibility = "hidden";
    document.getElementById("startdiv").className = "show";
    document.body.style.backgroundImage = "url('img/5thScreen.jpg')";
}

function showandhide5(){

    document.getElementById("startdiv").style.visibility = "hidden";
    document.getElementById("timerdiv").className = "show";
    document.getElementById("infodiv").className = "show";
    document.getElementById("alwaysshow").className = "show";
    document.body.style.backgroundImage = "url('img/6thScreen.jpg')";
    startnow();
}

function resume(){
    document.getElementById("question1nextdiv").style.visibility = "hidden";
    document.getElementById("question2nextdiv").style.visibility = "hidden";
    document.getElementById("question3nextdiv").style.visibility = "hidden";
    document.getElementById("question4nextdiv").style.visibility = "hidden";
    document.getElementById("question5nextdiv").style.visibility = "hidden";
    document.getElementById("timerdiv").className = "show";
    document.getElementById("infodiv").className = "show";
    document.body.style.backgroundImage = "url('img/6thScreen.jpg')";    
}

function showquestion1(){
    document.getElementById("timerdiv").style.visibility = "hidden";
    document.getElementById("infodiv").style.visibility = "hidden";
    document.getElementById("question1div").className = "show";   
    document.body.style.backgroundImage = "url('img/Question1.jpg')";
}   

function showquestion1answer(options){
    document.getElementById("question1div").style.visibility = "hidden";
    document.getElementById("question1nextdiv").className = "show";   

    if(options == q1optC){
        questionscore = questionscore + 10;
        console.log(questionscore);
        document.body.style.backgroundImage = "url('img/Question1Correct.jpg')";
        document.getElementById("qtotalscore").innerHTML = questionscore;
    }
    else if(options == q1optA || options == q1optB || options == q1optD){
        console.log("Wrong Answer - Question 1");
        document.body.style.backgroundImage = "url('img/Question1Wrong.jpg')";
    }

}

function showquestion2(){
    document.getElementById("timerdiv").style.visibility = "hidden";
    document.getElementById("infodiv").style.visibility = "hidden";
    document.getElementById("question2div").className = "show";   
    document.body.style.backgroundImage = "url('img/Question5.jpg')";       
}

function showquestion2answer(options2){
    document.getElementById("question2div").style.visibility = "hidden";
    document.getElementById("question2nextdiv").className = "show";  
    if(options2 == q2optA){
        questionscore = questionscore + 10;
        console.log(questionscore);
        document.body.style.backgroundImage = "url('img/Question1Correct.jpg')";
        document.getElementById("qtotalscore").innerHTML = questionscore;
    }
    else if(options2 == q2optB || options2 == q2optC || options2 == q2optD){
        console.log("Wrong Answer - Question 2");
        document.body.style.backgroundImage = "url('img/Question1Wrong.jpg')";
    } 
}

function showquestion3(){
    document.getElementById("timerdiv").style.visibility = "hidden";
    document.getElementById("infodiv").style.visibility = "hidden";
    document.getElementById("question3div").className = "show";   
    document.body.style.backgroundImage = "url('img/Question4.jpg')";       
}

function showquestion3answer(options3){
    document.getElementById("question3div").style.visibility = "hidden";
    document.getElementById("question3nextdiv").className = "show";  
    if(options3 == q3optD){
        questionscore = questionscore + 10;
        console.log(questionscore);
        document.body.style.backgroundImage = "url('img/Question1Correct.jpg')";
        document.getElementById("qtotalscore").innerHTML = questionscore;
    }
    else if(options3 == q3optA || options3 == q3optB || options3 == q3optC){
        console.log("Wrong Answer - Question 3");
        document.body.style.backgroundImage = "url('img/Question1Wrong.jpg')";
    } 
}

function showquestion4(){
    document.getElementById("timerdiv").style.visibility = "hidden";
    document.getElementById("infodiv").style.visibility = "hidden";
    document.getElementById("question4div").className = "show";   
    document.body.style.backgroundImage = "url('img/Question3.jpg')";       
}

function showquestion4answer(options4){
    document.getElementById("question4div").style.visibility = "hidden";
    document.getElementById("question4nextdiv").className = "show";  
    if(options4 == q4optC){
        questionscore = questionscore + 10;
        console.log(questionscore);
        document.body.style.backgroundImage = "url('img/Question1Correct.jpg')";
        document.getElementById("qtotalscore").innerHTML = questionscore;
    }
    else if(options4 == q4optA || options4 == q4optB || options4 == q4optD){
        console.log("Wrong Answer - Question 4");
        document.body.style.backgroundImage = "url('img/Question1Wrong.jpg')";
    } 
}

function showquestion5(){
    document.getElementById("timerdiv").style.visibility = "hidden";
    document.getElementById("infodiv").style.visibility = "hidden";
    document.getElementById("question5div").className = "show";   
    document.body.style.backgroundImage = "url('img/Question2.jpg')";       
}

function showquestion5answer(options5){
    document.getElementById("question5div").style.visibility = "hidden";
    document.getElementById("question5nextdiv").className = "show";  
    if(options5 == q5optB){
        questionscore = questionscore + 10;
        console.log(questionscore);
        document.body.style.backgroundImage = "url('img/Question1Correct.jpg')";
        document.getElementById("qtotalscore").innerHTML = questionscore;
    }
    else if(options5 == q5optA || options5 == q5optC || options5 == q5optD){
        console.log("Wrong Answer - Question 5");
        document.body.style.backgroundImage = "url('img/Question1Wrong.jpg')";
    } 
}

function uploadfinalscore(){
        document.getElementById("finalscore").innerHTML = score;
        stopnow();
        storeId = "store" + gradeandsection;
        valarray = {"studentname": nameinput; "classnumber": gradeandsection; "gamescore": score; "questscore": questionscore; "timeminutes": appendMinutes.innerHTML; "timeseconds": appendSeconds.innerHTML; "timetens": appendTens.innerHTML};
        valstring = JSON.stringify(valarray);
        aop.setStore(storeId, valarray);
        }

function showandhide17(){
    document.getElementById("question5nextdiv").style.visibility = "hidden";
    document.getElementById("statsdiv").className = "show";   
    console.log(document.getElementById("statsdiv").className);
    document.body.style.backgroundImage = "url('img/6thScreen.jpg')";
    document.getElementById("gqscore").innerHTML = questionscore;
    document.getElementById("statsname").innerHTML = nameinput;
    document.getElementById("statsgands").innerHTML = gradeandsection;
    document.getElementById("statsgamescore").innerHTML = score;
    document.getElementById("statsminutes").innerHTML = appendMinutes.innerHTML;     
    document.getElementById("statsseconds").innerHTML = appendSeconds.innerHTML; 
    document.getElementById("statstens").innerHTML = appendTens.innerHTML;   
}

