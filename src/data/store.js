import {reactive} from 'vue';

export const store = reactive({
   apiUrl:"http://127.0.0.1:8000/api",
   endpoints:{
      projects: '/projects',
      categories: '/categories',
      technologies: '/technologies',
   },
   imgPath: "http://127.0.0.1:8000/storage/",
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
   ]

});