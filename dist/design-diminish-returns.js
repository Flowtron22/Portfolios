export const diminishReturns = {
  slug: 'diminish-returns',
  title: 'Diminish Returns',
  cover: 'assets/design/diminish-returns-curve.png',
  summary: 'Four interactive models for scaling armor, stacking resistance, soft-capping speed, and limiting repeated stuns.',
  sections: [
    {
      heading: 'Tune the armor curve',
      paragraphs: [
        'A hyperbolic curve gives early points more effect. Effect = M × S ÷ (S + K), where S is the investment and M is the theoretical maximum. At S = K, the effect reaches half of M.',
        'Try 150 investment and a 60% target with M at 100%. The calculator solves K = S × (M ÷ target − 1). Then add 50 investment and compare the gain with the previous 50. A flattening mitigation percentage can still produce linear gains in effective physical health when maximum mitigation is 100% and base HP stays fixed.'
      ],
      demo: 'diminish-curve'
    },
    {
      heading: 'Stack resistance on the remaining damage',
      paragraphs: [
        'Each source reduces the portion that previous sources left untouched. The combined effect is 1 − (1 − resistance per source) raised to the number of sources. Set three sources at 30% and compare 90% additive resistance with 65.7% multiplicative resistance. Add a fourth source and look at the damage still taken.'
      ],
      demo: 'diminish-stack'
    },
    {
      heading: 'Put a soft cap on movement speed',
      paragraphs: [
        'Below the first threshold, every point counts in full. An excess point contributes only a fraction. With a threshold of 400 and a 50% first tier, 600 raw speed becomes 500 effective speed.',
        'Turn on two thresholds. The second threshold sits 100 points above the first. With the default settings, points beyond 500 count at 25% and the same 600 raw speed becomes 475.'
      ],
      demo: 'diminish-cap'
    },
    {
      heading: 'Limit repeated crowd control',
      paragraphs: [
        'Give the first stun its full duration. As long as the counter remains active, each repeat keeps a fraction of the previous duration. Test five consecutive stuns at 50% retention, then wait at least five seconds after each stun expires to see the counter reset.'
      ],
      demo: 'diminish-sequence'
    },
    {
      heading: 'Choose a rule you can playtest',
      steps: [
        'Set early, mid and late targets for each stat. Use a curve for gradual mitigation, multiplicative stacking for independent percentage sources, a soft cap for speed, or a repeated-effect counter for crowd control.',
        'Keep the rules and constants in one balance configuration. Check breakpoint values, maxed-out item builds, and whether the opponent gets a chance to act between stuns.',
        'Playtest the trade-off. Check whether alternative builds become viable and whether investing past a threshold still feels worthwhile.'
      ]
    }
  ]
};
