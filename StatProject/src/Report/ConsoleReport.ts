import { Report } from './../Inheritance/Summary'
import { result } from '../Analisis/Analisis'
export class ConsoleReport implements Report {
  print(report: result[]): void {
    const sortedReport = report.sort((a, b): number => {
      if (a[1] > b[1]) return 1
      else return -1
    })
    console.log(sortedReport)
  }
}
