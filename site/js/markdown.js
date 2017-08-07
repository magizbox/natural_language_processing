/**
 * Created by rain on 2/8/2017.
 */

// MathJax.Hub.Queue(function(){
//     var converter = new showdown.Converter();
//     $(".markdown").each(function (i, e) {
//         var text = $(e).text().trim();
//         $(e).html(converter.makeHtml(text));
//     });
// });
HTML_MAP = {
    "_": "&#95;",
    "*": "&#42;"
};

HTML_REVERSE_MAP = Object.keys(HTML_MAP).reduce(function (obj, key) {
    obj[HTML_MAP[key]] = key;
    return obj;
}, {});

function mapString(text, map) {
    var output = text;
    Object.keys(map).forEach(function (k) {
        var pattern = "";
        if (k == "*") {
            pattern = new RegExp("\\*", "gi");
        } else {
            pattern = new RegExp(k, "gi");
        }
        output = output.replace(pattern, map[k]);
    });
    return output;
}

function escapseHTML(text) {
    var x =  text.slice(0, 2);
    var output = "";
    if(x == "\\("){
        output = "&bm;" + mapString(text.slice(2, -2), HTML_MAP) + "&em;";
    } else {
        output = "&bfm;" + mapString(text.slice(2, -2), HTML_MAP) + "&efm;";
    }
    return output;
}

function unescapeHTML(text) {
    var output = "";
    if(text.slice(0,4) === "&bm;"){
        output = "\\(" + mapString(text.slice(4, -4), HTML_REVERSE_MAP) + "\\)";
    } else {
        output = "$$" + mapString(text.slice(5, -5), HTML_REVERSE_MAP) + "$$";
    }
    return output;
}

$(document).ready(function () {
    var converter = new showdown.Converter();
    showdown.extension('codehighlight', function () {
        function htmlunencode(text) {
            return (
                text
                    .replace(/&amp;/g, '&')
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>')
            );
        }

        return [
            {
                type: 'output',
                filter: function (text, converter, options) {
                    // use new shodown's regexp engine to conditionally parse codeblocks
                    var left = '<pre><code\\b[^>]*>',
                        right = '</code></pre>',
                        flags = 'g',
                        replacement = function (wholeMatch, match, left, right) {
                            // unescape match to prevent double escaping
                            match = htmlunencode(match);
                            return left + hljs.highlightAuto(match).value + right;
                        };
                    return showdown.helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
                }
            }
        ];
    });
    $(".markdown").each(function (i, e) {
        var text = $(e).text().trim();
        var output = text;
        output = output.replace(/\\\(.*?\\\)/g, function (t) {
            return escapseHTML(t);
        });
        output = output.replace(/\$\$.*?\$\$/g, function (t) {
            return escapseHTML(t);
        });
        output = converter.makeHtml(output);
        output = output.replace(/&bm;.*?&em;/g, function (t) {
            return unescapeHTML(t);
        });
        output = output.replace(/&bfm;.*?&efm;/g, function (t) {
            return unescapeHTML(t);
        });
        $(e).html(output);
    });
});

