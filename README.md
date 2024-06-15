**EmotiCare**

The aim of this project is to develop a functional suicide prevention website, that includes- a predictive model to detect suicidal intent in social media posts, and to integrate this model into a mental health chatbot; questionnaires to identify trigger signs, signs or symptoms in a person has a suicidal intent; calming practices; helpline numbers and links to therapists and psychiatrists for those who need help.

1. **Suicidal intent detection model**

*Data Set Used*

[Suicide and Depression Detection](https://www.kaggle.com/datasets/nikhileswarkomati/suicide-watch), obtained from Kaggle, scraped from Reddit. We used first 10,000 rows of the same.

*Data preprocessing*

Text is preprocessed by removing white spaces, accented characters, URLs, symbols and digits. Contractions are expanded, characters converted to lower case, spellings fixed.
Libraries used: pandas, numpy, spacy, unidecode, contractions, re, wordninja, collections, pkg_resources, spellchecker, symspellpy
Refer `data_preprocessing.ipynb` 

*Data Cleaning*

Preprocessed data is then cleaned: rows with 0 text length removed, text rows tokenized, subset dataset obtained with fixed number of words in each post.
Libraries used: pandas, matplotlib.pyplot, Tokenizer, seaborn
Refer `data_cleaning.ipynb`

*Word2Vec Model*

Vocabulary defined consisting of words with minimum occurence of 2, model is trained with 10 EPOCHS.
Libraries used: pandas, numpy, train_test_split, Word2Vec, time, collections
Refer `word2vec_model.ipynb`

*Model Building*

Libraries: pandas, numpy, sklearn.model_selection: train_test_split, sklearn.linear_model: LogisticRegression 
Refer `logit_model.ipynb`

*Chatbot Integration*

2. **Music Therapy**

In the realm of mental health interventions, music therapy proves invaluable for suicide prevention projects. Acknowledged for its holistic approach, this expressive therapy stands as a promising adjunct to conventional treatments. Focused on enhancing emotional and psychological well-being, the project delves into the impactful role of music therapy in mitigating mental health challenges linked to suicidal ideation.

Various links to calming music is provided.

3. **Videos and Blogs**

In the landscape of suicide prevention, leveraging the power of videos and blogs is instrumental in dispelling myths and fostering awareness. Recognizing the potential impact of multimedia content, this project aims to create engaging videos and informative blogs. By debunking misconceptions surrounding suicide, the initiative strives to provide a platform for open dialogue, promote understanding, and contribute to breaking down the stigma associated with mental health challenges.

4. **Helpline**

Launching a vital initiative, this project connects users to dedicated helplines aimed at supporting individuals experiencing suicidal tendencies. This crucial service provides a lifeline for users in distress, offering immediate assistance and a compassionate ear. This project endeavors to be a beacon of hope, emphasizing the importance of reaching out during critical moments.

**Contributors**

Neze Papreja

Anvaya Solanki

Sanya Garg
