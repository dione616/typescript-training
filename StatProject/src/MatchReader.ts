import { MatchData } from './MatchData'
import { MatchResult } from './MatchResult'
import { stringToDate } from './utils'

interface DataReader {
  data: string[][]
  read(): void
}

export class MatchReader {
  constructor(public reader: DataReader) {}
  matches: MatchData[] = []

  load(): void {
    this.reader.read()
    this.matches = this.reader.data.map(
      (el: string[]): MatchData => {
        return [
          stringToDate(el[0]),
          el[1],
          el[2],
          parseInt(el[3]),
          parseInt(el[4]),
          el[5] as MatchResult,
          el[6],
        ]
      }
    )
  }
}
