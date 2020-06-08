/*----- DOM Option Loại trạm -----*/
$.getJSON("json/category_option.json", function (data_category) {
    $('#loaitram')
        .append($("<option></option>")
            .attr('value', 'none').text("Lựa chọn loại trạm"));
    $.each(data_category, function (key, value) {
        $('#loaitram')
            .append($("<option></option>")
                .attr('value', value.id).text(value.name));
    });
})

/*----- DOM Option Huyện -----*/
function dom_district_option() {
    $.getJSON("json/district_option.json", function (data_district) {
        $('#district')
            .append($("<option></option>")
                .attr('value', 'none').text("Lựa chọn quận huyện"));
        $.each(data_district, function (key, value) {
            $('#district')
                .append($("<option></option>")
                    .attr('value', value.id).text(value.name));
        });
    })
}

dom_district_option()