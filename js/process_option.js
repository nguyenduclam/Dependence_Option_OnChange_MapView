var url_call_station = '';
/*** Biến điều kiện cần chứa 1=1 để hiển thị ***/
var item_loaitram_cond = '%20loaitram=1=1';
var item_quanhuyen_cond = '%20quanhuyen=1=1';
var item_loaitram = '';
var item_quanhuyen = '';

/*** Lựa chọn loại trạm ***/
$("#loaitram").change(function () {
    /*** Thay đổi option của Select ***/
    item_loaitram = $("#loaitram").val();
    if (item_loaitram != 'none') {
        /*** Reset lựa chọn quận huyện ***/
        $("#district").val('none');
        item_quanhuyen_cond = '%20quanhuyen=1=1';

        /*** Thêm/Xóa Option***/
        $("#district").find('option').remove();
        item_loaitram_cond = '%20loaitram=' + item_loaitram;

        url_call_station = 'services/data_station.php?'
            + item_loaitram_cond + '&' + item_quanhuyen_cond;

        $.getJSON(url_call_station, function (data) {
            $('#district')
                .append($("<option></option>")
                    .attr('value', 'none').text("Lựa chọn quận huyện"));

            var dt = data.features;
            for (var i = 0; i < dt.length; i++) {
                console.log(dt[i].properties.districtID)
                $('#district')
                    .append($("<option></option>")
                        .attr('value', dt[i].properties.districtID)
                        .text(dt[i].properties.districtName));
            }
        });
    } else {
        /*** Reset lựa chọn quận huyện ***/
        $("#district").val('none');
        item_quanhuyen_cond = '%20quanhuyen=1=1';

        /*** Thêm toàn bộ Option ***/
        $("#district").find('option').remove();
        dom_district_option();

        item_loaitram_cond = '%20loaitram=1=1';
        url_call_station = 'services/data_station.php?'
            + item_loaitram_cond + '&' + item_quanhuyen_cond;
    }
    /*** Gọi service 'call_obser_station.php' có thêm các điều kiện khi lựa chọn Select Option ***/

    /*** Cập nhật lại hiển thị của dữ liệu quan trắc ***/
    view_data_quantrac.refresh(url_call_station);
});

/*** Lựa chọn quận huyện ***/
$("#district").change(function () {
    item_quanhuyen = $("#district").val();
    if (item_quanhuyen != 'none') {
        item_quanhuyen_cond = '%20quanhuyen=' + item_quanhuyen;
    } else {
        item_quanhuyen_cond = '%20quanhuyen=1=1';
    }
    url_call_station = 'services/data_station.php?'
        + item_loaitram_cond + '&' + item_quanhuyen_cond;

    /*** Cập nhật lại hiển thị của dữ liệu quan trắc ***/
    view_data_quantrac.refresh(url_call_station);
});