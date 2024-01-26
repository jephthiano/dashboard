import $ from 'jquery';

//toggle modal
export const toggle_modal = (type,id,mode='slow') => {
    if(type === 'show'){
        $('#'+id).fadeIn(mode)
    }else if(type === 'hide'){
        $('#'+id).fadeOut(mode)
    }
}


export const toggle_func = (id) => {
    const modal = document.getElementsByClassName('modal');
    for(let i = 0; i < modal.length; i++){
        if(modal[i].id !== id){
            modal[i].style.display = "none";
        }
    }

    const x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


export const horNav = (clk_s) =>{
    let x = document.getElementsByClassName("nav");
    for(let i = 0; i < x.length; i++){x[i].style.borderRight="0px";} //remove all border
    document.getElementById(clk_s).style.borderRight='3px solid'; //set only the click border
    // //set all icon to plus
    // $('.laucher').each(function(){
    //   $(this).removeClass('fas fa-minus-circle');$(this).addClass('fas fa-plus-circle');
    // })
    // //change the icon of clicked button to minus
    // clk.removeClass('fas fa-plus-circle');clk.addClass('fas fa-minus-circle');
  }