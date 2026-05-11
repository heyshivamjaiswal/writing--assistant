import type { ContentType } from '../data/formField';

export const promptBuilders = {
  blog: (values: Record<string, string>) => `
    write a ${values.tone} blog about "${values.topic}".

    Target audience:
    ${values.audience}

    word count:
    ${values.wordCount}

    structure:
    ${values.structure}
    `,

  email: (values: Record<string, string>) => `
    write a ${values.tone} email.

    subject:
    ${values.subject}

    Recipient:
    ${values.recipient}

    Goal:
    ${values.goal}

    Length:
    ${values.length}
    `,

  adCopy: (values: Record<string, string>) => `
    write a ${values.tone} advertisement.

    Product:
    ${values.productName}

    Benefit:
    ${values.benefit}

    Platfrom:
    ${values.platfrom}

    CTA:
    ${values.cta}
    `,

  social: (values: Record<string, string>) => `
    write a ${values.tone} socail media post.

    Topic:
    ${values.topic}

    Platfrom:
    ${values.platfrom}

    Include hashtags:
    ${values.includeHashtag}
    `,
} satisfies Record<ContentType, (values: Record<string, string>) => string>;
