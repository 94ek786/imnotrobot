var ver = 0;
var vinannum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function vinan(num) {
    if (vinannum[num] == 0) {
        document.getElementById("vin" + num).src = ("/img/vinan" + num + "1.jpg");
        vinannum[num] = 1;
        ver++;
        if (ver == 1) {
            document.getElementById("ansbotton").src = "/img/ver.jpg"
        };
    } else if (vinannum[num] == 1) {
        document.getElementById("vin" + num).src = ("/img/vinan" + num + "0.jpg");
        vinannum[num] = 0;
        ver--;
        if (ver == 0) {
            document.getElementById("ansbotton").src = "/img/skipp.jpg"
        };
    }
}

function verification() {

    if (ver == 12) {
        success();
    } else {
        notveri();
    }
}

function success() {
    document.getElementById("imnotrobot").innerHTML = "<table style=\"border-collapse:collapse;border:1px #E0E0E0 #E0E0E0;background-color:#f0f0f0;margin-left: auto;margin-right: auto;\"><tr><td style=\"padding-top: 16px;padding-bottom: 16px;padding-left: 10px;\"><img src=\"/img/inrsquareok.png\" alt=\"\" onclick=\"vering()\" style=\"cursor: pointer;\"></td><td style=\"font-size: 22px;padding-left: 26px;padding-right: 30px;\">我不是機器人</td><td style=\"padding: 10px 26px;\"><img src=\"/img/inr.png\" width=\"70px\ height\"70px\"\"></td></tr></table>";
    return 1;
}

function vering() {
    document.getElementById("imnotrobot").innerHTML = "<table style=\"border:3px black solid;margin-left: auto;margin-right: auto;\"> <thead ><tr ><th colspan = \"4\"><img src=\"/img/vinantop.jpg\" width=\"210\"height=\"60\"></td> </tr> </thead> <tbody ><tr ><td ><img src=\"/img/vinan00.jpg\" width=\"50\" height=\"50\" style=\"cursor: pointer;\" onclick=\"vinan(0)\" id=\"vin0\"></td> <td ><img src=\"/img/vinan10.jpg\" width=\"50\" height=\"50\" style=\"cursor: pointer;\" onclick=\"vinan(1)\" id=\"vin1\"></td> <td > <img src=\"/img/vinan20.jpg\" width=\"50\" height=\"50\" style=\"cursor: pointer;\" onclick=\"vinan(2)\" id=\"vin2\"></td> <td > <img src=\"/img/vinan30.jpg\" width=\"50\" height=\"50\" style=\"cursor: pointer;\" onclick=\"vinan(3)\" id=\"vin3\"></td></tr><tr> <td > <img src=\"/img/vinan40.jpg\" width=\"50\" height=\"60\" style=\"cursor: pointer;\" onclick=\"vinan(4)\" id=\"vin4\"></td> <td > <img src=\"/img/vinan50.jpg\" width=\"50\" height=\"60\" style=\"cursor: pointer;\" onclick=\"vinan(5)\" id=\"vin5\"></td> <td > <img src=\"/img/vinan60.jpg\" width=\"50\" height=\"60\" style=\"cursor: pointer;\" onclick=\"vinan(6)\" id=\"vin6\"></td> <td > <img src=\"/img/vinan70.jpg\" width=\"50\" height=\"60\" style=\"cursor: pointer;\" onclick=\"vinan(7)\" id=\"vin7\"></td></tr><tr> <td > <img src=\"/img/vinan80.jpg\" width=\"50\" height=\"50\" style=\"cursor: pointer;\" onclick=\"vinan(8)\" id=\"vin8\"></td> <td > <img src=\"/img/vinan90.jpg\" width=\"50\" height=\"50\" style=\"cursor: pointer;\" onclick=\"vinan(9)\" id=\"vin9\"></td> <td > <img src=\"/img/vinan100.jpg\" width=\"50\" height=\"50\" style=\"cursor: pointer;\" onclick=\"vinan(10)\" id=\"vin10\"></td> <td > <img src=\"/img/vinan110.jpg\" width=\"50\" height=\"50\" style=\"cursor: pointer;\" onclick=\"vinan(11)\" id=\"vin11\"></td> </tr> </tbody> <tfoot ><tr ><th colspan = \"4\"><img src=\"/img/skipp.jpg\" style=\"padding-right: 10px;padding-left: 65%;cursor: pointer;\" width=\"70\" height=\"30\" onclick=\"verification()\" id=\"ansbotton\"></td> </tr> </tfoot> </table>"
}

function notveri() {
    document.getElementById("imnotrobot").innerHTML = "<table style=\"border-collapse:collapse;border:1px #E0E0E0 #E0E0E0;background-color:#f0f0f0;margin-left: auto;margin-right: auto;\"><tr><td style=\"padding-top: 16px;padding-bottom: 16px;padding-left: 10px;\"><img src=\"img/inrsquare.png\" alt=\"\" onclick=\"vering()\" style=\"cursor: pointer;\"></td><td style=\"font-size: 22px;padding-left: 26px;padding-right: 30px;\">我不是機器人</td><td style=\"padding: 10px 26px;\"><img src=\"/img/inr.png\" width=\"70px\ height\"70px\"\"></td></tr></table>";
}
document.write("<p id=\"imnotrobot\"></p>");
notveri();