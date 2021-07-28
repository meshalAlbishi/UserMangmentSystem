$('#add_user').submit((event) => {
    alert("data saved");
});


// try use form directly
$('#update_user').submit((event) => {
    event.preventDefault();

    try {
        var unindexed_array = $('#update_user').serializeArray();
        var data = {};

        $.map(unindexed_array, function (n, i) {
            data[n['name']] = n['value'];
        });

        console.log(data);

        var request = {
            "url": `http://localhost:5000/api/users/${data.id}`,
            "method": 'put',
            "data": data
        }

        $.ajax(request).done(function (response) {
            alert('data updated')
        });

    } catch (error) {
        console.log(error);
    }
});


// delete
if (window.location.pathname === '/') {
    $ondelete = $('.table tbody td a.delete');

    // click function
    $ondelete.click(function () {

        let id = $(this).attr('data-id');

        var request = {
            "url": `http://localhost:5000/api/users/${id}`,
            "method": 'delete'
        }

        if (confirm('confirm delete')) {

            $.ajax(request).done(function (response) {
                alert('user deleted');
                location.reload();
            });
        }
    });
}