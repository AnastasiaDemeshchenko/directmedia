$('body').on('#submit_send', '.form.ajax_submit', function(e) {
    e.preventDefault()
        $.fancybox.close()

        $.fancybox.open({
            src : $('#success_modal'),
            type : 'inline',
            opts : {
                touch : false,
                speed : 300,
                backFocus : false,
                trapFocus : false,
                autoFocus : false,
                mobile : {
                    clickSlide: "close"
                }
            }
        });
  });