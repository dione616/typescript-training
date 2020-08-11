import { MatchData, TeamData } from './../MatchData'
import { Analyzer } from './../Inheritance/Summary'

export type result = [string, number]

export class Analisis implements Analyzer {
  bestTeam: string = ''
  /*  constructor(public team: string) {} */
  run(matches: MatchData[]): result[] {
    const teams = this.getTeams(matches)
    let wins = 0
    let teamsResults: result[] = []

    //calc wins of teams
    for (let team of teams) {
      let teamWins = 0
      for (let match of matches) {
        if (match[1] === team && match[5] === 'H') {
          teamWins++
        } else if (match[2] === team && match[5] === 'A') {
          teamWins++
        }
        wins = teamWins
      }
      teamsResults.push([team, wins])
    }

    this.bestTeam = this.maxWins(teamsResults)
    return teamsResults
  }

  getTeams(matches: MatchData[]): string[] {
    let allTeams: string[] = ['Man City']
    for (let i = 0; i < matches.length; i++) {
      if (!allTeams.includes(matches[i][1])) allTeams.push(matches[i][1])
    }
    allTeams.pop()
    return allTeams
  }
  //get Team with most wins
  maxWins(teams: result[]): string {
    let bestTeam = ''
    let max = 0
    for (let i = 0; i < teams.length; i++) {
      if (teams[i][1] > max) {
        bestTeam = teams[i][0]
        max = teams[i][1]
      }
    }
    return bestTeam
  }
}
