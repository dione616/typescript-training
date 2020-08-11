import fs from 'fs'
import { Report } from './../Inheritance/Summary'
import { result } from '../Analisis/Analisis'
export class HTMLReport implements Report {
  print(report: result[]): void {
    fs.writeFileSync('report.html', 'report 7888sdf')
  }
}
