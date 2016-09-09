$(document).ready(function () {
    $("#addString").click(function () {
        $(".phoneBook").append("<tr class=\"emptyField\"><td class=\"queueNum\"></td></tr>");
        var newPerson = $(".newContact");
        $.each(newPerson, function () {
            var str = "";
            $(".emptyField").append(str.concat("<td>", $(this).val(), "</td>"));
        });
        $(".emptyField").append("<td ><input type=\"checkbox\"/></td>");
        //$(".emptyField").append("<td><button class=\"removeContact\"><img src=\"phonebook_files/remove-button.png\" alt=\"удалить\"></button></td>");
        $("tr").removeClass("emptyField");

        getQueueNum();

    });
    $("#removeContact").click(function () {
        $(":checked").closest("tr").remove();
        getQueueNum();
    });

    function getQueueNum() {
        var queueNumField = $(".queueNum");
        var queueNumValue = 1;
        $.each(queueNumField, function () {
            $(this).text(queueNumValue);
            ++queueNumValue;
        });
    }
});