const searchUrl = 'https://persons.shgjj.com/SsoLogin?url=https://persons.shgjj.com/MainServlet?ID=1'
const configs = {
    surplus: {
        title: '当前余额',
        content: '可登陆上海公积金网站查询',
        className: 'custom-classname',
        buttons: [{
            label: '查询',
            type: 'default',
            onClick: function () {
                window.location.href = searchUrl
            }
        }, {
            label: '了解了',
            type: 'primary'
        }]
    },
    overall: {
        title: '每月入账',
        content: '查询工资单，或者向 HR 询问',
        className: 'custom-classname',
        buttons: [{
            label: '了解了',
            type: 'primary'
        }]
    }
}
$('.surplus-tip').on('click', function(){
    weui.dialog(configs.surplus);
});
$('.overall-tip').on('click', function(){
    weui.dialog(configs.overall);
});
$('input').on('keypress keydown blur', function() {
    if ($('#surplus').val() && $('#overall').val()) {
        $('#formSubmitBtn').removeClass('weui-btn_disabled')
    } else {
        $('#formSubmitBtn').addClass('weui-btn_disabled')
    }
})
$('#formSubmitBtn').on('click', function(){
    const val1 = parseFloat($('#surplus').val())
    const val2 = parseFloat($('#overall').val())
    const result = calcFun(val1, val2)
    $('.number').text(result)
    switchPage()
})
$('.recalc-btn').on('click', function(){
    switchPage()
})
const calcFun = function(val1, val2) {
    const result = Math.floor(val2 + val1/12)
    return Math.min(2000, result)
}
const switchPage = function() {
    $('.page-1').toggleClass('hide')
    $('.page-2').toggleClass('hide')
}