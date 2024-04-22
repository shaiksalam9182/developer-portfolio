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
        role: 'AWS Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'AI Powered Search Engine for OTT platforms',
        description: 'I spearheaded the design and development of an advanced search engine that enhances traditional string-based searches with contextual understanding. Utilizing OpenAI models, we generated embeddings for the search content to capture the deeper meaning and context of user queries. These embeddings are stored and efficiently queried using Elasticsearch, enabling a dynamic and responsive search experience. This powerful search engine mimics human-like comprehension, allowing it to interpret queries contextually and deliver highly relevant content to users. The integration of cutting-edge AI with robust search technology significantly improves the accuracy and relevance of search results.',
        tools: ['Elastic Search','Python', 'OpenAI API', 'AWS Lambda', 'AWS S3', 'MySQL', 'AWS API Gateway'],
        role: 'AWS Developer',
        code: '',
        demo: '',
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