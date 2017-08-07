## Conditional Random Fields in Name Entity Recognition

In this tutorial, I will write about how to using CRF++ to train your data for name entity recognition task.

Environment:

* Ubuntu 14.04

### Install CRF++

1. Download CRF++-0.58.tar.gz

2. Extact CRF++-0.58.tar.gz file

3. Navigate to the location of extracted folder through

4. Install CRF++ from source

```
./configure
make
sudo make install
ldconfig
```

Congratulations! CRF++ is install

```
crf_learn
```

### Training CRF

To train a CRF using CRF++, you need 2 things:

* A template file: where you define features to be considered for training
* A training data file: where you have data in CoNLL format

```
crf_learn -t template_file train_data_file model

crf_learn -t template train.txt model
```

A binary of model is produce.

To test this model, on a testing data

```
crf_test -m model testfile > output.txt

crf_test -m model test.txt > output.txt
```

## References

* [Conditional Random Fields : Installing CRF++ on Ubuntu](https://www.youtube.com/watch?v=6b3DmE2jYzg)
* [Conditional Random Fields Training and Testing using CRF++](https://www.youtube.com/watch?v=LDNYT9Ai2NU)
