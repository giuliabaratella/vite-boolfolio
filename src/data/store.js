import {reactive} from 'vue';

export const store = reactive({
   apiUrl:"http://127.0.0.1:8000/api",
   endpoints:{
      projects: '/projects',
      categories: '/categories',
      technologies: '/technologies',
   },
   imgPath: "http://127.0.0.1:8000/storage/",
   projects:[],
   categories:[],
   technologies:[],
   socialLink:[
      {
         name:'facebook',
         icon:'fa-facebook'
      },
      {
         name:'linkedin',
         icon:'fa-linkedin-in'
      },
      {
         name:'whatsapp',
         icon:'fa-whatsapp'
      },
   ],
   codeSkills:[
      {
         name:'html',
         icon:'fa-html5',
      },
      {
         name:'css',
         icon:'fa-css3-alt'
      },
      {
         name:'sass',
         icon:'fa-sass',
      },
      {
         name:'javascript',
         icon:'fa-js',
      },
      
      {
         name:'php',
         icon:'fa-php',
      },
      {
         name:'laravel',
         icon:'fa-laravel'
      },
      {
         name:'vue',
         icon:'fa-vuejs'
      },
      {
         name:'node.js',
         icon:'fa-node',
      },
      {
         name:'github',
         icon:'fa-github',
      },

   ],
   designSkills:[
      {
         name:'photoshop',
         icon:'/img/design-icons/photoshop.png',
      },
      {
         name:'illustrator',
         icon:'/img/design-icons/illustrator.svg'
      },
      {
         name:'indesign',
         icon:'/img/design-icons/indesign.svg',
      },

   ]

});