//import delle pagine dalle quali è composto il applicazione
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/login/login.vue"
import Register from "../views/register/register.vue"
import Home from "../views/home/home.vue"
import Account from "../views/account/account.vue"
import Booking from "../views/booking/booking.vue"
import NewBooking from "../views/createBooking/createBooking.vue"
import bookingList from "../views/bookingList/bookingList.vue"

Vue.use(VueRouter);


//vengono definiti i percorsi delle pagine dell'applicazione per effettuare il reindirizzamento

const routes = [
    //redirect alla pagina di home
    {
        path: '/',
        redirect: {
            name: "home"
        }
    },
    //pagina di login
    {
        path: "/login",
        name: "login",
        component: Login
    },
    //pagina di registrazione
    {
        path: "/registrati",
        name: "register",
        component: Register
    },
    //pagina di home
    {
        path: "/home",
        name: "home",
        component: Home,
        meta: {
            requiresAuth: true,
            breadcrumb: 'Home'
        }
    },
    
    
    //pagina per creare una nuova prenotazione
    {
        path: '/booking',
        name: "bookingList",
        component: bookingList,
        meta: {
            requiresAuth: true,
            breadcrumb: 'Prenotazioni'
        },
        children:[
            //pagina per creare una nuova prenotazione
            {
                path: "new",
                name: "newBooking",
                component: NewBooking,
                meta: {
                    requiresAuth: true,
                    breadcrumb: 'Nuova Prenotazione'
                },
            },
            //pagina contenente l'elenco delle prenotazioni
            {
                path: ":id",
                name: "booking",
                component: Booking,
                meta: {
                    requiresAuth: true,
                    breadcrumb: 'Dettaglio Prenotazione'
                }
            }
        ]
    },
    //pagina di gestione dell'account utente
    {
        path: "/gestione-account",
        name: 'account',
        component: Account,
        meta: {
            requiresAuth: true,
            breadcrumb: "Gestione dell' account"
        }
    }
]

//dichiarazione del router utilizzato per controllare se l'utente è loggato
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
//viene controllato se l'utente è loggato attraverso il token
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth == true && !localStorage.token) {

        next('login');
    }
    else {
        next();
    }
});

export default router