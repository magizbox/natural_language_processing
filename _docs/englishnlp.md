# English NLP

# Tasks

## Chunking

### Data

* [CoNLL-2000 Shared Task: Chunking](http://www.cnts.ua.ac.be/conll2000/chunking/), 259104 tokens

### Benchmark

**CoNLL-2000** (<i>score: F1(%)</i>)

<div class="benchmarks" gid="1GE0OOcPAL19TkUZJFF_qDePHg7uqYbXRGNdKZu19M0g"></div>
<div class="clearfix"></div>

### Related Readings

<div class="papers" gid="1VZ56rXHHFJErx84gNA4fcQlBt2gbxI9aTcFh6A9TXpk"></div>
<div class="clear-fix"></div>

## Named Entity Recognition

### Data

* [CoNLL-2003 Shared Task:Language-Independent Named Entity Recognition](http://www.clips.uantwerpen.be/conll2003/ner/)
* [MUC-7](https://www.aclweb.org/aclwiki/index.php?title=MUC-7_(State_of_the_art))

### Benchmark

**CoNLL-2003** (<i>score: F1</i>)

<div class="benchmarks" gid="1Fg81wPNnC6aFC3mFIzMJqyV3Ig9m5VT1rgKpMhWV9j0"></div>
<div class="clearfix"></div>

**MUC-7** (<i>score: F1</i>)

<div class="benchmarks" gid="1A2eXzFqubs-JjrqlaBpbxYizON0DfCJQH2OWoxWuRAw" scores="F1"></div>
<div class="clearfix"></div>

### Related Readings

<div class="papers" gid="1BFj9PZX8UFAgtsmFt9k18rd3NGP1gVkBfaK-eBfop_o"></div>
<div class="clear-fix"></div>

## Similarity

### Data

* [SemEval-2012 Task 2](https://sites.google.com/site/semeval2012task2/home), Measuring Degrees of Relational Similarity, graded relational similarity ratings across 79 relation categories
* [ESL Synonym Questions](https://www.aclweb.org/aclwiki/index.php?title=ESL_Synonym_Questions_(State_of_the_art)), 50 multiple-choice synonym questions; 4 choices per question, each question includes a sentence, providing context for the question, introduced in Turney (2001) as a way of evaluating algorithms for measuring degree of similarity between words
* [MC-28 Test Collection](https://www.aclweb.org/aclwiki/index.php?title=MC-28_Test_Collection_(State_of_the_art)), state of the art in Miller & Charles 28 (MC-28) dataset [Resnik, 1995], 28 word pairs of the original Miller & Charles 30 (MC-30) dataset [Miller and Charles, 1991], which is a subset of the Rubenstein & Goodenough (RG-65) dataset; two word pairs have generally been omitted for semantic similarity evaluation, as words in these word pairs have not been included in previous versions of WordNet

### Benchmark

**SemEval-2012 Task 2** (<i>score: MaxDiff, Spearman</i>)

<div class="benchmarks" gid="1NLnhK2BWdSK1ypa4vkdlu2_Ei_43UlwOSIbAc8pftc4" scores="MaxDiff,Spearman"></div>
<div class="clearfix"></div>

**ESL Synonym Questions** (<i>score: Correct</i>)

<div class="benchmarks" gid="1qHvwSWoZixeX64V1u05Va2AdTze86ZoEthuuJU4Ddwo" scores="Correct"></div>
<div class="clearfix"></div>

**MC-28 Test Collection** (<i>score: Spearman</i>)

<div class="benchmarks" gid="1FmYJwyCrv7z_9KWuUOiaJV2CCcizImxsawkRAKV-wME" scores="Spearman"></div>
<div class="clearfix"></div>

## Paraphase Identification

### Data

* [Microsoft Research Paraphrase Corpus](http://research.microsoft.com/en-us/downloads/607D14D9-20CD-47E3-85BC-A2F65CD28042/default.aspx), given a pair of sentences, classify them as paraphrases or not paraphrases, train: 4,076 sentence pairs (2,753 positive: 67.5%)
test: 1,725 sentence pairs (1,147 positive: 66.5%)

### Benchmark

**Microsoft Research Paraphrase Corpus** (<i>score: Accuracy, F</i>)

<div class="benchmarks" gid="1kW3PE79uFlx_mje1u_2_WBHkJtFoSXlxitdI8PzW7R8" scores="Accuracy,F"></div>
<div class="clearfix"></div>

## Question Answering

### Data

* [QA Answer Sentence Selection Dataset](http://cs.stanford.edu/people/mengqiu/data/qg-emnlp07-data.tgz): labeled sentences using TREC QA track data, provided by Mengqiu Wang and first used in Wang et al. (2007)

### Benchmark

**Raw Version of TREC QA** (<i>score: MAP, MRR</i>)

<div class="benchmarks" gid="1nQYWwoBpOFOE82Pv_Z47Utrk6Gfei6rAuzVc-vpcyoo" scores="MAP,MRR"></div>
<div class="clearfix"></div>

**Clean Version of TREC QA** (<i>score: MAP, MRR</i>)

<div class="benchmarks" gid="1nQYWwoBpOFOE82Pv_Z47Utrk6Gfei6rAuzVc-vpcyoo" scores="MAP,MRR"></div>
<div class="clearfix"></div>

