'use strict'
const bars=document.querySelector('.bars')
const links=document.querySelector('.links')
const bar1=document.querySelector('.bar')
const bar2=document.querySelector('.bar2')
const bar3=document.querySelector('.bar3')


bars.addEventListener('click',function(){
    bar2.classList.toggle('hidden')
    bar1.classList.toggle('rotate')
    bar3.classList.toggle('rotate2')

    links.classList.toggle('hidden')
})