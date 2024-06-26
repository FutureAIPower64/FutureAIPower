'use client';
import { createSlice } from '@reduxjs/toolkit';
import icon1 from './../../assets/chatgpt.png';
import icon2 from './../../assets/Tome.png';
import icon3 from './../../assets/Andi.png';
import icon4 from './../../assets/Autodraw.png';
import icon5 from './../../assets/Beloga AI.png';
import icon6 from './../../assets/Boomy.png';
import icon7 from './../../assets/Booom.png';
import icon8 from './../../assets/Chatty AI.png';
import icon9 from './../../assets/Codeium.png';
import icon10 from './../../assets/Podcast.png';
import icon11 from './../../assets/Craiyon.png';
import icon12 from './../../assets/Devin AI.png';
import icon13 from './../../assets/Findly AI.png';
import icon14 from './../../assets/Jasper.png';
import icon15 from './../../assets/Glasp.png';
import icon16 from './../../assets/HarmonAI.png';
import icon18 from './../../assets/Hire Mia.png';
import icon19 from './../../assets/Iconify.png';
import icon20 from './../../assets/Ideas AI.png';
import icon17 from './../../assets/Freshworks.png';
import icon21 from './../../assets/Jusi.png';
import icon22 from './../../assets/Klenty.png';
import icon23 from './../../assets/Kotlibes.png';
import icon24 from './../../assets/Mage.png';
import icon25 from './../../assets/TutorAI.png';
import icon26 from './../../assets/SEO GPT.png';
import icon27 from './../../assets/Wisdolia.png';
import icon28 from './../../assets/T Hunter.png';
import output from '../../componets/Ai-ToolsDetail/output.json'
const initialState = {
    cards: [
        {
            icon: icon14,
            star: ["#FF9635", "#FF9635", "#FF9635", "#727272", "#727272"],
            title: 'Jasper',
            description: 'An AI-driven platform for efficient, high-quality content creation and...',
            tags: ['#marketing', ' #storyteller'],
            buttonText: 'Free Trial',
            cate: 'Marketing',

        },
        {
            icon: icon5,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Copy.ai',
            description: 'Generate compelling copy that converts with the help of AI-...',
            tags: ['#marketing', ' #copywriting', ' #writing generator'],
            buttonText: 'Freemium',
            cate: 'Marketing',
        },
        {
            icon: icon5,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Writesonic',
            description: 'Boost productivity with AI: content, visuals, insights, and real-time data.',
            tags: ['#marketing', ' #ai chatbots', ' #copywriting'],
            buttonText: 'Freemium',
            cate: 'Marketing',
        },
        {
            icon: icon6,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Rytr',
            description: 'AI assistant crafts quality content swiftly across languages and tones.',
            tags: ['#writing generators', ' #storyteller', ' #copywriting'],
            buttonText: 'Freemium',
            cate: 'Marketing',
        },
        {
            icon: icon8,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Canva',
            description: 'An AI-enhanced graphic design platform that simplifies the creatio...',
            tags: ['#design generator', ' #social media'],
            buttonText: 'Freemium',
            cate: 'Marketing',
        },
        {
            icon: icon3,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Midjourney',
            description: 'Unlock digital artistic: AI transforms text into stunning visuals, seamlessly via Discord.',
            tags: ['#image generator'],
            buttonText: 'Free Trial',
            cate: 'Logo Generator',
        },
        {
            icon: icon8,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Dall-E 3',
            description: 'Revolutionize imagery with AI: from text prompts to vivid visuals.',
            tags: ['#images generator', ' #text to image'],
            buttonText: 'Contact for Pricing',
            cate: 'Marketing',
        },
        {
            icon: icon16,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Adobe Firefly',
            description: 'Transform text into vibrant images and designs, boosting creativity...',
            tags: ['#design generator', ' #image generator', ' #text to image'],
            buttonText: 'Paid',
            cate: 'Marketing',
        },
        {
            icon: icon20,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Remove.bg',
            description: 'Remove backgrounds in 5 secs with one click',
            tags: ['#image editing'],
            buttonText: 'Free Trial',
            cate: 'Marketing',
        },
        {
            icon: icon11,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Adobe Photoshop',
            description: 'Video Tap is an AI-powered tool that helps individuals and businesses...',
            tags: ['#video generator', "#video editing"],
            buttonText: 'Paid',
            cate: 'Video Editor',
        },
        {
            icon: icon10,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#727272"],
            title: 'ThumbnailAi',
            description: 'Maximize clicks with AI-driven thumbnail effectiveness ratings.',
            tags: ['#design generator', " #social media"],
            buttonText: 'Free',
            cate: 'Video Editor',
        },
        {
            icon: icon28,
            star: ["#FF9635", "#FF9635", "#727272", "#727272", "#727272"],
            title: 'gemini',
            description: 'Harness multimodal AI for innovation, efficiency, and scalabili...',
            tags: ['#writing generator', " #code assistant", " #ai chatbots"],
            buttonText: 'Freemium',
            cate: 'Video Editor',
        },
        {
            icon: icon1,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#727272"],
            title: 'Chatgpt',
            description: 'Revolutionize interaction, creativity, and innovation with the leader in AI.',
            tags: ['#ai', ' #chatbot', ' #education'],
            buttonText: 'Free',
            cate: 'Logo Generator',
        },
        {
            icon: icon2,
            star: ["#FF9635", "#FF9635", "#FF9635", "#727272", "#727272"],
            title: 'Tome',
            description: 'Unlock your heart work with AI-powered generative storytelling from Tome.',
            tags: ['#storyteller', ' #presentations'],
            buttonText: 'Free',
            cate: 'Logo Generator',
        },
        {
            icon: icon4,
            star: ["#FF9635", "#FF9635", "#727272", "#727272", "#727272"],
            title: 'GSearch',
            description: 'Unlock the power of Beddit for deep market research and audience analysis with...',
            tags: ['#social media', ' #research'],
            buttonText: 'Freemium',
            cate: 'Logo Generator',
        },
        {
            icon: icon5,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Photo AI',
            description: 'Unleash AI-powered photo generation and personalized...',
            tags: ['#image generator', ' #avatars'],
            buttonText: 'Freemium',
            cate: 'Photo Editor',
        },
        {
            icon: icon6,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'AI Photo Filter',
            description: 'Revolutionize image editing: intuitive AI, precise layering,...',
            tags: ['#design generator', ' #e-commerce', "#image editor"],
            buttonText: 'Freemium',
            cate: 'Photo Editor',
        },
        {
            icon: icon7,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'HitPaw Photo AI',
            description: 'Your All-in-One Photo Editing Solution',
            tags: ['#image editing'],
            buttonText: 'Paid',
            cate: 'Photo Editor',
        },
        {
            icon: icon8,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Photo to Cartoon',
            description: 'Wanna stand out in social media? Convert face photo to cartoon and...',
            tags: ['#image editing'],
            buttonText: 'Free Trial',
            cate: 'Photo Editor',
        },
        {
            icon: icon9,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'VideoShorts',
            description: 'Transform YouTube content into engaging, shareable clips....',
            tags: ['#social media', ' #marketing', ' #video editing'],
            buttonText: 'Paid',
            cate: 'Video Editor',
        },
        {
            icon: icon10,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Videoleap',
            description: 'Videoleap is a powerful and creative video editing app created by...',
            tags: ['#video enhancer', ' #video editing'],
            buttonText: 'Free Trial',
            cate: 'Video Editor',
        },
        {
            icon: icon11,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Video Tap',
            description: 'Video Tap is an AI-powered tool that helps individuals and businesses...',
            tags: ['#video generator', "#video editing"],
            buttonText: 'Paid',
            cate: 'Video Editor',
        },
        {
            icon: icon12,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'AI Studios',
            description: 'Unlock the power of Beddit for deep market research and audience analysis with...',
            tags: ['#education', ' #video editing'],
            buttonText: 'Paid',
            cate: 'Video Editor'
        },
        {
            icon: icon13,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Varolio',
            description: 'Unify sales communications, automate tasks, and harness AI...',
            tags: ['#personal assistant', ' #sales'],
            buttonText: 'Free Trial',
            cate: 'Marketing'
        },
        {
            icon: icon15,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#727272"],
            title: 'Shuffll',
            description: 'Revolutionize video production with AI: script to screen, fast, affordable,...',
            tags: ['#marketing', "education"],
            buttonText: 'Paid',
            cate: 'Marketing',

        },
        {
            icon: icon16,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'KeywordSearch',
            description: 'Optimize ad targeting and keyword strategy with AI-driven insights for...',
            tags: ['#social media', ' #marketing', '#education'],
            buttonText: 'Free Trial',
            cate: 'Marketing',
        },
        {
            icon: icon17,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'TeamSmartAI',
            description: 'Assemble your AI team and become more productive...',
            tags: ['#productivity'],
            buttonText: 'Freemium',
            cate: 'Productivity',
        },
        {
            icon: icon18,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Bard for Google',
            description: 'Bard for Google Pro - the revolutionary AI-driven Chrome',
            tags: ['#productivity'],
            buttonText: 'Free',
            cate: 'Productivity',

        },
        {
            icon: icon19,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Productivity Pets',
            description: 'Task management and productivity tracking...',
            tags: ['#Productivity'],
            buttonText: 'Free',
            cate: 'Productivity',

        },
        {
            icon: icon20,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Productivity Vibes',
            description: 'Boost productivity with 100s of ChatGPT prompts for home and...',
            tags: ['#prompt generator'],
            buttonText: 'Free',
            cate: 'Productivity',
        },
        {
            icon: icon21,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Unreal Speech',
            description: 'Low cost Text-to-Speech API with human-like AI voices...',
            tags: ['#text to speech', " #research"],
            buttonText: 'Freemium',
            cate: 'Text to Speech',
        },
        {
            icon: icon22,
            star: ["#FF9635", "#727272", "#727272", "#727272", "#727272"],
            title: 'Speechify',
            description: 'Transform text into lifelike speech, enhancing accessibility and...',
            tags: ['#text to speech'],
            buttonText: 'Freemium',
            cate: 'Text to Speech',
        },
        {
            icon: icon23,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Suno AI Bark',
            description: 'Transform text into diverse, realistic audio with generative AI technology...',
            tags: ['#Music', " #audio editing", " #text to speech"],
            buttonText: 'Free',
            cate: 'Text to Speech',
        },
        {
            icon: icon24,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Murf',
            description: 'Elevate content with lifelike AI voiceovers in 20+ languages and..',
            tags: ['#marketing', " #education", " #text to speech"],
            buttonText: 'Free Trial',
            cate: 'Text to Speech',
        },
        {
            icon: icon25,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Gizzmo',
            description: 'Gizzmo WP plugin creates Amazon affiliate articles in just two clicks...',
            tags: ['#SEO', " #copywriter"],
            buttonText: 'Free Trial',
            cate: 'SEO',
        },
        {
            icon: icon26,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'MarketMuse',
            description: 'Revolutionize content strategy with AI-driven research, planning, and...',
            tags: ['#marketing', " #SEO", " #research"],
            buttonText: 'Freemium',
            cate: 'SEO',
        },
        {
            icon: icon27,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'SEO Content AI',
            description: 'Maximize your online presence with AI-driven, SEO-optimized content...',
            tags: ['#marketing', " #SEO", " #research"],
            buttonText: 'Freemium',
            cate: 'SEO',
        },
        {
            icon: icon28,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Drafthorse AI',
            description: 'Boost online presence with AI-driven, SEO-optimized content',
            tags: ['#marketing', " #SEO"],
            buttonText: 'Free Trial',
            cate: 'SEO',
        },
    ],
    alldata: [
        {
            icon: icon14,
            star: ["#FF9635", "#FF9635", "#FF9635", "#727272", "#727272"],
            title: 'Jasper',
            description: 'An AI-driven platform for efficient, high-quality content creation and...',
            tags: ['#marketing', ' #storyteller'],
            buttonText: 'Free Trial',
            cate: 'Marketing',

        },
        {
            icon: icon5,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Copy.ai',
            description: 'Generate compelling copy that converts with the help of AI-...',
            tags: ['#marketing', ' #copywriting', ' #writing generator'],
            buttonText: 'Freemium',
            cate: 'Marketing',
        },
        {
            icon: icon5,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Writesonic',
            description: 'Boost productivity with AI: content, visuals, insights, and real-time data.',
            tags: ['#marketing', ' #ai chatbots', ' #copywriting'],
            buttonText: 'Freemium',
            cate: 'Marketing',
        },
        {
            icon: icon6,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Rytr',
            description: 'AI assistant crafts quality content swiftly across languages and tones.',
            tags: ['#writing generators', ' #storyteller', ' #copywriting'],
            buttonText: 'Freemium',
            cate: 'Marketing',
        },
        {
            icon: icon8,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Canva',
            description: 'An AI-enhanced graphic design platform that simplifies the creatio...',
            tags: ['#design generator', ' #social media'],
            buttonText: 'Freemium',
            cate: 'Marketing',
        },
        {
            icon: icon3,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Midjourney',
            description: 'Unlock digital artistic: AI transforms text into stunning visuals, seamlessly via Discord.',
            tags: ['#image generator'],
            buttonText: 'Free Trial',
            cate: 'Logo Generator',
        },
        {
            icon: icon8,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Dall-E 3',
            description: 'Revolutionize imagery with AI: from text prompts to vivid visuals.',
            tags: ['#images generator', ' #text to image'],
            buttonText: 'Contact for Pricing',
            cate: 'Marketing',
        },
        {
            icon: icon16,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Adobe Firefly',
            description: 'Transform text into vibrant images and designs, boosting creativity...',
            tags: ['#design generator', ' #image generator', ' #text to image'],
            buttonText: 'Paid',
            cate: 'Marketing',
        },
        {
            icon: icon20,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Remove.bg',
            description: 'Remove backgrounds in 5 secs with one click',
            tags: ['#image editing'],
            buttonText: 'Free Trial',
            cate: 'Marketing',
        },
        {
            icon: icon11,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Adobe Photoshop',
            description: 'Video Tap is an AI-powered tool that helps individuals and businesses...',
            tags: ['#video generator', "#video editing"],
            buttonText: 'Paid',
            cate: 'Video Editor',
        },
        {
            icon: icon10,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#727272"],
            title: 'ThumbnailAi',
            description: 'Maximize clicks with AI-driven thumbnail effectiveness ratings.',
            tags: ['#design generator', " #social media"],
            buttonText: 'Free',
            cate: 'Video Editor',
        },
        {
            icon: icon28,
            star: ["#FF9635", "#FF9635", "#727272", "#727272", "#727272"],
            title: 'gemini',
            description: 'Harness multimodal AI for innovation, efficiency, and scalabili...',
            tags: ['#writing generator', " #code assistant", " #ai chatbots"],
            buttonText: 'Freemium',
            cate: 'Video Editor',
        },
        {
            icon: icon1,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#727272"],
            title: 'Chatgpt',
            description: 'Revolutionize interaction, creativity, and innovation with the leader in AI.',
            tags: ['#ai', ' #chatbot', ' #education'],
            buttonText: 'Free',
            cate: 'Logo Generator',
        },
        {
            icon: icon2,
            star: ["#FF9635", "#FF9635", "#FF9635", "#727272", "#727272"],
            title: 'Tome',
            description: 'Unlock your heart work with AI-powered generative storytelling from Tome.',
            tags: ['#storyteller', ' #presentations'],
            buttonText: 'Free',
            cate: 'Logo Generator',
        },
        // {
        //     icon: icon3,
        //     star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
        //     title: 'Midjourney',
        //     description: 'Unlock digital artistic: AI transforms text into stunning visuals, seamlessly via Discord.',
        //     tags: ['#image generator'],
        //     buttonText: 'Free Trial',
        //     cate: 'Logo Generator',
        // },
        {
            icon: icon4,
            star: ["#FF9635", "#FF9635", "#727272", "#727272", "#727272"],
            title: 'GSearch',
            description: 'Unlock the power of Beddit for deep market research and audience analysis with...',
            tags: ['#social media', ' #research'],
            buttonText: 'Freemium',
            cate: 'Logo Generator',
        },
        {
            icon: icon5,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Photo AI',
            description: 'Unleash AI-powered photo generation and personalized...',
            tags: ['#image generator', ' #avatars'],
            buttonText: 'Freemium',
            cate: 'Photo Editor',
        },
        {
            icon: icon6,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'AI Photo Filter',
            description: 'Revolutionize image editing: intuitive AI, precise layering,...',
            tags: ['#design generator', ' #e-commerce', "#image editor"],
            buttonText: 'Freemium',
            cate: 'Photo Editor',
        },
        {
            icon: icon7,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'HitPaw Photo AI',
            description: 'Your All-in-One Photo Editing Solution',
            tags: ['#image editing'],
            buttonText: 'Paid',
            cate: 'Photo Editor',
        },
        {
            icon: icon8,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Photo to Cartoon',
            description: 'Wanna stand out in social media? Convert face photo to cartoon and...',
            tags: ['#image editing'],
            buttonText: 'Free Trial',
            cate: 'Photo Editor',
        },
        {
            icon: icon9,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'VideoShorts',
            description: 'Transform YouTube content into engaging, shareable clips....',
            tags: ['#social media', ' #marketing', ' #video editing'],
            buttonText: 'Paid',
            cate: 'Video Editor',
        },
        {
            icon: icon10,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Videoleap',
            description: 'Videoleap is a powerful and creative video editing app created by...',
            tags: ['#video enhancer', ' #video editing'],
            buttonText: 'Free Trial',
            cate: 'Video Editor',
        },
        {
            icon: icon11,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Video Tap',
            description: 'Video Tap is an AI-powered tool that helps individuals and businesses...',
            tags: ['#video generator', "#video editing"],
            buttonText: 'Paid',
            cate: 'Video Editor',
        },
        {
            icon: icon12,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'AI Studios',
            description: 'Unlock the power of Beddit for deep market research and audience analysis with...',
            tags: ['#education', ' #video editing'],
            buttonText: 'Paid',
            cate: 'Video Editor'
        },
        {
            icon: icon13,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Varolio',
            description: 'Unify sales communications, automate tasks, and harness AI...',
            tags: ['#personal assistant', ' #sales'],
            buttonText: 'Free Trial',
            cate: 'Marketing'
        },
        // {
        //     icon: icon14,
        //     star: ["#FF9635", "#FF9635", "#FF9635", "#727272", "#727272"],
        //     title: 'Jasper',
        //     description: 'An AI-driven platform for efficient, high-quality content creation and...',
        //     tags: ['#marketing', ' #storyteller'],
        //     buttonText: 'Free Trial',
        //     cate: 'Marketing',

        // },
        {
            icon: icon15,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#727272"],
            title: 'Shuffll',
            description: 'Revolutionize video production with AI: script to screen, fast, affordable,...',
            tags: ['#marketing', " #education"],
            buttonText: 'Paid',
            cate: 'Marketing',

        },
        {
            icon: icon16,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'KeywordSearch',
            description: 'Optimize ad targeting and keyword strategy with AI-driven insights for...',
            tags: ['#social media', ' #marketing', ' #education'],
            buttonText: 'Free Trial',
            cate: 'Marketing',
        },
        {
            icon: icon17,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'TeamSmartAI',
            description: 'Assemble your AI team and become more productive...',
            tags: ['#productivity'],
            buttonText: 'Freemium',
            cate: 'Productivity',
        },
        {
            icon: icon18,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Bard for Google',
            description: 'Bard for Google Pro - the revolutionary AI-driven Chrome',
            tags: ['#productivity'],
            buttonText: 'Free',
            cate: 'Productivity',

        },
        {
            icon: icon19,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Productivity Pets',
            description: 'Task management and productivity tracking...',
            tags: ['#Productivity'],
            buttonText: 'Free',
            cate: 'Productivity',

        },
        {
            icon: icon20,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Productivity Vibes',
            description: 'Boost productivity with 100s of ChatGPT prompts for home and...',
            tags: ['#prompt generator'],
            buttonText: 'Free',
            cate: 'Productivity',
        },
        {
            icon: icon21,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Unreal Speech',
            description: 'Low cost Text-to-Speech API with human-like AI voices...',
            tags: ['#text to speech', " #research"],
            buttonText: 'Freemium',
            cate: 'Text to Speech',
        },
        {
            icon: icon22,
            star: ["#FF9635", "#727272", "#727272", "#727272", "#727272"],
            title: 'Speechify',
            description: 'Transform text into lifelike speech, enhancing accessibility and...',
            tags: ['#text to speech'],
            buttonText: 'Freemium',
            cate: 'Text to Speech',

        },
        {
            icon: icon23,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Suno AI Bark',
            description: 'Transform text into diverse, realistic audio with generative AI technology...',
            tags: ['#Music', " #audio editing", " #text to speech"],
            buttonText: 'Free',
            cate: 'Text to Speech',

        },
        {
            icon: icon24,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Murf',
            description: 'Elevate content with lifelike AI voiceovers in 20+ languages and..',
            tags: ['#marketing', " #education", " #text to speech"],
            buttonText: 'Free Trial',
            cate: 'Text to Speech',
        },
        {
            icon: icon25,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Gizzmo',
            description: 'Gizzmo WP plugin creates Amazon affiliate articles in just two clicks...',
            tags: ['#SEO', " #copywriter"],
            buttonText: 'Free Trial',
            cate: 'SEO',
        },
        {
            icon: icon26,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'MarketMuse',
            description: 'Revolutionize content strategy with AI-driven research, planning, and...',
            tags: ['#marketing', " #SEO", " #research"],
            buttonText: 'Freemium',
            cate: 'SEO',
        },
        {
            icon: icon27,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'SEO Content AI',
            description: 'Maximize your online presence with AI-driven, SEO-optimized content...',
            tags: ['#marketing', " #SEO", " #research"],
            buttonText: 'Freemium',
            cate: 'SEO',
        },
        {
            icon: icon28,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Drafthorse AI',
            description: 'Boost online presence with AI-driven, SEO-optimized content',
            tags: ['#marketing', " #SEO"],
            buttonText: 'Free Trial',
            cate: 'SEO',
        },
    ],
    toggle: 'hidden',
    ai: [{
        "Number": 1,
        "Tools_name": "Jasper",
        "overview": ["Jasper is an AI-powered content creation tool that assists users in generating various types of content quickly and efficiently. It can help with creating articles, blog posts, social media content, emails, ad copy, product descriptions, and more. Jasper uses advanced natural language processing (NLP) algorithms to understand user input and generate coherent and engaging content."],
        "feature": ["Offers over 50 templates for different content types like articles, blog posts, social media, emails, ads, and product descriptions. "," Customizable tone and style settings. "," Ability to generate content based on specific keywords or topics. "," Integration with popular platforms like WordPress, Shopify, and more. "," Collaboration features for teams. "," Revision history to track changes and edits. "," Create content in over 30 languages. "," Improve your content's search by optimized for search engines, increasing visibility and reach. "," Boss mode use to Craft long-form content with Jasper's advanced features. "," Assists in crafting SEO-friendly content, contributing to improved visibility and search engine rankings."],
        "probleam_solving": ["Jasper AI tool solves the problem of content creation like it addresses the challenges of producing high-quality, engaging, and SEO-optimized content across different formats such as blog posts, ad copy, email campaigns, and social media updates."," By leveraging advanced AI algorithms and machine learning capabilities, Jasper AI streamlines the content creation process, saving time and enhancing productivity for individuals, businesses, and marketing teams."],
        "how_it_help": ["Content Creation"," Brand Voice Integration"," SEO Optimization","Conversational AI","Real-time Language Processing"," Project Management"],
        "rating": " 4.2 out of 5 stars",
        "pros": ["Saves time and effort in content creation.","Offers a wide range of content types and over 50 Versatile Templates.","Easy to use with customizable settings.","Can generate content on-demand."," Creates high-quality, creative content.","User-friendly interface."," SEO Optimization"],
        "cons": ["May produce generic or repetitive content.","Requires human review and editing for quality assurance.","Pricing may be a concern for some users even free plan has limitations.","Limitations in Understanding Complex Instructions.","Depending on the content, Jasper's output may require heavy editing for a more polished end product.","Jasper may struggle with niche topics or complex subjects, requiring more manual input from users."]
    }],
    aiAll: output,
    aiCardData:[
        {
            icon: icon14,
            star: ["#FF9635", "#FF9635", "#FF9635", "#727272", "#727272"],
            title: 'Jasper',
            description: 'An AI-driven platform for efficient, high-quality content creation and...',
            tags: ['#marketing', ' #storyteller'],
            buttonText: 'Free Trial',
            cate: 'Marketing',

        },
    ],
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        CheckBtn: (state, action) => {
            state.DarkBtn = action.payload;
        },

        categorydata: (state, action) => {
            const category = action.payload;
            const filteredData = state.alldata.filter((item) => {
                return item.cate === category;
            });
            console.log(filteredData);
            return {
                ...state,
                cards: filteredData
            };
        },
        searchData: (state, action) => {
            let searchText = action.payload;
            let filteredData = state.alldata.filter((item) => {
                const { title, tags } = item;
                searchText = searchText.toLowerCase();
                return title.toLowerCase().includes(searchText) || tags.some((tag) => tag.toLowerCase().includes(searchText));
            });

            state.cards = [...filteredData];
            console.log(state.cards)
        },
        changeToggle: (state, action) => {
            if (action.payload === 'visible') {
                state.toggle = 'visible'
            }
            else if (action.payload === 'hidden') {
                state.toggle = 'hidden'
            }
        },

        aiData: (state, action) => {
            let title = action.payload;
            let AiFilteredData = state.aiAll.filter((item) => {
                return item.Tools_name.toLowerCase()===title.toLowerCase()
            })

            let AiCateFilteredData = state.alldata.filter((item) => {
                return item.title.toLowerCase()===title.toLowerCase()
            })
            return {
                ...state,
                ai: AiFilteredData,
                aiCardData: AiCateFilteredData
            };
        
        }
    }
});

export const { changeMode, categorydata, CheckBtn, searchData, changeToggle, aiData } = counterSlice.actions;


export default counterSlice.reducer;
