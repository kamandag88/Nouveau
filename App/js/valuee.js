        setup();

        var score = 0;
        var stringscore;

        var coverhead;
        var coverheadcount;

        var door;
        var doorcount;

        var getfireext;
        var getfireextcount;

        var usefireext;
        var usefireextcount;

        var firstexit;
        var firstexitcount;

        var rescueperson;
        var rescuepersoncount;

        var exitafrescue;
        var exitafrescuecount;

        var exitdidnrescue;
        var exitdidnrescuecount;

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

                if(coverhead == 1 && coverheadcount == 0) {
                    setbackgcover();
                    addscore();
                    addcountercover();
                }
                else{
                    setbackgback();
                }

                if(door == 1 && doorcount == 0){
                    setbackgdoor();
                    addscore();
                    addcounterdoor();
                }

                if(getfireext == 1 && getfireextcount == 0){
                    setbackggetfire();
                    addscore();
                    addcountergetfire();
                }

                else{
                    setbackgback();
                }

                if(usefireext == 1 && usefireextcount == 0){
                    setbackgusefire();
                    addscore();
                    addcounterusefire();
                }

                else{
                    setbackgback();
                }

                if(firstexit == 1 && firstexitcount == 0){
                    setbackgfirstexit();
                    addscore();
                    addcounterfirstexit();
                }

                else{
                    setbackgback();
                }

                if(rescueperson == 1 && rescuepersoncount == 0){
                    setbackgrescueperson();
                    addscore();
                    addcounterrescueperson();
                }

                else{
                    setbackgback();
                }

                if(exitafrescue >= 950 && exitafrescuecount == 0){
                    setbackgexitafrescue();
                    addscore();
                    addcounterexitafrescue();
                    uploadfinalscore();
                }

                else{
                    setbackgback();
                }

                if(exitdidnrescue >= 950 && exitdidnrescuecount == 0){
                    setbackgexitdidnrescue();
                    addscore();
                    addcounterexitdidnrescue();
                    uploadfinalscore();
                }

                else{
                    setbackgback();
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
            document.getElementById("exitafterrescuecount").innerHTML = exitafterrescuecount;
        }

        function addcounterexitdidnfrescue(){
            exitdidnrescuecount = exitdidnrescuecount + 1;
            document.getElementById("exitdidnotrescuecount").innerHTML = exitdidnrescuecount;
        }

        function uploadfinalscore(){
            stringscore = score.toString();
            aop.setStore("store0", stringscore);
            document.getElementById("finalscore").innerHTML = stringscore;
        }