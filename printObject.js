(function ( $ ) {
    
       $.fn.printObject = function() {
           var $body = $("body");
           var html = $($body).html();
            $($body).empty().append($(this));
            window.print();
            $($body).html(html);
       };
    
   }( jQuery ));