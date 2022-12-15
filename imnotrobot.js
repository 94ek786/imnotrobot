var INR_ver = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var INR_anser = [1, 1, 1, 1, 1, 1, 1, 1, 1];
var INR_S = 1;
//import { INR_num, INR_Lockin } from './INR_info.js';
//console.log(INR_num);
document.write('<div id="imnotrobot"></div>');
var INR_num;
var INR_Lockin;
fetch('./INR_info.json').then((response) => response.json()).then((json) => {
    INR_num = json.num;
    INR_Lockin = json.Lockin;
    INR_load();
});

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
        </table>';
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
        </table>';
};

function INR_start() {
    INR_ver = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    document.getElementById('imnotrobot').innerHTML = '\
        <table style="border:3px black solid;background-color: #f0f0f0;">\
            <thead>\
                <tr>\
                    <th colspan="4"><div style="background-image: url(img/' + INR_S + '/top.jpg);background-size: contain;background-repeat: no-repeat;width: 200px;height: 60px;"></div></td>\
                </tr>\
            </thead>\
            <tbody>\
                <tr>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(0)">\
                        <div style="background-image: url(img/' + INR_S + '/0.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img0"></div>\
                    </td>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(1)">\
                        <div style="background-image: url(img/' + INR_S + '/1.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img1"></div>\
                    </td>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(2)">\
                        <div style="background-image: url(img/' + INR_S + '/2.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img2"></div>\
                    </td>\
                </tr>\
                <tr>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(3)">\
                        <div style="background-image: url(img/' + INR_S + '/3.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img3"></div>\
                    </td>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(4)">\
                        <div style="background-image: url(img/' + INR_S + '/4.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img4"></div>\
                    </td>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(5)">\
                        <div style="background-image: url(img/' + INR_S + '/5.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img5"></div>\
                    </td>\
                </tr>\
                <tr>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(6)">\
                        <div style="background-image: url(img/' + INR_S + '/6.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img6"></div>\
                    </td>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(7)">\
                        <div style="background-image: url(img/' + INR_S + '/7.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img7"></div>\
                    </td>\
                    <td width="60" height="60" style="cursor: pointer;" onclick="INR_pick(8)">\
                        <div style="background-image: url(img/' + INR_S + '/8.jpg);background-size: contain;background-repeat: no-repeat;width: 60px;height: 60px;" id="INR_img8"></div>\
                    </td>\
                </tr>\
            </tbody>\
            <tfoot>\
                <tr>\
                    <th style="cursor: pointer;" colspan="3">\
                        <div id="INR_verify" style="float:right;color: white;width: 70px;height: 40px;border-radius: 5px;background: rgba(76, 144, 224);line-height:40px;" onclick="INR_verification()">略過</div>\
                    </th>\
                </tr>\
            </tfoot>\
        </table>';
};

function INR_pick(n) {
    if (INR_ver[n] == 0) {
        document.getElementById('INR_img' + n).innerHTML = '<div style="width: 20px;height: 20px;text-align: center;border: 1px solid rgba(173, 216, 230.2);background-color: rgba(173, 216, 230.2);opacity: .9;border-radius: 50%;color: white;">✔</div>';
        INR_ver[n] = 1;
    } else {
        document.getElementById('INR_img' + n).innerHTML = '';
        INR_ver[n] = 0;
        return;
    };
    document.getElementById('INR_verify').innerHTML = '驗證';
};

function INR_isans() {
    for (loop = 0; loop < 9; loop++) {
        if (INR_ver[loop] !== INR_anser[loop]) {
            return false;
        };
    };
    return true;
};

function INR_verification() {
    if (INR_isans()) {
        INR_pass();
        try {
            passINR();
        } catch {

        };
    } else {
        INR_notpass();
    };
};

function INR_load() {
    console.log('總共有' + INR_num);
    console.log('鎖定' + INR_Lockin);
    //確認是否有指定題目
    if (INR_Lockin != 0) {
        INR_S = INR_Lockin;
    } else {
        INR_S = Math.floor(Math.random() * INR_num) + 1;
        console.log('選擇了' + INR_S);
    }

    INR_notpass();
};