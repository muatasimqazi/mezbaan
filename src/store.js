//@ts-check
const housekeeping = require('./images/housekeeping.jpg');
const transportation = require('./images/driving.jpg');
const cooking = require('./images/cooking.jpg');

export const features = [
    {
        image: housekeeping,
        title: "Housekeeping",
        button: 'Learn More',
        link: 'features/one',

    },
    {
        image: cooking,
        title: "Cooking",
        button: 'Learn More',
        link: 'features/one',

    },
    {
        image: transportation,
        title: "Transpotation",
        button: 'Learn More',
        link: 'features/one',
    }
]
export
    const gigs = [
        {
            image: "https://i.ndtvimg.com/i/2016-01/cleaning-kitchen-625_625x350_61454157830.jpg?downsize=630:380&output-quality=70&output-format=webp",
            title: "Cleaning House Weekly",
            name: 'Book this',
            button: '',
            link: 'post/something',
        },
        {
            image: "https://www.kveller.com/wp-content/uploads/2016/04/iStock_000031480158_Medium-1200x800.jpg",
            title: "Babysitting for ages 5-12",
            name: 'Cooking',
            button: '',
            link: 'post/something',
        },
        {
            image: "http://img1.mashed.com/img/gallery/easy-dishes-that-make-you-seem-like-a-professional-chef/intro.jpg",
            title: "English Style Dessert Catering",
            name: 'Housekeeping',
            button: '',
            link: 'post/something',
        },
        {
            image: "http://www.stlawu.edu/sites/default/files/page-images/ASUtutoring_003s_0.jpg",
            title: "Math Tutoring For Ages 12-14",
            name: 'Housekeeping',
            button: '',
            link: 'post/something',
        },
        
    ]
export const explainers = [
    {
        title: 'Search',
        description: 'Lookup a service hosted in our marketplace.',
        icon: 'fa-search'
    },
    {
        title: 'Confirm',
        description: 'Upon finding a suitable service, confirm your interest in the service.',
        icon: 'fa-credit-card'
    },
    {
        title: 'Connect',
        description: 'Now, connect with the service provider through phone or email',
        icon: 'fa-phone'
    },
]


export const suggestions = [
    { label: 'One' },
    { label: 'Two' },
    { label: 'Three' },
    { label: 'Four' },
];