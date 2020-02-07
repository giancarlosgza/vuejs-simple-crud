var courses = [{
        id: 1,
        name: 'Laravel',
        description: 'Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.',
        price: 200.00,
        website: 'https://laravel.com/',
        status: 'Online',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png'
    },
    {
        id: 2,
        name: 'AngularJS',
        description: 'Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces with Angular.',
        price: 100.00,
        website: 'https://angular.io/',
        status: 'Offline',
        img: 'https://sg.com.mx/sites/default/files/styles/570x500/public/images/angular-logo.png?itok=_4hR0cNu'
    },
    {
        id: 3,
        name: 'PHP',
        description: 'PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.',
        price: 160.00,
        website: 'https://www.php.net/',
        status: 'Online',
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg'
    },
    {
        id: 4,
        name: 'VueJs',
        description: 'Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
        price: 130.00,
        website: 'https://vuejs.org/',
        status: 'Online',
        img: 'https://vuejs.org/images/logo.png'
    },
    {
        id: 5,
        name: 'ReactJs',
        description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces..',
        price: 299.00,
        website: 'https://es.reactjs.org/',
        status: 'Offline',
        img: 'https://cdn.worldvectorlogo.com/logos/react.svg'
    },
    {
        id: 6,
        name: 'NodeJs',
        description: 'Node.js is designed to build scalable network applications.',
        price: 299.00,
        website: 'https://nodejs.org/es/',
        status: 'Offline',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png'
    },
    {
        id: 7,
        name: 'Flutter',
        description: 'Flutter is Google UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.  Flutter works with existing code, is used by developers and organizations around the world, and is free and open source.',
        price: 399.00,
        website: 'https://flutter.dev/',
        status: 'Online',
        img: 'https://www.arkasoftwares.com/images/android/flutterLogo.png'
    },
    {
        id: 8,
        name: 'Kotlin',
        description: 'Kotlin is a programming language for Android, mobile cross-platform and web development, server-side, native, and data science.',
        price: 199.00,
        website: 'https://kotlinlang.org/',
        status: 'Online',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/1024px-Kotlin-logo.svg.png'
    },
    {
        id: 9,
        name: 'Swift',
        description: 'Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond.',
        price: 299.00,
        website: 'https://developer.apple.com/swift/',
        status: 'Online',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1138px-Swift_logo.svg.png'
    },
    {
        id: 10,
        name: 'Python',
        description: 'Python is a programming language that lets you work quickly and integrate systems more effectively',
        price: 199.00,
        website: 'https://www.python.org/',
        status: 'Offline',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'
    },
    {
        id: 11,
        name: 'SASS',
        description: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
        price: 99.00,
        website: 'https://sass-lang.com/',
        status: 'Online',
        img: 'https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png'
    }
];

var profiles = [{
    id: 1,
    name: 'John',
    lastName: 'Doe',
    age: '21',
    img: 'https://image.flaticon.com/icons/svg/147/147144.svg'
}]

function findcourse(courseId) {
    return courses[findcourseKey(courseId)];
};

function findcourseKey(courseId) {
    for (var key = 0; key < courses.length; key++) {
        if (courses[key].id == courseId) {
            return key;
        }
    }
};

var List = Vue.extend({
    template: '#course-list',
    data: function () {
        return {
            courses: courses,
            searchKey: ''
        };
    },
    computed: {
        filteredcourses: function () {
            var self = this;
            console.log()
            return self.courses.filter(function (course) {
                return course.name.indexOf(self.searchKey) !== -1
            })
        }
    }
});

var Dashboard = Vue.extend({
    template: '#course-dashboard',
    data: function () {
        return {
            courses: courses,
            searchKey: ''
        };
    },
    computed: {
        filteredcourses: function () {
            var self = this;
            console.log()
            return self.courses.filter(function (course) {
                return course.name.indexOf(self.searchKey) !== -1
            })
        }
    }
});

var course = Vue.extend({
    template: '#course',
    data: function () {
        return {
            course: findcourse(this.$route.params.course_id)
        };
    }
});

var courseEdit = Vue.extend({
    template: '#course-edit',
    data: function () {
        return {
            course: findcourse(this.$route.params.course_id)
        };
    },
    methods: {
        updatecourse: function () {
            var course = this.course;
            courses[findcourseKey(course.id)] = {
                id: course.id,
                name: course.name,
                description: course.description,
                price: course.price,
                status: course.status,
                img: course.img,
            };
            router.push('/');
        }
    }
});

var courseDelete = Vue.extend({
    template: '#course-delete',
    data: function () {
        return {
            course: findcourse(this.$route.params.course_id)
        };
    },
    methods: {
        deletecourse: function () {
            courses.splice(findcourseKey(this.$route.params.course_id), 1);
            router.push('/');
        }
    }
});

var Addcourse = Vue.extend({
    template: '#course-add',
    data: function () {
        return {
            course: {
                name: '',
                description: '',
                price: '',
                status: '',
                img: '',
            }
        }
    },
    methods: {
        createcourse: function () {
            var course = this.course;
            courses.push({
                id: Math.random().toString().split('.')[1],
                name: course.name,
                description: course.description,
                price: course.price,
                status: course.status,
                img: course.img,
            });
            router.push('/');
        }
    }
});

var Profile = Vue.extend({
    template: '#profile',
    data: function () {
        return {
            profiles: profiles,
            courses: courses,
        };
    },
});

var Settings = Vue.extend({
    template: '#settings'
});

Vue.component('navbar-component', {
    template: '<nav class="navbar navbar-expand-lg navbar-white bg-white sticky-top"> <div class="container"> <router-link to="/" class="navbar-brand">VueJs CRUD</router-link> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNavDropdown"> <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <router-link to="/" class="nav-link"> <i class="material-icons-outlined">dashboard</i> </router-link> </li> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="material-icons-outlined">person</i> Username </a> <div class="dropdown-menu animate zoomIn" aria-labelledby="navbarDropdownMenuLink"> <router-link to="/profile" class="dropdown-item py-2"> <i class="material-icons-outlined mr-2">account_circle</i> Account</router-link> <router-link to="/settings" class="dropdown-item py-2"> <i class="material-icons-outlined mr-2">settings</i> Settings</router-link> <a class="dropdown-item py-2" href="../views/login.html"> <i class="material-icons-outlined mr-2">exit_to_app</i> Sign Out</a> </div> </li> </ul> <ul class="navbar-nav ml-auto">  <li class="nav-item"> <a class="nav-link ripple ripple-dark" href="#" id="sidebarCollapse2" data-toggle="tooltip" data-placement="bottom" title="Filters"> <i class="material-icons">filter_list</i> </a> </li> </ul> </div> </div> </nav>'
});

Vue.component('btn-fab-to-top',{
    template: `<button onclick="topFunction()" id="backTop" title="Go to top" class="animate zoomIn"><i
    class="material-icons-outlined">star</i></button>`
});

Vue.component('btn-fab-fav',{
    template: `<button class="btn-fab animate zoomIn" title="Favorite" ><i
    class="material-icons-outlined">star_border</i></button>`

});

Vue.component('btn-fab-new',{
    template: `<router-link to="/course-add" style="padding:13px" class="btn-fab btn-fab-responsive animate zoomIn" title="Add course" ><i
    class="material-icons-outlined">add</i></router-link>`
});

var router = new VueRouter({
    routes: [{
            path: '/',
            component: List
        },
        {
            path: '/course/:course_id',
            component: course,
            name: 'course'
        },
        {
            path: '/course-add',
            component: Addcourse
        },
        {
            path: '/course/:course_id/edit',
            component: courseEdit,
            name: 'course-edit'
        },
        {
            path: '/course/:course_id/delete',
            component: courseDelete,
            name: 'course-delete'
        },
        {
            path: '/course-dashboard',
            component: Dashboard
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/settings',
            component: Settings
        },
    ]
});

new Vue({
    el: '#app',
    router: router,
    template: '<router-view></router-view>'
});
