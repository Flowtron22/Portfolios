export const mobaScaling = {
  slug: 'moba-hero-power-scaling',
  title: 'Testament Design MOBA Hero Power Scaling',
  cover: 'assets/design/moba-power-curves.png',
  summary: 'Adjust hero stats, damage curves and item timing in seven interactive balance experiments.',
  sections: [
    {
      heading: 'Find the hero’s power window',
      paragraphs: [
        'Pick the phase in which a hero should have the most influence. The chart compares illustrative role profiles on a relative index. A value of 100 represents the baseline for that phase. Switch between early pressure and late carry to see how the opportunity moves across the match.'
      ],
      demo: 'moba-curve'
    },
    {
      heading: 'Allocate the power budget',
      paragraphs: [
        'Choose a role to redistribute 100 design points. Then set how each capability performs against its target. The index multiplies each role weight by its performance ratio and adds the results. A score of 102 indicates that the weighted model sits above its targets. It does not predict a 2% gameplay advantage.'
      ],
      demo: 'moba-budget',
      references: [{label:'Riot Games on champion power budgets',href:'https://www.leagueoflegends.com/en-us/news/dev/champion-insights-gwen/'}]
    },
    {
      heading: 'Choose when stats arrive',
      paragraphs: [
        'Linear growth adds the same amount at every level. The back-loaded model uses the same total gain by level 18 and grants more of it near the end. Compare both at level 6 and level 18 to see how one growth rule changes early durability.'
      ],
      demo: 'moba-growth'
    },
    {
      heading: 'Set the damage crossover',
      paragraphs: [
        'Raw ability damage is base damage plus attack damage multiplied by its coefficient. Move the attack damage slider to compare three abilities. Then adjust the carry’s base damage or coefficient and watch its crossover with the early fighter move.',
        'To design backward from two targets, divide the change in desired damage by the change in attack damage. Subtract the resulting coefficient times early attack damage from the early damage target to get the base.'
      ],
      demo: 'moba-damage'
    },
    {
      heading: 'Design from time to kill',
      paragraphs: [
        'Set a target health and armor, then choose how long you want it to survive. The simulator compares the current attacker with the attack damage needed to hit your target time. Try doubling armor first. Then raise attack speed and critical chance together to see how they compound.',
        'For this physical-only model, effective health is HP × (1 + armor ÷ 100). Expected raw DPS is attack damage × attacks per second × the average critical multiplier. The estimate assumes continuous hits without healing, shields or interruptions.'
      ],
      demo: 'moba-survival'
    },
    {
      heading: 'Compare burst, uptime and utility',
      paragraphs: [
        'Pick Meteor, then compare its damage per hit and expected DPS with Magic Missile. Effective cooldown is base cooldown ÷ (1 + haste ÷ 100). Expected DPS also accounts for how often the ability hits.',
        'A disable can prevent damage while the target is unable to act. The estimate assumes the enemy would attack for the full duration. Test spacing, vision and displacement in playtests, where their value depends on position and timing.'
      ],
      demo: 'moba-ability'
    },
    {
      heading: 'Test item timing and snowballing',
      paragraphs: [
        'Item timing is price divided by gold per minute in this example. Compare the same item at different incomes, then adjust the independent lead model. Both lines start at 100. An offset that matches the growth rate keeps the lead index steady.'
      ],
      demo: 'moba-economy',
      references: [{label:'Riot Games on item power and snowballing',href:'https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-19-notes/'}]
    },
    {
      heading: 'Validate the curve in playtests',
      steps: [
        'Record the intended role, strong phase, and the counterplay an opponent should have.',
        'Put base stats, skill coefficients, item cost and target time to kill in one balance matrix. Compare levels, builds and matchups before changing a global rule.',
        'Compare the intended curve to win rates by match duration, player skill, and mastery. Read those alongside item timing and pick or ban rates. A carry may reach its late-game spike too safely even when the late-game damage itself is on target.',
        'When the numbers look right but the ability still feels unfair, test a visible wind-up, a dodgeable projectile, or a resource cost.'
      ],
      references: [
        {label:'Riot Games Champion Balance Framework',href:'https://www.leagueoflegends.com/en-gb/news/dev/dev-champion-balance-framework/'},
        {label:'Riot Games on mastery curves and new champions',href:'https://www.leagueoflegends.com/en-us/news/dev/dev-balancing-new-champions/'}
      ]
    }
  ]
};
