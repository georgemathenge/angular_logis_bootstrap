# angular_logis_bootstrap
this project is a successful integration between angular project and logis bootstrap made template
points to note while integrating include ;
-Create new angular project.
-Copy assets from bootstrap template into angular's assets.
-Install bootstrap and add in angular json under styles and scripts.
-Install glightbox and add in angular json under scripts.
-Find a file called main.js, Add it as a script in angular json. 
-Install aos using <npm i --save @types/aos > (AOS is used in animations and is a key package)
-Import AOS like illustrated in the Angular component to be used.
<<
import * as AOS from 'aos';
>>
-Call AOS in ngOnInit as illustrated .
<<
AOS.init();
>>.
-That's it. Happy Coding !!
