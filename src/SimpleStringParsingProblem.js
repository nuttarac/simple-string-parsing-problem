function getLongestWord(){
        var s1 =document.getElementById("wordLong").value;
        var s=s1.replace(/[^a-zA-Z]/gi,' ').split(" ");
        var strLongest='';
        for( i =0;i<s.length;i++){
            if(i==0){
                strLongest=s[i];
            }else if(strLongest.length <s[i].length){
                strLongest=s[i];
            }
        }
     document.getElementById("s1").innerHTML =strLongest;
    }

    function getSum() {
        var s1 =document.getElementById("wordLong").value;
        var sum = 0;
        var temp="";
        for ( i = 0; i < s1.length; i++) {
            var a = s1.charAt(i);
            if (a.match(/^[0-9]+$/) != null) {
                temp+=a;
            }else{
                if(temp!=null && temp != '') {
                    var b = parseInt(temp);
                    sum = sum + b;
                    temp = "";
                }
            }
        }
        if (sum != 0) {
            document.getElementById("s2").innerHTML =sum;
        }
    }