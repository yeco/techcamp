(function($) {
    
    var zebralize = function() {
        $("tr:nth-child(odd)").addClass("odd");
        $("tr:nth-child(even)").addClass("even");
    }
    
    /* loads all non-local links on _blank */
    var externalize = function() {
        $("body").delegate("a", "click",
        function(e) {
            var a = new RegExp('/' + window.location.host + '/');
            if (!a.test(this.href)) {
                e.preventDefault();
                e.stopPropagation();
                window.open(this.href, '_blank');
            }
        })
    }

    return init = {
        app: function() {
            externalize();

            if ($("article.agenda")[0]) {
                zebralize();
            }

        }
    }

})(window.jQuery);

$(function() { init.app() });



window.log = function() {
    log.history = log.history || [];
    log.history.push(arguments);
    if (this.console) {
        console.log(Array.prototype.slice.call(arguments));
    }
};

(function(doc) {
    var write = doc.write;
    doc.write = function(q) {
        log('document.write(): ', arguments);
        if (/docwriteregexwhitelist/.test(q)) write.apply(doc, arguments);
    };
})(document);
