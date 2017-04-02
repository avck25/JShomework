(function () {
    'use strict';
    let socket = io();

    const addCommentGUI = $(`<div>
                                <textarea id="commentContent"></textarea>
                                <button id="addComment">add</button>
                                <button id="cancelComment">cancel</button>
                           </div>`),
        commentContent = addCommentGUI.find('#commentContent');

    $(document).on('click', '.addComment', e => {
        const theTarget = $(e.target);
        theTarget.after(addCommentGUI);
        addCommentGUI.show();
        theTarget.hide();
    });

    function hideAddCommentGUI() {
        addCommentGUI.hide();
        $('#commentContent').val('');
        $('.addComment').show();
    }

    $(document).on('click', '#addComment', e => {
        $.post('/addComment', {
            id: $(e.target).closest('.post').attr('id'),
            content: $('#commentContent').val()
        });
        hideAddCommentGUI();
    });

    $(document).on('click', '#cancelComment', e => {
        hideAddCommentGUI();
    });

    $(document).on('click', '.showComment', e => {
        console.log('here');
        //socket.emit('showComment', { id: $(e.target).closest('.post').attr('id') });
        $.post('/showComment', {
            id: $(e.target).closest('.post').attr('id')
        });
    });




    socket.on('comment', data => {
        /*
        <div>{{content}}</div>
        <div class="attribution">Posted by {{author}} at {{date}}</div>
        */

        $('#' + data.post).find('.comments').append(data.comment);
    });
}());