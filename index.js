$(document).ready(function() {
    $('input[type="radio"]').on('change', function() {
        let results = '合計金額: <br>';
        let sum = 0;
        $('input[type="radio"]:checked').each(function() {
            sum += parseInt($(this).val());
        });
        $('#result').html(results + sum + '円');
    });
});