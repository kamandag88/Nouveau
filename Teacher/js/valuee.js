    var userInput = 0;
    var storeId2 = "store" + userInput;
    var dwdstr = "";
    var valdwd = 0;

    function downloadd(){
        userInput= document.getElementById("userInput").value
        alert(userInput);
        storeId2 = "store" + userInput;
        alert(storeId2);
        dwdstr = aop.getStore(storeId2);
        alert(dwdstr);  
        valdwd = JSON.parse(dwdstr);
        alert(valdwd);
        document.getElementById("namemo").innerHTML = valdwd.studentname;
        document.getElementById("classnumber").innerHTML = valdwd.classnumber;
        document.getElementById("gamescore").innerHTML = valdwd.gamescore;
        document.getElementById("questscore").innerHTML = valdwd.questscore;
        document.getElementById("statsminutes").innerHTML = valdwd.timeminutes;
        document.getElementById("statsseconds").innerHTML = valdwd.timeseconds;
        document.getElementById("statstens").innerHTML = valdwd.timetens;

        }