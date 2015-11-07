var assert = require('assert');
Ngram = require('../index.js');

describe('Ngrams', function() {
		it ('should be ngramed', function() {
			var ngram = new Ngram();
			var s = ngram.ngram('le van duyet le van duyet le van duyet');

            assert.equal(9, s.length);
		});

});