export type RecommendationSeverity = 'positive' | 'caution' | 'info' | 'concern'

export type SafetyRecommendation = {
  icon: 'car' | 'alert' | 'walk' | 'shield' | 'route' | 'clock'
  label: string
  detail: string
  severity: RecommendationSeverity
}

export type SafetyExample = {
  id: string
  city: string
  region: string
  timeLabel: string
  userMessage: string
  verdictTitle: string
  verdictBody: string
  recommendations: SafetyRecommendation[]
  confidence: string
  evidenceNote: string
  mapNote: string
}
