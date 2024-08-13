const configurations = {
    // Site metadata and SEO
    metadata: {
        title: 'Eastern Peak Investments ©',  // Site Title
        description: 'Maximizing investments to the peak.',  // Site Description for SEO
        author: 'Virtue Technologies and Development',  // Author or maintainer of the site
        keywords: ["Investment", "Finance", "Business"],  // Array of SEO keywords
        baseUrl: 'www.easternpeak.com',  // Base URL of the website
        defaultImage: '',  // Default image for SEO and sharing
        language: 'en',  // Primary language of the website
        status: 'Website Under development...', //for website status
    },

    // Social media and contact information
    information: {
        email: 'easternpeakinvestments@gmail.com',  // Contact Email
        socialLinks: [
            { social: 'Instagram', url: '', icon: '' },
            // More social links as needed
        ],
    },

    // Routing for various user roles
    routes: {
        mainRoutes: [
            { route: 'home', url: '/', icon: '' },
            { route: 'shop', url: '/shop', icon: '' },
            { route: 'music', url: '/music', icon: '' },
            { route: 'gallery', url: '/gallery', icon: '' },
            { route: 'subscribe', url: '/subscribe', icon: '' },
            // More main routes
        ],
        authRoutes: [
            { route: 'Login', url: '/login', icon: '' },
            { route: 'Sign Up', url: '/signup', icon: '' },
            // More auth routes
        ],
        adminRoutes: [
            { route: 'Dashboard', url: '/admin/dashboard', icon: '' },
            // More admin routes
        ],
    },

    // Backend configuration
    backend: {
        apiUrl: '',  // API Base URL
        apiKey: '',  // API Key if needed
        dbUrl: '',  // Database URL if different from API
        dbPassword: '',  // Database password if needed
    },

    // Terms of service and other legal links
    legal: {
        termsOfServiceUrl: '',  // URL to the terms of service
        privacyPolicyUrl: '',  // URL to the privacy policy
        copyrightNotice: '',  // Copyright notice text
    },

    // Optional: Categories and other lists used in the site
    categoryList: [
        { category: 'Example', sub_categories: ['Sub-example'] },
        // More categories
    ],

    //profile example:
    prof: {
        "email": "johndoe@example.com",
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Software developer with a passion for creating web applications.",
        "title": "real one",
        "dateOfBirth": "1990-01-01",
    }


};

export default configurations;