'use strict';

(function() {
    var root = this;
    var has_require = typeof require !== 'undefined';
    
    if (typeof _ === 'undefined') {
        if (has_require) {
            var util = require('util');
            var _ = require('lodash');
            var cleaner = require('node-textcleaner');
            var Tokenizer = require('node-vntokenizer');
			var token = new Tokenizer();
        }
    else 
        throw new Error('Node-Ngram requires lodash');
    }

    var Ngrams = function(options) {
        var options = options || {};

        this.n = options.n || 2;

        this.keys = [];
    };

    /**
     * build ngrams from a sentences, an array of words
     */
    Ngrams.prototype.ngram = function(sentences, n) {
        if (typeof sentences === 'string')
            var words = this._tokens(sentences);
        else if (typeof sentences === 'array')
            var words = sentences; // Is array
        else 
            throw new Error("Input must be String or Array");

        var g = this;

        var ngramNumber = n || this.n || 2;
        var ngrams = [];
        var l = words.length;

        for (var i = 0; i < l; i++) {
            var ngram = _.slice(words, i, Math.min(i+ngramNumber, l));
            ngrams.push(ngram);
        }

        return ngrams;
    };

    /**
     * Short code for ngram(2)
     */
    Ngrams.prototype.bigram = function(sentences) {
        return this.ngram(sentences, 2);
    }

    /**
     * Short code for ngram(3)
     */
    Ngrams.prototype.trigram = function(sentences) {
        return this.ngram(sentences, 2);
    }

    /**
     * Tokenizer strings
     */
    Ngrams.prototype._tokens = function(s, filter) {
		return token.tokenize(s).map(function(word) {
        	if (filter !== undefined) {
                return filter.call(s, word);
            }
            return cleaner(word).toLowerCase();
        });
    }

    // Exports
    if( typeof exports !== 'undefined' ) {
        if( typeof module !== 'undefined' && module.exports ) {
            exports = module.exports = Ngrams;
        }
        exports.Ngrams = Ngrams;
    } else {
        root.Ngrams = Ngrams;
    }
}).call(this);