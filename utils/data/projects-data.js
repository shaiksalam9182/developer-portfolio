import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Recommendations Engine Using OpenAI Models',
        description: "Built a Recommendation Engine using Open AI models. This is for a OTT platform. By using OpenAI models, we generated Embeddings for the OTT Content and stored the Embedings in the AWS S3. Using Cosine similarity, we genrated similar contents for each content and stored them RDS Mysql Database. By using API Gateway API these similar contents will be served to the end users. I was responsible for designing architecture and the development of this project",
        tools: ['Python', 'OpenAI API', 'AWS Lambda', 'AWS S3', 'MySQL', 'AWS API Gateway'],
        role: 'AWS Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'AI Powered Search Engine for OTT platforms',
        description: 'I have designed and developed a serch engine that not only search based on string comparison but also based on the context of the search query. This was implemented using OpenAI models and Elastic search. Embeddings will be generated using Open AI models for search content. These embeddings are stored and queried using Elastic search. This is power full search engine which will understand the user query like normal human and provides similar contents to user',
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