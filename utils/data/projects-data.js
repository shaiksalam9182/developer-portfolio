import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Recommendations Engine Using OpenAI Models',
        description: "I led the development and architectural design of a recommendation engine for an OTT platform, leveraging OpenAI models. Our approach involved generating content embeddings using OpenAI models and storing these embeddings on AWS S3 for efficient retrieval. To facilitate content recommendations, we utilized cosine similarity algorithms to identify content with high degrees of similarity. The results were then systematically stored in an RDS MySQL database. For content delivery, we implemented an API Gateway, which served the recommended content directly to end-users. This project required a thorough understanding of both AI technologies and cloud infrastructure, ensuring robust and scalable system performance",
        tools: ['Python', 'OpenAI API', 'AWS Lambda', 'AWS S3', 'MySQL', 'AWS API Gateway'],
        role: 'Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'AI Powered Search Engine for OTT platforms',
        description: 'I spearheaded the design and development of an advanced search engine that enhances traditional string-based searches with contextual understanding. Utilizing OpenAI models, we generated embeddings for the search content to capture the deeper meaning and context of user queries. These embeddings are stored and efficiently queried using Elasticsearch, enabling a dynamic and responsive search experience. This powerful search engine mimics human-like comprehension, allowing it to interpret queries contextually and deliver highly relevant content to users. The integration of cutting-edge AI with robust search technology significantly improves the accuracy and relevance of search results.',
        tools: ['Elastic Search','Python', 'OpenAI API', 'AWS Lambda', 'AWS S3', 'MySQL', 'AWS API Gateway'],
        role: 'Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Filmbox+ Android Mobile And TV App',
        description: 'This app was implemented for a client SPI Internation for both mobile and TV. It was developer in MVVM Architecture. It is an OTT streaming app. It contain all the major features what other OTT platform contains like live channels, Device managementm, On-Demand Video streaming etc.',
        tools: ['Kotlin','Java', 'Firebase', 'Exo Player'],
        role: 'Lead Developer',
        code: '',
        demo: 'https://play.google.com/store/apps/details?id=com.spiintl.filmbox',
        image: travel,
    },
    {
        id: 4,
        name: 'Film1 Android Mobile and TV App',
        description: 'This app was implemented for a client SPI Internation for both mobile and TV. It was developer in MVVM Architecture. It is an OTT streaming app. It contain all the major features what other OTT platform contains like live channels, Device managementm, On-Demand Video streaming etc.',
        tools: ['Kotlin','Java', 'Firebase', 'Exo Player'],
        role: 'Lead Developer',
        code: '',
        demo: 'https://play.google.com/store/apps/details?id=nl.chellomedia.film1',
        image: travel,
    },
    {
        id: 5,
        name: 'MotorSports Lightning App for Comcast set-top box ',
        description: 'This app provide On-Demand sports releted videos. It is made for Comcast box using Lightning.Js',
        tools: ['Lightning.js','Javascript', 'HLS.js'],
        role: 'Lead Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 6,
        name: 'Progresif Media Android Mobile App',
        description: 'This app contains both video and audio streaming. This app contains vasta data of podcast and videos. Audio streaming was implemented in this app along with video streaming',
        tools: ['Kotlin','Java', 'Firebase', 'Exo Player'],
        role: 'Lead Developer',
        code: '',
        demo: 'https://play.google.com/store/apps/details?id=com.progresif.radio',
        image: travel,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },