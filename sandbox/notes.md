# OpenAI APIs
## Docs

https://beta.openai.com/docs/quickstart/introduction

## Usage

Free-Trial includes $18.00 worth of credits.

Billing mode: Pay-as-you-go, billed at the end of each calendar month for usage during that month.

### Pricing

https://openai.com/api/pricing/

#### Base Model

* Ada (Fastest): $0.0004  / 1K tokens.
* Babbage: $0.0005  / 1K tokens
* Curie: $0.0020  / 1K tokens
* Davinci (Most powerful): $0.0200  / 1K tokens

Prices are per 1,000 tokens. You can think of tokens as pieces of words, where 1,000 tokens is about 750 words. This paragraph is 35 tokens.

#### Fine-Tuned Models

* Ada (Fastest):
    * Training: $0.0004  / 1K tokens.
    * Usage: $0.0016  / 1K tokens.
* Babbage:
    * Training: $0.0006  / 1K tokens.
    * Usage: $0.0024  / 1K tokens.
* Curie:
    * Training: $0.0030 / 1K tokens.
    * Usage: $0.0120  / 1K tokens.
* Davinci (Most powerful): $0.0200  / 1K tokens
    * Training: $0.0300 / 1K tokens.
    * Usage: $0.1200  / 1K tokens.

#### Embedding Models

* Ada (Fastest): $0.0040  / 1K tokens.
* Babbage: $0.0050  / 1K tokens
* Curie: $0.0200  / 1K tokens
* Davinci (Most powerful): $0.2000  / 1K tokens

## Models

### GPT3
https://beta.openai.com/docs/models/gpt-3
GPT-3 models can understand and generate natural language

#### Davinci
Most capable GPT-3 model. Can do any task the other models can do, often with less context. In addition to responding to prompts, also supports inserting completions within text.

Good at: Complex intent, cause and effect, summarization for audience

#### Curie
Very capable, but faster and lower cost than Davinci.

Good at: Language translation, complex classification, text sentiment, summarization

#### Babbage
Capable of straightforward tasks, very fast, and lower cost.

Good at: Moderate classification, semantic search classification

#### Ada

Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.
Good at: Parsing text, simple classification, address correction, keywords

Note: Any task performed by a faster model like Ada can be performed by a more powerful model like Curie or Davinci.

### Codex

The Codex models are descendants of our GPT-3 models that can understand and generate code. Their training data contains both natural language and billions of lines of public code from GitHub.
They’re most capable in Python and proficient in over a dozen languages including JavaScript, Go, Perl, PHP, Ruby, Swift, TypeScript, SQL, and even Shell.

#### Davinci
Most capable Codex model. Particularly good at translating natural language to code. In addition to completing code, also supports inserting completions within code.

#### Cushman
Almost as capable as Davinci Codex, but slightly faster. This speed advantage may make it preferable for real-time applications.

### Content Filter

The filter aims to detect generated text that could be sensitive or unsafe coming from the API. It's currently in beta mode and has three ways of classifying text- as safe, sensitive, or unsafe

## Glossary

### Completion

https://beta.openai.com/docs/api-reference/completions

The response to a prompt using the Completions API.

### Embeddings
https://beta.openai.com/docs/guides/embeddings
An embedding is a special format of data representation that can be easily utilized by machine learning models and algorithms. The embedding is an information dense representation of the semantic meaning of a piece of text. Each embedding is a vector of floating point numbers, such that the distance between two embeddings in the vector space is correlated with semantic similarity between two inputs in the original format. For example, if two texts are similar, then their vector representations should also be similar.

### Prompt
A text string given as input to a model, the model will return a Completion in response to the prompt.

### Token
You can think of tokens as pieces of words used for natural language processing. For English text, 1 token is approximately 4 characters or 0.75 words. As a point of reference, the collected works of Shakespeare are about 900,000 words or 1.2M tokens.


## Features

### Text Completion
https://beta.openai.com/docs/api-reference/completions
Like very advanced auto-complete.

Input: a text prompt
Output: a text completion that attempts to match whatever instructions or context you gave it.

#### Limitations
* For most models, a single API request can only process up to 2,048 tokens (roughly 1,500 words) between your prompt and completion.

### Code Completion

### Moderation

### Search

### Answers

### Fine-Tuning
Fine-tuning allows you to provide hundreds or even thousands of examples to customize a model for your specific use case. This allows you to save space in individual prompts, since you don't have to provide examples in the prompt itself. The model is trained, upfront, with examples before a prompt is given.


## Prompt Design

* Prompts can be short and simple or long and complex.
* You can request the model to:
    * Suggest X - the model will propose a suggestion that fulfills the criteria you wrote.
    * Suggest N of X - the model will propose N suggestions that fulfill the criteria you wrote.
* You can provide examples in the prompt to help the model give a better answer.
* A good rule of thumb is to think about how you would write a word problem for a middle schooler to solve. 
* A well-written prompt provides enough information for the model to know what you want and how it should respond.
* With model Curie, we’re able to get one API call to answer four questions (more are possible) by providing a list of questions and then priming the prompt with the number one to indicate that the answers should relate to the questions that just preceded it.

## Settings

### Temperature

Range: 0.0 to 1.0

Temperature controls how deterministic a model's behavior will be. 
When set to zero, the model will always return the same response to a given request. 
When set to one, it will always respond differently.

It’s usually best to set a low temperature for tasks where the desired output is well-defined. 
Higher temperature may be useful for tasks where variety or creativity are desired, or if you'd like to generate a few variations for your end users or human experts to choose from.

## Libraries
### Python

`pip install openapi`

```python
import os
import openai
# Load your API key from an environment variable or secret management service
openai.api_key = os.getenv("OPENAI_API_KEY")
response = openai.Completion.create(
    model="text-davinci-002",
    prompt="Say this is a test",
    temperature=0,
    max_tokens=6
)
```

### Node.js

`npm install openai`

```javascript
const { Configuration, OpenAIApi } = require("openai");
const openai = new OpenAIApi(
    new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);
const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 6,
});
```

### Others
Here you will find links to community libraries in languages such as: Java, Go, C#, PHP, Ruby.

https://beta.openai.com/docs/libraries/community-libraries
