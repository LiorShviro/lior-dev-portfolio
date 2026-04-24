export const posts = [
  {
    date: '2026.04.15',
    slug: 'fine-tuning-llms-for-domain-specific-rag',
    title: 'Fine-tuning LLMs for Domain-Specific RAG: Lessons Learned',
    excerpt:
      'What actually moved the needle when tuning an open-weights model for a narrow retrieval-augmented workflow — and what turned out to be noise.',
    body: `
Retrieval-augmented generation (RAG) is often pitched as a way to avoid fine-tuning. In practice, the two are complements, not substitutes. This note captures a few lessons from a recent project that combined both.

## The setup

We had a corpus of roughly 120k internal documents and a question-answering surface used by analysts. The baseline was off-the-shelf \`gpt-4o-mini\` plus a vector store. It worked — but answers felt generic, and citations were loose.

## What helped

- **Tuning the retriever, not the generator.** Most of the quality gap came from retrieval, not generation. A small bi-encoder fine-tuned on in-domain query/passage pairs outperformed every generator-side change we tried.
- **Instruction tuning on refusal patterns.** We taught the model when *not* to answer. This dropped hallucinations more than any prompt tweak.
- **Hard negatives from the real traffic.** Synthetic negatives looked great in evals and did nothing in production.

## What didn't

- LoRA on the generator for "style." Users did not notice.
- Reranking with a cross-encoder. The latency cost did not pay for itself at our traffic.

## Takeaway

Before reaching for a fine-tune, instrument retrieval. The generator is rarely the bottleneck.
`,
  },
  {
    date: '2026.03.28',
    slug: 'structured-outputs-in-production-ai',
    title: 'The Case for Structured Outputs in Production AI Systems',
    excerpt:
      'Why JSON-mode and schema-constrained generation are the single biggest reliability win you can ship to a real AI product.',
    body: `
If you run an LLM in production and your post-processing begins with \`response.split(...)\`, you have a problem. Structured output modes solve it.

## The failure we kept seeing

The model mostly returned JSON. Sometimes it wrapped it in markdown fences. Sometimes it added a prose preamble. Sometimes it hallucinated a trailing key. Our parser grew regex after regex.

## What we switched to

Schema-constrained generation, where the API enforces a JSON schema at decode time. Two things changed:

1. **Error rates collapsed.** Parse failures went from ~2% to effectively zero.
2. **Prompts got shorter.** We deleted the "respond only in valid JSON with no additional text" boilerplate from every prompt.

## Caveats

- Schema enforcement can bias the model toward shorter or more conservative answers. Watch quality metrics.
- Not all providers support it at the same tier. Budget accordingly.

## Takeaway

Treat model output like any other untrusted input: validate it at the boundary. Structured outputs turn that validation from a fragile regex into a type check.
`,
  },
]
