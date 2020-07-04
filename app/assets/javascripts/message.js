$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="main-chat__message-field__message-box">
          <div class="main-chat__message-field__message-box__message-info">
            <div class="main-chat__message-field__message-box__message-info__user-name">
              ${message.user_name}
            </div>
            <div class=".main-chat__message-field__message-box__message-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main-chat__message-field__message-box__message">
            <p class="main-chat__message-field__message-box__message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="main-chat__message-field__message-box">
        <div class="main-chat__message-field__message-box__message-info">
          <div class="MessageInfo__userName">
            ${message.user_name}
          </div>
          <div class="main-chat__message-field__message-box__message-info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="main-chat__message-field__message-box__message">
          <p class="main-chat__message-field__message-box__message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main-chat__message-field').append(html);      
      $('form')[0].reset();
      $('.main-chat__message-field').animate({ scrollTop: $('.main-chat__message-field')[0].scrollHeight});
      $(".submit-btn").prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  });
});