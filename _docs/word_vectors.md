## Discrete Representation

Use a taxonomy like WordNet that has hypernyms (is-a) relationships

```python
from nltk.corpus import wordnet as wn
panda = wn.synset("panda.n.01")
hyper = lambda s: s.hypernyms()
list(panda.closure(hyper))
```

```
[Synset('procyonid.n.01'),
 Synset('carnivore.n.01'),
 Synset('placental.n.01'),
 Synset('mammal.n.01'),
 Synset('vertebrate.n.01'),
 Synset('chordate.n.01'),
 Synset('animal.n.01'),
 Synset('organism.n.01'),
 Synset('living_thing.n.01'),
 Synset('whole.n.02'),
 Synset('object.n.01'),
 Synset('physical_entity.n.01'),
 Synset('entity.n.01')]
```

```python
wn.synsets("good")
```

```
[Synset('good.n.01'),
 Synset('good.n.02'),
 Synset('good.n.03'),
 Synset('commodity.n.01'),
 Synset('good.a.01'),
 Synset('full.s.06'),
 Synset('good.a.03'),
 Synset('estimable.s.02'),
 Synset('beneficial.s.01'),
 ...
```

```python
wn.synsets("bad")
```

```
[Synset('bad.n.01'),
 Synset('bad.a.01'),
 Synset('bad.s.02'),
 Synset('bad.s.03'),
 Synset('bad.s.04'),
 Synset('regretful.a.01'),
 Synset('bad.s.06'),
 Synset('bad.s.07'),
 Synset('bad.s.08'),
 ...
```

**Problems with this discrete representation**

* Great as resource but missing nuances, e.g. **synonyms**: adept, expert, good, practiced, proficient, skillful?
* Missing new words (impossible to keep up to date): wicked, badass, nifty, crack, ace, wizard, genius, ninjia
* Subjective
* Requires human labor to create and adapt
* Hard to compute accurate word similarity

## Word2Vec

Word2vec is a group of related models that are used to produce word embeddings. These models are shallow, two-layer neural networks that are trained to reconstruct linguistic contexts of words. Word2vec takes as its input a large corpus of text and produces a vector space, typically of several hundred dimensions, with each unique word in the corpus being assigned a corresponding vector in the space. Word vectors are positioned in the vector space such that words that share common contexts in the corpus are located in close proximity to one another in the space.

Word2vec was created by a team of researchers led by Tomas Mikolov at Google. The algorithm has been subsequently analysed and explained by other researchers. Embedding vectors created using the Word2vec algorithm have many advantages compared to earlier algorithms like Latent Semantic Analysis.

**Main Idea of Word2Vec**

* Instead of capturing cooccurrence counts directly,,
* Predict surrounding words of every word
* Both are quite similar, see "Glove: Global Vectors for Word Representation" by Pennington et at. (2014) and Levy and Goldberg (2014)... more later.
* Faster and can easily incorporate a new sentence/document or add a word to the vocabulary.

**Detail of Word2Vec**

* Predict surrounding words in a window of length m of every word.
* Objective function: Maximize the log probability of any context word given the current cenetr word:

$$J(\theta) = \frac{1}{T} \sum_{t=1}^{T} \sum_{-m \le j \le m, j \ne 0} log\ p(w_{t+j}|w_t) $$

where \( \theta \) represents all variables we optimize

* Predict surrounding words in a window of length m of every word
* For \( p(w_{t+j}|w_t) \) the simplest first formulation is

$$p(o|c) = \frac{exp(u^T_o v_c)}{\sum_{w=1}^{W} exp(u^T_w v_c)}$$

where o is the outside (or output) word id, c is the center word id, u and v are "center" and "outside" vectors of o and c

* Every word has two vectors!
* This is essentially "dynamic" logistic regression

**Linear Relationships in word2vec**

These representations are *very good* at encoding dimensions of similarity!

* Analogies testing dimensions of similarity can be solved quite well just by doing vector subtraction in the embedding space


Syntactically

* \( x_{apple} - x_{apples} \approx x_{car} - x_{cars} \approx x_{family} - x_{families} \)
* Similarly for verb and adjective morphological forms

Semantically (Semeval 2012 task 2)

* \( x_{shirt} - x_{clothing} \approx x_{chair} - x_{furniture} \)
* \( x_{king} - x_{man} \approx x_{queen} - x_{woman} \)

## GloVe

[Project](https://nlp.stanford.edu/projects/glove/)
- [Highlights](https://nlp.stanford.edu/projects/glove/)
- [Training](https://nlp.stanford.edu/projects/glove/)
- [Model Overview](https://nlp.stanford.edu/projects/glove/)

GloVe is an unsupervised learning algorithm for obtaining vector representations for words. Training is performed on aggregated global word-word co-occurrence statistics from a corpus, and the resulting representations showcase interesting linear substructures of the word vector space.

## Pre-trained Model

**[fastText](https://github.com/facebookresearch/fastText/)**

Pre-trained word vectors for `294 languages`, trained on *Wikipedia* using fastText. These vectors in dimension 300 were obtained using the skip-gram model described in Bojanowski et al. (2016) with default parameters.

**[glove](https://nlp.stanford.edu/projects/glove/)**

Pre-trained word vectors. This data is made available under the Public Domain Dedication and License v1.0 whose full text can be found at: http://www.opendatacommons.org/licenses/pddl/1.0/.

Language: `English`

* *Wikipedia 2014* + *Gigaword 5* (6B tokens, 400K vocab, uncased, 50d, 100d, 200d, & 300d vectors, 822 MB download): [glove.6B.zip](http://nlp.stanford.edu/data/glove.6B.zip)
* *Common Crawl* (42B tokens, 1.9M vocab, uncased, 300d vectors, 1.75 GB download): [glove.42B.300d.zip](http://nlp.stanford.edu/data/glove.42B.300d.zip)
* *Common Crawl* (840B tokens, 2.2M vocab, cased, 300d vectors, 2.03 GB download): [glove.840B.300d.zip](http://nlp.stanford.edu/data/glove.840B.300d.zip)
* *Twitter* (2B tweets, 27B tokens, 1.2M vocab, uncased, 25d, 50d, 100d, & 200d vectors, 1.42 GB download): [glove.twitter.27B.zip](http://nlp.stanford.edu/data/glove.twitter.27B.zip)

**[word2vec-GoogleNews-vectors](https://github.com/mmihaltz/word2vec-GoogleNews-vectors)**

Language: `English`

Pre-trained *Google News* corpus (3 billion running words) word vector model (3 million 300-dimension English word vectors).

## Word Analogies

Test for linear relationships, examined by Mikolov et at. (2014)

## Suggested Readings

* Simple Word Vector representations: word2vec, GloVe. [cs224d.stanford.edu](http://cs224d.stanford.edu/lectures/CS224d-Lecture2.pdf). Last Accessed: 2017-02-01.
* FastText and Gensim word embeddings. [rare-technologies.com](https://rare-technologies.com/fasttext-and-gensim-word-embeddings/). Last Accessed: 2016-08-31.
* Distributed Representations of Words and Phrases
and their Compositionality. [papers.nips.cc](http://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf). Last Accessed: 2013-12-05.
* Efficient Estimation of Word Representations in Vector Space. [arxiv.org](https://arxiv.org/pdf/1301.3781.pdf). Last Accessed: 2013-01-16