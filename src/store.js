//@ts-check
const housekeeping = require('./images/housekeeping.jpg');
const transportation = require('./images/driving.jpg');
const cooking = require('./images/cooking.jpg');
const money = require('./images/money.jpg');
const kid = require('./images/kid.jpg');
const car = require('./images/car.jpg');

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
            image: money,
            title: "Open A Bank Account",
            description: 'I work in banking and will help you open a bank account.',
            category: 'Finances',
            payment: true,
            name: 'Book this',
            button: '',
            link: 'post/',
            icon: 'fa-money-check-alt',
            author: {
                name: "Adil",
                image: "https://material-ui.com/static/images/uxceo-128.jpg"
            }
        },
        {
            image: car,
            title: "Help You Learn Driving",
            description: 'I can help you prepare for your driver license exam.',
            category: 'Transportation',
            payment: true,
            name: 'Book this',
            button: '',
            link: 'post/',
            icon: 'fa-car',
            author: {
                name: "Steve",
                image: "https://material-ui.com/static/images/uxceo-128.jpg"
            }
        },
        {
            image: kid,
            title: "I will baby sit your kids",
            description: 'I am an experienced nanny and am available to baby sit your kids. Enjoy your night out and let me take care of your kids.',
            category: 'Housekeeping',
            payment: true,
            name: 'Book this',
            button: '',
            link: 'post/',
            icon: 'fa-child',
            author: {
                name: "Sheela",
                image: "https://material-ui.com/static/images/uxceo-128.jpg"
            }
        },
        {
            image: "https://i.ndtvimg.com/i/2016-01/cleaning-kitchen-625_625x350_61454157830.jpg?downsize=630:380&output-quality=70&output-format=webp",
            title: "Cleaning House Weekly",
            description: 'I am available for cleaning living rooms, kitchens, bathrooms. Equipment will need to be provided.',
            category: 'cat',
            payment: true,
            name: 'Book this',
            button: '',
            link: 'post/',
            icon: 'fa-car',
            author: {
                name: "Adele A",
                image: "https://material-ui.com/static/images/uxceo-128.jpg"
            }
        },                        
        {
            image: "https://www.kveller.com/wp-content/uploads/2016/04/iStock_000031480158_Medium-1200x800.jpg",
            title: "Babysitting for ages 5-12",
            name: 'Cooking',
            description: 'I have 5 years of experience with babysitting in the Sammamish area. Available to drive to a location for providing these services.',
            category: 'cat',
            payment: true,
            button: '',
            link: 'post/',
            icon: 'fa-car',
            author: {
                name: "Adele A",
                image: "https://material-ui.com/static/images/uxceo-128.jpg"
            }
        },
        {
            image: "http://img1.mashed.com/img/gallery/easy-dishes-that-make-you-seem-like-a-professional-chef/intro.jpg",
            title: "English Style Dessert Catering",
            name: 'Housekeeping',
            description: 'In the Bellevue area, I can provide fast catering services for a wide array of desserts. Services can be provided for birthday parties, bachelor parties, weddings, and more.',
            category: 'cat',
            payment: true,
            button: '',
            link: 'post/',
            icon: 'fa-car',
            author: {
                name: "Adele A",
                image: "https://material-ui.com/static/images/uxceo-128.jpg"
            }
        },
        {
            image: "http://www.stlawu.edu/sites/default/files/page-images/ASUtutoring_003s_0.jpg",
            title: "Math Tutoring For Ages 12-14",
            name: 'Housekeeping',
            description: 'In Seattle area, I can drive to required location and tutor for middle school math including arithmetic, geometry and algebra.',
            category: 'cat',
            payment: true,
            button: '',
            link: 'post/',
            icon: 'fa-car',
            author: {
                name: "Adele A",
                image: "https://material-ui.com/static/images/uxceo-128.jpg"
            }
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