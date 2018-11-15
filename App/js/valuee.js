        setup();

        var coverhead;

        function setup(){
        if(cpf)
            cpf.setPinMode('["resetPin"],["setPinMode", "digital", 2,"INPUT"]');
        }



        function loop(){

            if(cpf){

                coverhead = cpf.get("d2");
                document.getElementById("cover").innerHTML = coverhead; 
            }

                setTimeout("loop()", 1000); 
        }

        loop();
