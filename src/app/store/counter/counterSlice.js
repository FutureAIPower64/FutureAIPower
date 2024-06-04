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

    const initialState = {
        cards: [
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
                icon: icon3, 
                star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
                title: 'Midjourney',
                description: 'Unlock digital artistic: AI transforms text into stunning visuals, seamlessly via Discord.',
                tags: ['#image generator'],
                buttonText: 'Free Trial', 
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
                icon: icon14, 
                star: ["#FF9635", "#FF9635", "#FF9635", "#727272", "#727272"],
                title: 'Jasper',
                description: 'An AI-driven platform for efficient, high-quality content creation and...',
                tags: ['#marketing', ' #storyteller'],
                buttonText: 'Free Trial', 
                cate: 'Marketing',

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
                icon: icon3, 
                star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
                title: 'Midjourney',
                description: 'Unlock digital artistic: AI transforms text into stunning visuals, seamlessly via Discord.',
                tags: ['#image generator'],
                buttonText: 'Free Trial', 
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
                icon: icon14, 
                star: ["#FF9635", "#FF9635", "#FF9635", "#727272", "#727272"],
                title: 'Jasper',
                description: 'An AI-driven platform for efficient, high-quality content creation and...',
                tags: ['#marketing', ' #storyteller'],
                buttonText: 'Free Trial', 
                cate: 'Marketing',

            },
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
                tags: ['#social media', ' #marketing',' #education'],
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
        toggle:'hidden',
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
                    const { title,tags } = item;
                    searchText=searchText.toLowerCase();
                    return title.toLowerCase().includes(searchText) || tags.some((tag) => tag.toLowerCase().includes(searchText));
                });

                state.cards = [...filteredData];
                console.log(state.cards)
            },
            changeToggle: (state, action) => {
                if(action.payload==='visible'){
                    state.toggle='visible'
                }
                else if(action.payload==='hidden'){
                    state.toggle='hidden'
                }
            }
        }
    });

    export const { changeMode, categorydata,CheckBtn,searchData,changeToggle } = counterSlice.actions;


    export default counterSlice.reducer;
