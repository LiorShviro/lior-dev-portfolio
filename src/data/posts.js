export const posts = [
  {
    date: '2025.04.30',
    slug: 'predicting-hotel-cancellations-with-ml',
    title: 'Predicting Hotel Cancellations: A Data Mining Walkthrough',
    excerpt:
      'How we built a classifier on 27K hotel booking records — from messy raw data to a production-ready Random Forest that beats the naive baseline by a wide margin.',
    body: `
Hotel cancellations cost the industry billions annually. For this university data mining project, the goal was simple: given a booking record, predict whether it will be canceled before the guest arrives. What made it interesting was the messiness of the data and how much the choice of model mattered.

## The dataset

27,213 hotel booking records with features spanning lead time, booking channel, customer type, room type, deposit policy, and historical cancellation rate. The target variable is binary: canceled or not.

The class distribution was imbalanced — roughly 37% cancellations — so accuracy alone was a poor metric. We focused on F1-score and AUC throughout.

## Preprocessing

Raw data required:

- **Missing value imputation** for agent and company fields (most were legitimately absent, meaning direct bookings)
- **Feature engineering**: derived stay duration from arrival date + nights booked; combined country-level and channel-level features
- **Normalization** on continuous features before tree-based models (technically optional, but kept the pipeline consistent across all classifiers)

One non-obvious decision: we kept the \`previous_cancellations\` and \`booking_changes\` fields even though they could be considered leakage depending on your prediction window. For a tool aimed at front-desk staff checking in the week before arrival, they're fair game.

## Models compared

We evaluated three classifiers:

| Model | F1-score | AUC |
|---|---|---|
| Decision Tree | 0.71 | 0.79 |
| Random Forest | **0.83** | **0.91** |
| CatBoost | 0.81 | 0.89 |

Decision Trees overfit without careful depth tuning. CatBoost was competitive but added complexity without a meaningful edge. Random Forest hit the best balance of performance and interpretability.

## What drove the predictions

Feature importance from the Random Forest consistently ranked:

1. **Lead time** — far and away the strongest signal. Bookings made 6+ months out cancel at much higher rates.
2. **Deposit type** — non-refundable deposits reduced cancellations sharply.
3. **Previous cancellations** — guests who had canceled before were much more likely to cancel again.
4. **Distribution channel** — OTA bookings canceled at higher rates than direct bookings.

## Takeaway

For tabular classification on structured hotel data, Random Forest outperformed both simpler and more complex alternatives. The real leverage was feature engineering — particularly computing stay duration and handling missing agent/company IDs correctly — rather than model selection. Getting the data right mattered more than getting the algorithm right.
`,
  },
  {
    date: '2025.05.23',
    slug: 'shallow-vs-deep-image-classification-stl10',
    title: 'Shallow vs Deep: Comparing 5 Architectures on STL-10',
    excerpt:
      'What happens when you pit logistic regression against fine-tuned MobileNetV2 on the same image benchmark? The gap is larger than you expect — and where it comes from is instructive.',
    body: `
The STL-10 dataset is a standard image classification benchmark: 96×96 color images across 10 semantic classes (airplane, bird, car, cat, deer, dog, horse, monkey, ship, truck). For this project, we ran five architectures against each other on the same data to measure how much depth — and pre-training — actually buys you.

## The five architectures

1. **Logistic Regression** — flattened pixel values, pure linear model. The sanity-check baseline.
2. **Fully Connected Network** (~6.4M parameters) — three dense layers with ReLU, dropout, batch norm.
3. **Custom CNN** (~1.1M parameters) — three conv blocks, max pooling, global average pooling.
4. **MobileNetV2 (fixed features)** — pretrained ImageNet weights frozen, only a new classifier head trained.
5. **Fine-tuned MobileNetV2** — same as above, but later layers unfrozen and trained end-to-end at a low learning rate.

Images were resized to 64×64 for computational efficiency. All models trained with the same optimizer (Adam) and data augmentation (horizontal flip, random crop).

## Results

| Architecture | Test Accuracy |
|---|---|
| Logistic Regression | 31.2% |
| Fully Connected Network | 44.8% |
| Custom CNN | 58.1% |
| MobileNetV2 (fixed) | 67.3% |
| **MobileNetV2 (fine-tuned)** | **73.6%** |

The jump from scratch-trained CNN (58%) to frozen MobileNetV2 (67%) is purely from ImageNet pre-training — same architecture family, no additional training data. The further jump from frozen (67%) to fine-tuned (73.6%) comes from letting the network adapt its mid-level features to STL-10's specific distribution.

## What the gap tells you

Each step up the table represents a different source of improvement:

- **Logistic → FC**: Non-linearity helps. But spatial structure is ignored.
- **FC → CNN**: Spatial structure matters enormously for images. Convolutions dramatically outperform dense layers here.
- **CNN → Fixed MobileNetV2**: Pre-training on a large diverse dataset transfers well. You get better low-level and mid-level features for free.
- **Fixed → Fine-tuned**: Even well-learned features need to adapt when the target domain differs. Unfreezing later layers recovers meaningful accuracy.

## Practical takeaway

For image classification with a reasonably sized dataset, fine-tuned transfer learning is almost always the right starting point. Building from scratch only makes sense when your domain is genuinely unlike anything in ImageNet — medical imaging, satellite data, microscopy. For natural images, the question is which pretrained backbone to use, not whether to use one.
`,
  },
]
