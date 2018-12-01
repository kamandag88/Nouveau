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
        alert("Tapos1");
        valdwd = JSON.parse(dwdstr);
        alert("Tapos2");
        alert(valdwd);
        alert("Tapos3");
        /*document.getElementById("namemo").innerHTML = valdwd.studentname;
        document.getElementById("classnumber").innerHTML = valdwd.classnumber;
        document.getElementById("gamescore").innerHTML = valdwd.gamescore;
        document.getElementById("questscore").innerHTML = valdwd.questscore;
        document.getElementById("statsminutes").innerHTML = valdwd.timeminutes;
        document.getElementById("statsseconds").innerHTML = valdwd.timeseconds;
        document.getElementById("statstens").innerHTML = valdwd.timetens;
*/
        }