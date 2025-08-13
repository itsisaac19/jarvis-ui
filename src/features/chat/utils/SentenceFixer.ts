export class SentenceFixer {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    public fix(): string {
        let fixed = this.normalizeWhitespace(this.text);
        fixed = this.fixCapitalization(fixed);
        fixed = this.fixPunctuationSpacing(fixed);
        fixed = this.fixArticles(fixed);
        fixed = this.fixSubjectVerbAgreement(fixed);
        fixed = this.fixCommonTypos(fixed);
        return fixed;
    }

    private normalizeWhitespace(text: string): string {
        return text.replace(/\s+/g, " ").trim();
    }

    private fixCapitalization(text: string): string {
        return text.replace(/(?:^|[.!?]\s+)([a-z])/g, (_, c) => c.toUpperCase());
    }

    private fixPunctuationSpacing(text: string): string {
        return text
            .replace(/\s+([.,!?;:])/g, "$1")     // No space before punctuation
            .replace(/([.,!?;:])(?=\S)/g, "$1 "); // Ensure space after punctuation
    }

    private fixArticles(text: string): string {
        return text.replace(/\b(a|an)\s+([aeiouAEIOU]\w*)/g, "an $2")
            .replace(/\b(an)\s+([^aeiouAEIOU\s]\w*)/g, "a $2");
    }

    private fixSubjectVerbAgreement(text: string): string {
        // Very basic subject-verb agreement correction for present tense
        return text.replace(/\b(He|She|It)\s+(run|walk|eat|go)\b/gi, (_, subj, verb) => {
            const correctedVerb = verb + (verb.endsWith("o") ? "es" : "s");
            return `${subj} ${correctedVerb}`;
        });
    }

    private fixCommonTypos(text: string): string {
        const typos: Record<string, string> = {
            "your welcome": "you're welcome",
            "definately": "definitely",
            "recieve": "receive",
            "teh": "the",
            "its a": "it's a",
            "could of": "could have"
        };

        for (const [wrong, correct] of Object.entries(typos)) {
            const regex = new RegExp(`\\b${wrong}\\b`, "gi");
            text = text.replace(regex, correct);
        }
        return text;
    }
}
