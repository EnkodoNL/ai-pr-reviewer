export class TokenLimits {
  maxTokens: number
  requestTokens: number
  responseTokens: number
  knowledgeCutOff: string

  constructor(model = 'gpt-3.5-turbo') {
    this.knowledgeCutOff = '2021-09-01'
    switch (model) {
      case 'gpt-4-32k':
        this.maxTokens = 32600
        this.responseTokens = 4000
        break
      case 'gpt-3.5-turbo-16k':
        this.maxTokens = 50000
        this.responseTokens = 5000
        break
      case 'gpt-4':
        this.maxTokens = 8000
        this.responseTokens = 2000
        break
      case 'gpt-4-turbo-preview':
        this.maxTokens = 10000
        this.responseTokens = 4000
        this.knowledgeCutOff = '2023-12-01'
        break
      default:
        this.maxTokens = 4000
        this.responseTokens = 1000
        break
    }
    // provide some margin for the request tokens
    this.requestTokens = this.maxTokens - this.responseTokens - 100
  }

  string(): string {
    return `max_tokens=${this.maxTokens}, request_tokens=${this.requestTokens}, response_tokens=${this.responseTokens}`
  }
}
