var num = '1'
var ver = [
    [0, 0, 0] * 3
]

function INR_notpass() {
    document.getElementById('imnotrobot').innerHTML = '\
        <table style="border-collapse:collapse;border:1px #E0E0E0 #E0E0E0;background-color:#f0f0f0;">\
            <tr>\
                <td style="padding: 10px 26px;">\
                    <button style="width: 32px;height: 32px;background-color: white;" onclick="INR_start()"></button>\
                </td>\
                <td style="font-size: 22px;padding-left: 0px;padding-right: 26px;">\
                    <h3>我不是機器人</h3>\
                </td>\
                <td style="padding: 10px 26px;">\
                    <img src="img/inr.png" width="70px" height="70px">\
                </td>\
            </tr>\
        </table>'
};

function INR_pass() {
    document.getElementById('imnotrobot').innerHTML = '\
        <table style="border-collapse:collapse;border:1px #E0E0E0 #E0E0E0;background-color:#f0f0f0;">\
            <tr>\
                <td style="padding: 10px 26px;">\
                    <div style="font-size: 48px;text-align: center;color: green;">✔</div>\
                </td>\
                <td style="font-size: 22px;padding-left: 0px;padding-right: 26px;">我不是機器人</td>\
                <td style="padding: 10px 26px;">\
                    <img src="img/inr.png" width="70px" height="70px">\
                </td>\
            </tr>\
        </table>'
};

function INR_start() {
    document.getElementById('imnotrobot').innerHTML = '\
        <table style="border:3px black solid;">\
            <thead>\
                <tr>\
                    <th colspan="4"><div style="background-image: url(img/' + num + '/top.jpg);background-size: contain;background-repeat: no-repeat;width: 200px;height: 60px;"></div></td>\
                </tr>\
            </thead>\
            <tbody>\
                <tr>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(\'00\')">\
                        <div style="background-image: url(img/' + num + '/00.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img00"></div>\
                    </td>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(\'01\')">\
                        <div style="background-image: url(img/' + num + '/01.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img01"></div>\
                    </td>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(\'02\')">\
                        <div style="background-image: url(img/' + num + '/02.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img02"></div>\
                    </td>\
                </tr>\
                <tr>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(10)">\
                        <div style="background-image: url(img/' + num + '/10.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img10"></div>\
                    </td>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(11)">\
                        <div style="background-image: url(img/' + num + '/11.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img11"></div>\
                    </td>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(12)">\
                        <div style="background-image: url(img/' + num + '/12.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img12"></div>\
                    </td>\
                </tr>\
                <tr>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(20)">\
                        <div style="background-image: url(img/' + num + '/20.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img20"></div>\
                    </td>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(21)">\
                        <div style="background-image: url(img/' + num + '/21.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img21"></div>\
                    </td>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(22)">\
                        <div style="background-image: url(img/' + num + '/22.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img22"></div>\
                    </td>\
                </tr>\
            </tbody>\
            <tfoot>\
                <tr>\
                    <th colspan="4"><img src="img/skipp.jpg" style="padding-right: 10px;padding-left: 65%;cursor: pointer;" width="70" height="30" onclick="INR_verification()" id="ansbotton"></td>\
                </tr>\
            </tfoot>\
        </table>'
}

function INR_pick(n) {
    document.getElementById('INR_img' + n).innerHTML = '<div style="width: 20px;height: 20px;text-align: center;border: 1px solid rgba(173, 216, 230.2);background-color: rgba(173, 216, 230.2);opacity: .9;border-radius: 50%;color: white;">✔</div>'
}

function INR_verification() {
    INR_pass()
};

function INR_load() {
    INR_notpass()
};

window.onload = function() {
    INR_load()
};