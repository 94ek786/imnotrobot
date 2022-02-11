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

function INR_verification() {

};

function INR_start() {
    INR_pass()
}

function INR_load() {
    INR_notpass()
};

window.onload = function() {
    INR_load()
};