/*<!-------------------------   SCRIPT FOR CATEGORIES  ------------------------------>*/

          $(document).ready(function()
          {$(".btn3").click(function(){
            $("#luxury div").hide(2000);
            $("#sports div").hide(4000);
            $("#suv div").show(6000);
          })});

          $(document).ready(function()
          {$(".btn2").click(function(){
            $("#luxury div").hide(2000);
            $("#suv div").hide(4000);
            $("#sports div").show(6000);
          })});

          $(document).ready(function()
          {$(".btn1").click(function(){
            $("#sports div").hide(2000);
            $("#suv div").hide(4000);
            $("#luxury div").show(6000);
          })});

          $(document).ready(function()
          {$(".btn4").click(function(){
            $("#sports div").show(2000);
            $("#suv div").show(4000);
            $("#luxury div").show(6000);
          })});

        /*<!-- NOTE:- To check the behaviour of the above script , click on suv option first then 
        click on all category option to see it's full effect -->

        <!-------------------------   END OF SCRIPT   ------------------------------>*/