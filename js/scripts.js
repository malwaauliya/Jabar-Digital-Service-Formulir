$(document).ready(function(){
    $("#addWorkData").click(function(){
        var singleRiwayat = $(".single-riwayat-master").html();
        var newSingleRiwayat = $('<div class="single-riwayat">' + singleRiwayat + '<button type="button" class="remove-riwayat btn btn-danger"><i class="fa fa-remove"></i></button>');
        newSingleRiwayat.find("input[name=riwayat_perusahaan]").val("");
        newSingleRiwayat.find("input[name=riwayat_posisi]").val("");
        newSingleRiwayat.find("input[name=riwayat_waktu]").val("");
        newSingleRiwayat.find("input[name=riwayat_waktu]").val("");
        newSingleRiwayat.appendTo(".list-riwayat-pekerjaan");
    });
});

$(document).on("click",".remove-riwayat", function(){
    $(this).closest(".single-riwayat").remove();
})