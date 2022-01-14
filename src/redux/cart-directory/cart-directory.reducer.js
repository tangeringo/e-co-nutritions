const CART_ITEM_DATA = {
    sections: [
        {
            id: 1,
            title: 'nuts',
            imageUrl: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            linkUrl: ''
        },
        {
            id: 2,
            title: 'seafood',
            imageUrl: 'https://images.pexels.com/photos/6955638/pexels-photo-6955638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            linkUrl: ''
        },
        {
            id: 3,
            title: 'legumes',
            imageUrl: 'https://images.pexels.com/photos/3298693/pexels-photo-3298693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            linkUrl: ''
        },
        {
            id: 4,
            title: 'dairy',
            imageUrl: 'https://images.pexels.com/photos/4661506/pexels-photo-4661506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            linkUrl: ''
        },
        {
            id: 5,
            title: 'fruits',
            imageUrl: 'https://images.pexels.com/photos/4113834/pexels-photo-4113834.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            linkUrl: ''
        },
        {
            id: 6,
            title: 'meats',
            imageUrl: 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            linkUrl: ''
        }
        
    ]
}

const cartDirectoryReducer = (state = CART_ITEM_DATA, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default cartDirectoryReducer;
