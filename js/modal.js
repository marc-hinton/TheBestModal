function closeModal(modal) {
    modal.removeClass('active');
}

function openModal(modal) {
    modal.addClass('active');
}

$('*[open-modal="true"]').click(function() {
    var modal = $(this).attr('modal-id');

    openModal($(`.modal#${modal}`));
});

$('.modal').click(function(e) {
    var clickTarget = $(e.target);

    if (clickTarget.attr('class') == 'inner_modal') {
        closeModal(clickTarget.closest('.modal'));
    }
});