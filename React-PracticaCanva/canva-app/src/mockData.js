import { v4 as uuidv4 } from 'uuid';

const mockData = [
    {
        id : uuidv4(),
        title : "😪 Por hacer",
        task : [
            {
                id : uuidv4(),
                title : "📚 Estudiar japones",
            },
            {
                id : uuidv4(),
                title : "📚 Estudiar grid y flex box",
                
            },
            {
                id : uuidv4(),
                title : "📚 Estudiar css",
            }
        ]
    },
    {
        id : uuidv4(),
        title : "🥳 En proceso",
        task : [
            {
                id : uuidv4(),
                title : "📚 Estudiar react",
            },
            {
                id : uuidv4(),
                title : "📚 Estudiar react native",
            },
            {
                id : uuidv4(),
                title : "📚 Estudiar nodejs",
            }
        ]
    },
    {
        id : uuidv4(),
        title : "🤩 Hecho",
        task : [
            {
                id : uuidv4(),
                title : "📚 Estudiar javascript",
            },
            {
                id : uuidv4(),
                title : "📚 Estudiar html",
            },
            {
                id : uuidv4(),
                title : "📚 Estudiar ruso",
            }
        ]
    }
]

export default mockData;