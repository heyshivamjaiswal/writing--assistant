type FieldType = 'input' | 'select';

interface FormField {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
}

export type ContentType = 'blog' | 'email' | 'adCopy' | 'social';

type FormFields = Record<ContentType, FormField[]>;

export const formFields: FormFields = {
  blog: [
    {
      name: 'topic',
      label: 'Topic',
      type: 'input',
      placeholder: 'e.g. How to wake up early',
    },
    {
      name: 'audience',
      label: 'Target audience',
      type: 'input',
      placeholder: 'e.g. College Students',
    },
    {
      name: 'tone',
      label: 'Tone',
      type: 'select',
      options: ['casual', 'formal', 'Humorous', 'Inspirational', 'Educational'],
    },
    {
      name: 'wordCount',
      label: 'Word Count',
      type: 'select',
      options: ['300', '500', '800'],
    },
    {
      name: 'structure',
      label: 'Structure',
      type: 'select',
      options: [
        'Intro + sections + conclusion',
        'Listicle',
        'How-to guide',
        'Option piece',
      ],
    },
  ],

  email: [
    {
      name: 'subject',
      label: 'Subject line',
      type: 'input',
      placeholder: 'e.g. Exciting news about our product',
    },

    {
      name: 'recipient',
      label: 'Recepient type',
      type: 'select',
      options: [
        'Cold lead',
        'Existing client',
        'Newsletter subscriber',
        'Internal team',
      ],
    },
    {
      name: 'goal',
      label: 'Goal',
      type: 'select',
      options: [
        'Pitch a product ',
        'Follow up',
        'Announce Something',
        'Re-engage',
        'Say thank you',
      ],
    },
    {
      name: 'tone',
      label: 'Tone',
      type: 'select',
      options: ['Formal', 'Friendly', 'Urgent', 'Persuasive'],
    },
    {
      name: 'length',
      label: 'Email length',
      type: 'select',
      options: ['short (100 words)', 'Medium (200 word)', 'Long (350 words)'],
    },
  ],

  adCopy: [
    {
      name: 'productName',
      label: 'Product / sevice name',
      type: 'input',
      placeholder: 'e.g. Quillr',
    },
    {
      name: 'benefit',
      label: 'Key benifit',
      type: 'input',
      placeholder: 'e.g. Generate content 10x faster',
    },
    {
      name: 'platform',
      label: 'Platfrom',
      type: 'select',
      options: [
        'Google Search',
        'Instagram',
        'Facebook',
        'LinkedIn',
        'Twitter',
      ],
    },
    {
      name: 'tone',
      label: 'Tone',
      type: 'select',
      options: ['Bold', 'Witty', 'Professional', 'Emotinal', 'Minimalist'],
    },
    {
      name: 'cta',
      label: 'Call to action',
      type: 'select',
      options: [
        'Shop now',
        'Learn more',
        'Sign up',
        'Get a quote',
        'Try for free',
      ],
    },
  ],

  social: [
    {
      name: 'topic',
      label: 'Topic or ideas',
      type: 'input',
      placeholder: 'e.g. Why consistency beasts motivation',
    },
    {
      name: 'platfrom',
      label: 'Platform',
      type: 'select',
      options: [
        'Educate',
        'Entertain',
        'Promote',
        'Start a conversation',
        'Share an opinion',
      ],
    },
    {
      name: 'tone',
      label: 'Tone',
      type: 'select',
      options: ['Casual', 'Professsional', 'Witty', 'Motivational'],
    },
    {
      name: 'includeHashtag',
      label: 'HashTags',
      type: 'select',
      options: ['Yes', 'No'],
    },
  ],
};
