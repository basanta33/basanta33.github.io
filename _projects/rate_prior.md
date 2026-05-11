---
layout: page
title: Hidden cost of Rate Discretization
description: How the number of rate categories affects phylogenetic inference
img: assets/img/rate_prior_intro.png
importance: 1
category: academic
related_publications: false
---

Models of among-character rate variation are a cornerstone of modern phylogenetic inference.
As the true biological distribution of rate variation among characters is unknown, e.g., it could be either a unimodal continuous distribution or simply two categories (fast vs slow), the most robust approach is yet uncertain.
Current approaches simply assume that true rate variation is unimodal and approximate a continuous distribution of rates (e.g., Gamma or Lognormal) using a finite number of categories, 𝑘.
This discretization is a critical technical step, yet the consequences of mismatches between the number of categories used for inference versus the true generating process, and how these effects interact with the underlying level of rate heterogeneity, are not well understood.
Here, we investigate the sensitivity of parameter inference to the choice of 𝑘 and the discretization method (mean vs. median) using simulation studies under both Gamma and Lognormal among-character rate variation (ACRV) models.
We explored different magnitudes of rate variation, from low (rates spanning one order of magnitude) to high (rates spanning three orders of magnitude).
We find that mismatches in 𝑘 lead to systematic and severe biases in the estimation of the rate heterogeneity shape parameter.
Critically, these biases propagate to other key parameters.
In both Gamma and Lognormal ACRV models, when the rate variation is low, even though the shape parameter estimates are inaccurate, the tree length is remarkably robust.
Whereas in presence of higher magnitude of rate variation, this robustness breaks down, and mismatches between the true and inferred number of categories 𝑘 lead to significant biases in tree length estimation.
We demonstrate that 𝑘 -mismatch leads to severe, systematic biases in rate parameters and under high heterogeneity, significant misestimation of total tree length, challenging the robustness of downstream analyses.
