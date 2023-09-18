---
layout: page
title: "Research"
permalink : /research/
---


My research has been mostly focusing on the morphological models for character evolution. 

Below are the projects I have worked in:

### 1. Species Delimitation of the Eastern Pinesnake complex.

The eastern Pinesnake (_Pituophis melanoleucus_) is found throughout eastern United States. Taxonomy in this group has been controversial with several conflicting species designations. 
Three subspecies of the eastern Pinesnake have been prevalant in the literature to their geographic locations and scale coloration: the northern Pinesnake (_P. m. melanoleucus_), the Florida Pinesnake (_P. m. mugitus_), and the Black Pinesnake (_P. m. lodingi_). 
Within the region, there are several major barriers to dispersal, particularly major river drainage systems and human modification of the longleaf pine habitat.  
Consistently, a lack of phylogenetic resolution has plagued these taxa in prior studies. 
The goal of this study was to examine the taxonomic validity of the eastern Pinesnake complex using single nucleotide polymorphisms (SNPs) isolated from ultra-conserved elements (UCEs) in phylogenetic and population genetic approaches.
Molecular species delimitation approaches indicated that the population of eastern Pinesnake exhibit population structure across its range that may rise to the level of being new species.



### 2. Role of Character Coding in Bayesian Morphological Phylogenetics. 

Phylogenetic trees establish a historical context for the study of organismal form and function. 
Most phylogenetic trees are estimated using a model of evolution. For molecular data, modeling evolution is often based on biochemical observations about changes between character states. 
For example, there are four nucleotides, and we can make assumptions about the probability of transitions between them. 
By contrast, for morphological characters, we may not know _a priori_ how many characters states there are per character, as both extant sampling and the fossil record may be highly incomplete, which leads to an observer bias. 
For a given character, the state space may be larger than what has been observed in the sample of taxa collected by the researcher. 
In this case, how many evolutionary rates are needed to even describe transitions between morphological character states may not be clear, potentially leading to model misspecification. 
We simulated character data with varying numbers of character states per character. 
We then used the data to estimate phylogenetic trees using models of evolution with the correct number of character states and an incorrect number of character states. 
The results of this study indicate that this observer bias may lead to phylogenetic error, particularly in the branch lengths of trees.


### 3. Site-Heterogeneous Discrete model of morphology. 

Modeling morphological character evolution for the estimation phylogenetic trees is challenging, in part due to challenges with assuming a single, common mechanism across a dataset.
Unlike molecular data, in which a nucleotide or amino acid may be assumed to have the same properties everywhere it occurs in an alignment, morphological character state may confer different meanings in different columns in a character matrix.
This complexity has inhibited the implementation of additional models of character evolution.
The Mk model is the most commonly used model for incorporating morphology in maximum likelihood and Bayesian phylogenetic estimation.
This model is a generalization of the Jukes-Cantor model which assumes that there is an equal rate of gains and losses in morphological traits.
This study explores the use of models that allow asymmetric transition rates.
In particular, I examine the use of two models to allow the equilibrium character frequency to vary. 
One model, assumes a Beta distribution as a prior on character frequencies.
This model is similar to a model implemented in MrBayes and can be used to allow asymmetrical transition rates in binary characters.
I also describe a Dirichlet model to allow asymmetrical transitions in multistate characters.
These two models can be used to explicitly model different character frequencies within one dataset, as opposed to assuming a single common mechanism with respect to among character frequency variation. 
I have also compared the models using stepping-stone analyses and model averaging using reversible jump Markov chain Monte Carlo. Additionally, I test for model adequacy using posterior predictive simulations to determine the adequacy of different models for morphological evolution.


### 4. Incorporating continuous characters in total evidence phylogenetic estimation of extinct lineages

Fossils are an important source of knowledge in understanding the diversity of the past. 
One of the major method to understanding the relation between species is phylogenetics. 
Phylogenetics strives to utilize the most objective information possible when attempting to discern the evolutionary relationships of life. 
In working with extant species, we do have more robust molecular information (e.g., DNA, RNA, Amino acids) which offers an objective measure that can be taken and compared across species. 
The same cannot be considered true for the paleontological world, where the vast majority of fossils cannot be used to obtain molecular information and we are limited to morphology to obtain the relationships. 
The use of discrete morphological characters has been explored to some extent in the scientific community, but 'discretizing' characters would be introducing more bias in their assumption as an informative evolutionary unit. 
For example, some fundamental units of a discrete character matrix are not even comparable to each other. 
The use of continuous characters - the measurements from fossils - could be a better alternative to discretizing the data. 
Some models that can be used to infer trees using character data include Brownian Motion and Ornstein-Uhlenbeck model. 
In this study, we explore these models using a dataset of Dicynodonts which are extinct stem mammals which existed during the Permian and Triassic Periods (299 - 201.5 Ma). 
We explore the utility of branch length-dependent character evolution models in estimation of phylogenetic trees. 
We find that continuous characters only do not positively impact our models during phylogenetic inference but with some refinement the results look promising. 
