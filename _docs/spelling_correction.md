# Spelling Correction

For instance, we may wish to retrieve documents containing the term carrot when the user types the query carot. Google reports (http://www.google.com/jobs/britney.html) that the following are all treated as misspellings of the query britney spears: britian spears, britney's spears, brandy spears and prittany spears


We look at two steps to solving this problem: the first based on *edit distance* and the second based on *k-gram overlap*. Before getting into the algorithmic details of these methods, we first review how search engines provide spell-correction as part of a user experience.

##  Implementing spelling correction

There are two basic principles underlying most spelling correction algorithms.

1. Of various alternative correct spellings for a mis-spelled query, choose the *nearest* one. This demands that we have a notion of nearness or proximity between a pair of queries. 
2. When two correctly spelled queries are tied (or nearly tied), select the one that is *more common*. For instance, grunt and grant both seem equally plausible as corrections for grnt. Then, the algorithm should choose the more common of grunt and grant as the correction. The simplest notion of more common is to consider the number of occurrences of the term in the collection; thus if grunt occurs more often than grant, it would be the chosen correction. A different notion of more common is employed in many search engines, especially on the web. The idea is to use the correction that is most common among queries typed in by other users. The idea here is that if grunt is typed as a query more often than grant, then it is more likely that the user who typed grnt intended to type the query grunt.

## Corpus

[Birkbeck spelling error corpus](http://ota.ox.ac.uk/headers/0643.xml)

## References

* [How to Write a Spelling Corrector. _Peter Norvig_. 2007](http://norvig.com/spell-correct.html)
* [Statistical Natural Language Processing in Python. _Peter Norvig_. 2007](http://nbviewer.jupyter.org/url/norvig.com/ipython/How%20to%20Do%20Things%20with%20Words.ipynb)
* [Spelling correction. _Introduction to Information Retrieval_. 2008](http://nlp.stanford.edu/IR-book/html/htmledition/spelling-correction-1.html)