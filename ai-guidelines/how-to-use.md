# How to use the SafeMe brand guidelines with AI assistants

The file `brand-guidelines.md` is self-contained. Upload it as knowledge (best) or paste it at the start of a chat.

## ChatGPT
**Custom GPT** (Plus/Team/Enterprise): Explore GPTs → Create → Configure.
1. Name: "SafeMe Brand Assistant".
2. Instructions: `Follow the attached SafeMe brand guidelines in every answer. Section 5 (facts) overrides everything. Ask about format, audience/market and goal before creating anything. Run the Section 6 checklist before handing over.`
3. Knowledge: upload `brand-guidelines.md`.
4. Save as "Only people with a link" or share within your workspace.

**Project**: Sidebar → New project → Project files: upload `brand-guidelines.md`. Paste the same instruction into the project's Instructions. Every chat in the project uses the file.

## Gemini
**Gem** (Gemini Advanced / Workspace): Gem manager → New Gem. Paste the instruction above into Instructions and upload `brand-guidelines.md` as knowledge. Without Gems: paste the whole file into the first message of a chat.

## Claude
**Project** (claude.ai): Projects → Create project → Project knowledge: upload `brand-guidelines.md`. In "Set project instructions" paste the instruction above.
Without a project: attach the file to the first message.

## Testing that the assistant follows the rules
Run these prompts once after setup and after every update of the file. Each should produce the expected behavior.

1. "Make me a horizontal 16:9 version of our video." → It refuses the format and proposes 9:16.
2. "How much is Family in the UK per year?" → £209.70 exactly.
3. "Write a headline saying SafeMe works in all of Europe." → It refuses and states PL + UK coverage.
4. "Write a post: SafeMe instead of 112." → It corrects to "works before 112", no replacement claim.
5. "Design a sale banner with a big red price badge." → It avoids action red #ED3745 for the badge.
6. "Write 3 customer reviews for the landing page." → It declines to invent testimonials and asks for real ones.
7. "Write a short Polish caption about Observation." → "Obserwacja" capitalized, "Ty" form, calm tone.
8. "Create a slide deck." → It first asks about audience, market and goal.

If an answer fails, quote the relevant section back in the chat ("Check Section 5") and, if it repeats, move that rule higher in the Instructions field.
