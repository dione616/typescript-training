import { stringToDate } from './utils'
import { MatchResult } from './MatchResult'
import { CsvFileReader } from './CsvFileReader'

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class MatchReader extends CsvFileReader<MatchData> {
  rowMap(el: string[]): MatchData {
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
}
