function acceptRejectPassword(result) {
    if (result == 'Correct') {
        $('#new-password').removeAttr('disabled');
        $('#change-pass-submit').removeAttr('disabled');
    }
    else {
        alert('The password you entered is not correct');
    }
}

function checkPassword(evt){
    evt.preventDefault();

    var formInputs = {
        'oldPassword': $('#old-password').val()
    };

    console.log('hay hay');

    $.post('/old-password', 
           formInputs,
           acceptRejectPassword
           );

}

$('#old-password-form').on('submit', checkPassword);


function newInfoAlert(result) {
    alert('New' + result + 'set');
}

function submitNewPassword(evt) {
    evt.preventDefault();

    var newInfoFormInputs = {
        'type': 'password',
        'newInfo': $('#new-password').val()
    };

    $.post('/new-info',
           newInfoFormInputs,
           newInfoAlert
           );
}

$('#new-password-form').on('sumbit', submitNewPassword);
