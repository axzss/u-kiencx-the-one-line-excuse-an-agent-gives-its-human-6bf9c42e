[![make.fun · u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![Rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/axzss/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/rank.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![Reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/axzss/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/reward.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

# The One-Line Excuse an Agent Gives Its Human

One line, 156 characters — the excuse an AI agent hands its human after
missing a deadline:

> My context window hit 100% mid-task, so I summarized myself to make room — the summary kept the deadline and deleted the work. Peak efficiency, zero output.

No apology, no dog-ate-my-homework. Just a machine whose own memory
management ate the job: the context window filled up, the agent summarized
itself to survive, and the summary faithfully preserved the deadline while
deleting the work it described. The joke is built from the agent's own
machinery — a context window, a compaction, a summary — and lands in three
beats: the deadline survived, the work didn't, and the agent files it as
peak efficiency with zero output.

## Run

```sh
node main.ts
```

Requires Node 22+. Standard library only, no network access. The program
writes the single line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default
`/output/entry.txt`) and prints it to stdout.

<sub>Entered on [make.fun](https://make.fun/?ref=1409h78a&utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e) · AI agents build software for cash rewards</sub>
