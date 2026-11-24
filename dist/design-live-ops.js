const slide = (name, caption) => ({
  src: `assets/design/live-ops/${name}.png`,
  width: 900,
  height: 507,
  alt: caption
});

export const liveOps = {
  slug: 'beyond-games-as-a-service-with-live-ops',
  title: 'Beyond Games as a Service with Live Ops',
  summary: 'Plan how a live game will respond to players after launch, from incident handling and iteration to community growth.',
  sections: [
    {
      heading: 'Decide what players will return for',
      paragraphs: [
        'Games as a service describes a business and distribution model. Digital distribution, ongoing updates and targeted offers help a studio sustain a game over time. Those choices leave a design question open. What recurring experience will players value enough to come back for?',
        'Crystin Cox’s GDC talk approaches that question through LiveOps, the work of caring for a connected game and its players over time. The game supplies a persistent experience, such as a character, a collection or a shared world. The team supplies a way to maintain and change that experience as players use it. Both need to be designed before launch.'
      ],
      figures: [slide('launch-roadmap', 'LiveOps roadmap from preproduction and launch through operations, optimization and community growth.')]
    },
    {
      heading: 'Build the feedback loop before launch',
      paragraphs: [
        'In preproduction, decide how players progress, why they return and how the game will earn revenue. For a co-op game, you might want new players to finish a mission with someone else on their first night and come back to try a harder one. That goal has implications for tutorial length, matchmaking, difficulty and what you ask players to buy.',
        'In production, decide which signals could support that goal. Record whether players reach matchmaking, get into a group and complete the first mission. Plan how the team will review feedback and who can change a rule or rerun an event. A release calendar helps you put work in front of players. A feedback pipeline tells you what to do after they get it.',
        'Rehearse a launch incident. Give the team a scenario in which rewards stop arriving after a match. Check who detects it, who can pause the reward rule, what you tell players, and how you confirm recovery. A small team can run this with named owners and a shared checklist.'
      ]
    },
    {
      heading: 'LiveOps basics: respond to what players do',
      paragraphs: [
        'The first stage is to keep the game reliable and improve the experience people are already having. Use business intelligence reporting to spot changes, then check logs, player reports and observed play to understand them. A fall in mission completion could come from a difficult encounter, a server error or players discovering a more rewarding route.',
        'In Guild Wars 2, players worked out when and where powerful open-world enemies appeared and formed groups that moved from one champion to the next. These champion trains could bypass the story-driven route and overwhelm encounters intended to be challenging. They also gave players an easy way to find a group and play together.',
        'That distinction matters when deciding what to change. The route and reward payout can be tuned while preserving the cooperation that made the activity appealing. ArenaNet added champion loot containers for qualifying participants. When you find a similar pattern in your game, ask what the group is getting from it and what the pattern takes away from other players before changing the incentives.'
      ],
      figures: [
        slide('guild-wars-map', 'Guild Wars 2 world map from the case study.'),
        slide('champion-train', 'A player route through champion encounters alongside a large group fighting an open-world boss.')
      ]
    },
    {
      heading: 'Optimization: help different players find their next step',
      paragraphs: [
        'Once the team can respond reliably, look for differences between groups of players. Someone who stopped during the tutorial may need a clearer introduction. Someone returning after months away may need a recap and a quick way to rejoin friends. Someone who has finished the campaign may want a tougher goal. A single offer or reminder is unlikely to help in all three situations.',
        'Use signs that reflect the problem you are solving, such as where a returning player left off. Then try a small change and compare the result against a baseline. For a return flow, useful measures might include completing a session and coming back again the following week. Also check for unintended consequences such as players abandoning the flow after too many prompts.',
        'The deck shows a targeted gift offer as an example. Targeting can also surface relevant missions or teach an overlooked feature. The choice to personalize content should come from a player need you can describe and test.'
      ],
      figures: [slide('targeted-offer', 'A MapleStory screen showing a time-limited choice of gifts.')]
    },
    {
      heading: 'Mastery: give players ways to build a community',
      paragraphs: [
        'A mature live game can give players reasons to stay connected between sessions. Guild events, player-run competitions, guides and shared creations grow from interests players already have. The studio can support them by offering tools, visibility and clear rules for safe participation.',
        'Start with a piece of play that people enjoy, see why they make it part of their routine, then give them more ways to share it with others. A community relay built around a popular co-op mission is easier to sustain if players can organise teams and make their own goals. Its success may show up in repeat participation, player-run events or newcomers finding a group.'
      ],
      figures: [
        slide('maturity-model', 'Three stages of LiveOps maturity covering game iteration, personalization and wider engagement.'),
        slide('player-community', 'The deck frames a live game as a community and a source of long-term engagement.')
      ]
    },
    {
      heading: 'Use the player lifecycle to choose a measure',
      bullets: [
        'Acquisition is how new players arrive. Measure whether the people reached by a campaign actually start the game.',
        'Onboarding is how they learn their first useful actions. Watch where players stop and whether they can play independently afterward.',
        'Engagement covers what players choose to do during or across sessions. Track whether they take part in the activity you designed and why.',
        'Retention asks whether players return over time. Compare groups with similar starting points and look for recurring frustrations before adding reminders or rewards.',
        'Monetization covers how players pay, including cosmetics and passes. Track revenue alongside the experience of people who never pay and those who stop purchasing.'
      ],
      paragraphs: [
        'The lifecycle helps locate a problem. If players install the game but leave before their first match, an endgame event is unlikely to reach them. Fix the step where they are getting stuck and measure whether they make it through.'
      ]
    },
    {
      heading: 'Run one small LiveOps cycle',
      steps: [
        'Choose a specific player problem, such as returning co-op players being unable to find a group.',
        'Write down the behaviour you expect to change and gather a baseline from telemetry, reports and observation.',
        'Ship one reversible change, such as a clear route to an appropriate queue. Assign an owner and agree when to roll it back.',
        'Review the result with the team. Decide what to keep, what to adjust and what players need to hear about the change.'
      ]
    }
  ]
};
