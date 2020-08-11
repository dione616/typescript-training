import { result } from './../Analisis/Analisis'
import { MatchData } from './../MatchData'
export interface Analyzer {
  run(matches: MatchData[]): result[]
}
export interface Report {
  print(report: result[]): void
}

export class Summary {
  constructor(public analyzer: Analyzer, public report: Report) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.report.print(output)
  }
}
