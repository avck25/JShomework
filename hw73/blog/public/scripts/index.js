(function () {
    const addComment = $('.addComment'),
        comments = $('.commentForm');
    let commenterName = $('.commenterName'),
        commentBody = $('.commentBody'),
        theId = $('.theId');



    $('.addComment').each(function () {
        $(this).click(() => {
            console.log($(this).parent());
            $(this).parent().find(comments).show();
        });
    });

    $('.hideComment').each(function () {
        $(this).click(() => {
            $(this).parent().hide();
        });
    });

    $('.postComment').each(function () {
        $(this).click(() => {
            let parent = $(this).parent();

            $.post('/newComment', { id: parent.find(theId).val(), name: parent.find(commenterName).val(), body: parent.find(commentBody).val() }

            );
            parent.hide();
        });
    });
}());