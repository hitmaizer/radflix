module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          {
            breaking: true,
            release: 'major',
          },
          {
            type: 'build',
            release: 'patch',
          },
          {
            type: 'chore',
            release: 'patch',
          },
          {
            type: 'ci',
            release: 'patch',
          },
          {
            type: 'docs',
            release: 'patch',
          },
          {
            type: 'feat',
            release: 'minor',
          },
          {
            type: 'fix',
            release: 'patch',
          },
          {
            type: 'perf',
            release: 'patch',
          },
          {
            type: 'refactor',
            release: 'patch',
          },
          {
            type: 'revert',
            release: 'patch',
          },
          {
            type: 'style',
            release: 'patch',
          },
          {
            type: 'test',
            release: 'patch',
          },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        writerOpts: {
          groupBy: 'type',
          commitGroupsSort: 'title',
          commitsSort: 'header',
        },
        linkCompare: true,
        linkReferences: true,
        parserOpts: {
          issuePrefixes: ['DEV-'],
          mergePattern: "^Merge branch '(.*)' into (.*)$",
          mergeCorrespondence: ['branch_src', 'branch_dst'],
        },
        presetConfig: {
          types: [
            {
              type: 'build',
              section: ':octocat: CI/CD',
              hidden: false,
            },
            {
              type: 'chore',
              section: 'Other',
              hidden: false,
            },
            {
              type: 'ci',
              section: ':octocat: CI/CD',
              hidden: false,
            },
            {
              type: 'docs',
              section: '📓 Docs',
              hidden: false,
            },
            {
              type: 'example',
              section: '📝 Examples',
              hidden: false,
            },
            {
              type: 'feat',
              section: '🚀 Features',
              hidden: false,
            },
            {
              type: 'fix',
              section: '🐛 Fixes',
              hidden: false,
            },
            {
              type: 'perf',
              section: '🏍️ Performance',
            },
            {
              type: 'refactor',
              section: '✂️ Refactor',
              hidden: false,
            },
            {
              type: 'revert',
              section: '🙅 Reverts',
              hidden: false,
            },
            {
              type: 'style',
              section: '🎨 Style',
              hidden: false,
            },
            {
              type: 'test',
              section: '🧪 Tests',
              hidden: false,
            },
          ],
        },
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
        message:
          '${nextRelease.version} CHANGELOG [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
