import fs from 'fs'
import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'
import { Summary } from './Inheritance/Summary'
import { Analisis } from './Analisis/Analisis'
import { ConsoleReport } from './Report/ConsoleReport'

const reader = new CsvFileReader('football.csv')
const matches = new MatchReader(reader)
matches.load()

const teams = new Analisis()
const summary = new Summary(teams, new ConsoleReport())

summary.buildAndPrintReport(matches.matches)
console.log(teams.bestTeam)
