import type { Scenario } from './types';

export const ALL_SCENARIOS: Scenario[] = [
  // Use-Case: Writing & Content
  {
    id: 'writing-seo-blog-post',
    useCase: 'Writing & Content',
    title: 'Writing a High-Quality, SEO-Optimized Blog Post',
    primaryAudience: ['Marketers', 'Creators'],
    goal: 'To move from a blank page to a polished, well-researched article quickly.',
    workflow: [
      {
        title: 'Ideation & Structuring (5 mins)',
        description: 'Go to ChatGPT. Use a prompt like: "Act as an SEO expert. I want to write a blog post about [Your Topic]. Give me 10 engaging title ideas and a detailed, SEO-friendly outline for the best one."',
      },
      {
        title: 'Drafting (15 mins)',
        description: 'Copy the outline from ChatGPT and paste it into Notion AI. Use the "Continue writing" or "Expand on this" feature for each section to generate a full first draft. Notion\'s integration keeps everything organized.',
      },
      {
        title: 'Fact-Checking & Sourcing (10 mins)',
        description: 'Go to Perplexity. Ask questions related to your article\'s claims, like "What are the latest statistics on [Your Topic] in 2024?". Perplexity provides answers with direct links to its sources, which you can cite in your article.',
      },
      {
        title: 'Polishing & Tone (5 mins)',
        description: 'Paste your final draft into Grammarly. Use its AI-powered suggestions to fix grammatical errors, improve clarity, and adjust the tone to match your audience (e.g., professional, casual, confident).',
      },
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Notion AI', link: 'https://www.notion.so/product/ai' },
      { name: 'Perplexity', link: 'https://www.perplexity.ai' },
      { name: 'Grammarly', link: 'https://www.grammarly.com' },
    ],
  },
  {
    id: 'repurposing-video',
    useCase: 'Writing & Content',
    title: 'Repurposing a Single Video into a Full Social Media Campaign',
    primaryAudience: ['Creators', 'Marketers'],
    goal: 'Maximize the value of a single long-form video (like a YouTube video or webinar) by efficiently turning it into dozens of short-form clips, tweets, and an article.',
    workflow: [
      {
        title: 'Automated Clipping & Virality Scoring (10 mins)',
        description: 'Go to Opus Clip. Paste the YouTube URL of your long video. The AI will automatically identify the most engaging and potentially "viral" segments, reframe them into vertical 9:16 videos, add dynamic captions, and give each clip a virality score. Download your top 5-10 clips.',
      },
      {
        title: 'Transcript to Blog Post (15 mins)',
        description: 'Opus Clip also provides a full transcript. Copy it and paste it into Claude. Use the prompt: "Transform this video transcript into a well-structured and easy-to-read blog post. Add headlines, bullet points, and a compelling introduction and conclusion. The tone should be informative and engaging."',
      },
      {
        title: 'Key Takeaways for Twitter/LinkedIn (5 mins)',
        description: 'In the same Claude chat, use a follow-up prompt: "Now, from that blog post, extract 5 key takeaways. Format them as short, impactful posts suitable for LinkedIn and Twitter, including relevant hashtags."',
      },
      {
        title: 'Create a Custom Thumbnail (5 mins)',
        description: 'Go to Midjourney. Describe a key visual from your video. Prompt: "/imagine a dynamic and colorful YouTube thumbnail about [Your Video Topic], minimalist illustration style, a person looking surprised, bold text \'AI Secrets\' --ar 16:9"',
      },
    ],
    tools: [
      { name: 'Opus Clip', link: 'https://www.opus.pro' },
      { name: 'Claude', link: 'https://claude.ai' },
      { name: 'Midjourney', link: 'https://www.midjourney.com' },
    ],
  },
  {
    id: 'email-outreach-campaign',
    useCase: 'Writing & Content',
    title: 'Crafting a Personalized Email Outreach Campaign at Scale',
    primaryAudience: ['Marketers', 'Sales Professionals', 'Job Seekers'],
    goal: 'To send highly personalized emails that stand out, without spending hours manually researching each recipient.',
    workflow: [
      { title: 'Develop a Master Template (5 mins)', description: 'Go to ChatGPT. Prompt: "Create a concise and effective cold email template for [Your Goal, e.g., \'offering marketing services to tech startups\']. The template should have clear placeholders for personalization, like [Name], [Company Name], and [Personalized Compliment/Observation]."' },
      { title: 'Rapid-Fire Research (3 mins per prospect)', description: 'Go to Perplexity. For each person you want to email, search for their name and company (e.g., "John Doe at Innovate Corp"). Perplexity will quickly summarize their recent activities, company news, or LinkedIn posts. Identify one specific, interesting fact.' },
      { title: 'Generate Personalized Snippets (2 mins per prospect)', description: 'Go back to ChatGPT. Prompt: "Using this info: \'[Paste the fact from Perplexity]\', write a 1-2 sentence personalized opening line for an email to John Doe. It should be genuine and complimentary."' },
      { title: 'Assemble and Polish (1 min per prospect)', description: 'Insert the generated personalized line into your master template. Do a final check with Grammarly to ensure the tone is professional and there are no errors.' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Perplexity', link: 'https://www.perplexity.ai' },
      { name: 'Grammarly', link: 'https://www.grammarly.com' }
    ]
  },
  {
    id: 'compelling-presentation',
    useCase: 'Writing & Content',
    title: 'Writing and Designing a Compelling Presentation',
    primaryAudience: ['Students', 'Educators', 'Professionals'],
    goal: 'To quickly turn an idea or a block of text into a visually stunning and well-structured presentation.',
    workflow: [
      { title: 'Outline and Narrative (10 mins)', description: 'Start with ChatGPT to structure your story. Prompt: "Act as a professional speechwriter. I need to give a 10-minute presentation on [Your Topic]. Structure it with a compelling hook, three key points with supporting evidence, and a memorable conclusion."' },
      { title: 'Generate the Presentation (5 mins)', description: 'Copy the entire outline from ChatGPT. Go to Gamma and paste the text into a new project. The AI will instantly generate a complete, professionally designed presentation with multiple slides, layouts, and relevant imagery.' },
      { title: 'Refine Talking Points (10 mins)', description: 'Go through the generated slides in Gamma. For any slide that needs more detail, use its built-in AI to "expand on this point" or "find a different image." This helps you build out your speaker notes.' },
      { title: 'Create a Key Custom Visual (5 mins)', description: 'For your most important slide (e.g., the title slide or conclusion), go to Midjourney or Ideogram to create a unique, high-impact image that perfectly matches your topic. Upload this custom image to your Gamma presentation.' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Gamma', link: 'https://gamma.app' },
      { name: 'Midjourney', link: 'https://www.midjourney.com' }
    ]
  },
  {
    id: 'translating-content',
    useCase: 'Writing & Content',
    title: 'Translating and Culturally Adapting Content for a Global Audience',
    primaryAudience: ['Marketers', 'Creators', 'Businesses'],
    goal: 'To translate content not just literally, but also adapt it to fit the cultural nuances of a different region.',
    workflow: [
      { title: 'Initial High-Quality Translation (5 mins)', description: 'Go to DeepL. It is renowned for its nuanced and accurate translations. Paste your original English text and translate it into your target language (e.g., Japanese).' },
      { title: 'Cultural Adaptation & Idiom Check (10 mins)', description: 'Copy the translated text from DeepL. Go to Claude or ChatGPT-4. Use a specialized prompt: "Act as a marketing localization expert for [Target Country, e.g., Japan]. Review the following Japanese text. Is the tone appropriate for a professional audience there? Are there any English idioms that were translated literally and sound unnatural? If so, please correct them with more natural, culturally relevant phrases."' },
      { title: 'Visual Asset Check (Optional, 5 mins)', description: 'The AI can also help with visuals. Prompt: "I am using an image of [describe image] for my marketing in [Target Country]. Are there any negative cultural connotations or better alternatives I should consider?"' }
    ],
    tools: [
      { name: 'DeepL', link: 'https://www.deepl.com/translator' },
      { name: 'Claude', link: 'https://claude.ai' },
      { name: 'ChatGPT (GPT-4 version)', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'content-calendar',
    useCase: 'Writing & Content',
    title: 'Developing a Complete Content Calendar',
    primaryAudience: ['Marketers', 'Creators'],
    goal: "To generate a month's worth of strategic content ideas, complete with keywords, formats, and a posting schedule.",
    workflow: [
      { title: 'Brainstorm Core Themes (10 mins)', description: 'Go to ChatGPT. Use a prompt like: "Act as a content strategist for a [Your Niche] brand. Brainstorm 5 core content pillars or themes that would be valuable to my target audience of [Your Audience]."' },
      { title: 'Generate Specific Ideas & Keywords (15 mins)', description: 'In the same chat, follow up with: "For each of those 5 pillars, generate 4 specific content ideas. Format them in a table with columns for: \'Topic Title\', \'Content Format\' (e.g., Blog Post, Video, Tweet Thread), and \'Primary Target Keyword\'."' },
      { title: 'Create a Schedule (5 mins)', description: 'Ask the AI to organize the output. Prompt: "Arrange these 20 ideas into a 4-week content calendar in a markdown table. Assign a reasonable mix of content formats for each week."' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  {
    id: 'explainer-video-script',
    useCase: 'Writing & Content',
    title: 'Writing a Script for an Explainer Video',
    primaryAudience: ['Educators', 'Marketers', 'Creators'],
    goal: "To create a concise and engaging script for a short YouTube video explaining a complex topic.",
    workflow: [
      { title: 'Outline and Hook (5 mins)', description: 'Go to ChatGPT. Prompt: "Write a script outline for a 5-minute explainer video on [Complex Topic]. Include a strong hook, three key points, and a call-to-action."' },
      { title: 'Draft the Script (15 mins)', description: 'Use a tool like Claude for a more narrative flow. Prompt: "Expand this outline into a full video script. Write the narration in a clear, conversational tone. Add visual cues and on-screen text suggestions in brackets [like this]."' },
      { title: 'Generate Voiceover (5 mins)', description: 'Paste the final script into ElevenLabs to generate a high-quality, human-like voiceover for your video.' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Claude', link: 'https://claude.ai' },
      { name: 'ElevenLabs', link: 'https://try.elevenlabs.io/j3dvu4w355o2' }
    ]
  },
  {
    id: 'ecommerce-product-descriptions',
    useCase: 'Writing & Content',
    title: 'Generating Compelling E-commerce Product Descriptions',
    primaryAudience: ['Entrepreneurs', 'Marketers'],
    goal: "To produce unique, persuasive, and SEO-friendly descriptions for multiple products quickly.",
    workflow: [
      { title: 'Create a Master Template (5 mins)', description: 'Go to ChatGPT. Prompt: "Create a product description template using the \'Problem-Agitate-Solve\' framework. Include placeholders for [Product Name], [Key Feature 1], [Key Benefit 1], and [Target Customer Pain Point]."' },
      { title: 'Generate Descriptions in Bulk (15 mins)', description: 'Provide the AI with a list of your products and their key features. Prompt: "Using the template above, write 5 unique product descriptions based on this data: [Paste your product list and features]."' },
      { title: 'Refine for SEO (5 mins)', description: 'Ask the AI to optimize one of the descriptions. Prompt: "Review this product description. Weave in the keywords \'[Keyword 1]\' and \'[Keyword 2]\' naturally."' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  {
    id: 'ab-test-landing-page',
    useCase: 'Writing & Content',
    title: 'Creating A/B Test Variations for a Landing Page',
    primaryAudience: ['Marketers'],
    goal: "To write several different headlines and calls-to-action for a website's landing page to test which version converts best.",
    workflow: [
      { title: 'Analyze the Original (5 mins)', description: 'Go to Claude. Paste the text from your current landing page. Prompt: "Analyze this landing page copy. What is the core value proposition and target audience?"' },
      { title: 'Generate Headline Variations (10 mins)', description: 'In the same chat, prompt: "Based on that analysis, generate 5 alternative headlines. Create one focused on scarcity, one on social proof, one on benefits, one as a question, and one that is direct and simple."' },
      { title: 'Generate CTA Variations (5 mins)', description: 'Finally, prompt: "Now, create 5 different text variations for the main call-to-action button that align with the headlines you created."' }
    ],
    tools: [{ name: 'Claude', link: 'https://claude.ai' }]
  },
  {
    id: 'grant-proposal',
    useCase: 'Writing & Content',
    title: 'Drafting a Grant Proposal for a Non-Profit',
    primaryAudience: ['Professionals'],
    goal: "To outline and draft the narrative sections of a compelling grant proposal.",
    workflow: [
      { title: 'Research & Summarize Funder Priorities (15 mins)', description: 'Go to Perplexity. Prompt: "Summarize the key funding priorities and past projects of the [Foundation Name] based on their website."' },
      { title: 'Outline the Proposal (10 mins)', description: 'Go to ChatGPT. Prompt: "Create a detailed outline for a grant proposal for a [Your Project Type] project, aligning it with the priorities of the [Foundation Name] that we researched. Include sections for Problem Statement, Objectives, Methods, and Evaluation."' },
      { title: 'Draft Key Sections (20 mins)', description: 'Use Claude to draft the narrative. Prompt: "Write the \'Problem Statement\' section for this grant proposal. Use a storytelling approach and incorporate the following statistic: [Paste a key statistic]."' }
    ],
    tools: [
      { name: 'Perplexity', link: 'https://www.perplexity.ai' },
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Claude', link: 'https://claude.ai' }
    ]
  },
  {
    id: 'linkedin-ghostwriting',
    useCase: 'Writing & Content',
    title: "Ghostwriting a LinkedIn Post in an Expert's Voice",
    primaryAudience: ['Marketers', 'Executives'],
    goal: "To analyze an expert's past writing to adopt their tone and style, then draft a new thought leadership piece.",
    workflow: [
      { title: 'Analyze the Voice (10 mins)', description: "Go to Claude. Paste 3-4 of the expert's previous articles or LinkedIn posts. Prompt: \"Analyze the writing style, tone, and vocabulary of this author. Describe their voice in 5 bullet points (e.g., 'Uses industry jargon,' 'Prefers short sentences,' 'Often uses rhetorical questions').\"" },
      { title: 'Brainstorm Topics (5 mins)', description: "Go to ChatGPT. Prompt: \"Based on this expert's voice, suggest 5 LinkedIn post ideas about [Topic] that would sound authentic to them.\"" },
      { title: 'Draft the Post (10 mins)', description: "In the Claude chat where you defined the voice, prompt: \"Now, acting in the author's voice you analyzed, write a 200-word LinkedIn post about [Chosen Topic]. Remember to [mention a key style point, e.g., 'end with a question for the audience'].\"" }
    ],
    tools: [
      { name: 'Claude', link: 'https://claude.ai' },
      { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'fictional-short-story',
    useCase: 'Writing & Content',
    title: 'Brainstorming and Outlining a Fictional Short Story',
    primaryAudience: ['Creators', 'Hobbyists'],
    goal: 'To develop a story concept, plot points, character profiles, and a chapter-by-chapter outline.',
    workflow: [
      { title: 'Generate Core Concept (5 mins)', description: 'Go to ChatGPT. Prompt: "Give me three ideas for a short story that combines the genres of [Genre 1] and [Genre 2]."' },
      { title: 'Develop Characters (10 mins)', description: 'Choose an idea. Prompt: "For story idea #2, create a detailed profile for the protagonist and the antagonist. Include their motivations, fears, and a key personality flaw."' },
      { title: 'Outline the Plot (15 mins)', description: 'In the same chat, prompt: "Create a 5-point plot outline for this story using the classic narrative structure: Exposition, Rising Action, Climax, Falling Action, and Resolution."' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  {
    id: 'podcast-script',
    useCase: 'Writing & Content',
    title: 'Writing a Script for a Weekly Podcast Episode',
    primaryAudience: ['Creators'],
    goal: 'To create a structured script for a podcast, including an introduction, segment transitions, interview questions, and an outro.',
    workflow: [
      { title: 'Structure the Episode (5 mins)', description: 'Go to ChatGPT. Prompt: "Create a 4-segment structure for a 30-minute podcast episode on [Your Topic]. Include a catchy intro, a main discussion segment, a guest interview segment, and an outro with a call-to-action."' },
      { title: 'Draft Monologue Sections (10 mins)', description: "Prompt: \"Write the monologue for the intro segment. It should be engaging and briefly introduce today's topic and guest.\"" },
      { title: 'Generate Interview Questions (10 mins)', description: "Research your guest. Prompt: \"Here is the LinkedIn profile of my guest: [paste URL]. Generate 10 insightful interview questions that are relevant to both their expertise and our episode's topic.\"" }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  {
    id: 'brand-voice-guide',
    useCase: 'Writing & Content',
    title: 'Developing a Brand Voice and Tone Guide',
    primaryAudience: ['Marketers', 'Startups'],
    goal: "To create a comprehensive guide that defines a company's communication style for consistency.",
    workflow: [
      { title: 'Define Brand Archetype (5 mins)', description: "Go to ChatGPT. Prompt: \"My company's values are [Value 1, Value 2, Value 3]. Based on this, what are 2-3 suitable brand archetypes (e.g., The Sage, The Hero, The Jester)?\"" },
      { title: 'Generate Voice Characteristics (10 mins)', description: "Choose an archetype. Prompt: \"For 'The Sage' archetype, create a brand voice guide in a table. Columns should be: 'Characteristic' (e.g., Tone, Vocabulary, Grammar), 'Do', and 'Don't'.\"" },
      { title: 'Create Example Copy (10 mins)', description: 'In the same chat, prompt: "Now, write 3 example social media posts (for LinkedIn, Twitter, and Instagram) that perfectly embody this brand voice."' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  {
    id: 'faq-document',
    useCase: 'Writing & Content',
    title: 'Creating a Comprehensive FAQ Document',
    primaryAudience: ['Product Managers', 'Professionals'],
    goal: 'To analyze a product or service and generate a list of potential customer questions, then provide clear and concise answers for each.',
    workflow: [
      { title: 'Brainstorm Questions (10 mins)', description: 'Go to ChatGPT. Paste your product\'s description or website URL. Prompt: "Act as a new potential customer who is very detail-oriented and a bit skeptical. Generate a list of 25 questions you would have about this product before buying."' },
      { title: 'Categorize and Prioritize (5 mins)', description: "Prompt: \"Group these questions into logical categories like 'Pricing & Billing', 'Features', and 'Security'.\"" },
      { title: 'Draft the Answers (15 mins)', description: 'Go to Claude. Paste the categorized questions. Prompt: "Here is a list of customer questions. Write clear, concise, and helpful answers for each one, based on the product information on this website: [Your URL]."' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Claude', link: 'https://claude.ai' }
    ]
  },
  {
    id: 'song-lyrics',
    useCase: 'Writing & Content',
    title: 'Writing Song Lyrics Based on a Theme',
    primaryAudience: ['Hobbyists', 'Creators'],
    goal: 'To generate creative and rhyming lyrics for a song, including verses, a chorus, and a bridge.',
    workflow: [
      { title: 'Brainstorm Concepts and Imagery (5 mins)', description: "Go to ChatGPT. Prompt: \"I want to write a song about [Theme, e.g., 'leaving a small town']. Brainstorm a list of 10 powerful images and metaphors related to this theme.\"" },
      { title: 'Write the Chorus (5 mins)', description: 'Prompt: "Using the most powerful image, write a 4-line chorus for this song. It should be catchy and memorable."' },
      { title: 'Write the Verses and Bridge (15 mins)', description: 'Go to Claude for more poetic language. Prompt: "Here is the chorus for my song: [paste chorus]. Now, write two 4-line verses and a 4-line bridge that tell the story of someone preparing to leave their hometown. Use the AABB rhyme scheme."' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Claude', link: 'https://claude.ai' }
    ]
  },
  {
    id: 'press-release',
    useCase: 'Writing & Content',
    title: 'Drafting a Formal Press Release',
    primaryAudience: ['Startups', 'Professionals'],
    goal: 'To write a professional press release for a company announcement in the standard industry format.',
    workflow: [
      { title: 'Generate the Headline (5 mins)', description: 'Go to ChatGPT. Prompt: "My startup, [Name], has just launched [Product], which does [What it does]. Give me 5 professional and attention-grabbing headlines for a press release."' },
      { title: 'Outline the Press Release (5 mins)', description: "Prompt: \"Create a standard press release outline, including sections for the dateline, introduction (with the 5 W's), body, boilerplate, and media contact.\"" },
      { title: 'Draft the Body (15 mins)', description: 'In the same chat, prompt: "Now, write the full body of the press release based on this information: [Provide 3-4 key bullet points about the launch]. Include a quote from our CEO, [CEO Name]."' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  {
    id: 'technical-whitepaper',
    useCase: 'Writing & Content',
    title: 'Summarizing a Technical Document into a Whitepaper',
    primaryAudience: ['Marketers', 'Sales Professionals'],
    goal: 'To take a dense, technical research paper and rewrite it as an accessible whitepaper for a business audience.',
    workflow: [
      { title: 'Summarize the Core Findings (10 mins)', description: 'Paste the text of the technical document into Claude. Prompt: "Summarize this technical paper in plain English. Focus on the core problem it solves and the main conclusion. Ignore the specific methodology for now."' },
      { title: 'Outline the Whitepaper (5 mins)', description: 'Go to ChatGPT. Prompt: "Create an outline for a business-focused whitepaper based on this summary: [Paste summary]. Include an introduction, a \'The Challenge\' section, a \'The Solution\' section, and a \'Business Impact\' section."' },
      { title: 'Draft the Whitepaper (20 mins)', description: "In Claude, use the outline and summary to generate the full text. Prompt: \"Using the outline and summary, write the full whitepaper. Translate technical jargon into business benefits. For example, instead of 'reduced latency', write 'faster customer experience'.\"" }
    ],
    tools: [
      { name: 'Claude', link: 'https://claude.ai' },
      { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'social-media-polls',
    useCase: 'Writing & Content',
    title: 'Creating a Series of Engaging Social Media Polls and Quizzes',
    primaryAudience: ['Marketers'],
    goal: "To generate a week's worth of interactive content to boost audience engagement.",
    workflow: [
      { title: 'Brainstorm Interactive Themes (5 mins)', description: 'Go to ChatGPT. Prompt: "My brand is in the [Industry] space. Brainstorm 5 themes for interactive content for my audience on Instagram Stories and Twitter."' },
      { title: 'Generate Polls and Questions (10 mins)', description: "Prompt: \"For each theme, create one 'This or That' poll, one multiple-choice trivia question, and one open-ended 'Ask Me Anything' style question.\"" },
      { title: 'Design the Visuals (10 mins)', description: 'Go to Canva Magic Studio. Prompt: "Create 5 visually appealing Instagram Story templates for a quiz. Use my brand colors, [Color 1] and [Color 2]."' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Canva Magic Studio', link: 'https://www.canva.com/magic' }
    ]
  },
  {
    id: 'wedding-speech',
    useCase: 'Writing & Content',
    title: 'Writing a Personal and Heartfelt Wedding Speech',
    primaryAudience: ['Hobbyists'],
    goal: 'To draft a touching and humorous speech, incorporating personal anecdotes in a structured and eloquent manner.',
    workflow: [
      { title: 'Brainstorm Key Memories (10 mins)', description: "Go to ChatGPT. Use it as an interviewer. Prompt: \"Act as a speechwriting coach. I'm writing a wedding speech for my friend [Name]. Ask me questions to help me brainstorm 3-4 key memories or anecdotes that highlight their best qualities.\"" },
      { title: 'Structure the Speech (5 mins)', description: 'Prompt: "Based on our brainstorm, create a simple 3-part structure for my speech: 1. Introduction and how I know the groom/bride. 2. Share one funny and one sweet anecdote. 3. Conclusion with well-wishes for the couple."' },
      { title: 'Draft and Polish (15 mins)', description: 'In the same chat, prompt: "Now, write a full draft of the speech using that structure and our anecdotes. Make the tone warm, personal, and lightly humorous. End with a memorable toast."' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },

  // Use-Case: Research & Analysis
  {
    id: 'researching-complex-topic',
    useCase: 'Research & Analysis',
    title: 'Researching and Understanding a Complex Topic for a Term Paper or Report',
    primaryAudience: ['Students', 'Educators'],
    goal: 'To efficiently gather credible sources and extract key insights without drowning in information.',
    workflow: [
        { title: 'Source Discovery (10 mins)', description: 'Use Consensus or Perplexity to find relevant academic papers and high-quality articles. Search with a question, like "What is the impact of reinforcement learning on robotics?". Download the most relevant 5-10 PDF sources.' },
        { title: 'Information Synthesis (20 mins)', description: 'Go to NotebookLM. Create a new "notebook" and upload all your downloaded PDFs. Now, you can "chat" with your sources. Ask questions like: "Summarize the main arguments across all sources.", "What is the key difference between the findings in [Paper A] and [Paper B]?", "Find all quotes related to ethical considerations."' },
        { title: 'Outlining & Synthesis (15 mins)', description: 'Based on the key insights and summaries from NotebookLM, go to ChatGPT. Use a prompt like: "Create a detailed outline for a research paper on [Your Topic], using the following key points: [Paste your insights from NotebookLM].". This helps structure your own writing.' }
    ],
    tools: [
        { name: 'Consensus', link: 'https://consensus.app' },
        { name: 'NotebookLM', link: 'https://notebooklm.google.com' },
        { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'rapid-market-research',
    useCase: 'Research & Analysis',
    title: 'Conducting Rapid Market Research for a New Product Idea',
    primaryAudience: ['Marketers', 'Entrepreneurs', 'Product Managers'],
    goal: 'To quickly gauge the viability of a new product idea by understanding the target market, identifying trends, and assessing initial competition.',
    workflow: [
        { title: 'Define the Market Landscape (15 mins)', description: 'Go to Perplexity. Use its "Focus" feature on "Academic" or "Writing" to get high-quality sources. Ask broad questions like: "What is the current market size and growth forecast for [your industry, e.g., \'sustainable pet food\']?" and "Who are the key competitors in the [your industry] space?" Perplexity will synthesize information from multiple sources.' },
        { title: 'Uncover Customer Pain Points (15 mins)', description: 'Use ChatGPT to act as your research assistant. Prompt: "Act as a market researcher. Search for discussions on Reddit, forums, and product reviews about [your product category]. What are the most common complaints, frustrations, and unmet needs people have with existing solutions?"' },
        { title: 'Synthesize into a SWOT Analysis (10 mins)', description: 'Gather the key findings from the previous steps. Go to Claude (which excels at handling large amounts of text). Paste your notes and use this prompt: "Based on these market research notes, generate a comprehensive SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) for a new company entering this market."' }
    ],
    tools: [
        { name: 'Perplexity', link: 'https://www.perplexity.ai' },
        { name: 'ChatGPT (with browsing)', link: 'https://chat.openai.com' },
        { name: 'Claude', link: 'https://claude.ai' }
    ]
  },
   {
    id: 'analyzing-customer-feedback',
    useCase: 'Research & Analysis',
    title: 'Analyzing Unstructured Customer Feedback from a Survey',
    primaryAudience: ['Product Managers', 'Marketers'],
    goal: 'To transform hundreds (or thousands) of open-ended survey responses from a CSV file into actionable insights and clear visualizations.',
    workflow: [
        { title: 'Prepare Your Data (2 mins)', description: 'Ensure your customer feedback is in a simple CSV file with a header for the response column (e.g., "Feedback").' },
        { title: 'Upload and Analyze (15 mins)', description: 'Go to ChatGPT and use the Data Analyst feature (available to Plus users). Upload your CSV file. Use a powerful, multi-step prompt: `"Analyze the attached CSV file containing customer feedback in the \'Feedback\' column. 1. Perform a thematic analysis to identify the top 5 most common themes. 2. For each theme, provide a brief summary and pull 2-3 direct quotes as examples. 3. Perform a sentiment analysis and show the percentage of positive, negative, and neutral comments. 4. Create a bar chart visualizing the frequency of the top 5 themes."`' },
        { title: 'Generate a Summary Report (5 mins)', description: 'Copy the analysis and chart from ChatGPT. Paste it into Notion AI. Use the prompt "Create a concise executive summary from the following data analysis, highlighting the most critical customer insights and suggesting one potential action item."' }
    ],
    tools: [
        { name: 'ChatGPT (with Data Analyst)', link: 'https://chat.openai.com' },
        { name: 'Notion AI', link: 'https://www.notion.so/product/ai' }
    ]
  },
  {
    id: 'competitor-website-analysis',
    useCase: 'Research & Analysis',
    title: 'Performing a Comprehensive Competitor Website Analysis',
    primaryAudience: ['Marketers', 'Businesses', 'Developers'],
    goal: 'To deconstruct a competitor\'s online strategy, including their value proposition, technical stack, and content focus, without manual investigation.',
    workflow: [
        { title: 'Analyze Marketing and Content (10 mins)', description: 'Go to ChatGPT or any LLM with web browsing capabilities. Input the competitor\'s URL. Prompt: "Analyze the website [competitor\'s URL]. What is their main value proposition? Who is their target audience? What are the top 3 themes of their blog or content section? What is their call-to-action?"' },
        { title: 'Analyze Technical Stack (5 mins)', description: 'Use a specialized AI-powered tool like BuiltWith. Simply enter the competitor\'s URL, and it will analyze the website to identify the technologies it\'s built on (CMS, analytics tools, advertising networks, widgets, etc.).' },
        { title: 'Create a Competitive "Battle Card" (10 mins)', description: 'Gather the insights from the first two steps. Go to Claude. Prompt: "Create a competitor battle card for [Competitor\'s Name]. Include the following sections and fill them with this information: [paste your notes]. Sections should be: Value Proposition, Target Audience, Key Content Themes, and Technology Stack." This creates a shareable, easy-to-digest summary.' }
    ],
    tools: [
        { name: 'ChatGPT (with browsing)', link: 'https://chat.openai.com' },
        { name: 'BuiltWith', link: 'https://builtwith.com' },
        { name: 'Claude', link: 'https://claude.ai' }
    ]
  },
  {
    id: 'validating-business-idea',
    useCase: 'Research & Analysis',
    title: 'Brainstorming and Validating a Creative or Business Idea',
    primaryAudience: ['Creators', 'Entrepreneurs', 'Students'],
    goal: 'To stress-test a raw idea, identify potential blind spots, and define the ideal customer before investing significant time or money.',
    workflow: [
        { title: 'Adversarial Brainstorming (15 mins)', description: 'Go to ChatGPT. Frame your session as a "Red Team" exercise. Prompt: "Act as a skeptical venture capitalist. My business idea is [describe your idea in 1-2 sentences]. Your goal is to challenge me. What are the top 5 reasons this idea will fail? What are the biggest market risks I\'m not seeing?" This helps you anticipate challenges.' },
        { title: 'Define the Ideal Customer (10 mins)', description: 'Based on the refined idea, create detailed user personas. Prompt: "Now, for the refined business idea of [refined idea], create two distinct user personas. For each, describe their demographics, daily routine, core problem that our product solves, and the key feature they would value most."' },
        { title: 'Check for Search Interest (5 mins)', description: 'Go to Google Trends. Search for the core problem your idea solves (not the solution). For example, if your idea is an AI meal-planning app, search for terms like "healthy meal ideas," "weekly meal plan," and "what to cook."' },
        { title: 'Find Existing Conversations (10 mins)', description: 'Go to Perplexity. Search for your problem space on specific forums. Prompt: "Search Reddit and Quora for discussions about the difficulty of planning healthy meals every week." This gives you direct, unfiltered insight into your potential customers\' language and frustrations.' }
    ],
    tools: [
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'Google Trends', link: 'https://trends.google.com' },
        { name: 'Perplexity', link: 'https://www.perplexity.ai' }
    ]
  },
  {
    id: 'stock-market-sentiment',
    useCase: 'Research & Analysis',
    title: 'Analyzing Stock Market Sentiment',
    primaryAudience: ['Investors'],
    goal: 'To scour recent news, earnings calls, and financial reports for a specific company to summarize the overall market sentiment.',
    workflow: [
        { title: 'Gather News and Reports (10 mins)', description: 'Go to Perplexity. Prompt: "Find and summarize the top 5 news articles and analyst ratings for [Company Ticker] in the last 7 days."' },
        { title: 'Analyze Earnings Call Transcript (15 mins)', description: 'Find the transcript of the latest earnings call. Paste it into Claude. Prompt: "Analyze this earnings call transcript. What was the overall tone of the CEO? What were the most challenging questions from analysts? Summarize the key positive and negative points."' },
        { title: 'Synthesize into a Sentiment Report (5 mins)', description: 'In the same Claude chat, prompt: "Based on all this information, provide a final sentiment analysis: Bullish, Bearish, or Neutral, and justify your answer with three key bullet points."' }
    ],
    tools: [
        { name: 'Perplexity', link: 'https://www.perplexity.ai' },
        { name: 'Claude', link: 'https://claude.ai' }
    ]
  },
  {
    id: 'academic-literature-review',
    useCase: 'Research & Analysis',
    title: 'Conducting a Comprehensive Academic Literature Review',
    primaryAudience: ['Students', 'Educators', 'Researchers'],
    goal: 'To analyze dozens of academic papers on a specific topic to synthesize key themes, identify research gaps, and generate a structured summary.',
    workflow: [
        { title: 'Source Discovery & Filtering (15 mins)', description: 'Use Consensus. Search with a research question like: "What is the evidence for the effectiveness of mindfulness on anxiety?". It will find and summarize claims from research papers.' },
        { title: 'Synthesize Key Papers (20 mins)', description: 'Download the top 10-15 PDFs. Upload them to NotebookLM. Prompt: "Across all these papers, what are the most common methodologies used? What are the main points of consensus and the main points of disagreement in their findings?"' },
        { title: 'Identify Research Gaps (10 mins)', description: 'In NotebookLM, ask: "Based on the conclusions of these papers, what are the most frequently mentioned areas for future research? Synthesize these into a \'Research Gaps\' section."' }
    ],
    tools: [
        { name: 'Consensus', link: 'https://consensus.app' },
        { name: 'NotebookLM', link: 'https://notebooklm.google.com' }
    ]
  },
  {
    id: 'social-media-trends',
    useCase: 'Research & Analysis',
    title: 'Identifying Emerging Trends from Social Media',
    primaryAudience: ['Marketers'],
    goal: 'To analyze real-time conversations on platforms like TikTok and Reddit to identify emerging trends and new buzzwords in a specific niche.',
    workflow: [
        { title: 'Scan Reddit Conversations (15 mins)', description: 'Go to ChatGPT. Prompt: "Act as a trend analyst. Search Reddit for discussions in subreddits like r/[YourNichel] and r/[YourNiche2] over the last month. What new products, styles, or slang terms are people repeatedly talking about?"' },
        { title: 'Analyze TikTok Themes (10 mins)', description: 'While direct analysis is hard, you can research the themes. Prompt: "What are the common video formats and audio clips currently trending on TikTok within the [Your Niche] community?"' },
        { title: 'Create a Trend Report (10 mins)', description: 'Go to Claude. Paste your findings from the previous steps. Prompt: "Create a concise trend report. For each of the top 3 emerging trends, give it a catchy name, a short description, and an example of how a brand could engage with it authentically."' }
    ],
    tools: [
        { name: 'ChatGPT (with browsing)', link: 'https://chat.openai.com' },
        { name: 'Claude', link: 'https://claude.ai' }
    ]
  },
  {
    id: 'summarizing-legal-contracts',
    useCase: 'Research & Analysis',
    title: 'Summarizing Lengthy Legal Contracts',
    primaryAudience: ['Businesses', 'Freelancers', 'Consumers'],
    goal: 'To identify and explain the key clauses, obligations, liabilities, and termination conditions in plain English.',
    workflow: [
        { title: 'Initial Summary (10 mins)', description: 'Paste the entire contract text into Claude. Prompt: "Act as a paralegal. Summarize this contract in simple terms. What is the main purpose of this agreement? Who are the parties involved? What is the duration?"' },
        { title: 'Identify Key Risks (10 mins)', description: 'In the same chat, prompt: "Identify and list all clauses related to liability, indemnity, and termination. For each, explain my specific obligations and potential risks in a bulleted list."' },
        { title: 'Formulate Questions (5 mins)', description: 'Finally, prompt: "Based on your analysis, generate a list of 5 specific questions I should ask the other party for clarification before signing."' }
    ],
    tools: [
        { name: 'Claude', link: 'https://claude.ai' }
    ]
  },
  {
    id: 'analyzing-financial-report',
    useCase: 'Research & Analysis',
    title: 'Analyzing a Company\'s Quarterly Financial Report',
    primaryAudience: ['Investors', 'Students'],
    goal: 'To process an earnings report (PDF) to extract key financial metrics, summarize management\'s commentary, and highlight any red flags or positive signals.',
    workflow: [
        { title: 'Upload and Query (15 mins)', description: 'Upload the company\'s quarterly report PDF to ChatGPT or Claude. Prompt: "Analyze this financial report. Extract the following key metrics into a table: Revenue, Net Income, Earnings Per Share (EPS), and Operating Margin. Compare them to the same quarter last year."' },
        { title: 'Analyze Management Commentary (10 mins)', description: 'In the same chat, prompt: "Find the \'Management\'s Discussion and Analysis\' section. Summarize the company\'s stated reasons for their performance and their outlook for the next quarter."' }
    ],
    tools: [
        { name: 'ChatGPT (with file upload)', link: 'https://chat.openai.com' },
        { name: 'Claude (with file upload)', link: 'https://claude.ai' }
    ]
  },
  {
    id: 'sentiment-analysis-chat-logs',
    useCase: 'Research & Analysis',
    title: 'Performing Sentiment Analysis on Customer Support Chat Logs',
    primaryAudience: ['Product Managers', 'Professionals'],
    goal: 'To analyze a dataset of customer service conversations to gauge satisfaction and find areas for product improvement.',
    workflow: [
        { title: 'Thematic and Sentiment Analysis (15 mins)', description: 'Upload a CSV of chat logs to ChatGPT (Data Analyst). Prompt: "Analyze this CSV of support logs. Identify the top 5 most frequent customer problems. Then, perform a sentiment analysis to calculate the percentage of positive, negative, and neutral conversations."' },
        { title: 'Extract Actionable Insights (10 mins)', description: 'In the same chat, prompt: "For the most frequent negative issue, extract 3 anonymous examples of customer complaints. Based on these, suggest one concrete improvement for the product or support process."' }
    ],
    tools: [
        { name: 'ChatGPT (with Data Analyst)', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'historical-timeline',
    useCase: 'Research & Analysis',
    title: 'Generating a Historical Timeline of a Complex Event',
    primaryAudience: ['Students', 'Hobbyists', 'Creators'],
    goal: 'To research and create a detailed, chronological timeline of a major historical event.',
    workflow: [
        { title: 'Gather Key Milestones (15 mins)', description: 'Go to Perplexity. Prompt: "Generate a list of the 15-20 most significant events, dates, and key figures during the [Historical Event, e.g., \'The French Revolution\']."' },
        { title: 'Format as a Timeline (10 mins)', description: 'Copy the list and paste it into ChatGPT. Prompt: "Organize these events into a chronological timeline in a markdown table. Columns should be \'Date\', \'Key Event\', and \'Significance\'."' },
        { title: 'Visualize the Timeline (10 mins)', description: 'Copy the data from the table. Go to Canva. Use their timeline infographic templates and paste your data to create a visually appealing and shareable timeline.' }
    ],
    tools: [
        { name: 'Perplexity', link: 'https://www.perplexity.ai' },
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'Canva', link: 'https://www.canva.com' }
    ]
  },
  {
    id: 'comparing-product-specs',
    useCase: 'Research & Analysis',
    title: 'Comparing Technical Specifications of Multiple Products',
    primaryAudience: ['Consumers'],
    goal: 'To gather and organize the specs for several competing products into a single, easy-to-read comparison table.',
    workflow: [
        { title: 'Gather Data (10 mins)', description: 'Use ChatGPT with browsing enabled. Prompt: "Find the technical specifications for the following three products: [Product A], [Product B], and [Product C]. Focus on features like [Feature 1], [Feature 2], and [Feature 3]."' },
        { title: 'Create Comparison Table (5 mins)', description: 'In the same chat, prompt: "Organize all of these specifications into a comparison table. The first column should be the feature name, and subsequent columns should be for each product."' },
        { title: 'Provide a Recommendation (5 mins)', description: 'Prompt: "Based on the table, which product would you recommend for a user whose top priority is [User Priority, e.g., \'battery life\']? Justify your answer."' }
    ],
    tools: [
        { name: 'ChatGPT (with browsing)', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'extracting-structured-data',
    useCase: 'Research & Analysis',
    title: 'Extracting Structured Data from Unstructured Text',
    primaryAudience: ['Data Analysts', 'Researchers', 'Professionals'],
    goal: 'To pull specific information from a large block of text and format it into a CSV file.',
    workflow: [
        { title: 'Provide Text and Define Schema (5 mins)', description: 'Go to Claude. Paste the unstructured text (e.g., a long report or a series of emails). Prompt: "From the text below, I need to extract the following information for each person mentioned: First Name, Last Name, Company, and Job Title."' },
        { title: 'Extract and Format (10 mins)', description: 'In the same chat, prompt: "Please extract this information for all people mentioned in the text and format the output as a clean, comma-separated value (CSV) that I can paste into a spreadsheet."' }
    ],
    tools: [
        { name: 'Claude', link: 'https://claude.ai' }
    ]
  },
  {
    id: 'identifying-plagiarism',
    useCase: 'Research & Analysis',
    title: 'Identifying Potential Plagiarism',
    primaryAudience: ['Educators', 'Professionals'],
    goal: 'To compare a submitted document against online sources to check for unoriginal content.',
    workflow: [
        { title: 'Direct Check (5 mins)', description: 'Use a dedicated plagiarism checker like Grammarly\'s built-in tool, which compares text against billions of web pages and academic databases.' },
        { title: 'Manual Spot-Checking with AI (10 mins)', description: 'If you suspect a specific paragraph is unoriginal, copy it and paste it into Perplexity. Prompt: "Find the original source of this text: \'[Paste paragraph]\'". Perplexity will search the web and provide source links if it finds a direct match.' }
    ],
    tools: [
        { name: 'Grammarly', link: 'https://www.grammarly.com' },
        { name: 'Perplexity', link: 'https://www.perplexity.ai' }
    ]
  },
  {
    id: 'forecasting-consumer-behavior',
    useCase: 'Research & Analysis',
    title: 'Forecasting Consumer Behavior from Sales Data',
    primaryAudience: ['Marketers', 'Data Analysts'],
    goal: 'To analyze historical sales data (CSV) to identify patterns and predict which products are likely to be popular in the next quarter.',
    workflow: [
        { title: 'Analyze Historical Data (15 mins)', description: 'Upload a sales data CSV to ChatGPT (Data Analyst). Prompt: "Analyze this sales data. Identify the top 5 best-selling products of all time. Then, create a time-series plot to visualize sales trends over the last year."' },
        { title: 'Identify Seasonality and Predict (10 mins)', description: 'In the same chat, prompt: "Based on the data, are there any clear seasonal trends? Which products sell best during which months? Based on this, predict the top 3 products for the upcoming quarter."' }
    ],
    tools: [
        { name: 'ChatGPT (with Data Analyst)', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'creating-user-personas',
    useCase: 'Research & Analysis',
    title: 'Creating User Personas from Interview Transcripts',
    primaryAudience: ['Designers', 'Product Managers'],
    goal: 'To synthesize common goals, pain points, and behaviors from user interviews into detailed user personas.',
    workflow: [
        { title: 'Synthesize Transcripts (15 mins)', description: 'Paste several anonymized user interview transcripts into Claude. Prompt: "Analyze these user interview transcripts. Identify the top 3 most common user goals and the top 3 most common user frustrations mentioned."' },
        { title: 'Generate Personas (10 mins)', description: 'In the same chat, prompt: "Based on this analysis, create two distinct user personas. For each, give them a name and photo suggestion, a short bio, and list their primary goals and frustrations in a bulleted list."' }
    ],
    tools: [
        { name: 'Claude', link: 'https://claude.ai' }
    ]
  },
  {
    id: 'analyzing-user-sessions',
    useCase: 'Research & Analysis',
    title: 'Analyzing User Session Recordings',
    primaryAudience: ['Researchers', 'Marketers'],
    goal: 'To summarize patterns from user behavior analytics to suggest specific A/B tests.',
    workflow: [
        { title: 'Summarize Observations (15 mins)', description: 'Manually watch 5-10 user session recordings from a tool like Hotjar. As you watch, take unstructured notes. Paste your notes into ChatGPT. Prompt: "Here are my raw observation notes from 10 user session recordings. Synthesize these notes to identify the top 3 user friction points on the website."' },
        { title: 'Propose A/B Tests (10 mins)', description: 'In the same chat, prompt: "For each of those friction points, propose a specific, testable A/B test hypothesis. For each hypothesis, define what you would change (the variant) and what metric you would measure to determine success."' }
    ],
    tools: [
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: '(Requires a session recording tool like Hotjar or FullStory)', link: '#' }
    ]
  },
  {
    id: 'fact-checking',
    useCase: 'Research & Analysis',
    title: 'Fact-Checking a Political Speech or News Article',
    primaryAudience: ['Students', 'Professionals'],
    goal: 'To take claims made in a speech or article and quickly find primary sources and official statistics to verify their accuracy.',
    workflow: [
        { title: 'Extract Key Claims (5 mins)', description: 'Paste the text of the speech or article into ChatGPT. Prompt: "Extract all verifiable factual claims from this text into a bulleted list."' },
        { title: 'Verify Each Claim (15 mins)', description: 'One by one, paste each claim into Perplexity with "Academic" or "WolframAlpha" focus. Prompt: "Find the primary source or official data to verify this claim: \'[Paste claim]\'". Perplexity will provide source-linked answers.' }
    ],
    tools: [
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'Perplexity', link: 'https://www.perplexity.ai' }
    ]
  },
  {
    id: 'mapping-philosophical-debate',
    useCase: 'Research & Analysis',
    title: 'Mapping Key Arguments in a Philosophical Debate',
    primaryAudience: ['Students', 'Educators'],
    goal: 'To analyze texts from different philosophers on a single topic to outline their core arguments and counter-arguments.',
    workflow: [
        { title: 'Summarize Core Arguments (15 mins)', description: 'Paste texts from two opposing philosophers into Claude. Prompt: "Summarize the core argument that [Philosopher A] makes about [Topic]. Then, separately, summarize the core argument that [Philosopher B] makes."' },
        { title: 'Create a Debate Map (10 mins)', description: 'In the same chat, prompt: "Now, create a table that maps their debate. Columns should be: \'Key Question\', \'[Philosopher A]\'s Position\', and \'[Philosopher B]\'s Position\'. Identify at least 3 key questions where they disagree."' }
    ],
    tools: [
        { name: 'Claude', link: 'https://claude.ai' }
    ]
  },

  // Use-Case: Productivity & Automation
  {
    id: 'automating-meeting-notes',
    useCase: 'Productivity & Automation',
    title: 'Automating Meeting Notes and Action Items',
    primaryAudience: ['Marketers', 'Developers', 'Professionals'],
    goal: 'To eliminate manual note-taking and ensure that action items are never missed.',
    workflow: [
        { title: 'Live Transcription (During the meeting)', description: 'Use Otter.ai or Fireflies.ai to join your virtual meeting (Zoom, Google Meet). It will automatically record and transcribe the entire conversation in real-time.' },
        { title: 'Summarization & Task Extraction (5 mins)', description: 'After the meeting, copy the full transcript from Otter/Fireflies and paste it into Claude. Use this powerful prompt: "Review this meeting transcript. Provide a concise summary, list the key decisions made, and create a table of all action items with the person responsible for each."' },
        { title: 'Task Management (Optional, 2 mins)', description: 'Use Zapier to create an automation. Set up a "Zap" that triggers when you email the action items from Claude to a specific Zapier email address, automatically creating tasks in your project management tool (like Asana, Trello, or Todoist).' }
    ],
    tools: [
        { name: 'Otter.ai', link: 'https://otter.ai' },
        { name: 'Fireflies.ai', link: 'https://fireflies.ai' },
        { name: 'Claude', link: 'https://claude.ai' },
        { name: 'Zapier', link: 'https://zapier.com' }
    ]
  },
  {
    id: 'inbox-zero',
    useCase: 'Productivity & Automation',
    title: 'Achieving "Inbox Zero" with an AI Assistant',
    primaryAudience: ['Professionals', 'Marketers'],
    goal: 'To process a high volume of emails efficiently by summarizing, drafting replies, and turning messages into actionable tasks automatically.',
    workflow: [
        { title: 'Triage and Summarize (5 mins)', description: 'For long, complex email threads, copy the entire text and paste it into Claude or ChatGPT. Prompt: "Summarize the key points and action items from this email thread in three bullet points." This allows you to understand the context in seconds instead of minutes.' },
        { title: 'Draft Intelligent Replies (5 mins)', description: 'For emails that require a standard response, use the same AI. Prompt: "Draft a polite and professional reply to this email. Confirm that we have received the request and will get back to them within 2 business days. Keep it under 100 words."' },
        { title: 'Automate Task Creation (Set up once, runs forever)', description: 'Use Zapier to connect your email (Gmail, Outlook) to your to-do list app (Todoist, Asana, Trello). Create a "Zap" with a specific trigger, such as applying a special label/star to an email (e.g., "To-Do"). The Zap will automatically create a new task in your to-do list with the email\'s subject as the title and the body as the description.' }
    ],
    tools: [
        { name: 'Claude', link: 'https://claude.ai' },
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'Zapier', link: 'https://zapier.com' }
    ]
  },
  {
    id: 'personalized-job-application',
    useCase: 'Productivity & Automation',
    title: 'Automating the Personalized Job Application Process',
    primaryAudience: ['Students', 'Job Seekers', 'Professionals'],
    goal: 'To quickly and effectively tailor your resume and cover letter for each specific job application, increasing your chances of getting an interview.',
    workflow: [
        { title: 'Deconstruct the Job Description (2 mins)', description: 'Copy the full text of the job description. Paste it into ChatGPT. Prompt: "Analyze this job description. Identify the top 5 most important keywords, required skills, and company values."' },
        { title: 'Tailor Your Resume (10 mins)', description: 'Copy your master resume. In the same chat, prompt: "Here is my resume. Rewrite the bullet points under my work experience to better reflect the keywords and skills identified above. Focus on quantifying my achievements."' },
        { title: 'Draft a Custom Cover Letter (5 mins)', description: 'In the same chat, prompt: "Now, write a compelling and concise cover letter. It should connect my specific experiences from my resume to the key requirements of the job description. The tone should be professional and enthusiastic."' },
        { title: 'Prepare for the Interview (15 mins)', description: 'Use ChatGPT\'s voice feature to simulate an interview. Prompt: "Let\'s do a mock interview for this role. You are the hiring manager. Ask me five common interview questions based on the job description." Practice your answers out loud.' }
    ],
    tools: [
        { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'automated-news-digest',
    useCase: 'Productivity & Automation',
    title: 'Creating a Fully Automated Personal News & Article Digest',
    primaryAudience: ['Developers', 'Marketers', 'Students', 'Professionals'],
    goal: 'To stay informed about industry trends from your favorite blogs and news sites without having to visit them daily, by receiving a custom summary email.',
    workflow: [
        { title: 'Set Up the Trigger (10 mins)', description: 'In Zapier, create a new Zap. For the trigger, use the "RSS by Zapier" app. Find the RSS feed URL for your favorite blogs or news sources (e.g., TechCrunch, a specific Substack). Add multiple RSS feeds if desired. Set it to trigger on each new post.' },
        { title: 'Connect to AI for Summarization (5 mins)', description: 'For the action step, connect to ChatGPT or another LLM integrated with Zapier. In the "Action" field, map the content from the RSS feed. Prompt: "Summarize the following article in 3-5 key bullet points. Extract the main conclusion. Keep the entire summary under 150 words."' },
        { title: 'Schedule the Delivery (5 mins)', description: 'Add a "Digest by Zapier" step. Set it to collect all the summaries generated over a period (e.g., daily or weekly).' },
        { title: 'Deliver Your Digest (2 mins)', description: 'Add a final action step: "Email by Zapier." Set it to send the compiled Digest to your email address at a specific time (e.g., every Friday at 8 AM).' }
    ],
    tools: [
        { name: 'Zapier', link: 'https://zapier.com' },
        { name: 'Any blog/news site with an RSS feed', link: '#' }
    ]
  },
  {
    id: 'planning-multi-day-trip',
    useCase: 'Productivity & Automation',
    title: 'Planning a Detailed Multi-Day Trip or Event',
    primaryAudience: ['Professionals', 'Consumers'],
    goal: 'To quickly create a structured, logical, and detailed itinerary, including logistics, activities, and bookings.',
    workflow: [
        { title: 'Brainstorm the Itinerary (10 mins)', description: 'Go to ChatGPT. Provide your constraints and preferences. Prompt: "Act as an expert travel agent. Plan a 4-day trip to Tokyo for two people in October. Our interests are food, modern art, and local markets. Our budget is moderate. Create a day-by-day itinerary with 2-3 activities per day and suggestions for different types of restaurants for dinner."' },
        { title: 'Research Logistics and Bookings (15 mins)', description: 'Use an AI with real-time web access like Perplexity. Based on the itinerary, ask specific logistical questions: "What is the most efficient way to get from Narita Airport to the Shibuya district?" or "Find three highly-rated mid-range hotels near Shinjuku Gyoen National Garden with availability in mid-October." Perplexity will provide answers with links to booking sites.' },
        { title: 'Organize and Format (5 mins)', description: 'Copy all the information (itinerary, hotel options, transport details). Paste it into Claude. Prompt: "Organize all of this travel information into a clean, easy-to-read table. Columns should be: Day, Time, Activity/Location, Booking Details/Notes."' },
        { title: 'Create a Custom Map (5 mins)', description: 'In the same chat, prompt: "Extract a simple list of all the place names and restaurants mentioned in the itinerary." Copy this list and paste it directly into Google My Maps to instantly create a custom map of your trip with all your points of interest pinned.' }
    ],
    tools: [
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'Perplexity', link: 'https://www.perplexity.ai' },
        { name: 'Google My Maps', link: 'https://www.google.com/mymaps' }
    ]
  },
  {
    id: 'organizing-messy-folder',
    useCase: 'Productivity & Automation',
    title: 'Organizing and Renaming a Messy Folder of Files',
    primaryAudience: ['Students', 'Professionals', 'Creators'],
    goal: 'To automatically sort files into subfolders and rename them to a standard format.',
    workflow: [
        { title: 'Generate the Script Logic (10 mins)', description: 'Go to ChatGPT. Prompt: "Write a Python script that organizes files in a \'Downloads\' folder. It should create subfolders for \'Images\', \'Documents\', and \'Archives\'. It should also rename every file to \'YYYY-MM-DD_OriginalFileName\'."' },
        { title: 'Execute the Script (5 mins)', description: 'Run the Python script on your computer. For a no-code alternative, describe the same logic to a tool like Zapier or Make.com that can watch a folder (e.g., in Google Drive or Dropbox) and perform actions.' }
    ],
    tools: [
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'Zapier', link: 'https://zapier.com' }
    ]
  },
  {
    id: 'personalized-daily-briefing',
    useCase: 'Productivity & Automation',
    title: 'Creating a Personalized Daily Briefing',
    primaryAudience: ['Professionals', 'Executives'],
    goal: 'To receive a single, consolidated email at the start of each day with everything you need to know.',
    workflow: [
        { title: 'Set the Trigger (2 mins)', description: 'In Zapier, use the "Schedule by Zapier" app. Set it to trigger every weekday at 7 AM.' },
        { title: 'Gather Inputs (10 mins)', description: 'Add several action steps: Find today\'s events on your Google Calendar. Find your top 3 tasks in Todoist or Asana. Find the top 3 headlines from an RSS feed of your favorite news source.' },
        { title: 'Format the Briefing (5 mins)', description: 'Add a final action step connecting to ChatGPT. Prompt: "Combine the following information into a clear and concise daily briefing email. Use markdown for formatting with clear headings for \'Today\'s Schedule\', \'Top Priorities\', and \'Morning Headlines\'. [Insert data from previous steps]."' },
        { title: 'Send the Email (2 mins)', description: 'Add the final step to send the formatted output to your email address.' }
    ],
    tools: [
        { name: 'Zapier', link: 'https://zapier.com' },
        { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'automating-social-media-scheduling',
    useCase: 'Productivity & Automation',
    title: 'Automating Social Media Content Scheduling',
    primaryAudience: ['Marketers', 'Creators'],
    goal: 'To automatically create and schedule social media posts whenever a new piece of content (like a blog post) is published.',
    workflow: [
        { title: 'Set the Trigger (5 mins)', description: 'In Zapier, use the "RSS by Zapier" app as the trigger, pointing to your blog\'s RSS feed.' },
        { title: 'Reformat for Social Media (5 mins)', description: 'Connect to ChatGPT. Prompt: "Take the following blog post title and summary. Rewrite it into an engaging tweet under 280 characters with 2-3 relevant hashtags. Then, write a slightly longer, more professional version for LinkedIn."' },
        { title: 'Schedule the Posts (5 mins)', description: 'Add action steps to connect to your social media scheduler (like Buffer or Hootsuite) or directly to Twitter/LinkedIn. Map the AI-generated text to the post content field.' }
    ],
    tools: [
        { name: 'Zapier', link: 'https://zapier.com' },
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'Buffer', link: 'https://buffer.com' }
    ]
  },
  {
    id: 'managing-calendar-natural-language',
    useCase: 'Productivity & Automation',
    title: 'Managing Your Calendar with Natural Language',
    primaryAudience: ['Professionals'],
    goal: 'To book meetings and manage your calendar by writing simple commands, without manually finding slots.',
    workflow: [
        { title: 'Use a Scheduling Assistant (5 mins setup)', description: 'Integrate an AI scheduling tool like Reclaim.ai or Clockwise with your Google Calendar.' },
        { title: 'Schedule a Meeting (2 mins)', description: 'Instead of manually looking for times, send an email or Slack message. Example: "Reclaim, find 30 minutes next week for me and janedoe@example.com to discuss the Q3 budget." The AI will find a mutually available time, send an invite, and automatically book it upon confirmation.' },
        { title: 'Block Time for Tasks (1 min)', description: 'Tell the AI to block time for deep work. Example: "Reclaim, block 2 hours tomorrow morning for \'Work on presentation\'." It will find the best available slot and create a calendar event.' }
    ],
    tools: [
        { name: 'Reclaim.ai', link: 'https://reclaim.ai' },
        { name: 'Clockwise', link: 'https://www.getclockwise.com' }
    ]
  },
  {
    id: 'smart-read-it-later-system',
    useCase: 'Productivity & Automation',
    title: 'Building a Smart "Read-it-Later" System',
    primaryAudience: ['Researchers', 'Students', 'Professionals'],
    goal: 'To automatically summarize, tag, and organize articles you save for later.',
    workflow: [
        { title: 'Set the Trigger (5 mins)', description: 'Use a tool like Readwise Reader or set up a Zapier trigger for when you add a new article to Pocket.' },
        { title: 'Summarize and Tag (5 mins)', description: 'Create a Zapier action that sends the article content to ChatGPT. Prompt: "Summarize this article in 5 key bullet points. Then, extract the top 3 most relevant keywords from the text and list them as tags."' },
        { title: 'Save to Knowledge Base (5 mins)', description: 'Add a final action step to send the summary and tags to your personal knowledge base like Notion or Obsidian, creating a new, neatly organized entry in your database.' }
    ],
    tools: [
        { name: 'Pocket', link: 'https://getpocket.com' },
        { name: 'Zapier', link: 'https://zapier.com' },
        { name: 'Notion AI', link: 'https://www.notion.so/product/ai' }
    ]
  },
  {
    id: 'instant-rfp-responses',
    useCase: 'Productivity & Automation',
    title: 'Generating Instant Responses to RFPs/RFIs',
    primaryAudience: ['Sales Professionals', 'Businesses'],
    goal: 'To leverage an internal knowledge base to generate accurate first drafts for new Requests for Proposals.',
    workflow: [
        { title: 'Create a Knowledge Base (30 mins setup)', description: 'Use a tool like Notion AI or NotebookLM. Upload all of your past proposals, product documentation, and security information.' },
        { title: 'Query with the RFP (15 mins)', description: 'When a new RFP arrives, copy a specific question from it (e.g., "Describe your data security protocols").' },
        { title: 'Generate the Draft (5 mins)', description: 'Paste the question into your AI knowledge base (Notion AI Q&A or NotebookLM). Prompt: "Using only the information from the uploaded documents, provide a comprehensive answer to the following RFP question: \'[Paste question]\'."' }
    ],
    tools: [
        { name: 'Notion AI', link: 'https://www.notion.so/product/ai' },
        { name: 'NotebookLM', link: 'https://notebooklm.google.com' }
    ]
  },
  {
    id: 'automating-expense-reports',
    useCase: 'Productivity & Automation',
    title: 'Automating Expense Report Generation',
    primaryAudience: ['Freelancers', 'Professionals', 'Entrepreneurs'],
    goal: 'To create expense reports automatically from email receipts.',
    workflow: [
        { title: 'Set the Trigger (5 mins)', description: 'In Zapier, set the trigger as "New Email" in a specific folder/label in your Gmail (e.g., "Receipts").' },
        { title: 'Extract Data (5 mins)', description: 'Connect to ChatGPT or use Zapier\'s "Email Parser". Prompt the AI: "From this email, extract the Vendor Name, Total Amount, and Transaction Date. Format the output as JSON."' },
        { title: 'Add to Spreadsheet (5 mins)', description: 'Add a final action step to "Create a new row" in a Google Sheets expense report. Map the extracted vendor, amount, and date to the correct columns.' }
    ],
    tools: [
        { name: 'Zapier', link: 'https://zapier.com' },
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'Google Sheets', link: 'https://www.google.com/sheets/about/' }
    ]
  },
  {
    id: 'personal-crm-from-contacts',
    useCase: 'Productivity & Automation',
    title: 'Creating a Personal CRM from Your Contacts',
    primaryAudience: ['Sales Professionals', 'Freelancers', 'Professionals'],
    goal: 'To automatically enrich your contact list with relevant, up-to-date information.',
    workflow: [
        { title: 'Provide Contact Info (1 min)', description: 'Go to ChatGPT. Prompt: "Act as a research assistant. I\'m building a personal CRM."' },
        { title: 'Enrich the Contact (5 mins)', description: 'Prompt: "For the contact [Name] who works at [Company], find their LinkedIn profile URL, a brief summary of what their company does, and one piece of recent news about their company. " The AI will browse the web to find this information.' },
        { title: 'Log to CRM (2 mins)', description: 'Copy the enriched information and paste it into your CRM (even a simple Notion database or Google Sheet) under a "Notes" section for that contact.' }
    ],
    tools: [
        { name: 'ChatGPT (with browsing)', link: 'https://chat.openai.com' },
        { name: 'Notion AI', link: 'https://www.notion.so/product/ai' }
    ]
  },
  {
    id: 'drafting-weekly-team-updates',
    useCase: 'Productivity & Automation',
    title: 'Drafting Weekly Team Update Reports',
    primaryAudience: ['Project Managers', 'Professionals'],
    goal: 'To automatically generate a summary of completed tasks, blockers, and upcoming milestones for a weekly status report.',
    workflow: [
        { title: 'Set the Trigger (2 mins)', description: 'Use "Schedule by Zapier" to run every Friday afternoon.' },
        { title: 'Gather Data (10 mins)', description: 'Create several action steps to find recently completed tasks in your project management tool (e.g., Asana, Jira, or Trello).' },
        { title: 'Draft the Report (5 mins)', description: 'Send the list of tasks to ChatGPT. Prompt: "Here is a list of tasks completed this week. Organize them into a weekly update email. Create sections for \'What We Accomplished\', \'Current Blockers\' (as a placeholder), and \'Focus for Next Week\' (as a placeholder). The tone should be positive and concise."' },
        { title: 'Send for Review (2 mins)', description: 'Have the final action send the drafted email to you, so you can fill in the placeholder sections and forward it to your team.' }
    ],
    tools: [
        { name: 'Zapier', link: 'https://zapier.com' },
        { name: 'Asana/Jira/Trello', link: '#' },
        { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'filtering-job-applications',
    useCase: 'Productivity & Automation',
    title: 'Filtering and Prioritizing Job Applications',
    primaryAudience: ['HR Professionals', 'Professionals'],
    goal: 'To parse incoming resumes and screen them for key skills and experience, flagging the top candidates.',
    workflow: [
        { title: 'Set Up Automation (10 mins)', description: 'Use Zapier to trigger whenever a new resume is received (e.g., via email or a form).' },
        { title: 'Analyze Resume Against Job Description (5 mins)', description: 'Send the resume text and the job description to Claude. Prompt: "Analyze this resume against the following job description. Score the candidate from 1-10 on their alignment with the role. Provide a 3-bullet point summary of their strengths and weaknesses."' },
        { title: 'Prioritize Candidates (2 mins)', description: 'Add a step that filters the results. If the score is above a certain threshold (e.g., 8/10), have the Zap send a notification to a specific Slack channel or add the candidate to a "Top Candidates" spreadsheet.' }
    ],
    tools: [
        { name: 'Zapier', link: 'https://zapier.com' },
        { name: 'Claude', link: 'https://claude.ai' }
    ]
  },
  {
    id: 'automating-photo-tagging',
    useCase: 'Productivity & Automation',
    title: 'Automating Keyword Tagging for a Photo Library',
    primaryAudience: ['Photographers', 'Creators'],
    goal: 'To use vision AI to automatically scan photos and add relevant tags, making them easily searchable.',
    workflow: [
        { title: 'Upload and Analyze (5 mins per image)', description: 'Upload a photo to ChatGPT-4o or Claude 3 Opus. Prompt: "Analyze this image. Provide a list of 10-15 relevant keywords and tags for a stock photography website. Include objects, concepts, colors, and mood."' },
        { title: 'Automate in Bulk (Set up once)', description: 'For a more automated solution, connect a cloud storage folder (like Google Drive) to an AI platform via Zapier or Make.com. Use a service like Google Cloud Vision AI as the action step to automatically generate tags for any new photo added to the folder.' }
    ],
    tools: [
        { name: 'ChatGPT (with image input)', link: 'https://chat.openai.com' },
        { name: 'Google Cloud Vision AI', link: 'https://cloud.google.com/vision' },
        { name: 'Zapier', link: 'https://zapier.com' }
    ]
  },
  {
    id: 'automating-meeting-prep',
    useCase: 'Productivity & Automation',
    title: 'Creating a "Meeting Prep" Automation',
    primaryAudience: ['Sales Professionals', 'Account Managers', 'Executives'],
    goal: 'To receive an automated briefing before any scheduled meeting with external participants.',
    workflow: [
        { title: 'Set the Trigger (5 mins)', description: 'Use the "New Event" trigger in Google Calendar. Add a filter so it only runs for events with external attendees.' },
        { title: 'Research Attendees (5 mins)', description: 'Add an action step that sends the attendees\' names and companies to ChatGPT. Prompt: "For the following people, find their LinkedIn profile URLs and a one-sentence summary of their role."' },
        { title: 'Find Recent History (5 mins)', description: 'Add another action to search your Gmail for the last email thread with the attendees.' },
        { title: 'Create the Briefing (5 mins)', description: 'Send all the gathered information to ChatGPT. Prompt: "Create a meeting prep document. Include a list of attendees with their roles/LinkedIn URLs, and a summary of our last email conversation. [Insert data from previous steps]."' },
        { title: 'Send Notification (2 mins)', description: 'Have the final brief sent to you via Slack or email 30 minutes before the meeting starts.' }
    ],
    tools: [
        { name: 'Zapier', link: 'https://zapier.com' },
        { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'transcribing-voice-memos',
    useCase: 'Productivity & Automation',
    title: 'Transcribing and Analyzing Voice Memos',
    primaryAudience: ['Journalists', 'Students', 'Professionals'],
    goal: 'To automatically transcribe voice notes and turn them into structured summaries or tasks.',
    workflow: [
        { title: 'Automated Transcription (5 mins)', description: 'Use an app like Otter.ai or Whisper to record your voice memos. They will automatically transcribe the audio to text.' },
        { title: 'Summarize and Extract (5 mins)', description: 'Set up a Zapier automation that triggers when a new transcription is ready. Send the text to ChatGPT. Prompt: "Summarize this voice memo transcript. Extract any clear action items into a bulleted list."' },
        { title: 'Create Tasks (2 mins)', description: 'Add a final step to your Zap that creates new tasks in your to-do list app (Todoist, Asana) from the extracted action items.' }
    ],
    tools: [
        { name: 'Otter.ai', link: 'https://otter.ai' },
        { name: 'Zapier', link: 'https://zapier.com' },
        { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'building-no-code-internal-tool',
    useCase: 'Productivity & Automation',
    title: 'Building a "No-Code" Internal Tool',
    primaryAudience: ['Professionals', 'Startups'],
    goal: 'To create a simple internal application (e.g., an employee directory) by describing its functionality in plain English.',
    workflow: [
        { title: 'Describe the App (15 mins)', description: 'Go to an AI-powered app builder like Gamma (for presentations/sites) or Softr (for apps on Airtable). Describe what you want to build. Prompt: "Create a simple, searchable employee directory website. It should have a page for each employee with fields for their photo, name, job title, department, and email address."' },
        { title: 'Connect Your Data (10 mins)', description: 'Connect the app builder to your data source, which could be a simple Google Sheet or Airtable database that you\'ve populated with employee information.' },
        { title: 'Refine and Publish (10 mins)', description: 'Use the AI\'s suggestions and a drag-and-drop editor to refine the look and feel. Publish the tool to a private URL for your team to use.' }
    ],
    tools: [
        { name: 'Softr', link: 'https://www.softr.io' },
        { name: 'Airtable', link: 'https://www.airtable.com' },
        { name: 'Gamma', link: 'https://gamma.app' }
    ]
  },
  {
    id: 'automating-fitness-meal-planning',
    useCase: 'Productivity & Automation',
    title: 'Automating Fitness and Meal Planning',
    primaryAudience: ['Health & Fitness'],
    goal: 'To generate personalized weekly workout and meal plans based on your goals and preferences.',
    workflow: [
        { title: 'Define Your Profile (5 mins)', description: 'Go to ChatGPT. Prompt: "Act as a personal trainer and nutritionist. My goal is [e.g., \'to lose 5kg in 2 months\']. I am 30 years old, have access to a gym, and I dislike [food preference, e.g., \'seafood\']."' },
        { title: 'Generate the Plan (10 mins)', description: 'In the same chat, prompt: "Based on my profile, create a detailed 7-day workout plan (alternating between strength and cardio) and a corresponding 7-day meal plan with 3 meals and 2 snacks per day. The meals should be simple to prepare."' },
        { title: 'Create a Shopping List (5 mins)', description: 'Finally, prompt: "Now, consolidate all the ingredients from the meal plan into a categorized shopping list for the week."' }
    ],
    tools: [
        { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },

  // Use-Case: Design & Creativity
  {
    id: 'visual-brand-identity',
    useCase: 'Design & Creativity',
    title: 'Creating a Cohesive Visual Brand Identity for a New Project',
    primaryAudience: ['Creators', 'Marketers', 'Startups'],
    goal: 'To quickly generate a professional-looking logo, color palette, and set of brand images.',
    workflow: [
        { title: 'Concept & Mood Board (10 mins)', description: 'Start with ChatGPT. Describe your project and ask it to brainstorm brand keywords, archetypes, and a color palette (with hex codes). Then, go to Midjourney and use those keywords to generate a visual mood board. Prompt: "/imagine a mood board for a tech startup that is innovative, minimalist, and trustworthy, color palette of deep blue and electric green --style raw"' },
        { title: 'Logo Generation (15 mins)', description: 'Use Ideogram for creating logos, as it handles text better than most image models. Use prompts based on your concept. Prompt: "A minimalist logo for \'Arise AI\', a circle with a stylized \'A\' that looks like a rising sun. Modern, clean typography." Generate several variations.' },
        { title: 'Brand Asset Creation (15 mins)', description: 'Once you have a logo and style, go back to Midjourney to create consistent brand assets. Use prompts like "/imagine a LinkedIn banner background in the style of [describe your mood board], minimalist, abstract shapes, deep blue and electric green --ar 3:1"' }
    ],
    tools: [
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'Midjourney', link: 'https://www.midjourney.com' },
        { name: 'Ideogram', link: 'https://ideogram.ai' }
    ]
  },
  {
    id: 'prototyping-website-mockup',
    useCase: 'Design & Creativity',
    title: 'Prototyping a Website or App UI/UX Mockup from a Simple Idea',
    primaryAudience: ['Developers', 'Product Managers', 'Entrepreneurs'],
    goal: 'To quickly visualize an application\'s user interface and flow without needing any design skills, enabling faster feedback and iteration.',
    workflow: [
        { title: 'Define User Flow and Key Screens (10 mins)', description: 'Go to ChatGPT. Describe your app idea. Prompt: "Act as a UX designer. I\'m creating a simple mobile app for habit tracking. What are the 5 essential screens I need? For each screen, list the key components and buttons." (e.g., Home screen, Add New Habit screen, Progress screen, etc.).' },
        { title: 'Generate Initial Mockups (15 mins)', description: 'Go to a text-to-mockup tool like Uizard. Take the description for a key screen from ChatGPT and use it as a prompt. Prompt: "Create a mobile app screen for a habit tracker. It should have a clean, minimalist design with a list of daily habits. Each habit should have a checkbox. Include a prominent \'+\' button at the bottom to add a new habit."' },
        { title: 'Create a Unique Hero Image or Icon Set (10 mins)', description: 'Go to Midjourney to create a stunning visual for your app\'s home screen or custom icons. Prompt: "/imagine a motivational hero image for a habit tracking app, abstract illustration of a path leading up a mountain, pastel colors, minimalist style --ar 9:16"' },
        { title: 'Assemble into a Clickable Prototype (5 mins)', description: 'Uizard allows you to link your generated screens together. You can also import the hero image from Midjourney to create a high-fidelity prototype that you can share with stakeholders for early feedback.' }
    ],
    tools: [
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'Uizard', link: 'https://uizard.io' },
        { name: 'Midjourney', link: 'https://www.midjourney.com' }
    ]
  },
  {
    id: 'creating-social-media-video',
    useCase: 'Design & Creativity',
    title: 'Creating a Short, Engaging Social Media Video from Scratch',
    primaryAudience: ['Marketers', 'Creators'],
    goal: 'To produce a complete short-form video (like an Instagram Reel or TikTok) with script, voiceover, visuals, and music, using only AI tools.',
    workflow: [
        { title: 'Script and Scene Direction (5 mins)', description: 'Go to ChatGPT. Prompt: "Write a script for a 30-second Instagram Reel about the benefits of drinking more water. Structure it into 4 short scenes with visual suggestions for each."' },
        { title: 'Generate a High-Quality Voiceover (5 mins)', description: 'Go to ElevenLabs. Paste the script from ChatGPT, choose a voice that fits your brand\'s tone (e.g., energetic, calm), and generate the audio file.' },
        { title: 'Generate the Video Clips (15 mins)', description: 'Go to an AI video generator like InVideo AI or Pika Labs. Paste the script (or even just the core idea) and it will generate video scenes with stock footage and AI-generated clips that match the text. Upload your voiceover from ElevenLabs to sync it perfectly.' },
        { title: 'Create a Custom Soundtrack (5 mins)', description: 'Go to Suno AI. Give it a simple prompt to create royalty-free background music. Prompt: "Upbeat, lo-fi instrumental track for an inspiring social media video, 30 seconds long." Download the music and add it as the final layer to your video in your video editor or directly within InVideo.' }
    ],
    tools: [
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'ElevenLabs', link: 'https://try.elevenlabs.io/j3dvu4w355o2' },
        { name: 'InVideo AI', link: 'https://invideo.io?ref=peterh' },
        { name: 'Suno AI', link: 'https://www.suno.ai' }
    ]
  },
  {
    id: 'generating-product-photoshoots',
    useCase: 'Design & Creativity',
    title: 'Generating Professional Product Photoshoots Without a Camera',
    primaryAudience: ['Entrepreneurs', 'Marketers'],
    goal: 'To take a single, basic photo of a product (even from a smartphone) and place it in a variety of professional, high-quality lifestyle and studio settings.',
    workflow: [
        { title: 'Get a Clean Product Image (5 mins)', description: 'Take a clear, well-lit photo of your product against a neutral background.' },
        { title: 'Isolate the Product (2 mins)', description: 'Use an AI background remover tool. Canva\'s Magic Studio or the free remove.bg can do this perfectly. Download the product as a transparent PNG file.' },
        { title: 'Generate a Scene (10 mins)', description: 'Go to a specialized AI product photography tool like Pebblely. Upload your transparent PNG. Now, describe the scene you want. Prompt: "Place this bottle of hand cream on a white marble surface, next to a small green succulent plant and a neatly folded white towel. The lighting should be soft and natural, like in a spa." Generate multiple variations.' },
        { title: 'Write Matching Ad Copy (5 mins)', description: 'Choose your favorite image from Pebblely. Upload it to ChatGPT and prompt: "Write three short, catchy Instagram ad copy variations for this product image. Highlight the feeling of luxury and natural ingredients."' }
    ],
    tools: [
        { name: 'Canva Magic Studio', link: 'https://www.canva.com/magic' },
        { name: 'Pebblely', link: 'https://pebblely.com' },
        { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'creating-childrens-storybook',
    useCase: 'Design & Creativity',
    title: 'Creating an Illustrated Children\'s Storybook with Consistent Characters',
    primaryAudience: ['Creators', 'Educators', 'Parents'],
    goal: 'To turn a story idea into a fully illustrated book, solving the difficult problem of keeping the main character looking the same across all images.',
    workflow: [
        { title: 'Develop the Story and Character (10 mins)', description: 'Go to ChatGPT. Prompt: "Write a short, simple story for 3-5 year olds about a curious little fox named Finn who discovers a magical, glowing mushroom in the forest. Describe Finn\'s appearance: big ears, a bushy tail, and a friendly, wide-eyed expression."' },
        { title: 'Create the Character Reference Sheet (5 mins)', description: 'Go to Midjourney. First, create your main character. Prompt: "/imagine a character design sheet for a friendly cartoon fox named Finn, big ears, bushy tail, wide-eyed expression, standing pose, children\'s book illustration style --style raw" Once you have an image you love, copy its URL.' },
        { title: 'Illustrate the Story Scenes (20 mins)', description: 'Now, use Midjourney\'s Character Reference feature to illustrate the scenes. For each part of the story, write a prompt and add the character reference at the end. e.g., "/imagine Finn the fox looking with wonder at a glowing blue mushroom in a dark forest, children\'s book illustration style --cref [URL of your character image]"' },
        { title: 'Layout the Book (15 mins)', description: 'Import your generated illustrations into Canva. Use their book or presentation templates to lay out each page, adding the story text from ChatGPT alongside the corresponding images to create your final storybook.' }
    ],
    tools: [
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'Midjourney', link: 'https://www.midjourney.com' },
        { name: 'Canva', link: 'https://www.canva.com' }
    ]
  },
  {
    id: 'storyboard-film-scene',
    useCase: 'Design & Creativity',
    title: 'Creating a Storyboard for a Film Scene',
    primaryAudience: ['Filmmakers', 'Screenwriters', 'Video Producers'],
    goal: 'To quickly visualize a scene from a script with specific camera shots, lighting, and character positions.',
    workflow: [
      { title: 'Define the Scene and Shots (5 mins)', description: 'Go to ChatGPT. Prompt: "I have a scene where a detective finds a clue in a dark, rainy alley. Create a 4-shot list for this scene: 1. Wide shot establishing the alley. 2. Medium shot of the detective. 3. Close-up of the clue. 4. Over-the-shoulder shot."' },
      { title: 'Generate Storyboard Panels (15 mins)', description: 'Go to Midjourney. For each shot on your list, write a detailed prompt. Prompt: "/imagine a storyboard panel, close-up shot of a detective\'s hand picking up a glowing locket from a puddle, film noir style, cinematic lighting --ar 16:9"' },
      { title: 'Assemble the Sequence (10 mins)', description: 'Import the generated panels into a Canva presentation template to arrange them in order, adding text descriptions for dialogue or action under each frame.' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Midjourney', link: 'https://www.midjourney.com' },
      { name: 'Canva', link: 'https://www.canva.com' }
    ]
  },
  {
    id: 'architectural-visualizations',
    useCase: 'Design & Creativity',
    title: 'Generating Architectural Visualizations',
    primaryAudience: ['Architects', 'Interior Designers', 'Marketers'],
    goal: 'To create photorealistic renderings of a building\'s exterior or interior from a textual description.',
    workflow: [
      { title: 'Describe the Space (5 mins)', description: 'In ChatGPT, write a detailed description of the architectural space you want to visualize.' },
      { title: 'Generate the Rendering (15 mins)', description: 'Go to Midjourney. Use the description to create a highly detailed prompt. Prompt: "/imagine photorealistic architectural rendering of a modern minimalist living room, with floor-to-ceiling windows overlooking a forest, polished concrete floors, natural afternoon light, interior design magazine quality --ar 16:9"' },
      { title: 'Refine and Inpaint (10 mins)', description: 'The initial render might have small flaws. Use an AI inpainting tool like Adobe Photoshop\'s Generative Fill to fix details or add/remove objects (e.g., "add a modern floor lamp in the corner").' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Midjourney', link: 'https://www.midjourney.com' },
      { name: 'Adobe Photoshop', link: 'https://www.adobe.com/products/photoshop.html' }
    ]
  },
  {
    id: 'prototyping-fashion-concepts',
    useCase: 'Design & Creativity',
    title: 'Prototyping Fashion Design Concepts',
    primaryAudience: ['Fashion Designers', 'Students', 'Apparel Brands'],
    goal: 'To generate realistic mockups of clothing items by describing the style, fabric, and patterns.',
    workflow: [
      { title: 'Brainstorm the Concept (5 mins)', description: 'Go to ChatGPT. Prompt: "I want to design a futuristic streetwear jacket. Give me 5 keywords to describe its style and suggest 3 innovative materials it could be made from."' },
      { title: 'Generate the Mockup (15 mins)', description: 'Go to Midjourney. Use the keywords to create your prompt. Prompt: "/imagine a photorealistic product shot of a futuristic streetwear jacket, iridescent nylon fabric, clean background, on a mannequin, technical details, high fashion --ar 3:4"' },
      { title: 'Create Pattern Variations (10 mins)', description: 'Use an AI pattern generator like Canva\'s tools to create seamless patterns. Prompt: "Create a seamless pattern of geometric neon lines on a dark background.". You can then use Photoshop to mock up this pattern on your jacket design.' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Midjourney', link: 'https://www.midjourney.com' },
      { name: 'Canva Magic Studio', link: 'https://www.canva.com/magic' }
    ]
  },
  {
    id: 'creating-game-assets',
    useCase: 'Design & Creativity',
    title: 'Creating Unique Game Assets',
    primaryAudience: ['Indie Game Developers', 'Hobbyists'],
    goal: 'To design a set of consistent 2D assets for a video game, such as character sprites, items, and background tiles.',
    workflow: [
      { title: 'Define the Art Style (5 mins)', description: 'Go to ChatGPT. Prompt: "Define a consistent art style for a 2D fantasy RPG. It should be a mix of \'Ghibli\' and \'pixel art\'."' },
      { title: 'Generate Assets (20 mins)', description: 'Go to Midjourney. Use your defined style in every prompt to maintain consistency. Examples: "/imagine a set of 8-bit pixel art fantasy potion icons...", "/imagine a character sprite sheet of a knight in Ghibli-inspired pixel art..."' },
      { title: 'Isolate and Clean Up (10 mins)', description: 'Use Canva or Photoshop\'s AI background removal tools to isolate the generated assets and prepare them for your game engine.' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Midjourney', link: 'https://www.midjourney.com' },
      { name: 'Canva', link: 'https://www.canva.com' }
    ]
  },
  {
    id: 'generating-website-background',
    useCase: 'Design & Creativity',
    title: 'Generating Abstract Art for a Website Background',
    primaryAudience: ['Web Designers', 'Digital Artists'],
    goal: 'To create a series of high-resolution, abstract images with a specific color palette and texture.',
    workflow: [
      { title: 'Define the Aesthetic (5 mins)', description: 'In ChatGPT, describe the mood you want. Prompt: "I need a background image for a luxury brand\'s website. Give me 5 keywords that evoke a feeling of elegance, minimalism, and calm."' },
      { title: 'Generate the Image (10 mins)', description: 'Go to Midjourney. Use the keywords in your prompt. Prompt: "/imagine a high-resolution abstract background, gentle flowing lines of liquid gold and deep navy blue, minimalist, elegant, subtle texture, 8K --ar 16:9"' },
      { title: 'Create Variations (5 mins)', description: 'In Midjourney, use the "Vary (Subtle)" button on your favorite result to generate several similar options, creating a cohesive set of backgrounds for your site.' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Midjourney', link: 'https://www.midjourney.com' }
    ]
  },
  {
    id: 'designing-infographic',
    useCase: 'Design & Creativity',
    title: 'Designing a Data Visualization Infographic',
    primaryAudience: ['Marketers', 'Researchers', 'Educators'],
    goal: 'To provide a set of data and have an AI design a visually compelling and easy-to-understand infographic.',
    workflow: [
      { title: 'Structure the Data (5 mins)', description: 'Go to ChatGPT. Paste your raw data. Prompt: "Here is some data about [Topic]. Summarize the 3 most important statistics and suggest a compelling headline for an infographic."' },
      { title: 'Generate the Infographic (10 mins)', description: 'Go to an AI-powered design tool like Canva Magic Studio or Visme. Use their AI infographic generator. Prompt: "Create an infographic about [Topic] using my brand colors [Hex codes]. The key statistics are [Paste the 3 stats from ChatGPT]. Use a clean, modern style with icons."' },
      { title: 'Refine and Edit (10 mins)', description: 'Use the tool\'s editor to adjust the layout, change icons, and add your company\'s logo to the AI-generated design.' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Canva Magic Studio', link: 'https://www.canva.com/magic' },
      { name: 'Visme', link: 'https://www.visme.co' }
    ]
  },
  {
    id: 'creating-themed-decorations',
    useCase: 'Design & Creativity',
    title: 'Creating Themed Decorations for an Event',
    primaryAudience: ['Event Planners', 'Individuals'],
    goal: 'To generate ideas and visual mockups for event decorations, invitations, and posters based on a specific theme.',
    workflow: [
      { title: 'Brainstorm the Theme (10 mins)', description: 'Go to ChatGPT. Prompt: "I\'m planning a \'Murder Mystery\' themed dinner party. Brainstorm a list of creative ideas for invitations, table centerpieces, and a welcome sign."' },
      { title: 'Visualize the Ideas (15 mins)', description: 'Go to Midjourney. Generate visuals for your best ideas. Prompt: "/imagine a vintage-style invitation for a 1920s murder mystery party, art deco border, aged paper texture, elegant typography --ar 5:7"' },
      { title: 'Create the Assets (10 mins)', description: 'Upload your favorite visual from Midjourney to Canva. Use it as the background for their invitation or poster templates, add your event details, and get it ready to print or send digitally.' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Midjourney', link: 'https://www.midjourney.com' },
      { name: 'Canva', link: 'https://www.canva.com' }
    ]
  },
  {
    id: 'composing-musical-score',
    useCase: 'Design & Creativity',
    title: 'Composing a Musical Score for a Video',
    primaryAudience: ['Video Editors', 'Creators', 'Filmmakers'],
    goal: 'To describe the mood and tempo of a video scene and have an AI generate a royalty-free musical score to match.',
    workflow: [
      { title: 'Define the Musical Need (5 mins)', description: 'In ChatGPT, describe your video scene. Prompt: "I have a 2-minute video of a time-lapse of a city at night. What kind of music would fit? Give me 5 keywords for mood and tempo."' },
      { title: 'Generate the Music (10 mins)', description: 'Go to an AI music generator like Suno AI or Soundful. Use the keywords to generate your track. Prompt: "A 2-minute cinematic, ambient, electronic track. Mood: thoughtful, slightly melancholic, hopeful. For a city night time-lapse."' },
      { title: 'Refine and Download (5 mins)', description: 'Listen to the generated options, select your favorite, and download the high-quality audio file to add to your video editing timeline.' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Suno AI', link: 'https://www.suno.ai' },
      { name: 'Soundful', link: 'https://soundful.com' }
    ]
  },
  {
    id: 'designing-tattoo',
    useCase: 'Design & Creativity',
    title: 'Designing a Tattoo',
    primaryAudience: ['Individuals', 'Tattoo Artists'],
    goal: 'To brainstorm and generate unique tattoo designs by combining different styles and elements.',
    workflow: [
      { title: 'Brainstorm Concepts (10 mins)', description: 'Go to ChatGPT to flesh out your idea. Prompt: "I want a tattoo that represents resilience and growth. Combine the imagery of a phoenix with a lotus flower. What are some creative ways to merge these two ideas?"' },
      { title: 'Generate the Design (15 mins)', description: 'Go to Midjourney. Use the refined concept for your prompt. Prompt: "/imagine a tattoo design, a phoenix rising from a lotus flower, minimalist line art style, black ink, suitable for a forearm, on a white background --style raw"' },
      { title: 'Create Stencil/Mockup (5 mins)', description: 'Take the final design and use a tool like Photoshop to remove the background and create a clean black-and-white stencil that a tattoo artist can use. You can also use its AI to mock up the tattoo on a photo of your arm.' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Midjourney', link: 'https://www.midjourney.com' },
      { name: 'Adobe Photoshop', link: 'https://www.adobe.com/products/photoshop.html' }
    ]
  },
  {
    id: 'generating-patterns-textiles',
    useCase: 'Design & Creativity',
    title: 'Generating Patterns for Textiles or Wrapping Paper',
    primaryAudience: ['Graphic Designers', 'Artists', 'Crafters'],
    goal: 'To create seamless, tileable patterns for use on fabrics, wallpaper, or gift wrap.',
    workflow: [
      { title: 'Describe the Pattern (5 mins)', description: 'Think about the theme. A clear description is key.' },
      { title: 'Generate the Pattern (10 mins)', description: 'Go to Midjourney and use the --tile parameter. Prompt: "/imagine a whimsical pattern of watercolor foxes and autumn leaves, children\'s illustration style, on a cream background --tile"' },
      { title: 'Test the Seam (5 mins)', description: 'Download the generated image. Use a free online tool like a "Seamless Pattern Checker" to upload your image and see how it repeats, ensuring there are no obvious seams or breaks in the pattern.' }
    ],
    tools: [
      { name: 'Midjourney', link: 'https://www.midjourney.com' },
      { name: '(Online Seamless Pattern Checker)', link: '#' }
    ]
  },
  {
    id: 'visualizing-room-renovation',
    useCase: 'Design & Creativity',
    title: 'Visualizing a Room Renovation',
    primaryAudience: ['Homeowners', 'Interior Designers'],
    goal: 'To upload a photo of your current room and use an AI to generate different interior design styles.',
    workflow: [
      { title: 'Take a Photo (1 min)', description: 'Take a clear, well-lit photo of the room you want to redesign.' },
      { title: 'Use a Redesign Tool (15 mins)', description: 'Use a specialized AI interior design tool like Interior AI or Reimagine Home AI. Upload your photo.' },
      { title: 'Apply Different Styles (10 mins)', description: 'Use text prompts to generate new versions of your room. Prompt: "Redesign this living room in a \'Scandinavian\' style" or "Show me this kitchen with \'dark green cabinets and a marble countertop\'." The AI will repaint walls, swap furniture, and change lighting.' }
    ],
    tools: [
      { name: 'Interior AI', link: 'https://interiorai.com/' },
      { name: 'Reimagine Home AI', link: 'https://www.reimaginehome.ai/' }
    ]
  },
  {
    id: 'creating-dnd-character',
    useCase: 'Design & Creativity',
    title: 'Creating a Character for a Dungeons & Dragons Campaign',
    primaryAudience: ['TTRPG Players', 'Game Masters'],
    goal: 'To generate a visual portrait and a detailed backstory for a fantasy character.',
    workflow: [
      { title: 'Develop the Backstory (15 mins)', description: 'Go to ChatGPT. Prompt: "Create a character backstory for a Tiefling Warlock in Dungeons & Dragons. Their patron is The Great Old One. They are haunted by strange dreams but have a sarcastic and witty personality. Include a key personal goal and a dark secret."' },
      { title: 'Generate the Portrait (10 mins)', description: 'Go to Midjourney. Use the character description to create their portrait. Prompt: "/imagine a portrait of a male Tiefling Warlock, witty expression, dark purple skin, small curled horns, glowing green eyes, fantasy character art, detailed --ar 3:4"' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Midjourney', link: 'https://www.midjourney.com' }
    ]
  },
  {
    id: 'designing-book-cover',
    useCase: 'Design & Creativity',
    title: 'Designing a Professional Book Cover',
    primaryAudience: ['Authors', 'Indie Publishers'],
    goal: 'To generate a variety of book cover designs for a specific genre, including typography and imagery.',
    workflow: [
      { title: 'Brainstorm Concepts (5 mins)', description: 'Go to ChatGPT. Prompt: "I\'ve written a sci-fi thriller novel called \'The Chronos Void\'. Brainstorm 3 different concepts for the book cover."' },
      { title: 'Generate Cover Art (15 mins)', description: 'Go to Midjourney. Create the visual for your favorite concept. Prompt: "/imagine book cover art for a sci-fi thriller, a lone astronaut staring into a fractured, swirling black hole, minimalist, suspenseful feeling, no text --ar 2:3"' },
      { title: 'Add Typography (10 mins)', description: 'Upload the generated art to Canva. Use their book cover templates to add the title and author\'s name in a professional, genre-appropriate font. Experiment with different layouts and effects.' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Midjourney', link: 'https://www.midjourney.com' },
      { name: 'Canva', link: 'https://www.canva.com' }
    ]
  },
  {
    id: 'generating-food-photography',
    useCase: 'Design & Creativity',
    title: 'Generating Food Photography Concepts',
    primaryAudience: ['Food Bloggers', 'Restaurants', 'Chefs'],
    goal: 'To create hyper-realistic images of beautifully plated dishes for a menu or blog, without a real photoshoot.',
    workflow: [
      { title: 'Describe the Dish (5 mins)', description: 'Be as descriptive as possible. Note the ingredients, colors, textures, and plating style.' },
      { title: 'Generate the Image (15 mins)', description: 'Go to Midjourney. Use your detailed description. Prompt: "/imagine hyperrealistic food photography of a stack of fluffy pancakes, dripping with maple syrup, topped with fresh blueberries and a dusting of powdered sugar, on a rustic wooden table, morning light --ar 4:5"' }
    ],
    tools: [
      { name: 'Midjourney', link: 'https://www.midjourney.com' }
    ]
  },
  {
    id: 'creating-mind-map',
    useCase: 'Design & Creativity',
    title: 'Creating a Mind Map for a Brainstorming Session',
    primaryAudience: ['Students', 'Strategists', 'Teams'],
    goal: 'To input a central idea and have an AI generate a visual mind map, branching out into related concepts and sub-topics.',
    workflow: [
      { title: 'Generate the Structure (10 mins)', description: 'Go to ChatGPT. Prompt: "Create a mind map structure for the central topic \'Improving Team Productivity\'. Branch out into at least 4 main categories, and create 3-4 sub-points for each category."' },
      { title: 'Visualize the Mind Map (10 mins)', description: 'Copy the text outline. Go to an AI-powered diagramming tool like Whimsical or use Canva\'s diagram features. Many tools can automatically convert a text outline into a visual mind map.' },
      { title: 'Refine and Collaborate (10 mins)', description: 'Use the tool\'s editor to rearrange nodes, add colors, and invite team members to collaborate on the generated mind map in real-time.' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Whimsical', link: 'https://whimsical.com' },
      { name: 'Canva', link: 'https://www.canva.com' }
    ]
  },

  // Use-Case: Education & Learning
  {
    id: 'interactive-lesson-plan',
    useCase: 'Education & Learning',
    title: 'Creating an Engaging and Interactive Lesson Plan',
    primaryAudience: ['Educators'],
    goal: 'To reduce prep time while creating richer, more dynamic learning materials for students.',
    workflow: [
        { title: 'Lesson Planning & Content (15 mins)', description: 'Go to ChatGPT. Provide the topic, grade level, and duration. Prompt: "Create a 45-minute lesson plan for 5th graders about the water cycle. Include learning objectives, an engaging intro activity, key discussion questions, and a simple quiz at the end."' },
        { title: 'Presentation Slides (5 mins)', description: 'Copy the lesson plan text from ChatGPT and paste it into Gamma. Gamma will automatically generate a full, beautifully designed presentation with images and proper formatting in seconds. You can then edit and refine it.' },
        { title: 'Worksheets & Visuals (10 mins)', description: 'Go to Canva\'s Magic Studio. Use its AI tools to create a supporting worksheet. Prompt: "Create a worksheet for 5th graders to label the parts of the water cycle." Canva will generate a template you can customize and print.' }
    ],
    tools: [
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'Gamma', link: 'https://gamma.app' },
        { name: 'Canva Magic Studio', link: 'https://www.canva.com/magic' }
    ]
  },
  {
    id: 'differentiated-learning-materials',
    useCase: 'Education & Learning',
    title: 'Creating Differentiated Learning Materials for a Diverse Classroom',
    primaryAudience: ['Educators'],
    goal: 'To adapt a single core lesson for students with varying reading levels and learning needs without creating three separate lesson plans from scratch.',
    workflow: [
        { title: 'Establish the Core Text (5 mins)', description: 'Go to ChatGPT. Prompt it to generate a standard text for your lesson. Prompt: "Write a 500-word article suitable for a 7th-grade level about the process of photosynthesis."' },
        { title: 'Differentiate for Reading Levels (10 mins)', description: 'In the same chat, ask the AI to create variations. Prompt 1: "Now, rewrite this article for a struggling reader at a 4th-grade reading level. Use simpler sentences and vocabulary." Prompt 2: "Next, rewrite the original article for an advanced reader. Include more complex vocabulary and touch upon related concepts like cellular respiration."' },
        { title: 'Generate Tailored Questions (5 mins)', description: 'Ask the AI to create comprehension questions for each version. Prompt: "For each of the three versions of the article (standard, simple, advanced), create five comprehension questions that are appropriate for that specific reading level."' },
        { title: 'Design Engaging Worksheets (10 mins)', description: 'Go to Canva\'s Magic Studio. Use its AI to quickly create worksheets for each level. Prompt: "Create a \'parts of a plant\' labeling worksheet for elementary students" or "Design a concept map template for comparing photosynthesis and respiration for advanced students."' }
    ],
    tools: [
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'Canva Magic Studio', link: 'https://www.canva.com/magic' }
    ]
  },
  {
    id: 'personal-ai-study-tutor',
    useCase: 'Education & Learning',
    title: 'Building a Personal AI Study Tutor for Exam Preparation',
    primaryAudience: ['Students'],
    goal: 'To transform passive class notes into an interactive and engaging study session that actively quizzes you on the material.',
    workflow: [
        { title: 'Upload Your Knowledge Base (5 mins)', description: 'Gather all your class notes, lecture slides, and relevant readings. Go to NotebookLM and upload all these documents into a new "notebook."' },
        { title: 'Generate Study Aids (15 mins)', description: 'Once your sources are uploaded, ask NotebookLM to create study tools based on your specific material. Prompt 1: "Act as a study guide creator. From all the uploaded sources, generate a glossary of the 20 most important key terms and their definitions." Prompt 2: "Now, create a practice quiz with 15 multiple-choice questions based on the key concepts in my notes."' },
        { title: 'Initiate a Verbal Quiz (15 mins)', description: 'Copy the quiz questions generated by NotebookLM. Open ChatGPT on your phone and activate the voice conversation mode. Prompt: "You are my study tutor. I\'m going to give you a list of questions. Ask me them one by one, out loud, and tell me if my spoken answers are correct." This active recall is far more effective than just reading.' }
    ],
    tools: [
        { name: 'NotebookLM', link: 'https://notebooklm.google.com' },
        { name: 'ChatGPT (with Voice)', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'mastering-new-language',
    useCase: 'Education & Learning',
    title: 'Mastering a New Language with an AI Conversation Partner',
    primaryAudience: ['Students', 'Professionals'],
    goal: 'To practice real-world, spoken conversations in a new language in a pressure-free environment and receive instant feedback.',
    workflow: [
        { title: 'Set Up the Role-Play (2 mins)', description: 'Open ChatGPT and start a voice conversation. Give the AI a persona and a scenario. Prompt: "Let\'s have a conversation in Spanish. You are a barista in a café in Madrid, and I am a customer. I will start. After our conversation is over, provide me with corrections."' },
        { title: 'Have a Natural Conversation (10-15 mins)', description: 'Speak in the target language. Order a coffee, ask for directions, make small talk. The AI will respond naturally in that language, forcing you to listen and reply in real-time.' },
        { title: 'Review and Correct (5 mins)', description: 'When you\'re done, say in English, "Okay, the conversation is over." The AI will then fulfill the second part of your initial prompt. It will provide a list or table of your grammatical errors, awkward phrasing, and suggest more natural ways to say things.' },
        { title: 'Drill Vocabulary (10 mins)', description: 'Take the new vocabulary and corrections from your conversation. Go to Quizlet. Use its AI features to instantly create a new set of flashcards, allowing you to drill the specific words and phrases you struggled with.' }
    ],
    tools: [
        { name: 'ChatGPT (with Voice)', link: 'https://chat.openai.com' },
        { name: 'Quizlet', link: 'https://quizlet.com' }
    ]
  },
  {
    id: 'interactive-simulation',
    useCase: 'Education & Learning',
    title: 'Creating an Interactive Historical or Scientific Simulation',
    primaryAudience: ['Educators', 'Students'],
    goal: 'To make abstract concepts from history or science tangible and memorable by creating visuals and allowing students to "interact" with an expert persona.',
    workflow: [
        { title: 'Visualize the Concept (10 mins)', description: 'Go to Midjourney. Create a high-fidelity image of the concept. History Example: "/imagine a photorealistic, historically accurate reconstruction of the Library of Alexandria in its prime, bustling with scholars, scrolls on shelves --ar 16:9"' },
        { title: 'Activate the Expert Persona (15 mins)', description: 'Upload the generated image to ChatGPT-4. Set up an interactive Q&A session. Prompt: "You are a historian and lead librarian at the Library of Alexandria. I am a visitor, and this image shows what I am seeing. Describe what is happening around me. I will ask you questions about the library, the knowledge it contains, and daily life here. Answer my questions in character."' },
        { title: 'Create a Study Guide (5 mins)', description: 'Copy the entire transcript of the Q&A session. Paste it into Notion AI. Prompt: "Organize this Q&A into a clean and easy-to-read study guide. Use headings for key topics discussed and bullet points for important facts." This turns an interactive experience into a shareable learning asset.' }
    ],
    tools: [
        { name: 'Midjourney', link: 'https://www.midjourney.com' },
        { name: 'ChatGPT (with image input)', link: 'https://chat.openai.com' },
        { name: 'Notion AI', link: 'https://www.notion.so/product/ai' }
    ]
  },
  {
    id: 'generating-curriculum',
    useCase: 'Education & Learning',
    title: 'Generating a Complete Curriculum for a New Course',
    primaryAudience: ['Educators', 'Corporate Trainers'],
    goal: 'To outline a multi-week course on any subject, complete with topics, learning objectives, and project ideas.',
    workflow: [
      { title: 'Define Course Parameters (5 mins)', description: 'Go to ChatGPT. Prompt: "Act as an instructional designer. I want to create a 10-week online course for beginners on the topic of \'Digital Marketing\'."' },
      { title: 'Generate the Syllabus (15 mins)', description: 'In the same chat, prompt: "Generate a week-by-week syllabus. For each week, include a \'Topic\', three \'Key Learning Objectives\', a \'Suggested Reading\' (can be a concept, not a real link), and a \'Weekly Assignment\'."' },
      { title: 'Develop a Final Project (5 mins)', description: 'Prompt: "Now, design a comprehensive final capstone project that requires students to apply the skills learned throughout the 10 weeks."' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  {
    id: 'eli5-explanation',
    useCase: 'Education & Learning',
    title: 'Explaining a Complex Topic Like I\'m Five (ELI5)',
    primaryAudience: ['Students', 'Educators'],
    goal: 'To take a highly technical or scientific concept and have an AI explain it using simple analogies and everyday language.',
    workflow: [
      { title: 'Provide the Concept (1 min)', description: 'Go to Claude (which excels at nuanced explanations).' },
      { title: 'Generate the ELI5 Explanation (5 mins)', description: 'Use a layered prompt. Prompt: `"Explain the concept of \'General Relativity\' in three different ways: 1. A simple, one-sentence summary. 2. An explanation for a high school student using a common analogy. 3. An explanation for a five-year-old."`' }
    ],
    tools: [{ name: 'Claude', link: 'https://claude.ai' }]
  },
  {
    id: 'personalized-math-problems',
    useCase: 'Education & Learning',
    title: 'Creating Personalized Math Problems',
    primaryAudience: ['Math Teachers', 'Tutors', 'Parents'],
    goal: 'To generate an unlimited set of practice problems for a specific math concept, tailored to a student\'s interests and skill level.',
    workflow: [
      { title: 'Set the Parameters (5 mins)', description: 'Go to ChatGPT. Prompt: "Act as a math teacher. I need to create a worksheet for a 6th-grade student learning about percentages. The student loves video games."' },
      { title: 'Generate Word Problems (10 mins)', description: 'In the same chat, prompt: "Create 10 unique word problems about percentages. Each problem should be themed around video games (e.g., calculating a damage increase, a sale on in-game items, or a player\'s win rate). Include a separate answer key."' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  {
    id: 'preparing-for-debate',
    useCase: 'Education & Learning',
    title: 'Preparing for a Debate',
    primaryAudience: ['Students', 'Debate Club Members'],
    goal: 'To research a topic, anticipate an opponent\'s arguments, and strengthen your own position.',
    workflow: [
      { title: 'Brainstorm Arguments (10 mins)', description: 'Go to ChatGPT. Prompt: "I am preparing for a debate on the topic \'[Topic]\'. My position is \'For\'. Generate a list of the 5 strongest arguments for my position and the 5 most likely arguments my opponent will use against me."' },
      { title: 'Find Supporting Evidence (10 mins)', description: 'For your strongest arguments, go to Perplexity. Prompt: "Find a statistic or study that supports the claim that \'[Your Argument]\'."' },
      { title: 'Practice Rebuttals (10 mins)', description: 'Go back to ChatGPT. Prompt: "For each of the opponent\'s arguments you listed, provide a strong counter-argument or rebuttal I can use."' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Perplexity', link: 'https://www.perplexity.ai' }
    ]
  },
  {
    id: 'custom-flashcards',
    useCase: 'Education & Learning',
    title: 'Generating Custom Flashcards for Any Subject',
    primaryAudience: ['Students'],
    goal: 'To automatically extract key terms and definitions from study notes to create a digital flashcard deck.',
    workflow: [
      { title: 'Extract Key Terms (10 mins)', description: 'Go to Claude. Paste your study notes (the longer the better). Prompt: "From these notes, extract the 25 most important key terms and their definitions. Format the output as a two-column table with \'Term\' in the first column and \'Definition\' in the second."' },
      { title: 'Import into Flashcard App (5 mins)', description: 'Go to Quizlet. It has a feature to import data from a spreadsheet. Copy the table from Claude, paste it into a Google Sheet or Excel file, and then import it directly into Quizlet to instantly create your flashcard deck.' }
    ],
    tools: [
      { name: 'Claude', link: 'https://claude.ai' },
      { name: 'Quizlet', link: 'https://quizlet.com' }
    ]
  },
  {
    id: 'choose-your-own-adventure-history',
    useCase: 'Education & Learning',
    title: 'Creating a "Choose Your Own Adventure" Story for History',
    primaryAudience: ['History Teachers', 'Students'],
    goal: 'To make learning history interactive by creating a story where the student makes decisions as a historical figure.',
    workflow: [
      { title: 'Set the Scene (5 mins)', description: 'Go to ChatGPT. Prompt: "Create the opening of a \'Choose Your Own Adventure\' story. I am [Historical Figure, e.g., \'a Roman centurion\'] during the [Historical Event, e.g., \'Gallic Wars\']. Describe the initial scene and give me two clear choices."' },
      { title: 'Generate Branching Paths (15 mins)', description: 'As you make choices, the AI will generate the consequences and the next set of options. Continue prompting: "I choose option A. What happens next? Give me my next two choices."' },
      { title: 'Visualize a Key Moment (10 mins)', description: 'Take the description of a pivotal scene from your story. Go to Midjourney to create an illustration for it. Prompt: "/imagine a Roman centurion making a difficult choice at a crossroads in a dark forest, cinematic, oil painting style --ar 16:9"' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Midjourney', link: 'https://www.midjourney.com' }
    ]
  },
  {
    id: 'scientific-lab-simulation-ideas',
    useCase: 'Education & Learning',
    title: 'Generating Scientific Lab Simulation Ideas',
    primaryAudience: ['Science Teachers'],
    goal: 'To design a hypothetical experiment that students can discuss or model, even without physical lab equipment.',
    workflow: [
      { title: 'Design the Experiment (15 mins)', description: 'Go to ChatGPT. Prompt: "Act as a physics professor. I need a thought experiment to demonstrate Newton\'s Third Law of Motion. Design a simple, hypothetical experiment. Describe the objective, the setup, the procedure, the expected results, and 3 discussion questions for the students."' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  {
    id: 'essay-argument-feedback',
    useCase: 'Education & Learning',
    title: 'Providing Feedback on an Essay\'s Argument',
    primaryAudience: ['Students', 'Writing Centers'],
    goal: 'To get feedback on the structure, clarity, and logical flow of an argument, rather than just grammar.',
    workflow: [
      { title: 'Get High-Level Feedback (10 mins)', description: 'Paste your essay draft into Claude. Prompt: "Act as a university writing tutor. Do not correct my grammar. Instead, analyze the structure of my argument. What is my main thesis? Is it well-supported by the evidence in each paragraph? Is the flow logical? Provide feedback in 3 bullet points."' }
    ],
    tools: [{ name: 'Claude', link: 'https://claude.ai' }]
  },
  {
    id: 'generating-learning-path',
    useCase: 'Education & Learning',
    title: 'Generating a Learning Path for a New Skill',
    primaryAudience: ['Students', 'Professionals'],
    goal: 'To generate a step-by-step learning plan, including what to learn first and links to recommended resources.',
    workflow: [
      { title: 'Create the Roadmap (15 mins)', description: 'Go to ChatGPT. Prompt: "I want to learn \'Python for data science\'. I am a complete beginner. Create a 10-step learning path, starting from the absolute basics. For each step, describe the concept to learn and suggest a type of project to practice it (e.g., \'Step 1: Basic syntax. Project: a simple calculator\')."' },
      { title: 'Find Resources (10 mins)', description: 'Go to Perplexity. Prompt: "Find the top-rated free online tutorials or YouTube series for learning beginner Python."' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Perplexity', link: 'https://www.perplexity.ai' }
    ]
  },
  {
    id: 'role-playing-scenario-soft-skills',
    useCase: 'Education & Learning',
    title: 'Creating a Role-Playing Scenario for a Soft Skills Class',
    primaryAudience: ['Corporate Trainers', 'Educators', 'Students'],
    goal: 'To design a detailed scenario for students to practice soft skills like negotiation or conflict resolution.',
    workflow: [
      { title: 'Design the Scenario (15 mins)', description: 'Go to ChatGPT. Prompt: "Create a role-playing scenario to practice negotiation skills. There are two roles: \'Employee\' and \'Manager\'. The Employee\'s goal is to negotiate a raise. The Manager\'s goal is to stay within budget. Provide a detailed background for each character, including their private motivations and constraints."' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  {
    id: 'translating-historical-document',
    useCase: 'Education & Learning',
    title: 'Translating a Historical Document and Providing Context',
    primaryAudience: ['History Students', 'Researchers'],
    goal: 'To translate a historical text and understand its significance.',
    workflow: [
      { title: 'Translate the Text (5 mins)', description: 'Upload an image of the document (e.g., a letter in old German script) to ChatGPT-4o or use DeepL. Prompt: "Transcribe and translate this historical document into English."' },
      { title: 'Provide Context (10 mins)', description: 'In the same chat, prompt: "Based on the content and date of this letter, what was the broader historical context in which it was written? Who are the key figures mentioned? What does this letter tell us about the period?"' }
    ],
    tools: [
      { name: 'ChatGPT (with image input)', link: 'https://chat.openai.com' },
      { name: 'DeepL', link: 'https://www.deepl.com/translator' }
    ]
  },
  {
    id: 'designing-scavenger-hunt',
    useCase: 'Education & Learning',
    title: 'Designing a Scavenger Hunt for a Museum Visit',
    primaryAudience: ['Teachers', 'Parents'],
    goal: 'To create a fun and educational scavenger hunt with clues and questions for a museum trip.',
    workflow: [
      { title: 'Generate the Hunt (15 mins)', description: 'Go to ChatGPT. Prompt: "I am taking 8th-grade students to the [Museum Name]. Based on the main exhibits listed on their website [paste URL], create a 10-item scavenger hunt. Each item should be a riddle or a question that requires students to carefully examine a specific exhibit to find the answer."' }
    ],
    tools: [{ name: 'ChatGPT (with browsing)', link: 'https://chat.openai.com' }]
  },
  {
    id: 'breaking-down-musical-piece',
    useCase: 'Education & Learning',
    title: 'Breaking Down a Musical Piece for Analysis',
    primaryAudience: ['Music Students', 'Music Theory Enthusiasts'],
    goal: 'To analyze a piece of music\'s structure, chord progressions, and instrumentation.',
    workflow: [
      { title: 'Analyze the Music (15 mins)', description: 'Go to ChatGPT. Prompt: "Analyze the song \'[Song Title]\' by [Artist]. Describe its song structure (e.g., verse-chorus-verse-chorus-bridge-chorus). What is the main chord progression in the verse? What key instruments are used?"' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  {
    id: 'socratic-method-tutor',
    useCase: 'Education & Learning',
    title: 'Creating a "Socratic Method" Tutor',
    primaryAudience: ['Students'],
    goal: 'To have an AI act as a tutor who never gives the answer directly but instead asks guiding questions.',
    workflow: [
      { title: 'Initiate the Session (15 mins+)', description: 'Go to Claude. Prompt: "Act as a tutor using the Socratic method. I am trying to understand the concept of [Concept, e.g., \'natural selection\']. Do not give me direct answers. Only ask me questions that will lead me to understand it on my own. My first question is: What is natural selection?"' }
    ],
    tools: [{ name: 'Claude', link: 'https://claude.ai' }]
  },
  {
    id: 'generating-grading-rubric',
    useCase: 'Education & Learning',
    title: 'Generating a Rubric for Grading a Project',
    primaryAudience: ['Educators'],
    goal: 'To describe a school project and have an AI create a detailed and fair grading rubric.',
    workflow: [
      { title: 'Create the Rubric (10 mins)', description: 'Go to ChatGPT. Prompt: "I have assigned a project where students must create a 5-minute video presentation. Create a detailed grading rubric in a table. The rows should be the criteria (e.g., \'Clarity of Argument\', \'Quality of Research\', \'Visual Design\', \'Presentation Skills\'). The columns should be the levels of achievement (\'Excellent\', \'Good\', \'Needs Improvement\'). Fill the table with specific descriptions for each cell."' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  
  // Use-Case: Programming
  {
    id: 'debugging-python-script',
    useCase: 'Programming',
    title: 'Building and Debugging a Simple Python Script',
    primaryAudience: ['Developers', 'Students'],
    goal: 'To write functional code faster and solve errors without getting stuck.',
    workflow: [
        { title: 'Scaffolding & Boilerplate (5 mins)', description: 'Instead of starting from scratch, describe your goal to GitHub Copilot (directly in your code editor, like VS Code) or ChatGPT. Prompt: "Write a Python script that reads a CSV file named \'data.csv\', calculates the average of the \'sales\' column, and prints the result."' },
        { title: 'Real-time Code Completion (While coding)', description: 'As you write your code, GitHub Copilot will suggest entire lines or blocks of code. Simply press "Tab" to accept suggestions, dramatically speeding up the development process.' },
        { title: 'Debugging (When you get an error)', description: 'Copy the error message and the relevant block of code. Paste it into Phind or ChatGPT. Ask: "I\'m getting this error: [paste error]. Here is my code: [paste code]. What is causing this and how do I fix it?" The AI will explain the problem and provide the corrected code.' }
    ],
    tools: [
        { name: 'GitHub Copilot', link: 'https://github.com/features/copilot' },
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'Phind', link: 'https://www.phind.com' }
    ]
  },
  {
    id: 'documenting-complex-code',
    useCase: 'Programming',
    title: 'Documenting Existing and Complex Code',
    primaryAudience: ['Developers'],
    goal: 'To quickly generate clear, standardized, and useful documentation for code that has none, making it easier to maintain and onboard new team members.',
    workflow: [
        { title: 'Generate a High-Level Summary (5 mins)', description: 'For a large, unfamiliar code file, paste the entire contents into an AI with a large context window like Claude. Prompt: "Act as a senior software engineer. Provide a high-level summary of this Python module. What is its primary purpose, what are its main classes/functions, and what are its dependencies?"' },
        { title: 'Create Function-Level Docstrings (10 mins)', description: 'One by one, paste individual functions into GitHub Copilot Chat or ChatGPT. Prompt: "Generate a professional docstring for this function in Google style format. Include descriptions of all arguments (Args), what the function returns (Returns), and any potential errors it might raise (Raises)."' },
        { title: 'Explain Complex Logic with Comments (5 mins)', description: 'Find a particularly dense or confusing block of code (like a complex algorithm or a regular expression). Prompt: "Add inline comments to this block of code to explain the logic step-by-step in plain English."' },
        { title: 'Generate a README File (5 mins)', description: 'Gather the high-level summary and the purpose of key functions. Prompt: "Create a README.md file for this project. Include sections for \'About the Project\', \'Getting Started\' (with installation instructions), and \'Usage\' (with a simple code example)."' }
    ],
    tools: [
        { name: 'Claude', link: 'https://claude.ai' },
        { name: 'GitHub Copilot Chat', link: 'https://github.com/features/copilot' },
        { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'refactoring-inefficient-code',
    useCase: 'Programming',
    title: 'Refactoring and Optimizing Inefficient Code',
    primaryAudience: ['Developers', 'Students'],
    goal: 'To transform working but messy or slow code into a clean, efficient, and maintainable version that adheres to best practices.',
    workflow: [
        { title: 'Identify Areas for Improvement (5 mins)', description: 'Paste a working but clunky function into ChatGPT or Phind. Prompt: "Analyze this Python code for potential improvements. Focus on readability, adherence to PEP 8 style conventions, and any obvious performance bottlenecks."' },
        { title: 'Perform the Refactoring (5 mins)', description: 'Use a follow-up prompt to apply the suggestions. Prompt: "Now, please refactor the code based on your analysis. Your main goal is to make it more modular and readable. If possible, break the main function into smaller, single-responsibility helper functions."' },
        { title: 'Suggest Performance Optimizations (5 mins)', description: 'Ask the AI to think like a performance engineer. Prompt: "Look at the refactored code. Is there a more efficient data structure or algorithm that could be used here? For example, would a dictionary be faster than a list for lookups in this case? Explain the trade-offs."' },
        { title: 'Generate Unit Tests (5 mins)', description: 'To ensure the refactoring didn\'t break anything, ask the AI to write tests. Prompt: "Write a set of unit tests for the final refactored function using the \'pytest\' framework to verify its correctness with both normal and edge-case inputs."' }
    ],
    tools: [
        { name: 'Phind', link: 'https://www.phind.com' },
        { name: 'GitHub Copilot Chat', link: 'https://github.com/features/copilot' },
        { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'generating-frontend-component',
    useCase: 'Programming',
    title: 'Generating a Frontend Component from a Visual Mockup',
    primaryAudience: ['Frontend Developers', 'Full-Stack Developers'],
    goal: 'To drastically reduce the time it takes to convert a design (e.g., a Figma mockup or a screenshot) into working UI code.',
    workflow: [
        { title: 'Capture the Design (1 min)', description: 'Take a clean screenshot of the UI component you want to build (e.g., a user profile card, a login form, a navigation bar).' },
        { title: 'Generate Static Code (10 mins)', description: 'Upload the screenshot to a multimodal AI like ChatGPT-4o or Claude 3 Opus. Prompt: "Here is a screenshot of a user profile card. Generate the HTML and CSS to create a responsive version of this component. Use modern CSS practices like Flexbox or Grid."' },
        { title: 'Convert to a Dynamic Framework Component (5 mins)', description: 'Copy the generated HTML/CSS. In the same chat, prompt: "Now, convert this into a reusable React component. The user\'s name, profile picture URL, and bio should be passed in as props. Use functional components and hooks."' },
        { title: 'Iterate with Text-Based Edits (5 mins)', description: 'The initial result might not be perfect. Use text prompts to refine it. Prompt: "In the React component you just created, add a subtle box-shadow on hover and make the \'Follow\' button change color when clicked."' }
    ],
    tools: [
        { name: 'ChatGPT (with image input)', link: 'https://chat.openai.com' },
        { name: 'Claude (with image input)', link: 'https://claude.ai' },
        { name: 'v0.dev by Vercel', link: 'https://v0.dev' }
    ]
  },
  {
    id: 'integrating-third-party-api',
    useCase: 'Programming',
    title: 'Rapidly Integrating a New Third-Party API',
    primaryAudience: ['Developers', 'Students'],
    goal: 'To get a new API working in your project in minutes instead of hours by having an AI read the documentation and generate the necessary boilerplate code.',
    workflow: [
        { title: 'Provide the Documentation Context (2 mins)', description: 'Find the official documentation page for the specific API endpoint you want to use. Copy the URL.' },
        { title: 'Generate the Initial API Call (10 mins)', description: 'Go to Phind or ChatGPT. Prompt: "I need to use the Stripe API to create a new customer. Based on their official documentation [paste URL], write a simple Python script using the \'requests\' library that sends a POST request to the correct endpoint. Include placeholders for the API key and customer data."' },
        { title: 'Add Error Handling and Data Parsing (5 mins)', description: 'The first call is just the start. Prompt: "Now, modify the script to include proper error handling. It should check if the HTTP response status code is successful. If it is, it should parse the JSON response and print the new customer\'s ID. If it fails, it should print the error message from the API."' },
        { title: 'Create a Reusable Wrapper Function (5 mins)', description: 'Turn the script into a clean, reusable function. Prompt: "Finally, refactor this entire script into a single Python function called \'create_stripe_customer\'. It should take a dictionary of customer data as an argument, hide the API key as an environment variable, and return the customer ID on success or None on failure."' }
    ],
    tools: [
        { name: 'Phind', link: 'https://www.phind.com' },
        { name: 'ChatGPT', link: 'https://chat.openai.com' },
        { name: 'GitHub Copilot Chat', link: 'https://github.com/features/copilot' }
    ]
  },
  {
    id: 'designing-database-schema',
    useCase: 'Programming',
    title: 'Designing a Database Schema from Plain English',
    primaryAudience: ['Full-Stack Developers', 'Backend Developers', 'Students'],
    goal: 'To translate an application\'s data requirements into a formal SQL schema without writing the SQL manually.',
    workflow: [
      { title: 'Describe the Requirements (10 mins)', description: 'Go to ChatGPT. Prompt: "Act as a database architect. I\'m building a simple blogging application. It needs to have Users, Posts, and Comments. A User can have many Posts. A Post can have many Comments. A User can also write many Comments. Include necessary fields like usernames, email, post titles, content, and timestamps."' },
      { title: 'Generate the SQL Schema (5 mins)', description: 'In the same chat, prompt: "Based on these requirements, generate the complete SQL schema using PostgreSQL syntax. Include primary keys, foreign keys, and appropriate data types for all fields."' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Claude', link: 'https://claude.ai' }
    ]
  },
  {
    id: 'generating-rest-api',
    useCase: 'Programming',
    title: 'Generating a Complete REST API with Endpoints',
    primaryAudience: ['Backend Developers', 'Students'],
    goal: 'To generate the boilerplate code for a REST API, including CRUD (Create, Read, Update, Delete) endpoints.',
    workflow: [
      { title: 'Outline the API (5 mins)', description: 'Go to ChatGPT. Prompt: "I need to build a REST API for a simple to-do list application. The main resource is a \'Task\' with fields for \'id\', \'title\', \'description\', and \'completed\'."' },
      { title: 'Generate the Server Code (15 mins)', description: 'In the same chat, prompt: "Generate the complete boilerplate code for this API using Node.js and the Express framework. Include all standard CRUD endpoints (GET all, GET by ID, POST, PUT, DELETE) for the \'Task\' resource. Use in-memory storage for this example."' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'GitHub Copilot', link: 'https://github.com/features/copilot' }
    ]
  },
  {
    id: 'converting-legacy-code',
    useCase: 'Programming',
    title: 'Converting Legacy Code to a Modern Language',
    primaryAudience: ['Enterprise Developers', 'Developers'],
    goal: 'To translate a snippet of code from an old language (like COBOL or legacy Java) into a modern equivalent like Python or JavaScript.',
    workflow: [
      { title: 'Provide the Code and Context (2 mins)', description: 'Go to Claude (which has broad knowledge of older languages).' },
      { title: 'Perform the Translation (10 mins)', description: 'Paste the legacy code snippet. Prompt: "This is a function written in older Java 1.4. Please translate it to modern JavaScript (ES6+), using async/await and modern best practices. Here is the code: [paste code]."' },
      { title: 'Request an Explanation (5 mins)', description: 'In the same chat, prompt: "Explain the key differences between the old and new code, highlighting the modern features you used and why they are better."' }
    ],
    tools: [
      { name: 'Claude', link: 'https://claude.ai' },
      { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'explaining-complex-algorithm',
    useCase: 'Programming',
    title: 'Explaining a Complex Algorithm Step-by-Step',
    primaryAudience: ['Students', 'Developers'],
    goal: 'To understand a dense algorithm by having an AI explain it and walk through a visual example.',
    workflow: [
      { title: 'Provide the Algorithm (1 min)', description: 'Paste the code for a complex algorithm (e.g., Dijkstra\'s algorithm) into ChatGPT.' },
      { title: 'Generate the Explanation (10 mins)', description: 'Prompt: "Explain this implementation of Dijkstra\'s algorithm step-by-step in plain English. What is the purpose of each main data structure (like the priority queue and the distance dictionary)?"' },
      { title: 'Walk Through an Example (10 mins)', description: 'Prompt: "Now, walk me through a simple example. Given a small graph with 4 nodes, show me how the values in the data structures change with each iteration of the main loop."' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Phind', link: 'https://www.phind.com' }
    ]
  },
  {
    id: 'writing-regex',
    useCase: 'Programming',
    title: 'Writing and Explaining Regular Expressions (Regex)',
    primaryAudience: ['Developers'],
    goal: 'To generate a correct and efficient regex for a pattern without the usual trial and error.',
    workflow: [
      { title: 'Describe the Pattern (5 mins)', description: 'Go to ChatGPT. Be very specific. Prompt: "I need a regular expression that validates a password. It must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."' },
      { title: 'Generate and Explain (5 mins)', description: 'In the same chat, prompt: "Generate the regex for this. Then, provide a detailed, token-by-token explanation of how it works."' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  {
    id: 'code-vulnerability-scan',
    useCase: 'Programming',
    title: 'Performing a Code Security Vulnerability Scan',
    primaryAudience: ['Developers', 'DevOps Engineers'],
    goal: 'To have an AI security analyst check for common vulnerabilities like SQL injection or insecure API keys.',
    workflow: [
      { title: 'Provide the Code (1 min)', description: 'Copy a block of code, for example, a function that handles user input and queries a database.' },
      { title: 'Analyze for Vulnerabilities (10 mins)', description: 'Paste the code into GitHub Copilot Chat or ChatGPT. Prompt: "Act as a cybersecurity expert. Analyze this code for common security vulnerabilities, specifically SQL injection and Cross-Site Scripting (XSS). Explain any vulnerabilities you find and provide the corrected, secure code."' }
    ],
    tools: [
      { name: 'GitHub Copilot Chat', link: 'https://github.com/features/copilot' },
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: '(For production: Use dedicated tools like Snyk or Veracode)', link: '#' }
    ]
  },
  {
    id: 'generating-mock-data',
    useCase: 'Programming',
    title: 'Generating Mock Data for Testing',
    primaryAudience: ['QA Engineers', 'Frontend Developers'],
    goal: 'To generate a large, realistic dataset in JSON or CSV format for testing an application\'s UI or database performance.',
    workflow: [
      { title: 'Define the Data Structure (5 mins)', description: 'Go to ChatGPT. Prompt: "I need mock data for testing. I need a list of 100 user records. Each record should be a JSON object with the following fields: \'id\' (UUID), \'firstName\', \'lastName\', \'email\', \'country\', and \'lastLogin\' (ISO 8601 timestamp)."' },
      { title: 'Generate the Data (5 mins)', description: 'In the same chat, prompt: "Please generate the first 10 records in this format." Review the output to ensure it\'s correct, then prompt: "Looks good. Now generate the full list of 100 records."' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  {
    id: 'planning-software-architecture',
    useCase: 'Programming',
    title: 'Planning a Software Architecture (System Design)',
    primaryAudience: ['Software Architects', 'Senior Developers', 'Tech Leads'],
    goal: 'To brainstorm a high-level system architecture for a new application.',
    workflow: [
      { title: 'Describe the Application (5 mins)', description: 'Go to Claude. Prompt: "Act as a principal software architect. I need to design a system for a \'URL shortening service\' similar to Bitly. Key requirements are: high availability, low latency for read requests (redirects), and ability to track click analytics."' },
      { title: 'Propose an Architecture (15 mins)', description: 'In the same chat, prompt: "Propose a high-level system architecture for this service. Describe your choice of database (e.g., SQL vs. NoSQL), the main backend services, how you would handle caching for performance, and a potential cloud provider to host it on. Explain your trade-offs."' }
    ],
    tools: [
      { name: 'Claude', link: 'https://claude.ai' },
      { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'writing-cli-scripts',
    useCase: 'Programming',
    title: 'Writing Command-Line Interface (CLI) Scripts',
    primaryAudience: ['DevOps Engineers', 'Backend Developers', 'System Admins'],
    goal: 'To automate a repetitive task by describing it in plain English and having the AI generate a shell script.',
    workflow: [
      { title: 'Describe the Task (10 mins)', description: 'Go to ChatGPT. Prompt: "Write a Bash script that finds all files in the current directory larger than 100MB, creates a new directory called \'large_files\', moves those files into it, and then prints a list of the files that were moved."' },
      { title: 'Request Explanation (5 mins)', description: 'In the same chat, prompt: "Please add comments to the script explaining what each command does."' }
    ],
    tools: [{ name: 'ChatGPT', link: 'https://chat.openai.com' }]
  },
  {
    id: 'translating-natural-language-to-sql',
    useCase: 'Programming',
    title: 'Translating Natural Language into SQL Queries',
    primaryAudience: ['Data Analysts', 'Product Managers', 'Developers'],
    goal: 'To ask a question about your data in plain English and have the AI translate it into an optimized SQL query.',
    workflow: [
      { title: 'Provide Schema and Request (10 mins)', description: 'Go to ChatGPT or a specialized text-to-SQL tool. Prompt: "Here is my database schema: [Paste CREATE TABLE statements for \'users\' and \'orders\' tables]. Write a SQL query that finds the email addresses of all users who have placed more than 5 orders in the last 30 days."' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'Claude', link: 'https://claude.ai' }
    ]
  },
  {
    id: 'creating-dockerfile',
    useCase: 'Programming',
    title: 'Creating a Dockerfile for an Application',
    primaryAudience: ['Developers', 'DevOps Engineers'],
    goal: 'To provide your application\'s language and dependencies and have the AI generate a complete Dockerfile.',
    workflow: [
      { title: 'Describe the Application Stack (10 mins)', description: 'Go to GitHub Copilot Chat. Prompt: "I have a Python Flask application. Its dependencies are listed in a \'requirements.txt\' file. The application runs on port 8000. Generate a complete, multi-stage Dockerfile that creates a lean production image for this application."' }
    ],
    tools: [
      { name: 'GitHub Copilot Chat', link: 'https://github.com/features/copilot' },
      { name: 'ChatGPT', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'assisting-pair-programming',
    useCase: 'Programming',
    title: 'Assisting with Pair Programming',
    primaryAudience: ['Developers'],
    goal: 'To use a voice-enabled AI as a "rubber duck" to talk through a problem, suggest different approaches, and catch simple errors.',
    workflow: [
      { title: 'Initiate the Session (20 mins+)', description: 'Open ChatGPT on your phone with voice mode. Prompt: "Act as my senior developer pair programmer. I\'m trying to solve the following problem: [describe the problem]. I\'m going to talk through my approach. Your role is to listen, ask clarifying questions, and point out potential flaws in my logic." Then, start coding and thinking out loud.' }
    ],
    tools: [{ name: 'ChatGPT (with Voice)', link: 'https://chat.openai.com' }]
  },
  {
    id: 'generating-api-integration-code',
    useCase: 'Programming',
    title: 'Generating API Integration Code',
    primaryAudience: ['Developers'],
    goal: 'To provide a link to an API\'s documentation and have the AI write the specific functions needed to authenticate and make calls.',
    workflow: [
      { title: 'Provide Context and Request (15 mins)', description: 'Go to Phind. Prompt: "I need to integrate the OpenAI API to generate an image. Based on their official documentation [paste URL to the DALL-E API reference], write a complete Python function that takes a text prompt as input, makes the API call with an API key from an environment variable, and returns the URL of the generated image."' }
    ],
    tools: [
      { name: 'Phind', link: 'https://www.phind.com' },
      { name: 'ChatGPT (with browsing)', link: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'creating-devops-config-files',
    useCase: 'Programming',
    title: 'Creating Configuration Files for DevOps Tools',
    primaryAudience: ['DevOps Engineers', 'Site Reliability Engineers'],
    goal: 'To generate a configuration file for tools like Kubernetes or GitHub Actions by describing the desired behavior.',
    workflow: [
      { title: 'Describe the Desired State (10 mins)', description: 'Go to ChatGPT. Prompt: "Generate a YAML configuration file for a Kubernetes Deployment. It should deploy a container image named \'my-app:1.0\'. The deployment should have 3 replicas and expose port 80 on the container."' },
      { title: 'Generate a CI/CD Pipeline (10 mins)', description: 'Prompt: "Now, create a basic GitHub Actions workflow file. It should trigger on a push to the \'main\' branch, build a Docker image from the Dockerfile in the repo, and push it to Docker Hub."' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'GitHub Copilot Chat', link: 'https://github.com/features/copilot' }
    ]
  },
  {
    id: 'writing-end-to-end-tests',
    useCase: 'Programming',
    title: 'Writing Comprehensive End-to-End Tests',
    primaryAudience: ['QA Engineers', 'Frontend Developers'],
    goal: 'To describe a user journey and have the AI generate the corresponding test script using a framework like Cypress or Playwright.',
    workflow: [
      { title: 'Describe the User Journey (5 mins)', description: 'Go to ChatGPT. Prompt: "I need to write an end-to-end test for a login flow. The user journey is: 1. Visit the \'/login\' page. 2. Find the input field with id \'#email\' and type a username. 3. Find the input field with id \'#password\' and type a password. 4. Click the button with id \'#submit\'. 5. Assert that the URL is now \'/dashboard\'."' },
      { title: 'Generate the Test Script (10 mins)', description: 'In the same chat, prompt: "Generate a complete test script for this user journey using the Cypress framework."' }
    ],
    tools: [
      { name: 'ChatGPT', link: 'https://chat.openai.com' },
      { name: 'GitHub Copilot', link: 'https://github.com/features/copilot' }
    ]
  }
];