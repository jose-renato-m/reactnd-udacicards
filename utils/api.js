import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'MobileFlashcards: Decks'

/**
 * Get's all the decks of flashcards.
 * Using an async data approach with dummy data. Could mature to REST API later.
 */
export async function fetchAllDecks() {

}


// --------------------------------------------------------------------------------


const dummyData = {
    CapitalCities: {
        id: 'CapitalCities',
        title: 'Capital Cities',
        timestamp: 15637968800,
        created: '2020-02-09',
        questions: [
            {
                question: 'What is the capital of Canada?',
                answer: 'Ottawa',
            },
            {
                question: 'What is the capital of China?',
                answer: 'Beijing',
            },
            {
                question: 'What is the capital of Poland?',
                answer: 'Warsaw',
            },
            {
                question: 'What is the capital of Germany?',
                answer: 'Berlin',
            }
        ]
    },
    React: {
        id: 'React',
        title: 'React',
        timestamp: 1563710400,
        created: '2020-02-08',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
            }
        ]
    }
}