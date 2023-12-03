


window.addEventListener('load', function(){
    closedMenu();
    featuredPage();
    spinner();
  });


  function closedMenu(){
    document.querySelector('.menu').classList.add('close')
    document.querySelector('.page-content').classList.add('move')
  }

  function spinner(){
    const loader = document.querySelector('.loader')
  }



  function featuredPage(){
    document.querySelector('.featured').classList.add('active-icon')
  }


  /*setTimeout(function(){
    document.querySelector('body').classList.add('loading-filter');},4000);*/

  setTimeout(function(){
    document.querySelector('.loader').classList.add('loader-hidden');},3000);

  setTimeout(function(){
    document.querySelector('.loader-bg').classList.add('fadeout');},3000);
      
  setTimeout(function(){
    document.querySelector('.loader').classList.add('fadeout');},3000);

  setTimeout(function(){
    document.querySelector('.loader-bg').classList.add('disappear');},4000);
  
    setTimeout(function(){
    document.querySelector('.loader').classList.add('disappear');},4000);

const menu = document.getElementById('open-menu')

menu.addEventListener('click', function(){
    openMenu()
})

function openMenu(){
    document.querySelector('.menu').classList.toggle('close')
    document.querySelector('.page-content').classList.toggle('move')
    document.getElementById('popup1').classList.toggle('moved')
    document.getElementById('popup2').classList.toggle('moved')
    document.getElementById('popup3').classList.toggle('moved')
    document.getElementById('popup4').classList.toggle('moved')
    document.getElementById('popup5').classList.toggle('moved')
}


jQuery(document).ready(function(active){
    jQuery('.on').click(function(event){
        //remove all active classes
        jQuery('.active-icon').removeClass('active-icon');

        //add active class to the one we click
        jQuery(this).addClass('active-icon');
        event.preventDefault();
    });
});

/*CLICK TRIGGER?
jQuery('li.desc').click(function(){
    jQuery('.on').trigger('click');
    return false;
 });


$(document).on('click', 'li.desc', function(event) { 
    event.preventDefault(); 
    $('.on').trigger('click'); 
});
*/

jQuery(document).ready(function(){
    jQuery('.sticky-nav-li').click(function(event){
        //remove all active classes
        jQuery('.active-page').removeClass('active-page');
    
        //add active class to the one we click
        jQuery(this).addClass('active-page');

        event.preventDefault();
    });
});


jQuery(document).ready(function(){
    jQuery('.featured').click(function(event){
        jQuery('.blur').removeClass('blur');
        jQuery('.first').addClass('active-page')

        event.preventDefault();
    });
});


jQuery(document).ready(function(){
    jQuery('.sticky-nav-li').click(function(event){
        jQuery('.blur').removeClass('blur');
        jQuery('main').addClass('blur');

        event.preventDefault();
    });
});

jQuery(document).ready(function(){
    jQuery('.desc').click(function(event){
        jQuery('.blur').removeClass('blur');
        jQuery('main').addClass('blur');

        event.preventDefault();
    });
});

jQuery(document).ready(function(){
    jQuery('.first').click(function(event){
        jQuery('.blur').removeClass('blur');
        event.preventDefault();
    });
});


var toggleDiv = function (self, id) {
    var li = self.parentNode,
        contents = document.getElementsByClassName('popup-content'),
        mainMenu = document.getElementById('main-menu'),
        children = mainMenu.children,
        child = undefined,
        i = 0;

    // Loop over all content divs and show the active and hide all others.
    for (i = 0; i < contents.length; i++)
        contents[i].style.display = contents[i].id == id ? 'block' : 'none';

    // Loop over all menu items and add active class to the selected
    // and remove from others if applicable.
    for (i = 0; i < children.length; i++) {
        child = children[i];

        if (child === li) {
            child.className = (child.className + ' active-page').trim();
        } else {
            if (child.className.indexOf('active-page') > -1) {
                child.className = child.className.replace('active-page', '').trim();
            }
        }
    }
}
  
















/*ATTEMPTS*/


/*let active = document.querySelectorAll(".on")
let items = document.querySelectorAll(".square")
for(let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function(){
        active.classList.add('active-icon')
    })
}*/


/*const items = document.querySelectorAll('.square')

const active = document.querySelectorAll('.on')

items.addEventListener('click', function(){
    pageActive()
})

function pageActive(){
    active.classList.toggle('active-icon')
}*/




/*const sidebarMenu = menu.querySelectorAll('li')
sidebarMenu.addEventListener('click', function(){
    clickMenu;
})
function clickMenu(){
    document.querySelector('.on').classList.toggle('active-icon')
}*/


/*jQuery(document).ready(function(){
    jQuery('.desc').click(function(event){
        //remove all active classes
        jQuery('.active-icon').removeClass('active-icon');

        //add active class to the one we click
        jQuery('.on').addClass('active-icon');
        event.preventDefault();
    });
}); CLOSEST ATTEMPT1*/



/*CLOSEST ATTEMPT2
jQuery(document).ready(function(){
    jQuery('.menu-list').find('.desc').click(function(event){
        //remove all active classes
        jQuery('.active-icon').removeClass('active-icon');
        //add active class to the one we click
        jQuery('.desc').find('.on').addClass('active-icon');
        event.preventDefault();
    });
});*/

/*EVEN CLOSER ATTEMPT
jQuery(document).ready(function(){
    jQuery('.desc').click(function(event){
        //remove all active classes
        jQuery('.active-icon').removeClass('active-icon');

        //add active class to the one we click
        jQuery('.desc.on').addClass('active-icon');
        event.preventDefault();
    });
});
*/

/*MORE SIMPLIFIED
jQuery(document).ready(function(){
    jQuery('.desc').click(function(event){
        //remove all active classes
        //jQuery('.active-icon').removeClass('active-icon');

        //add active class to the one we click
        jQuery('.desc.on').toggle('active-icon');
        event.preventDefault();
    });
});
*/