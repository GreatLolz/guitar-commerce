export interface Product {
    id: string,
    imageUrl: string,
    name: string,
    description: string,
    price: number,
    category: string,
    brand: string,
    stock: number,
    rating: number,
    reviewsCount: number
}

export const FILTERS = [
    { id: 'guitars', name: 'Guitars' },
    { id: 'basses', name: 'Basses' },
    { id: 'drums', name: 'Drums' },
    { id: 'amps-effects', name: 'Amps & Effects' },
    { id: 'keys-midi', name: 'Keys & MIDI' },
    { id: 'recording', name: 'Recording' },
    { id: 'accessories', name: 'Accessories' },
]